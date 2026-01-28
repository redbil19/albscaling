import { ArrowRight, Zap, TrendingUp, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950" />
        {/* Animated grid lines */}
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] [background-size:50px_50px] animate-pulse" />
        {/* Gradient blur effect */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-600 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text & CTA */}
            <div className="space-y-8">
              {/* Animated logo */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 w-fit">
                <img src={logo} alt="AlbScaling" className="h-6 w-auto" />
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">Scaling Done Right</span>
              </div>

              {/* Main headline with dynamic styling */}
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-black leading-none text-white">
                  Scale Your
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-pulse">
                    Business Fast
                  </span>
                </h1>
                <p className="text-xl text-white/70 leading-relaxed max-w-xl">
                  {t.hero.subtitle}
                </p>
              </div>

              {/* Stats showcase */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-400">50+</div>
                  <p className="text-sm text-white/60">Projects Scaled</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-400">10x</div>
                  <p className="text-sm text-white/60">Growth Average</p>
                </div>
              </div>

              {/* CTA Buttons - Unique design */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {/* Button 1 - Filled with icon animation */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group relative px-8 py-4 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-blue-600 rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center gap-2">
                    <span>{t.hero.cta}</span>
                    <Zap className="w-5 h-5 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                  </div>
                </button>

                {/* Button 2 - Outline with bottom border animation */}
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="group relative px-8 py-4 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 border-2 border-white/30 rounded-xl group-hover:border-blue-400 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-500 rounded-full" />
                  <div className="relative flex items-center justify-center gap-2">
                    <span>{t.hero.ctaSecondary}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </div>

            {/* Right side - Animated cards */}
            <div className="relative hidden md:block">
              {/* Floating cards with benefits */}
              <div className="space-y-4">
                {/* Card 1 */}
                <div className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-500/20">
                      <Zap className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Rapid Growth</h3>
                      <p className="text-sm text-white/60">See results in weeks, not months</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2" style={{ marginTop: '2rem' }}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-500/20">
                      <TrendingUp className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Data-Driven</h3>
                      <p className="text-sm text-white/60">Strategic approach backed by analytics</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2" style={{ marginTop: '2rem' }}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-500/20">
                      <Lightbulb className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Expert Team</h3>
                      <p className="text-sm text-white/60">Industry veterans with proven track records</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};