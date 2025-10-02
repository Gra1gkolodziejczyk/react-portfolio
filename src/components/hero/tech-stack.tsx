import Logo from "@/components/hero/logo.tsx";

type Props = {
  names: string[];
  size?: number;
  theme?: "light" | "dark" | "auto";
  className?: string;
  gapClassName?: string;
};

export default function TechStack({names, size = 32, theme = "auto", className = "", gapClassName = "gap-2",}: Props) {
  return (
    <div className={`flex flex-wrap items-center ${gapClassName} ${className}`}>
      {names.map((n) => (
        <Logo key={n} name={n} size={size} theme={theme} />
      ))}
    </div>
  );
}
