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
  // Show Under Construction in production, but disable it locally for development
  const isUnderConstruction = process.env.NODE_ENV === 'production';

  if (isUnderConstruction) {
    return (
      <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className="font-inter bg-[#0F172A] text-white antialiased min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
          {/* Abstract Background Elements */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#0047FF] rounded-full blur-[150px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#FFD700] rounded-full blur-[150px] opacity-10 animate-pulse delay-1000"></div>
          
          <div className="z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
            <div className="mb-8 w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-sm relative">
               <span className="text-4xl animate-bounce">🚀</span>
               <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#0047FF] rounded-full flex items-center justify-center border-4 border-[#0F172A] animate-pulse">
                  <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
               </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 uppercase">
              Upgrading<br/><span className="text-[#0047FF]">Our Engine.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-lg leading-relaxed">
              We are currently fine-tuning the Orbyza experience. Our digital marketing agency platform will be back online shortly with massive upgrades.
            </p>
            
            <div className="w-full max-w-md flex flex-col sm:flex-row items-center gap-4">
              <a href="tel:9352047105" className="w-full bg-[#0047FF] hover:bg-[#0038CC] text-white font-bold px-8 py-4 rounded-full transition-all shadow-xl shadow-[#0047FF]/20 text-sm uppercase tracking-widest text-center flex items-center justify-center gap-2">
                📞 Contact Us
              </a>
              <a href="mailto:hello@orbyza.com" className="w-full border border-white/20 hover:bg-white/5 text-white font-bold px-8 py-4 rounded-full transition-all text-sm uppercase tracking-widest text-center">
                Email Us
              </a>
            </div>
            
            <div className="mt-16 text-xs text-slate-500 font-bold tracking-widest uppercase">
              © {new Date().getFullYear()} Orbyza Digital. All rights reserved.
            </div>
          </div>
        </body>
      </html>
    );
  }

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
