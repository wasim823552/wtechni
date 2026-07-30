"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/tools";

const allCategories = ["All", ...new Set(blogPosts.map((p) => p.category))];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border/60 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              AI Tool Reviews & Guides
            </h1>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
              In-depth comparisons, hands-on reviews, and practical tutorials to help
              you master AI tools and grow your business.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeCategory === cat
                    ? "bg-emerald-600 text-white"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-5">
            Showing{" "}
            <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
            article{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && (
              <span>
                {" "}in{" "}
                <span className="font-medium text-emerald-600 dark:text-emerald-400">
                  {activeCategory}
                </span>
              </span>
            )}
          </p>

          {/* Blog Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-lg font-semibold text-foreground">
                No articles yet
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Check back soon for new content!
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
