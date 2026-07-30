"use client";

import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/data/tools";

interface BlogCardProps {
  post: BlogPost;
}

const categoryColors: Record<string, string> = {
  Comparisons: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  Listicles: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
  Reviews: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  Tutorials: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
};

export function BlogCard({ post }: BlogCardProps) {
  const catColor = categoryColors[post.category] || categoryColors.Tutorials;
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card className="group overflow-hidden border-border/60 bg-card transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5">
      <CardContent className="p-5">
        {/* Category + Meta */}
        <div className="flex items-center gap-3 mb-3">
          <Badge className={`${catColor} border-0 text-xs font-medium px-2.5 py-0.5`}>
            {post.category}
          </Badge>
          <span className="text-xs text-muted-foreground">{formattedDate}</span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-foreground leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 relative">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Read More */}
        <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 group-hover:gap-2.5 transition-all">
          Read Review
          <ArrowRight className="h-4 w-4" />
        </div>
      </CardContent>
    </Card>
  );
}
