import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitch } from "./LanguageSwitch";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/ISCAE_Logo.png"
              alt="ISCAE"
              className="h-24 w-auto"
            />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <LanguageSwitch />
            <Button 
              variant="ghost" 
              size="icon"
              className="ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Desktop menu */}
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

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="#about">{t('nav.about')}</a>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="#schedule">{t('nav.schedule')}</a>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="#speakers">{t('nav.speakers')}</a>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="#partners">{t('nav.partners')}</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
