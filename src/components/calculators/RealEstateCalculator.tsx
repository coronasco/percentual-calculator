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
  trackCalcSubmit,
  trackCalcReset,
  trackCalcTypeChange,
  trackCopy,
  trackShare,
  trackHistoryExport,
  trackHistoryClear,
  trackFavoriteToggle,
  trackPrecisionChange,
} from "@/lib/analytics";
import {
  Calculator,
  Home,
  TrendingUp,
  DollarSign,
  Percent,
  MapPin,
  RefreshCw,
  Copy,
  Share2,
  Info,
  Download,
  Trash2,
  Keyboard,
  Clock,
} from "lucide-react";

const options = [
  {
    value: "commission",
    label: "Commission Calculator",
    icon: <DollarSign className="w-4 h-4" />,
    tooltip: "Calculate real estate agent commission. Example: $500,000 property at 3% commission",
    placeholder1: "Property Value ($)",
    placeholder2: "Commission Rate (%)",
  },
  {
    value: "appreciation",
    label: "Property Appreciation",
    icon: <TrendingUp className="w-4 h-4" />,
    tooltip: "Calculate property value appreciation over time. Example: $300,000 property at 5% annual growth",
    placeholder1: "Current Value ($)",
    placeholder2: "Annual Growth Rate (%)",
    placeholder3: "Years",
  },
  {
    value: "mortgage",
    label: "Mortgage Calculator",
    icon: <Home className="w-4 h-4" />,
    tooltip: "Calculate monthly mortgage payments. Example: $400,000 loan at 4% for 30 years",
    placeholder1: "Loan Amount ($)",
    placeholder2: "Interest Rate (%)",
    placeholder3: "Term (years)",
  },
  {
    value: "rentalYield",
    label: "Rental Yield",
    icon: <Percent className="w-4 h-4" />,
    tooltip: "Calculate rental property yield. Example: $2,000 monthly rent on $400,000 property",
    placeholder1: "Monthly Rent ($)",
    placeholder2: "Property Value ($)",
  },
  {
    value: "roi",
    label: "ROI Calculator",
    icon: <TrendingUp className="w-4 h-4" />,
    tooltip: "Calculate Return on Investment for real estate. Example: $400,000 investment returns $450,000",
    placeholder1: "Investment Amount ($)",
    placeholder2: "Return Amount ($)",
  },
  {
    value: "propertyTax",
    label: "Property Tax",
    icon: <MapPin className="w-4 h-4" />,
    tooltip: "Calculate property tax. Example: $500,000 property at 1.2% tax rate",
    placeholder1: "Property Value ($)",
    placeholder2: "Tax Rate (%)",
  },
];

type CalcType = "commission" | "appreciation" | "mortgage" | "rentalYield" | "roi" | "propertyTax";

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

