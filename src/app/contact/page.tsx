import { Metadata } from 'next';
import ContactClient from '@/components/contact/ContactClient';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact Orbyza | Elite Marketing Hub Jaipur',
  description: 'Dismantle the competition. Partner with Jaipur elite growth engineers for absolute market dominance. Inquire for a free performance audit and scale your ROI.',
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: 'Contact Orbyza | Deploy Your Growth Protocol',
    description: 'Stop guessing. Start winning. Partner with Jaipur elite growth engineers for absolute market dominance.',
    url: `${siteConfig.url}/contact`,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Orbyza | Elite Marketing Hub Jaipur',
    description: 'Partner with Jaipur elite growth engineers for absolute market dominance.',
    images: [`${siteConfig.url}/og-image.jpg`],
  }
};

export default function ContactPage() {
  return <ContactClient />;
}
