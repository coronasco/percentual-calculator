import PercentageForm from "@/components/PercentageForm";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Calculator } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Header */}
      <header className="border-b" role="banner">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-primary" aria-hidden="true" />
            <span className="font-bold text-lg">PercentageCalculator</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="text-primary font-medium">Percentage</Link>
            <Link href="/finance" className="hover:text-primary transition-colors">Finance</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center w-full px-4 py-8 gap-6" role="main">
        <div className="text-center max-w-2xl">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3">
            Percentage Calculator
          </h1>
          <p className="text-muted-foreground mb-6">
            Quick and easy percentage calculations for everyday use.
          </p>
        </div>
        
        <PercentageForm />

        {/* SEO Content */}
        <section className="max-w-4xl mx-auto px-4 mt-12" aria-label="Percentage Calculator Information">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-center">Free Online Percentage Calculator</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">What is a Percentage Calculator?</h3>
                <p className="text-muted-foreground mb-4">
                  A percentage calculator is an essential tool for calculating percentages, discounts, markups, and financial ratios. 
                  Whether you need to calculate sales tax, tip amounts, or investment returns, our free percentage calculator 
                  provides instant results with precision.
                </p>
                <p className="text-muted-foreground">
                  Our online percentage calculator supports multiple calculation types including percentage of a number, 
                  reverse percentage calculations, and percentage change between values.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Common Percentage Calculations</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Discount Calculator:</strong> Calculate final price after percentage discount</li>
                  <li><strong>Markup Calculator:</strong> Add percentage markup to original price</li>
                  <li><strong>Percentage Change:</strong> Find increase or decrease between two values</li>
                  <li><strong>Compound Interest:</strong> Calculate interest over time with compounding</li>
                  <li><strong>Tip Calculator:</strong> Calculate tip amounts for services</li>
                  <li><strong>Tax Calculator:</strong> Calculate sales tax and VAT amounts</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">How to Use Our Percentage Calculator</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">1. Select Calculation Type</h4>
                  <p className="text-muted-foreground">Choose from percentage of number, reverse percentage, markup, discount, or compound interest calculations.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Enter Your Values</h4>
                  <p className="text-muted-foreground">Input the numbers you want to calculate. For compound interest, add the time period in years.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Get Instant Results</h4>
                  <p className="text-muted-foreground">View your calculation result with formula explanation and save to history for future reference.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Percentage Calculator Examples</h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>What is 15% of 200?</strong><br/>
                    <span className="text-muted-foreground">Answer: 30 (15% × 200 = 30)</span>
                  </div>
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>50 is what percent of 200?</strong><br/>
                    <span className="text-muted-foreground">Answer: 25% (50 ÷ 200 × 100 = 25%)</span>
                  </div>
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>Price increase from $100 to $120?</strong><br/>
                    <span className="text-muted-foreground">Answer: 20% increase ((120-100) ÷ 100 × 100 = 20%)</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Business & Finance Applications</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Retail:</strong> Calculate discounts, markups, and profit margins</li>
                  <li><strong>Finance:</strong> Investment returns, interest rates, and loan calculations</li>
                  <li><strong>Real Estate:</strong> Property value changes and commission calculations</li>
                  <li><strong>Taxes:</strong> Sales tax, VAT, and tax rate calculations</li>
                  <li><strong>Statistics:</strong> Data analysis and percentage distributions</li>
                  <li><strong>Education:</strong> Grade calculations and academic performance metrics</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Why Choose Our Free Percentage Calculator?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Features</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Multiple calculation types</li>
                    <li>• Instant results with formulas</li>
                    <li>• History tracking and export</li>
                    <li>• Dark mode support</li>
                    <li>• Mobile-friendly design</li>
                    <li>• No registration required</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Benefits</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 100% free to use</li>
                    <li>• Works offline</li>
                    <li>• Accurate calculations</li>
                    <li>• Professional results</li>
                    <li>• Privacy-focused</li>
                    <li>• No registration required</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t" role="contentinfo">
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

      {/* Schema Markup for Calculator */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Advanced Percentage Calculator",
            "description": "Free online percentage calculator for various calculations including markup, discount, and compound interest",
            "url": "https://www.advanced-percentage-calculator.com",
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
              "ratingCount": "1250"
            }
          })
        }}
      />
    </div>
  );
}
