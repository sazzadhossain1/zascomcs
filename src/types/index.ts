export interface NavItem {
  label: string;
  href: string;
  subItems?: {
    label: string;
    href: string;
    subItems?: {
      label: string;
      href: string;
    }[];
  }[];
}

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  type?: string;
  tag?: string;
}

export interface City {
  id: string;
  name: string;
  listings: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  author: string;
  commentsCount?: number;
  image: string;
  category: string;
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
