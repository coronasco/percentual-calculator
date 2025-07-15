import { Metadata } from "next";
import Link from "next/link";
import { Shield, Eye, Lock, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Percentage Calculator",
  description: "Your privacy is important to me. Learn how I protect your data when using my free percentage calculator.",
  keywords: "privacy policy, data protection, percentage calculator privacy",
  openGraph: {
    title: "Privacy Policy - Percentage Calculator",
    description: "Your privacy is important to me. Learn how I protect your data when using my free percentage calculator.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">
            Your privacy matters to me. Here&apos;s how I protect your data.
          </p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50">
              <Shield className="w-12 h-12 mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-2">No Data Collection</h2>
              <p className="text-sm text-muted-foreground">
                I don&apos;t collect, store, or transmit any of your calculation data. Everything stays on your device.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50">
              <Eye className="w-12 h-12 mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-2">No Tracking</h2>
              <p className="text-sm text-muted-foreground">
                No cookies, no analytics, no tracking scripts. Your browsing remains completely private.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Lock className="w-6 h-6" />
            How I Protect Your Privacy
          </h2>
          
          <p className="mb-4">
            Hey there! I built this percentage calculator because I believe everyone deserves access to 
            free, reliable tools without worrying about their privacy being compromised. Here&apos;s what 
            you need to know about how I handle your data (spoiler: I don&apos;t handle it at all).
          </p>

          <h3 className="text-xl font-semibold mb-3">What I Don&apos;t Collect</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong>Your calculations:</strong> All math happens right in your browser. I never see what you&apos;re calculating.</li>
            <li><strong>Personal information:</strong> No accounts, no emails, no names required.</li>
            <li><strong>Browsing history:</strong> I don&apos;t track which pages you visit or how long you stay.</li>
            <li><strong>Device information:</strong> I don&apos;t collect IP addresses, device IDs, or location data.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">What I Do Store (Locally)</h3>
          <p className="mb-4">
            The only thing I save is your calculation history, and that&apos;s stored right on your device 
            using your browser&apos;s local storage. This means:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Only you can see your history</li>
            <li>It&apos;s deleted when you clear your browser data</li>
            <li>It doesn&apos;t sync across devices</li>
            <li>You can export or delete it anytime</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Third-Party Services</h3>
          <p className="mb-4">
            I keep things simple and don&apos;t use any third-party services that could track you. 
            The only external requests are for the fonts (Google Fonts) and that&apos;s it.
          </p>

          <h3 className="text-xl font-semibold mb-3">Your Rights</h3>
          <p className="mb-4">
            Since I don&apos;t collect your data, there&apos;s nothing to request, modify, or delete. 
            But you always have full control over your local data - just use the clear history button 
            in the calculator.
          </p>

          <h3 className="text-xl font-semibold mb-3">Contact Me</h3>
          <p className="mb-6">
            If you have any questions about privacy or want to report something, feel free to reach out. 
            I&apos;m committed to transparency and will always be honest about how your data is handled.
          </p>

          <div className="bg-muted/50 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">TL;DR</h4>
            <p className="text-sm text-muted-foreground">
              Your calculations stay on your device. I don&apos;t see, store, or share anything. 
              Use the calculator with complete peace of mind.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Database className="w-5 h-5" />
            Back to Calculator
          </Link>
        </div>
      </main>
    </div>
  );
} 