// percentageUtils.ts

export interface CalculationResult {
  result: number;
  error?: string;
  formula?: string;
  explanation?: string;
}

export function percentOf(x: number, y: number): CalculationResult {
  if (y === 0) {
    return { result: 0, error: "Cannot calculate percentage of zero" };
  }
  const result = (x / 100) * y;
  return {
    result,
    formula: `${x}% × ${y} = ${result}`,
    explanation: `${x}% of ${y} equals ${result}`
  };
}

export function whatPercentOf(x: number, y: number): CalculationResult {
  if (y === 0) {
    return { result: 0, error: "Cannot divide by zero" };
  }
  const result = (x / y) * 100;
  return {
    result,
    formula: `(${x} ÷ ${y}) × 100 = ${result}%`,
    explanation: `${x} is ${result}% of ${y}`
  };
}

export function percentChange(a: number, b: number): CalculationResult {
  if (a === 0) {
    return { result: 0, error: "Cannot calculate percentage change from zero" };
  }
  const result = ((b - a) / Math.abs(a)) * 100;
  const changeType = result > 0 ? "increase" : result < 0 ? "decrease" : "no change";
  return {
    result,
    formula: `((${b} - ${a}) ÷ |${a}|) × 100 = ${result}%`,
    explanation: `Change from ${a} to ${b} is a ${changeType} of ${Math.abs(result)}%`
  };
}

// New functions
export function markup(originalPrice: number, markupPercent: number): CalculationResult {
  if (originalPrice < 0) {
    return { result: 0, error: "Price cannot be negative" };
  }
  const markupAmount = (markupPercent / 100) * originalPrice;
  const finalPrice = originalPrice + markupAmount;
  return {
    result: finalPrice,
    formula: `${originalPrice} + (${markupPercent}% × ${originalPrice}) = ${finalPrice}`,
    explanation: `Final price with ${markupPercent}% markup: $${finalPrice}`
  };
}

export function markdown(originalPrice: number, markdownPercent: number): CalculationResult {
  if (originalPrice < 0) {
    return { result: 0, error: "Price cannot be negative" };
  }
  const markdownAmount = (markdownPercent / 100) * originalPrice;
  const finalPrice = originalPrice - markdownAmount;
  return {
    result: finalPrice,
    formula: `${originalPrice} - (${markdownPercent}% × ${originalPrice}) = ${finalPrice}`,
    explanation: `Final price with ${markdownPercent}% discount: $${finalPrice}`
  };
}

export function compoundInterest(
  principal: number,
  rate: number,
  time: number,
  compoundsPerYear: number = 1
): CalculationResult {
  if (principal < 0 || rate < 0 || time < 0) {
    return { result: 0, error: "Values cannot be negative" };
  }
  const rateDecimal = rate / 100;
  const result = principal * Math.pow(1 + rateDecimal / compoundsPerYear, compoundsPerYear * time);
  const interest = result - principal;
  return {
    result,
    formula: `${principal} × (1 + ${rate}%/${compoundsPerYear})^(${compoundsPerYear} × ${time}) = ${result}`,
    explanation: `Total amount: $${result}, Interest earned: $${interest}`
  };
}

// Utility function to format numbers
export function formatNumber(num: number, decimals: number = 2): string {
  return Number(num.toFixed(decimals)).toLocaleString();
} 