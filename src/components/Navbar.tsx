import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitch } from "./LanguageSwitch";

export function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-primary">SF2024</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" asChild>
              <a href="#about">{t('nav.about')}</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#schedule">{t('nav.schedule')}</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#speakers">{t('nav.speakers')}</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#partners">{t('nav.partners')}</a>
            </Button>
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}