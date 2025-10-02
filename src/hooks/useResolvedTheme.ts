'use client';
import * as React from 'react';

export type Theme = 'light' | 'dark';

export function useResolvedTheme(initial: 'auto' | Theme = 'auto'): Theme {
  const [theme, setTheme] = React.useState<Theme>('light');

  React.useEffect(() => {
    if (initial !== 'auto') {
      setTheme(initial);
      return;
    }
    const mql = window.matchMedia?.('(prefers-color-scheme: dark)');
    const update = () => {
      const prefersDark =
        document.documentElement.classList.contains('dark') || !!mql?.matches;
      setTheme(prefersDark ? 'dark' : 'light');
    };

    update();
    mql?.addEventListener?.('change', update);
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      mql?.removeEventListener?.('change', update);
      obs.disconnect();
    };
  }, [initial]);

  return theme;
}
