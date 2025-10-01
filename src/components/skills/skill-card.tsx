import StarRating from "@/components/skills/star-rating.tsx";

export type SkillCardProps = {
  name: string;
  iconSrc: string; // from /public or remote
  rating: number; // 0..5
  years?: number;
};

export function SkillCard({ name, iconSrc, rating, years }: SkillCardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-4 flex flex-col gap-2"
      tabIndex={0}
      role="button"
      aria-label={`${name}, niveau ${rating} sur 5${years ? `, ${years} ans d'expérience` : ''}`}
    >
      {/* Ligne 1 : icône + titre */}
      <div className="flex items-center gap-3">
        <img src={iconSrc} alt="" className="h-7 w-7 object-contain" loading="lazy" />
        <span className="font-medium text-black dark:text-white truncate">{name}</span>
      </div>

      {/* Ligne 2 : étoiles + années */}
      <div className="flex items-center gap-2">
        <StarRating value={rating} />
        {typeof years === "number" && (
          <span className="text-xs text-black/70 dark:text-white/70 whitespace-nowrap">
            {years} an{years > 1 ? "s" : ""}
          </span>
        )}
      </div>
    </div>
  );
}
