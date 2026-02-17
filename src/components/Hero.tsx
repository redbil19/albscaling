import { ArrowRight, Zap, TrendingUp, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/50 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center py-20">
            {/* Left side - Text & CTA */}
            <div className="space-y-8">
              {/* Main headline with gradient */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-black leading-tight bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text text-transparent">
                  {t.hero.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl font-medium">
                  {t.hero.subtitle}
                </p>
              </div>

              {/* Stats showcase - Elegant cards */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="group p-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-black text-white">50+</div>
                  <p className="text-sm text-white/90 font-semibold mt-2">{t.hero.stats.projects}</p>
                </div>
                <div className="group p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-black text-white">10x</div>
                  <p className="text-sm text-white/90 font-semibold mt-2">{t.hero.stats.growth}</p>
                </div>
              </div>

              {/* CTA Buttons - Enhanced design */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                {/* Primary Button - Bold gradient */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group relative px-8 py-4 font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center gap-2 text-white">
                    <span>{t.hero.cta}</span>
                  </div>
                </button>

                {/* Secondary Button - Outlined glass effect */}
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="group relative px-8 py-4 font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <div className="absolute inset-0 border-2 border-white/60 rounded-xl group-hover:border-white transition-colors duration-300" />
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center gap-2 text-white group-hover:text-white transition-colors duration-300">
                    <span>See Our Work</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </div>

            {/* Right side - Animated benefits cards */}
            <div className="relative hidden md:block">
              <div className="space-y-6">
                {/* Card 1 */}
                <div className="group p-7 rounded-2xl bg-transparent border-2 border-white/30 hover:border-white/60 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/40 transition-colors">
                      <Zap className="w-6 h-6 text-blue-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1 text-lg">{t.hero.benefits.growth.title}</h3>
                      <p className="text-sm text-white/80">{t.hero.benefits.growth.description}</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group p-7 rounded-2xl bg-transparent border-2 border-white/30 hover:border-white/60 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ml-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-indigo-500/20 group-hover:bg-indigo-500/40 transition-colors">
                      <TrendingUp className="w-6 h-6 text-indigo-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1 text-lg">{t.hero.benefits.dataDriven.title}</h3>
                      <p className="text-sm text-white/80">{t.hero.benefits.dataDriven.description}</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group p-7 rounded-2xl bg-transparent border-2 border-white/30 hover:border-white/60 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-cyan-500/20 group-hover:bg-cyan-500/40 transition-colors">
                      <Lightbulb className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1 text-lg">{t.hero.benefits.expertise.title}</h3>
                      <p className="text-sm text-white/80">{t.hero.benefits.expertise.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};