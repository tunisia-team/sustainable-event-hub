import { useLanguage } from "@/contexts/LanguageContext";

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-600">{t('about.challenge')}</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">{t('purpose.title')}</h2>
          <p className="text-gray-600">{t('purpose.description')}</p>
        </div>
      </div>
    </section>
  );
};