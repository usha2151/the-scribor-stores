export default function SEO({ 
  title, 
  description, 
  keywords,
  ogImage,
  canonical,
  jsonLd 
}) {
  // This component is for additional SEO elements
  // Note: Next.js 14 uses metadata export in page files for most SEO
  // This component can be used for page-specific JSON-LD structured data
  
  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  )
}

// Helper function to generate LocalBusiness JSON-LD
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'THE SCRIBOR — House of Paper',
    image: 'https://thescribor.com/og/og-image.jpg', // EDITABLE: Replace with actual image URL
    '@id': 'https://thescribor.com',
    url: 'https://thescribor.com',
    telephone: '+91-XXXXXXXXXX', // EDITABLE: Add your phone number
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Street Address', // EDITABLE: Add your street address
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380001', // EDITABLE: Add your postal code
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.0225, // EDITABLE: Add your latitude
      longitude: 72.5714, // EDITABLE: Add your longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00', // EDITABLE: Add your opening time
        closes: '20:00', // EDITABLE: Add your closing time
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '11:00', // EDITABLE: Add Sunday opening time
        closes: '18:00', // EDITABLE: Add Sunday closing time
      },
    ],
    sameAs: [
      'https://www.facebook.com/thescribor', // EDITABLE: Add your social media URLs
      'https://www.instagram.com/thescribor',
      'https://twitter.com/thescribor',
    ],
  }
}
