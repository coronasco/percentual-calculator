import { Metadata } from "next";
import { RealEstateCalculator } from "@/components/calculators/RealEstateCalculator";
import { Header } from "@/components/Header";
import Link from "next/link";
import { Calculator, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate Calculator - Free Tools for Real Estate Agents & Investors",
  description: "Free online real estate calculator for commission calculations, property appreciation, mortgage payments, rental yields, and investment analysis. Professional tools for real estate agents, investors, and property managers.",
  keywords: "real estate calculator, commission calculator, property appreciation calculator, mortgage calculator, rental yield calculator, real estate investment calculator, property value calculator, real estate agent tools, property investment calculator, rental property calculator, real estate ROI calculator, property tax calculator, real estate commission calculator, mortgage payment calculator, property appreciation calculator",
  openGraph: {
    title: "Real Estate Calculator - Free Tools for Real Estate Agents & Investors",
    description: "Free online real estate calculator for commission calculations, property appreciation, mortgage payments, rental yields, and investment analysis.",
  },
};

export default function RealEstatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center w-full px-4 py-8 gap-6" role="main">
        <div className="text-center max-w-2xl">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3">
            Real Estate Calculator
          </h1>
          <p className="text-muted-foreground mb-6">
            Professional tools for real estate agents, investors, and property managers.
          </p>
        </div>
        
        <RealEstateCalculator />

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
                href="/finance" 
                className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 px-4 py-2 rounded-lg transition-colors"
              >
                <DollarSign className="w-4 h-4" />
                Finance Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="max-w-4xl mx-auto px-4 mt-12" aria-label="Real Estate Calculator Information">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-center">Professional Real Estate Calculator</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">What is a Real Estate Calculator?</h3>
                <p className="text-muted-foreground mb-4">
                  A real estate calculator is an essential tool for real estate professionals, investors, and property managers 
                  who need to perform complex property-related calculations. Our free online real estate calculator provides 
                  accurate results for commission calculations, property appreciation, mortgage payments, and investment analysis.
                </p>
                <p className="text-muted-foreground">
                  Whether you&apos;re a real estate agent calculating commissions, an investor analyzing rental yields, 
                  or a property manager evaluating investments, our real estate calculator offers the tools you need.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Real Estate Calculation Types</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Commission Calculator:</strong> Calculate real estate agent commissions</li>
                  <li><strong>Property Appreciation:</strong> Estimate property value growth over time</li>
                  <li><strong>Mortgage Calculator:</strong> Determine monthly mortgage payments</li>
                  <li><strong>Rental Yield:</strong> Calculate rental property returns</li>
                  <li><strong>ROI Calculator:</strong> Real estate investment returns</li>
                  <li><strong>Property Tax:</strong> Estimate property tax calculations</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">How to Use Our Real Estate Calculator</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">1. Select Calculation Type</h4>
                  <p className="text-muted-foreground">Choose from commission, appreciation, mortgage, rental yield, ROI, or property tax calculations.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Enter Property Data</h4>
                  <p className="text-muted-foreground">Input property values, commission rates, mortgage terms, and other relevant parameters.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Get Professional Results</h4>
                  <p className="text-muted-foreground">View detailed calculations with breakdowns, formulas, and professional-grade accuracy.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Real Estate Calculator Examples</h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>Commission Calculation:</strong><br/>
                    <span className="text-muted-foreground">$500,000 property at 3% commission = $15,000</span>
                  </div>
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>Property Appreciation:</strong><br/>
                    <span className="text-muted-foreground">$300,000 property at 5% annual growth = $315,000 after 1 year</span>
                  </div>
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>Rental Yield:</strong><br/>
                    <span className="text-muted-foreground">$2,000 monthly rent on $400,000 property = 6% annual yield</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Applications</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Real Estate Agents:</strong> Commission calculations and property valuations</li>
                  <li><strong>Property Investors:</strong> Investment analysis and return calculations</li>
                  <li><strong>Property Managers:</strong> Rental yield and property performance analysis</li>
                  <li><strong>Mortgage Brokers:</strong> Loan calculations and payment schedules</li>
                  <li><strong>Property Developers:</strong> Project feasibility and profit analysis</li>
                  <li><strong>Home Buyers:</strong> Mortgage affordability and property comparison</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Why Choose Our Real Estate Calculator?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Professional Features</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Multiple calculation types</li>
                    <li>• Industry-standard formulas</li>
                    <li>• Detailed breakdowns</li>
                    <li>• Commission structures</li>
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
                    <li>• Real estate industry specific</li>
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
              © {new Date().getFullYear()} Free real estate calculator
            </div>
          </div>
        </div>
      </footer>

      {/* Schema Markup for Real Estate Calculator */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Real Estate Calculator",
            "description": "Free online real estate calculator for commission calculations, property appreciation, mortgage payments, and investment analysis",
            "url": "https://www.advanced-percentage-calculator.com/real-estate",
            "applicationCategory": "RealEstateApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Commission calculations",
              "Property appreciation calculator",
              "Mortgage payment calculator",
              "Rental yield calculator",
              "ROI calculator",
              "Property tax calculator"
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