import { useState, useEffect } from 'react';
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection('hero')} className="flex items-center gap-3">
            <img
              src={logo}
              alt="AlbScaling"
              className={`h-14 w-auto drop-shadow-xl transition-all duration-300 ${
                isScrolled ? 'brightness-125 contrast-125' : 'brightness-110'
              }`}
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-primary'
              }`}
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-primary'
              }`}
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-primary'
              }`}
            >
              {t.nav.portfolio}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-primary'
              }`}
            >
              {t.nav.contact}
            </button>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden py-4 border-t animate-fade-in ${
              isScrolled ? 'border-gray-200' : 'border-white'
            }`}
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('hero')}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-primary'
                } text-left`}
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-primary'
                } text-left`}
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-primary'
                } text-left`}
              >
                {t.nav.portfolio}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-primary'
                } text-left`}
              >
                {t.nav.contact}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};