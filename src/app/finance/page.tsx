import { Metadata } from "next";
import { FinanceCalculator } from "@/components/calculators/FinanceCalculator";
import { Header } from "@/components/Header";
import Link from "next/link";
import { Calculator, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Finance Calculator - Free Financial Tools for Professionals",
  description: "Free online finance calculator for compound interest, loan calculations, investment returns, tax calculations, and financial planning. Professional tools for financial advisors, accountants, and investors.",
  keywords: "finance calculator, compound interest calculator, loan calculator, investment calculator, financial planning tools, ROI calculator, APR calculator, financial advisor tools, accounting calculator, investment returns calculator, tax calculator, mortgage calculator, financial ratios calculator",
  openGraph: {
    title: "Finance Calculator - Free Financial Tools for Professionals",
    description: "Free online finance calculator for compound interest, loan calculations, investment returns, tax calculations, and financial planning.",
  },
};

export default function FinancePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center w-full px-4 py-8 gap-6" role="main">
        <div className="text-center max-w-2xl">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3">
            Finance Calculator
          </h1>
          <p className="text-muted-foreground mb-6">
            Professional financial tools for investments, loans, and planning.
          </p>
        </div>
        
        <FinanceCalculator />

        {/* Other Calculators */}
        <section className="max-w-2xl mx-auto px-4 mt-8" aria-label="Other calculators">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Other Professional Calculators</h3>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 px-4 py-2 rounded-lg transition-colors"
              >
                <Calculator className="w-4 h-4" />
                Percentage Calculator
              </Link>
              <Link 
                href="/real-estate" 
                className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 px-4 py-2 rounded-lg transition-colors"
              >
                <Home className="w-4 h-4" />
                Real Estate Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="max-w-4xl mx-auto px-4 mt-12" aria-label="Finance Calculator Information">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-center">Professional Finance Calculator</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">What is a Finance Calculator?</h3>
                <p className="text-muted-foreground mb-4">
                  A finance calculator is an essential tool for financial professionals, investors, and individuals 
                  who need to perform complex financial calculations. Our free online finance calculator provides 
                  accurate results for compound interest, loan payments, investment returns, and financial planning.
                </p>
                <p className="text-muted-foreground">
                  Whether you&apos;re a financial advisor, accountant, investor, or simply planning your personal finances, 
                  our finance calculator offers the tools you need for professional-grade calculations.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Financial Calculation Types</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Compound Interest:</strong> Calculate interest earned over time with compounding</li>
                  <li><strong>Loan Calculator:</strong> Determine monthly payments and total interest</li>
                  <li><strong>Investment Calculator:</strong> Calculate returns and future value</li>
                  <li><strong>ROI Calculator:</strong> Return on Investment analysis</li>
                  <li><strong>APR Calculator:</strong> Annual Percentage Rate calculations</li>
                  <li><strong>Tax Calculator:</strong> Income and investment tax calculations</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">How to Use Our Finance Calculator</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">1. Select Calculation Type</h4>
                  <p className="text-muted-foreground">Choose from compound interest, loan calculations, investment returns, ROI, APR, or tax calculations.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Enter Financial Data</h4>
                  <p className="text-muted-foreground">Input principal amounts, interest rates, time periods, and other relevant financial parameters.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Get Professional Results</h4>
                  <p className="text-muted-foreground">View detailed calculations with formulas, breakdowns, and professional-grade accuracy.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Finance Calculator Examples</h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>Compound Interest:</strong><br/>
                    <span className="text-muted-foreground">$10,000 at 5% for 10 years = $16,288.95</span>
                  </div>
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>Loan Payment:</strong><br/>
                    <span className="text-muted-foreground">$200,000 mortgage at 4% for 30 years = $954.83/month</span>
                  </div>
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>ROI Calculation:</strong><br/>
                    <span className="text-muted-foreground">Investment of $5,000 returns $6,500 = 30% ROI</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Applications</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Financial Advisors:</strong> Client investment planning and portfolio analysis</li>
                  <li><strong>Accountants:</strong> Tax calculations and financial reporting</li>
                  <li><strong>Investors:</strong> Investment analysis and return calculations</li>
                  <li><strong>Banking:</strong> Loan calculations and interest rate analysis</li>
                  <li><strong>Real Estate:</strong> Mortgage calculations and investment returns</li>
                  <li><strong>Business Owners:</strong> Financial planning and investment decisions</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Why Choose Our Finance Calculator?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Professional Features</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Multiple calculation types</li>
                    <li>• Professional-grade accuracy</li>
                    <li>• Detailed breakdowns</li>
                    <li>• Formula explanations</li>
                    <li>• Export functionality</li>
                    <li>• Mobile-responsive design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Benefits</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 100% free to use</li>
                    <li>• No registration required</li>
                    <li>• Works offline</li>
                    <li>• Privacy-focused</li>
                    <li>• Professional results</li>
                    <li>• Industry-standard calculations</li>
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
              © {new Date().getFullYear()} Free finance calculator
            </div>
          </div>
        </div>
      </footer>

      {/* Schema Markup for Finance Calculator */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Finance Calculator",
            "description": "Free online finance calculator for compound interest, loan calculations, investment returns, and financial planning",
            "url": "https://www.advanced-percentage-calculator.com/finance",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Compound interest calculations",
              "Loan payment calculator",
              "Investment return calculator",
              "ROI calculator",
              "APR calculator",
              "Tax calculations"
            ],
            "author": {
              "@type": "Organization",
              "name": "Advanced Percentage Calculator"
            }
          })
        }}
      />
    </div>
  );
} 