export function RealEstateCalculator() {
  const [type, setType] = useState<CalcType>("commission");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        return JSON.parse(localStorage.getItem("real-estate-history") || "[]");
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
      case "commission":
        const commission = (x * y) / 100;
        calcResult = {
          result: commission,
          formula: `$${x.toLocaleString()} × ${y}% = $${commission.toFixed(2)}`,
          explanation: `Commission on $${x.toLocaleString()} property at ${y}% rate`,
          details: [
            { label: "Property Value", value: `$${x.toLocaleString()}` },
            { label: "Commission Rate", value: `${y}%` },
            { label: "Commission Amount", value: `$${commission.toFixed(2)}` }
          ]
        };
        break;

      case "appreciation":
        if (isNaN(z) || z <= 0) {
          toast.error("Please enter a valid time period");
          return;
        }
        const futureValue = x * Math.pow(1 + y / 100, z);
        const appreciation = futureValue - x;
        calcResult = {
          result: futureValue,
          formula: `$${x.toLocaleString()} × (1 + ${y}%)^${z} = $${futureValue.toFixed(2)}`,
          explanation: `Property value after ${z} years at ${y}% annual appreciation`,
          details: [
            { label: "Current Value", value: `$${x.toLocaleString()}` },
            { label: "Annual Growth Rate", value: `${y}%` },
            { label: "Appreciation Amount", value: `$${appreciation.toFixed(2)}` },
            { label: "Future Value", value: `$${futureValue.toFixed(2)}` }
          ]
        };
        break;

      case "mortgage":
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
          explanation: `Monthly mortgage payment for $${x.toLocaleString()} loan`,
          details: [
            { label: "Loan Amount", value: `$${x.toLocaleString()}` },
            { label: "Interest Rate", value: `${y}%` },
            { label: "Loan Term", value: `${z} years` },
            { label: "Monthly Payment", value: `$${monthlyPayment.toFixed(2)}` },
            { label: "Total Interest", value: `$${totalInterest.toFixed(2)}` },
            { label: "Total Payments", value: `$${totalPayments.toFixed(2)}` }
          ]
        };
        break;

      case "rentalYield":
        const annualRent = x * 12;
        const rentalYield = (annualRent / y) * 100;
        calcResult = {
          result: rentalYield,
          formula: `($${x} × 12) ÷ $${y.toLocaleString()} × 100 = ${rentalYield.toFixed(2)}%`,
          explanation: `Annual rental yield on $${y.toLocaleString()} property`,
          details: [
            { label: "Monthly Rent", value: `$${x.toFixed(2)}` },
            { label: "Annual Rent", value: `$${annualRent.toFixed(2)}` },
            { label: "Property Value", value: `$${y.toLocaleString()}` },
            { label: "Rental Yield", value: `${rentalYield.toFixed(2)}%` }
          ]
        };
        break;

      case "roi":
        const roi = ((y - x) / x) * 100;
        const profit = y - x;
        calcResult = {
          result: roi,
          formula: `((${y.toLocaleString()} - ${x.toLocaleString()}) ÷ ${x.toLocaleString()}) × 100 = ${roi.toFixed(2)}%`,
          explanation: `Return on Investment for real estate property`,
          details: [
            { label: "Investment Amount", value: `$${x.toLocaleString()}` },
            { label: "Return Amount", value: `$${y.toLocaleString()}` },
            { label: "Profit/Loss", value: `$${profit.toFixed(2)}` },
            { label: "ROI", value: `${roi.toFixed(2)}%` }
          ]
        };
        break;

      case "propertyTax":
        const tax = (x * y) / 100;
        calcResult = {
          result: tax,
          formula: `$${x.toLocaleString()} × ${y}% = $${tax.toFixed(2)}`,
          explanation: `Annual property tax on $${x.toLocaleString()} property`,
          details: [
            { label: "Property Value", value: `$${x.toLocaleString()}` },
            { label: "Tax Rate", value: `${y}%` },
            { label: "Annual Tax", value: `$${tax.toFixed(2)}` },
            { label: "Monthly Tax", value: `$${(tax / 12).toFixed(2)}` }
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
        localStorage.setItem("real-estate-history", JSON.stringify(updated));
      }
      return updated;
    });
  }

  function reset() {
    setInput1("");
    setInput2("");
    setInput3("");
    setResult(null);
    setType("commission");
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
          title: "Real Estate Calculator Result",
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
    link.download = `real-estate-calculations-${new Date().toISOString().split("T")[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("History exported!");
  }

  function clearHistory() {
    setHistory([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("real-estate-history");
    }
    toast.success("History cleared!");
  }

  function toggleFavorite(item: HistoryItem) {
    setHistory((prev) => {
      const updated = prev.map(h => 
        h.date === item.date ? { ...h, favorite: !h.favorite } : h
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("real-estate-history", JSON.stringify(updated));
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
            <Home className="w-5 h-5" aria-hidden="true" />
            Real Estate Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form
            onSubmit={e => {
              e.preventDefault();
              calculate();
            }}
            className="space-y-4"
            aria-label="Real estate calculation form"
          >
            {/* Calculation Type Selector */}
            <div className="flex items-center gap-2">
              <Select value={type} onValueChange={v => { setType(v as CalcType); trackCalcTypeChange('real_estate', v); }}>
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
            {(type === "appreciation" || type === "mortgage") && (
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
              <Select value={precision.toString()} onValueChange={v => { const p = parseInt(v); setPrecision(p); trackPrecisionChange('real_estate', p); }}>
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
              <Button type="submit" className="flex-1" onClick={() => trackCalcSubmit('real_estate', type)}>
                <Calculator className="w-4 h-4 mr-1" aria-hidden="true" />
                Calculate
              </Button>
              <Button type="button" variant="secondary" onClick={() => { reset(); trackCalcReset('real_estate', type); }}>
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
                <Button variant="outline" size="sm" onClick={() => { handleCopy(); trackCopy('real_estate', type); }} aria-label="Copy result to clipboard">
                  <Copy className="w-4 h-4 mr-1" aria-hidden="true" />
                  {copied ? "Copied!" : "Copy"}
                </Button>
                {typeof window !== "undefined" && typeof navigator.share === "function" && (
                  <Button variant="outline" size="sm" onClick={async () => { await handleShare(); trackShare('real_estate', type); }} aria-label="Share result">
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
                  <Button variant="outline" size="sm" onClick={() => { exportHistory(); trackHistoryExport('real_estate', history.length); }} aria-label="Export calculation history">
                    <Download className="w-4 h-4 mr-1" aria-hidden="true" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => { clearHistory(); trackHistoryClear('real_estate'); }} aria-label="Clear calculation history">
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
                      onClick={() => { toggleFavorite(item); trackFavoriteToggle('real_estate', item.favorite ? 'remove' : 'add'); }}
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
