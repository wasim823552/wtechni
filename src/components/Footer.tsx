import { Zap, Github, Twitter, Mail, Rss } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function Footer() {
  const toolCategories = [
    { label: "AI Writing Tools", href: "/tools/ai-writing" },
    { label: "AI Image Generators", href: "/tools/ai-image" },
    { label: "AI Video Makers", href: "/tools/ai-video" },
    { label: "AI Coding Assistants", href: "/tools/ai-code" },
    { label: "AI Chatbots", href: "/tools/ai-chatbots" },
    { label: "AI SEO Tools", href: "/tools/ai-seo" },
  ];

  const resourceLinks = [
    { label: "Tool Comparisons", href: "/compare" },
    { label: "How-To Guides", href: "/blog?category=Tutorials" },
    { label: "Best of Lists", href: "/blog?category=Listicles" },
    { label: "Expert Reviews", href: "/blog?category=Reviews" },
  ];

  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-600 text-white font-black text-sm">
                W
              </div>
              <span className="text-lg font-extrabold tracking-tight text-foreground">
                WTechni
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Discover, compare, and choose the best AI tools for your workflow. Honest reviews, real testing, no BS.
            </p>
            <div className="flex items-center gap-2.5 mt-5">
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors">
                <Rss className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Tool Categories */}
          <div>
            <h3 className="font-semibold text-foreground text-sm mb-4">Tool Categories</h3>
            <ul className="space-y-2.5">
              {toolCategories.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground text-sm mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground text-sm mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Get weekly AI tool reviews and comparisons delivered to your inbox.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 text-sm bg-background border border-border/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50 placeholder:text-muted-foreground/50"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <Zap className="h-3.5 w-3.5" />
                Subscribe Free
              </button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} WTechni. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Affiliate Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
