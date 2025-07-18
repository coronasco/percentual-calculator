import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { BookOpen, Calculator, ArrowLeft, TrendingUp, CheckCircle, AlertCircle, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Education Calculator Guide - How to Calculate Grades and GPA",
  description: "Complete guide to using our education calculator. Learn how to calculate grades, GPA, and academic performance. Step-by-step instructions with examples for students and teachers.",
  keywords: "education calculator guide, grade calculation guide, gpa calculator guide, academic calculator tutorial, student grade calculator, teacher grade calculator",
  openGraph: {
    title: "Education Calculator Guide - How to Calculate Grades and GPA",
    description: "Complete guide to using our education calculator. Learn how to calculate grades, GPA, and academic performance. Step-by-step instructions with examples for students and teachers.",
  },
};

export default function EducationCalculatorGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-foreground transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground">Education Calculator</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <Link 
              href="/guides" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Guides
            </Link>
            <h1 className="text-4xl font-bold mb-4">Education Calculator Guide</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Master academic calculations with our comprehensive guide to grade and GPA calculations
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/education" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Calculator className="w-4 h-4" />
                Try Education Calculator
              </Link>
              <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
                <BookOpen className="w-4 h-4" />
                Reading time: 8 minutes
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#overview" className="text-primary hover:underline">1. Overview</a></li>
              <li><a href="#grade-calculator" className="text-primary hover:underline">2. Grade Calculator</a></li>
              <li><a href="#gpa-calculator" className="text-primary hover:underline">3. GPA Calculator</a></li>
              <li><a href="#formulas" className="text-primary hover:underline">4. Formulas and Methods</a></li>
              <li><a href="#examples" className="text-primary hover:underline">5. Real-World Examples</a></li>
              <li><a href="#tips" className="text-primary hover:underline">6. Tips and Best Practices</a></li>
              <li><a href="#faq" className="text-primary hover:underline">7. Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Overview Section */}
          <section id="overview" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">1. Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Our Education Calculator is a comprehensive tool designed for students, teachers, and academic professionals. 
                It combines two essential academic calculation tools: a Grade Calculator and a GPA Calculator, providing 
                everything you need to track and plan your academic performance.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-primary" />
                    Grade Calculator
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Calculate final grades based on multiple assignments, tests, and projects with different weights. 
                    Perfect for tracking progress throughout the semester.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Weighted grading systems
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Multiple assignment types
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Real-time calculations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Letter grade conversion
                    </li>
                  </ul>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    GPA Calculator
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Calculate Grade Point Average across multiple courses and semesters. Essential for academic planning 
                    and scholarship applications.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Standard 4.0 scale
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Multiple course support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Credit hour calculations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Detailed breakdown
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Grade Calculator Section */}
          <section id="grade-calculator" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">2. Grade Calculator</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                The Grade Calculator helps you determine your final course grade by combining multiple assignments, 
                tests, and projects with their respective weights. This is particularly useful for courses that use 
                weighted grading systems.
              </p>

              <h3 className="text-2xl font-semibold mb-4">How to Use the Grade Calculator</h3>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Step-by-Step Instructions:</h4>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <strong>Enter Assignment Details:</strong> For each assignment, enter the name, your score, 
                      the maximum possible score, and the weight percentage.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <strong>Set Weights:</strong> Assign weight percentages to each component based on your course syllabus. 
                      Total weights should equal 100%.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <strong>Add More Assignments:</strong> Use the &quot;Add Assignment&quot; button to include additional components.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                    <div>
                      <strong>View Results:</strong> Your final grade percentage and letter grade will be calculated automatically.
                    </div>
                  </li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Understanding Weighted Grading</h3>
              <p className="mb-4">
                Weighted grading means that different assignments contribute differently to your final grade based on their importance. 
                For example, a final exam might be worth 40% of your grade, while homework assignments might only be worth 10% each.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg mb-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Pro Tip</h4>
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      Always verify that your total weights equal 100%. If they don&apos;t, the calculator will still work, 
                      but your results may not reflect your actual course grading system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* GPA Calculator Section */}
          <section id="gpa-calculator" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">3. GPA Calculator</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                The GPA (Grade Point Average) Calculator helps you determine your overall academic performance across 
                multiple courses. GPA is crucial for academic planning, scholarship applications, and graduate school admissions.
              </p>

              <h3 className="text-2xl font-semibold mb-4">How to Use the GPA Calculator</h3>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Step-by-Step Instructions:</h4>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <strong>Add Courses:</strong> Enter the course name, number of credit hours, and select the letter grade.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <strong>Enter Credit Hours:</strong> Credit hours represent the workload of each course. 
                      Most courses are 3-4 credit hours.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <strong>Select Grades:</strong> Choose letter grades from the dropdown menu. 
                      The calculator uses the standard 4.0 scale.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                    <div>
                      <strong>View Results:</strong> Your GPA, total credits, and grade points will be calculated automatically.
                    </div>
                  </li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Understanding the 4.0 Scale</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-muted">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-muted px-4 py-2 text-left">Letter Grade</th>
                      <th className="border border-muted px-4 py-2 text-left">Grade Points</th>
                      <th className="border border-muted px-4 py-2 text-left">Percentage Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-muted px-4 py-2">A+</td>
                      <td className="border border-muted px-4 py-2">4.0</td>
                      <td className="border border-muted px-4 py-2">97-100%</td>
                    </tr>
                    <tr>
                      <td className="border border-muted px-4 py-2">A</td>
                      <td className="border border-muted px-4 py-2">4.0</td>
                      <td className="border border-muted px-4 py-2">93-96%</td>
                    </tr>
                    <tr>
                      <td className="border border-muted px-4 py-2">A-</td>
                      <td className="border border-muted px-4 py-2">3.7</td>
                      <td className="border border-muted px-4 py-2">90-92%</td>
                    </tr>
                    <tr>
                      <td className="border border-muted px-4 py-2">B+</td>
                      <td className="border border-muted px-4 py-2">3.3</td>
                      <td className="border border-muted px-4 py-2">87-89%</td>
                    </tr>
                    <tr>
                      <td className="border border-muted px-4 py-2">B</td>
                      <td className="border border-muted px-4 py-2">3.0</td>
                      <td className="border border-muted px-4 py-2">83-86%</td>
                    </tr>
                    <tr>
                      <td className="border border-muted px-4 py-2">B-</td>
                      <td className="border border-muted px-4 py-2">2.7</td>
                      <td className="border border-muted px-4 py-2">80-82%</td>
                    </tr>
                    <tr>
                      <td className="border border-muted px-4 py-2">C+</td>
                      <td className="border border-muted px-4 py-2">2.3</td>
                      <td className="border border-muted px-4 py-2">77-79%</td>
                    </tr>
                    <tr>
                      <td className="border border-muted px-4 py-2">C</td>
                      <td className="border border-muted px-4 py-2">2.0</td>
                      <td className="border border-muted px-4 py-2">73-76%</td>
                    </tr>
                    <tr>
                      <td className="border border-muted px-4 py-2">C-</td>
                      <td className="border border-muted px-4 py-2">1.7</td>
                      <td className="border border-muted px-4 py-2">70-72%</td>
                    </tr>
                    <tr>
                      <td className="border border-muted px-4 py-2">D+</td>
                      <td className="border border-muted px-4 py-2">1.3</td>
                      <td className="border border-muted px-4 py-2">67-69%</td>
                    </tr>
                    <tr>
                      <td className="border border-muted px-4 py-2">D</td>
                      <td className="border border-muted px-4 py-2">1.0</td>
                      <td className="border border-muted px-4 py-2">63-66%</td>
                    </tr>
                    <tr>
                      <td className="border border-muted px-4 py-2">D-</td>
                      <td className="border border-muted px-4 py-2">0.7</td>
                      <td className="border border-muted px-4 py-2">60-62%</td>
                    </tr>
                    <tr>
                      <td className="border border-muted px-4 py-2">F</td>
                      <td className="border border-muted px-4 py-2">0.0</td>
                      <td className="border border-muted px-4 py-2">0-59%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Formulas Section */}
          <section id="formulas" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">4. Formulas and Methods</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Grade Calculation Formula</h3>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-mono text-sm mb-4">
                  Final Grade = Σ(Assignment Score / Max Score × Weight) / Σ(Weights) × 100
                </p>
                <p className="text-sm text-muted-foreground">
                  This formula calculates the weighted average of all assignments, converting each to a percentage 
                  and then applying the weight before summing and normalizing.
                </p>
              </div>

              <h3 className="text-2xl font-semibold mb-4">GPA Calculation Formula</h3>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-mono text-sm mb-4">
                  GPA = Σ(Grade Points × Credit Hours) / Σ(Credit Hours)
                </p>
                <p className="text-sm text-muted-foreground">
                    This formula calculates the weighted average of grade points, where each course&apos;s contribution 
                  is proportional to its credit hours.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Important Note</h4>
                    <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                      Different institutions may use slightly different grading scales or calculation methods. 
                      Always verify with your school&apos;s specific policies and requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Examples Section */}
          <section id="examples" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">5. Real-World Examples</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Grade Calculation Example</h3>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Course: Introduction to Computer Science</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Assignment 1:</span>
                    <span>85/100 (20% weight) = 17% contribution</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Assignment 2:</span>
                    <span>92/100 (20% weight) = 18.4% contribution</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Midterm Exam:</span>
                    <span>78/100 (30% weight) = 23.4% contribution</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Final Exam:</span>
                    <span>88/100 (30% weight) = 26.4% contribution</span>
                  </div>
                  <div className="border-t pt-2 mt-4">
                    <div className="flex justify-between font-semibold">
                      <span>Final Grade:</span>
                      <span>85.2% (B)</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">GPA Calculation Example</h3>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Fall Semester</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Mathematics (3 credits): A (4.0)</span>
                    <span>12.0 grade points</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Physics (4 credits): B+ (3.3)</span>
                    <span>13.2 grade points</span>
                  </div>
                  <div className="flex justify-between">
                    <span>English (3 credits): A- (3.7)</span>
                    <span>11.1 grade points</span>
                  </div>
                  <div className="flex justify-between">
                    <span>History (3 credits): B (3.0)</span>
                    <span>9.0 grade points</span>
                  </div>
                  <div className="border-t pt-2 mt-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total Credits:</span>
                      <span>13</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Total Grade Points:</span>
                      <span>45.3</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>GPA:</span>
                      <span>3.48</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section id="tips" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">6. Tips and Best Practices</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">For Students</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Keep track of all assignments and their weights from the beginning of the semester</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Use the calculator regularly to monitor your progress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Set realistic goals for each assignment based on your target final grade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Plan your course load to maintain a strong GPA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Use GPA calculations for scholarship and graduate school planning</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">For Teachers</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Verify your grading calculations with the calculator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Help students understand how different assignments affect their final grade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Use the calculator to demonstrate grading transparency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Plan course weight distributions that reflect learning objectives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Support academic advising with accurate GPA calculations</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">7. Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Q: What if my course uses a different grading scale?</h3>
                <p className="text-muted-foreground">
                  Our calculator uses the standard 4.0 scale. If your institution uses a different scale, 
                  you may need to convert your grades or consult with your academic advisor for the correct calculation method.
                </p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Q: How do I handle pass/fail courses?</h3>
                <p className="text-muted-foreground">
                  Pass/fail courses typically don&apos;t affect GPA calculations. You can either exclude them from your GPA calculation 
                  or assign them a neutral grade point value based on your institution&apos;s policy.
                </p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Q: What&apos;s the difference between cumulative and semester GPA?</h3>
                <p className="text-muted-foreground">
                  Semester GPA is calculated for a single term, while cumulative GPA includes all courses across multiple semesters. 
                  Our calculator can handle both - just add all your courses for cumulative GPA or only current semester courses for semester GPA.
                </p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Q: How accurate are the grade calculations?</h3>
                <p className="text-muted-foreground">
                  Our calculator uses standard mathematical formulas for grade and GPA calculations. However, always verify results 
                  with your institution&apos;s official grading policies, as some schools may have specific rounding rules or exceptions.
                </p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Q: Can I save my calculations?</h3>
                <p className="text-muted-foreground">
                  Currently, the calculator doesn&apos;t save data between sessions. We recommend taking screenshots or copying results 
                  for your records. Future updates may include save functionality.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Calculate Your Grades?</h2>
            <p className="text-muted-foreground mb-6">
              Use our Education Calculator to track your academic progress and plan your educational journey.
            </p>
            <Link 
              href="/education" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Calculator className="w-5 h-5" />
              Start Calculating Now
            </Link>
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