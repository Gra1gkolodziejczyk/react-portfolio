'use client'

import * as React from "react";

type Theme = "light" | "dark";
type Variant = "route" | "wordmark";

type Props = {
  name: string;
  size?: number;
  theme?: Theme | "auto";
  variant?: Variant;
  className?: string;
  title?: string;
  themed?: boolean;
};

const THEMED_LOGOS = new Set<string>([
  "amazon_web_services",
  "gitHub",
  "prisma",
  "vercel",
]);

function normalizeName(input: string): string {
  const aliases: Record<string, string> = {
    "github": "gitHub",
    "prisma": "prisma",
  };

  const base = input.trim().toLowerCase();
  const aliased = aliases[base] ?? base;

  return aliased
    .replace(/\s+/g, "_")
    .replace(/[()]/g, "")
    .replace(/[^a-zA-Z0-9_]/g, "");
}

export default function SimpleLogo({
  name,
  size = 32,
  theme = "auto",
  className = "",
  title,
  themed = undefined,
}: Props) {
  const [resolvedTheme, setResolvedTheme] = React.useState<Theme>("light");
  const [broken, setBroken] = React.useState(false);

  React.useEffect(() => {
    if (theme !== "auto") {
      setResolvedTheme(theme);
      return;
    }

    const mql = window.matchMedia?.("(prefers-color-scheme: dark)");
    const updateTheme = () => {
      const prefersDark =
        document.documentElement.classList.contains("dark") ||
        !!mql?.matches;
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
  }, [theme]);

  const src = React.useMemo(() => {
    setBroken(false);
    const base = normalizeName(name);

    // Utilise la prop si fournie, sinon le whitelist THEMED_LOGOS
    const isThemed = (themed ?? THEMED_LOGOS.has(base));

    if (isThemed) {
      return `/${base}_${resolvedTheme}.svg`;
    }
    return `/${base}.svg`;
  }, [name, themed, resolvedTheme]);

  const handleError = React.useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      if (broken) return; // éviter les boucles
      setBroken(true);
      const img = e.currentTarget;
      const base = normalizeName(name);

      const isThemed = (themed ?? THEMED_LOGOS.has(base));
      if (isThemed) {
        img.src = `/${base}.svg`;
        return;
      }
    },
    [broken, name, themed]
  );

  if (broken && !(themed ?? THEMED_LOGOS.has(normalizeName(name)))) {
    return (
      <span
        className={`inline-block rounded ${className}`}
        style={{ width: size, height: size, background: "rgba(255,255,255,.12)" }}
        aria-hidden
      />
    );
  }

  return (
    <img
      src={src}
      alt={title ?? `${name} logo`}
      width={size}
      height={size}
      className={className}
      loading="lazy"
      decoding="async"
      onError={handleError}
    />
  );
}
