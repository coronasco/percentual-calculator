import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { BookOpen, Calculator, ArrowLeft, TrendingUp, CheckCircle, AlertCircle, Info, DollarSign, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Freelance Calculator Guide - How to Calculate Hourly Rates and Project Costs",
  description: "Complete guide to using our freelance calculator. Learn how to calculate hourly rates, project costs, profitability, and taxes. Step-by-step instructions with examples for freelancers and contractors.",
  keywords: "freelance calculator guide, hourly rate calculator guide, project cost calculator guide, freelance pricing tutorial, contractor calculator guide",
  openGraph: {
    title: "Freelance Calculator Guide - How to Calculate Hourly Rates and Project Costs",
    description: "Complete guide to using our freelance calculator. Learn how to calculate hourly rates, project costs, profitability, and taxes. Step-by-step instructions with examples for freelancers and contractors.",
  },
};

export default function FreelanceCalculatorGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-foreground transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground">Freelance Calculator</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <Link 
              href="/guides" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Guides
            </Link>
            <h1 className="text-4xl font-bold mb-4">Freelance Calculator Guide</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Master freelance pricing and project estimation with our comprehensive guide
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/freelance" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Calculator className="w-4 h-4" />
                Try Freelance Calculator
              </Link>
              <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
                <BookOpen className="w-4 h-4" />
                Reading time: 10 minutes
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#overview" className="text-primary hover:underline">1. Overview</a></li>
              <li><a href="#hourly-rate" className="text-primary hover:underline">2. Hourly Rate Calculator</a></li>
              <li><a href="#project-cost" className="text-primary hover:underline">3. Project Cost Calculator</a></li>
              <li><a href="#profitability" className="text-primary hover:underline">4. Profitability Analysis</a></li>
              <li><a href="#tax-calculator" className="text-primary hover:underline">5. Tax Calculator</a></li>
              <li><a href="#pricing-strategies" className="text-primary hover:underline">6. Pricing Strategies</a></li>
              <li><a href="#examples" className="text-primary hover:underline">7. Real-World Examples</a></li>
              <li><a href="#tips" className="text-primary hover:underline">8. Tips and Best Practices</a></li>
              <li><a href="#faq" className="text-primary hover:underline">9. Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Overview Section */}
          <section id="overview" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">1. Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Our Freelance Calculator is a comprehensive tool designed for freelancers, contractors, and independent professionals. 
                It combines four essential calculation tools: Hourly Rate Calculator, Project Cost Estimator, Profitability Analysis, 
                and Tax Calculator, providing everything you need to price your services and manage your business finances.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Hourly Rate Calculator
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Calculate your optimal hourly rate based on expenses, desired profit, and work schedule. 
                    Ensures you cover all costs while remaining competitive.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Personal and business expenses
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Tax considerations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Flexible work schedules
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Profit margin analysis
                    </li>
                  </ul>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-primary" />
                    Project Cost Estimator
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Estimate project costs accurately by combining hourly rates with additional expenses, 
                    discounts, and taxes for professional quotes.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Multiple project support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Additional costs tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Discount calculations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Tax-inclusive pricing
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Profitability Analysis
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Analyze your business profitability by comparing revenue against expenses. 
                    Track profit margins and identify break-even points.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Revenue vs expenses
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Profit margin calculation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Break-even analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Financial planning insights
                    </li>
                  </ul>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Tax Calculator
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Calculate estimated taxes for freelancers and contractors. 
                    Account for business expenses and understand effective tax rates.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Taxable income calculation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Business expense deductions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Effective tax rate analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      After-tax income planning
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Hourly Rate Calculator Section */}
          <section id="hourly-rate" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">2. Hourly Rate Calculator</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                The Hourly Rate Calculator helps you determine the minimum hourly rate you should charge to cover all your expenses 
                and achieve your desired profit. This is crucial for freelancers to ensure they&apos;re not undercharging and can 
                sustain their business long-term.
              </p>

              <h3 className="text-2xl font-semibold mb-4">How to Use the Hourly Rate Calculator</h3>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Step-by-Step Instructions:</h4>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <strong>Enter Personal Expenses:</strong> Add all your monthly personal expenses including rent/mortgage, 
                      utilities, food, insurance, and other living costs.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <strong>Add Business Expenses:</strong> Include all business-related costs such as software subscriptions, 
                      equipment, marketing, professional development, and office supplies.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <strong>Set Work Schedule:</strong> Define how many days per month you work and how many hours per day 
                      you can realistically bill to clients.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                    <div>
                      <strong>Define Profit Goals:</strong> Set your desired monthly profit after covering all expenses. 
                      This should reflect your financial goals and lifestyle needs.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</span>
                    <div>
                      <strong>Adjust Tax Rate:</strong> Set your estimated tax rate based on your location and income level. 
                      The calculator will account for taxes in the final rate.
                    </div>
                  </li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Understanding the Formula</h3>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-mono text-sm mb-4">
                  Hourly Rate = (Total Monthly Expenses + Desired Profit) / (1 - Tax Rate) / Total Billable Hours
                </p>
                <p className="text-sm text-muted-foreground">
                  This formula ensures that after paying taxes, you have enough to cover all expenses and achieve your profit goals. 
                  The calculator automatically adjusts for tax implications to give you the gross rate you need to charge.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg mb-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Pro Tip</h4>
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      Your calculated hourly rate is the minimum you should charge. Consider market rates, your experience level, 
                      and the value you provide when setting your final rate. Don&apos;t be afraid to charge more if you&apos;re 
                      providing exceptional value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Cost Calculator Section */}
          <section id="project-cost" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">3. Project Cost Calculator</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                The Project Cost Calculator helps you create accurate project estimates by combining your hourly rate with 
                additional costs, discounts, and taxes. This ensures you provide professional quotes that cover all expenses 
                and maintain profitability.
              </p>

              <h3 className="text-2xl font-semibold mb-4">How to Use the Project Cost Calculator</h3>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Step-by-Step Instructions:</h4>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <strong>Add Project Details:</strong> Enter the project name and estimated hours required to complete the work.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <strong>Include Additional Costs:</strong> Add any project-specific expenses such as software licenses, 
                      hosting fees, stock assets, or third-party services.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <strong>Apply Discounts:</strong> If offering discounts for large projects or repeat clients, 
                      specify the percentage discount to be applied.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                    <div>
                      <strong>Review Breakdown:</strong> The calculator will show a detailed breakdown including labor costs, 
                      additional expenses, discounts, taxes, and the final total.
                    </div>
                  </li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Project Cost Breakdown</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-muted">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-muted px-4 py-2 text-left">Component</th>
                      <th className="border border-muted px-4 py-2 text-left">Calculation</th>
                      <th className="border border-muted px-4 py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-muted px-4 py-2">Labor Cost</td>
                      <td className="border border-muted px-4 py-2">Hours × Hourly Rate</td>
                      <td className="border border-muted px-4 py-2">Your time and expertise</td>
                    </tr>
                    <tr>
                      <td className="border border-muted px-4 py-2">Additional Costs</td>
                      <td className="border border-muted px-4 py-2">Direct expenses</td>
                      <td className="border border-muted px-4 py-2">Software, hosting, assets</td>
                    </tr>
                    <tr>
                      <td className="border border-muted px-4 py-2">Subtotal</td>
                      <td className="border border-muted px-4 py-2">Labor + Additional</td>
                      <td className="border border-muted px-4 py-2">Before discounts</td>
                    </tr>
                    <tr>
                      <td className="border border-muted px-4 py-2">Discount</td>
                      <td className="border border-muted px-4 py-2">Subtotal × Discount %</td>
                      <td className="border border-muted px-4 py-2">If applicable</td>
                    </tr>
                    <tr>
                      <td className="border border-muted px-4 py-2">Tax</td>
                      <td className="border border-muted px-4 py-2">(Subtotal - Discount) × Tax %</td>
                      <td className="border border-muted px-4 py-2">Sales tax or VAT</td>
                    </tr>
                    <tr>
                      <td className="border border-muted px-4 py-2">Total</td>
                      <td className="border border-muted px-4 py-2">Subtotal - Discount + Tax</td>
                      <td className="border border-muted px-4 py-2">Final project price</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Profitability Analysis Section */}
          <section id="profitability" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">4. Profitability Analysis</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                The Profitability Analysis tool helps you understand your business performance by comparing revenue against expenses. 
                This is essential for making informed decisions about pricing, expenses, and business growth strategies.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Key Metrics Explained</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Gross Profit</h4>
                    <p className="text-sm text-muted-foreground">
                      Revenue minus total expenses. This shows how much money you&apos;re actually making after covering all costs.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Profit Margin</h4>
                    <p className="text-sm text-muted-foreground">
                      Gross profit as a percentage of revenue. Higher margins indicate better profitability and pricing efficiency.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Break-Even Revenue</h4>
                    <p className="text-sm text-muted-foreground">
                      The minimum revenue needed to cover all expenses. Below this point, you&apos;re operating at a loss.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Total Expenses</h4>
                    <p className="text-sm text-muted-foreground">
                      Sum of all personal and business expenses. Understanding this helps with budgeting and pricing decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Important Note</h4>
                    <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                      Aim for a profit margin of at least 20-30% to account for unexpected expenses, business growth, 
                      and personal savings. Lower margins may indicate you need to increase rates or reduce expenses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tax Calculator Section */}
          <section id="tax-calculator" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">5. Tax Calculator</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                The Tax Calculator helps freelancers and contractors estimate their tax obligations and understand their 
                effective tax rate. This is crucial for financial planning and ensuring you set aside enough money for taxes.
              </p>

              <h3 className="text-2xl font-semibold mb-4">How Tax Calculation Works</h3>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Calculation Steps:</h4>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <strong>Calculate Taxable Income:</strong> Annual income minus deductible business expenses.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <strong>Apply Tax Rate:</strong> Calculate estimated tax based on your tax bracket and rate.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <strong>Determine Effective Rate:</strong> Actual tax rate as a percentage of total income.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                    <div>
                      <strong>Calculate After-Tax Income:</strong> Total income minus estimated taxes.
                    </div>
                  </li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Common Deductible Business Expenses</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3">Home Office Expenses</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Rent or mortgage interest (portion used for business)</li>
                    <li>• Utilities (electricity, internet, phone)</li>
                    <li>• Home office furniture and equipment</li>
                    <li>• Office supplies and materials</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Professional Expenses</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Software subscriptions and licenses</li>
                    <li>• Professional development and courses</li>
                    <li>• Business insurance and legal fees</li>
                    <li>• Marketing and advertising costs</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Strategies Section */}
          <section id="pricing-strategies" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">6. Pricing Strategies</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Understanding different pricing strategies helps you position yourself competitively while maintaining profitability. 
                Here are the most common approaches used by successful freelancers.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Cost-Plus Pricing</h3>
                  <p className="text-muted-foreground mb-4">
                    Calculate your costs and add a desired profit margin. This ensures you always cover expenses and make a profit.
                  </p>
                  <div className="bg-muted/30 p-3 rounded text-sm">
                    <strong>Formula:</strong> Cost + (Cost × Profit Margin %) = Price<br/>
                    <strong>Example:</strong> $100 cost + 30% margin = $130 price
                  </div>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Value-Based Pricing</h3>
                  <p className="text-muted-foreground mb-4">
                    Price based on the value you provide to the client, not just your time. This often results in higher rates.
                  </p>
                  <div className="bg-muted/30 p-3 rounded text-sm">
                    <strong>Consider:</strong> Client ROI, project impact, expertise level<br/>
                    <strong>Example:</strong> $5,000 project that saves client $50,000
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Market-Based Pricing</h3>
                  <p className="text-muted-foreground mb-4">
                    Research what competitors charge and position yourself within the market range based on your experience.
                  </p>
                  <div className="bg-muted/30 p-3 rounded text-sm">
                    <strong>Research:</strong> Industry surveys, competitor websites<br/>
                    <strong>Position:</strong> Entry-level, mid-range, or premium
                  </div>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Project-Based Pricing</h3>
                  <p className="text-muted-foreground mb-4">
                    Charge a fixed price for entire projects rather than hourly rates. This can increase your effective hourly rate.
                  </p>
                  <div className="bg-muted/30 p-3 rounded text-sm">
                    <strong>Benefits:</strong> Predictable income, efficiency incentives<br/>
                    <strong>Risk:</strong> Underestimating project scope
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Examples Section */}
          <section id="examples" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">7. Real-World Examples</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Example 1: Web Developer</h3>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Sarah - Freelance Web Developer</h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h5 className="font-semibold mb-2">Monthly Expenses:</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Rent: $1,500</li>
                      <li>• Utilities: $200</li>
                      <li>• Food: $400</li>
                      <li>• Insurance: $150</li>
                      <li>• Software: $100</li>
                      <li>• Marketing: $200</li>
                      <li><strong>Total: $2,550</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Work Schedule:</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Work days: 20/month</li>
                      <li>• Hours per day: 8</li>
                      <li>• Billable hours: 160</li>
                      <li>• Desired profit: $3,000</li>
                      <li>• Tax rate: 25%</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded">
                  <strong>Calculated Hourly Rate: $43.75/hour</strong><br/>
                  <span className="text-sm text-muted-foreground">
                    This ensures Sarah covers all expenses, achieves her profit goal, and accounts for taxes.
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Example 2: Graphic Designer</h3>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Project: Brand Identity Package</h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h5 className="font-semibold mb-2">Project Details:</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Logo design: 8 hours</li>
                      <li>• Brand guidelines: 4 hours</li>
                      <li>• Business cards: 2 hours</li>
                      <li>• Total hours: 14</li>
                      <li>• Hourly rate: $50</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Additional Costs:</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Stock assets: $50</li>
                      <li>• Font licenses: $30</li>
                      <li>• Printing samples: $20</li>
                      <li>• Total additional: $100</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded">
                  <strong>Project Breakdown:</strong><br/>
                  <span className="text-sm text-muted-foreground">
                    Labor: $700 | Additional: $100 | Subtotal: $800 | Tax (25%): $200 | <strong>Total: $1,000</strong>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section id="tips" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">8. Tips and Best Practices</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">For New Freelancers</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Start with cost-plus pricing to ensure profitability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Track all expenses meticulously from day one</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Set aside 25-30% of income for taxes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Don&apos;t undercharge to get clients - it sets bad precedents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Create detailed project proposals with clear scope</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Build an emergency fund for slow periods</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">For Experienced Freelancers</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Regularly review and increase your rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Consider value-based pricing for high-value projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Diversify income streams beyond client work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Automate expense tracking and invoicing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Negotiate better terms with long-term clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Invest in professional development and tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">9. Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Q: How often should I review my hourly rate?</h3>
                <p className="text-muted-foreground">
                  Review your rates at least annually, or whenever your expenses, skills, or market conditions change significantly. 
                  Consider increasing rates by 10-20% each year to account for inflation and growing expertise.
                </p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Q: Should I charge different rates for different clients?</h3>
                <p className="text-muted-foreground">
                  Yes, it&apos;s common to have different rates based on project complexity, client budget, long-term relationships, 
                  or the value you provide. However, maintain consistency within similar project types to avoid confusion.
                </p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Q: How do I handle scope creep in projects?</h3>
                <p className="text-muted-foreground">
                  Always have a detailed project scope in writing. For additional work, either charge extra or include a buffer 
                  in your initial estimate. Don&apos;t be afraid to say no to requests that fall outside the agreed scope.
                </p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Q: What&apos;s the difference between gross and net income?</h3>
                <p className="text-muted-foreground">
                  Gross income is your total revenue before expenses and taxes. Net income is what you actually take home after 
                  deducting all business expenses, taxes, and other obligations. Always plan based on net income.
                </p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Q: How do I know if my rates are competitive?</h3>
                <p className="text-muted-foreground">
                  Research industry surveys, competitor websites, and freelance platforms. Consider your experience level, 
                  location, and the value you provide. Remember, being the cheapest isn&apos;t always the best strategy.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Calculate Your Freelance Rates?</h2>
            <p className="text-muted-foreground mb-6">
              Use our Freelance Calculator to set competitive rates and create accurate project estimates.
            </p>
            <Link 
              href="/freelance" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Calculator className="w-5 h-5" />
              Start Calculating Now
            </Link>
          </div>
        </div>
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