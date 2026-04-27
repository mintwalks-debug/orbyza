import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Orbyza Intelligence Hub | FAQ & Growth Protocols Jaipur',
  description: 'Everything you need to know about digital marketing, SEO, and growth strategies in Jaipur. Orbyza provides transparent answers to complex digital performance questions.',
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
  openGraph: {
    title: 'FAQ Protocol // Intelligence Asset Orbyza',
    description: 'Resolving friction through transparency. The complete FAQ database for Orbyza Digital Jaipur.',
    url: `${siteConfig.url}/faq`,
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Digital Dominance Intelligence',
    description: 'Answers to critical search and growth inquiries.',
    images: [`${siteConfig.url}/og-image.jpg`],
  }
};

const FAQPage = () => {
  const categories = [
    {
      title: "General & Agency Protocols",
      questions: [
        { q: "Who is the lead digital marketer at Orbyza?", a: "Orbyza is led by Harshit and a collective of elite digital strategists and technical architects based in Jaipur." },
        { q: "What is your average client retention rate?", a: "We maintain a 92% client retention rate across our Jaipur and global portfolios, driven by our +420% average ROI growth." },
        { q: "Do you offer free digital audits?", a: "Yes. Our 'Elite Performance Audit' is available for qualified businesses. We dismantle your current digital footprint and identify every friction point your competitors are exploiting." },
        { q: "Where is Orbyza located in Jaipur?", a: "Our primary hub is located in Jaipur, Rajasthan, serving as the central engine for our global operations." }
      ]
    },
    {
      title: "SEO & Search Dominance",
      questions: [
        { q: "How long until I rank on page 1 for 'SEO Jaipur'?", a: "SEO is an authority game. While technical fixes show immediate impact, sustainable page 1 rankings for competitive terms like 'Best SEO Services in Jaipur' typically take 4-6 months." },
        { q: "Do you use AI for SEO content generation?", a: "We use AI to optimize for search intent and data analysis, but all high-E-E-A-T content is engineered by human specialists to ensure credibility and authority." },
        { q: "What makes your Jaipur SEO strategy unique?", a: "We focus on 'Hyper-Localization.' We bridge the gap between global technical standards and regional search behaviors specific to the Jaipur and Rajasthan market." },
        { q: "Can you recover sites from Google penalties?", a: "Yes. Our 'Manual Penalty Recovery' protocol has restored traffic for dozens of brands that fell victim to black-hat legacy strategies." }
      ]
    },
    {
      title: "Paid Advertising & SEM",
      questions: [
        { q: "What platforms do you manage for paid ads?", a: "We manage Google Ads (Search, Display, YouTube), Meta Ads (Facebook/Instagram), LinkedIn Ads, and TikTok Ads for international clients." },
        { q: "How do you lower my Google Ads CPA?", a: "We focus on 'Conversion Flow Optimization.' By aligning the ad creative with high-intent keywords and high-performance landing pages, we typically lower CPA by up to 45% within 90 days." },
        { q: "Do you charge a percentage of ad spend?", a: "Our fee structure is transparent and based on campaign complexity. For some enterprise-scale clients, we use a hybrid model tied to ROI performance." }
      ]
    },
    {
      title: "Web Design & Technology",
      questions: [
        { q: "What is your primary web development stack?", a: "We build on Next.js, React, and Tailwind CSS. This stack ensures 99+ PageSpeed scores, zero-latency rendering, and absolute technical SEO dominance." },
        { q: "Will my website be mobile-first?", a: "Every Orbyza deployment is mobile-native. Over 75% of search traffic in Jaipur is mobile; our designs are built to convert on the small screen first." },
        { q: "Do you provide hosting and maintenance?", a: "Yes. We offer fully-managed, high-performance edge hosting with zero-downtime guarantees for our corporate and enterprise partners." }
      ]
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": categories.flatMap(cat => cat.questions).map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "@id": `${siteConfig.url}/faq#${faq.q.toLowerCase().replace(/\s+/g, '-')}`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container-max">
        <div className="max-w-4xl mb-24 text-center mx-auto">
           <span className="text-brand-primary font-bold text-xs uppercase tracking-[0.5em] mb-10 block">Intelligence Database</span>
           <h1 className="text-6xl md:text-8xl font-bold text-brand-dark uppercase tracking-tighter mb-12">Resolving <span className="text-brand-primary">Friction.</span></h1>
           <p className="text-brand-primary text-xl font-light leading-relaxed max-w-2xl mx-auto italic">
              Absolute transparency is the core of our digital excellence mission. We've compiled the most frequent intelligence requirements for businesses in Jaipur.
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
           {categories.map((cat, i) => (
             <div key={i} className="mb-10">
                <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-widest border-b border-brand-primary/30 pb-4 mb-8">{cat.title}</h2>
                <div className="space-y-6">
                   {cat.questions.map((faq, j) => (
                     <div key={j} className="p-8 bg-white border border-brand-primary/15 rounded-3xl hover:border-brand-primary transition-all flex flex-col gap-4 group">
                        <h4 className="text-brand-dark font-bold text-lg uppercase tracking-tight group-hover:text-brand-primary transition-colors leading-tight">Q. {faq.q}</h4>
                        <p className="text-brand-primary text-sm leading-relaxed border-l-2 border-brand-primary/30 pl-6 group-hover:border-brand-primary transition-all">{faq.a}</p>
                     </div>
                   ))}
                </div>
             </div>
           ))}
        </div>

        {/* Global CTA Section */}
        <div className="mt-32 text-center">
           <h3 className="text-3xl font-bold text-brand-dark uppercase mb-8">Wait, My Question <span className="text-brand-primary underline decoration-brand-primary/30 underline-offset-8">Isn't Listed.</span></h3>
           <p className="text-brand-primary/70 text-lg mb-12 max-w-xl mx-auto">If you need specific intelligence regarding your digital ecosystem, our growth squad is ready to provide a custom briefing.</p>
           <a href="/contact" className="btn-premium px-12 py-6 text-sm">Query Growth Squad →</a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
