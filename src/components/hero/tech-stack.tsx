import SimpleLogo from "@/components/hero/simple-logo.tsx";

type Props = {
  names: string[];
  size?: number;
  theme?: "light" | "dark" | "auto";
  variant?: "route" | "wordmark";
  className?: string;
  gapClassName?: string;
};

export default function TechStack({names, size = 32, theme = "auto", variant = "route", className = "", gapClassName = "gap-2",}: Props) {
  return (
    <div className={`flex flex-wrap items-center ${gapClassName} ${className}`}>
      {names.map((n) => (
        <SimpleLogo key={n} name={n} size={size} theme={theme} variant={variant} />
      ))}
    </div>
  );
}
