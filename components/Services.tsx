
import React from 'react';
import { ServiceCardProps } from '../types';
import { useLanguage } from '../context/LanguageContext';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, features, linkText, variant = 'small', className = '', id }) => {
  const isLarge = variant === 'large';
  const isAccent = variant === 'accent';
  const { t } = useLanguage();

  if (isAccent) {
    return (
      <div className={`bg-primary text-white rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-10 shadow-2xl shadow-primary/20 ${className}`}>
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-6 font-display">{title}</h3>
          <div className="grid grid-cols-2 gap-6">
            {features?.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="material-icons text-secondary text-xl">verified</span>
                <span className="text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0 bg-white/10 p-8 rounded-3xl border border-white/20 text-center min-w-[180px]">
          <div className="text-6xl font-display font-bold text-secondary">6+</div>
          <div className="text-[12px] uppercase tracking-widest font-bold opacity-80 mt-2">{t('services_years_exp')}</div>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className={`scroll-mt-32 bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-lg transition-all group overflow-hidden relative ${isLarge ? 'md:col-span-8' : 'md:col-span-4'} ${className}`}>
      {isLarge && (
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full -mr-24 -mt-24 group-hover:bg-primary/10 transition-colors"></div>
      )}
      <div className="relative z-10 flex flex-col h-full">
        <span className={`material-icons text-6xl mb-8 transition-colors ${isLarge ? 'text-primary dark:text-secondary' : 'text-technical group-hover:text-primary dark:group-hover:text-secondary'}`}>
          {icon}
        </span>
        <h3 className="text-3xl font-bold mb-6 font-display dark:text-white">{title}</h3>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-md leading-relaxed">
          {description}
        </p>
        
        {features && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-10 text-base font-medium text-slate-500 dark:text-slate-400">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="material-icons text-green-500 text-lg">check_circle</span> {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto">
          <a href="#cotizacion" className="inline-flex items-center gap-3 text-primary dark:text-secondary font-bold text-lg hover:gap-4 transition-all">
            {linkText || t('services_more')} <span className="material-icons text-2xl">{isLarge ? 'arrow_forward' : 'add'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div id="industrial-anchor" className="scroll-mt-32">
      <section className="py-32 bg-background-light dark:bg-background-dark scroll-mt-32" id="servicios">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary dark:text-white mb-6">{t('services_section_title')}</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              {t('services_section_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <ServiceCard 
              id="industrial"
              variant="large"
              title={t('services_industrial_title')}
              icon="factory"
              description={t('services_industrial_desc')}
              features={t('services_industrial_features')}
              linkText={t('services_industrial_link')}
            />
            
            <ServiceCard 
              title={t('services_commercial_title')}
              icon="corporate_fare"
              description={t('services_commercial_desc')}
            />

            <ServiceCard 
              className="md:col-span-5"
              title={t('services_residential_title')}
              icon="domain"
              description={t('services_residential_desc')}
            />

            <ServiceCard 
              variant="accent"
              className="md:col-span-7"
              title={t('services_why_sim_title')}
              icon="verified"
              description=""
              features={t('services_why_sim_features')}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
