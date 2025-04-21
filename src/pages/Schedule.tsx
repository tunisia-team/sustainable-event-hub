import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { OrganizersSection } from "@/components/sections/OrganizersSection";
import { Card, CardContent } from "@/components/ui/card";

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
        "Mr. Tarik EL MALKI – Directeur Général du Groupe ISCAE, Maroc",
        "Mr. Ryad MEZZOUR - Ministre de l'Industrie et du commerce, Maroc"
      ],
      special: {
        fr: "Signature de la Convention Chaire Panafricaine de Durabilité et Finance à Impact, AFN-OAFD et ISCAE.",
        en: "Convention Signing\nPan-African Chair of Sustainability and Impact Finance, AFN-OAFD and ISCAE."
      }
    },
    {
      time: "9h30-11h00",
      title: {
        fr: "Ouverture officielle – BOA/ISCAE/OAFD/FSEG Sfax",
        en: "Official Opening – BOA/ISCAE/OAFD/FSEG Sfax"
      },
      speakers: [
        "Keynote speaker : Brahim BENJELLOUN TOUIMI- Administrateur Directeur Général Délégué Bank Of Africa – Stratégie de la BOA en matière de finance durable"
      ],
      panelists: {
        chair: "Président : Christian de BOISSIEU",
        members: [
          "• Mme. Nadia FETTAH ALAOUI - Ministre de l'Économie et des Finances (à confirmer)",
          "• Mme. Leila BENALI - Ministre de la Transition énergétique et du Développement durable (à confirmer)",
          "• Mme. Assia BENHIDA – Présidente de la commission durable CGEM",
          "• Mr. Mohamed Vall EL ALEM – Secrétaire Général de l'UBM",
          "• Mme. Jamila ALAMI – CNRST"
        ]
      }
    },
    {
      time: "11h00-11h30",
      fr: "Pause-café",
      en: "Coffee Break"
    },
    {
      time: "11h30-12h30",
      title: {
        fr: "Expertise – Mesure performance ESG en Afrique : le dispositif BOA/OAFD",
        en: "Expertise – ESG Performance Measurement in Africa: the BOA/OAFD System"
      },
      panelists: {
        chair: "Président de séance : Nathalie HELMI",
        members: [
          "• Mr. Mamoun TAHRI JOUTEI, Directeur Central Intelligence Economique et Développement Durable Bank Of Africa\n« Durabilité et Services Non Financiers, le retour d'expérience de Bank Of Africa»",
          "• Mr. Dhafer SAIDANE, Mme. Sana BEN ABDALLAH, Mr. Mihaly PETRECZKY (AFN-OAFD)\n\"Le SPI appliqué à la BOA : résultats de la méthodologie »"
        ]
      }
    },
    {
      time: "12h30-13h30",
      title: {
        fr: "Table ronde : témoignages d'experts",
        en: "Round Table: Expert Testimonials"
      },
      speakers: [
        "• Mr. Oussama GHAZI - Epitome Advisory",
        "• Mme. Assia BENHIDA – Présidente de la commission durable CGEM",
        "• Mr. Elyes BEN RAYANA - Value",
        "• Mr. Mongi BEN TKHAYAT - AMEF Consulting"
      ]
    },
    {
      time: "13h30-13h45",
      fr: "Signature convention AFN-OAFD et ISCAE Nouakchott",
      en: "Signing of the AFN-OAFD and ISCAE Nouakchott Convention"
    },
    {
      time: "13h45-14h45",
      fr: "Déjeuner",
      en: "Lunch"
    },
    {
      time: "14h45-17h00",
      title: {
        fr: "Sessions parallèles",
        en: "Parallel Sessions"
      },
      panelists: {
        chair: "Présidents : Maher GASSAB/ Adil BAMI/Foued GABSI/ Ines EL FARISSI/ Dhafer SAIDANE / Karim CHARAF/ Amine ISSAMI/ Siham MEKNASSI Karim KAMMOUN/ Jihane AAYALE/ Mariam SEFFAR/ Halima BAGHAD/ Meriam BOUYZEM/ Azzelarab ZAOUDI/ Imane BOUDRI/ Fouad MACHROUH",
      },
      special: {
        fr: "Ateliers de recherche : Finance durable, mesure d'impact en Afrique, réglementation ESG, financement de la transition écologique en Afrique, la double transition : écologique et numérique, Mécanismes de compensation et transferts « Pollueur/Payeur »…",
        en: "Research Workshops: Sustainable Finance, Impact Measurement in Africa, ESG Regulation, Financing Ecological Transition in Africa, the Double Transition: Ecological and Digital, Compensation Mechanisms and \"Polluter/Payeur\" Transfers..."
      },
      tracks: [
        "Axe 1 : Responsabilité sociale et gouvernance d'entreprise",
        "Axe 2 : Fintech et innovation en finance durable",
        "Axe 3 : Finance durable et secteur bancaire",
        "Axe 4 : Performance financière et ESG",
        "Axe 5 : Transition climatique et finance verte",
        "Axe 6 : Croissance et développement durable",
        "Axe 7 : Tendances ESG : Mesures bibliométriques et études critiques",
        "Axe 8 : Réglementations, conformité et normes ESG",
        "Axe 9 : ESG, comptabilité et audit"
      ]
    },
    {
      time: "17h00-18h00",
      fr: "• Recommandations des 3emes Rencontres de la Finance durable\n• Réunion annuelle de l'AFN/OAFD",
      en: "• Recommendations from the 3rd Sustainable Finance Meeting\n• Annual AFN/OAFD Meeting",
      multiline: true  // Added a flag to identify this item needs special handling
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient min-h-[60vh] flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* <h2 className="text-xl text-primary mb-4">{t('event.callForPapers')}</h2> */}
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

      {/* Schedule Content */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            {language === 'fr' ? 'Programme Provisoir' : 'Provisional Schedule'}
          </h2>
          <div className="space-y-8">
            {scheduleData.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/6">
                      <div className="text-lg font-semibold text-primary">{item.time}</div>
                    </div>
                    <div className="md:w-5/6">
                      {item.title ? (
                        <h3 className="text-xl font-semibold mb-2">
                          {language === 'fr' ? item.title.fr : item.title.en}
                        </h3>
                      ) : (
                        <h3 className={`text-xl font-semibold mb-2 ${item.multiline ? 'whitespace-pre-line' : ''}`}>
                          {language === 'fr' ? item.fr : item.en}
                        </h3>
                      )}
                      
                      {item.speakers && (
                        <div className="mt-2 space-y-1">
                          {item.speakers.map((speaker, idx) => (
                            <p key={idx} className="text-gray-600 whitespace-pre-line">{speaker}</p>
                          ))}
                        </div>
                      )}
                      
                      {item.panelists && (
                        <div className="mt-3">
                          <p className="font-medium text-gray-800">{item.panelists.chair}</p>
                          <div className="mt-2 space-y-1 pl-4">
                            {item.panelists.members?.map((member, idx) => (
                              <p key={idx} className="text-gray-600 whitespace-pre-line">{member}</p>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {item.special && (
                        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                          <p className="whitespace-pre-line text-gray-900">
                            {language === 'fr' ? item.special.fr : item.special.en}
                          </p>
                        </div>
                      )}
                      
                      {item.tracks && (
                        <div className="mt-4 space-y-1">
                          {item.tracks.map((track, idx) => (
                            <p key={idx} className="text-gray-700">{track}</p>
                          ))}
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

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p>{t('contact.info')}</p>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
