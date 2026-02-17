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
    <section id="services" className="py-24 relative overflow-hidden bg-white">
      {/* Subtle gradient overlays matching hero/portfolio theme */}
      <div className="absolute inset-0 z-0">
        {/* Soft blue accent top right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        
        {/* Soft cyan accent bottom left */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            What We
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Offer
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid - Clean modern cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-400 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="inline-flex p-4 rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-700 transition-colors duration-300 font-semibold pt-4">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured image with overlay */}
        <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 group shadow-2xl">
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
