
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const WhatsAppButton: React.FC = () => {
  const { t } = useLanguage();
  return (
    <a 
      href="https://wa.me/523314347673" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
    >
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.892-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.89-11.891 11.89-2.003 0-3.971-.505-5.717-1.465l-6.277 1.684zm6.757-4.026c1.581.938 3.321 1.433 5.093 1.433 5.461 0 9.904-4.444 9.904-9.905 0-2.647-1.03-5.135-2.903-7.007-1.872-1.871-4.359-2.901-7.001-2.901-5.461 0-9.904 4.444-9.904 9.905 0 2.043.629 4.033 1.82 5.756l-1.018 3.715 3.812-.996zm11.016-10.468c-.301-.151-1.78-.879-2.056-.979-.275-.1-.475-.151-.675.151-.199.301-.775.979-.95 1.179-.175.199-.349.226-.65.076-.301-.151-1.27-.468-2.42-1.493-.894-.798-1.497-1.784-1.672-2.084-.175-.301-.019-.463.131-.613.135-.135.301-.35.45-.525.15-.175.199-.301.301-.501.1-.199.05-.376-.026-.525-.075-.151-.675-1.628-.925-2.228-.244-.588-.491-.508-.675-.518-.175-.008-.375-.01-.575-.01-.2 0-.526.075-.8.376-.275.301-1.051 1.026-1.051 2.503 0 1.478 1.076 2.904 1.226 3.104.151.199 2.118 3.235 5.13 4.537.717.309 1.276.494 1.713.633.72.228 1.374.195 1.891.118.577-.086 1.78-.727 2.031-1.428.25-.7.25-1.302.175-1.428-.076-.126-.276-.199-.576-.35z"></path>
      </svg>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 text-slate-800 dark:text-white px-3 py-1.5 rounded-xl text-sm font-bold shadow-2xl opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all border border-slate-100 dark:border-slate-800 pointer-events-none">
        {t('whatsapp_chat')}
      </span>
    </a>
  );
};

export default WhatsAppButton;
