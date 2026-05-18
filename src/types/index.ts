// NGO Types

export interface NGOInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  descriptionLong: string;
  founded: string;
  registrationNumber: string;
  location: string;
  mission: string;
  vision: string;
  values: {
    title: string;
    adinkra: string;
    adinkraMeaning: string;
    description: string;
    icon: string;
  }[];
  address: string;
  phone: string;
  email: string;
  businessHours: string;
  bankDetails: {
    accountName: string;
    bankName: string;
    accountNumber: string;
    branch: string;
  };
  momoDetails: {
    number: string;
    name: string;
  };
  socialMedia: {
    instagram: string;
    twitter: string;
    facebook: string;
    tiktok: string;
  };
}

export interface PatientStory {
  id: number;
  name: string;
  age: number;
  condition: string;
  location: string;
  image: string;
  story: string;
  outcome: string;
  treatment: string;
  fundsRaised: number;
  fundsNeeded: number;
  status: 'In Treatment' | 'Recovered' | 'Awaiting Surgery';
  beforeImage?: string;
  afterImage?: string;
  recoveryTimeline?: {
    date: string;
    milestone: string;
  }[];
  donorImpact?: string;
  featured: boolean;
}

export interface Program {
  id: number;
  slug: string;
  title: string;
  category: string;
  type: string;
  description: string;
  fullDescription: string;
  objectives: string[];
  status: string;
  startDate: string;
  endDate?: string;
  location: string;
  image: string;
  gallery: string[];
  featured: boolean;
  impact: {
    patients?: number;
    partners?: number;
    communities?: number;
    reach: string;
  };
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  title: string;
  image: string;
  bio: string;
  expertise: string[];
  education: string[];
  email: string;
  achievements?: string[];
  honors?: string[];
  publications?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  // Legacy properties for backward compatibility
  specializations?: string[];
  phone?: string;
  experience?: string;
  barMemberships?: string[];
  certifications?: string[];
  notableCases?: string[];
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  type: string;
  description: string;
  fullDescription: string;
  objectives: string[];
  status: string;
  startDate: string;
  endDate?: string;
  location: string;
  image: string;
  gallery: string[];
  featured: boolean;
  impact: {
    patients?: number;
    partners?: number;
    communities?: number;
    participants?: number;
    institutions?: number;
    reach: string;
  };
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  description: string;
  image: string;
  registrationLink: string;
  featured: boolean;
}

export interface Partner {
  id: number;
  name: string;
  type: string;
  logo: string;
  description: string;
  website: string;
}

export interface VolunteerOpportunity {
  id: number;
  title: string;
  description: string;
  requirements: string[];
  timeCommitment: string;
}

// Legacy Types (for compatibility)

export interface Lawyer {
  id: number;
  name: string;
  title: string;
  subTitle?: string;
  image: string;
  specializations?: string[];
  experience?: string;
  education: string[];
  barMemberships?: string[];
  certifications?: string[];
  notableCases?: string[];
  biography?: string;
  bio?: string;
  expertise?: string[];
  email: string;
  phone?: string;
}

export interface TrustIndicator {
  yearsExperience: number;
  casesHandled: number;
  clientSatisfaction: number;
  lawyers: number;
  certifications?: string[];
  barMemberships?: string[];
  awards?: string[];
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company?: string;
  isVideo?: boolean;
}

export interface CaseStudy {
  id: number;
  title: string;
  client: string;
  practiceArea: string;
  outcome: string;
  description: string;
  challenges: string[];
  results: string[];
  duration: string;
  value: string;
  featured: boolean;
}

export interface LawyerFormData {
  id: number;
  name: string;
  title: string;
  image: string;
  specializations: string[];
  experience: string;
  education: string[];
  barMemberships: string[];
  certifications: string[];
  notableCases: string[];
  biography: string;
  email: string;
  phone: string;
}

export interface CaseStudyFormData {
  id: number;
  title: string;
  client: string;
  practiceArea: string;
  outcome: string;
  description: string;
  challenges: string[];
  results: string[];
  duration: string;
  value: string;
  featured: boolean;
}

export interface PracticeArea {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  whoItsFor: string;
  howWeHelp: string[];
  primaryLawyerId?: number;
  icon: string;
  image: string;
  clients?: string[];
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  author: string;
  likes: number;
  dislikes: number;
}

export interface FirmInfo {
  name: string;
  tagline: string;
  description: string;
  descriptionLong: string;
  founded: string;
  history: string;
  mission: string;
  vision: string;
  values: { title: string; description: string }[];
  philosophy: string;
  address: string;
  phone: string;
  email: string;
  businessHours: string;
  mapUrl: string;
  clients: string[];
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ConsultationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  practiceArea: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}