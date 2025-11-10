"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, Copy, Calculator, TrendingUp, Clock, Receipt, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { trackCalcTypeChange, trackCopy } from "@/lib/analytics";

interface Expense {
  name: string;
  amount: number;
  frequency: "monthly" | "yearly";
}

interface Project {
  name: string;
  hours: number;
  additionalCosts: number;
  discount: number;
}

export default function FreelanceCalculator() {
  const [activeTab, setActiveTab] = useState("hourly");
  
  // Hourly Rate Calculator
  const [monthlyExpenses, setMonthlyExpenses] = useState<Expense[]>([
    { name: "Rent/Mortgage", amount: 1200, frequency: "monthly" },
    { name: "Utilities", amount: 200, frequency: "monthly" },
    { name: "Insurance", amount: 150, frequency: "monthly" },
    { name: "Food", amount: 400, frequency: "monthly" },
  ]);
  const [businessExpenses, setBusinessExpenses] = useState<Expense[]>([
    { name: "Software Subscriptions", amount: 50, frequency: "monthly" },
    { name: "Equipment", amount: 100, frequency: "monthly" },
    { name: "Marketing", amount: 200, frequency: "monthly" },
    { name: "Professional Development", amount: 100, frequency: "monthly" },
  ]);
  const [workDays, setWorkDays] = useState(20);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [desiredProfit, setDesiredProfit] = useState(2000);
  const [taxRate, setTaxRate] = useState(25);
  const [hourlyRate, setHourlyRate] = useState<number | null>(null);

  // Project Cost Calculator
  const [projects, setProjects] = useState<Project[]>([
    { name: "Website Development", hours: 40, additionalCosts: 200, discount: 0 },
    { name: "Logo Design", hours: 8, additionalCosts: 50, discount: 0 },
  ]);
  const [projectResults, setProjectResults] = useState<Array<{
    name: string;
    hours: number;
    additionalCosts: number;
    discount: number;
    laborCost: number;
    subtotal: number;
    discountAmount: number;
    total: number;
    taxAmount: number;
    finalTotal: number;
  }>>([]);

  // Profitability Calculator
  const [monthlyRevenue, setMonthlyRevenue] = useState(8000);
  const [profitabilityResult, setProfitabilityResult] = useState<{
    totalExpenses: number;
    grossProfit: number;
    profitMargin: number;
    breakEvenRevenue: number;
  } | null>(null);

  // Tax Calculator
  const [annualIncome, setAnnualIncome] = useState(96000);
  const [businessExpensesAnnual, setBusinessExpensesAnnual] = useState(5400);
  const [taxResult, setTaxResult] = useState<{
    taxableIncome: number;
    estimatedTax: number;
    effectiveTaxRate: number;
    afterTaxIncome: number;
  } | null>(null);

  const calculateHourlyRate = () => {
    const totalMonthlyExpenses = monthlyExpenses.reduce((sum, exp) => 
      sum + (exp.frequency === "monthly" ? exp.amount : exp.amount / 12), 0
    );
    
    const totalBusinessExpenses = businessExpenses.reduce((sum, exp) => 
      sum + (exp.frequency === "monthly" ? exp.amount : exp.amount / 12), 0
    );

    const totalExpenses = totalMonthlyExpenses + totalBusinessExpenses;
    const totalHours = workDays * hoursPerDay;
    const preTaxIncome = totalExpenses + desiredProfit;
    const postTaxIncome = preTaxIncome / (1 - taxRate / 100);
    const calculatedRate = postTaxIncome / totalHours;

    setHourlyRate(Math.round(calculatedRate * 100) / 100);
  };

  const calculateProjectCosts = () => {
    if (!hourlyRate) return;

    const results = projects.map(project => {
      const laborCost = project.hours * hourlyRate;
      const subtotal = laborCost + project.additionalCosts;
      const discountAmount = subtotal * (project.discount / 100);
      const total = subtotal - discountAmount;
      const taxAmount = total * (taxRate / 100);
      const finalTotal = total + taxAmount;

      return {
        ...project,
        laborCost: Math.round(laborCost * 100) / 100,
        subtotal: Math.round(subtotal * 100) / 100,
        discountAmount: Math.round(discountAmount * 100) / 100,
        total: Math.round(total * 100) / 100,
        taxAmount: Math.round(taxAmount * 100) / 100,
        finalTotal: Math.round(finalTotal * 100) / 100,
      };
    });

    setProjectResults(results);
  };

  const calculateProfitability = () => {
    const totalMonthlyExpenses = monthlyExpenses.reduce((sum, exp) => 
      sum + (exp.frequency === "monthly" ? exp.amount : exp.amount / 12), 0
    );
    
    const totalBusinessExpenses = businessExpenses.reduce((sum, exp) => 
      sum + (exp.frequency === "monthly" ? exp.amount : exp.amount / 12), 0
    );

    const totalExpenses = totalMonthlyExpenses + totalBusinessExpenses;
    const grossProfit = monthlyRevenue - totalExpenses;
    const profitMargin = (grossProfit / monthlyRevenue) * 100;
    const breakEvenRevenue = totalExpenses;

    setProfitabilityResult({
      totalExpenses: Math.round(totalExpenses * 100) / 100,
      grossProfit: Math.round(grossProfit * 100) / 100,
      profitMargin: Math.round(profitMargin * 100) / 100,
      breakEvenRevenue: Math.round(breakEvenRevenue * 100) / 100,
    });
  };

  const calculateTaxes = () => {
    const taxableIncome = annualIncome - businessExpensesAnnual;
    const estimatedTax = taxableIncome * (taxRate / 100);
    const effectiveTaxRate = (estimatedTax / annualIncome) * 100;
    const afterTaxIncome = annualIncome - estimatedTax;

    setTaxResult({
      taxableIncome: Math.round(taxableIncome * 100) / 100,
      estimatedTax: Math.round(estimatedTax * 100) / 100,
      effectiveTaxRate: Math.round(effectiveTaxRate * 100) / 100,
      afterTaxIncome: Math.round(afterTaxIncome * 100) / 100,
    });
  };

  useEffect(() => {
    calculateHourlyRate();
  }, [monthlyExpenses, businessExpenses, workDays, hoursPerDay, desiredProfit, taxRate]);

  useEffect(() => {
    calculateProjectCosts();
  }, [hourlyRate, projects, taxRate]);

  useEffect(() => {
    calculateProfitability();
  }, [monthlyRevenue, monthlyExpenses, businessExpenses]);

  useEffect(() => {
    calculateTaxes();
  }, [annualIncome, businessExpensesAnnual, taxRate]);

  const addExpense = (type: "monthly" | "business") => {
    const newExpense = { name: "New Expense", amount: 0, frequency: "monthly" as const };
    if (type === "monthly") {
      setMonthlyExpenses([...monthlyExpenses, newExpense]);
    } else {
      setBusinessExpenses([...businessExpenses, newExpense]);
    }
  };

  const removeExpense = (type: "monthly" | "business", index: number) => {
    if (type === "monthly") {
      setMonthlyExpenses(monthlyExpenses.filter((_, i) => i !== index));
    } else {
      setBusinessExpenses(businessExpenses.filter((_, i) => i !== index));
    }
  };

  const updateExpense = (type: "monthly" | "business", index: number, field: keyof Expense, value: string | number) => {
    if (type === "monthly") {
      const newExpenses = [...monthlyExpenses];
      newExpenses[index] = { ...newExpenses[index], [field]: value };
      setMonthlyExpenses(newExpenses);
    } else {
      const newExpenses = [...businessExpenses];
      newExpenses[index] = { ...newExpenses[index], [field]: value };
      setBusinessExpenses(newExpenses);
    }
  };

  const addProject = () => {
    setProjects([...projects, { name: "New Project", hours: 0, additionalCosts: 0, discount: 0 }]);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const updateProject = (index: number, field: keyof Project, value: string | number) => {
    const newProjects = [...projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    setProjects(newProjects);
  };

  const copyHourlyRate = () => {
    if (!hourlyRate) return;
    
    const text = `Freelance Hourly Rate Calculation:
Recommended Hourly Rate: $${hourlyRate}/hour
Based on ${workDays} work days × ${hoursPerDay} hours/day = ${workDays * hoursPerDay} hours/month`;
    
    navigator.clipboard.writeText(text);
    toast.success("Hourly rate copied to clipboard!");
    trackCopy('freelance', 'hourly');
  };

  const copyProjectResults = () => {
    if (projectResults.length === 0) return;
    
    const text = `Project Cost Estimates:
${projectResults.map(p => `${p.name}: $${p.finalTotal} (${p.hours}h @ $${hourlyRate}/hour)`).join('\n')}`;
    
    navigator.clipboard.writeText(text);
    toast.success("Project estimates copied to clipboard!");
    trackCopy('freelance', 'project');
  };

  const copyProfitability = () => {
    if (!profitabilityResult) return;
    
    const text = `Profitability Analysis:
Monthly Revenue: $${monthlyRevenue}
Total Expenses: $${profitabilityResult.totalExpenses}
Gross Profit: $${profitabilityResult.grossProfit}
Profit Margin: ${profitabilityResult.profitMargin}%`;
    
    navigator.clipboard.writeText(text);
    toast.success("Profitability analysis copied to clipboard!");
    trackCopy('freelance', 'profitability');
  };

  const copyTaxResults = () => {
    if (!taxResult) return;
    
    const text = `Tax Calculation:
Annual Income: $${annualIncome}
Taxable Income: $${taxResult.taxableIncome}
Estimated Tax: $${taxResult.estimatedTax}
After-Tax Income: $${taxResult.afterTaxIncome}`;
    
    navigator.clipboard.writeText(text);
    toast.success("Tax calculation copied to clipboard!");
    trackCopy('freelance', 'tax');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Tabs value={activeTab} onValueChange={(v) => { setActiveTab(v); trackCalcTypeChange('freelance', v); }} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="hourly" className="flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Hourly Rate
          </TabsTrigger>
          <TabsTrigger value="project" className="flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Project Cost
          </TabsTrigger>
          <TabsTrigger value="profitability" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Profitability
          </TabsTrigger>
          <TabsTrigger value="tax" className="flex items-center gap-2">
            <Receipt className="w-4 h-4" />
            Tax Calculator
          </TabsTrigger>
        </TabsList>

        {/* Hourly Rate Calculator */}
        <TabsContent value="hourly" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Monthly Expenses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Monthly Personal Expenses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {monthlyExpenses.map((expense, index) => (
                  <div key={index} className="grid md:grid-cols-4 gap-3 items-end">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Expense Name</label>
                      <Input
                        value={expense.name}
                        onChange={(e) => updateExpense("monthly", index, 'name', e.target.value)}
                        placeholder="Rent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Amount</label>
                      <Input
                        type="number"
                        value={expense.amount}
                        onChange={(e) => updateExpense("monthly", index, 'amount', parseFloat(e.target.value) || 0)}
                        placeholder="1200"
                        min="0"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Frequency</label>
                      <Select value={expense.frequency} onValueChange={(value: "monthly" | "yearly") => updateExpense("monthly", index, 'frequency', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="yearly">Yearly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeExpense("monthly", index)}
                      className="h-10 w-10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button onClick={() => addExpense("monthly")} variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Personal Expense
                </Button>
              </CardContent>
            </Card>

            {/* Business Expenses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Business Expenses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {businessExpenses.map((expense, index) => (
                  <div key={index} className="grid md:grid-cols-4 gap-3 items-end">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Expense Name</label>
                      <Input
                        value={expense.name}
                        onChange={(e) => updateExpense("business", index, 'name', e.target.value)}
                        placeholder="Software"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Amount</label>
                      <Input
                        type="number"
                        value={expense.amount}
                        onChange={(e) => updateExpense("business", index, 'amount', parseFloat(e.target.value) || 0)}
                        placeholder="50"
                        min="0"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Frequency</label>
                      <Select value={expense.frequency} onValueChange={(value: "monthly" | "yearly") => updateExpense("business", index, 'frequency', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="yearly">Yearly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeExpense("business", index)}
                      className="h-10 w-10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button onClick={() => addExpense("business")} variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Business Expense
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Work Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Work Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Work Days per Month</label>
                  <Input
                    type="number"
                    value={workDays}
                    onChange={(e) => setWorkDays(parseInt(e.target.value) || 0)}
                    placeholder="20"
                    min="1"
                    max="31"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Hours per Day</label>
                  <Input
                    type="number"
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(parseInt(e.target.value) || 0)}
                    placeholder="8"
                    min="1"
                    max="24"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Desired Monthly Profit</label>
                  <Input
                    type="number"
                    value={desiredProfit}
                    onChange={(e) => setDesiredProfit(parseFloat(e.target.value) || 0)}
                    placeholder="2000"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tax Rate (%)</label>
                  <Input
                    type="number"
                    value={taxRate}
                    onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                    placeholder="25"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hourly Rate Results */}
          {hourlyRate && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Recommended Hourly Rate</span>
                  <Button variant="outline" size="sm" onClick={copyHourlyRate}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-4">
                    ${hourlyRate}/hour
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-muted/50 p-3 rounded">
                      <div className="font-semibold">{workDays * hoursPerDay} hours/month</div>
                      <div className="text-muted-foreground">Total billable hours</div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded">
                      <div className="font-semibold">${Math.round(hourlyRate * workDays * hoursPerDay * 100) / 100}</div>
                      <div className="text-muted-foreground">Monthly revenue</div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded">
                      <div className="font-semibold">${Math.round(hourlyRate * workDays * hoursPerDay * (1 - taxRate / 100) * 100) / 100}</div>
                      <div className="text-muted-foreground">After-tax income</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Project Cost Calculator */}
        <TabsContent value="project" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Project Cost Estimator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="grid md:grid-cols-5 gap-3 items-end">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Name</label>
                    <Input
                      value={project.name}
                      onChange={(e) => updateProject(index, 'name', e.target.value)}
                      placeholder="Website Development"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Hours</label>
                    <Input
                      type="number"
                      value={project.hours}
                      onChange={(e) => updateProject(index, 'hours', parseFloat(e.target.value) || 0)}
                      placeholder="40"
                      min="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Additional Costs</label>
                    <Input
                      type="number"
                      value={project.additionalCosts}
                      onChange={(e) => updateProject(index, 'additionalCosts', parseFloat(e.target.value) || 0)}
                      placeholder="200"
                      min="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Discount (%)</label>
                    <Input
                      type="number"
                      value={project.discount}
                      onChange={(e) => updateProject(index, 'discount', parseFloat(e.target.value) || 0)}
                      placeholder="0"
                      min="0"
                      max="100"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => removeProject(index)}
                    className="h-10 w-10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button onClick={addProject} variant="outline" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Button>
            </CardContent>
          </Card>

          {/* Project Results */}
          {projectResults.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Project Cost Estimates</span>
                  <Button variant="outline" size="sm" onClick={copyProjectResults}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projectResults.map((project, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-3">{project.name}</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span>Labor Cost ({project.hours}h @ ${hourlyRate}/h):</span>
                            <span>${project.laborCost}</span>
                          </div>
                          <div className="flex justify-between mb-1">
                            <span>Additional Costs:</span>
                            <span>${project.additionalCosts}</span>
                          </div>
                          <div className="flex justify-between mb-1">
                            <span>Subtotal:</span>
                            <span>${project.subtotal}</span>
                          </div>
                          {project.discount > 0 && (
                            <div className="flex justify-between mb-1 text-green-600">
                              <span>Discount ({project.discount}%):</span>
                              <span>-${project.discountAmount}</span>
                            </div>
                          )}
                          <div className="flex justify-between mb-1">
                            <span>Tax ({taxRate}%):</span>
                            <span>${project.taxAmount}</span>
                          </div>
                          <div className="flex justify-between font-semibold text-lg border-t pt-2">
                            <span>Total:</span>
                            <span>${project.finalTotal}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Profitability Calculator */}
        <TabsContent value="profitability" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Profitability Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Monthly Revenue</label>
                  <Input
                    type="number"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(parseFloat(e.target.value) || 0)}
                    placeholder="8000"
                    min="0"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profitability Results */}
          {profitabilityResult && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Profitability Analysis</span>
                  <Button variant="outline" size="sm" onClick={copyProfitability}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        ${profitabilityResult.grossProfit}
                      </div>
                      <div className="text-sm text-muted-foreground">Gross Profit</div>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        {profitabilityResult.profitMargin}%
                      </div>
                      <div className="text-sm text-muted-foreground">Profit Margin</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        ${profitabilityResult.totalExpenses}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Expenses</div>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">
                        ${profitabilityResult.breakEvenRevenue}
                      </div>
                      <div className="text-sm text-muted-foreground">Break-Even Revenue</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Tax Calculator */}
        <TabsContent value="tax" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="w-5 h-5" />
                Tax Calculator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Annual Income</label>
                  <Input
                    type="number"
                    value={annualIncome}
                    onChange={(e) => setAnnualIncome(parseFloat(e.target.value) || 0)}
                    placeholder="96000"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Annual Business Expenses</label>
                  <Input
                    type="number"
                    value={businessExpensesAnnual}
                    onChange={(e) => setBusinessExpensesAnnual(parseFloat(e.target.value) || 0)}
                    placeholder="5400"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tax Rate (%)</label>
                  <Input
                    type="number"
                    value={taxRate}
                    onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                    placeholder="25"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tax Results */}
          {taxResult && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Tax Calculation</span>
                  <Button variant="outline" size="sm" onClick={copyTaxResults}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        ${taxResult.taxableIncome}
                      </div>
                      <div className="text-sm text-muted-foreground">Taxable Income</div>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">
                        ${taxResult.estimatedTax}
                      </div>
                      <div className="text-sm text-muted-foreground">Estimated Tax</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        ${taxResult.afterTaxIncome}
                      </div>
                      <div className="text-sm text-muted-foreground">After-Tax Income</div>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        {taxResult.effectiveTaxRate}%
                      </div>
                      <div className="text-sm text-muted-foreground">Effective Tax Rate</div>
                    </div>
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
