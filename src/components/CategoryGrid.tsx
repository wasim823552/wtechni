"use client";

import {
  PenTool,
  Image,
  Video,
  Code,
  MessageSquare,
  Search,
  Zap,
  Megaphone,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/tools";

const iconMap: Record<string, LucideIcon> = {
  PenTool,
  Image,
  Video,
  Code,
  MessageSquare,
  Search,
  Zap,
  Megaphone,
};

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {categories.map((cat) => {
        const Icon = iconMap[cat.icon] || Zap;
        return (
          <a key={cat.slug} href={`/tools/${cat.slug}`}>
            <Card className="group h-full border-border/60 bg-card transition-all duration-300 hover:border-emerald-500/40 hover:shadow-md hover:shadow-emerald-500/5 cursor-pointer">
              <CardContent className="p-4 flex flex-col items-center text-center gap-2.5">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {cat.count} tools
                  </p>
                </div>
              </CardContent>
            </Card>
          </a>
        );
      })}
    </div>
  );
}
