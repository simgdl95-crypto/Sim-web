
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

/**
 * CONFIGURACIÓN DE ENVÍO FINAL
 * ID de Formspree detectado: xreakkrw
 */
const FORMSPREE_ID = 'xreakkrw'; 

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    service: t('contact_services_list')[0],
    phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación de teléfono (mínimo 10 dígitos sugeridos para México)
    if (formData.phone.replace(/\D/g, '').length < 10) {
      setError("Por favor, introduce un número de WhatsApp de 10 dígitos.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // --- ENVÍO REAL A FORMSPREE ---
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          nombre: formData.name,
          empresa: formData.company,
          servicio: formData.service,
          telefono: formData.phone,
          _subject: `NUEVA SOLICITUD SIM: ${formData.service} de ${formData.name}`
        })
      });

      if (!response.ok) {
        throw new Error('Error en el servidor de Formspree');
      }

      // Proceso de éxito
      setIsSent(true);
      setFormData({
        name: '',
        company: '',
        service: t('contact_services_list')[0],
        phone: ''
      });
      
      // El mensaje de éxito desaparece después de 8 segundos
      setTimeout(() => setIsSent(false), 8000);

    } catch (err) {
      console.error("Error al enviar el formulario:", err);
      setError("Lo sentimos, hubo un problema al enviar el formulario. Por favor, intenta de nuevo o contáctanos por WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark scroll-mt-28" id="cotizacion">
      <div className="container mx-auto px-4" id="contacto">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100 dark:border-slate-800">
          
          {/* Form Side */}
          <div className="lg:w-1/2 p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800">
            <h2 className="text-3xl font-display font-bold mb-2 dark:text-white">{t('contact_title')}</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              {t('contact_subtitle')}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{t('contact_name')}</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white disabled:opacity-50" 
                    placeholder="Nombre y Apellidos" 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{t('contact_company')}</label>
                  <input 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white disabled:opacity-50" 
                    placeholder="Empresa o Inmueble" 
                    type="text"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{t('contact_service')}</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white disabled:opacity-50 appearance-none"
                >
                  {t('contact_services_list').map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{t('contact_phone')}</label>
                <input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white disabled:opacity-50" 
                  placeholder="WhatsApp (10 dígitos)" 
                  type="tel"
                />
              </div>

              {error && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium border border-red-100 dark:border-red-900/30 flex items-center gap-3 animate-in fade-in slide-in-from-left-2">
                  <span className="material-icons">error_outline</span>
                  {error}
                </div>
              )}

              <button 
                disabled={isSubmitting || isSent}
                className={`w-full font-bold py-5 rounded-xl transition-all shadow-xl flex items-center justify-center gap-3 text-lg ${
                  isSent 
                    ? 'bg-green-500 text-white cursor-default' 
                    : 'bg-primary text-white hover:bg-primary/90 active:scale-95 shadow-primary/20'
                } disabled:opacity-70`}
                type="submit"
              >
                {isSent ? (
                  <><span className="material-icons">check_circle</span> {t('contact_sent')}</>
                ) : (
                  <>
                    <span className={`material-icons ${isSubmitting ? 'animate-spin' : ''}`}>
                      {isSubmitting ? 'sync' : 'send'}
                    </span> 
                    {isSubmitting ? t('contact_sending') : t('contact_send')}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:w-1/2 bg-slate-50 dark:bg-slate-800/50 p-8 md:p-16 relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-10 text-primary dark:text-white font-display">{t('contact_direct_title')}</h3>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary dark:text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-icons text-3xl">call</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-extrabold tracking-widest mb-1">{t('contact_emergency')}</p>
                    <a href="tel:+523314347673" className="text-2xl font-bold text-primary dark:text-white hover:text-secondary transition-colors">+52 33 1434 7673</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary dark:text-secondary">
                    <span className="material-icons text-3xl">location_on</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-extrabold tracking-widest mb-1">{t('contact_location')}</p>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      Bilbao 2609, Col. Santa Elena Alcalde,<br/>Guadalajara, Jalisco
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary dark:text-secondary">
                    <span className="material-icons text-3xl">email</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-extrabold tracking-widest mb-1">{t('contact_email')}</p>
                    <a href="mailto:simgdl95@gmail.com" className="text-slate-700 dark:text-slate-300 font-medium hover:text-primary transition-colors">simgdl95@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta del Responsable */}
            <div className="mt-14 relative z-10 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 group hover:shadow-2xl transition-all">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-200 shadow-inner ring-4 ring-primary/5">
                  <img 
                    alt={t('contact_staff_name')} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src="https://i.ibb.co/pjQb4pr3/Josearq.jpg"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg dark:text-white">{t('contact_staff_name')}</p>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{t('contact_staff_role')}</p>
                </div>
              </div>
            </div>

            {/* Icono decorativo de fondo */}
            <div className="absolute -bottom-20 -right-20 opacity-[0.03] dark:opacity-[0.05] text-primary dark:text-white pointer-events-none rotate-12">
              <span className="material-icons text-[400px]">construction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
