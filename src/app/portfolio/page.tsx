import { Metadata } from 'next';
import PortfolioClient from '@/components/portfolio/PortfolioClient';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Portfolio & Proven Trajectories | Elite Digital Growth Orbyza Jaipur',
  description: 'Explore the high-stakes portfolio of Orbyza, Jaipur leading digital performance agency. View our +420% ROI case studies across SEO, SEM, and Next.js Web Design.',
  alternates: {
    canonical: `${siteConfig.url}/portfolio`,
  },
  openGraph: {
    title: 'Digital Marketing Portfolio & Case Studies | Orbyza Jaipur',
    description: 'Proven trajectories in digital excellence. View our architectural website systems and impact-driven case studies for brands in Rajasthan.',
    url: `${siteConfig.url}/portfolio`,
    images: [`${siteConfig.url}/og-image.jpg`],
  }
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
