import { Metadata } from "next";
import Link from "next/link";
import { Calculator, Zap, Home, DollarSign, Shield, Smartphone, Clock, Download, Github, Linkedin } from "lucide-react";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "About - Advanced Percentage Calculator",
  description: "Learn more about the features and calculators available on Advanced Percentage Calculator: percentage, finance, and real estate tools.",
  keywords: "about, percentage calculator, finance calculator, real estate calculator, features, online tools",
  openGraph: {
    title: "About - Advanced Percentage Calculator",
    description: "Learn more about the features and calculators available on Advanced Percentage Calculator: percentage, finance, and real estate tools.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-3">About Advanced Percentage Calculator</h1>
          <p className="text-muted-foreground text-lg">
            All-in-one platform for fast, accurate and user-friendly percentage, finance, and real estate calculations. No registration. No hassle. Just results.
          </p>
        </div>

        {/* Carduri calculatoare */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link href="/" className="group block bg-muted/50 rounded-xl p-6 text-center shadow-sm hover:bg-muted transition-colors">
            <Calculator className="w-10 h-10 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
            <h2 className="font-semibold text-lg mb-2">Percentage Calculator</h2>
            <p className="text-sm text-muted-foreground mb-3">Calculate any percentage, percentage change, markups, discounts, and more. Perfect for daily math, shopping, and business.</p>
            <span className="inline-block text-primary font-medium group-hover:underline">Try now →</span>
          </Link>
          <Link href="/finance" className="group block bg-muted/50 rounded-xl p-6 text-center shadow-sm hover:bg-muted transition-colors">
            <DollarSign className="w-10 h-10 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
            <h2 className="font-semibold text-lg mb-2">Finance Calculator</h2>
            <p className="text-sm text-muted-foreground mb-3">Compound interest, loans, ROI, APR, investment returns, and more. Essential for professionals and personal finance.</p>
            <span className="inline-block text-primary font-medium group-hover:underline">Explore finance →</span>
          </Link>
          <Link href="/real-estate" className="group block bg-muted/50 rounded-xl p-6 text-center shadow-sm hover:bg-muted transition-colors">
            <Home className="w-10 h-10 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
            <h2 className="font-semibold text-lg mb-2">Real Estate Calculator</h2>
            <p className="text-sm text-muted-foreground mb-3">Commissions, rental yield, property tax, appreciation, and more. Tools for agents, buyers, and investors.</p>
            <span className="inline-block text-primary font-medium group-hover:underline">See real estate →</span>
          </Link>
        </div>

        {/* Avantaje platformă */}
        <div className="bg-muted/50 rounded-xl p-8 mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Why use Advanced Percentage Calculator?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex flex-col items-center text-center gap-2">
              <Shield className="w-7 h-7 text-primary" />
              <span className="font-medium">Private & Secure</span>
              <span className="text-muted-foreground">No accounts, no tracking, all calculations local.</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Smartphone className="w-7 h-7 text-primary" />
              <span className="font-medium">Mobile Friendly</span>
              <span className="text-muted-foreground">Works perfectly on any device, anytime.</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Clock className="w-7 h-7 text-primary" />
              <span className="font-medium">Instant Results</span>
              <span className="text-muted-foreground">Calculations update as you type, no waiting.</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Download className="w-7 h-7 text-primary" />
              <span className="font-medium">Export & History</span>
              <span className="text-muted-foreground">Save, export, or clear your calculation history anytime.</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Zap className="w-7 h-7 text-primary" />
              <span className="font-medium">Advanced Features</span>
              <span className="text-muted-foreground">Precision control, keyboard shortcuts, dark mode, and more.</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Calculator className="w-7 h-7 text-primary" />
              <span className="font-medium">All-in-One</span>
              <span className="text-muted-foreground">Percentage, finance, and real estate tools in one place.</span>
            </div>
          </div>
        </div>

        {/* Utilizatori */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h3 className="text-lg font-semibold mb-3">Who is this platform for?</h3>
          <p className="text-muted-foreground mb-2">Business owners, students, professionals, real estate agents, investors, and anyone who needs fast, accurate calculations.</p>
        </div>

        {/* Contact Section */}
        <div className="bg-muted/50 rounded-xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
            <p className="text-muted-foreground">Have questions, suggestions, or want to collaborate? I&apos;d love to hear from you!</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Profile Card */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-2 border-primary/20">
                <img 
                  src="/danielzaharia.jpeg" 
                  alt="Daniel Zaharia - Full-Stack Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold mb-1">Daniel Zaharia</h4>
              <p className="text-sm text-muted-foreground mb-3">Full-Stack Developer</p>
              <p className="text-xs text-muted-foreground max-w-xs">
                Passionate about creating useful web tools and applications. 
                Building solutions that make complex calculations simple and accessible.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col gap-3">
              <Link 
                href="https://github.com/coronasco/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-background hover:bg-muted px-4 py-3 rounded-lg transition-colors border"
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub Profile</span>
              </Link>
              
              <Link 
                href="https://www.linkedin.com/in/rolax" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-background hover:bg-muted px-4 py-3 rounded-lg transition-colors border"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn Profile</span>
              </Link>
            </div>
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