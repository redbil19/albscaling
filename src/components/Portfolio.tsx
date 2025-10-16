import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.png';
import portfolio3 from '@/assets/portfolio-3.jpg';

export const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'Motiv Reklama',
      description: 'Professional advertising and creative marketing solutions',
      url: 'https://motiv-reklama.vercel.app',
      image: portfolio1,
    },
    {
      title: 'Tenda Dielli Tani',
      description: 'Premium tent and outdoor solutions since 2001',
      url: 'https://tendadiellitani.al',
      image: portfolio2,
    },
    {
      title: 'Spekter Reklama',
      description: 'Full-spectrum advertising and branding services',
      url: 'https://spekterreklama.vercel.app',
      image: portfolio3,
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.portfolio.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in h-[400px]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/80 text-sm">{project.description}</p>
                </div>
                
                <Button
                  variant="hero"
                  size="sm"
                  onClick={() => window.open(project.url, '_blank')}
                  className="w-full group/btn"
                >
                  {t.portfolio.viewWebsite}
                  <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
