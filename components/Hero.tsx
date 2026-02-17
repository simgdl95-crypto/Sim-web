
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="hero-gradient relative py-24 md:py-48 text-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl">
          <span className="inline-block px-6 py-2 rounded-full bg-secondary text-primary font-bold text-sm mb-8 uppercase tracking-wider shadow-lg">
            {t('hero_badge')}
          </span>
          
          <a href="#nosotros" className="block group cursor-pointer">
            <h1 className="text-5xl md:text-8xl font-display font-extrabold leading-[1.05] mb-8 drop-shadow-md group-hover:text-secondary/90 transition-colors">
              {t('hero_title').split(':').map((part: string, idx: number) => 
                idx === 1 ? (
                  <span key={idx}>
                    <span className="text-secondary">{part.split(',')[0]}</span>
                    {part.substring(part.split(',')[0].length)}
                  </span>
                ) : part
              )}
            </h1>
          </a>

          <p className="text-xl md:text-3xl text-slate-100 mb-12 leading-relaxed font-light max-w-4xl">
            {t('hero_subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 relative items-start">
            <a 
              href="#cotizacion" 
              className="w-full sm:w-auto bg-secondary text-primary px-10 py-5 rounded-xl font-bold text-xl text-center hover:scale-105 transition-transform shadow-2xl shadow-secondary/30"
            >
              {t('hero_cta_primary')}
            </a>

            {/* Dropdown Button Container */}
            <div className="relative w-full sm:w-auto" ref={dropdownRef}>
              <button 
                onClick={toggleDropdown}
                className={`w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 px-10 py-5 rounded-xl font-bold text-xl text-center transition-all ${
                  isDropdownOpen ? 'bg-white/30 border-secondary ring-2 ring-secondary/50' : 'hover:bg-white/20'
                }`}
              >
                {t('hero_cta_secondary')}
                <span className={`material-icons transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>

              {/* Services Dropdown Menu - Optimizado para visibilidad total */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-4 w-full sm:min-w-[380px] bg-white dark:bg-slate-900 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-slate-800 overflow-hidden z-[100] animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="py-3">
                    {t('hero_dropdown_services').map((service: string, index: number) => (
                      <a 
                        key={index}
                        href="#cotizacion"
                        onClick={() => setIsDropdownOpen(false)}
                        className={`flex items-center gap-4 px-8 py-5 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group ${
                          index !== t('hero_dropdown_services').length - 1 ? 'border-b border-slate-50 dark:border-slate-800' : ''
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/5 dark:bg-secondary/10 flex items-center justify-center group-hover:bg-primary dark:group-hover:bg-secondary transition-colors">
                          <span className="material-icons text-primary dark:text-secondary group-hover:text-white text-sm">
                            chevron_right
                          </span>
                        </div>
                        <span className="text-slate-800 dark:text-slate-100 font-bold text-lg leading-tight">
                          {service}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual embellishment con z-index corregido */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent hidden lg:block z-0"></div>
    </section>
  );
};

export default Hero;
