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
import ResultCard from "../ResultCard";
import {
  Calculator,
  DollarSign,
  TrendingUp,
  Banknote,
  Percent,
  Clock,
  RefreshCw,
  Copy,
  Share2,
  Info,
  Download,
  Trash2,
  Keyboard,
} from "lucide-react";

const options = [
  {
    value: "compoundInterest",
    label: "Compound Interest",
    icon: <TrendingUp className="w-4 h-4" />,
    tooltip: "Calculate compound interest over time. Example: $1000 at 5% for 10 years",
    placeholder1: "Principal ($)",
    placeholder2: "Rate (%)",
    placeholder3: "Time (years)",
  },
  {
    value: "loanPayment",
    label: "Loan Payment",
    icon: <Banknote className="w-4 h-4" />,
    tooltip: "Calculate monthly loan payments. Example: $200,000 mortgage at 4% for 30 years",
    placeholder1: "Loan Amount ($)",
    placeholder2: "Interest Rate (%)",
    placeholder3: "Term (years)",
  },
  {
    value: "roi",
    label: "ROI Calculator",
    icon: <Percent className="w-4 h-4" />,
    tooltip: "Calculate Return on Investment. Example: $5000 investment returns $6500",
    placeholder1: "Initial Investment ($)",
    placeholder2: "Final Value ($)",
  },
  {
    value: "apr",
    label: "APR Calculator",
    icon: <DollarSign className="w-4 h-4" />,
    tooltip: "Calculate Annual Percentage Rate. Example: $1000 loan with $50 fees",
    placeholder1: "Loan Amount ($)",
    placeholder2: "Total Fees ($)",
    placeholder3: "Term (years)",
  },
  {
    value: "investmentGrowth",
    label: "Investment Growth",
    icon: <TrendingUp className="w-4 h-4" />,
    tooltip: "Calculate future value of investments. Example: $1000 monthly at 7% for 20 years",
    placeholder1: "Monthly Investment ($)",
    placeholder2: "Annual Return (%)",
    placeholder3: "Years",
  },
  {
    value: "presentValue",
    label: "Present Value",
    icon: <Calculator className="w-4 h-4" />,
    tooltip: "Calculate present value of future amount. Example: $10,000 in 5 years at 5%",
    placeholder1: "Future Value ($)",
    placeholder2: "Rate (%)",
    placeholder3: "Years",
  },
];

type CalcType = "compoundInterest" | "loanPayment" | "roi" | "apr" | "investmentGrowth" | "presentValue";

type HistoryItem = {
  type: CalcType;
  input1: string;
  input2: string;
  input3?: string;
  result: string;
  date: number;
  favorite?: boolean;
};

interface CalculationResult {
  result: number;
  error?: string;
  formula?: string;
  explanation?: string;
  details?: Array<{ label: string; value: string }>;
}

