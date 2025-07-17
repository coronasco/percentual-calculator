import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Calculator, ArrowRight, Percent, TrendingUp, TrendingDown, DollarSign, Clock, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Percentage Calculator Guide - How to Calculate Percentages Online",
  description: "Complete guide to using our percentage calculator. Learn how to calculate percentages, find percentage change, markup, discount, and compound interest with examples and formulas.",
  keywords: "percentage calculator guide, how to calculate percentage, percentage formula, percentage examples, percentage change calculator, markup calculator, discount calculator, compound interest calculator",
  openGraph: {
    title: "Percentage Calculator Guide - How to Calculate Percentages Online",
    description: "Complete guide to using our percentage calculator. Learn how to calculate percentages, find percentage change, markup, discount, and compound interest with examples and formulas.",
  },
};

export default function PercentageCalculatorGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Percentage Calculator Guide</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-6">
            Master percentage calculations with our comprehensive guide. Learn formulas, see examples, and understand how to use our free online percentage calculator.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Calculator className="w-5 h-5" />
            Try Percentage Calculator
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Table of Contents */}
        <div className="bg-muted/50 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            What You&apos;ll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Basic percentage calculations
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Percentage change (increase/decrease)
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Markup and discount calculations
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Compound interest over time
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Real-world examples and formulas
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Tips for accurate calculations
              </li>
            </ul>
          </div>
        </div>

        {/* Basic Percentage Calculations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Percent className="w-6 h-6 text-primary" />
            Basic Percentage Calculations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What is X% of Y?</h3>
              <p className="text-muted-foreground mb-4">
                Calculate what percentage of a number represents. This is the most common percentage calculation used in daily life.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg mb-4">
                <strong>Formula:</strong> Result = (Percentage × Number) ÷ 100
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> What is 15% of 200?<br/>
                  <span className="text-muted-foreground">15% × 200 ÷ 100 = 30</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> What is 25% of 80?<br/>
                  <span className="text-muted-foreground">25% × 80 ÷ 100 = 20</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">X is what percent of Y?</h3>
              <p className="text-muted-foreground mb-4">
                Find what percentage one number represents of another. Useful for understanding proportions and ratios.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg mb-4">
                <strong>Formula:</strong> Percentage = (Number ÷ Total) × 100
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> 50 is what percent of 200?<br/>
                  <span className="text-muted-foreground">(50 ÷ 200) × 100 = 25%</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> 30 is what percent of 150?<br/>
                  <span className="text-muted-foreground">(30 ÷ 150) × 100 = 20%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Percentage Change */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            Percentage Change (Increase/Decrease)
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Calculate how much a value has increased or decreased as a percentage. Essential for analyzing growth, sales performance, and financial changes.
          </p>
          
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <strong>Formula:</strong> Percentage Change = ((New Value - Old Value) ÷ Old Value) × 100
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                Percentage Increase
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> Price increased from $100 to $120<br/>
                  <span className="text-muted-foreground">((120 - 100) ÷ 100) × 100 = 20% increase</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> Sales grew from 500 to 750 units<br/>
                  <span className="text-muted-foreground">((750 - 500) ÷ 500) × 100 = 50% increase</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-red-600" />
                Percentage Decrease
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> Price decreased from $200 to $160<br/>
                  <span className="text-muted-foreground">((160 - 200) ÷ 200) × 100 = -20% (20% decrease)</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> Temperature dropped from 80°F to 60°F<br/>
                  <span className="text-muted-foreground">((60 - 80) ÷ 80) × 100 = -25% (25% decrease)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Markup and Discount */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-primary" />
            Markup and Discount Calculations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Markup Calculator</h3>
              <p className="text-muted-foreground mb-4">
                Add a percentage markup to the original price. Essential for retail, pricing strategies, and profit calculations.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg mb-4">
                <strong>Formula:</strong> Final Price = Original Price × (1 + Markup Percentage)
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> Add 30% markup to $50<br/>
                  <span className="text-muted-foreground">$50 × (1 + 0.30) = $65</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> Add 25% markup to $80<br/>
                  <span className="text-muted-foreground">$80 × (1 + 0.25) = $100</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Discount Calculator</h3>
              <p className="text-muted-foreground mb-4">
                Calculate the final price after applying a percentage discount. Perfect for sales, promotions, and clearance pricing.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg mb-4">
                <strong>Formula:</strong> Final Price = Original Price × (1 - Discount Percentage)
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> 20% discount on $100<br/>
                  <span className="text-muted-foreground">$100 × (1 - 0.20) = $80</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> 15% discount on $200<br/>
                  <span className="text-muted-foreground">$200 × (1 - 0.15) = $170</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compound Interest */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-primary" />
            Compound Interest Calculator
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Calculate how money grows over time with compound interest. Essential for investments, savings, and long-term financial planning.
          </p>
          
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <strong>Formula:</strong> Final Amount = Principal × (1 + Rate)^Time
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded">
              <strong>Example:</strong> $1,000 invested at 5% for 10 years<br/>
              <span className="text-muted-foreground">$1,000 × (1 + 0.05)^10 = $1,628.89</span>
            </div>
            <div className="p-4 bg-muted/30 rounded">
              <strong>Example:</strong> $5,000 invested at 8% for 5 years<br/>
              <span className="text-muted-foreground">$5,000 × (1 + 0.08)^5 = $7,346.64</span>
            </div>
          </div>
        </section>

        {/* Tips and Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tips for Accurate Percentage Calculations</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">1. Always Check Your Work</h3>
                <p className="text-sm text-muted-foreground">
                  Use reverse calculations to verify your results. If 15% of 200 is 30, then 30 should be 15% of 200.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">2. Understand the Context</h3>
                <p className="text-sm text-muted-foreground">
                  Make sure you&apos;re calculating the right percentage for your situation. Is it markup, discount, or change?
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">3. Use Precise Numbers</h3>
                <p className="text-sm text-muted-foreground">
                  For financial calculations, use at least 2 decimal places. For general use, whole numbers are often sufficient.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">4. Consider Time Periods</h3>
                <p className="text-sm text-muted-foreground">
                  For compound interest, ensure your rate and time period match (annual rate with years, monthly rate with months).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">How do I calculate percentage increase?</h3>
              <p className="text-muted-foreground">
                Use the formula: ((New Value - Old Value) ÷ Old Value) × 100. For example, if a price increases from $100 to $120, the percentage increase is ((120 - 100) ÷ 100) × 100 = 20%.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">What&apos;s the difference between markup and margin?</h3>
              <p className="text-muted-foreground">
                Markup is calculated on the cost price, while margin is calculated on the selling price. Markup = (Selling Price - Cost) ÷ Cost, Margin = (Selling Price - Cost) ÷ Selling Price.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">How does compound interest work?</h3>
              <p className="text-muted-foreground">
                Compound interest means you earn interest on both your principal and the accumulated interest. The formula is: Final Amount = Principal × (1 + Rate)^Time.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Can I use this calculator for business calculations?</h3>
              <p className="text-muted-foreground">
                Yes! Our percentage calculator is perfect for business use including pricing, profit margins, sales analysis, and financial planning.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-muted/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Calculating?</h2>
          <p className="text-muted-foreground mb-6">
            Now that you understand how percentage calculations work, try our free online calculator for instant results.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg"
          >
            <Calculator className="w-6 h-6" />
            Use Percentage Calculator Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t mt-auto" role="contentinfo">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <nav className="flex gap-4 text-sm text-muted-foreground" aria-label="Footer navigation">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            </nav>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Free percentage calculator
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 