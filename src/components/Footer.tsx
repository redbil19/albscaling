import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="AlbScaling" className="h-8 w-auto" />
            <div>
              <p className="text-sm font-medium">{t.footer.tagline}</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} AlbScaling Branding. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
