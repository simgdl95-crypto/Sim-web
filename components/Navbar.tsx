
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Persistencia del modo oscuro mediante localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('sim-theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto para aplicar el tema al documento y guardarlo
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('sim-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('sim-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navLinks = [
    { label: t('nav_services'), href: "#servicios" },
    { label: t('nav_about'), href: "#nosotros" },
    { label: t('nav_industrial'), href: "#industrial" },
    { label: t('nav_contact'), href: "#contacto" },
  ];

  const handleMobileNav = (href: string) => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-background-dark/95 backdrop-blur-md shadow-md h-24' 
        : 'bg-white dark:bg-background-dark h-28'
    } border-b border-slate-200 dark:border-slate-800`}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-6 hover:opacity-90 transition-opacity">
          <div className="w-32 h-32 flex items-center justify-center">
             <img 
              alt="SIM Logo" 
              className="h-full w-full object-contain" 
              src="https://i.ibb.co/DgRjLjp4/Logo-SIM.png"
            />
          </div>
          <div className="hidden sm:block">
            <span className="block font-display font-extrabold text-3xl leading-none text-primary dark:text-white">SIM</span>
            <span className="text-[12px] uppercase tracking-widest text-technical dark:text-slate-400 font-bold">Mantenimiento Integral</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 font-semibold text-base">
          {navLinks.map(link => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 rounded-full p-1 border border-slate-200 dark:border-slate-700">
            <button 
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                language === 'es' 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}
            >
              ES
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                language === 'en' 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}
            >
              EN
            </button>
          </div>
          
          <button 
            onClick={toggleDarkMode}
            aria-label="Alternar modo oscuro"
            className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
          >
            <span className="material-icons text-2xl">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>

          <a 
            href="#cotizacion" 
            className="hidden lg:block bg-primary text-white px-8 py-3 rounded-full text-base font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            {t('nav_quote_btn')}
          </a>

          <button 
            className="md:hidden p-2 text-slate-600 dark:text-slate-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menú móvil"
          >
            <span className="material-icons text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 p-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-6">
            {navLinks.map(link => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-slate-700 dark:text-slate-200 font-semibold text-lg py-2 border-b border-slate-50 dark:border-slate-800"
                onClick={() => handleMobileNav(link.href)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
              <button 
                onClick={() => {setLanguage('es'); setIsMobileMenuOpen(false);}} 
                className={`px-4 py-2 rounded-xl font-bold transition-all ${language === 'es' ? 'bg-primary/10 text-primary' : 'text-slate-400'}`}
              >
                ES
              </button>
              <button 
                onClick={() => {setLanguage('en'); setIsMobileMenuOpen(false);}} 
                className={`px-4 py-2 rounded-xl font-bold transition-all ${language === 'en' ? 'bg-primary/10 text-primary' : 'text-slate-400'}`}
              >
                EN
              </button>
            </div>
            <a 
              href="#cotizacion" 
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-center text-lg shadow-lg shadow-primary/20"
              onClick={() => handleMobileNav('#cotizacion')}
            >
              {t('nav_quote_btn')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
