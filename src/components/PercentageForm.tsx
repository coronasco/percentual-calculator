"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";
import {
  percentOf,
  whatPercentOf,
  percentChange,
  markup,
  markdown,
  compoundInterest,
  type CalculationResult,
  formatNumber,
} from "@/lib/percentageUtils";
import ResultCard from "./ResultCard";
import {
  Calculator,
  Percent,
  TrendingUp,
  RefreshCw,
  Copy,
  Share2,
  Info,
  DollarSign,
  TrendingDown,
  Banknote,
  Download,
  Trash2,
  Keyboard,
  Clock,
} from "lucide-react";

const options = [
  {
    value: "percentOf",
    label: "What is X% of Y?",
    icon: <Percent className="w-4 h-4" />,
    tooltip: "Calculate what is X percent of Y. Example: What is 25% of 200?",
    placeholder1: "X (%)",
    placeholder2: "Y",
  },
  {
    value: "whatPercentOf",
    label: "X is what percent of Y?",
    icon: <Calculator className="w-4 h-4" />,
    tooltip: "Find out what percent X is of Y. Example: 50 is what percent of 200?",
    placeholder1: "X",
    placeholder2: "Y",
  },
  {
    value: "percentChange",
    label: "Percentage change from A to B",
    icon: <TrendingUp className="w-4 h-4" />,
    tooltip: "Calculate the percentage change from A to B. Example: Change from 100 to 150",
    placeholder1: "Initial value (A)",
    placeholder2: "Final value (B)",
  },
  {
    value: "markup",
    label: "Price markup",
    icon: <DollarSign className="w-4 h-4" />,
    tooltip: "Calculate final price with markup. Example: $100 with 20% markup",
    placeholder1: "Original price ($)",
    placeholder2: "Markup (%)",
  },
  {
    value: "markdown",
    label: "Price discount",
    icon: <TrendingDown className="w-4 h-4" />,
    tooltip: "Calculate final price with discount. Example: $100 with 15% discount",
    placeholder1: "Original price ($)",
    placeholder2: "Discount (%)",
  },
  {
    value: "compoundInterest",
    label: "Compound interest",
    icon: <Banknote className="w-4 h-4" />,
    tooltip: "Calculate compound interest. Example: $1000 at 5% for 3 years",
    placeholder1: "Principal ($)",
    placeholder2: "Rate (%)",
  },
];

type CalcType = "percentOf" | "whatPercentOf" | "percentChange" | "markup" | "markdown" | "compoundInterest";

type HistoryItem = {
  type: CalcType;
  input1: string;
  input2: string;
  input3?: string; // For compound interest (time)
  result: string;
  date: number;
  favorite?: boolean;
};

