import ThemeToggle from "./theme-toggle";
import NavLink from "./nav-link";
import { Button } from "../ui/button";
import reactImage from "@/assets/react.svg";
import MobileMenu from "./mobile-menu";
import ContactDock from "@/components/navbar/contact-dock.tsx";

export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="font-bold tracking-tight text-lg">
            <img src={reactImage} alt="Logo" className="h-10 w-10" />
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink href="#accueil">Accueil</NavLink>
            <NavLink href="#apropos">À propos de moi</NavLink>
            <NavLink href="#competences">Mes compétences</NavLink>
            <NavLink href="#projets">Mes projets</NavLink>
            <Button className="hover:text-white">
              <a href="#contact" className="text-white">Contactez-moi</a>
            </Button>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      <ContactDock />
    </>
  );
}
