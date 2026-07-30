"use client";

import { useState } from "react";
import { ArrowRight, Check, X, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StarRating } from "@/components/StarRating";
import { tools } from "@/data/tools";

const comparisons = [
  {
    title: "ChatGPT vs Claude vs Gemini",
    description: "The three biggest AI chatbots compared head-to-head on reasoning, coding, creativity, and cost.",
    slug: "chatgpt-vs-claude-vs-gemini",
    category: "AI Chatbots",
    tools: ["chatgpt", "claude"],
    readTime: "15 min",
  },
  {
    title: "Midjourney vs DALL-E 4 vs Stable Diffusion",
    description: "Which AI image generator creates the best artwork? We tested 100 prompts on each platform.",
    slug: "midjourney-vs-dalle-vs-sd",
    category: "AI Image",
    tools: ["midjourney"],
    readTime: "18 min",
  },
  {
    title: "Jasper AI vs Copy.ai vs Writesonic",
    description: "The best AI writing tools for marketers and content creators compared on features, quality, and pricing.",
    slug: "jasper-vs-copyai-vs-writesonic",
    category: "AI Writing",
    tools: ["jasper-ai", "copy-ai"],
    readTime: "14 min",
  },
  {
    title: "GitHub Copilot vs Cursor vs Codeium",
    description: "Find the best AI coding assistant for your workflow. We compared code quality, speed, and IDE support.",
    slug: "copilot-vs-cursor-vs-codeium",
    category: "AI Code",
    tools: ["github-copilot"],
    readTime: "16 min",
  },
  {
    title: "Surfer SEO vs Semrush vs MarketMuse",
    description: "Which AI SEO tool gives you the best ROI? Detailed comparison of features, pricing, and results.",
    slug: "surfer-vs-semrush-vs-marketmuse",
    category: "AI SEO",
    tools: ["surfer-seo", "semrush"],
    readTime: "13 min",
  },
];

export default function ComparePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border/60 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Tool Comparisons
            </h1>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
              Side-by-side comparisons of the most popular AI tools. Data-driven analysis to help you choose the right tool.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisons.map((comp) => (
              <a key={comp.slug} href={`/blog/${comp.slug}`} className="group">
                <div className="h-full p-6 rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5">
                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3 uppercase tracking-wider">
                    {comp.category}
                  </div>
                  <h2 className="text-lg font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug mb-2">
                    {comp.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {comp.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {comp.tools.map((slug) => {
                        const tool = tools.find((t) => t.slug === slug);
                        if (!tool) return null;
                        const colors: Record<string, string> = {
                          C: "bg-emerald-600", J: "bg-orange-500", M: "bg-violet-600",
                          G: "bg-sky-600", S: "bg-rose-600",
                        };
                        return (
                          <div key={slug} className={`flex items-center justify-center w-8 h-8 rounded-full text-white text-xs font-bold border-2 border-card ${colors[tool.logo] || "bg-stone-600"}`}>
                            {tool.logo}
                          </div>
                        );
                      })}
                    </div>
                    <span className="text-xs text-muted-foreground">{comp.readTime} read</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Featured Comparison Table */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Quick Comparison: Top AI Chatbots
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border/60">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                    <th className="p-4 font-semibold text-foreground text-center">ChatGPT</th>
                    <th className="p-4 font-semibold text-foreground text-center">Claude</th>
                    <th className="p-4 font-semibold text-foreground text-center">Gemini</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {[
                    ["Starting Price", "$20/mo", "Free", "Free"],
                    ["Context Window", "128K tokens", "200K tokens", "1M tokens"],
                    ["Image Generation", ["yes"], ["no"], ["yes"]],
                    ["Code Execution", ["yes"], ["no"], ["yes"]],
                    ["API Access", ["yes"], ["yes"], ["yes"]],
                    ["Custom GPTs", ["yes"], ["no"], ["no"]],
                    ["Projects", ["no"], ["yes"], ["no"]],
                  ].map(([feature, chatgpt, claude, gemini], i) => (
                    <tr key={feature as string} className="hover:bg-muted/20">
                      <td className="p-4 font-medium text-foreground">{feature as string}</td>
                      {([chatgpt, claude, gemini] as string[]).map((val, j) => (
                        <td key={j} className="p-4 text-center">
                          {val === "yes" ? (
                            <Check className="h-4 w-4 text-emerald-600 mx-auto" />
                          ) : val === "no" ? (
                            <X className="h-4 w-4 text-red-400 mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Last updated: July 2026. Full comparison review coming soon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
