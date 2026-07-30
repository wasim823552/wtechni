"use client";

import { useState } from "react";
import {
  Search,
  TrendingUp,
  Shield,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToolCard } from "@/components/ToolCard";
import { BlogCard } from "@/components/BlogCard";
import { CategoryGrid } from "@/components/CategoryGrid";
import { tools, blogPosts } from "@/data/tools";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const featuredTools = tools.filter((t) => t.isFeatured);
  const latestPosts = blogPosts.slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-background to-sky-50/40 dark:from-emerald-950/30 dark:via-background dark:to-sky-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.12),transparent)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-semibold mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                Trusted by 50,000+ users finding the right AI tools
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Find the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  Best AI Tools
                </span>{" "}
                for Your Workflow
              </h1>
              <p className="mt-5 sm:mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Compare 500+ AI tools with honest reviews, hands-on testing, and real user feedback. No fluff, just actionable insights.
              </p>
              <div className="mt-8 sm:mt-10 max-w-xl mx-auto">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-emerald-600 transition-colors" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder='Search AI tools... (e.g., "AI writing", "video generator")'
                    className="w-full pl-12 pr-32 py-4 text-base bg-background border-2 border-border/60 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 shadow-lg shadow-black/5 placeholder:text-muted-foreground/50 transition-all"
                  />
                  <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl px-5">
                    Search
                  </Button>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                  <span>Popular:</span>
                  {["ChatGPT", "Midjourney", "Jasper", "Copilot", "Notion AI"].map((term) => (
                    <button key={term} onClick={() => setSearchQuery(term)} className="px-2.5 py-1 bg-muted/60 hover:bg-muted rounded-full transition-colors hover:text-foreground">
                      {term}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-foreground">500+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">AI Tools</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-foreground">200+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-foreground">50K+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">Users</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="py-16 sm:py-20 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Browse by Category</h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                Explore AI tools organized by use case. From writing assistants to video generators, find exactly what you need.
              </p>
            </div>
            <CategoryGrid />
          </div>
        </section>

        {/* FEATURED TOOLS */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-2">
                  <TrendingUp className="h-4 w-4" />
                  Top Rated
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Featured AI Tools</h2>
                <p className="text-muted-foreground mt-2 max-w-lg">
                  Hand-picked tools that our team and community rate highest. Every tool is tested thoroughly before featuring.
                </p>
              </div>
              <Button variant="outline" className="shrink-0 group" asChild>
                <a href="/tools">
                  View All Tools
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} variant="featured" />
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
              {tools.filter((t) => !t.isFeatured).slice(0, 4).map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </div>
        </section>

        {/* WHY TRUST US */}
        <section className="py-16 sm:py-20 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Why Trust WTechni?</h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                We don't just list tools — we test them thoroughly and share honest, data-driven reviews.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Honest Reviews", description: "No paid placements. Every review is based on hands-on testing with real use cases and measurable results." },
                { icon: BarChart3, title: "Data-Driven", description: "We compare tools across 15+ criteria including pricing, features, performance, support, and user feedback." },
                { icon: Users, title: "Community Powered", description: "Join 50,000+ users who share real experiences. Our ratings combine expert analysis with community feedback." },
                { icon: CheckCircle2, title: "Updated Weekly", description: "AI tools evolve fast. We re-test and update our reviews every week so you always get current information." },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/40">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LATEST BLOG POSTS */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-2">
                  <Sparkles className="h-4 w-4" />
                  Latest
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">AI Tool Reviews & Guides</h2>
                <p className="text-muted-foreground mt-2 max-w-lg">
                  In-depth comparisons, hands-on reviews, and practical tutorials to help you master AI tools.
                </p>
              </div>
              <Button variant="outline" className="shrink-0 group" asChild>
                <a href="/blog">
                  All Articles
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {latestPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-600 to-teal-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_20%,rgba(255,255,255,0.08),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_20%_80%,rgba(255,255,255,0.05),transparent)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Never Miss an AI Tool Update</h2>
              <p className="mt-3 text-emerald-100 text-lg">
                Get weekly curated reviews, comparison insights, and exclusive deals delivered straight to your inbox. Join 12,000+ subscribers.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3.5 text-base bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <Button className="bg-white text-emerald-700 hover:bg-white/90 font-bold rounded-xl px-6 shrink-0">
                  Subscribe Free
                </Button>
              </form>
              <p className="text-emerald-200/60 text-xs mt-3">No spam. Unsubscribe anytime. We respect your privacy.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
