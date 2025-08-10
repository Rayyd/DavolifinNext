export default function Head() {
  const canonical = 'https://ton-domaine.tld/nl'
  return (
    <>
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <link rel="alternate" href="https://ton-domaine.tld/fr" hrefLang="fr" />
      <link rel="alternate" href="https://ton-domaine.tld/nl" hrefLang="nl" />
      <link rel="alternate" href="https://ton-domaine.tld/en" hrefLang="en" />
      <link rel="alternate" href="https://ton-domaine.tld/" hrefLang="x-default" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["AccountingService","LocalBusiness"],
            "name": "Davolifin",
            "url": canonical,
            "identifier": "BE0690.882.401",
            "vatID": "BE0690.882.401",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Faubourg de Bruxelles 11C/304",
              "postalCode": "1400",
              "addressLocality": "Nivelles",
              "addressCountry": "BE"
            },
            "areaServed": "BE",
            "foundingDate": "2018",
            "founder": "David Pluquet",
            "telephone": "+32-xxx-xx-xx-xx",
            "email": "contact@ton-domaine.tld",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": 350,
                "priceCurrency": "EUR"
              },
              "description": "Forfait dès 350 € (ajustable), devis unique ou régie pour dossiers complexes."
            }
          })
        }}
      />
    </>
  )
}
