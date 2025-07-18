import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import FreelanceCalculator from "@/components/calculators/FreelanceCalculator";

export const metadata: Metadata = {
  title: "Freelance Calculator - Hourly Rate & Project Cost Calculator",
  description: "Free freelance calculator for freelancers and contractors. Calculate hourly rates, project costs, profitability, and taxes. Perfect for pricing projects and financial planning.",
  keywords: "freelance calculator, hourly rate calculator, project cost calculator, freelance pricing, contractor calculator, freelance hourly rate, project estimation",
  openGraph: {
    title: "Freelance Calculator - Hourly Rate & Project Cost Calculator",
    description: "Free freelance calculator for freelancers and contractors. Calculate hourly rates, project costs, profitability, and taxes. Perfect for pricing projects and financial planning.",
  },
};

export default function FreelancePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">Freelance Calculator</h1>
          <p className="text-xl text-muted-foreground">
            Calculate hourly rates, project costs, and profitability for freelancers
          </p>
        </div>
        
        <FreelanceCalculator />

        {/* SEO Content */}
        <section className="max-w-4xl mx-auto mt-12 prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-6 text-center">Freelance Calculator</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Hourly Rate Calculator</h3>
              <p className="text-muted-foreground mb-4">
                Calculate your optimal hourly rate based on your expenses, desired profit, and work schedule. 
                This ensures you cover all costs and achieve your financial goals while remaining competitive.
              </p>
              <p className="text-muted-foreground">
                Our calculator considers both personal and business expenses, tax implications, and your target profit 
                to determine the minimum hourly rate you should charge.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Project Cost Estimator</h3>
              <p className="text-muted-foreground mb-4">
                Estimate project costs accurately by combining your hourly rate with additional expenses, 
                discounts, and taxes. Perfect for creating professional quotes and proposals.
              </p>
              <p className="text-muted-foreground">
                The project calculator helps you account for all costs including software licenses, 
                hosting fees, and other project-specific expenses.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Profitability Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Analyze your business profitability by comparing revenue against expenses. 
                Track profit margins and identify your break-even point for better financial planning.
              </p>
              <p className="text-muted-foreground">
                Understanding your profitability helps you make informed decisions about pricing, 
                expenses, and business growth strategies.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Tax Calculator</h3>
              <p className="text-muted-foreground mb-4">
                Calculate estimated taxes for freelancers and contractors. Account for business expenses 
                and understand your effective tax rate for better financial planning.
              </p>
              <p className="text-muted-foreground">
                The tax calculator helps you set aside the right amount for taxes and understand 
                your true after-tax income.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">How to Use Our Freelance Calculator</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Hourly Rate Calculator</h4>
                <ol className="space-y-1 text-muted-foreground">
                  <li>1. Enter your monthly personal expenses</li>
                  <li>2. Add your business expenses</li>
                  <li>3. Set your work schedule and desired profit</li>
                  <li>4. View your recommended hourly rate</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Project Cost Calculator</h4>
                <ol className="space-y-1 text-muted-foreground">
                  <li>1. Add project details and estimated hours</li>
                  <li>2. Include additional costs and discounts</li>
                  <li>3. See detailed cost breakdown</li>
                  <li>4. Get final project price with taxes</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Hourly Rate Calculation Examples</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example Freelancer:</strong><br/>
                  <span className="text-muted-foreground">Monthly Expenses: $3,500</span><br/>
                  <span className="text-muted-foreground">Business Expenses: $800</span><br/>
                  <span className="text-muted-foreground">Desired Profit: $2,000</span><br/>
                  <span className="text-muted-foreground">Work Schedule: 20 days × 8 hours</span><br/>
                  <span className="text-muted-foreground"><strong>Recommended Rate: $52.50/hour</strong></span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Factors Affecting Rate:</strong><br/>
                  <span className="text-muted-foreground">• Cost of living in your area</span><br/>
                  <span className="text-muted-foreground">• Industry standards and competition</span><br/>
                  <span className="text-muted-foreground">• Your experience and expertise</span><br/>
                  <span className="text-muted-foreground">• Project complexity and value</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Project Cost Examples</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Website Development Project:</strong><br/>
                  <span className="text-muted-foreground">Hours: 40 @ $50/hour = $2,000</span><br/>
                  <span className="text-muted-foreground">Additional Costs: $300 (hosting, domain)</span><br/>
                  <span className="text-muted-foreground">Subtotal: $2,300</span><br/>
                  <span className="text-muted-foreground">Tax (25%): $575</span><br/>
                  <span className="text-muted-foreground"><strong>Total: $2,875</strong></span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Logo Design Project:</strong><br/>
                  <span className="text-muted-foreground">Hours: 8 @ $50/hour = $400</span><br/>
                  <span className="text-muted-foreground">Additional Costs: $50 (stock assets)</span><br/>
                  <span className="text-muted-foreground">Subtotal: $450</span><br/>
                  <span className="text-muted-foreground">Tax (25%): $112.50</span><br/>
                  <span className="text-muted-foreground"><strong>Total: $562.50</strong></span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Business Benefits</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Accurate Pricing:</strong> Set rates that cover all costs and ensure profitability</li>
                <li><strong>Professional Quotes:</strong> Create detailed, transparent project estimates</li>
                <li><strong>Financial Planning:</strong> Understand your true income and expenses</li>
                <li><strong>Tax Preparation:</strong> Plan for tax obligations and avoid surprises</li>
                <li><strong>Competitive Analysis:</strong> Compare your rates with market standards</li>
                <li><strong>Growth Planning:</strong> Identify opportunities to increase profitability</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Features for Freelancers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Expense Tracking:</strong> Separate personal and business expenses</li>
                <li><strong>Flexible Scheduling:</strong> Adjust work days and hours as needed</li>
                <li><strong>Tax Considerations:</strong> Account for tax rates in calculations</li>
                <li><strong>Project Management:</strong> Track multiple projects simultaneously</li>
                <li><strong>Profit Analysis:</strong> Monitor margins and break-even points</li>
                <li><strong>Export Results:</strong> Save and share calculations with clients</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Why Choose Our Freelance Calculator?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">For New Freelancers</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Set competitive rates from the start</li>
                  <li>• Understand all business costs</li>
                  <li>• Plan for taxes and expenses</li>
                  <li>• Create professional proposals</li>
                  <li>• Track profitability over time</li>
                  <li>• Build sustainable pricing strategies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">For Experienced Freelancers</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Optimize existing pricing</li>
                  <li>• Analyze project profitability</li>
                  <li>• Plan for business growth</li>
                  <li>• Prepare for tax season</li>
                  <li>• Benchmark against market rates</li>
                  <li>• Streamline project estimation</li>
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
            "name": "Freelance Calculator",
            "description": "Free online freelance calculator for hourly rates and project costs",
            "url": "https://www.advanced-percentage-calculator.com/freelance",
            "applicationCategory": "CalculatorApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "1200"
            }
          })
        }}
      />
    </div>
  );
} 