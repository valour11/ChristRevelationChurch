import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({ 
  title = 'Apostle Godwin Bantar Ministries',
  description = 'Empowering lives through faith, transformative leadership, and intentional community. Join us as we strive for spiritual excellence together.',
  image = '/src/assets/logo.jpeg',
  url = 'https://bantar.org',
  type = 'website'
}: SEOProps) {
  const siteTitle = title === 'Apostle Godwin Bantar Ministries' ? title : `${title} | Bantar Ministries`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph tags (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
