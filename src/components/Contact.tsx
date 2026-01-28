import { Phone, Mail, Instagram, ArrowRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import globalReach from '@/assets/global-reach.jpg';

export const Contact = () => {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: Phone,
      label: t.contact.phone,
      values: [
        { number: '+44 7415 273388', href: 'tel:+447415273388' },
        { number: '+355 69 279 5650', href: 'tel:+355692795650' },
      ],
    },
    {
      icon: Mail,
      label: t.contact.email,
      values: [{ text: 'alb.scaling@gmail.com', href: 'mailto:alb.scaling@gmail.com' }],
    },
    {
      icon: Instagram,
      label: t.contact.instagram,
      values: [{ text: '@alb.scaling', href: 'https://instagram.com/alb.scaling' }],
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Let's Talk
            <br />
            About Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Next Big Move
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.values[0].href}
                    className="group block p-6 rounded-2xl bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300 flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-white/60 uppercase tracking-wider mb-2">
                          {item.label}
                        </p>
                        <div className="space-y-1">
                          {item.values.map((value, i) => (
                            <p key={i} className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300">
                              {value.number || value.text}
                            </p>
                          ))}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/50 transition-all duration-300 hover:shadow-blue-500/75 py-6 text-base"
              onClick={() => window.location.href = 'mailto:alb.scaling@gmail.com'}
            >
              <Send className="mr-2 h-5 w-5" />
              Send us a message
            </Button>

            {/* Additional info */}
            <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30">
              <h4 className="font-bold text-white mb-2">Quick Response</h4>
              <p className="text-sm text-white/70">
                We typically respond within 24 hours. Let's discuss your goals.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative rounded-3xl overflow-hidden h-96 md:h-full min-h-[500px] group">
            <img
              src={globalReach}
              alt="Global Reach"
              className="w-full h-full object-cover brightness-40 group-hover:brightness-50 group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Floating content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              {/* Top accent */}
              <div className="flex justify-end">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/40" />
              </div>

              {/* Bottom content */}
              <div className="space-y-4">
                <h3 className="text-4xl font-black text-white">
                  Global <span className="text-blue-400">Reach</span>
                </h3>
                <p className="text-white/80 text-lg max-w-xs">
                  We work with businesses worldwide. Time zone? No problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};