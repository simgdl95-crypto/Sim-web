
import { FooterSection } from './types';

export const SERVICES_FOOTER: FooterSection = {
  title: "Servicios",
  links: [
    { label: "Electricidad y Fontanería", href: "#servicios" },
    { label: "Pintura e Impermeabilización", href: "#servicios" },
    { label: "Mantenimiento de HVAC", href: "#servicios" },
    { label: "Sistemas Contra Incendio", href: "#industrial" },
    { label: "Albañilería y Acabados", href: "#servicios" },
  ]
};

export const ZONES_FOOTER: FooterSection = {
  title: "Zonas de Cobertura",
  links: [
    { label: "Zapopan (Industrial / Residencial)", href: "#nosotros" },
    { label: "Guadalajara (Centro / Comercial)", href: "#nosotros" },
    { label: "El Salto (Parques Industriales)", href: "#industrial" },
    { label: "Tlaquepaque (Logística)", href: "#industrial" },
    { label: "Tlajomulco", href: "#nosotros" },
  ]
};

export const NAVIGATION_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Industrial", href: "#industrial" },
  { label: "Contacto", href: "#contacto" },
];

export const SERVICE_OPTIONS = [
  "Mantenimiento Industrial",
  "Mantenimiento Comercial / Oficinas",
  "Servicios Residenciales",
  "Remodelaciones",
  "Otro servicio técnico"
];
