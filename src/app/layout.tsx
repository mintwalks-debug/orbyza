import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { OrganizationSchema, LocalBusinessSchema } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import { Outfit } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  title: {
    default: `Orbyza | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),
  authors: [{ name: 'Harshit', url: siteConfig.url }],
  creator: 'Harshit',
  publisher: 'Orbyza',
  formatDetection: {
    email: false,
    address: true,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Jaipur',
    'geo.position': '26.9124;75.7873',
    'ICBM': '26.9124, 75.7873',
    'DC.title': 'Orbyza Digital Marketing Agency Jaipur',
    'generator': 'Next.js',
    'application-name': 'Orbyza Digital Dominance',
  },
  openGraph: {
    title: `Orbyza | #1 Digital Marketing Agency Jaipur`,
    description: 'Expert SEO, SEM, and high-performance Web Design for brands demanding absolute dominance. Based in Jaipur, serving the global market with +420% ROI results.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Orbyza Digital Excellence Jaipur',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Orbyza | #1 Digital Marketing Agency Jaipur`,
    description: 'Engineering digital growth engines in Jaipur. High-performance SEO and SEM for global brands.',
    images: [`${siteConfig.url}/og-image.jpg`],
    creator: '@orbyza',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google328e4ca9a00b3fe7',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const isUnderConstruction = false;

  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body className={`${outfit.className} bg-white text-slate-900 antialiased`}>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <Header />
        <main className="min-h-screen pt-24">{children}</main>
        
        {/* Contact detail conversion floating button temporarily removed per user request */}
        
        <Footer />
        
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}');
          `}
        </Script>
      </body>
    </html>
  );
}
