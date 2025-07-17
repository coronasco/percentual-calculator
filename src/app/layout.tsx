import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Free Percentage Calculator – Fast & Simple Online Tool",
  description:
    "Free online percentage calculator for calculating percentages, discounts, markups, compound interest, and financial ratios. What is X% of Y? Find percentage increase/decrease, profit margins, sales tax, tips, and more. No registration, 100% free and private.",
  keywords: [
    "percentage calculator",
    "online calculator",
    "free calculator",
    "percentage increase",
    "percentage decrease",
    "markup calculator",
    "discount calculator",
    "compound interest calculator",
    "math tool",
    "percentage formula",
    "what is X percent of Y",
    "percentage change calculator",
    "financial calculator",
    "business calculator",
    "tip calculator",
    "tax calculator",
    "profit margin calculator",
    "percentage difference calculator",
    "percentage of number calculator",
    "reverse percentage calculator",
    "percentage increase decrease calculator",
    "online percentage tool",
    "free percentage calculator online",
    "percentage calculation tool",
    "percentage math calculator",
    "percentage converter",
    "percentage finder",
    "percentage solver",
    "percentage computation tool",
    "percentage calculation formula",
    "how to calculate percentage",
    "percentage calculation examples",
    "percentage calculator for business",
    "percentage calculator for finance",
    "percentage calculator for students",
    "percentage calculator for retail",
    "percentage calculator for real estate",
    "percentage calculator for investment",
    "percentage calculator for loans",
    "percentage calculator for taxes",
    "percentage calculator for tips",
    "percentage calculator for discounts",
    "percentage calculator for markups",
    "percentage calculator for compound interest",
    "percentage calculator for profit margins",
    "percentage calculator for sales tax",
    "percentage calculator for VAT",
    "percentage calculator for commission",
    "percentage calculator for interest rates",
    "percentage calculator for returns",
    "percentage calculator for growth",
    "percentage calculator for inflation",
    "percentage calculator for depreciation",
    "percentage calculator for appreciation",
    "percentage calculator for ROI",
    "percentage calculator for APR",
    "percentage calculator for APY"
  ].join(", "),
  authors: [{ name: "PercentageCalculator" }],
  creator: "PercentageCalculator",
  publisher: "PercentageCalculator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.advanced-percentage-calculator.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free Percentage Calculator – Fast & Simple Online Tool",
    description:
      "Calculate percentages instantly with our free online calculator. What is X% of Y? Find percentage increase, decrease, markup, discount, and compound interest. No registration required, 100% free and private.",
    url: "https://www.advanced-percentage-calculator.com",
    siteName: "Advanced Percentage Calculator",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Percentage Calculator - Calculate percentages online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Percentage Calculator – Fast & Simple Online Tool",
    description:
      "Calculate percentages instantly with our free online calculator. What is X% of Y? Find percentage increase, decrease, markup, discount, and compound interest.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MXGZMN7X8Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MXGZMN7X8Z');
          `}
        </Script>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Advanced Percentage Calculator",
              "description": "Calculate percentages instantly with our free online calculator. What is X% of Y? Find percentage increase, decrease, markup, discount, and compound interest.",
              "url": "https://www.advanced-percentage-calculator.com",
              "applicationCategory": "CalculatorApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Percentage calculations",
                "Markup and discount calculations", 
                "Compound interest calculator",
                "Real-time validation",
                "Calculation history",
                "Export functionality"
              ],
              "screenshot": "https://www.advanced-percentage-calculator.com/screenshot.png",
              "softwareVersion": "1.0.0",
              "author": {
                "@type": "Organization",
                "name": "Advanced Percentage Calculator"
              },
              "publisher": {
                "@type": "Organization", 
                "name": "Advanced Percentage Calculator"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
