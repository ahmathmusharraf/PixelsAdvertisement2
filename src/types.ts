export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  items: string[];
  startingPrice?: string;
  turnaroundTime?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Signage' | 'Printing' | 'Vehicle Branding' | 'LED Display' | 'Exhibition';
  client: string;
  location: string;
  completionYear: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'Leadership' | 'Creative Team' | 'Production Team' | 'Operations & HR' | 'Finance' | 'Digital Marketing' | string;
  bio: string;
  photo: string;
  linkedin?: string;
  email?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  companyName: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  projectType: string;
  date: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logoUrl?: string;
  category: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface LiveOrder {
  orderId: string;
  clientName: string;
  projectType: string;
  startDate: string;
  estimatedDelivery: string;
  currentStepIndex: number; // 0 to 4
  steps: {
    title: string;
    description: string;
    completed: boolean;
    date?: string;
  }[];
}

export interface QuoteCalculationInput {
  serviceType: string;
  subCategory: string;
  widthFt?: number;
  heightFt?: number;
  quantity: number;
  materialOption: string;
  installationNeeded: boolean;
  urgency: 'Standard' | 'Express' | 'Urgent';
}
