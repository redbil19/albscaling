import { Phone, Mail, Instagram, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import globalReach from '@/assets/global-reach.jpg';

export const Contact = () => {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: Phone,
      label: t.contact.phone,
      values: ['+44 7415 273388', '+355 69 279 5650'],
      href: 'tel:+447415273388',
    },
    {
      icon: Mail,
      label: t.contact.email,
      values: ['alb.scaling@gmail.com'],
      href: 'mailto:alb.scaling@gmail.com',
    },
    {
      icon: Instagram,
      label: t.contact.instagram,
      values: ['@alb.scaling'],
      href: 'https://instagram.com/alb.scaling',
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                    {item.values.map((value, i) => (
                      <a
                        key={i}
                        href={item.href}
                        target={item.icon === Instagram ? '_blank' : undefined}
                        rel={item.icon === Instagram ? 'noopener noreferrer' : undefined}
                        className="block text-lg font-medium hover:text-primary transition-colors"
                      >
                        {value}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}

            <Button
              variant="accent"
              size="lg"
              className="w-full"
              onClick={() => window.location.href = 'mailto:alb.scaling@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send us an email
            </Button>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-[500px] animate-fade-in">
            <img
              src={globalReach}
              alt="Global Reach"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent flex items-center justify-center">
              <div className="text-center p-8">
                <Globe className="h-16 w-16 text-primary mx-auto mb-4 animate-glow-pulse" />
                <p className="text-2xl font-bold">{t.footer.tagline}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
