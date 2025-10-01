import * as React from "react";
import { Button } from "@/components/ui/button.tsx";
import { Moon, SunMedium } from "lucide-react";

function ThemeToggle () {
  const [isDark, setIsDark] = React.useState<boolean>(() =>
    typeof window !== "undefined" ? document.documentElement.classList.contains("dark") : false
  )

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const root = document.documentElement
    if (isDark) root.classList.add("dark")
    else root.classList.remove("dark")
  }, [isDark])

  return (
    <Button variant="ghost" size="icon" aria-label="Basculer le thème" onClick={() => setIsDark((v) => !v)}>
      <SunMedium className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Basculer le thème</span>
    </Button>
  )
}

export default ThemeToggle;
