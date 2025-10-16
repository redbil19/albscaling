import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'al';

interface Translations {
  en: {
    nav: {
      home: string;
      services: string;
      portfolio: string;
      contact: string;
    };
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      ctaSecondary: string;
    };
    services: {
      title: string;
      subtitle: string;
      branding: {
        title: string;
        description: string;
      };
      webDev: {
        title: string;
        description: string;
      };
      marketing: {
        title: string;
        description: string;
      };
      consulting: {
        title: string;
        description: string;
      };
    };
    portfolio: {
      title: string;
      subtitle: string;
      viewWebsite: string;
    };
    contact: {
      title: string;
      subtitle: string;
      phone: string;
      email: string;
      instagram: string;
    };
    footer: {
      rights: string;
      tagline: string;
    };
  };
  al: {
    nav: {
      home: string;
      services: string;
      portfolio: string;
      contact: string;
    };
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      ctaSecondary: string;
    };
    services: {
      title: string;
      subtitle: string;
      branding: {
        title: string;
        description: string;
      };
      webDev: {
        title: string;
        description: string;
      };
      marketing: {
        title: string;
        description: string;
      };
      consulting: {
        title: string;
        description: string;
      };
    };
    portfolio: {
      title: string;
      subtitle: string;
      viewWebsite: string;
    };
    contact: {
      title: string;
      subtitle: string;
      phone: string;
      email: string;
      instagram: string;
    };
    footer: {
      rights: string;
      tagline: string;
    };
  };
}

const translations: Translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    hero: {
      title: 'Scale Your Business to New Heights',
      subtitle: 'We empower businesses worldwide with cutting-edge branding, web development, and digital marketing solutions.',
      cta: 'Get Started',
      ctaSecondary: 'View Portfolio',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive solutions to elevate your brand',
      branding: {
        title: 'Brand Identity',
        description: 'Create a memorable brand that resonates with your audience through strategic design and positioning.',
      },
      webDev: {
        title: 'Web Development',
        description: 'Modern, responsive websites that drive engagement and convert visitors into customers.',
      },
      marketing: {
        title: 'Digital Marketing',
        description: 'Data-driven campaigns that amplify your reach and deliver measurable results.',
      },
      consulting: {
        title: 'Business Consulting',
        description: 'Strategic guidance to optimize operations and accelerate growth in competitive markets.',
      },
    },
    portfolio: {
      title: 'Our Portfolio',
      subtitle: 'Proven results for businesses across industries',
      viewWebsite: 'View Website',
    },
    contact: {
      title: 'Let\'s Scale Together',
      subtitle: 'Ready to take your business to the next level? Get in touch.',
      phone: 'Phone',
      email: 'Email',
      instagram: 'Instagram',
    },
    footer: {
      rights: 'All rights reserved.',
      tagline: 'Scaling Businesses Worldwide',
    },
  },
  al: {
    nav: {
      home: 'Kryesore',
      services: 'Shërbimet',
      portfolio: 'Portofoli',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Rritni Biznesin Tuaj në Nivele të Reja',
      subtitle: 'Ne fuqizojmë bizneset në të gjithë botën me zgjidhje të avancuara në branding, zhvillim web dhe marketing dixhital.',
      cta: 'Filloni Tani',
      ctaSecondary: 'Shikoni Portofolet',
    },
    services: {
      title: 'Shërbimet Tona',
      subtitle: 'Zgjidhje gjithëpërfshirëse për të ngritur markën tuaj',
      branding: {
        title: 'Identiteti i Markës',
        description: 'Krijoni një markë të paharrueshme që rezonon me audiencën tuaj përmes dizajnit strategjik dhe pozicionimit.',
      },
      webDev: {
        title: 'Zhvillimi Web',
        description: 'Faqe interneti moderne dhe responsive që nxisin angazhimin dhe konvertojnë vizitorët në klientë.',
      },
      marketing: {
        title: 'Marketing Dixhital',
        description: 'Fushata të bazuara në të dhëna që amplifikojnë rrezen tuaj dhe japin rezultate të matshme.',
      },
      consulting: {
        title: 'Konsulencë Biznesi',
        description: 'Udhëzime strategjike për të optimizuar operacionet dhe përshpejtuar rritjen në tregje konkurruese.',
      },
    },
    portfolio: {
      title: 'Portofoli Jonë',
      subtitle: 'Rezultate të vërtetuara për biznese në të gjitha industritë',
      viewWebsite: 'Shiko Faqen',
    },
    contact: {
      title: 'Le të Rriten Së Bashku',
      subtitle: 'Gati për të çuar biznesin tuaj në nivelin tjetër? Kontaktoni.',
      phone: 'Telefon',
      email: 'Email',
      instagram: 'Instagram',
    },
    footer: {
      rights: 'Të gjitha të drejtat e rezervuara.',
      tagline: 'Duke Rritur Biznese Në Mbarë Botën',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations['en'] | Translations['al'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
