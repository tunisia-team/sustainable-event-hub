
import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { OrganizersSection } from "@/components/sections/OrganizersSection";

const Programme = () => {
  const { t } = useLanguage();
  const sessions = t('schedule.sessions') as Record<string, any>;
  const axes = t('schedule.axes') as string[];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="hero-gradient py-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('schedule.title')}</h1>
            <h2 className="text-2xl md:text-3xl mb-4">{t('schedule.subtitle')}</h2>
            <p className="text-xl">{t('schedule.date')}</p>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t('schedule.provisional')}</h2>
          
          <div className="space-y-8">
            {Object.entries(sessions).map(([time, details]) => (
              <div key={time} className="border-l-4 border-primary pl-4 py-4">
                <h3 className="text-xl font-bold mb-2">{time}</h3>
                {typeof details === 'string' ? (
                  <p>{details}</p>
                ) : (
                  <div className="space-y-2">
                    {details.title && <h4 className="font-semibold">{details.title}</h4>}
                    {details.speakers && (
                      <ul className="list-disc list-inside space-y-1">
                        {details.speakers.map((speaker: string, index: number) => (
                          <li key={index}>{speaker}</li>
                        ))}
                      </ul>
                    )}
                    {details.description && <p>{details.description}</p>}
                    {details.president && (
                      <p className="font-medium">Président: {details.president}</p>
                    )}
                    {Array.isArray(details) && (
                      <ul className="list-disc list-inside">
                        {details.map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Research Axes */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">{t('schedule.workshops')}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {axes.map((axis, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium">Axe {index + 1}: {axis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reuse OrganizersSection */}
        <OrganizersSection />
      </main>
    </div>
  );
};

export default Programme;