export default function PercentageForm() {
  const [type, setType] = useState<CalcType>("percentOf");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState(""); // For compound interest time
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        return JSON.parse(localStorage.getItem("pct-history") || "[]");
      } catch {
        return [];
      }
    }
    return [];
  });
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const [precision, setPrecision] = useState(2);
  const resultRef = useRef<HTMLDivElement>(null);
  const input1Ref = useRef<HTMLInputElement>(null);

  // Auto-focus on first input
  useEffect(() => {
    if (input1Ref.current) {
      input1Ref.current.focus();
    }
  }, [type]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        calculate();
      }
      if (e.key === "Escape") {
        e.preventDefault();
        reset();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input1, input2, input3, type, calculate]);

  function calculate() {
    const x = parseFloat(input1);
    const y = parseFloat(input2);
    const z = parseFloat(input3);

    if (isNaN(x) || isNaN(y)) {
      toast.error("Please enter valid numbers");
      return;
    }

    let calcResult: CalculationResult;

    switch (type) {
      case "percentOf":
        calcResult = percentOf(x, y);
        break;
      case "whatPercentOf":
        calcResult = whatPercentOf(x, y);
        break;
      case "percentChange":
        calcResult = percentChange(x, y);
        break;
      case "markup":
        calcResult = markup(x, y);
        break;
      case "markdown":
        calcResult = markdown(x, y);
        break;
      case "compoundInterest":
        if (isNaN(z) || z <= 0) {
          toast.error("Please enter a valid time period");
          return;
        }
        calcResult = compoundInterest(x, y, z);
        break;
      default:
        return;
    }

    if (calcResult.error) {
      toast.error(calcResult.error);
      return;
    }

    setResult(calcResult);
    toast.success("Calculation completed!");

    // Save to history
    const newItem: HistoryItem = {
      type,
      input1: input1,
      input2: input2,
      input3: type === "compoundInterest" ? input3 : undefined,
      result: formatNumber(calcResult.result, precision),
      date: Date.now(),
    };

    setHistory((prev) => {
      const updated = [newItem, ...prev.filter(h => 
        !(h.type === type && h.input1 === input1 && h.input2 === input2)
      )].slice(0, 20);
      if (typeof window !== "undefined") {
        localStorage.setItem("pct-history", JSON.stringify(updated));
      }
      return updated;
    });
  }

  function reset() {
    setInput1("");
    setInput2("");
    setInput3("");
    setResult(null);
    setType("percentOf");
    toast.info("Form reset");
  }

  function handleCopy() {
    if (result) {
      const textToCopy = `${result.explanation}\nFormula: ${result.formula}`;
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      toast.success("Result copied to clipboard!");
      setTimeout(() => setCopied(false), 1500);
    }
  }

  async function handleShare() {
    if (result && navigator.share) {
      try {
        await navigator.share({
          title: "Percentage Calculator Result",
          text: `${result.explanation}\nFormula: ${result.formula}`,
          url: window.location.href,
        });
        setShared(true);
        toast.success("Result shared!");
        setTimeout(() => setShared(false), 1500);
      } catch {
        toast.error("Failed to share");
      }
    }
  }

  function exportHistory() {
    const dataStr = JSON.stringify(history, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `percentage-calculations-${new Date().toISOString().split("T")[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("History exported!");
  }

  function clearHistory() {
    setHistory([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("pct-history");
    }
    toast.success("History cleared!");
  }

  function toggleFavorite(item: HistoryItem) {
    setHistory((prev) => {
      const updated = prev.map(h => 
        h.date === item.date ? { ...h, favorite: !h.favorite } : h
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("pct-history", JSON.stringify(updated));
      }
      return updated;
    });
  }

  const currentOption = options.find(opt => opt.value === type);

  return (
    <TooltipProvider>
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5" aria-hidden="true" />
            Advanced Percentage Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form
            onSubmit={e => {
              e.preventDefault();
              calculate();
            }}
            className="space-y-4"
            aria-label="Percentage calculation form"
          >
            {/* Calculation Type Selector */}
            <div className="flex items-center gap-2">
              <Select value={type} onValueChange={v => setType(v as CalcType)}>
                <SelectTrigger className="flex-1" aria-label="Select calculation type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {options.map(opt => (
                    <SelectItem key={opt.value} value={opt.value}>
                      <div className="flex items-center gap-2">
                        {opt.icon}
                        <span>{opt.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Get help for current calculation type">
                    <Info className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">{currentOption?.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="input1" className="sr-only">
                  {currentOption?.placeholder1}
                </label>
                <Input
                  ref={input1Ref}
                  id="input1"
                  type="number"
                  placeholder={currentOption?.placeholder1}
                  value={input1}
                  onChange={e => setInput1(e.target.value)}
                  required
                  step="any"
                  aria-describedby="input1-help"
                />
              </div>
              <div>
                <label htmlFor="input2" className="sr-only">
                  {currentOption?.placeholder2}
                </label>
                <Input
                  id="input2"
                  type="number"
                  placeholder={currentOption?.placeholder2}
                  value={input2}
                  onChange={e => setInput2(e.target.value)}
                  required
                  step="any"
                  aria-describedby="input2-help"
                />
              </div>
            </div>

            {/* Additional Input for Compound Interest */}
            {type === "compoundInterest" && (
              <div>
                <label htmlFor="input3" className="sr-only">
                  Time in years
                </label>
                <Input
                  id="input3"
                  type="number"
                  placeholder="Time (years)"
                  value={input3}
                  onChange={e => setInput3(e.target.value)}
                  required
                  step="any"
                  aria-describedby="input3-help"
                />
              </div>
            )}

            {/* Precision Control */}
            <div className="flex items-center gap-4">
              <label htmlFor="precision" className="text-sm font-medium">Decimal places:</label>
              <Select value={precision.toString()} onValueChange={v => setPrecision(parseInt(v))}>
                <SelectTrigger className="w-20" id="precision" aria-label="Select decimal precision">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 flex-wrap">
              <Button type="submit" className="flex-1">
                <Calculator className="w-4 h-4 mr-1" aria-hidden="true" />
                Calculate
              </Button>
              <Button type="button" variant="secondary" onClick={reset}>
                <RefreshCw className="w-4 h-4 mr-1" aria-hidden="true" />
                Reset
              </Button>
            </div>

            {/* Keyboard Shortcuts Info */}
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <Keyboard className="w-3 h-3" aria-hidden="true" />
              <span>Ctrl+Enter: Calculate | Esc: Reset</span>
            </div>
          </form>

          {/* Result Display */}
          {result && (
            <section className="space-y-4" ref={resultRef} aria-label="Calculation result">
              <ResultCard result={result} precision={precision} />
              <div className="flex gap-2 justify-center flex-wrap">
                <Button variant="outline" size="sm" onClick={handleCopy} aria-label="Copy result to clipboard">
                  <Copy className="w-4 h-4 mr-1" aria-hidden="true" />
                  {copied ? "Copied!" : "Copy"}
                </Button>
                {typeof window !== "undefined" && typeof navigator.share === "function" && (
                  <Button variant="outline" size="sm" onClick={handleShare} aria-label="Share result">
                    <Share2 className="w-4 h-4 mr-1" aria-hidden="true" />
                    {shared ? "Shared!" : "Share"}
                  </Button>
                )}
              </div>
            </section>
          )}

          {/* History Section */}
          {history.length > 0 && (
            <section className="space-y-4" aria-label="Calculation history">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  Recent Calculations ({history.length})
                </h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={exportHistory} aria-label="Export calculation history">
                    <Download className="w-4 h-4 mr-1" aria-hidden="true" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm" onClick={clearHistory} aria-label="Clear calculation history">
                    <Trash2 className="w-4 h-4 mr-1" aria-hidden="true" />
                    Clear
                  </Button>
                </div>
              </div>
              <div className="max-h-64 overflow-y-auto space-y-2" role="list" aria-label="List of recent calculations">
                {history.map((item, index) => (
                  <div
                    key={item.date + index}
                    className="flex items-center justify-between p-3 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors"
                    role="listitem"
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">
                        {new Date(item.date).toLocaleTimeString([], { 
                          hour: "2-digit", 
                          minute: "2-digit" 
                        })}
                      </span>
                      <span aria-hidden="true">{options.find(o => o.value === item.type)?.icon}</span>
                      <span className="font-mono">
                        {item.input1} → {item.input2}
                        {item.input3 && ` → ${item.input3}`}
                      </span>
                      <span className="text-primary font-semibold">= {item.result}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFavorite(item)}
                      className="text-muted-foreground hover:text-primary"
                      aria-label={item.favorite ? "Remove from favorites" : "Add to favorites"}
                    >
                      {item.favorite ? "★" : "☆"}
                    </Button>
                  </div>
                ))}
              </div>
            </section>
          )}
        </CardContent>
      </Card>
    </TooltipProvider>
  );
} 