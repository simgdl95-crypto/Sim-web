
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Expertise: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-white dark:bg-slate-950 scroll-mt-32" id="nosotros">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[3rem] p-10 md:p-20 relative group overflow-hidden">
          {/* Subtle background icon */}
          <span className="material-icons absolute -bottom-10 -right-10 text-[180px] text-slate-50 dark:text-slate-900 group-hover:scale-110 transition-transform pointer-events-none">engineering</span>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary mb-10 flex items-center gap-4 font-display">
              <span className="material-icons text-4xl">{t('expertise_badge')}</span> {t('expertise_title')}
            </h2>
            <p className="text-2xl md:text-4xl text-slate-700 dark:text-slate-300 leading-relaxed italic font-medium">
              "{t('expertise_quote')}"
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              {['Zapopan', 'Tlaquepaque', 'El Salto', 'GDL Industrial', 'Nearshoring'].map(tag => (
                <span key={tag} className="bg-slate-100 dark:bg-slate-800 px-6 py-2.5 rounded-full text-sm font-bold text-slate-500 tracking-wide uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
