import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalculationResult } from "@/lib/percentageUtils";
import { Calculator, Info } from "lucide-react";

interface ResultCardProps {
  result: CalculationResult;
  precision?: number;
}

export default function ResultCard({ result, precision = 2 }: ResultCardProps) {
  const formattedResult = Number(result.result.toFixed(precision)).toLocaleString();
  
  return (
    <Card className="bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Calculator className="w-5 h-5" />
          Calculation Result
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Main Result */}
        <div className="flex flex-col items-center">
          <Badge className="text-xl px-6 py-3 bg-green-600 text-white font-mono" variant="default">
            {formattedResult}
          </Badge>
        </div>

        {/* Explanation */}
        {result.explanation && (
          <div className="text-center text-sm text-muted-foreground">
            {result.explanation}
          </div>
        )}

        {/* Formula */}
        {result.formula && (
          <div className="bg-muted/50 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Formula:</span>
            </div>
            <code className="text-sm font-mono bg-background px-2 py-1 rounded">
              {result.formula}
            </code>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 