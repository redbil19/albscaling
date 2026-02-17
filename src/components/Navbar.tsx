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
    const onScroll = () => setIsScrolled(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const linkClass = isScrolled
    ? 'text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors'
    : 'text-sm font-semibold text-white hover:text-blue-200 transition-colors';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Background */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg'
            : 'bg-black/30 backdrop-blur-lg border-b border-white/10'
        }`}
      />

      <div className="relative container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection('hero')} className="relative group flex items-center gap-2">
            <img
              src={logo}
              alt="AlbScaling"
              className={`h-12 md:h-14 w-auto transition-all duration-300 ${
                isScrolled 
                  ? 'brightness-100' 
                  : 'brightness-0 invert'
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
              className={`font-semibold rounded-lg px-6 transition-all duration-300 shadow-lg hover:shadow-xl ${
                isScrolled
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
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
              className={isScrolled ? 'text-gray-800' : 'text-white'}
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
                ? 'bg-white/95 backdrop-blur-xl'
                : 'bg-black/50 backdrop-blur-xl'
            }`}
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('hero')}
                className={`font-medium hover:text-blue-400 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`font-medium hover:text-blue-400 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className={`font-medium hover:text-blue-400 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {t.nav.portfolio}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`font-medium hover:text-blue-400 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {t.nav.contact}
              </button>

              <Button
                size="sm"
                className={`mt-2 font-semibold w-full ${
                  isScrolled
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
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