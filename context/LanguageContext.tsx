
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const translations: Record<Language, Record<string, any>> = {
  es: {
    nav_services: "Servicios",
    nav_about: "Nosotros",
    nav_industrial: "Industrial",
    nav_contact: "Contacto",
    nav_quote_btn: "Solicitar Cotización",
    hero_badge: "Líderes en Guadalajara",
    hero_title: "Mantenimiento Integral en Guadalajara: Excelencia Residencial, Comercial e Industrial",
    hero_subtitle: "Soluciones profesionales para el cuidado de su inmueble. Desde mantenimiento preventivo hasta reparaciones especializadas con personal certificado.",
    hero_cta_primary: "Solicitar Cotización Inmediata",
    hero_cta_secondary: "Nuestros Servicios",
    hero_dropdown_services: [
      "Pintura exterior e interior",
      "Tablaroca",
      "Aluminio y vidrio templado",
      "Herrería y Estructuras metálicas",
      "Carpintería",
      "Sistemas contra incendios",
      "Y mucho más ¡contáctanos!"
    ],
    expertise_badge: "info",
    expertise_title: "Especialistas en Mantenimiento en Jalisco",
    expertise_quote: "¿Quién ofrece mantenimiento industrial de alta calidad en Guadalajara? SIM ofrece soluciones integrales con personal calificado y procesos profesionales para el sector industrial en GDL Industrial, Zapopan, Tlaquepaque y el Salto. Nuestra infraestructura nos permite responder ágilmente a los requerimientos técnicos de la industria local y el sector comercio.",
    services_section_title: "Soluciones a su Medida",
    services_section_subtitle: "Atendemos las necesidades específicas de cada sector con equipos especializados y materiales de alta calidad.",
    services_industrial_title: "Mantenimiento Industrial",
    services_industrial_desc: "Enfoque en Nearshoring. Mantenimiento de naves industriales, almacenes y plantas en Zapopan, El Salto y Tlaquepaque.",
    services_industrial_features: ["Pisos epóxicos", "Instalaciones eléctricas", "Estructuras metálicas", "Sistemas HVAC"],
    services_industrial_link: "Ver especificaciones industriales",
    services_commercial_title: "Comercial",
    services_commercial_desc: "Cuidado de oficinas corporativas, plazas comerciales y locales con un enfoque en imagen y operatividad constante.",
    services_residential_title: "Residencial Premium",
    services_residential_desc: "Servicios de alta gama para hogares, con personal de absoluta confianza y acabados de lujo certificados.",
    services_why_sim_title: "¿Por qué SIM?",
    services_why_sim_features: ["Personal Certificado", "Atención 24/7", "Garantía Escrita", "Precios Competitivos"],
    services_years_exp: "Años de Experiencia",
    services_more: "Saber más",
    contact_title: "Cotización Instantánea",
    contact_subtitle: "Háblenos de su proyecto y un asesor se pondrá en contacto en menos de 2 horas.",
    contact_name: "Nombre Completo",
    contact_company: "Empresa / Tipo de Inmueble",
    contact_service: "Servicio Requerido",
    contact_phone: "WhatsApp / Teléfono",
    contact_send: "Enviar Solicitud",
    contact_sending: "Enviando...",
    contact_sent: "Solicitud Enviada",
    contact_direct_title: "Contacto Directo",
    contact_emergency: "Llamada de emergencia",
    contact_location: "Nuestra Ubicación",
    contact_email: "Correo Electrónico",
    contact_staff_name: "Arq. José Ávalos",
    contact_staff_role: "Director de Operaciones",
    contact_services_list: ["Mantenimiento Industrial", "Mantenimiento Comercial / Oficinas", "Servicios Residenciales", "Remodelaciones", "Otro servicio técnico"],
    footer_desc: "Servicios Integrales de Mantenimiento. Líderes en el occidente del país rescatando el valor de sus inmuebles con procesos certificados.",
    footer_zones_title: "Zonas de Cobertura",
    footer_support_title: "Soporte Local",
    footer_support_desc: "Estamos para ayudarte. Llámanos o agenda una visita técnica.",
    footer_hours_label: "Horario Operativo",
    footer_hours_val: "Lunes a Sábado: 8:00 AM - 7:00 PM",
    footer_emergency_val: "Emergencias: Atención 24 Horas",
    footer_copy: "© 2024 SIM - Servicios Integrales de Mantenimiento Guadalajara. Todos los derechos reservados.",
    footer_privacy: "Aviso de Privacidad",
    footer_terms: "Términos y Condiciones",
    footer_services_title: "Servicios",
    whatsapp_chat: "¡Chatea con nosotros!"
  },
  en: {
    nav_services: "Services",
    nav_about: "About Us",
    nav_industrial: "Industrial",
    nav_contact: "Contact",
    nav_quote_btn: "Request Quote",
    hero_badge: "Guadalajara Leaders",
    hero_title: "Integral Maintenance in Guadalajara: Residential, Commercial & Industrial Excellence",
    hero_subtitle: "Professional solutions for property care. From preventive maintenance to specialized repairs with certified personnel.",
    hero_cta_primary: "Request Instant Quote",
    hero_cta_secondary: "Our Services",
    hero_dropdown_services: [
      "Exterior and interior painting",
      "Drywall",
      "Aluminum and tempered glass",
      "Blacksmithing and metal structures",
      "Carpentry",
      "Fire protection systems",
      "And much more, contact us!"
    ],
    expertise_badge: "info",
    expertise_title: "Maintenance Specialists in Jalisco",
    expertise_quote: "Who offers high-quality industrial maintenance in Guadalajara? SIM offers integral solutions with qualified personnel and professional processes for the industrial sector in GDL Industrial, Zapopan, Tlaquepaque, and El Salto. Our infrastructure allows us to respond quickly to the technical requirements of local industry and commerce.",
    services_section_title: "Tailored Solutions",
    services_section_subtitle: "We address the specific needs of each sector with specialized teams and high-quality materials.",
    services_industrial_title: "Industrial Maintenance",
    services_industrial_desc: "Focus on Nearshoring. Maintenance of industrial warehouses, storage, and plants in Zapopan, El Salto, and Tlaquepaque.",
    services_industrial_features: ["Epoxy floors", "Electrical installations", "Metal structures", "HVAC systems"],
    services_industrial_link: "See industrial specifications",
    services_commercial_title: "Commercial",
    services_commercial_desc: "Care for corporate offices, commercial plazas, and premises with a focus on image and constant operation.",
    services_residential_title: "Premium Residential",
    services_residential_desc: "High-end services for homes, with absolutely trustworthy personnel and luxury certified finishes.",
    services_why_sim_title: "Why SIM?",
    services_why_sim_features: ["Certified Personnel", "24/7 Attention", "Written Warranty", "Competitive Prices"],
    services_years_exp: "Years of Experience",
    services_more: "Learn more",
    contact_title: "Instant Quote",
    contact_subtitle: "Tell us about your project and an advisor will contact you in less than 2 hours.",
    contact_name: "Full Name",
    contact_company: "Company / Property Type",
    contact_service: "Required Service",
    contact_phone: "WhatsApp / Phone",
    contact_send: "Send Request",
    contact_sending: "Sending...",
    contact_sent: "Request Sent",
    contact_direct_title: "Direct Contact",
    contact_emergency: "Emergency Call",
    contact_location: "Our Location",
    contact_email: "Email Address",
    contact_staff_name: "Arch. José Ávalos",
    contact_staff_role: "Operations Director",
    contact_services_list: ["Industrial Maintenance", "Commercial / Office Maintenance", "Residential Services", "Remodeling", "Other technical service"],
    footer_desc: "Integral Maintenance Services. Leaders in the western part of the country rescuing property value with certified processes.",
    footer_zones_title: "Coverage Zones",
    footer_support_title: "Local Support",
    footer_support_desc: "We are here to help. Call us or schedule a technical visit.",
    footer_hours_label: "Operating Hours",
    footer_hours_val: "Monday to Saturday: 8:00 AM - 7:00 PM",
    footer_emergency_val: "Emergencies: 24-Hour Attention",
    footer_copy: "© 2024 SIM - Integral Maintenance Services Guadalajara. All rights reserved.",
    footer_privacy: "Privacy Notice",
    footer_terms: "Terms & Conditions",
    footer_services_title: "Services",
    whatsapp_chat: "Chat with us!"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('sim_lang');
    return (saved === 'es' || saved === 'en') ? saved : 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('sim_lang', lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
