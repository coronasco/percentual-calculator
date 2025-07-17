import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Calculator, DollarSign, Home, BookOpen, ArrowRight, Percent, TrendingUp, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Calculator Guides - Learn How to Use Our Professional Tools",
  description: "Comprehensive guides for using our percentage, finance, and real estate calculators. Learn formulas, see examples, and master professional calculations.",
  keywords: "calculator guides, percentage calculator guide, finance calculator guide, real estate calculator guide, calculation tutorials, financial formulas",
  openGraph: {
    title: "Calculator Guides - Learn How to Use Our Professional Tools",
    description: "Comprehensive guides for using our percentage, finance, and real estate calculators. Learn formulas, see examples, and master professional calculations.",
  },
};

export default function GuidesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Calculator Guides</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-6">
            Master professional calculations with our comprehensive guides. Learn formulas, see real examples, and understand how to use our calculators effectively.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-muted/50 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4">Why Use Our Calculator Guides?</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Learn Formulas</h3>
              <p className="text-muted-foreground">Understand the mathematical formulas behind each calculation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Real Examples</h3>
              <p className="text-muted-foreground">See practical examples with real numbers and scenarios</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Save Time</h3>
              <p className="text-muted-foreground">Get instant results with our optimized calculators</p>
            </div>
          </div>
        </div>

        {/* Calculator Guides */}
        <div className="space-y-8">
          {/* Percentage Calculator Guide */}
          <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Percent className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Percentage Calculator Guide</h2>
                <p className="text-muted-foreground mb-4">
                  Master percentage calculations including basic percentages, percentage change, markup, discount, and compound interest. Perfect for business, finance, and everyday calculations.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">What You&apos;ll Learn:</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Basic percentage calculations</li>
                      <li>• Percentage increase and decrease</li>
                      <li>• Markup and discount formulas</li>
                      <li>• Compound interest over time</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Perfect For:</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Business owners and retailers</li>
                      <li>• Students and educators</li>
                      <li>• Financial planning</li>
                      <li>• Daily calculations</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link 
                    href="/guides/percentage-calculator" 
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    Read Guide
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Calculator className="w-4 h-4" />
                    Try Calculator
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Finance Calculator Guide */}
          <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Finance Calculator Guide</h2>
                <p className="text-muted-foreground mb-4">
                  Learn professional financial calculations including compound interest, loan payments, ROI analysis, APR calculations, and investment returns. Essential for financial planning and investment decisions.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">What You&apos;ll Learn:</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Compound interest formulas</li>
                      <li>• Loan payment calculations</li>
                      <li>• ROI and APR analysis</li>
                      <li>• Investment return projections</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Perfect For:</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Financial advisors</li>
                      <li>• Investors and traders</li>
                      <li>• Loan officers</li>
                      <li>• Personal finance planning</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link 
                    href="/guides/finance-calculator" 
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    Read Guide
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="/finance" 
                    className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Calculator className="w-4 h-4" />
                    Try Calculator
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Real Estate Calculator Guide */}
          <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Real Estate Calculator Guide</h2>
                <p className="text-muted-foreground mb-4">
                  Master real estate calculations including commission structures, rental yield analysis, property appreciation, mortgage payments, and property tax calculations. Essential for real estate professionals and investors.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">What You&apos;ll Learn:</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Commission calculations</li>
                      <li>• Rental yield analysis</li>
                      <li>• Property appreciation tracking</li>
                      <li>• Mortgage payment breakdowns</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Perfect For:</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Real estate agents</li>
                      <li>• Property investors</li>
                      <li>• Mortgage brokers</li>
                      <li>• Property managers</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link 
                    href="/guides/real-estate-calculator" 
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    Read Guide
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="/real-estate" 
                    className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Calculator className="w-4 h-4" />
                    Try Calculator
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="text-center bg-muted/50 rounded-xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-muted-foreground mb-6">
            Choose a guide that matches your needs and start mastering professional calculations today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/guides/percentage-calculator" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Percent className="w-5 h-5" />
              Percentage Guide
            </Link>
            <Link 
              href="/guides/finance-calculator" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <DollarSign className="w-5 h-5" />
              Finance Guide
            </Link>
            <Link 
              href="/guides/real-estate-calculator" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Home className="w-5 h-5" />
              Real Estate Guide
            </Link>
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
    </div>
  );
} 