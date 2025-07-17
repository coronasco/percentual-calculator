"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type CalculationResult } from "@/lib/percentageUtils";

interface ResultCardProps {
  result: CalculationResult;
  precision: number;
}

export default function ResultCard({ result, precision }: ResultCardProps) {
  const formattedResult = typeof result.result === 'number' 
    ? result.result.toFixed(precision)
    : result.result;

  return (
    <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <span className="text-green-600 dark:text-green-400">Result</span>
          <Badge variant="secondary" className="text-xs">
            {formattedResult}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-sm text-muted-foreground">
          {result.explanation}
        </div>
        {result.formula && (
          <div className="text-xs font-mono bg-muted p-2 rounded">
            {result.formula}
          </div>
        )}

      </CardContent>
    </Card>
  );
} 