import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ArrowRight, TrendingUp, BookOpen, DollarSign, Clock, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Compound Interest Calculator Guide - Investment Growth Tutorial",
  description: "Complete guide to using our compound interest calculator. Learn formulas, see examples, and master investment growth calculations for retirement planning and wealth building.",
  keywords: "compound interest calculator guide, investment calculator guide, retirement planning, investment growth, compound interest formula, financial planning tutorial",
  openGraph: {
    title: "Compound Interest Calculator Guide - Investment Growth Tutorial",
    description: "Complete guide to using our compound interest calculator. Learn formulas, see examples, and master investment growth calculations for retirement planning and wealth building.",
  },
};

export default function CompoundInterestCalculatorGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Compound Interest Calculator Guide</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-6">
            Master compound interest calculations for investment planning, retirement savings, and long-term wealth building. Learn how money grows exponentially over time.
          </p>
          <Link 
            href="/compound-interest" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <TrendingUp className="w-5 h-5" />
            Try Compound Interest Calculator
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
                Compound interest formulas
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Compounding frequency effects
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Investment growth projections
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Retirement planning strategies
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Time value of money
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Investment comparison tools
              </li>
            </ul>
          </div>
        </div>

        {/* What is Compound Interest */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-primary" />
            What is Compound Interest?
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Compound interest is the interest earned on both the principal amount and the accumulated interest from previous periods. This powerful concept allows your money to grow exponentially over time, making it essential for long-term investment planning.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Simple vs Compound Interest</h3>
              <p className="text-muted-foreground mb-4">
                Understanding the difference between simple and compound interest is crucial for making informed investment decisions.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Simple Interest:</strong><br/>
                  <span className="text-muted-foreground">Interest = Principal × Rate × Time</span><br/>
                  <span className="text-muted-foreground">Only calculates interest on the original principal</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Compound Interest:</strong><br/>
                  <span className="text-muted-foreground">Final Amount = Principal × (1 + Rate)^Time</span><br/>
                  <span className="text-muted-foreground">Interest earned on principal + accumulated interest</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">The Power of Compounding</h3>
              <p className="text-muted-foreground mb-4">
                Compound interest creates a snowball effect where your money grows faster over time.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $1,000 at 10% for 3 years<br/>
                  <span className="text-muted-foreground">Simple: $1,000 + $300 = $1,300</span><br/>
                  <span className="text-muted-foreground">Compound: $1,000 × 1.1³ = $1,331</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Long-term Impact:</strong><br/>
                  <span className="text-muted-foreground">$10,000 at 7% for 30 years</span><br/>
                  <span className="text-muted-foreground">Simple: $31,000 | Compound: $76,123</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compound Interest Formula */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-primary" />
            Compound Interest Formula
          </h2>
          
          <p className="text-muted-foreground mb-6">
            The compound interest formula is the foundation for understanding how investments grow over time. Let&apos;s break it down step by step.
          </p>
          
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <strong>Basic Formula:</strong> Final Amount = Principal × (1 + Rate)^Time<br/>
            <strong>With Compounding Frequency:</strong> Final Amount = Principal × (1 + Rate/Periods)^(Time × Periods)
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Formula Components</h3>
              <p className="text-muted-foreground mb-4">
                Each part of the formula plays a crucial role in determining your investment growth.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Principal (P):</strong><br/>
                  <span className="text-muted-foreground">The initial amount invested</span><br/>
                  <span className="text-muted-foreground">Example: $10,000</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Rate (r):</strong><br/>
                  <span className="text-muted-foreground">Annual interest rate as decimal</span><br/>
                  <span className="text-muted-foreground">Example: 7% = 0.07</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Time (t):</strong><br/>
                  <span className="text-muted-foreground">Investment period in years</span><br/>
                  <span className="text-muted-foreground">Example: 10 years</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Step-by-Step Calculation</h3>
              <p className="text-muted-foreground mb-4">
                Let&apos;s calculate compound interest step by step with a real example.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $5,000 at 8% for 5 years<br/>
                  <span className="text-muted-foreground">Step 1: Convert rate to decimal</span><br/>
                  <span className="text-muted-foreground">8% = 0.08</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Step 2:</strong> Calculate (1 + r)^t<br/>
                  <span className="text-muted-foreground">(1 + 0.08)^5 = 1.4693</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Step 3:</strong> Multiply by principal<br/>
                  <span className="text-muted-foreground">$5,000 × 1.4693 = $7,346.64</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compounding Frequency */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-primary" />
            Compounding Frequency
          </h2>
          
          <p className="text-muted-foreground mb-6">
            The frequency at which interest is compounded significantly affects your investment returns. More frequent compounding generally results in higher returns.
          </p>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Common Compounding Periods</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>Annual:</strong> Once per year<br/>
                    <span className="text-muted-foreground">Periods = 1</span><br/>
                    <span className="text-muted-foreground">Rate per period = Annual rate</span>
                  </div>
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>Monthly:</strong> 12 times per year<br/>
                    <span className="text-muted-foreground">Periods = 12</span><br/>
                    <span className="text-muted-foreground">Rate per period = Annual rate ÷ 12</span>
                  </div>
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>Daily:</strong> 365 times per year<br/>
                    <span className="text-muted-foreground">Periods = 365</span><br/>
                    <span className="text-muted-foreground">Rate per period = Annual rate ÷ 365</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Frequency Comparison</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>$10,000 at 5% for 10 years:</strong><br/>
                    <span className="text-muted-foreground">Annual: $16,288.95</span><br/>
                    <span className="text-muted-foreground">Monthly: $16,470.09</span><br/>
                    <span className="text-muted-foreground">Daily: $16,486.65</span>
                  </div>
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>Difference:</strong><br/>
                    <span className="text-muted-foreground">Monthly vs Annual: +$181.14</span><br/>
                    <span className="text-muted-foreground">Daily vs Annual: +$197.70</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Real Investment Examples</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Retirement Planning</h3>
              <p className="text-muted-foreground mb-4">
                Compound interest is essential for retirement planning. Starting early can make a dramatic difference.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Early Starter:</strong><br/>
                  <span className="text-muted-foreground">$5,000/year from age 25 to 65</span><br/>
                  <span className="text-muted-foreground">At 7%: $1,068,048</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Late Starter:</strong><br/>
                  <span className="text-muted-foreground">$5,000/year from age 35 to 65</span><br/>
                  <span className="text-muted-foreground">At 7%: $472,304</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Difference:</strong> $595,744 more by starting 10 years earlier!
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Investment Scenarios</h3>
              <p className="text-muted-foreground mb-4">
                Different investment scenarios show the power of compound interest in various contexts.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Conservative:</strong><br/>
                  <span className="text-muted-foreground">$10,000 at 4% for 20 years</span><br/>
                  <span className="text-muted-foreground">Result: $21,911.23</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Moderate:</strong><br/>
                  <span className="text-muted-foreground">$10,000 at 7% for 20 years</span><br/>
                  <span className="text-muted-foreground">Result: $38,696.84</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Aggressive:</strong><br/>
                  <span className="text-muted-foreground">$10,000 at 10% for 20 years</span><br/>
                  <span className="text-muted-foreground">Result: $67,275.00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips and Strategies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Investment Strategies</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">1. Start Early</h3>
                <p className="text-sm text-muted-foreground">
                  The earlier you start investing, the more time compound interest has to work in your favor. Even small amounts can grow significantly over decades.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">2. Consistent Contributions</h3>
                <p className="text-sm text-muted-foreground">
                  Regular contributions, even small ones, can dramatically increase your final amount through the power of compound interest.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">3. Reinvest Dividends</h3>
                <p className="text-sm text-muted-foreground">
                  Reinvesting dividends and interest payments allows you to benefit from compound growth on your entire portfolio.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">4. Consider Tax-Advantaged Accounts</h3>
                <p className="text-sm text-muted-foreground">
                  IRAs, 401(k)s, and other tax-advantaged accounts can significantly improve your after-tax returns through compound growth.
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
              <h3 className="font-semibold mb-2">What&apos;s the difference between APR and APY?</h3>
              <p className="text-muted-foreground">
                APR (Annual Percentage Rate) is the simple interest rate, while APY (Annual Percentage Yield) includes the effects of compounding. APY is always higher than APR for the same rate.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">How often should interest be compounded?</h3>
              <p className="text-muted-foreground">
                More frequent compounding (daily or monthly) generally provides higher returns than annual compounding, but the difference is often small for long-term investments.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">What&apos;s the Rule of 72?</h3>
              <p className="text-muted-foreground">
                The Rule of 72 is a quick way to estimate how long it takes for an investment to double: 72 ÷ Annual Rate = Years to Double. For example, at 8%, it takes about 9 years to double.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">How do I calculate compound interest manually?</h3>
              <p className="text-muted-foreground">
                Use the formula: Final Amount = Principal × (1 + Rate)^Time. For example, $1,000 at 5% for 10 years = $1,000 × (1.05)^10 = $1,628.89.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-muted/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Investing?</h2>
          <p className="text-muted-foreground mb-6">
            Now that you understand compound interest, try our professional calculator for instant results and detailed breakdowns.
          </p>
          <Link 
            href="/compound-interest" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg"
          >
            <TrendingUp className="w-6 h-6" />
            Use Compound Interest Calculator Now
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