import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const translations = {
  en: {
    'event.title': 'Sustainable Finance 2024',
    'event.subtitle': 'The second Sustainable Finance meeting',
    'event.date': 'May 10-11, 2024',
    'event.location': 'FSEG Sfax - Tunisia',
    'event.callForPapers': 'Call for Papers',
    'event.subtitle2': 'Climate Risks in Africa',
    'event.honorary': 'Honorary guest',
    'event.guest.name': 'Christian de Boissieu',
    'event.guest.title': 'Professor emeritus at Paris-I Panthéon-Sorbonne University, vice-president of the Circle of Economists, member of the Academy of Technologies and the Royal Academy of Belgium and ex-president of the Economic Analysis Council.',
    'about.challenge': "The challenges of ecological transition and climate risks require the involvement of all stakeholders and a combined strategy of at least five actors: universities, businesses, financial institutions, States and Multilateral Governance Institutions. This transition is both an opportunity for economic growth and a duty of compliance and risk management. Some players also understand the interest of digitalization and artificial intelligence applying to develop rigorous sustainable development strategies based on a metric. But it is undeniable that there is still a long way to go to ensure a more serene future for future generations.",
    'purpose.title': "PURPOSE",
    'purpose.description': "These scientific days offer reflection on the theme of Sustainable Finance/CSR/ESG/ISR. Its overall objective is to raise awareness among stakeholders – academics and professionals – of the need to implement responsible strategies within North African and African companies based on innovative ESG impact measurement tools. This approach is necessary to face the risks of climate change on the African continent.",
    'topics.title': 'Topics of interest',
    'topics.list': [
      'Climate change: measurements, modelling, and predictions',
      'Sustainable finance',
      'Sustainable development goals',
      'Environmental, Social, and Governance (ESG) factors',
      'Corporate Social Responsibility (CSR) strategy',
      'Sustainability, regulation and risks',
      'Fintech, digitalisation, technology and Sustainability',
      'Artificial intelligence, blockchain, technology and sustainability',
      'Sustainable accounting',
      'Ethics in finance, islamic finance'
    ],
    'deadlines.title': 'Important Deadlines',
    'deadlines.submission': 'Submission of Communications',
    'deadlines.decision': 'Final Decision',
    'deadlines.confirmation': 'Confirmation of participation of accepted communications',
    'submission.title': 'Guidelines Submissions',
    'submission.format': 'All submissions must be in Word Format (doc, docx)',
    'submission.platform': 'Abstracts and articles can only be submitted online via the following website:',
    'fees.title': 'Participation fees',
    'fees.amount': '220 DT (100 €)',
    'fees.details': 'These fees cover access to sessions, documentation, 4 coffee breaks and 2 lunches.',
    'fees.accommodation': 'Possibility of booking your accommodation in a hotel approved by the FSEG Sfax',
    'committee.title': 'Committee members',
    'scientific.title': 'Scientific Committee',
    'contact.title': 'Contact',
    'contact.email': 'Contact us at: sana.ben.abdallah@fsegs.usf.tn',
    'nav.about': 'About',
    'nav.schedule': 'Schedule',
    'nav.speakers': 'Speakers',
    'nav.partners': 'Partners'
  },
  fr: {
    'event.title': 'Finance à Impact en Afrique',
    'event.subtitle': 'Troisièmes Rencontres de la Finance Durable',
    'event.date': '13 mai 2025',
    'event.location': 'ISCAE-Casablanca, Maroc',
    'event.callForPapers': 'Appel à Communications',
    'about.context': "L'African Finance Network (AFN) est une organisation non gouvernementale à but non lucratif qui vise à connecter les universités, les chercheurs et les professionnels autour du développement de l'Afrique. La mission principale de l'AFN est de favoriser une réflexion prospective sur les défis et opportunités de l'émergence africaine.",
    'about.journal': "En appui à ces efforts, l'AFN publie la revue scientifique African Finance for Development Review (AFDR) (à consulter sur https://africanfinance.network/revue/), spécialisée dans les thématiques de la finance durable.",
    'about.history': "Depuis 2023, les « Rencontres de la Finance Durable » ont établi un cadre de référence pour discuter des enjeux majeurs liés à la finance durable en Afrique. La première édition, tenue à Rabat, a marqué le lancement officiel de l'Observatoire Africain de la Finance Durable (OAFD) avec le soutien d'institutions prestigieuses et de représentants gouvernementaux. L'édition 2024, organisée à Sfax, a porté sur les risques climatiques et a rassemblé plus de 40 conférenciers internationaux et africains.",
    'about.current': "La troisième édition, prévue pour le 13 mai 2025 à Casablanca, poursuivra cet élan en explorant les enjeux et opportunités liés à la finance à impact en Afrique, avec un accent sur les études de cas pratiques, la recherche scientifique et les initiatives institutionnelles favorisant l'économie durable.",
    'objectives.title': 'Objectifs de la Conférence',
    'objectives.list': [
      'Promouvoir la finance durable comme un levier stratégique pour le développement économique et environnemental en Afrique.',
      'Sensibiliser les chercheurs, praticiens et décideurs aux méthodes innovantes de mesure d\'impact ESG (Environnement, Société, Gouvernance).',
      'Offrir une plateforme d\'échanges sur les régulations, incitations et solutions adaptées aux besoins des entreprises et institutions africaines.',
      'Mettre en avant les technologies émergentes et leur rôle dans la transformation durable des économies africaines.'
    ],
    'panel.title': "Panel d'expertise",
    'panel.1': "Panel 1 : Mesure d'Impact ESG en Afrique, mettant en avant le dispositif Bank of Africa/OAFD : Discussions sur les obligations vertes, les fonds d'investissement à impact social et la digitalisation au service de la durabilité.",
    'topics.title': "Sujets d'Intérêt",
    'topics.list': [
      'Finance durable et ses méthodologies',
      "Mesure d'impact ESG en Afrique",
      'Réglementations et standards ESG',
      'Financement de la transition écologique et énergétique',
      'Synergie entre transition écologique et numérique',
      'Mécanismes de compensation (principe « Pollueur-Payeur »)',
      'Pratiques et innovations en Responsabilité Sociétale des Entreprises (RSE)',
      'Fintech, blockchain et intelligence artificielle pour une finance durable',
      'Gestion des risques liés à la durabilité'
    ],
    'deadlines.title': 'Calendrier',
    'deadlines.launch': "Lancement de l'appel",
    'deadlines.launch.date': 'Janvier 2025',
    'deadlines.close': "Clôture de l'appel",
    'deadlines.close.date': '[à déterminer]',
    'deadlines.response': 'Réponse aux soumissions',
    'deadlines.response.date': '[à déterminer]',
    'deadlines.conference': 'Date de la conférence',
    'deadlines.conference.date': '13 mai 2025',
    'submission.title': 'Directives de Soumission',
    'submission.criteria': 'Les chercheurs souhaitant soumettre une communication doivent respecter les critères suivants :',
    'submission.format': 'Les propositions doivent être rédigées en format Word (.doc, .docx).',
    'submission.length': "Le texte ne doit pas excéder 3 000 caractères, incluant :",
    'submission.requirements': [
      'Un titre provisoire',
      'Un résumé de la proposition',
      'Une bibliographie succincte',
      'Cinq mots-clés'
    ],
    'submission.info': 'Les informations suivantes doivent être complétées dans le formulaire de dépôt :',
    'submission.author.info': [
      'Noms des auteurs',
      'Affiliations universitaires ou professionnelles',
      'Coordonnées (adresse e-mail, laboratoire, institution de rattachement)'
    ],
    'fees.title': "Frais d'Inscription",
    'fees.info': "Les informations relatives aux frais de participation, le cas échéant, seront publiées sur le site de l'événement.",
    'contact.info': 'Pour toute question ou information complémentaire, veuillez contacter : [insérer les coordonnées].'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string | string[] => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}