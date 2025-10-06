import Logo from "@/components/hero/logo.tsx";
import * as React from "react";

type Props = {
  names: string[];
  size?: number;
  theme?: "light" | "dark" | "auto";
  className?: string;
  gapClassName?: string;
};

export default function TechStack({names, size = 32, theme = "auto", className = "", gapClassName = "gap-2"}: Props) {
  const [isPaused, setIsPaused] = React.useState(false);

  const duplicatedLogos = [...names, ...names];

  return (
    <>
      <div className={`hidden md:flex flex-wrap items-center ${gapClassName} ${className}`}>
        {names.map((n, index) => (
          <Logo key={`${n}-${index}`} name={n} size={size} theme={theme} />
        ))}
      </div>

      <div
        className={`md:hidden relative overflow-hidden w-full ${className}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        role="region"
        aria-label="Technologies utilisées"
        tabIndex={0}
      >
        <div
          className={`flex items-center ${gapClassName}`}
          style={{
            animation: isPaused ? 'none' : 'scroll 20s linear infinite',
          }}
        >
          {duplicatedLogos.map((n, index) => (
            <Logo key={`${n}-${index}`} name={n} size={size} theme={theme} />
          ))}
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </>
  );
}
