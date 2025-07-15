import { Metadata } from "next";
import Link from "next/link";
import { Calculator, Zap, Shield, Clock, Code } from "lucide-react";

export const metadata: Metadata = {
  title: "About Me & My Percentage Calculator - Free Online Tool",
  description: "Hi! I'm a developer who built this free percentage calculator because I believe everyone deserves access to reliable tools without privacy concerns.",
  keywords: "about percentage calculator, developer, free calculator, online tool, percentage calculations",
  openGraph: {
    title: "About Me & My Percentage Calculator - Free Online Tool",
    description: "Hi! I'm a developer who built this free percentage calculator because I believe everyone deserves access to reliable tools without privacy concerns.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Me & This Calculator</h1>
          <p className="text-xl text-muted-foreground">
            Hi there! Let me tell you a bit about myself and why I built this tool.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Calculator className="w-6 h-6" />
              Why I Built This
            </h2>
            <p className="text-muted-foreground mb-4">
              I&apos;m a developer who got frustrated with existing percentage calculators. 
              They were either cluttered with ads, required accounts, or just didn&apos;t work well. 
              So I decided to build my own - the calculator I always wanted to use.
            </p>
            <p className="text-muted-foreground">
              My philosophy is simple: useful tools should be free, fast, and respect your privacy. 
              That&apos;s why everything runs locally in your browser - I literally can&apos;t see what you&apos;re calculating, 
              even if I wanted to (which I don&apos;t).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Code className="w-6 h-6" />
              How I Built It
            </h2>
            <p className="text-muted-foreground mb-4">
              I used Next.js 14, TypeScript, and TailwindCSS to create something that&apos;s both 
              beautiful and functional. The dark mode toggle? That&apos;s because I&apos;m a night owl 
              and hate bright screens at 2 AM.
            </p>
            <p className="text-muted-foreground">
              Every feature I added is something I actually use. The history? Because I always forget 
              what I calculated 5 minutes ago. The export? Because sometimes you need to share results 
              with colleagues.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 rounded-lg bg-muted/50">
            <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">
              I optimized every calculation to be instant. No waiting, no loading spinners.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-muted/50">
            <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">100% Private</h3>
            <p className="text-sm text-muted-foreground">
              Your data never leaves your device. I built it this way because that&apos;s how I want my tools to work.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-muted/50">
            <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Smart History</h3>
            <p className="text-sm text-muted-foreground">
              Tracks your calculations locally so you can reference them later. Export when you need to.
            </p>
          </div>
        </div>

        <div className="bg-muted/50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">My Promise to You</h2>
          <p className="text-muted-foreground mb-4">
            I built this calculator to be genuinely useful, not to collect data or show ads. 
            It&apos;s completely free and always will be. If you find it helpful, that&apos;s all the 
            reward I need.
          </p>
          <p className="text-muted-foreground">
            Have suggestions or found a bug? I&apos;d love to hear from you! I&apos;m always looking 
            to improve the tool based on real user feedback.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Try It Out?</h2>
          <p className="text-muted-foreground mb-6">
            Give my calculator a spin - I think you&apos;ll like it!
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Calculator className="w-5 h-5" />
            Start Calculating
          </Link>
        </div>
      </main>
    </div>
  );
} 