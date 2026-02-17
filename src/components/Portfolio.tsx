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
    <section id="portfolio" className="py-24 relative overflow-hidden bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white z-0" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            Work We're
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Proud Of
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Projects Grid - Clean 3 column layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl h-80 cursor-pointer transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover brightness-50 group-hover:brightness-75 group-hover:scale-110 transition-all duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-white/80 mb-4 line-clamp-2 group-hover:line-clamp-none">
                  {project.description}
                </p>
                
                {/* View button */}
                <button
                  onClick={() => window.open(project.url, '_blank')}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold w-fit opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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