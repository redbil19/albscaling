import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.png';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpeg';
import portfolio5 from '@/assets/DF74C9C6-9436-4C85-9B20-69F855462A79.png';
import portfolio6 from '@/assets/AD463514-81BF-44F1-B5AE-FA34B358203C.png';

export const Portfolio = () => {
  const { t } = useLanguage();

  const projectsConfig = [
    {
      key: 'motiv',
      url: 'https://motiv-reklama.vercel.app',
      image: portfolio1,
    },
    {
      key: 'tenda',
      url: 'https://tendadiellitani.al',
      image: portfolio2,
    },
    {
      key: 'spekter',
      url: 'https://spekterreklama.vercel.app',
      image: portfolio3,
    },
    {
      key: 'blueprint',
      url: 'https://www.blueprintrealestate.al/',
      image: portfolio4,
    },
    {
      key: 'fitness',
      url: 'https://fitnessbodystyle.al',
      image: portfolio5,
    },
    {
      key: 'kbv',
      url: 'https://kbvllaznia.al',
      image: portfolio6,
    },
  ];

  const projects = projectsConfig.map((config) => ({
    title: t.portfolio.projects[config.key as keyof typeof t.portfolio.projects].title,
    description: t.portfolio.projects[config.key as keyof typeof t.portfolio.projects].description,
    url: config.url,
    image: config.image,
  }));

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-5 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Work We're
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Proud Of
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* All Projects - Uniform 3 column grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl h-72 cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover brightness-50 group-hover:brightness-70 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-white/80 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <button
                  onClick={() => window.open(project.url, '_blank')}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold w-fit opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  View Project
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};