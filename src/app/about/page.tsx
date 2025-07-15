import { Metadata } from "next";
import Link from "next/link";
import { Calculator, Zap, Shield, Clock, Code } from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Percentage Calculator - Free Online Tool",
  description: "Learn about our free percentage calculator. Built with modern web technologies, offering fast, accurate, and private percentage calculations for everyone.",
  keywords: "about percentage calculator, free calculator, online tool, percentage calculations",
  openGraph: {
    title: "About Our Percentage Calculator - Free Online Tool",
    description: "Learn about our free percentage calculator. Built with modern web technologies, offering fast, accurate, and private percentage calculations.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Our Percentage Calculator</h1>
          <p className="text-xl text-muted-foreground">
            A free, fast, and accurate online tool for all your percentage calculations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Calculator className="w-6 h-6" />
              Our Mission
            </h2>
            <p className="text-muted-foreground mb-4">
              We believe that mathematical tools should be accessible to everyone. Our percentage calculator 
              is designed to provide instant, accurate results without any barriers - no registration, 
              no ads, no tracking.
            </p>
            <p className="text-muted-foreground">
              Whether you&apos;re a student, professional, or just need quick percentage calculations, 
              our tool is here to help you solve problems efficiently and accurately.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Built with Modern Tech
            </h2>
            <p className="text-muted-foreground mb-4">
              Our calculator is built using Next.js 14, TypeScript, and TailwindCSS, ensuring 
              fast performance, reliability, and a great user experience across all devices.
            </p>
            <p className="text-muted-foreground">
              We use client-side calculations to ensure your data never leaves your device, 
              providing complete privacy and security.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 rounded-lg bg-muted/50">
            <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">
              Instant calculations with real-time validation and feedback
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-muted/50">
            <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">100% Private</h3>
            <p className="text-sm text-muted-foreground">
              All calculations happen locally - no data sent to servers
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-muted/50">
            <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Smart History</h3>
            <p className="text-sm text-muted-foreground">
              Track your recent calculations with export functionality
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Calculate?</h2>
          <p className="text-muted-foreground mb-6">
            Start using our free percentage calculator now
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