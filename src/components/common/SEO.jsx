import React from 'react';
import { Helmet } from 'react-helmet-async';
import { companyData } from '../../data/companyData';

export default function SEO({ 
  title, 
  description, 
  canonical, 
  type = 'website',
  schema 
}) {
  const siteTitle = title ? `${title} | ${companyData.name}` : `${companyData.name} | Smart Digital Solutions & AI Automation`;
  const metaDescription = description || companyData.heroSubheadline;
  const canonicalUrl = canonical || 'https://zavyx.in';

  const defaultLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": companyData.name,
    "image": "https://zavyx.in/images/ZAVYX_logo.png",
    "@id": "https://zavyx.in/#organization",
    "url": "https://zavyx.in",
    "telephone": companyData.contact.phone,
    "email": companyData.contact.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyData.contact.address.unit + ", " + companyData.contact.address.landmark + ", " + companyData.contact.address.highway,
      "addressLocality": companyData.contact.address.city,
      "addressRegion": companyData.contact.address.state,
      "postalCode": companyData.contact.address.pincode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.3789547,
      "longitude": 77.6781216
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:30",
      "closes": "19:00"
    }
  };

  const finalSchema = schema || defaultLocalBusinessSchema;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content="https://zavyx.in/images/ZAVYX_logo.png" />
      <meta property="og:site_name" content={companyData.name} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content="https://zavyx.in/images/ZAVYX_logo.png" />

      {/* Schema.org LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
}
