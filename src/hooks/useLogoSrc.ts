'use client';
import * as React from 'react';
import type { Theme } from '@/hooks/useResolvedTheme';
import { getIconBase, isThemedBase, deriveVariant } from '@/lib/logo-utils';

export function useLogoSrc(opts: {
  name?: string;
  iconSrc?: string;
  iconSrcLight?: string;
  iconSrcDark?: string;
  theme: Theme;
  themed?: boolean;
}) {
  const { name, iconSrc, iconSrcLight, iconSrcDark, theme, themed } = opts;

  const base = React.useMemo(() => getIconBase(iconSrc, name), [iconSrc, name]);
  const themedFlag = React.useMemo(
    () => (base ? isThemedBase(base, themed) : !!themed),
    [base, themed]
  );

  const [preferBase, setPreferBase] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  const src = React.useMemo(() => {
    setFailed(false);

    if (themedFlag && base) {
      return `/${base}_${theme}.svg`;
    }

    if (iconSrcLight || iconSrcDark) {
      const light = iconSrcLight ?? deriveVariant(iconSrc ?? '', 'light') ?? iconSrc ?? '';
      const dark  = iconSrcDark  ?? deriveVariant(iconSrc ?? '', 'dark')  ?? '';
      if (preferBase) {
        return (theme === 'dark' ? (dark || light) : light).replace(/_(light|dark)(\.[a-z0-9]+)$/i, '$2');
      }
      return theme === 'dark' ? (dark || light) : light;
    }

    if (iconSrc) {
      return preferBase
        ? iconSrc.replace(/_(light|dark)(\.[a-z0-9]+)$/i, '$2')
        : (deriveVariant(iconSrc, theme) ?? iconSrc);
    }

    if (base) return `/${base}.svg`;

    return '';
  }, [themedFlag, base, theme, iconSrc, iconSrcLight, iconSrcDark, preferBase]);

  const onError = React.useCallback(() => {
    if (!preferBase) {
      setPreferBase(true);
      return;
    }
    setFailed(true);
  }, [preferBase]);

  return { src, onError, failed };
}
