"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Copy, Share2, Calculator, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { trackCalcTypeChange, trackCopy, trackShare } from "@/lib/analytics";

interface Grade {
  name: string;
  score: number;
  maxScore: number;
  weight: number;
}

interface GPACourse {
  name: string;
  credits: number;
  grade: string;
}

export default function EducationCalculator() {
  const [activeTab, setActiveTab] = useState("grade");
  const [grades, setGrades] = useState<Grade[]>([
    { name: "Assignment 1", score: 85, maxScore: 100, weight: 20 },
    { name: "Assignment 2", score: 92, maxScore: 100, weight: 20 },
    { name: "Midterm", score: 78, maxScore: 100, weight: 30 },
    { name: "Final Exam", score: 88, maxScore: 100, weight: 30 },
  ]);
  const [gpaCourses, setGpaCourses] = useState<GPACourse[]>([
    { name: "Mathematics", credits: 3, grade: "A" },
    { name: "Physics", credits: 4, grade: "B+" },
    { name: "English", credits: 3, grade: "A-" },
    { name: "History", credits: 3, grade: "B" },
  ]);
  const [gradeResult, setGradeResult] = useState<{ finalGrade: number; letterGrade: string; percentage: number } | null>(null);
  const [gpaResult, setGpaResult] = useState<{ gpa: number; totalCredits: number; gradePoints: number } | null>(null);

  const gradeScale = [
    { letter: "A+", min: 97, max: 100, points: 4.0 },
    { letter: "A", min: 93, max: 96, points: 4.0 },
    { letter: "A-", min: 90, max: 92, points: 3.7 },
    { letter: "B+", min: 87, max: 89, points: 3.3 },
    { letter: "B", min: 83, max: 86, points: 3.0 },
    { letter: "B-", min: 80, max: 82, points: 2.7 },
    { letter: "C+", min: 77, max: 79, points: 2.3 },
    { letter: "C", min: 73, max: 76, points: 2.0 },
    { letter: "C-", min: 70, max: 72, points: 1.7 },
    { letter: "D+", min: 67, max: 69, points: 1.3 },
    { letter: "D", min: 63, max: 66, points: 1.0 },
    { letter: "D-", min: 60, max: 62, points: 0.7 },
    { letter: "F", min: 0, max: 59, points: 0.0 },
  ];

  const calculateGrade = () => {
    if (grades.length === 0) return;

    let totalWeightedScore = 0;
    let totalWeight = 0;

    grades.forEach(grade => {
      const percentage = (grade.score / grade.maxScore) * 100;
      totalWeightedScore += percentage * grade.weight;
      totalWeight += grade.weight;
    });

    const finalPercentage = totalWeightedScore / totalWeight;
    const finalGrade = Math.round(finalPercentage * 100) / 100;

    // Find letter grade
    const letterGrade = gradeScale.find(grade => 
      finalPercentage >= grade.min && finalPercentage <= grade.max
    )?.letter || "F";

    setGradeResult({
      finalGrade,
      letterGrade,
      percentage: finalPercentage
    });
  };

  const calculateGPA = () => {
    if (gpaCourses.length === 0) return;

    let totalGradePoints = 0;
    let totalCredits = 0;

    gpaCourses.forEach(course => {
      const gradeInfo = gradeScale.find(g => g.letter === course.grade);
      if (gradeInfo) {
        totalGradePoints += gradeInfo.points * course.credits;
        totalCredits += course.credits;
      }
    });

    const gpa = totalCredits > 0 ? totalGradePoints / totalCredits : 0;

    setGpaResult({
      gpa: Math.round(gpa * 1000) / 1000,
      totalCredits,
      gradePoints: totalGradePoints
    });
  };

  useEffect(() => {
    if (grades.length > 0) {
      calculateGrade();
    }
  }, [grades]);

  useEffect(() => {
    if (gpaCourses.length > 0) {
      calculateGPA();
    }
  }, [gpaCourses]);

  const addGrade = () => {
    setGrades([...grades, { name: `Assignment ${grades.length + 1}`, score: 0, maxScore: 100, weight: 10 }]);
  };

  const removeGrade = (index: number) => {
    setGrades(grades.filter((_, i) => i !== index));
  };

  const updateGrade = (index: number, field: keyof Grade, value: string | number) => {
    const newGrades = [...grades];
    newGrades[index] = { ...newGrades[index], [field]: value };
    setGrades(newGrades);
  };

  const addCourse = () => {
    setGpaCourses([...gpaCourses, { name: `Course ${gpaCourses.length + 1}`, credits: 3, grade: "B" }]);
  };

  const removeCourse = (index: number) => {
    setGpaCourses(gpaCourses.filter((_, i) => i !== index));
  };

  const updateCourse = (index: number, field: keyof GPACourse, value: string | number) => {
    const newCourses = [...gpaCourses];
    newCourses[index] = { ...newCourses[index], [field]: value };
    setGpaCourses(newCourses);
  };

  const copyGradeResult = () => {
    if (!gradeResult) return;
    
    const text = `Grade Calculation:
Final Grade: ${gradeResult.finalGrade}% (${gradeResult.letterGrade})
Total Weight: ${grades.reduce((sum, g) => sum + g.weight, 0)}%`;
    
    navigator.clipboard.writeText(text);
    toast.success("Grade result copied to clipboard!");
  };

  const copyGPAResult = () => {
    if (!gpaResult) return;
    
    const text = `GPA Calculation:
GPA: ${gpaResult.gpa}
Total Credits: ${gpaResult.totalCredits}
Total Grade Points: ${gpaResult.gradePoints}`;
    
    navigator.clipboard.writeText(text);
    toast.success("GPA result copied to clipboard!");
  };

  const shareGradeResult = () => {
    if (!gradeResult) return;
    
    const text = `Check out my grade calculation: ${gradeResult.finalGrade}% (${gradeResult.letterGrade})`;
    const url = window.location.href;
    
    if (navigator.share) {
      navigator.share({
        title: "Grade Calculator",
        text,
        url,
      });
    } else {
      navigator.clipboard.writeText(`${text}\n${url}`);
      toast.success("Grade calculation shared to clipboard!");
    }
  };

  const shareGPAResult = () => {
    if (!gpaResult) return;
    
    const text = `Check out my GPA calculation: ${gpaResult.gpa}`;
    const url = window.location.href;
    
    if (navigator.share) {
      navigator.share({
        title: "GPA Calculator",
        text,
        url,
      });
    } else {
      navigator.clipboard.writeText(`${text}\n${url}`);
      toast.success("GPA calculation shared to clipboard!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Tabs value={activeTab} onValueChange={(v) => { setActiveTab(v); trackCalcTypeChange('education', v); }} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="grade" className="flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Grade Calculator
          </TabsTrigger>
          <TabsTrigger value="gpa" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            GPA Calculator
          </TabsTrigger>
        </TabsList>

        {/* Grade Calculator */}
        <TabsContent value="grade" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Grade Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {grades.map((grade, index) => (
                  <div key={index} className="grid md:grid-cols-5 gap-3 items-end">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Assignment Name</label>
                      <Input
                        value={grade.name}
                        onChange={(e) => updateGrade(index, 'name', e.target.value)}
                        placeholder="Assignment name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Score</label>
                      <Input
                        type="number"
                        value={grade.score}
                        onChange={(e) => updateGrade(index, 'score', parseFloat(e.target.value) || 0)}
                        placeholder="85"
                        min="0"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Max Score</label>
                      <Input
                        type="number"
                        value={grade.maxScore}
                        onChange={(e) => updateGrade(index, 'maxScore', parseFloat(e.target.value) || 100)}
                        placeholder="100"
                        min="1"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Weight (%)</label>
                      <Input
                        type="number"
                        value={grade.weight}
                        onChange={(e) => updateGrade(index, 'weight', parseFloat(e.target.value) || 0)}
                        placeholder="20"
                        min="0"
                        max="100"
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeGrade(index)}
                      className="h-10 w-10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
              
              <Button onClick={addGrade} variant="outline" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Assignment
              </Button>
            </CardContent>
          </Card>

          {/* Grade Results */}
          {gradeResult && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Grade Results</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => { copyGradeResult(); trackCopy('education', 'grade'); }}>
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => { shareGradeResult(); trackShare('education', 'grade'); }}>
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">
                      {gradeResult.finalGrade}%
                    </div>
                    <div className="text-sm text-muted-foreground">Final Grade</div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {gradeResult.letterGrade}
                    </div>
                    <div className="text-sm text-muted-foreground">Letter Grade</div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {grades.reduce((sum, g) => sum + g.weight, 0)}%
                    </div>
                    <div className="text-sm text-muted-foreground">Total Weight</div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="text-sm font-medium mb-2">Grade Breakdown:</div>
                  <div className="space-y-2 text-sm">
                    {grades.map((grade, index) => {
                      const percentage = (grade.score / grade.maxScore) * 100;
                      return (
                        <div key={index} className="flex justify-between">
                          <span>{grade.name}:</span>
                          <span>{grade.score}/{grade.maxScore} ({percentage.toFixed(1)}%) - Weight: {grade.weight}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* GPA Calculator */}
        <TabsContent value="gpa" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                GPA Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {gpaCourses.map((course, index) => (
                  <div key={index} className="grid md:grid-cols-4 gap-3 items-end">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Course Name</label>
                      <Input
                        value={course.name}
                        onChange={(e) => updateCourse(index, 'name', e.target.value)}
                        placeholder="Course name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Credits</label>
                      <Input
                        type="number"
                        value={course.credits}
                        onChange={(e) => updateCourse(index, 'credits', parseFloat(e.target.value) || 0)}
                        placeholder="3"
                        min="0"
                        step="0.5"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Grade</label>
                      <Select value={course.grade} onValueChange={(value) => updateCourse(index, 'grade', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {gradeScale.map((grade) => (
                            <SelectItem key={grade.letter} value={grade.letter}>
                              {grade.letter} ({grade.points})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeCourse(index)}
                      className="h-10 w-10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
              
              <Button onClick={addCourse} variant="outline" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Course
              </Button>
            </CardContent>
          </Card>

          {/* GPA Results */}
          {gpaResult && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>GPA Results</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => { copyGPAResult(); trackCopy('education', 'gpa'); }}>
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => { shareGPAResult(); trackShare('education', 'gpa'); }}>
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">
                      {gpaResult.gpa}
                    </div>
                    <div className="text-sm text-muted-foreground">GPA</div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {gpaResult.totalCredits}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Credits</div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {gpaResult.gradePoints}
                    </div>
                    <div className="text-sm text-muted-foreground">Grade Points</div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="text-sm font-medium mb-2">Course Breakdown:</div>
                  <div className="space-y-2 text-sm">
                    {gpaCourses.map((course, index) => {
                      const gradeInfo = gradeScale.find(g => g.letter === course.grade);
                      const points = gradeInfo ? gradeInfo.points * course.credits : 0;
                      return (
                        <div key={index} className="flex justify-between">
                          <span>{course.name}:</span>
                          <span>{course.grade} ({gradeInfo?.points || 0}) × {course.credits} credits = {points} points</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
} 
