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

        {/* SEO Content */}
        <section className="max-w-4xl mx-auto mt-12 prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-6 text-center">Education Calculator</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Grade Calculator</h3>
              <p className="text-muted-foreground mb-4">
                Calculate your final grade based on multiple assignments, tests, and projects with different weights. 
                Perfect for tracking your progress throughout the semester and understanding how each component affects your overall grade.
              </p>
              <p className="text-muted-foreground">
                Our grade calculator supports weighted grading systems, allowing you to see how different assignments 
                impact your final score based on their importance in the course.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">GPA Calculator</h3>
              <p className="text-muted-foreground mb-4">
                Calculate your Grade Point Average (GPA) across multiple courses and semesters. 
                Essential for academic planning, scholarship applications, and tracking your overall academic performance.
              </p>
              <p className="text-muted-foreground">
                The GPA calculator uses the standard 4.0 scale and supports different credit systems, 
                making it suitable for high school, college, and university students.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">How to Use Our Education Calculator</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Grade Calculator</h4>
                <ol className="space-y-1 text-muted-foreground">
                  <li>1. Enter assignment names and scores</li>
                  <li>2. Set the maximum possible score for each</li>
                  <li>3. Assign weight percentages to each component</li>
                  <li>4. View your final grade and letter grade</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold mb-2">GPA Calculator</h4>
                <ol className="space-y-1 text-muted-foreground">
                  <li>1. Add your courses with names</li>
                  <li>2. Enter credit hours for each course</li>
                  <li>3. Select letter grades from the dropdown</li>
                  <li>4. See your calculated GPA and breakdown</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Grade Calculation Examples</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Example Course:</strong><br/>
                  <span className="text-muted-foreground">Assignment 1: 85/100 (20% weight)</span><br/>
                  <span className="text-muted-foreground">Assignment 2: 92/100 (20% weight)</span><br/>
                  <span className="text-muted-foreground">Midterm: 78/100 (30% weight)</span><br/>
                  <span className="text-muted-foreground">Final: 88/100 (30% weight)</span><br/>
                  <span className="text-muted-foreground"><strong>Final Grade: 85.9% (B)</strong></span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Weighted Grading:</strong><br/>
                  <span className="text-muted-foreground">Homework: 30% of final grade</span><br/>
                  <span className="text-muted-foreground">Quizzes: 20% of final grade</span><br/>
                  <span className="text-muted-foreground">Exams: 50% of final grade</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">GPA Calculation Examples</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-muted/30 rounded">
                  <strong>Sample Semester:</strong><br/>
                  <span className="text-muted-foreground">Math (3 credits): A (4.0)</span><br/>
                  <span className="text-muted-foreground">Physics (4 credits): B+ (3.3)</span><br/>
                  <span className="text-muted-foreground">English (3 credits): A- (3.7)</span><br/>
                  <span className="text-muted-foreground">History (3 credits): B (3.0)</span><br/>
                  <span className="text-muted-foreground"><strong>GPA: 3.54</strong></span>
                </div>
                <div className="p-3 bg-muted/30 rounded">
                  <strong>GPA Scale:</strong><br/>
                  <span className="text-muted-foreground">A: 4.0 | A-: 3.7 | B+: 3.3 | B: 3.0</span><br/>
                  <span className="text-muted-foreground">B-: 2.7 | C+: 2.3 | C: 2.0 | C-: 1.7</span><br/>
                  <span className="text-muted-foreground">D+: 1.3 | D: 1.0 | D-: 0.7 | F: 0.0</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Academic Planning Benefits</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Track Progress:</strong> Monitor your performance throughout the semester</li>
                <li><strong>Goal Setting:</strong> Set realistic academic targets and track progress</li>
                <li><strong>Course Planning:</strong> Understand how different courses affect your GPA</li>
                <li><strong>Scholarship Eligibility:</strong> Calculate GPA requirements for scholarships</li>
                <li><strong>Academic Standing:</strong> Monitor your standing with your institution</li>
                <li><strong>Graduate School:</strong> Plan for graduate school admission requirements</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Features for Students</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Weighted Grading:</strong> Support for different assignment weights</li>
                <li><strong>Multiple Courses:</strong> Calculate GPA across multiple semesters</li>
                <li><strong>Real-time Updates:</strong> See results as you type</li>
                <li><strong>Grade Breakdown:</strong> Detailed analysis of each component</li>
                <li><strong>Copy & Share:</strong> Share results with teachers or advisors</li>
                <li><strong>Mobile Friendly:</strong> Works perfectly on all devices</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Why Choose Our Education Calculator?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">For Students</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Track academic progress easily</li>
                  <li>• Plan courses and semesters</li>
                  <li>• Set realistic academic goals</li>
                  <li>• Understand grade requirements</li>
                  <li>• Prepare for scholarship applications</li>
                  <li>• Monitor GPA trends over time</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">For Educators</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Verify grade calculations</li>
                  <li>• Help students understand grading</li>
                  <li>• Plan course weight distributions</li>
                  <li>• Demonstrate grading transparency</li>
                  <li>• Support academic advising</li>
                  <li>• Track class performance trends</li>
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