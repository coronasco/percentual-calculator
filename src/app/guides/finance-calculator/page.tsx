import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ArrowRight, DollarSign, TrendingUp, Clock, BookOpen, Percent, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Finance Calculator Guide - Professional Financial Calculations",
  description: "Complete guide to using our finance calculator. Learn compound interest, loan payments, ROI, APR, and investment calculations with examples and formulas.",
  keywords: "finance calculator guide, compound interest calculator, loan calculator, ROI calculator, APR calculator, investment calculator, financial planning tools",
  openGraph: {
    title: "Finance Calculator Guide - Professional Financial Calculations",
    description: "Complete guide to using our finance calculator. Learn compound interest, loan payments, ROI, APR, and investment calculations with examples and formulas.",
  },
};

export default function FinanceCalculatorGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <DollarSign className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Finance Calculator Guide</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-6">
            Master professional financial calculations with our comprehensive guide. Learn compound interest, loan payments, ROI analysis, and investment planning.
          </p>
          <Link 
            href="/finance" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <DollarSign className="w-5 h-5" />
            Try Finance Calculator
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
                Compound interest calculations
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Loan payment analysis
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                ROI and APR calculations
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Investment return projections
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Tax calculations
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Financial planning strategies
              </li>
            </ul>
          </div>
        </div>

        {/* Compound Interest */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            Compound Interest Calculator
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Compound interest is the interest earned on both the principal amount and the accumulated interest. This powerful concept is essential for long-term investments and savings planning.
          </p>
          
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <strong>Formula:</strong> Final Amount = Principal × (1 + Rate)^Time
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">How Compound Interest Works</h3>
              <p className="text-muted-foreground mb-4">
                Unlike simple interest, compound interest allows your money to grow exponentially over time. The interest earned each period is added to the principal, creating a snowball effect.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $1,000 at 5% for 10 years<br/>
                  <span className="text-muted-foreground">$1,000 × (1 + 0.05)^10 = $1,628.89</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $5,000 at 8% for 5 years<br/>
                  <span className="text-muted-foreground">$5,000 × (1 + 0.08)^5 = $7,346.64</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Compounding Frequencies</h3>
              <p className="text-muted-foreground mb-4">
                Different compounding periods affect your returns. More frequent compounding means higher returns.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Annual:</strong> Once per year<br/>
                  <span className="text-muted-foreground">Rate = Annual Rate</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Monthly:</strong> 12 times per year<br/>
                  <span className="text-muted-foreground">Rate = Annual Rate ÷ 12</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Daily:</strong> 365 times per year<br/>
                  <span className="text-muted-foreground">Rate = Annual Rate ÷ 365</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Calculator */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-primary" />
            Loan Payment Calculator
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Calculate monthly loan payments, total interest paid, and loan amortization. Essential for mortgage planning, car loans, and personal financing decisions.
          </p>
          
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <strong>Formula:</strong> Monthly Payment = P × [r(1+r)^n] ÷ [(1+r)^n - 1]<br/>
            <span className="text-sm text-muted-foreground">Where: P = Principal, r = Monthly Rate, n = Total Payments</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Mortgage Calculations</h3>
              <p className="text-muted-foreground mb-4">
                Understand your mortgage payments, including principal, interest, taxes, and insurance (PITI).
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $300,000 mortgage at 4% for 30 years<br/>
                  <span className="text-muted-foreground">Monthly Payment: $1,432.25</span><br/>
                  <span className="text-muted-foreground">Total Interest: $215,608.52</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $200,000 mortgage at 3.5% for 15 years<br/>
                  <span className="text-muted-foreground">Monthly Payment: $1,429.77</span><br/>
                  <span className="text-muted-foreground">Total Interest: $57,358.60</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Auto Loan Calculations</h3>
              <p className="text-muted-foreground mb-4">
                Calculate car loan payments and compare different financing options.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $25,000 car loan at 5% for 5 years<br/>
                  <span className="text-muted-foreground">Monthly Payment: $471.78</span><br/>
                  <span className="text-muted-foreground">Total Interest: $3,306.80</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $15,000 car loan at 3% for 3 years<br/>
                  <span className="text-muted-foreground">Monthly Payment: $436.22</span><br/>
                  <span className="text-muted-foreground">Total Interest: $703.92</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Percent className="w-6 h-6 text-primary" />
            ROI (Return on Investment) Calculator
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Calculate the return on your investments to evaluate performance and compare different investment opportunities.
          </p>
          
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <strong>Formula:</strong> ROI = ((Final Value - Initial Investment) ÷ Initial Investment) × 100
          </div>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Investment Examples</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>Stock Investment:</strong><br/>
                    <span className="text-muted-foreground">Bought: $1,000, Sold: $1,300</span><br/>
                    <span className="text-muted-foreground">ROI: ((1,300 - 1,000) ÷ 1,000) × 100 = 30%</span>
                  </div>
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>Real Estate:</strong><br/>
                    <span className="text-muted-foreground">Bought: $200,000, Sold: $250,000</span><br/>
                    <span className="text-muted-foreground">ROI: ((250,000 - 200,000) ÷ 200,000) × 100 = 25%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Business Investment</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>Startup Investment:</strong><br/>
                    <span className="text-muted-foreground">Invested: $50,000, Current Value: $75,000</span><br/>
                    <span className="text-muted-foreground">ROI: ((75,000 - 50,000) ÷ 50,000) × 100 = 50%</span>
                  </div>
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>Equipment Purchase:</strong><br/>
                    <span className="text-muted-foreground">Cost: $10,000, Annual Savings: $3,000</span><br/>
                    <span className="text-muted-foreground">Annual ROI: (3,000 ÷ 10,000) × 100 = 30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APR Calculator */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-primary" />
            APR (Annual Percentage Rate) Calculator
          </h2>
          
          <p className="text-muted-foreground mb-6">
            APR represents the true cost of borrowing, including interest and fees. It&apos;s essential for comparing different loan offers and credit cards.
          </p>
          
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <strong>Formula:</strong> APR = ((Total Interest + Fees) ÷ Principal) × (365 ÷ Days) × 100
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded">
              <strong>Example:</strong> $10,000 loan with $500 interest and $100 fees over 1 year<br/>
              <span className="text-muted-foreground">APR = ((500 + 100) ÷ 10,000) × (365 ÷ 365) × 100 = 6%</span>
            </div>
            <div className="p-4 bg-muted/30 rounded">
              <strong>Example:</strong> $5,000 loan with $300 interest and $50 fees over 6 months<br/>
              <span className="text-muted-foreground">APR = ((300 + 50) ÷ 5,000) × (365 ÷ 180) × 100 = 14.22%</span>
            </div>
          </div>
        </section>

        {/* Tax Calculations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-primary" />
            Tax Calculations
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Calculate income tax, capital gains tax, and other tax implications of your financial decisions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Income Tax Calculator</h3>
              <p className="text-muted-foreground mb-4">
                Estimate your income tax liability based on different tax brackets and deductions.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $60,000 income, 22% tax bracket<br/>
                  <span className="text-muted-foreground">Estimated Tax: $60,000 × 0.22 = $13,200</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $100,000 income, 24% tax bracket<br/>
                  <span className="text-muted-foreground">Estimated Tax: $100,000 × 0.24 = $24,000</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Capital Gains Tax</h3>
              <p className="text-muted-foreground mb-4">
                Calculate taxes on investment profits and asset sales.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $5,000 capital gain, 15% rate<br/>
                  <span className="text-muted-foreground">Tax: $5,000 × 0.15 = $750</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $20,000 capital gain, 20% rate<br/>
                  <span className="text-muted-foreground">Tax: $20,000 × 0.20 = $4,000</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips and Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Financial Planning Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">1. Start Early with Compound Interest</h3>
                <p className="text-sm text-muted-foreground">
                  The earlier you start investing, the more time compound interest has to work in your favor. Even small amounts can grow significantly over decades.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">2. Compare Loan Offers</h3>
                <p className="text-sm text-muted-foreground">
                  Always compare APR rather than just interest rates. APR includes all costs and gives you the true cost of borrowing.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">3. Diversify Your Investments</h3>
                <p className="text-sm text-muted-foreground">
                  Don&apos;t put all your eggs in one basket. Spread your investments across different asset classes to reduce risk.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">4. Consider Tax Implications</h3>
                <p className="text-sm text-muted-foreground">
                  Factor in taxes when calculating returns. Tax-advantaged accounts like IRAs and 401(k)s can significantly improve your after-tax returns.
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
              <h3 className="font-semibold mb-2">What&apos;s the difference between APR and interest rate?</h3>
              <p className="text-muted-foreground">
                The interest rate is the cost of borrowing money, while APR includes the interest rate plus any additional fees or costs associated with the loan.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">How often should I compound my investments?</h3>
              <p className="text-muted-foreground">
                More frequent compounding (daily or monthly) generally provides higher returns than annual compounding, but the difference is often small for long-term investments.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">What&apos;s a good ROI for investments?</h3>
              <p className="text-muted-foreground">
                A good ROI depends on the investment type and risk level. Stock market investments historically average 7-10% annually, while safer investments like bonds typically return 2-5%.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">How do I calculate loan payments manually?</h3>
              <p className="text-muted-foreground">
                Use the formula: Monthly Payment = P × [r(1+r)^n] ÷ [(1+r)^n - 1], where P is principal, r is monthly interest rate, and n is total number of payments.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-muted/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Financial Planning?</h2>
          <p className="text-muted-foreground mb-6">
            Now that you understand financial calculations, try our professional finance calculator for instant results.
          </p>
          <Link 
            href="/finance" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg"
          >
            <DollarSign className="w-6 h-6" />
            Use Finance Calculator Now
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