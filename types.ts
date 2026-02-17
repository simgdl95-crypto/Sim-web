
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features?: string[];
  linkText?: string;
  variant?: 'large' | 'small' | 'accent';
  className?: string;
  // Added optional id property to fix TS error in components/Services.tsx
  id?: string;
}

export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
