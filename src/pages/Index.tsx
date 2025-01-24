import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { OrganizersSection } from "@/components/sections/OrganizersSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TopicsSection } from "@/components/sections/TopicsSection";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const committeeMembers = [
  "Sana BEN ABDALLAH - FSEG Sfax, Tunisia",
  "Karim KAMMOUN – ISGIS Sfax, Tunisia",
  "Farhat BREIK – FSEG Sfax, Tunisia",
  "Younes BOUJELBENE – FSEG Sfax, Tunisia",
  "Bilel GARGOURI – FSEG Sfax, Tunisia",
  "Foued Badr GABSI – FSEG Sfax, Tunisia",
  "Nouri CHTOUROU – FSEG Sfax, Tunisia",
  "Tarik EL MALKI – Group ISCAE, Morocco",
  "Nabil JEDELANE – ENCG Tanger, Morocco",
  "Mohamed Amine ISSAMI – Group ISCAE, Morocco",
  "Dhafer SAIDANE – SKEMA Business School, France",
  "Lobna BEN HSSEN – FSEG Sfax, Tunisia",
  "Mouna BOUJELBANE – FSEG Sfax, Tunisia",
  "Lamia BELGUITH – FSEG Sfax, Tunisia",
  "Mohamed BEN AMAR – FSEG Sfax, Tunisia",
  "Souhir ABBES – FSEG Sfax, Tunisia",
  "Salma HICHRI – FSEG Sfax, Tunisia",
  "Nahed ZGHIDI – ESC Sfax, Tunisia",
  "Sofiene TIBA – FSEG Sfax, Tunisia",
  "Maryam ELAMINE – FSEG Sfax, Tunisia",
  "Ines KARRA – FSEG Sfax, Tunisia"
];

const scientificCommittee = `Abdelfatteh Bouri (FSEG Sfax) ; Abderrazak Ellouze (ESC Tunis) ; Azzelarab Zaoudi Mouagni (ISCAE Maroc) ; Adil BAMI (ISCAE Maroc) ; Ahmed Ghorbel (FSEG Sfax) ; Ahmed Hachicha (ESC Sfax) ; Alain Safa (UCA, France) ; Amine Lahiani (Université d'Orléans, France) ; Anis Bouabid, (FSEG Sousse) ; Anis Jarboui (ISAA Sfax) ; Babacar Sène (Université Cheikh Anta Diop, Sénégal) ; Bilel Gargouri (FSEG Sfax) ; Borhen Trigui (FSEG Sfax) ; Chafic Aloulou (FSEG Sfax) ; Claude Berthomieu (UCA, France) ; Désiré Avom (Université de Yaoundé, Cameroun) ; Dhafer Saidane (Skema Busuness School-UCA, France) ; Faiez Gargouri (Université de Sfax) ; Faouzi Sboui (FSEG Mahdia) ; Foued Badr Gabsi (FSEG Sfax) ; Ghazi Zouari (FSEG Sfax) ; Habib Affes (FSEG Sfax) ; Hamadi Fakhfakh (FSEG Sfax) ; Hatem Belhadjkacem (FSEG Sfax) ; Hatem SALAH (ESC Tunis) ; Houssam Bouzgarrou (ISFFS) ; Isabelle Rabaud (Université d'Orléans, France) ; Jamel Chouaibi (FSEG Sfax) ; Kamel Helali (FSEG Sfax) ; Kamel Naoui (ESC Tunis) ; Karim Aarab (ISCAE Maroc) ; Karim Charaf (ISCAE Maroc) ; Karim Mezghani (FSEG Sfax) ; Karima Bouzguenda (FSEG Sfax) ; Khouloud Boukadi (FSEG Sfax) ; Khoutem Ben Jdidia (ISCAE Manouba) ; Lamia Hadrich Belguith (FSEG Sfax) ; Lobna Ben Hassen (FSEG Sfax) ; Lotfi Khrifech (FSEG Sfax) ; Maher Gassab (ESC Tunis) ; Malek El Weriemmi (ISG Gabes) ; Mihaly Petreczky (CNRS Lille) ; Mohamed Amine Issami (Groupe ISCAE Maroc) ; Mohamed Ben Amar (FSEG Sfax) ; Mohamed Frikha (FSEG Tunis) ; Montej Abida (ESC Sfax) ; Mouna Abbes (FSEG Sfax) ; Mounir Smida (FSEG Sousse) ; Nabil Jedldane (Université Abdelmalek Essaâdi, Maroc) ; Nadia Abaoub (ESC Tunis) ; Nahed Zghidi (ESC Sfax) ; Nathalie Hilmi (Centre Scientifique de Monaco, France) ; Niazi Kammoun (IHEC Sfax) ; Nouri Chtourou (FSEG Sfax) ; Rim Hadiji (FSEG Sfax) ; Romdhane Khemakhem (FSEG Sfax) ; Salah Ben Hamed (FSEG Tunis) ; Salma Haj Khlifa (ISCAE Maroc) ; Salma Hichri (FSEG Sfax) ; Sami Aouadi (FSEG Tunis) ; Sami Ben Mim (IHEC Sousse) ; Sami Boudabbous (FSEG Sfax) ; Sami Hammami (FSEG Sfax) ; Siham Meknassi (Groupe ISCAE Maroc) ; Siwar Ellouz (ESC Sfax) ; Slaheddine Hellara (ISG Tunis) ; Slim Kallel (FSEG Sfax) ; Sonda Weli (FSEG Sfax) ; Sonia Zouari (ISAA Sfax) ; Souhir Abbes (FSEG Sfax) ; Srdjan Redzpagic (UCA, France) ; Tarik Elmalki (Groupe ISCAE Maroc) ; Tarik Saadi (ISCAE Maroc) ; Taicir Loukil (FSEG Sfax) ; Thierry Baudasse (Université d'Orléans, France) ; Younes Boujelbene (FSEG Sfax) ; Zouheir Abida (FSEG Sfax)`;

const Index = () => {
  const { t } = useLanguage();

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

      <OrganizersSection />

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

      <AboutSection />
      <TopicsSection />

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
              {scientificCommittee}
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
