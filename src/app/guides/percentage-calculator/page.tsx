import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import {
  Calculator, ArrowRight, Percent, TrendingUp, TrendingDown,
  DollarSign, Clock, BookOpen, FileSpreadsheet, HelpCircle, CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Percentage Calculator Guide – Formulas, Examples & Real-World Uses",
  description:
    "Learn percentages the practical way: increase/decrease, discounts, markup vs margin, compound interest, and Excel tips. Clear formulas, worked examples, and a free calculator.",
  keywords: [
    "percentage calculator guide",
    "how to calculate percentage",
    "percentage increase",
    "discount calculator",
    "markup vs margin",
    "compound interest",
    "percentages in Excel",
  ],
  alternates: { canonical: "https://www.advanced-percentage-calculator.com/guides/percentage-calculator" },
  openGraph: {
    title: "Percentage Calculator Guide – Formulas, Examples & Real-World Uses",
    description:
      "Clear guide to percentages with worked examples. Includes Excel/Sheets methods and a free online calculator.",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Percentage Calculator Guide – Formulas, Examples & Real-World Uses",
    description:
      "Formulas, examples, Excel methods, and a free calculator. Learn percentages the practical way."
  }
};

export default function PercentageCalculatorGuide() {
  const updated = new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });

  const faq = [
    {
      q: "How do I calculate percentage increase?",
      a: "Use ((New − Old) ÷ Old) × 100. Example: 120 vs 100 → ((120 − 100) ÷ 100) × 100 = 20%."
    },
    {
      q: "What’s the difference between markup and margin?",
      a: "Markup is based on cost; margin is based on selling price. Markup = (SP − Cost) ÷ Cost. Margin = (SP − Cost) ÷ SP."
    },
    {
      q: "How does compound interest work?",
      a: "You earn interest on the principal and on previous interest: Final = Principal × (1 + Rate)^Time."
    },
    {
      q: "Can I use this calculator for business?",
      a: "Yes—pricing, profit checks, discounts, taxes, ROI, and quick what-if scenarios."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Percentage Calculator Guide – Formulas, Examples & Real-World Uses",
    description:
      "A practical, human-written guide to percentages with formulas, worked examples, Excel tips, and a free calculator.",
    author: { "@type": "Person", name: "Advanced Percentage Calculator Team" },
    dateModified: new Date().toISOString(),
    mainEntityOfPage: "https://www.advanced-percentage-calculator.com/guides/percentage-calculator"
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.advanced-percentage-calculator.com/" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.advanced-percentage-calculator.com/guides" },
      { "@type": "ListItem", position: 3, name: "Percentage Calculator Guide" }
    ]
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-4">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-foreground">Home</Link></li>
            <li>›</li>
            <li><Link href="/guides" className="hover:text-foreground">Guides</Link></li>
            <li>›</li>
            <li aria-current="page" className="text-foreground">Percentage Calculator Guide</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Calculator className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Percentage Calculator Guide</h1>
          </div>
          <p className="text-base md:text-lg text-muted-foreground">
            A clear, no-nonsense guide to percentages. Short formulas, small examples, and a free calculator you can use right away.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Calculator className="w-5 h-5" />
              Open Free Percentage Calculator
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Last updated: {updated}</p>
        </header>

        {/* TOC */}
        <aside className="bg-muted/50 rounded-xl p-5 mb-10">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5" /> What you’ll learn
          </h2>
          <ul className="grid md:grid-cols-2 gap-2 text-sm">
            <li><a href="#basics" className="hover:underline">Basic percentage calculations</a></li>
            <li><a href="#change" className="hover:underline">Percentage change: increase & decrease</a></li>
            <li><a href="#pricing" className="hover:underline">Markup vs discount (and margin)</a></li>
            <li><a href="#compound" className="hover:underline">Compound interest</a></li>
            <li><a href="#excel" className="hover:underline">Doing it in Excel / Google Sheets</a></li>
            <li><a href="#use-cases" className="hover:underline">Real-world use cases</a></li>
          </ul>
        </aside>

        {/* Basics */}
        <section id="basics" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Percent className="w-6 h-6 text-primary" /> Basic percentage calculations
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">What is X% of Y?</h3>
              <p className="text-muted-foreground mb-3">
                The go-to operation for discounts, tips and taxes.
              </p>
              <div className="bg-muted/50 p-4 rounded mb-3">
                <strong>Formula:</strong> Result = (Percentage × Number) ÷ 100
              </div>
              <ul className="space-y-2 text-sm">
                <li className="p-3 bg-muted/30 rounded">15% of 200 ⇒ 15 × 200 ÷ 100 = <strong>30</strong></li>
                <li className="p-3 bg-muted/30 rounded">25% of 80 ⇒ 25 × 80 ÷ 100 = <strong>20</strong></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">X is what percent of Y?</h3>
              <p className="text-muted-foreground mb-3">Useful for grades, progress, and ratios.</p>
              <div className="bg-muted/50 p-4 rounded mb-3">
                <strong>Formula:</strong> Percentage = (Number ÷ Total) × 100
              </div>
              <ul className="space-y-2 text-sm">
                <li className="p-3 bg-muted/30 rounded">50 of 200 ⇒ (50 ÷ 200) × 100 = <strong>25%</strong></li>
                <li className="p-3 bg-muted/30 rounded">30 of 150 ⇒ (30 ÷ 150) × 100 = <strong>20%</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Change */}
        <section id="change" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" /> Percentage change (increase / decrease)
          </h2>
          <p className="text-muted-foreground mb-4">
            Handy for prices, KPIs, and any before/after comparison.
          </p>
          <div className="bg-muted/50 p-4 rounded mb-6">
            <strong>Formula:</strong> ((New − Old) ÷ Old) × 100
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Percentage increase
              </h3>
              <div className="p-3 bg-muted/30 rounded text-sm">100 → 120 ⇒ ((120 − 100) ÷ 100) × 100 = <strong>20%</strong></div>
              <div className="p-3 bg-muted/30 rounded text-sm mt-2">500 → 750 ⇒ ((750 − 500) ÷ 500) × 100 = <strong>50%</strong></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <TrendingDown className="w-4 h-4" /> Percentage decrease
              </h3>
              <div className="p-3 bg-muted/30 rounded text-sm">200 → 160 ⇒ ((160 − 200) ÷ 200) × 100 = <strong>−20%</strong></div>
              <div className="p-3 bg-muted/30 rounded text-sm mt-2">80 → 60 ⇒ ((60 − 80) ÷ 80) × 100 = <strong>−25%</strong></div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-primary" /> Markup, discount & margin
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Markup (based on cost)</h3>
              <p className="text-muted-foreground mb-3">
                Final Price = Cost × (1 + Markup). Example: Cost $50, markup 30% ⇒ $50 × 1.30 = <strong>$65</strong>.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Discount (based on price)</h3>
              <p className="text-muted-foreground mb-3">
                Final Price = Price × (1 − Discount). Example: $200 with 15% off ⇒ $200 × 0.85 = <strong>$170</strong>.
              </p>
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Margin is different: Margin = (SP − Cost) ÷ SP. If Cost = $80 and SP = $100, Margin = 20%, Markup = 25%.
          </div>
        </section>

        {/* Compound */}
        <section id="compound" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-primary" /> Compound interest, made simple
          </h2>
          <p className="text-muted-foreground mb-4">
            Savings and investments grow faster when interest compounds.
          </p>
          <div className="bg-muted/50 p-4 rounded mb-4">
            <strong>Formula:</strong> Final = Principal × (1 + Rate)^Time
          </div>
          <ul className="space-y-2 text-sm">
            <li className="p-3 bg-muted/30 rounded">$1,000 at 5% for 10 years ⇒ $1,000 × 1.05^10 = <strong>$1,628.89</strong></li>
            <li className="p-3 bg-muted/30 rounded">$5,000 at 8% for 5 years ⇒ $5,000 × 1.08^5 = <strong>$7,346.64</strong></li>
          </ul>
          <p className="mt-3 text-sm">
            Try our <Link href="/finance" className="underline hover:no-underline">Finance Calculator</Link> for amortization and ROI.
          </p>
        </section>

        {/* Excel / Sheets */}
        <section id="excel" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FileSpreadsheet className="w-6 h-6 text-primary" /> Percentages in Excel / Google Sheets
          </h2>
          <div className="space-y-3 text-sm">
            <div className="p-4 bg-muted/50 rounded">
              <strong>X% of Y:</strong> <code>=X%*Y</code> or <code>=X/100*Y</code> (e.g., <code>=15%*200</code> → 30)
            </div>
            <div className="p-4 bg-muted/50 rounded">
              <strong>What percent is X of Y:</strong> <code>=X/Y</code> then format as % (e.g., <code>=50/200</code> → 25%)
            </div>
            <div className="p-4 bg-muted/50 rounded">
              <strong>Increase/Decrease:</strong> <code>=(New-Old)/Old</code> then format as %
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section id="use-cases" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-primary" /> Real-world use cases
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <p className="font-semibold">Everyday:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Shop discounts and tips</li>
                <li>Battery or grade percentages</li>
                <li>Splitting bills fairly</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Business:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Pricing (markup/margin), promotions</li>
                <li>KPI growth vs last month</li>
                <li>Taxes/VAT checks and quick ROI</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common mistakes + practice */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-primary" /> Quick tips & common mistakes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="p-4 bg-muted/50 rounded"><strong>Check units:</strong> keep rate and time aligned (monthly with months).</div>
              <div className="p-4 bg-muted/50 rounded"><strong>Don’t mix margin with markup:</strong> they aren’t interchangeable.</div>
              <div className="p-4 bg-muted/50 rounded"><strong>Round only at the end</strong> for financial work.</div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="p-4 bg-muted/30 rounded">
                <strong>Practice:</strong> A price goes from $80 to $92. What’s the increase %? (Answer: 15%)
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <strong>Practice:</strong> Cost $40, margin 20%. What selling price? (Answer: $50)
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {faq.map(({ q, a }) => (
              <div key={q} className="border rounded-lg p-4">
                <h3 className="font-semibold mb-1">{q}</h3>
                <p className="text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA + interlinking */}
        <section className="text-center bg-muted/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-2">Ready to run the numbers?</h2>
          <p className="text-muted-foreground mb-6">
            Use the calculator below, then explore our other free tools.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Calculator className="w-5 h-5" />
              Use Percentage Calculator
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/finance" className="underline hover:no-underline">
              Finance Calculator
            </Link>
            <Link href="/freelance" className="underline hover:no-underline">
              Freelance Calculator
            </Link>
            <Link href="/real-estate" className="underline hover:no-underline">
              Real Estate Calculator
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
              © {new Date().getFullYear()} Advanced Percentage Calculator
            </div>
          </div>
        </div>
      </footer>

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </div>
  );
}
