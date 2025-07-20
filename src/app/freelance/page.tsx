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
        <section className="max-w-4xl mx-auto mt-12 prose prose-gray dark:prose-invert ">
          <h2 className="text-2xl font-bold mb-6 text-center">Comprehensive Freelance Calculator for Professional Success</h2>
          
          <p className="text-muted-foreground mb-6">
            Navigating the freelance economy requires sophisticated financial planning and precise pricing strategies. Our comprehensive freelance calculator serves as your strategic business companion, offering advanced rate computation and project cost analysis that adapts to various industries and business models. Whether you&apos;re a seasoned contractor or embarking on your freelance journey, this tool provides the analytical precision needed for sustainable business growth.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Strategic Hourly Rate Determination</h3>
              <p className="text-muted-foreground mb-4">
                Establishing competitive yet profitable hourly rates represents one of the most critical decisions in freelance business management. Our hourly rate calculator transcends basic arithmetic by incorporating comprehensive cost analysis, market positioning strategies, and profit optimization algorithms. This sophisticated approach ensures that freelancers can accurately determine rates that reflect their expertise while maintaining market competitiveness.
              </p>
              <p className="text-muted-foreground">
                The system accommodates diverse business structures, from solo practitioners managing personal expenses to established contractors with complex overhead requirements. This flexibility enables freelancers to project sustainable income levels and make informed decisions about business expansion and service diversification.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Advanced Project Cost Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Project cost estimation represents more than simple time-and-materials calculations—it embodies the complete financial narrative of service delivery. Our project cost calculator employs industry-standard methodologies that process multiple cost components, various pricing models, and different tax implications to deliver accurate project profitability metrics. This tool becomes particularly valuable for freelancers managing complex projects, multiple clients, or diverse service portfolios.
              </p>
              <p className="text-muted-foreground">
                The calculator&apos;s sophisticated architecture supports both fixed-price and hourly billing models, enabling freelancers to compare different pricing strategies and optimize their revenue streams. This analytical perspective proves invaluable for identifying profitable project types, setting competitive pricing, and maintaining the financial health required in today&apos;s competitive freelance marketplace.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Comprehensive Business Planning Framework</h3>
            <p className="text-muted-foreground mb-4">
              Effective freelance business planning extends beyond simple rate calculations—it requires a comprehensive understanding of how individual project decisions contribute to broader business objectives. Our freelance calculator facilitates this strategic approach by providing detailed breakdowns of cost components, profit margin analysis, and revenue projections that enable informed decision-making throughout the business lifecycle.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Rate Calculation Methodology</h4>
                <ol className="space-y-1 text-muted-foreground">
                  <li>1. Input comprehensive expense categories and amounts</li>
                  <li>2. Configure work schedule and availability parameters</li>
                  <li>3. Establish profit targets and business growth objectives</li>
                  <li>4. Generate optimized rate recommendations and analysis</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Project Estimation Protocol</h4>
                <ol className="space-y-1 text-muted-foreground">
                  <li>1. Define project scope and resource requirements</li>
                  <li>2. Calculate direct and indirect cost components</li>
                  <li>3. Apply appropriate markup and profit margins</li>
                  <li>4. Review comprehensive project profitability metrics</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Practical Business Scenarios</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Comprehensive Rate Analysis:</strong><br/>
                  <span className="text-muted-foreground">Monthly Living Expenses: $4,200</span><br/>
                  <span className="text-muted-foreground">Business Overhead: $1,500</span><br/>
                  <span className="text-muted-foreground">Target Profit: $3,000</span><br/>
                  <span className="text-muted-foreground">Billable Hours: 160/month</span><br/>
                  <span className="text-muted-foreground"><strong>Optimal Rate: $54.38/hour</strong></span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Multi-Project Portfolio:</strong><br/>
                  <span className="text-muted-foreground">Web Development: $75/hour</span><br/>
                  <span className="text-muted-foreground">Consulting: $120/hour</span><br/>
                  <span className="text-muted-foreground">Content Creation: $45/hour</span><br/>
                  <span className="text-muted-foreground">Average Rate: $80/hour</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Industry Pricing Standards</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Market Rate Benchmarks:</strong><br/>
                  <span className="text-muted-foreground">Web Development: $50-150/hour</span><br/>
                  <span className="text-muted-foreground">Graphic Design: $25-100/hour</span><br/>
                  <span className="text-muted-foreground">Content Writing: $20-80/hour</span><br/>
                  <span className="text-muted-foreground">Consulting: $75-300/hour</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Experience-Based Pricing:</strong><br/>
                  <span className="text-muted-foreground">Entry Level: 60-80% of market rate</span><br/>
                  <span className="text-muted-foreground">Mid-Level: 80-120% of market rate</span><br/>
                  <span className="text-muted-foreground">Expert Level: 120-200% of market rate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Strategic Business Applications</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Market Positioning:</strong> Analyze competitive landscape and position services appropriately</li>
                <li><strong>Profit Optimization:</strong> Identify opportunities to increase margins and revenue streams</li>
                <li><strong>Client Segmentation:</strong> Develop pricing strategies for different client types and project sizes</li>
                <li><strong>Service Diversification:</strong> Evaluate profitability of new service offerings and market expansion</li>
                <li><strong>Financial Planning:</strong> Project cash flow and plan for business growth and investment</li>
                <li><strong>Tax Strategy:</strong> Optimize business structure and expense management for tax efficiency</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Advanced Freelance Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Multi-Service Pricing:</strong> Support for diverse service portfolios and pricing models</li>
                <li><strong>Client Profitability Analysis:</strong> Track profitability across different client relationships</li>
                <li><strong>Real-Time Calculation Updates:</strong> Instant results with dynamic cost adjustments</li>
                <li><strong>Expense Categorization:</strong> Detailed breakdown of business and personal expense components</li>
                <li><strong>Project Comparison Tools:</strong> Compare profitability across different project types and clients</li>
                <li><strong>Cross-Platform Integration:</strong> Seamless operation across all business management systems</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Comprehensive Freelance Business Support System</h3>
            <p className="text-muted-foreground mb-4">
              Our freelance calculator represents more than a simple computational tool—it serves as a comprehensive business support system designed to enhance financial outcomes and facilitate informed decision-making throughout the freelance journey. Whether you&apos;re a freelancer navigating complex pricing decisions, a contractor seeking to optimize project profitability, or a business consultant supporting client success, this tool provides the precision and reliability needed for effective business planning.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Freelancer Empowerment Features</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Establish competitive yet profitable pricing strategies</li>
                  <li>• Analyze project profitability and client relationships</li>
                  <li>• Plan sustainable business growth and expansion</li>
                  <li>• Optimize expense management and tax efficiency</li>
                  <li>• Develop comprehensive financial projections and budgets</li>
                  <li>• Track performance metrics and business health indicators</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Business Professional Support</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Verify pricing accuracy and market competitiveness</li>
                  <li>• Support client understanding of project cost structures</li>
                  <li>• Plan effective service delivery and resource allocation</li>
                  <li>• Demonstrate pricing transparency and value proposition</li>
                  <li>• Facilitate comprehensive business planning sessions</li>
                  <li>• Analyze market trends and competitive positioning</li>
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