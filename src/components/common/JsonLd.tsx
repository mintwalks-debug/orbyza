import React from 'react';
import { siteConfig } from '@/config/site';

interface JsonLdProps {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'BreadcrumbList' | 'WebSite';
  data: any;
}

const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;

export const OrganizationSchema = () => (
  <JsonLd
    type="Organization"
    data={{
      name: "ORBYZA Digital Marketing Consultancy",
      alternateName: "Orbyza",
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        areaServed: ["IN", "US", "CA", "EU"],
        availableLanguage: ["English", "Hindi"]
      },
      sameAs: [
        siteConfig.social.twitter,
        siteConfig.social.linkedin,
        siteConfig.social.instagram,
        siteConfig.social.facebook,
        siteConfig.social.youtube
      ]
    }}
  />
);

export const ServiceSchema = ({ name, description, category }: { name: string, description: string, category: string }) => (
  <JsonLd
    type="Service"
    data={{
       name: name,
       description: description,
       provider: {
         "@type": "Organization",
         name: "ORBYZA Digital Marketing Consultancy"
       },
       serviceType: category,
       areaServed: {
         "@type": "Country",
         name: "India"
       },
       hasOfferCatalog: {
         "@type": "OfferCatalog",
         name: "Digital Growth Services",
         itemListElement: [
           {
             "@type": "Offer",
             itemOffered: {
               "@type": "Service",
               name: name
             }
           }
         ]
       }
    }}
  />
);

export const BreadcrumbSchema = ({ items }: { items: { name: string, url: string }[] }) => (
  <JsonLd
    type="BreadcrumbList"
    data={{
       itemListElement: items.map((item, index) => ({
         "@type": "ListItem",
         position: index + 1,
         name: item.name,
         item: item.url
       }))
    }}
  />
);

export const LocalBusinessSchema = () => (
  <JsonLd
    type="LocalBusiness"
    data={{
       name: `Orbyza Jaipur - Best Digital Marketing Agency`,
       image: `${siteConfig.url}/korean_girl.png`,
       "@id": siteConfig.url,
       url: siteConfig.url,
       telephone: siteConfig.phone,
       priceRange: "$$$",
       address: {
         "@type": "PostalAddress",
         streetAddress: "Mansarovar",
         addressLocality: "Jaipur",
         postalCode: "302020",
         addressRegion: "Rajasthan",
         addressCountry: "IN"
       },
       geo: {
         "@type": "GeoCoordinates",
         latitude: siteConfig.geo.latitude,
         longitude: siteConfig.geo.longitude
       },
       openingHoursSpecification: {
         "@type": "OpeningHoursSpecification",
         dayOfWeek: [
           "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
         ],
         opens: "09:00",
         closes: "20:00"
       }
    }}
  />
);
