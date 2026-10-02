import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "WTechni — Discover the Best AI Tools & SaaS Reviews",
    template: "%s | WTechni",
  },
  description:
    "Compare 500+ AI tools with honest reviews, detailed comparisons, and hands-on testing. Find the perfect AI writing, image, video, coding, and productivity tools for your workflow.",
  keywords: [
    "AI tools",
    "AI tool reviews",
    "SaaS reviews",
    "AI writing tools",
    "AI image generators",
    "ChatGPT alternatives",
    "best AI tools 2026",
    "AI productivity tools",
    "AI SEO tools",
    "AI video tools",
  ],
  authors: [{ name: "WTechni Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "WTechni — Discover the Best AI Tools & SaaS Reviews",
    description:
      "Compare 500+ AI tools with honest reviews, detailed comparisons, and hands-on testing.",
    url: "https://wtechni.com",
    siteName: "WTechni",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WTechni — Discover the Best AI Tools & SaaS Reviews",
    description:
      "Compare 500+ AI tools with honest reviews, detailed comparisons, and hands-on testing.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "WTechni",
              "url": "https://wtechni.com",
              "description": "Discover, compare, and choose the best AI tools for your workflow. Honest reviews, real testing, no BS.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://wtechni.com/tools?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        {/* Umami Analytics */}
        <script
          defer
          src="https://analytics.wtechni.com/script.js"
          data-website-id="c7c6fae8-cc42-40f5-a7e1-9b1e51efe49f"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
