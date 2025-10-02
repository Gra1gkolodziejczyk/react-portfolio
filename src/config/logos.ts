export const LOGO_ALIASES: Record<string, string> = {
  "aws": "amazon_web_services",
  "github": "gitHub",
  "vercel": "vercel",
  "drizzle": "drizzle_orm",
  "motion": "framer_motion",
  "prisma": "prisma",
};

export const THEMED_LOGOS = new Set<string>([
  "gitHub",
  "amazon_web_services",
  "prisma",
  "vercel",
  "drizzle",
  "motion",
]);

export function normalizeLogoName(input: string): string {
  const base = input.trim().toLowerCase();
  const aliased = LOGO_ALIASES[base] ?? base;
  return aliased
    .replace(/\s+/g, "_")
    .replace(/[()]/g, "")
    .replace(/[^a-zA-Z0-9_]/g, "");
}
