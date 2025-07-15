import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    "Calculate percentages instantly with our free online calculator. What is X% of Y? Find percentage increase, decrease, markup, discount, and compound interest. No registration required, 100% free and private.",
  keywords: [
    "percentage calculator",
    "online calculator",
    "free calculator",
    "percentage increase",
    "percentage decrease",
    "markup calculator",
    "discount calculator",
    "compound interest",
    "math tool",
    "percentage formula",
    "what is X percent of Y",
    "percentage change",
    "financial calculator",
    "business calculator"
  ].join(", "),
  authors: [{ name: "PercentageCalculator" }],
  creator: "PercentageCalculator",
  publisher: "PercentageCalculator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://percentagecalculator.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free Percentage Calculator – Fast & Simple Online Tool",
    description:
      "Calculate percentages instantly with our free online calculator. What is X% of Y? Find percentage increase, decrease, markup, discount, and compound interest. No registration required, 100% free and private.",
    url: "https://percentagecalculator.com",
    siteName: "Percentage Calculator",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Free Percentage Calculator",
              "description": "Calculate percentages instantly with our free online calculator. What is X% of Y? Find percentage increase, decrease, markup, discount, and compound interest.",
              "url": "https://percentagecalculator.com",
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
              "screenshot": "https://percentagecalculator.com/screenshot.png",
              "softwareVersion": "1.0.0",
              "author": {
                "@type": "Organization",
                "name": "PercentageCalculator"
              },
              "publisher": {
                "@type": "Organization", 
                "name": "PercentageCalculator"
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
