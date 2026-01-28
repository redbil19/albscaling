import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.png';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpeg';

export const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'Motiv Reklama',
      description: 'Professional advertising and creative marketing solutions',
      url: 'https://motiv-reklama.vercel.app',
      image: portfolio1,
      featured: true,
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
    {
      title: 'Blueprint Real Estate',
      description: 'Modern real estate solutions with a focus on quality and trust',
      url: 'https://www.blueprintrealestate.al/',
      image: portfolio4,
    },
  ];

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

        {/* Featured Project - Large */}
        <div className="group relative overflow-hidden rounded-3xl mb-12 h-80 md:h-[450px]">
          <img
            src={projects[0].image}
            alt={projects[0].title}
            className="w-full h-full object-cover brightness-50 group-hover:brightness-60 group-hover:scale-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 z-10">
            <div className="flex items-start justify-between">
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/40 mb-4">
                  <span className="text-xs font-bold text-blue-300 uppercase">Featured</span>
                </div>
              </div>
              <button 
                onClick={() => window.open(projects[0].url, '_blank')}
                className="p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 text-white hover:scale-110"
              >
                <ArrowUpRight className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-black text-white">
                {projects[0].title}
              </h3>
              <p className="text-base md:text-lg text-white/80 max-w-xl">
                {projects[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Other Projects - 2 column grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(1).map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl h-64 md:h-80 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover brightness-50 group-hover:brightness-70 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Content on hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-white/80 mb-4">
                  {project.description}
                </p>
                <button
                  onClick={() => window.open(project.url, '_blank')}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold w-fit"
                >
                  View
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};