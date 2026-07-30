import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
 size?: "sm" | "md";
  showCount?: boolean;
 }

export function StarRating({ rating, reviewCount, size = "md", showCount = true }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  const iconSize = size === "sm" ? 14 : 18;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            size={iconSize}
            className="fill-amber-400 text-amber-400"
          />
        ))}
        {hasHalf && (
          <div className="relative">
            <Star size={iconSize} className="text-muted-foreground/30" />
            <div className="absolute inset-0 overflow-hidden w-[50%]">
              <Star size={iconSize} className="fill-amber-400 text-amber-400" />
            </div>
          </div>
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            size={iconSize}
            className="text-muted-foreground/30"
          />
        ))}
      </div>
      <span className={`font-semibold text-foreground ${size === "sm" ? "text-xs" : "text-sm"}`}>
        {rating.toFixed(1)}
      </span>
      {showCount && reviewCount && (
        <span className={`text-muted-foreground ${size === "sm" ? "text-xs" : "text-sm"}`}>
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  );
}
