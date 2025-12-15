import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';
import logo from '@/assets/logo.png';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/65 via-black/50 to-background/95" />
      <div className="absolute inset-0 z-0 [background:radial-gradient(55%_45%_at_50%_35%,rgba(120,119,198,0.22),transparent_60%)]" />

      {/* Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.08]">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* unified vertical stack */}
          <div className="flex flex-col items-center">
            {/* Logo – closer + lifted */}
            <div className="relative mb-4 md:mb-5 -mt-6 md:-mt-8">
              <div className="absolute inset-0 -m-12 bg-primary/20 blur-3xl rounded-full -z-10" />
              <img
                src={logo}
                alt="AlbScaling"
                className="
                  w-[260px] md:w-[340px] lg:w-[400px]
                  h-auto
                  opacity-90
                  drop-shadow-[0_16px_36px_rgba(0,0,0,0.45)]
                "
              />
            </div>

            {/* Title – tight to logo */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-4">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10">
              {t.hero.subtitle}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="group"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};