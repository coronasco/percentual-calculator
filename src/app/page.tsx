import PercentageForm from "@/components/PercentageForm";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Calculator, Zap, Shield, Clock } from "lucide-react";

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
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center w-full px-4 py-12 gap-8" role="main">
        <div className="text-center max-w-4xl">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Free Online Percentage Calculator
          </h1>
          <p className="text-center max-w-xl text-muted-foreground mb-8 mx-auto text-lg">
            Calculate percentages instantly with our free online calculator. What is X% of Y? 
            Find percentage increase, decrease, markup, discount, and compound interest. 
            No registration required, 100% free and private.
          </p>
          
          {/* Features */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto" aria-label="Features">
            <article className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50">
              <Zap className="w-8 h-8 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">Lightning Fast</h2>
              <p className="text-sm text-muted-foreground text-center">Instant calculations with real-time validation</p>
            </article>
            <article className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50">
              <Shield className="w-8 h-8 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">100% Private</h2>
              <p className="text-sm text-muted-foreground text-center">No data sent to servers, calculations stay local</p>
            </article>
            <article className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50">
              <Clock className="w-8 h-8 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">History</h2>
              <p className="text-sm text-muted-foreground text-center">Track your recent calculations automatically</p>
            </article>
          </section>
        </div>
        
        <PercentageForm />

        {/* Additional SEO Content */}
        <section className="max-w-4xl mx-auto px-4 mt-12" aria-label="Calculator Information">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">About Our Percentage Calculator</h2>
            <p className="text-muted-foreground mb-4">
              Our free percentage calculator is designed to help you solve various percentage-related calculations quickly and accurately. 
              Whether you need to calculate what is X% of Y, find percentage changes, or work with markup and discounts, 
              our tool provides instant results with detailed explanations and formulas.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Supported Calculations:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Basic Percentage:</strong> What is X% of Y?</li>
              <li><strong>Percentage of Total:</strong> X is what percent of Y?</li>
              <li><strong>Percentage Change:</strong> Calculate increase/decrease from A to B</li>
              <li><strong>Markup Calculator:</strong> Add percentage markup to prices</li>
              <li><strong>Discount Calculator:</strong> Apply percentage discounts</li>
              <li><strong>Compound Interest:</strong> Calculate compound interest over time</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t" role="contentinfo">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <nav className="flex gap-4 text-sm text-muted-foreground" aria-label="Footer navigation">
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            </nav>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PercentageCalculator. Made with ❤️
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
            "name": "Percentage Calculator",
            "description": "Free online percentage calculator for various calculations including markup, discount, and compound interest",
            "url": "https://percentagecalculator.com",
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
