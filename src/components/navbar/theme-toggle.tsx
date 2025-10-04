import { Button } from "@/components/ui/button.tsx";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "@/hooks/theme-provider.tsx";

function ThemeToggle () {
  const { toggleTheme } = useTheme();

  return (
    <Button variant="ghost" size="icon" aria-label="Basculer le thème" onClick={toggleTheme}>
      <SunMedium className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Basculer le thème</span>
    </Button>
  )
}

export default ThemeToggle;
