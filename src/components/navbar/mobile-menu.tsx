import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import MobileLink from "./mobile-link.tsx"
import { Button } from "../ui/button.tsx"
import { Menu } from "lucide-react"

function MobileMenu() {
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
          <MobileLink href="#home">Accueil</MobileLink>
          <MobileLink href="#aboutme">À propos de moi</MobileLink>
          <MobileLink href="#skills">Mes compétences</MobileLink>
          <MobileLink href="#projects">Mes projets</MobileLink>
          <MobileLink href="#contact">Contactez-moi</MobileLink>
          <Separator className="my-2" />
          <div className="flex items-end justify-end text-end text-xs text-muted-foreground px-2">© {new Date().getFullYear()} Graig Kolodziejczyk — Portfolio</div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu;
