import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            {t('event.title')}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-6">
            {t('event.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="text-lg font-semibold">{t('event.date')}</div>
            <div className="hidden sm:block">•</div>
            <div className="text-lg font-semibold">{t('event.location')}</div>
          </div>
          <Button size="lg" asChild>
            <a href="#schedule">{t('schedule.view')}</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('about.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('schedule.title')}</h2>
          <div className="aspect-[16/9] w-full">
            <iframe 
              src="https://drive.google.com/file/d/YOUR_FILE_ID/preview"
              className="w-full h-full rounded-lg shadow-lg"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('speakers.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="aspect-square rounded-full bg-gray-200 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Christian de Boissieu</h3>
              <p className="text-gray-600">Professor at University Paris 1 Panthéon-Sorbonne</p>
            </Card>
            {/* Add more speaker cards as needed */}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('partners.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Partner logos */}
            <div className="aspect-[3/2] bg-white rounded-lg shadow-sm p-4 flex items-center justify-center">
              <img src="/lovable-uploads/e5f577f5-d3bf-4c2e-b3a7-286995d5b7b3.png" alt="Partner" className="max-w-full max-h-full object-contain" />
            </div>
            {/* Add more partner logos as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;