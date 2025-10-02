import { useResolvedTheme, type Theme } from "@/hooks/useResolvedTheme";
import { useLogoSrc } from "@/hooks/useLogoSrc";

type Props = {
  name?: string;
  iconSrc?: string;
  iconSrcLight?: string;
  iconSrcDark?: string;
  size?: number;
  theme?: Theme | "auto";
  themed?: boolean;
  className?: string;
  title?: string;
};

export default function Logo({name, iconSrc, iconSrcLight, iconSrcDark, size = 32, theme, themed, className, title}: Props) {
  const resolved = useResolvedTheme(theme);
  const { src, onError, failed } = useLogoSrc({
    name,
    iconSrc,
    iconSrcLight,
    iconSrcDark,
    theme: resolved,
    themed,
  });

  if (failed || !src) {
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
      alt={title ?? `${name ?? "logo"}`}
      width={size}
      height={size}
      className={className}
      loading="lazy"
      decoding="async"
      onError={onError}
    />
  );
}
