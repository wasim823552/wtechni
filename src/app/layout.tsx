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

const TRACKER_ENHANCER = `(function(){if(window.__wtEnhance)return;window.__wtEnhance=1;var t=setInterval(function(){if(window.umami){clearInterval(t);init()}},80);setTimeout(function(){clearInterval(t)},9000);function init(){var site='wtechni.com';function send(n,d){try{window.umami.track(n,d?{data:d}:void 0)}catch(e){}}function txt(el){return (el.textContent||'').trim().split(' ').filter(Boolean).join(' ').slice(0,60)}document.addEventListener('click',function(e){var el=e.target&&e.target.closest?e.target.closest('a,button'):null;if(!el||el.closest('[data-umami-event]'))return;var h=el.getAttribute('href')||'';if(h.indexOf('mailto:')===0)return send('contact:email',{value:h.slice(7)});if(h.indexOf('tel:')===0)return send('contact:phone',{value:h.slice(4)});if(h.indexOf('http:')===0||h.indexOf('https:')===0){var ext=false,url=h;try{var u=new URL(h);if(u.hostname!==site&&u.hostname!=='www.'+site&&u.hostname!=='analytics.'+site){ext=true;url=u.hostname+u.pathname}}catch(x){}if(ext)return send('outbound',{url:String(url).slice(0,120),text:txt(el)});}var path=h.split('?')[0].split('#')[0].toLowerCase(),exts=['.pdf','.zip','.doc','.docx','.xls','.xlsx','.csv','.ppt','.pptx','.epub','.apk'];for(var j=0;j<exts.length;j++){if(path.length>exts[j].length&&path.slice(-exts[j].length)===exts[j])return send('download',{file:path.slice(0,120)})}},true);document.addEventListener('submit',function(e){var f=e.target;if(f&&f.tagName==='FORM')send('form:submit',{form:f.id||'unnamed',page:location.pathname})},true);var marks=[25,50,75,100],done={};window.addEventListener('scroll',function(){var d=document.documentElement,max=d.scrollHeight-window.innerHeight;if(max<=0)return;var p=(window.scrollY||d.scrollTop||0)/max*100;for(var i=0;i<marks.length;i++){var m=marks[i];if(p>=m&&!done[m]){done[m]=1;send('scroll:depth',{depth:m+'%',page:location.pathname})}}},{passive:true});}})();`;

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
        {/* Umami Pro Event Tracker: outbound links, downloads, forms, scroll depth, contact clicks */}
        <script dangerouslySetInnerHTML={{ __html: TRACKER_ENHANCER }} />
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
