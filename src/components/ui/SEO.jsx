import { Helmet } from 'react-helmet-async';

const SITE = 'University of Swat';
const ORIGIN = 'https://www.uswat.edu.pk';

/**
 * SEO — per-page document head (title, description, canonical, OG, Twitter).
 */
export default function SEO({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  children,
}) {
  const fullTitle = title ? `${title} — ${SITE}` : `${SITE} — Where the Mountains Meet the Future`;
  const url = `${ORIGIN}${path}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE} />
      {image ? <meta property="og:image" content={image} /> : null}

      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image ? <meta name="twitter:image" content={image} /> : null}

      {children}
    </Helmet>
  );
}
