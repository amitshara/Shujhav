/**
 * Type declarations for Shujhav AI Landing Page
 */

export interface PresetCase {
  id: string;
  category: string;
  title: string;
  description: string;
  problemText: string;
  relevantLaw: string;
  legalRights: string[];
  actionSteps: {
    title: string;
    description: string;
    authority?: string;
  }[];
  noticeTemplate: {
    subject: string;
    body: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  content: string;
  caseType: string;
}

export interface PricingPlan {
  name: string;
  price: {
    monthly: number;
    annual: number;
  };
  period: string;
  desc: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CitizenRight {
  id: string;
  category: 'Consumer' | 'Tenant' | 'Employee' | 'Cyber' | 'General';
  title: string;
  act: string;
  summary: string;
  fullRightText: string;
}
