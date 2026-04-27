import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { OrganizationSchema, LocalBusinessSchema } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: {
    default: `Digital Marketing Agency India | Orbyza`,
    template: `%s | Orbyza`,
  },
  description: 'Orbyza: India\'s results-driven digital marketing agency. SEO, PPC, Web Design & Social Media for brands in Mumbai, Delhi & beyond. Get free strategy call.',
  keywords: ['digital marketing agency India', 'SEO agency Mumbai', 'PPC agency India', 'web development company India'],
  metadataBase: new URL(siteConfig.url),
  authors: [{ name: 'Orbyza Leadership' }],
  publisher: 'Orbyza Digital',
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
    title: 'Digital Marketing Agency India | Orbyza',
    description: 'Trusted by 100+ brands across Mumbai, Delhi, Bengaluru & 12 countries. SEO, SEM, and high-performance Web Design.',
    url: siteConfig.url,
    siteName: 'Orbyza',
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Orbyza India - Digital Growth Master Plan',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency India | Orbyza',
    description: 'High-performance digital growth engines for Indian and Global brands.',
    images: [`${siteConfig.url}/og-image.jpg`],
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
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body className="font-inter bg-white text-slate-900 antialiased">
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
