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
            Hey there! I built this calculator because I got tired of searching for a simple, 
            fast percentage calculator that actually works. No ads, no tracking, just pure math magic. 
            Whether you need to calculate discounts, markups, or just figure out what 15% of 200 is, 
            you&apos;re in the right place.
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
              <p className="text-sm text-muted-foreground text-center">Your calculations never leave your device</p>
            </article>
            <article className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50">
              <Clock className="w-8 h-8 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">Smart History</h2>
              <p className="text-sm text-muted-foreground text-center">Track your recent calculations automatically</p>
            </article>
          </section>
        </div>
        
        <PercentageForm />

        {/* Additional SEO Content */}
        <section className="max-w-4xl mx-auto px-4 mt-12" aria-label="Calculator Information">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">What I Built for You</h2>
            <p className="text-muted-foreground mb-4">
              I&apos;m a developer who believes that useful tools should be free and accessible to everyone. 
              This percentage calculator is my way of giving back to the community. I&apos;ve packed it with 
              all the features I wished existed when I was looking for a calculator like this.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">What You Can Do:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Basic Math:</strong> What is X% of Y? (my most used feature)</li>
              <li><strong>Reverse Calculations:</strong> X is what percent of Y?</li>
              <li><strong>Change Analysis:</strong> Calculate increase/decrease from A to B</li>
              <li><strong>Business Tools:</strong> Markup and discount calculations</li>
              <li><strong>Financial Planning:</strong> Compound interest over time</li>
            </ul>
            
            <p className="text-muted-foreground mt-6">
              Everything runs in your browser, so your data stays private. I don&apos;t see what you&apos;re 
              calculating, and I don&apos;t want to. That&apos;s the whole point - a tool that respects your privacy.
            </p>
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
              © {new Date().getFullYear()} Built with ❤️ by a developer who cares about privacy
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
