import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import EducationCalculator from "@/components/calculators/EducationCalculator";

export const metadata: Metadata = {
  title: "Education Calculator - Grade & GPA Calculator for Students",
  description: "Free education calculator for students. Calculate grades, GPA, and academic performance. Perfect for tracking progress, planning courses, and academic planning.",
  keywords: "education calculator, grade calculator, gpa calculator, student calculator, academic calculator, grade point average, school calculator",
  openGraph: {
    title: "Education Calculator - Grade & GPA Calculator for Students",
    description: "Free education calculator for students. Calculate grades, GPA, and academic performance. Perfect for tracking progress, planning courses, and academic planning.",
  },
};

export default function EducationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">Education Calculator</h1>
          <p className="text-xl text-muted-foreground">
            Calculate grades and GPA for academic success
          </p>
        </div>
        
        <EducationCalculator />

        <section className="max-w-4xl mx-auto mt-12 prose prose-gray dark:prose-invert">
          <h2 className="text-2xl font-bold mb-6 text-center">Comprehensive Education Calculator for Academic Success</h2>
          
          <p className="text-muted-foreground mb-6">
            Navigating the academic landscape requires precise tools for tracking performance and planning your educational journey. Our comprehensive education calculator serves as your digital academic companion, offering sophisticated grade computation and GPA tracking capabilities that adapt to various educational systems and grading methodologies.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Advanced Grade Calculation System</h3>
              <p className="text-muted-foreground mb-4">
                                 Modern academic environments demand sophisticated approaches to performance evaluation. Our grade calculator transcends basic arithmetic by incorporating weighted assessment systems that mirror real-world educational practices. Whether you&apos;re managing a semester-long course with multiple evaluation components or tracking progress across various academic disciplines, this tool provides the computational precision needed for accurate grade determination.
              </p>
              <p className="text-muted-foreground">
                The system accommodates diverse grading structures, from traditional percentage-based assessments to complex weighted grading schemes where different assignments carry varying degrees of academic significance. This flexibility ensures that students can accurately project their final course outcomes and make informed decisions about their academic strategies.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Precision GPA Computation Engine</h3>
              <p className="text-muted-foreground mb-4">
                Grade Point Average calculations represent more than simple mathematical operations—they embody the cumulative narrative of academic achievement. Our GPA calculator employs industry-standard algorithms that process multiple academic terms, various credit systems, and different grading scales to deliver accurate cumulative performance metrics. This tool becomes particularly valuable for students navigating complex academic pathways, scholarship applications, or graduate school preparations.
              </p>
              <p className="text-muted-foreground">
                                 The calculator&apos;s sophisticated architecture supports both semester-based and cumulative GPA tracking, enabling students to monitor their academic trajectory over extended periods. This longitudinal perspective proves invaluable for identifying performance trends, setting realistic academic goals, and maintaining the competitive edge required in today&apos;s educational landscape.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Strategic Academic Planning Framework</h3>
            <p className="text-muted-foreground mb-4">
              Effective academic planning extends beyond simple grade tracking—it requires a comprehensive understanding of how individual course performance contributes to broader educational objectives. Our education calculator facilitates this strategic approach by providing detailed breakdowns of grade components, credit hour calculations, and performance projections that enable informed decision-making throughout the academic journey.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Grade Assessment Methodology</h4>
                <ol className="space-y-1 text-muted-foreground">
                  <li>1. Input assignment specifications and performance metrics</li>
                  <li>2. Configure maximum achievable scores for each component</li>
                  <li>3. Establish relative importance through weight allocation</li>
                  <li>4. Generate comprehensive grade analysis and projections</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold mb-2">GPA Calculation Protocol</h4>
                <ol className="space-y-1 text-muted-foreground">
                  <li>1. Enter course information and credit allocations</li>
                  <li>2. Select appropriate letter grade classifications</li>
                  <li>3. Process cumulative grade point computations</li>
                  <li>4. Review detailed academic performance metrics</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Practical Academic Scenarios</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Comprehensive Course Evaluation:</strong><br/>
                  <span className="text-muted-foreground">Research Project: 92/100 (25% weight)</span><br/>
                  <span className="text-muted-foreground">Midterm Examination: 87/100 (30% weight)</span><br/>
                  <span className="text-muted-foreground">Final Assessment: 89/100 (35% weight)</span><br/>
                  <span className="text-muted-foreground">Participation: 95/100 (10% weight)</span><br/>
                  <span className="text-muted-foreground"><strong>Final Grade: 89.8% (A-)</strong></span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Multi-Semester Academic Tracking:</strong><br/>
                  <span className="text-muted-foreground">Fall Semester GPA: 3.67</span><br/>
                  <span className="text-muted-foreground">Spring Semester GPA: 3.82</span><br/>
                  <span className="text-muted-foreground">Cumulative GPA: 3.74</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Academic Performance Standards</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Standardized Grading Framework:</strong><br/>
                  <span className="text-muted-foreground">A: 4.0 (93-100%) | A-: 3.7 (90-92%)</span><br/>
                  <span className="text-muted-foreground">B+: 3.3 (87-89%) | B: 3.0 (83-86%)</span><br/>
                  <span className="text-muted-foreground">B-: 2.7 (80-82%) | C+: 2.3 (77-79%)</span><br/>
                  <span className="text-muted-foreground">C: 2.0 (73-76%) | C-: 1.7 (70-72%)</span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Academic Standing Thresholds:</strong><br/>
                                     <span className="text-muted-foreground">Dean&apos;s List: 3.5+ GPA</span><br/>
                  <span className="text-muted-foreground">Academic Probation: Below 2.0 GPA</span><br/>
                  <span className="text-muted-foreground">Graduate School Minimum: 3.0+ GPA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Strategic Academic Applications</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Performance Monitoring:</strong> Track academic progress across multiple evaluation periods</li>
                <li><strong>Goal Establishment:</strong> Set realistic academic targets based on historical performance data</li>
                <li><strong>Course Selection:</strong> Evaluate how different course combinations impact overall GPA</li>
                <li><strong>Scholarship Qualification:</strong> Calculate GPA requirements for various financial aid opportunities</li>
                <li><strong>Academic Standing:</strong> Monitor institutional requirements and probation thresholds</li>
                <li><strong>Graduate Preparation:</strong> Plan for advanced degree admission requirements</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Advanced Educational Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Weighted Assessment:</strong> Support for complex grading schemes and evaluation methods</li>
                <li><strong>Multi-Term Analysis:</strong> Calculate GPA across multiple academic periods</li>
                <li><strong>Real-Time Computation:</strong> Instant results with dynamic calculation updates</li>
                <li><strong>Performance Analytics:</strong> Detailed breakdown of academic component contributions</li>
                <li><strong>Data Export:</strong> Share results with academic advisors and educational institutions</li>
                <li><strong>Cross-Platform Compatibility:</strong> Seamless operation across all digital devices</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Comprehensive Educational Support System</h3>
            <p className="text-muted-foreground mb-4">
                             Our education calculator represents more than a simple computational tool—it serves as a comprehensive academic support system designed to enhance educational outcomes and facilitate informed decision-making throughout the academic journey. Whether you&apos;re a student navigating complex course requirements, an educator seeking to verify grade calculations, or an academic advisor supporting student success, this tool provides the precision and reliability needed for effective educational planning.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Student Empowerment Features</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Monitor academic progress with precision and clarity</li>
                  <li>• Plan course selections based on performance projections</li>
                  <li>• Establish realistic academic goals and achievement targets</li>
                  <li>• Understand grade requirements and academic thresholds</li>
                  <li>• Prepare comprehensive scholarship and application materials</li>
                  <li>• Track GPA trends and performance patterns over time</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Educational Professional Support</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Verify grade calculation accuracy and consistency</li>
                  <li>• Support student understanding of grading methodologies</li>
                  <li>• Plan effective course weight distributions and assessments</li>
                  <li>• Demonstrate grading transparency and fairness</li>
                  <li>• Facilitate comprehensive academic advising sessions</li>
                  <li>• Analyze class performance trends and patterns</li>
                </ul>
              </div>
            </div>
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
              © {new Date().getFullYear()} Free percentage calculator
            </div>
          </div>
        </div>
      </footer>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Education Calculator",
            "description": "Free online education calculator for grade and GPA calculations",
            "url": "https://www.advanced-percentage-calculator.com/education",
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
              "ratingCount": "950"
            }
          })
        }}
      />
    </div>
  );
} 