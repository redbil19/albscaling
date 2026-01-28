import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const linkClass = isScrolled
    ? 'text-sm font-medium text-gray-900/80 hover:text-gray-900 transition-colors'
    : 'text-sm font-medium text-white/85 hover:text-white transition-colors';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Background */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-xl border-b border-white/20'
            : 'bg-transparent'
        }`}
      />

      <div className="relative container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection('hero')} className="relative group">
            {!isScrolled && (
              <span className="absolute -inset-3 rounded-xl bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
            <img
              src={logo}
              alt="AlbScaling"
              className={`relative h-12 md:h-14 w-auto transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] ${
                isScrolled ? 'opacity-100 brightness-100 drop-shadow-none' : 'opacity-100 brightness-110'
              }`}
            />
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className={linkClass}>
              {t.nav.home}
            </button>
            <button onClick={() => scrollToSection('services')} className={linkClass}>
              {t.nav.services}
            </button>
            <button onClick={() => scrollToSection('portfolio')} className={linkClass}>
              {t.nav.portfolio}
            </button>
            <button onClick={() => scrollToSection('contact')} className={linkClass}>
              {t.nav.contact}
            </button>

            <LanguageToggle />

            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              {t.nav.contact}
            </Button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className={isScrolled ? 'text-gray-900' : 'text-white'}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden mt-2 rounded-2xl p-4 shadow-xl transition-all ${
              isScrolled
                ? 'bg-white/90 backdrop-blur-xl'
                : 'bg-black/40 backdrop-blur-xl'
            }`}
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('hero')}
                className={isScrolled ? 'text-gray-900 font-medium' : 'text-white font-medium'}
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={isScrolled ? 'text-gray-900 font-medium' : 'text-white font-medium'}
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className={isScrolled ? 'text-gray-900 font-medium' : 'text-white font-medium'}
              >
                {t.nav.portfolio}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={isScrolled ? 'text-gray-900 font-medium' : 'text-white font-medium'}
              >
                {t.nav.contact}
              </button>

              <Button
                size="sm"
                className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full"
                onClick={() => scrollToSection('contact')}
              >
                {t.nav.contact}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};