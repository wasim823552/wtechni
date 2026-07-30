import { Badge } from "@/components/ui/badge";
import type { AITool } from "@/data/tools";

interface PricingBadgeProps {
  model: AITool["pricingModel"];
}

const config = {
  Free: { label: "Free", className: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/40" },
  Freemium: { label: "Freemium", className: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-900/40" },
  Paid: { label: "Paid", className: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900/40" },
  "Free Trial": { label: "Free Trial", className: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-900/40" },
};

export function PricingBadge({ model }: PricingBadgeProps) {
  const c = config[model];
  return <Badge className={`${c.className} border-0 font-medium`}>{c.label}</Badge>;
}
