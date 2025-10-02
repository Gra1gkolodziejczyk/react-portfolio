import StarRating from "@/components/skills/star-rating.tsx";
import * as React from "react";

export type SkillCardProps = {
  name: string;
  iconSrc?: string; // optionnel: restera utilisé pour les icônes non thématiques
  rating: number; // 0..5
  years?: number;
  iconSrcLight?: string;
  iconSrcDark?: string;
};

// Logos dispos en light/dark dans /public (sans suffixe, sans extension)
const THEMED_LOGOS = new Set<string>([
  "github",
  "amazon_web_services",
  "vercel",
  "prisma",
  "drizzle",
]);

type Theme = "light" | "dark";

function useResolvedTheme(): Theme {
  const [resolvedTheme, setResolvedTheme] = React.useState<Theme>("light");

  React.useEffect(() => {
    const mql = window.matchMedia?.("(prefers-color-scheme: dark)");
    const updateTheme = () => {
      const prefersDark =
        document.documentElement.classList.contains("dark") || !!mql?.matches;
      setResolvedTheme(prefersDark ? "dark" : "light");
    };

    updateTheme();
    mql?.addEventListener?.("change", updateTheme);

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      mql?.removeEventListener?.("change", updateTheme);
      observer.disconnect();
    };
  }, []);

  return resolvedTheme;
}

// Extrait la "base" depuis iconSrc (ou à défaut name) en retirant _light/_dark et l'extension
function getIconBase(iconSrc?: string, name?: string): string | null {
  if (iconSrc) {
    // Prend la dernière partie du chemin
    const file = iconSrc.split("/").pop() ?? "";
    // retire extension
    const noExt = file.replace(/\.[a-z0-9]+$/i, "");
    // retire _light / _dark
    const base = noExt.replace(/_(light|dark)$/i, "");
    return base.toLowerCase();
  }
  if (name) {
    // fallback minimal: simplifie juste les espaces en underscores
    return name.trim().toLowerCase().replace(/\s+/g, "_");
  }
  return null;
}

// Compat: deriveVariant reste pour les icônes non gérées par THEMED_LOGOS
function deriveVariant(src: string, variant: "light" | "dark"): string | null {
  if (!src) return null;

  if (variant === "dark" && /_dark(\.[a-z0-9]+)$/i.test(src)) return src;
  if (variant === "light" && /_light(\.[a-z0-9]+)$/i.test(src)) return src;

  if (variant === "dark" && /_light(\.[a-z0-9]+)$/i.test(src)) {
    return src.replace(/_light(\.[a-z0-9]+)$/i, "_dark$1");
  }
  if (variant === "light" && /_dark(\.[a-z0-9]+)$/i.test(src)) {
    const noSuffix = src.replace(/_dark(\.[a-z0-9]+)$/i, "$1");
    return noSuffix || src.replace(/_dark(\.[a-z0-9]+)$/i, "_light$1");
  }

  if (variant === "dark") {
    return src.replace(/(\.[a-z0-9]+)$/i, "_dark$1");
  }

  if (variant === "light") {
    return src;
  }

  return null;
}

export function SkillCard({ name, iconSrc, rating, years, iconSrcLight, iconSrcDark }: SkillCardProps) {
  const theme = useResolvedTheme();
  const [broken, setBroken] = React.useState(false);

  const base = React.useMemo(() => getIconBase(iconSrc, name), [iconSrc, name]);
  const isThemed = !!base && THEMED_LOGOS.has(base);

  const src = React.useMemo(() => {
    setBroken(false);

    if (isThemed && base) {
      // Force l’icône themed
      return `/${base}_${theme}.svg`;
    }

    // Ancien comportement + compat
    if (iconSrcLight || iconSrcDark) {
      const finalLight = iconSrcLight ?? deriveVariant(iconSrc ?? "", "light") ?? iconSrc ?? "";
      const finalDark = iconSrcDark ?? deriveVariant(iconSrc ?? "", "dark") ?? "";
      return theme === "dark" ? (finalDark || finalLight) : finalLight;
    }

    if (iconSrc) {
      const guess = theme === "dark" ? deriveVariant(iconSrc, "dark") : deriveVariant(iconSrc, "light");
      return guess ?? iconSrc;
    }

    // Dernier fallback: essaie /{base}.svg si on l’a
    return base ? `/${base}.svg` : "";
  }, [isThemed, base, theme, iconSrc, iconSrcLight, iconSrcDark]);

  const handleError = React.useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    if (broken) return;
    setBroken(true);

    const img = e.currentTarget as HTMLImageElement;

    // Fallback intelligent:
    // - Pour themed: /{base}.svg
    // - Sinon: si on a un iconSrc, on bascule sur la version sans suffixe
    if (isThemed && base) {
      img.src = `/${base}.svg`;
      return;
    }
    if (iconSrc) {
      img.src = iconSrc.replace(/_(light|dark)(\.[a-z0-9]+)$/i, "$2");
      return;
    }
    if (base) {
      img.src = `/${base}.svg`;
    }
  }, [broken, isThemed, base, iconSrc]);

  return (
    <div
      className="relative overflow-hidden rounded-2xl p-4 flex flex-col gap-2"
      tabIndex={0}
      role="button"
      aria-label={`${name}, niveau ${rating} sur 5${years ? `, ${years} ans d'expérience` : ''}`}
    >
      {/* Ligne 1 : icône + titre */}
      <div className="flex items-center gap-3">
        <img
          src={src}
          alt=""
          className="h-7 w-7 object-contain"
          loading="lazy"
          decoding="async"
          onError={handleError}
        />
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
