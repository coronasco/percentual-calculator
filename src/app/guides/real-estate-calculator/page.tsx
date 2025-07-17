import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ArrowRight, Home, TrendingUp, BookOpen, Percent, DollarSign, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate Calculator Guide - Professional Property Calculations",
  description: "Complete guide to using our real estate calculator. Learn commission calculations, rental yield, property appreciation, mortgage payments, and property tax calculations.",
  keywords: "real estate calculator guide, property calculator, commission calculator, rental yield calculator, mortgage calculator, property tax calculator, real estate investment",
  openGraph: {
    title: "Real Estate Calculator Guide - Professional Property Calculations",
    description: "Complete guide to using our real estate calculator. Learn commission calculations, rental yield, property appreciation, mortgage payments, and property tax calculations.",
  },
};

export default function RealEstateCalculatorGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Home className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Real Estate Calculator Guide</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-6">
            Master real estate calculations with our comprehensive guide. Learn commission structures, rental yield analysis, property appreciation, and investment planning.
          </p>
          <Link 
            href="/real-estate" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Home className="w-5 h-5" />
            Try Real Estate Calculator
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
                Commission calculations
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Rental yield analysis
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Property appreciation tracking
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Mortgage payment breakdowns
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Property tax calculations
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Investment analysis
              </li>
            </ul>
          </div>
        </div>

        {/* Commission Calculator */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-primary" />
            Commission Calculator
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Calculate real estate agent commissions, broker fees, and transaction costs. Essential for agents, brokers, and clients to understand the financial aspects of property transactions.
          </p>
          
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <strong>Formula:</strong> Commission = Sale Price × Commission Rate
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Standard Commission Structures</h3>
              <p className="text-muted-foreground mb-4">
                Most real estate transactions use a percentage-based commission structure, typically ranging from 5% to 6% of the sale price.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $500,000 sale at 6% commission<br/>
                  <span className="text-muted-foreground">Commission: $500,000 × 0.06 = $30,000</span><br/>
                  <span className="text-muted-foreground">Agent Split (50%): $15,000</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $300,000 sale at 5% commission<br/>
                  <span className="text-muted-foreground">Commission: $300,000 × 0.05 = $15,000</span><br/>
                  <span className="text-muted-foreground">Agent Split (60%): $9,000</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Tiered Commission Structures</h3>
              <p className="text-muted-foreground mb-4">
                Some brokerages use tiered commission structures where the percentage changes based on the sale price or agent performance.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $750,000 sale with tiered rates<br/>
                  <span className="text-muted-foreground">First $500K: 6% = $30,000</span><br/>
                  <span className="text-muted-foreground">Remaining $250K: 4% = $10,000</span><br/>
                  <span className="text-muted-foreground">Total: $40,000</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> Performance-based bonus<br/>
                  <span className="text-muted-foreground">Base Commission: $20,000</span><br/>
                  <span className="text-muted-foreground">Performance Bonus (10%): $2,000</span><br/>
                  <span className="text-muted-foreground">Total: $22,000</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rental Yield Calculator */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Percent className="w-6 h-6 text-primary" />
            Rental Yield Calculator
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Calculate rental yield to evaluate the profitability of rental properties. This metric helps investors compare different properties and make informed investment decisions.
          </p>
          
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <strong>Formula:</strong> Gross Rental Yield = (Annual Rent ÷ Property Value) × 100<br/>
            <strong>Net Rental Yield:</strong> ((Annual Rent - Annual Expenses) ÷ Property Value) × 100
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Gross vs Net Rental Yield</h3>
              <p className="text-muted-foreground mb-4">
                Gross rental yield doesn&apos;t account for expenses, while net rental yield provides a more accurate picture of profitability.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $400,000 property, $2,500/month rent<br/>
                  <span className="text-muted-foreground">Annual Rent: $2,500 × 12 = $30,000</span><br/>
                  <span className="text-muted-foreground">Gross Yield: (30,000 ÷ 400,000) × 100 = 7.5%</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> Same property with $8,000 annual expenses<br/>
                  <span className="text-muted-foreground">Net Income: $30,000 - $8,000 = $22,000</span><br/>
                  <span className="text-muted-foreground">Net Yield: (22,000 ÷ 400,000) × 100 = 5.5%</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Expense Considerations</h3>
              <p className="text-muted-foreground mb-4">
                Include all property-related expenses when calculating net rental yield for accurate profitability analysis.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Common Expenses:</strong><br/>
                  <span className="text-muted-foreground">• Property taxes</span><br/>
                  <span className="text-muted-foreground">• Insurance</span><br/>
                  <span className="text-muted-foreground">• Maintenance</span><br/>
                  <span className="text-muted-foreground">• Property management fees</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $300,000 property breakdown<br/>
                  <span className="text-muted-foreground">Annual Rent: $24,000</span><br/>
                  <span className="text-muted-foreground">Expenses: $6,000</span><br/>
                  <span className="text-muted-foreground">Net Yield: 6%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Appreciation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            Property Appreciation Calculator
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Track property value appreciation over time to understand investment performance and make informed decisions about buying, selling, or refinancing.
          </p>
          
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <strong>Formula:</strong> Appreciation Rate = ((Current Value - Original Value) ÷ Original Value) × 100
          </div>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Annual Appreciation Examples</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>Property A:</strong><br/>
                    <span className="text-muted-foreground">Bought: $400,000 (2020)</span><br/>
                    <span className="text-muted-foreground">Current: $480,000 (2024)</span><br/>
                    <span className="text-muted-foreground">Appreciation: 20% over 4 years</span><br/>
                    <span className="text-muted-foreground">Annual Rate: 5%</span>
                  </div>
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>Property B:</strong><br/>
                    <span className="text-muted-foreground">Bought: $250,000 (2019)</span><br/>
                    <span className="text-muted-foreground">Current: $325,000 (2024)</span><br/>
                    <span className="text-muted-foreground">Appreciation: 30% over 5 years</span><br/>
                    <span className="text-muted-foreground">Annual Rate: 6%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Market Comparison</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>High-Growth Market:</strong><br/>
                    <span className="text-muted-foreground">Average Annual Appreciation: 8-12%</span><br/>
                    <span className="text-muted-foreground">Risk Level: Higher</span><br/>
                    <span className="text-muted-foreground">Examples: Tech hubs, growing cities</span>
                  </div>
                  <div className="p-3 bg-muted/30 rounded">
                    <strong>Stable Market:</strong><br/>
                    <span className="text-muted-foreground">Average Annual Appreciation: 3-5%</span><br/>
                    <span className="text-muted-foreground">Risk Level: Lower</span><br/>
                    <span className="text-muted-foreground">Examples: Established suburbs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mortgage Calculator */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-primary" />
            Mortgage Payment Calculator
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Calculate mortgage payments, including principal, interest, taxes, and insurance (PITI). Essential for determining affordability and comparing loan options.
          </p>
          
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <strong>Formula:</strong> Monthly Payment = P × [r(1+r)^n] ÷ [(1+r)^n - 1]<br/>
            <span className="text-sm text-muted-foreground">Where: P = Principal, r = Monthly Rate, n = Total Payments</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">PITI Breakdown</h3>
              <p className="text-muted-foreground mb-4">
                Understanding the components of your monthly mortgage payment helps with budgeting and financial planning.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $400,000 mortgage at 4.5% for 30 years<br/>
                  <span className="text-muted-foreground">Principal & Interest: $2,026.74</span><br/>
                  <span className="text-muted-foreground">Property Tax: $333.33</span><br/>
                  <span className="text-muted-foreground">Insurance: $100.00</span><br/>
                  <span className="text-muted-foreground">Total PITI: $2,460.07</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> $300,000 mortgage at 3.75% for 15 years<br/>
                  <span className="text-muted-foreground">Principal & Interest: $2,181.67</span><br/>
                  <span className="text-muted-foreground">Property Tax: $250.00</span><br/>
                  <span className="text-muted-foreground">Insurance: $75.00</span><br/>
                  <span className="text-muted-foreground">Total PITI: $2,506.67</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Down Payment Impact</h3>
              <p className="text-muted-foreground mb-4">
                The size of your down payment affects your monthly payment, interest costs, and whether you need private mortgage insurance (PMI).
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>20% Down Payment:</strong><br/>
                  <span className="text-muted-foreground">Loan Amount: $320,000</span><br/>
                  <span className="text-muted-foreground">Monthly Payment: $1,621.39</span><br/>
                  <span className="text-muted-foreground">PMI: Not required</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>10% Down Payment:</strong><br/>
                  <span className="text-muted-foreground">Loan Amount: $360,000</span><br/>
                  <span className="text-muted-foreground">Monthly Payment: $1,824.06</span><br/>
                  <span className="text-muted-foreground">PMI: $150/month</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Tax Calculator */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-primary" />
            Property Tax Calculator
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Calculate property taxes based on assessed value and local tax rates. Essential for budgeting and understanding the total cost of property ownership.
          </p>
          
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <strong>Formula:</strong> Annual Property Tax = Assessed Value × Tax Rate
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded">
              <strong>Example:</strong> $500,000 property with 1.2% tax rate<br/>
              <span className="text-muted-foreground">Annual Tax: $500,000 × 0.012 = $6,000</span><br/>
              <span className="text-muted-foreground">Monthly Tax: $6,000 ÷ 12 = $500</span>
            </div>
            <div className="p-4 bg-muted/30 rounded">
              <strong>Example:</strong> $350,000 property with 0.8% tax rate<br/>
              <span className="text-muted-foreground">Annual Tax: $350,000 × 0.008 = $2,800</span><br/>
              <span className="text-muted-foreground">Monthly Tax: $2,800 ÷ 12 = $233.33</span>
            </div>
          </div>
        </section>

        {/* Investment Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Real Estate Investment Analysis</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Cash Flow Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Calculate monthly and annual cash flow to determine if a property is a good investment.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> Rental Property Analysis<br/>
                  <span className="text-muted-foreground">Monthly Rent: $2,500</span><br/>
                  <span className="text-muted-foreground">Monthly Expenses: $1,800</span><br/>
                  <span className="text-muted-foreground">Monthly Cash Flow: $700</span><br/>
                  <span className="text-muted-foreground">Annual Cash Flow: $8,400</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> ROI Calculation<br/>
                  <span className="text-muted-foreground">Purchase Price: $400,000</span><br/>
                  <span className="text-muted-foreground">Annual Cash Flow: $8,400</span><br/>
                  <span className="text-muted-foreground">ROI: (8,400 ÷ 400,000) × 100 = 2.1%</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Cap Rate Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Capitalization rate helps evaluate the return on investment for income-producing properties.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Formula:</strong> Cap Rate = (Net Operating Income ÷ Property Value) × 100
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example:</strong> Commercial Property<br/>
                  <span className="text-muted-foreground">Annual Rent: $60,000</span><br/>
                  <span className="text-muted-foreground">Operating Expenses: $15,000</span><br/>
                  <span className="text-muted-foreground">NOI: $45,000</span><br/>
                  <span className="text-muted-foreground">Property Value: $750,000</span><br/>
                  <span className="text-muted-foreground">Cap Rate: (45,000 ÷ 750,000) × 100 = 6%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips and Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Real Estate Investment Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">1. Location is Key</h3>
                <p className="text-sm text-muted-foreground">
                  Choose properties in areas with strong fundamentals: good schools, low crime, job growth, and infrastructure development.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">2. Calculate All Costs</h3>
                <p className="text-sm text-muted-foreground">
                  Include property taxes, insurance, maintenance, property management fees, and vacancy rates in your calculations.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">3. Consider Market Cycles</h3>
                <p className="text-sm text-muted-foreground">
                  Real estate markets go through cycles. Buy during buyer&apos;s markets and consider selling during seller&apos;s markets.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">4. Diversify Your Portfolio</h3>
                <p className="text-sm text-muted-foreground">
                  Don&apos;t put all your money in one property or one market. Spread risk across different property types and locations.
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
              <h3 className="font-semibold mb-2">What&apos;s a good rental yield percentage?</h3>
              <p className="text-muted-foreground">
                A good rental yield typically ranges from 5% to 8%. Higher yields often indicate higher risk or lower appreciation potential, while lower yields may indicate high appreciation potential.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">How do I calculate property appreciation?</h3>
              <p className="text-muted-foreground">
                Use the formula: ((Current Value - Original Value) ÷ Original Value) × 100. For annual rate, divide by the number of years you&apos;ve owned the property.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">What&apos;s included in PITI?</h3>
              <p className="text-muted-foreground">
                PITI stands for Principal, Interest, Taxes, and Insurance. It includes your mortgage payment plus property taxes and homeowner&apos;s insurance.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">How do commission splits work?</h3>
              <p className="text-muted-foreground">
                Commission splits vary by brokerage. Common splits are 50/50, 60/40, or 70/30 between the agent and brokerage. Some brokerages use tiered structures based on performance.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-muted/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Real Estate Investing?</h2>
          <p className="text-muted-foreground mb-6">
            Now that you understand real estate calculations, try our professional real estate calculator for instant results.
          </p>
          <Link 
            href="/real-estate" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg"
          >
            <Home className="w-6 h-6" />
            Use Real Estate Calculator Now
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