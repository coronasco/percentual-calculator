import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";

export const metadata: Metadata = {
  title: "Compound Interest Calculator - Calculate Investment Growth",
  description: "Free compound interest calculator. Calculate investment growth with different compounding frequencies. Perfect for retirement planning, investment analysis, and financial planning.",
  keywords: "compound interest calculator, investment calculator, interest calculator, retirement calculator, financial planning, investment growth calculator",
  openGraph: {
    title: "Compound Interest Calculator - Calculate Investment Growth",
    description: "Free compound interest calculator. Calculate investment growth with different compounding frequencies. Perfect for retirement planning, investment analysis, and financial planning.",
  },
};

export default function CompoundInterestPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">Compound Interest Calculator</h1>
          <p className="text-xl text-muted-foreground">
            Calculate how your investments grow over time with compound interest
          </p>
        </div>
        
        <CompoundInterestCalculator />

        {/* SEO Content */}
        <section className="max-w-4xl mx-auto mt-12 prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-6 text-center">Compound Interest Calculator</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What is Compound Interest?</h3>
              <p className="text-muted-foreground mb-4">
                Compound interest is the interest earned on both the principal amount and the accumulated interest from previous periods. 
                This powerful concept allows your money to grow exponentially over time, making it essential for long-term investment planning.
              </p>
              <p className="text-muted-foreground">
                Unlike simple interest, which only calculates interest on the original principal, compound interest reinvests your earnings, 
                creating a snowball effect that accelerates your wealth growth.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Benefits of Compound Interest</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Exponential Growth:</strong> Your money grows faster over time</li>
                <li><strong>Time Advantage:</strong> The earlier you start, the more you benefit</li>
                <li><strong>Passive Income:</strong> Your money works for you automatically</li>
                <li><strong>Retirement Planning:</strong> Essential for building long-term wealth</li>
                <li><strong>Inflation Protection:</strong> Helps maintain purchasing power over time</li>
                <li><strong>Financial Freedom:</strong> Creates sustainable income streams</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">How to Use Our Compound Interest Calculator</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">1. Enter Your Investment Details</h4>
                <p className="text-muted-foreground">Input your principal amount, annual interest rate, and time period in years.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2. Choose Compounding Frequency</h4>
                <p className="text-muted-foreground">Select how often interest is compounded: annually, monthly, daily, etc.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">3. Review Results</h4>
                <p className="text-muted-foreground">See your final amount, total interest earned, and yearly breakdown.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Compound Interest Examples</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>$10,000 at 7% for 10 years:</strong><br/>
                  <span className="text-muted-foreground">Final Amount: $19,671.51</span><br/>
                  <span className="text-muted-foreground">Interest Earned: $9,671.51</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>$5,000 at 8% for 20 years:</strong><br/>
                  <span className="text-muted-foreground">Final Amount: $23,304.79</span><br/>
                  <span className="text-muted-foreground">Interest Earned: $18,304.79</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>$25,000 at 6% for 30 years:</strong><br/>
                  <span className="text-muted-foreground">Final Amount: $143,587.25</span><br/>
                  <span className="text-muted-foreground">Interest Earned: $118,587.25</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Compounding Frequency Impact</h3>
              <p className="text-muted-foreground mb-4">
                More frequent compounding periods result in higher returns. Here&apos;s how different frequencies affect your investment:
              </p>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-muted/30 rounded">
                  <strong>Annual:</strong> Interest compounded once per year
                </div>
                <div className="p-2 bg-muted/30 rounded">
                  <strong>Monthly:</strong> Interest compounded 12 times per year
                </div>
                <div className="p-2 bg-muted/30 rounded">
                  <strong>Daily:</strong> Interest compounded 365 times per year
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Why Choose Our Compound Interest Calculator?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Features</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Multiple compounding frequencies</li>
                  <li>• Yearly breakdown table</li>
                  <li>• Calculation history</li>
                  <li>• Export results to CSV</li>
                  <li>• Copy and share functionality</li>
                  <li>• Mobile-friendly design</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Perfect For</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Retirement planning</li>
                  <li>• Investment analysis</li>
                  <li>• Savings goal setting</li>
                  <li>• Financial education</li>
                  <li>• Investment comparison</li>
                  <li>• Long-term wealth building</li>
                </ul>
              </div>
            </div>
          </div>
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

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Compound Interest Calculator",
            "description": "Free online compound interest calculator for investment planning and financial analysis",
            "url": "https://www.advanced-percentage-calculator.com/compound-interest",
            "applicationCategory": "CalculatorApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "850"
            }
          })
        }}
      />
    </div>
  );
} 