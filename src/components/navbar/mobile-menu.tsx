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
          <MobileLink href="#accueil">Accueil</MobileLink>
          <MobileLink href="#apropos">À propos de moi</MobileLink>
          <MobileLink href="#competences">Mes compétences</MobileLink>
          <MobileLink href="#projets">Mes projets</MobileLink>
          <MobileLink href="#contact">Contactez-moi</MobileLink>
          <Separator className="my-4" />
          <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} MonNom — Portfolio</div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu;
