"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { TrendingUp, Copy, Share2 } from "lucide-react";
import { toast } from "sonner";

interface CalculationResult {
  principal: number;
  rate: number;
  time: number;
  compoundingFrequency: string;
  finalAmount: number;
  totalInterest: number;
  totalContribution: number;
  breakdown: Array<{
    year: number;
    balance: number;
    interest: number;
    contribution: number;
  }>;
}

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState<string>("10000");
  const [rate, setRate] = useState<string>("7");
  const [time, setTime] = useState<string>("10");
  const [compoundingFrequency, setCompoundingFrequency] = useState<string>("annually");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const compoundingFrequencies = [
    { value: "annually", label: "Annually", periods: 1 },
    { value: "semiannually", label: "Semi-annually", periods: 2 },
    { value: "quarterly", label: "Quarterly", periods: 4 },
    { value: "monthly", label: "Monthly", periods: 12 },
    { value: "daily", label: "Daily", periods: 365 },
  ];

  const calculateCompoundInterest = () => {
    const principalNum = parseFloat(principal);
    const rateNum = parseFloat(rate) / 100;
    const timeNum = parseFloat(time);
    const frequency = compoundingFrequencies.find(f => f.value === compoundingFrequency);
    
    if (!frequency || isNaN(principalNum) || isNaN(rateNum) || isNaN(timeNum)) {
      return;
    }

    const periodsPerYear = frequency.periods;
    const totalPeriods = timeNum * periodsPerYear;
    const ratePerPeriod = rateNum / periodsPerYear;

    const finalAmount = principalNum * Math.pow(1 + ratePerPeriod, totalPeriods);
    const totalInterest = finalAmount - principalNum;

    // Generate yearly breakdown
    const breakdown = [];
    for (let year = 1; year <= timeNum; year++) {
      const periodsInYear = periodsPerYear;
      const balanceAtYear = principalNum * Math.pow(1 + ratePerPeriod, year * periodsInYear);
      const previousBalance = year === 1 ? principalNum : principalNum * Math.pow(1 + ratePerPeriod, (year - 1) * periodsInYear);
      const interestInYear = balanceAtYear - previousBalance;
      
      breakdown.push({
        year,
        balance: balanceAtYear,
        interest: interestInYear,
        contribution: 0, // No additional contributions in this version
      });
    }

    const calculationResult: CalculationResult = {
      principal: principalNum,
      rate: rateNum * 100,
      time: timeNum,
      compoundingFrequency,
      finalAmount,
      totalInterest,
      totalContribution: principalNum,
      breakdown,
    };

    setResult(calculationResult);
  };

  useEffect(() => {
    calculateCompoundInterest();
  }, [principal, rate, time, compoundingFrequency]);



  const copyResult = () => {
    if (!result) return;
    
    const text = `Compound Interest Calculation:
Principal: $${result.principal.toLocaleString()}
Rate: ${result.rate}% ${compoundingFrequency}
Time: ${result.time} years
Final Amount: $${result.finalAmount.toLocaleString()}
Total Interest: $${result.totalInterest.toLocaleString()}`;
    
    navigator.clipboard.writeText(text);
    toast.success("Result copied to clipboard!");
  };

  const shareResult = () => {
    if (!result) return;
    
    const text = `Check out this compound interest calculation: $${result.principal.toLocaleString()} at ${result.rate}% for ${result.time} years = $${result.finalAmount.toLocaleString()}`;
    const url = window.location.href;
    
    if (navigator.share) {
      navigator.share({
        title: "Compound Interest Calculator",
        text,
        url,
      });
    } else {
      navigator.clipboard.writeText(`${text}\n${url}`);
      toast.success("Calculation shared to clipboard!");
    }
  };



  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Calculator Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Compound Interest Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Principal Amount ($)</label>
              <Input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                placeholder="10000"
                className="text-lg"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Annual Interest Rate (%)</label>
              <Input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="7"
                step="0.01"
                className="text-lg"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Time Period (Years)</label>
              <Input
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="10"
                step="0.1"
                className="text-lg"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Compounding Frequency</label>
              <Select value={compoundingFrequency} onValueChange={setCompoundingFrequency}>
                <SelectTrigger className="text-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {compoundingFrequencies.map((freq) => (
                    <SelectItem key={freq.value} value={freq.value}>
                      {freq.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Calculation Results</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={copyResult}>
                  <Copy className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={shareResult}>
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Summary Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">
                  ${result.finalAmount.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Final Amount</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">
                  ${result.totalInterest.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Total Interest Earned</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">
                  ${result.principal.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Initial Investment</div>
              </div>
            </div>

            {/* Formula Display */}
            <div className="bg-muted/30 p-4 rounded-lg">
              <div className="text-sm font-medium mb-2">Formula Used:</div>
              <div className="text-sm text-muted-foreground font-mono">
                Final Amount = Principal × (1 + Rate/Periods)^(Time × Periods)
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Where: Rate = {result.rate}%, Periods = {compoundingFrequencies.find(f => f.value === result.compoundingFrequency)?.periods}/year
              </div>
            </div>

            {/* Yearly Breakdown */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Yearly Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Year</th>
                      <th className="text-right p-2">Balance</th>
                      <th className="text-right p-2">Interest Earned</th>
                      <th className="text-right p-2">Growth</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.breakdown.map((year) => (
                      <tr key={year.year} className="border-b hover:bg-muted/30">
                        <td className="p-2 font-medium">{year.year}</td>
                        <td className="p-2 text-right">${year.balance.toLocaleString()}</td>
                        <td className="p-2 text-right text-green-600">${year.interest.toLocaleString()}</td>
                        <td className="p-2 text-right text-muted-foreground">
                          {((year.balance / result.principal - 1) * 100).toFixed(1)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      )}


    </div>
  );
} 