import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import MobileLink from "./mobile-link.tsx"
import { Button } from "../ui/button.tsx"
import { Menu } from "lucide-react"
import { useTranslation } from "react-i18next";

function MobileMenu() {
  const { t } = useTranslation();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Ouvrir le menu">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Ouvrir le menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[90vw] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-2">
          <MobileLink href="#home">{t('nav.home')}</MobileLink>
          <MobileLink href="#aboutme">{t('nav.about')}</MobileLink>
          <MobileLink href="#education">{t('nav.education')}</MobileLink>
          <MobileLink href="#skills">{t('nav.skills')}</MobileLink>
          <MobileLink href="#projects">{t('nav.projects')}</MobileLink>
          <MobileLink href="#contact">{t('nav.contact')}</MobileLink>
          <Separator className="my-2" />
          <div className="flex items-end justify-end text-end text-xs text-muted-foreground px-2">© {new Date().getFullYear()} Graig KOLODZIEJCZYK — Portfolio</div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu;
