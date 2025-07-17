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
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">About This Calculator</h1>
          <p className="text-muted-foreground">
            A simple, fast percentage calculator built for everyday use.
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground mb-6">
            I built this calculator because I needed a quick way to calculate percentages without ads or tracking. 
            Everything runs in your browser - no data is sent anywhere.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <Zap className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Fast</h3>
              <p className="text-xs text-muted-foreground">Instant calculations</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Private</h3>
              <p className="text-xs text-muted-foreground">No data collection</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Smart</h3>
              <p className="text-xs text-muted-foreground">History tracking</p>
            </div>
          </div>

          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Calculator className="w-5 h-5" />
            Start Calculating
          </Link>
        </div>

        {/* SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Advanced Percentage Calculator Features</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Percentage Calculation Types</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Basic Percentage:</strong> Calculate what is X% of Y
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Reverse Percentage:</strong> Find what percent X is of Y
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Percentage Change:</strong> Calculate increase/decrease from A to B
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Markup Calculator:</strong> Add percentage markup to prices
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Discount Calculator:</strong> Calculate final price after discount
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Compound Interest:</strong> Calculate interest over time
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Use Cases & Applications</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Financial Planning:</strong> Investment returns, loan calculations, and budget planning</li>
                <li><strong>Business Operations:</strong> Profit margins, pricing strategies, and cost analysis</li>
                <li><strong>Retail & E-commerce:</strong> Discount calculations, sales promotions, and pricing</li>
                <li><strong>Real Estate:</strong> Property appreciation, commission calculations, and market analysis</li>
                <li><strong>Education:</strong> Grade calculations, statistical analysis, and academic research</li>
                <li><strong>Personal Finance:</strong> Tax calculations, tip amounts, and expense tracking</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Why Our Percentage Calculator Stands Out</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Accuracy & Precision</h4>
                <p className="text-muted-foreground">Advanced algorithms ensure precise calculations with customizable decimal places for professional results.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">User Experience</h4>
                <p className="text-muted-foreground">Intuitive interface with keyboard shortcuts, history tracking, and mobile-responsive design for seamless usage.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Privacy & Security</h4>
                <p className="text-muted-foreground">All calculations performed locally in your browser with no data transmission or storage on external servers.</p>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Calculator Features</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Calculation Types</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Basic percentage calculations</li>
                  <li>• Reverse percentage finding</li>
                  <li>• Percentage change analysis</li>
                  <li>• Markup and discount calculations</li>
                  <li>• Compound interest over time</li>
                  <li>• Financial ratio calculations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">User Experience</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Instant calculation results</li>
                  <li>• Calculation history tracking</li>
                  <li>• Export and share functionality</li>
                  <li>• Dark mode support</li>
                  <li>• Mobile-responsive design</li>
                  <li>• Keyboard shortcuts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 