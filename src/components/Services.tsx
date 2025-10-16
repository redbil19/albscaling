import { Sparkles, Code, TrendingUp, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import growthVisual from '@/assets/growth-visual.jpg';

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Sparkles,
      title: t.services.branding.title,
      description: t.services.branding.description,
    },
    {
      icon: Code,
      title: t.services.webDev.title,
      description: t.services.webDev.description,
    },
    {
      icon: TrendingUp,
      title: t.services.marketing.title,
      description: t.services.marketing.description,
    },
    {
      icon: Target,
      title: t.services.consulting.title,
      description: t.services.consulting.description,
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative rounded-3xl overflow-hidden h-64 md:h-96 animate-fade-in">
          <img
            src={growthVisual}
            alt="Business Growth"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </section>
  );
};
