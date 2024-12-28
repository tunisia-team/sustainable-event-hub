import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'event.title': 'Sustainable Finance 2024',
    'event.subtitle': 'The second Sustainable Finance meeting',
    'event.date': 'May 10-11, 2024',
    'event.location': 'FSEG Sfax - Tunisia',
    'nav.about': 'About',
    'nav.schedule': 'Schedule',
    'nav.speakers': 'Speakers',
    'nav.partners': 'Partners',
    'about.title': 'About the Event',
    'about.description': 'The challenges of ecological transition and climate risks require the involvement of all stakeholders and a combined response from all actors: companies, businesses, financial institutions, states and legislative bodies.',
    'schedule.title': 'Event Schedule',
    'schedule.view': 'View Full Schedule',
    'speakers.title': 'Key Speakers',
    'partners.title': 'Our Partners',
  },
  fr: {
    'event.title': 'Finance Durable 2024',
    'event.subtitle': 'Les deuxièmes rencontres de la Finance durable',
    'event.date': '10-11 mai 2024',
    'event.location': 'FSEG Sfax - Tunisie',
    'nav.about': 'À propos',
    'nav.schedule': 'Programme',
    'nav.speakers': 'Intervenants',
    'nav.partners': 'Partenaires',
    'about.title': 'À propos de l\'événement',
    'about.description': 'Les défis de la transition écologique et des risques climatiques nécessitent l\'implication de toutes les parties prenantes et une réponse combinée de tous les acteurs : entreprises, institutions financières, États et organes législatifs.',
    'schedule.title': 'Programme de l\'événement',
    'schedule.view': 'Voir le programme complet',
    'speakers.title': 'Intervenants principaux',
    'partners.title': 'Nos Partenaires',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
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