export function FinanceCalculator() {
  const [type, setType] = useState<CalcType>("compoundInterest");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        return JSON.parse(localStorage.getItem("finance-history") || "[]");
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
  }, [input1, input2, input3, type]);

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
      case "compoundInterest":
        if (isNaN(z) || z <= 0) {
          toast.error("Please enter a valid time period");
          return;
        }
        const futureValue = x * Math.pow(1 + y / 100, z);
        const interest = futureValue - x;
        calcResult = {
          result: futureValue,
          formula: `${x} × (1 + ${y}%)^${z} = ${futureValue.toFixed(2)}`,
          explanation: `$${x} invested at ${y}% for ${z} years grows to $${futureValue.toFixed(2)}`,
          details: [
            { label: "Principal", value: `$${x.toFixed(2)}` },
            { label: "Interest Earned", value: `$${interest.toFixed(2)}` },
            { label: "Future Value", value: `$${futureValue.toFixed(2)}` }
          ]
        };
        break;

      case "loanPayment":
        if (isNaN(z) || z <= 0) {
          toast.error("Please enter a valid loan term");
          return;
        }
        const monthlyRate = y / 100 / 12;
        const numberOfPayments = z * 12;
        const monthlyPayment = x * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        const totalPayments = monthlyPayment * numberOfPayments;
        const totalInterest = totalPayments - x;
        calcResult = {
          result: monthlyPayment,
          formula: `Monthly Payment = $${monthlyPayment.toFixed(2)}`,
          explanation: `Monthly payment for $${x} loan at ${y}% for ${z} years`,
          details: [
            { label: "Monthly Payment", value: `$${monthlyPayment.toFixed(2)}` },
            { label: "Total Interest", value: `$${totalInterest.toFixed(2)}` },
            { label: "Total Payments", value: `$${totalPayments.toFixed(2)}` }
          ]
        };
        break;

      case "roi":
        const roi = ((y - x) / x) * 100;
        calcResult = {
          result: roi,
          formula: `((${y} - ${x}) ÷ ${x}) × 100 = ${roi.toFixed(2)}%`,
          explanation: `Return on Investment: ${roi.toFixed(2)}%`,
          details: [
            { label: "Initial Investment", value: `$${x.toFixed(2)}` },
            { label: "Final Value", value: `$${y.toFixed(2)}` },
            { label: "Profit/Loss", value: `$${(y - x).toFixed(2)}` },
            { label: "ROI", value: `${roi.toFixed(2)}%` }
          ]
        };
        break;

      case "apr":
        if (isNaN(z) || z <= 0) {
          toast.error("Please enter a valid loan term");
          return;
        }
        const apr = ((y / x) / z) * 100;
        calcResult = {
          result: apr,
          formula: `((${y} ÷ ${x}) ÷ ${z}) × 100 = ${apr.toFixed(2)}%`,
          explanation: `Annual Percentage Rate: ${apr.toFixed(2)}%`,
          details: [
            { label: "Loan Amount", value: `$${x.toFixed(2)}` },
            { label: "Total Fees", value: `$${y.toFixed(2)}` },
            { label: "Loan Term", value: `${z} years` },
            { label: "APR", value: `${apr.toFixed(2)}%` }
          ]
        };
        break;

      case "investmentGrowth":
        if (isNaN(z) || z <= 0) {
          toast.error("Please enter a valid time period");
          return;
        }
        const monthlyRate2 = y / 100 / 12;
        const numberOfPayments2 = z * 12;
        const futureValue2 = x * ((Math.pow(1 + monthlyRate2, numberOfPayments2) - 1) / monthlyRate2);
        const totalInvested = x * numberOfPayments2;
        const interestEarned = futureValue2 - totalInvested;
        calcResult = {
          result: futureValue2,
          formula: `Future Value = $${futureValue2.toFixed(2)}`,
          explanation: `$${x} monthly investment at ${y}% for ${z} years`,
          details: [
            { label: "Monthly Investment", value: `$${x.toFixed(2)}` },
            { label: "Total Invested", value: `$${totalInvested.toFixed(2)}` },
            { label: "Interest Earned", value: `$${interestEarned.toFixed(2)}` },
            { label: "Future Value", value: `$${futureValue2.toFixed(2)}` }
          ]
        };
        break;

      case "presentValue":
        if (isNaN(z) || z <= 0) {
          toast.error("Please enter a valid time period");
          return;
        }
        const presentValue = x / Math.pow(1 + y / 100, z);
        calcResult = {
          result: presentValue,
          formula: `${x} ÷ (1 + ${y}%)^${z} = ${presentValue.toFixed(2)}`,
          explanation: `Present value of $${x} in ${z} years at ${y}%`,
          details: [
            { label: "Future Value", value: `$${x.toFixed(2)}` },
            { label: "Discount Rate", value: `${y}%` },
            { label: "Years", value: `${z}` },
            { label: "Present Value", value: `$${presentValue.toFixed(2)}` }
          ]
        };
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
      input3: input3,
      result: calcResult.result.toFixed(precision),
      date: Date.now(),
    };

    setHistory((prev) => {
      const updated = [newItem, ...prev.filter(h => 
        !(h.type === type && h.input1 === input1 && h.input2 === input2)
      )].slice(0, 20);
      if (typeof window !== "undefined") {
        localStorage.setItem("finance-history", JSON.stringify(updated));
      }
      return updated;
    });
  }

  function reset() {
    setInput1("");
    setInput2("");
    setInput3("");
    setResult(null);
    setType("compoundInterest");
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
          title: "Finance Calculator Result",
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
    link.download = `finance-calculations-${new Date().toISOString().split("T")[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("History exported!");
  }

  function clearHistory() {
    setHistory([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("finance-history");
    }
    toast.success("History cleared!");
  }

  function toggleFavorite(item: HistoryItem) {
    setHistory((prev) => {
      const updated = prev.map(h => 
        h.date === item.date ? { ...h, favorite: !h.favorite } : h
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("finance-history", JSON.stringify(updated));
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
            <DollarSign className="w-5 h-5" aria-hidden="true" />
            Finance Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form
            onSubmit={e => {
              e.preventDefault();
              calculate();
            }}
            className="space-y-4"
            aria-label="Finance calculation form"
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

            {/* Additional Input for calculations that need 3 inputs */}
            {(type === "compoundInterest" || type === "loanPayment" || type === "apr" || type === "investmentGrowth" || type === "presentValue") && (
              <div>
                <label htmlFor="input3" className="sr-only">
                  {currentOption?.placeholder3}
                </label>
                <Input
                  id="input3"
                  type="number"
                  placeholder={currentOption?.placeholder3}
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