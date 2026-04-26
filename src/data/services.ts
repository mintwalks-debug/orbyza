import { Search, TrendingUp, Share2, FileText, Mail, Monitor } from 'lucide-react';

export const services = [
  { 
    id: 'seo', 
    label: 'SEO Services', 
    description: 'Optimize your website for organic search engine rankings.', 
    icon: Search,
    image: '/service_seo.png'
  },
  { 
    id: 'sem', 
    label: 'SEM / Google Ads', 
    description: 'Drive instant traffic with expert-managed pay-per-click campaigns.', 
    icon: TrendingUp,
    image: '/service_sem.png'
  },
  { 
    id: 'social-media', 
    label: 'Social Media Marketing', 
    description: 'Grow and engage your audience on popular social platforms.', 
    icon: Share2,
    image: '/service_social.png'
  },
  { 
    id: 'content-marketing', 
    label: 'Content Marketing', 
    description: 'Create and distribute valuable content to your target market.', 
    icon: FileText,
    image: '/service_content.png'
  },
  { 
    id: 'email-marketing', 
    label: 'Email Marketing', 
    description: 'Convert leads into customers with personalized email campaigns.', 
    icon: Mail,
    image: '/service_email.png'
  },
  { 
    id: 'web-design', 
    label: 'Web Design', 
    description: 'Responsive, modern, and user-friendly websites designed for performance.', 
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426'
  },
];
