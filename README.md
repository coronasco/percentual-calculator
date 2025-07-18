# 🧮 Advanced Calculator Suite

A modern, fast, and feature-rich calculator suite built with Next.js 14, TypeScript, and TailwindCSS. Calculate percentages, financial metrics, real estate investments, compound interest, educational grades, and freelance rates with instant results.

## ✨ Features

### 🧮 Calculator Types

#### 📊 **Percentage Calculator** (Main)
- **Basic Percentage**: What is X% of Y?
- **Reverse Percentage**: X is what percent of Y?
- **Percentage Change**: Calculate increase/decrease from A to B
- **Markup Calculator**: Add percentage markup to prices
- **Discount Calculator**: Calculate final price after discount
- **Smart History**: Track recent calculations locally
- **Export & Share**: Export history or share results

#### 💰 **Financial Calculator**
- **Simple Interest**: Calculate basic interest on loans
- **Compound Interest**: Calculate interest over time
- **Loan Payments**: Calculate monthly payments
- **Investment Returns**: Calculate ROI and future value
- **Amortization Schedule**: Detailed payment breakdown

#### 🏠 **Real Estate Calculator**
- **Mortgage Calculator**: Calculate monthly payments
- **Rent vs Buy**: Compare renting vs buying costs
- **ROI Calculator**: Calculate real estate investment returns
- **Property Tax**: Estimate property taxes
- **Closing Costs**: Calculate total closing expenses

#### 📈 **Compound Interest Calculator**
- **Future Value**: Calculate investment growth over time
- **Regular Contributions**: Add monthly/yearly contributions
- **Time to Goal**: Calculate time needed for financial goals
- **Required Rate**: Determine needed contribution rate
- **Compounding Frequency**: Daily, monthly, yearly options

#### 🎓 **Education Calculator**
- **Grade Calculator**: Calculate final grades and averages
- **GPA Calculator**: Calculate GPA with point system
- **Student Loan Calculator**: Calculate loan payments and costs
- **Grade Point System**: Support for different grading scales
- **Academic Planning**: Plan for target GPAs

#### 💼 **Freelance Calculator**
- **Hourly Rate Calculator**: Determine optimal hourly rates
- **Income Projection**: Estimate monthly/annual earnings
- **Expense Tracking**: Calculate costs and net profit
- **Vacation Impact**: Account for time off
- **Rate Comparison**: Compare different pricing scenarios

### 🚀 User Experience
- **Instant Results**: Real-time calculations with validation
- **Smart History**: Track recent calculations locally
- **Export & Share**: Export history or share results
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works perfectly on all devices
- **No Registration**: Start calculating immediately
- **Comprehensive Guides**: Detailed guides for each calculator

### 🎯 Advanced Features
- **Precision Control**: Adjust decimal places (0-4)
- **Formula Display**: See the math behind each calculation
- **Copy Results**: Copy calculations to clipboard
- **Tooltips**: Helpful hints for each calculation type
- **SEO Optimized**: Meta tags, sitemap, structured data
- **Google Analytics**: Track usage and performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: ShadCN UI
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Analytics**: Google Analytics (gtag.js)
- **Deployment**: Vercel

## 🚀 Live Demo

Visit the live application: **[https://www.advanced-percentage-calculator.com](https://www.advanced-percentage-calculator.com)**

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/coronasco/percentual-calculator.git
   cd percentagecalculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
percentagecalculator/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── guides/            # Calculator guides
│   │   ├── percentage-calculator/ # Main calculator
│   │   ├── finance/           # Financial calculator
│   │   ├── real-estate/       # Real estate calculator
│   │   ├── compound-interest/ # Compound interest calculator
│   │   ├── education/         # Education calculator
│   │   ├── freelance/         # Freelance calculator
│   │   └── privacy/           # Privacy policy
│   ├── components/            # React components
│   │   ├── calculators/       # Calculator components
│   │   │   ├── PercentageForm.tsx
│   │   │   ├── FinanceCalculator.tsx
│   │   │   ├── RealEstateCalculator.tsx
│   │   │   ├── CompoundInterestCalculator.tsx
│   │   │   ├── EducationCalculator.tsx
│   │   │   └── FreelanceCalculator.tsx
│   │   ├── Header.tsx         # Navigation header
│   │   ├── ResultCard.tsx     # Results display
│   │   ├── theme-provider.tsx # Theme context
│   │   ├── theme-toggle.tsx   # Dark mode toggle
│   │   └── ui/                # ShadCN UI components
│   └── lib/                   # Utility functions
│       ├── percentageUtils.ts # Calculation logic
│       └── utils.ts           # Helper functions
├── public/                    # Static assets
├── package.json
└── README.md
```

## 🧮 Usage Examples

### Percentage Calculator
```
What is 25% of 200?
Result: 50
Formula: 25% × 200 = 50
```

### Financial Calculator
```
$1000 loan at 5% for 3 years
Monthly Payment: $29.97
Total Interest: $79.00
```

### Real Estate Calculator
```
$300,000 home, 20% down, 4% rate, 30 years
Monthly Payment: $1,145.80
Total Interest: $112,488.00
```

### Compound Interest Calculator
```
$1000 initial, $100/month, 7% annual, 10 years
Future Value: $17,908.48
Total Contributions: $13,000.00
Interest Earned: $4,908.48
```

### Education Calculator
```
Grades: 85, 92, 78, 95, 88
GPA: 3.4 (B+)
Average: 87.6%
```

### Freelance Calculator
```
Desired Income: $80,000/year
Working Days: 220
Hours/Day: 8
Hourly Rate: $45.45
```

## 🎨 Customization

### Adding New Calculators
1. Create calculator component in `src/components/calculators/`
2. Add page in `src/app/[calculator-name]/`
3. Add to navigation in `src/components/Header.tsx`
4. Create guide in `src/app/guides/[calculator-name]/`
5. Update sitemap.xml

### Styling
- Modify TailwindCSS classes in components
- Update theme colors in `tailwind.config.js`
- Customize ShadCN UI components in `src/components/ui/`

## 📱 SEO & Performance

### SEO Features
- ✅ **Server-side metadata** for all pages
- ✅ **Structured data** (JSON-LD) for Google
- ✅ **OpenGraph tags** for social media
- ✅ **Twitter Cards** for Twitter sharing
- ✅ **Sitemap.xml** for search engines
- ✅ **Robots.txt** for crawlers
- ✅ **100+ keywords** including long-tail phrases
- ✅ **Comprehensive guides** for each calculator

### Performance Optimizations
- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** for type safety
- ✅ **TailwindCSS** for optimized CSS
- ✅ **Google Analytics** for insights
- ✅ **Core Web Vitals** optimized
- ✅ **Mobile-first** responsive design
- ✅ **Code splitting** for optimal loading

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Environment Variables
Create a `.env.local` file for local development:
```env
# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=your-ga-id
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

## 🌟 Features Roadmap

- [ ] Unit converter integration
- [ ] Graph visualization for trends
- [ ] PWA (Progressive Web App) features
- [ ] Custom themes
- [ ] Social sharing enhancements
- [ ] AI-powered calculation suggestions
- [ ] PDF export functionality
- [ ] Advanced charting and analytics

## 📊 Target Keywords

- "percentage calculator"
- "compound interest calculator"
- "mortgage calculator"
- "grade calculator"
- "freelance hourly rate calculator"
- "student loan calculator"
- "financial calculator"
- "investment calculator"
- "real estate calculator"
- "GPA calculator"

---

**Built with ❤️ using Next.js 14, TypeScript, and TailwindCSS**
