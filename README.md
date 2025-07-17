# 🧮 Advanced Percentage Calculator

A modern, fast, and feature-rich percentage calculator built with Next.js 14, TypeScript, and TailwindCSS. Calculate percentages, markups, discounts, compound interest, and more with instant results.

## ✨ Features

### 🧮 Calculation Types
- **Basic Percentage**: What is X% of Y?
- **Reverse Percentage**: X is what percent of Y?
- **Percentage Change**: Calculate increase/decrease from A to B
- **Markup Calculator**: Add percentage markup to prices
- **Discount Calculator**: Calculate final price after discount
- **Compound Interest**: Calculate interest over time

### 🚀 User Experience
- **Instant Results**: Real-time calculations with validation
- **Smart History**: Track recent calculations locally
- **Export & Share**: Export history or share results
- **Dark Mode**: Toggle between light and dark themes
- **Keyboard Shortcuts**: Ctrl+Enter to calculate, Esc to reset
- **Mobile Responsive**: Works perfectly on all devices
- **No Registration**: Start calculating immediately

### 🎯 Advanced Features
- **Precision Control**: Adjust decimal places (0-4)
- **Formula Display**: See the math behind each calculation
- **Favorites**: Mark important calculations
- **Copy Results**: Copy calculations to clipboard
- **Tooltips**: Helpful hints for each calculation type

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: ShadCN UI
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Analytics**: Google Analytics (gtag.js)

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
│   │   └── privacy/           # Privacy policy
│   ├── components/            # React components
│   │   ├── PercentageForm.tsx # Main calculator form
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

### Basic Percentage
```
What is 25% of 200?
Result: 50
Formula: 25% × 200 = 50
```

### Reverse Percentage
```
50 is what percent of 200?
Result: 25%
Formula: (50 ÷ 200) × 100 = 25%
```

### Percentage Change
```
Change from 100 to 150?
Result: 50% increase
Formula: ((150 - 100) ÷ 100) × 100 = 50%
```

### Markup Calculator
```
$100 with 20% markup?
Result: $120
Formula: $100 + (20% × $100) = $120
```

### Compound Interest
```
$1000 at 5% for 3 years?
Result: $1157.63
Formula: $1000 × (1 + 5%)³ = $1157.63
```

## 🎨 Customization

### Adding New Calculation Types
1. Add the calculation function in `src/lib/percentageUtils.ts`
2. Add the option to the `options` array in `src/components/PercentageForm.tsx`
3. Update the switch statement in the `calculate` function

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
- ✅ **50+ keywords** including long-tail phrases

### Performance Optimizations
- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** for type safety
- ✅ **TailwindCSS** for optimized CSS
- ✅ **Google Analytics** for insights
- ✅ **Core Web Vitals** optimized
- ✅ **Mobile-first** responsive design

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

---

**Built with ❤️ using Next.js 14, TypeScript, and TailwindCSS**
