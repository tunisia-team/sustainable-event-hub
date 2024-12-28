import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  const { t } = useLanguage();

  const topics = [
    "Climate change: measurements, modelling, and predictions",
    "Sustainable finance",
    "Sustainable development goals",
    "Environmental, Social, and Governance (ESG) factors",
    "Corporate Social Responsibility (CSR) strategy",
    "Sustainability, regulation and risks",
    "Fintech, digitalisation, technology and Sustainability",
    "Artificial intelligence, blockchain, technology and sustainability",
    "Sustainable accounting",
    "Ethics in finance, islamic finance"
  ];

  const partnerLogos = [
    "/lovable-uploads/5f60ebc6-a997-4571-95dc-f818be241ab5.png", // FSEG Sfax
    "/lovable-uploads/55d7b386-c0a5-4d8d-9244-35f3e4a515d8.png", // AFN
    "/lovable-uploads/6c2f4035-8bd6-42e3-b6d1-19d90377153b.png", // University of Sfax
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient min-h-[80vh] flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl text-primary mb-4">{t('event.callForPapers')}</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            {t('event.title')}
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-600 mb-4">
            {t('event.subtitle')}
          </p>
          <p className="text-xl sm:text-2xl text-gray-600 mb-6">
            {t('event.subtitle2')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="text-lg font-semibold">{t('event.date')}</div>
            <div className="hidden sm:block">•</div>
            <div className="text-lg font-semibold">{t('event.location')}</div>
          </div>
        </div>
      </section>

      {/* Honorary Guest Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('event.honorary')}</h2>
          <Card className="max-w-3xl mx-auto p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Avatar className="w-48 h-48">
                <AvatarImage src="/lovable-uploads/a9390b77-b36e-489a-914e-1c81818abef0.png" alt="Christian de Boissieu" />
                <AvatarFallback>CdB</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-2xl font-bold mb-4">{t('event.guest.name')}</h3>
                <p className="text-gray-600">{t('event.guest.title')}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Topics Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('topics.title')}</h2>
          <ul className="max-w-3xl mx-auto space-y-4">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            {partnerLogos.map((logo, index) => (
              <img 
                key={index}
                src={logo}
                alt="Partner logo"
                className="max-h-24 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="section-padding bg-white">
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

      {/* Deadlines Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('deadlines.title')}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex justify-between items-center">
              <span>{t('deadlines.submission')}</span>
              <span>April 7, 2024</span>
            </div>
            <div className="flex justify-between items-center">
              <span>{t('deadlines.decision')}</span>
              <span>April 15, 2024</span>
            </div>
            <div className="flex justify-between items-center">
              <span>{t('deadlines.confirmation')}</span>
              <span>May 5, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Guidelines Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('submission.title')}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p>{t('submission.format')}</p>
            <p>{t('submission.platform')}</p>
            <p className="font-semibold">cmt3.research.microsoft.com/SFM2024/Submission/Index</p>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('fees.title')}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl font-semibold text-center">{t('fees.amount')}</p>
            <p className="text-center">{t('fees.details')}</p>
            <p className="text-center">{t('fees.accommodation')}</p>
          </div>
        </div>
      </section>

      {/* Committee Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('committee.title')}</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {committeeMembers.map((member, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                {member}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Committee Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('scientific.title')}</h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600">
              Abdelfatteh Bouri (FSEG Sfax) ; Abderrazak Ellouze (ESC Tunis) ; Azzelarab Zaoudi Mouagni (ISCAE Maroc) ...
              {/* Add all scientific committee members */}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t('contact.title')}</h2>
          <p>{t('contact.email')}</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
