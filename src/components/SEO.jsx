import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://wunmidarawears.com'
const SITE_NAME = 'Wunmi Dara Wears'
const DEFAULT_DESCRIPTION = 'Premium Nigerian fashion. Handcrafted Ankara, Lace, Aso-Ebi and contemporary African couture. Order directly on WhatsApp.'
const DEFAULT_IMAGE = `${SITE_URL}/favicon.svg`

export default function SEO({ title, description, canonical, ogImage, structuredData }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const desc = description || DEFAULT_DESCRIPTION
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL
  const image = ogImage || DEFAULT_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />

      {/* Structured data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}
