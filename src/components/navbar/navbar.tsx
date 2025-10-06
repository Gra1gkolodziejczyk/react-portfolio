import ThemeToggle from "./theme-toggle";
import NavLink from "./nav-link";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";
import ContactDock from "@/components/navbar/contact-dock.tsx";
import LanguageToggle from "@/components/navbar/language-toggle.tsx";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#home" className="font-bold tracking-tight text-lg">
            <img src="/react.svg" alt={t('nav.logo')} className="h-10 w-10" />
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink href="#home">{t('nav.home')}</NavLink>
            <NavLink href="#aboutme">{t('nav.about')}</NavLink>
            <NavLink href="#education">{t('nav.education')}</NavLink>
            <NavLink href="#skills">{t('nav.skills')}</NavLink>
            <NavLink href="#projects">{t('nav.projects')}</NavLink>
            <Button className="hover:text-white">
              <a href="#contact" className="text-white">{t('nav.contact')}</a>
            </Button>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
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
