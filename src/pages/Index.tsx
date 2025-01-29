import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { OrganizersSection } from "@/components/sections/OrganizersSection";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient min-h-[60vh] flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl text-primary mb-4">{t('event.callForPapers')}</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            {t('event.title')}
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-600 mb-4">
            {t('event.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="text-lg font-semibold">{t('event.date')}</div>
            <div className="hidden sm:block">•</div>
            <div className="text-lg font-semibold">{t('event.location')}</div>
          </div>
        </div>
      </section>

      <OrganizersSection />

      {/* Context Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-4">{t('about.context')}</p>
            <p className="text-gray-600 mb-4">{t('about.journal')}</p>
            <p className="text-gray-600 mb-4">{t('about.history')}</p>
            <p className="text-gray-600">{t('about.current')}</p>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('objectives.title')}</h2>
          <ul className="max-w-3xl mx-auto space-y-4">
            {(t('objectives.list') as string[]).map((objective, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{objective}</span>
              </li>
            ))}
          </ul>
          <div className="max-w-3xl mx-auto mt-8">
            <h3 className="text-xl font-semibold mb-4">{t('panel.title')}</h3>
            <p className="text-gray-600">{t('panel.1')}</p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('topics.title')}</h2>
          <ul className="max-w-3xl mx-auto space-y-4">
            {(t('topics.list') as string[]).map((topic, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Deadlines Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('deadlines.title')}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex justify-between items-center">
              <span>{t('deadlines.launch')}</span>
              <span>{t('deadlines.launch.date')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>{t('deadlines.close')}</span>
              <span>{t('deadlines.close.date')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>{t('deadlines.response')}</span>
              <span>{t('deadlines.response.date')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>{t('deadlines.conference')}</span>
              <span>{t('deadlines.conference.date')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Guidelines Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('submission.title')}</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p>{t('submission.criteria')}</p>
            <p>{t('submission.format')}</p>
            <p>{t('submission.length')}</p>
            <ul className="list-disc pl-6 space-y-2">
              {(t('submission.requirements') as string[]).map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <p className="mt-4">{t('submission.info')}</p>
            <ul className="list-disc pl-6 space-y-2">
              {(t('submission.author.info') as string[]).map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('fees.title')}</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-center">{t('fees.info')}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <p>{t('contact.info')}</p>
        </div>
      </section>
    </div>
  );
};

export default Index;