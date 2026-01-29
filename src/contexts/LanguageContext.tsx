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
      benefits: {
        growth: {
          title: string;
          description: string;
        };
        dataDriven: {
          title: string;
          description: string;
        };
        expertise: {
          title: string;
          description: string;
        };
      };
      stats: {
        projects: string;
        growth: string;
      };
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
      projects: {
        motiv: {
          title: string;
          description: string;
        };
        tenda: {
          title: string;
          description: string;
        };
        spekter: {
          title: string;
          description: string;
        };
        blueprint: {
          title: string;
          description: string;
        };
        fitness: {
          title: string;
          description: string;
        };
        kbv: {
          title: string;
          description: string;
        };
      };
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
      benefits: {
        growth: {
          title: string;
          description: string;
        };
        dataDriven: {
          title: string;
          description: string;
        };
        expertise: {
          title: string;
          description: string;
        };
      };
      stats: {
        projects: string;
        growth: string;
      };
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
      projects: {
        motiv: {
          title: string;
          description: string;
        };
        tenda: {
          title: string;
          description: string;
        };
        spekter: {
          title: string;
          description: string;
        };
        blueprint: {
          title: string;
          description: string;
        };
        fitness: {
          title: string;
          description: string;
        };
        kbv: {
          title: string;
          description: string;
        };
      };
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
      benefits: {
        growth: {
          title: 'Rapid Growth',
          description: 'See results in weeks, not months',
        },
        dataDriven: {
          title: 'Data-Driven',
          description: 'Strategic approach backed by analytics',
        },
        expertise: {
          title: 'Expert Team',
          description: 'Industry veterans with proven track records',
        },
      },
      stats: {
        projects: 'Projects Scaled',
        growth: 'Growth Average',
      },
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
      projects: {
        motiv: {
          title: 'Motiv Reklama',
          description: 'Professional advertising and creative marketing solutions',
        },
        tenda: {
          title: 'Tenda Dielli Tani',
          description: 'Premium tent and outdoor solutions since 2001',
        },
        spekter: {
          title: 'Spekter Reklama',
          description: 'Full-spectrum advertising and branding services',
        },
        blueprint: {
          title: 'Blueprint Real Estate',
          description: 'Modern real estate solutions with a focus on quality and trust',
        },
        fitness: {
          title: 'FitnessBodystyle',
          description: 'Premium gym and fitness solutions with professional coaching',
        },
        kbv: {
          title: 'KBVllaznia',
          description: 'Sports club website with fixture management and news system',
        },
      },
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
      benefits: {
        growth: {
          title: 'Rritje e Shpejtë',
          description: 'Shiko rezultatet në javë, jo muaj',
        },
        dataDriven: {
          title: 'Bazuar në të Dhëna',
          description: 'Qasja strategjike e mbështetur nga analitika',
        },
        expertise: {
          title: 'Ekipi i Ekspertëve',
          description: 'Veteranë industrieje me regjistrime të provuara',
        },
      },
      stats: {
        projects: 'Projekte të Shkallëzuara',
        growth: 'Mesatare Rritjeje',
      },
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
      projects: {
        motiv: {
          title: 'Motiv Reklama',
          description: 'Zgjidhje profesionale të reklamimit dhe marketing-u kreatív',
        },
        tenda: {
          title: 'Tenda Dielli Tani',
          description: 'Zgjidhje premium të tendave dhe aktiviteteve të jashtme që nga 2001',
        },
        spekter: {
          title: 'Spekter Reklama',
          description: 'Shërbimet e reklamimit dhe branding-ut me spektër të plotë',
        },
        blueprint: {
          title: 'Blueprint Real Estate',
          description: 'Zgjidhje moderne të pasurive të paluajtshme me fokus në cilësi dhe besim',
        },
        fitness: {
          title: 'FitnessBodystyle',
          description: 'Zgjidhje premium të palestër dhe fitnessi me trajnim profesional',
        },
        kbv: {
          title: 'KBVllaznia',
          description: 'Faqja e klubit sportiv me menaxhimin e ndeshjes dhe sistemin e lajmeve',
        },
      },
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
  const [language, setLanguage] = useState<Language>('al');

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
