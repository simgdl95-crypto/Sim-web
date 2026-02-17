
import React from 'react';
import { SERVICES_FOOTER, ZONES_FOOTER } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-20 h-20 flex items-center justify-center">
                 <img 
                  alt="SIM Logo" 
                  className="h-full w-full object-contain" 
                  src="https://i.ibb.co/DgRjLjp4/Logo-SIM.png" 
                />
              </div>
              <span className="font-display font-extrabold text-3xl tracking-tighter">SIM</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              {t('footer_desc')}
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram'].map(platform => (
                <a 
                  key={platform}
                  href="#" 
                  className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all shadow-sm hover:-translate-y-1"
                >
                  <span className="material-icons text-xl">{platform === 'facebook' ? 'facebook' : platform === 'twitter' ? 'alternate_email' : 'camera_alt'}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-bold mb-8 text-lg border-l-4 border-secondary pl-4">{t('footer_services_title')}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {SERVICES_FOOTER.links.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-secondary transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones Column */}
          <div>
            <h4 className="font-display font-bold mb-8 text-lg border-l-4 border-secondary pl-4">{t('footer_zones_title')}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {ZONES_FOOTER.links.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-secondary transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-display font-bold mb-8 text-lg border-l-4 border-secondary pl-4">{t('footer_support_title')}</h4>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">{t('footer_support_desc')}</p>
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-secondary mb-3">
                <span className="material-icons text-sm">watch_later</span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest">{t('footer_hours_label')}</span>
              </div>
              <p className="text-xs font-medium text-slate-300 mb-1">{t('footer_hours_val')}</p>
              <p className="text-xs font-bold text-secondary">{t('footer_emergency_val')}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[11px] font-medium text-center md:text-left">
            {t('footer_copy')}
          </p>
          <div className="flex gap-8 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">{t('footer_privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer_terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
