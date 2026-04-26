import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { caseStudies } from '@/data/caseStudies';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date();

  // Root and Hub routes (Highest Priority)
  const hubs = ['', '/services', '/portfolio', '/blog', '/about', '/contact', '/delhi', '/bangalore', '/usa', '/canada', '/europe', '/courses'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: lastMod,
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.9,
  }));

  // Service Detail routes (High Priority)
  const services = [
    '/services/seo',
    '/services/sem',
    '/services/social-media',
    '/services/content-marketing',
    '/services/email-marketing',
    '/services/web-design',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: lastMod,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Structural & Legal (Lower Priority)
  const institutional = [
    '/team',
    '/pricing',
    '/faq',
    '/testimonials',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: lastMod,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  // Dynamic Portfolio/Case Study Content
  const portfolioRoutes = caseStudies.map((study) => ({
    url: `${siteConfig.url}/portfolio/${study.slug}`,
    lastModified: lastMod,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...hubs, ...services, ...institutional, ...portfolioRoutes];
}
