import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      aria-label={`Switch to ${i18n.language === 'fr' ? 'English' : 'French'}`}
    >
      {i18n.language === 'fr' ? '🇬🇧' : '🇫🇷'}
    </Button>
  );
}
