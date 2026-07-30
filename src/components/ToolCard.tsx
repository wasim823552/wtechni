"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/StarRating";
import { PricingBadge } from "@/components/PricingBadge";
import { Badge } from "@/components/ui/badge";
import type { AITool } from "@/data/tools";

interface ToolCardProps {
  tool: AITool;
  variant?: "default" | "featured";
}

const logoColors: Record<string, string> = {
  C: "bg-emerald-600",
  J: "bg-orange-500",
  M: "bg-violet-600",
  G: "bg-sky-600",
  N: "bg-stone-700 dark:bg-stone-200 dark:text-stone-900",
  S: "bg-rose-600",
  R: "bg-pink-600",
  D: "bg-teal-600",
};

export function ToolCard({ tool, variant = "default" }: ToolCardProps) {
  const isFeatured = variant === "featured";
  const logoColor = logoColors[tool.logo] || "bg-emerald-600";

  return (
    <Card
      className={`group relative overflow-hidden border-border/60 bg-card transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 ${
        isFeatured ? "" : ""
      }`}
    >
      {tool.isNew && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-emerald-500 text-white border-0 text-[10px] px-2 py-0.5 font-bold uppercase tracking-wider">
            New
          </Badge>
        </div>
      )}
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div
            className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl text-white font-bold text-lg ${logoColor}`}
          >
            {tool.logo}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {tool.name}
              </h3>
              <PricingBadge model={tool.pricingModel} />
            </div>
            <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
              {tool.tagline}
            </p>
          </div>
        </div>

        {/* Rating & Pricing */}
        <div className="flex items-center justify-between mt-4 gap-2">
          <StarRating rating={tool.rating} reviewCount={tool.reviewCount} size="sm" />
          <span className="text-sm font-semibold text-foreground whitespace-nowrap">
            {tool.pricing}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mt-3 line-clamp-2 leading-relaxed">
          {tool.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tool.features.slice(0, 3).map((feature) => (
            <Badge
              key={feature}
              variant="secondary"
              className="text-[11px] px-2 py-0 font-normal bg-muted/60 text-muted-foreground hover:bg-muted/80"
            >
              {feature}
            </Badge>
          ))}
          {tool.features.length > 3 && (
            <Badge
              variant="secondary"
              className="text-[11px] px-2 py-0 font-normal bg-muted/60 text-muted-foreground hover:bg-muted/80"
            >
              +{tool.features.length - 3} more
            </Badge>
          )}
        </div>

        {/* CTA */}
        <div className="flex gap-2 mt-4">
          <Button
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
            size="sm"
            asChild
          >
            <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer">
              Try {tool.name}
              <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
            </a>
          </Button>
          <Button variant="outline" size="sm" className="shrink-0" asChild>
            <Link href={`/tools/${tool.slug}`}>Review</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
