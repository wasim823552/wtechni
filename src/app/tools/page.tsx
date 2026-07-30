"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToolCard } from "@/components/ToolCard";
import { tools, categories } from "@/data/tools";
import type { Metadata } from "next";

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [pricingFilter, setPricingFilter] = useState<"All" | "Free" | "Freemium" | "Paid" | "Free Trial">("All");
  const [sortBy, setSortBy] = useState<"rating" | "reviews" | "name">("rating");

  const allCategories = ["All", ...categories.map((c) => c.name)];

  const filtered = useMemo(() => {
    let result = [...tools];
    if (activeCategory !== "All") result = result.filter((t) => t.category === activeCategory);
    if (pricingFilter !== "All") result = result.filter((t) => t.pricingModel === pricingFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.tagline.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          t.features.some((f) => f.toLowerCase().includes(q))
      );
    }
    if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);
    else if (sortBy === "reviews") result.sort((a, b) => b.reviewCount - a.reviewCount);
    else result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [search, activeCategory, pricingFilter, sortBy]);

  const hasFilters = activeCategory !== "All" || pricingFilter !== "All" || search.trim() !== "";
  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All");
    setPricingFilter("All");
  };

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border/60 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              AI Tools Directory
            </h1>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
              Browse {tools.length}+ AI tools across {categories.length} categories. Filter, compare, and find the perfect tool for your needs.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Search & Sort Bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tools by name, feature, or category..."
                className="w-full pl-11 pr-4 py-3 text-sm bg-background border border-border/60 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 placeholder:text-muted-foreground/50"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="px-3 py-3 text-sm bg-background border border-border/60 rounded-xl focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="rating">Top Rated</option>
                <option value="reviews">Most Reviewed</option>
                <option value="name">A-Z</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeCategory === cat
                    ? "bg-emerald-600 text-white"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Pricing Filter Row */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Pricing:</span>
            {(["All", "Free", "Freemium", "Paid", "Free Trial"] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPricingFilter(p)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  pricingFilter === p
                    ? "bg-emerald-600 text-white"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {p}
              </button>
            ))}
            {hasFilters && (
              <button onClick={clearFilters} className="ml-auto text-xs text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1">
                <X className="h-3 w-3" /> Clear all
              </button>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span> tool{filtered.length !== 1 ? "s" : ""}
              {activeCategory !== "All" && <span> in <span className="font-medium text-emerald-600 dark:text-emerald-400">{activeCategory}</span></span>}
            </p>
          </div>

          {/* Tools Grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-foreground">No tools found</h3>
              <p className="text-sm text-muted-foreground mt-1">Try adjusting your search or filters</p>
              <Button variant="outline" className="mt-4" onClick={clearFilters}>Clear all filters</Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
