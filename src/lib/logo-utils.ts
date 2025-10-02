import { THEMED_LOGOS, normalizeLogoName } from '@/config/logos';
import type { Theme } from '@/hooks/useResolvedTheme';

export function getIconBase(iconSrc?: string, name?: string): string | null {
  if (iconSrc) {
    const file = iconSrc.split('/').pop() ?? '';
    const noExt = file.replace(/\.[a-z0-9]+$/i, '');
    return noExt.replace(/_(light|dark)$/i, '').toLowerCase();
  }
  if (name) return normalizeLogoName(name);
  return null;
}

export function isThemedBase(base: string, themedOverride?: boolean): boolean {
  return themedOverride ?? THEMED_LOGOS.has(base);
}

export function deriveVariant(src: string, variant: Theme): string | null {
  if (!src) return null;
  const hasLight = /_light(\.[a-z0-9]+)$/i.test(src);
  const hasDark = /_dark(\.[a-z0-9]+)$/i.test(src);

  if (variant === 'dark') {
    if (hasDark) return src;
    if (hasLight) return src.replace(/_light(\.[a-z0-9]+)$/i, '_dark$1');
    return src.replace(/(\.[a-z0-9]+)$/i, '_dark$1');
  } else {
    if (hasLight) return src;
    if (hasDark) return src.replace(/_dark(\.[a-z0-9]+)$/i, '$1');
    return src;
  }
}

export function resolveLogoSrc(opts: {
  name?: string;
  iconSrc?: string;
  iconSrcLight?: string;
  iconSrcDark?: string;
  theme: Theme;
  themed?: boolean;
}): { src: string; base: string | null; themedFlag: boolean } {
  const base = getIconBase(opts.iconSrc, opts.name);
  const themedFlag = base ? isThemedBase(base, opts.themed) : !!opts.themed;

  if (themedFlag && base) {
    return { src: `/${base}_${opts.theme}.svg`, base, themedFlag };
  }

  if (opts.iconSrcLight || opts.iconSrcDark) {
    const light = opts.iconSrcLight ?? deriveVariant(opts.iconSrc ?? '', 'light') ?? opts.iconSrc ?? '';
    const dark  = opts.iconSrcDark  ?? deriveVariant(opts.iconSrc ?? '', 'dark')  ?? '';
    return { src: opts.theme === 'dark' ? (dark || light) : light, base, themedFlag };
  }

  if (opts.iconSrc) {
    const guess = deriveVariant(opts.iconSrc, opts.theme) ?? opts.iconSrc;
    return { src: guess, base, themedFlag };
  }

  // cas 4: fallback /{base}.svg
  if (base) return { src: `/${base}.svg`, base, themedFlag };

  return { src: '', base: null, themedFlag };
}

export function makeOnImageError(params: {
  themedFlag: boolean;
  base: string | null;
  iconSrc?: string;
}) {
  let broken = false;
  return (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (broken) return;
    broken = true;

    const img = e.currentTarget as HTMLImageElement;

    if (params.themedFlag && params.base) {
      img.src = `/${params.base}.svg`;
      return;
    }
    if (params.iconSrc) {
      img.src = params.iconSrc.replace(/_(light|dark)(\.[a-z0-9]+)$/i, '$2');
      return;
    }
    if (params.base) {
      img.src = `/${params.base}.svg`;
    }
  };
}
