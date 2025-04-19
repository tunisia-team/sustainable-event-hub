
import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Schedule = () => {
  const { t, language } = useLanguage();

  const scheduleData = [
    {
      time: "8h30-9h00",
      fr: "Accueil des participants",
      en: "Participant Registration"
    },
    {
      time: "9h00-9h30",
      title: {
        fr: "Mot de bienvenue",
        en: "Welcome Address"
      },
      speakers: [
        "Tarik EL MALKI – Directeur Général du Groupe ISCAE, Maroc",
        "Ryad MEZZOUR - Ministre de l'Industrie et du commerce, Maroc"
      ],
      special: {
        fr: "Signature de la Convention\nChaire Panafricaine de Durabilité et Finance à Impact, AFN-OAFD et ISCAE.",
        en: "Convention Signing\nPan-African Chair of Sustainability and Impact Finance, AFN-OAFD and ISCAE."
      }
    },
    // ... more schedule items will follow the same pattern
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient min-h-[40vh] flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            {language === 'fr' ? 'Programme Provisoire' : 'Provisional Schedule'}
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-600 mb-4">
            {t('event.date')} • {t('event.location')}
          </p>
        </div>
      </section>

      {/* Schedule Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {scheduleData.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/6">
                      <div className="text-lg font-semibold text-primary">{item.time}</div>
                    </div>
                    <div className="md:w-5/6">
                      <h3 className="text-xl font-semibold mb-2">
                        {language === 'fr' ? item.fr : item.en}
                      </h3>
                      {item.speakers && (
                        <div className="mt-2 space-y-1">
                          {item.speakers.map((speaker, idx) => (
                            <p key={idx} className="text-gray-600">{speaker}</p>
                          ))}
                        </div>
                      )}
                      {item.special && (
                        <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                          <p className="whitespace-pre-line">
                            {language === 'fr' ? item.special.fr : item.special.en}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
