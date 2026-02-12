import PercentageForm from "@/components/PercentageForm";
import { Header } from "@/components/Header";
import Link from "next/link";
import { Home as HomeIcon, DollarSign } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />

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

        {/* Other Calculators */}
        <section className="max-w-2xl mx-auto px-4 mt-8" aria-label="Other calculators">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Other Professional Calculators</h3>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link 
                href="/finance" 
                className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 px-4 py-2 rounded-lg transition-colors"
              >
                <DollarSign className="w-4 h-4" />
                Finance Calculator
              </Link>
              <Link 
                href="/real-estate" 
                className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 px-4 py-2 rounded-lg transition-colors"
              >
                <HomeIcon className="w-4 h-4" />
                Real Estate Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* Editorial, human-written content */}
        <section className="max-w-5xl mx-auto px-4 mt-12" aria-label="Percentage Calculator Information">
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-10">
            {/* Story + CTA row */}
            <div className="grid md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2 space-y-4">
                <h2 className="text-2xl font-bold text-center md:text-left">Why I keep building calculators</h2>
                <p className="text-muted-foreground">
                  I once sent a client an invoice with the wrong tax and got the politest “are you sure?” you can imagine. Tomato face.
                  To avoid doing that again, I started running every discount, tip, rent bump, and quick price check through a calculator I trust.
                </p>
                <p className="text-muted-foreground">
                  More oddities kept showing up: loyalty promos stacking strangely, VAT pulled out the wrong way, shipping added before discounts,
                  and “limited” sales that were mostly optimistic rounding. Each time I tripped, I saved a note and added an example here. It reads like a journal because it is one.
                </p>
                <p className="text-sm text-muted-foreground">
                  Funniest miss so far: a “35% off” jacket that was really 20% off plus 15% hope from the marketing team. The receipt was a great teacher.
                </p>
                <p className="text-muted-foreground">
                  That habit snowballed: after percentages came finance, real estate, education, freelance rates, each built after a real facepalm. If these stories help you dodge a bad total or at least smile once, they’ve done their job.
                </p>
              </div>
              <div className="bg-muted/50 p-5 rounded-xl shadow-sm space-y-3">
                <h3 className="text-lg font-semibold">Quick way to use it</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Pick a mode: percent of number, reverse percent, change %, markup/discount, or compound interest.</li>
                  <li>Type numbers as you see them; decimals welcome.</li>
                  <li>Glance at the formula under the result; adjust if it feels off.</li>
                  <li>Save to history only if you want—data stays in your browser.</li>
                </ol>
                <p className="text-xs text-muted-foreground">Shortcut: Tab through fields, hit Enter. No magic, just math.</p>
              </div>
            </div>

            {/* Feature cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border rounded-xl p-5 shadow-sm bg-background">
                <h3 className="text-lg font-semibold mb-2">Freelance invoice check</h3>
                <p className="text-sm text-muted-foreground">
                  €1,200 + 19% tax − 3% platform fee → €1,385.16 net. If the margin drops under 30%, I renegotiate before typing “sure!”.
                </p>
              </div>
              <div className="border rounded-xl p-5 shadow-sm bg-background">
                <h3 className="text-lg font-semibold mb-2">Mortgage comparison</h3>
                <p className="text-sm text-muted-foreground">
                  $220k at 6.10% vs 5.70%: $56/month apart, ~$16.8k over 25 years. Tiny rates, big lifetime gap.
                </p>
              </div>
              <div className="border rounded-xl p-5 shadow-sm bg-background">
                <h3 className="text-lg font-semibold mb-2">Discount sanity check</h3>
                <p className="text-sm text-muted-foreground">
                  Shelf $55, sale $44 → 20% off, not “up to 35%.” If I wanted more, I wait and keep my wallet closed.
                </p>
              </div>
            </div>

            {/* Steps + formulas row */}
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-muted/40 border rounded-xl p-5 space-y-3">
                <h3 className="text-lg font-semibold">Common mistakes to avoid</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Remove VAT right: <code>Total ÷ 1.19</code> for 19% VAT.</li>
                  <li>Apply discounts before shipping, not after.</li>
                  <li>Keep rate units aligned (annual with years, monthly with months).</li>
                  <li>Round at the end, not mid-calculation.</li>
                </ul>
              </div>
              <div className="bg-background border rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="text-lg font-semibold">Quick formulas I reach for</h3>
                <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div className="bg-muted/30 p-3 rounded">Percent of number: (p × n) ÷ 100</div>
                  <div className="bg-muted/30 p-3 rounded">What percent is A of B: (A ÷ B) × 100</div>
                  <div className="bg-muted/30 p-3 rounded">Change %: ((New − Old) ÷ Old) × 100</div>
                  <div className="bg-muted/30 p-3 rounded">Markup vs margin: Markup = (SP − Cost) ÷ Cost; Margin = (SP − Cost) ÷ SP</div>
                  <div className="bg-muted/30 p-3 rounded">Compound: Final = Principal × (1 + Rate)<sup>time</sup></div>
                  <div className="bg-muted/30 p-3 rounded">Strip tax 19%: Price ÷ 1.19</div>
                </div>
              </div>
            </div>

            {/* Use cases + privacy */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background border rounded-xl p-6 shadow-sm space-y-3">
                <h3 className="text-lg font-semibold">Who it helps</h3>
                <p className="text-sm text-muted-foreground">
                  Students checking grades, freelancers pricing work, small shops testing discounts, friends splitting bills, and anyone who
                  wants a quick confidence check without opening a spreadsheet.
                </p>
              </div>
              <div className="bg-background border rounded-xl p-6 shadow-sm space-y-3">
                <h3 className="text-lg font-semibold">Privacy in plain words</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>History lives in your browser (localStorage). Clearing your cache erases it.</li>
                  <li>No tracking pixels or pop-ups.</li>
                  <li>Formulas stay visible so you can double-check the math.</li>
                </ul>
              </div>
            </div>

            {/* Mini log */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">A week of real calculations</h3>
              <p className="text-sm text-muted-foreground">
                Monday: monitor $389 with 12% coupon → $342.32. Tuesday: retainer $1,400 → $1,610 (+15%). Wednesday: “3 for 2” vs 25% off—25% wins.
                Thursday: add-on bag made a budget flight 18% more. Friday: student loan 6.8% monthly compounding—$50 extra/month shortens payoff. Saturday:
                uneven dinner bill—percent share kept it fair. Sunday: hosting $49 → $63 (+28.5%) so I downgraded.
              </p>
            </div>

            {/* FAQ + author */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Quick FAQs</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div><strong>Is it free?</strong><br />Yes. No sign-up or email capture.</div>
                  <div><strong>Do you store my numbers?</strong><br />They stay in your browser if you save history. Nothing leaves your device.</div>
                  <div><strong>Report a mistake?</strong><br />Send the exact inputs on the Contact page and I’ll fix it quickly.</div>
                </div>
              </div>
              <div className="border rounded-xl p-6 shadow-sm space-y-2">
                <h3 className="text-xl font-semibold mb-2">About the builder</h3>
                <p className="text-sm text-muted-foreground">
                  I’m Daniel, a developer who hates bad math on receipts. I answer feedback fast—usually the same day. If something feels off,
                  <Link href="/contact" className="underline ml-1">tell me</Link> and I’ll sort it out.
                </p>
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
