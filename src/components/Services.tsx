import { Sparkles, Code, TrendingUp, Target, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import growthVisual from '@/assets/growth-visual.jpg';

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Sparkles,
      title: t.services.branding.title,
      description: t.services.branding.description,
      number: '01',
    },
    {
      icon: Code,
      title: t.services.webDev.title,
      description: t.services.webDev.description,
      number: '02',
    },
    {
      icon: TrendingUp,
      title: t.services.marketing.title,
      description: t.services.marketing.description,
      number: '03',
    },
    {
      icon: Target,
      title: t.services.consulting.title,
      description: t.services.consulting.description,
      number: '04',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-5 animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-slate-600 rounded-full blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Services That
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Drive Results
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid - Numbered cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden"
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative z-10 flex gap-6">
                  {/* Number badge */}
                  <div className="text-6xl font-black text-white/10 group-hover:text-blue-500/20 transition-colors duration-300">
                    {service.number}
                  </div>

                  <div className="flex-1">
                    {/* Icon */}
                    <div className="inline-flex p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300 mb-4">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Learn more link */}
                    <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 font-semibold">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured image with overlay */}
        <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 group">
          <img
            src={growthVisual}
            alt="Business Growth"
            className="w-full h-full object-cover brightness-50 group-hover:brightness-60 group-hover:scale-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-end justify-start p-8">
            <div className="space-y-3">
              <h3 className="text-4xl font-black text-white">
                Ready to <span className="text-blue-400">scale?</span>
              </h3>
              <p className="text-white/70 text-lg max-w-lg">
                Our strategic approach combines innovation with proven methodologies to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
