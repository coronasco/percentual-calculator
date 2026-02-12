import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Mail, MessageSquare, Clock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact - Percentage Calculator",
  description: "Send feedback or report a bug. I reply personally, usually within 24–48 hours.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Mail className="w-6 h-6 text-primary" />
            <h1 className="text-3xl font-bold">Contact</h1>
          </div>
          <p className="text-muted-foreground">
            Message me directly if you spot an error, if a result looks wrong, or if you want to propose a feature.
            You will get a human reply, not an auto-responder.
          </p>
        </div>

        <div className="bg-muted/40 border rounded-xl p-6 space-y-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 text-foreground">
            <MessageSquare className="w-4 h-4" />
            <span className="font-semibold">How to reach me</span>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Email: <a href="mailto:daniel@zaharia.dev" className="underline">daniel@zaharia.dev</a></li>
            <li>GitHub Issues: <Link href="https://github.com/coronasco/percentagecalculator" target="_blank" rel="noreferrer" className="underline">public repo</Link></li>
            <li>LinkedIn DM: <Link href="https://www.linkedin.com/in/rolax" target="_blank" rel="noreferrer" className="underline">/in/rolax</Link></li>
          </ul>
          <p className="text-xs text-foreground/80 italic">
            If you send a bug, include the exact values you entered and what you expected. That helps me reproduce it fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="bg-background border rounded-xl p-5 shadow-sm">
            <h2 className="text-lg font-semibold mb-2">When I reply</h2>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Clock className="w-4 h-4" /> Usually within 24–48 hours, evenings or weekends. If it is urgent, add “URGENT” to the subject.
            </p>
          </div>
          <div className="bg-background border rounded-xl p-5 shadow-sm">
            <h2 className="text-lg font-semibold mb-2">What I do not do</h2>
            <p className="text-sm text-muted-foreground">
              I do not collect personal data and I do not sell ads in shady bundles. My priority is to keep the formulas correct and useful.
            </p>
          </div>
        </div>

        <div className="mt-10 bg-primary/10 border border-primary/20 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Thank you for the feedback
          </h2>
          <p className="text-sm text-muted-foreground">
            Every message helps me improve the site. If I reply late, nudge me—I am human, not a robot.
          </p>
        </div>
      </main>

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
