import '../styles/globals.css'
import { CartProvider } from '../contexts/CartContext'
import CartDrawer from './components/CartDrawer'

export const metadata = {
  metadataBase: new URL('https://thescribor.com'), // EDITABLE: Replace with your actual domain
  title: {
    default: 'THE SCRIBOR — House of Paper | Books, Stationery & Gifts — Ahmedabad',
    template: '%s | THE SCRIBOR'
  },
  description: 'Curated stationery, books, gifts, and art supplies in Ahmedabad. Everything for school, office, art & celebrations — locally handpicked with love.',
  keywords: ['stationery', 'books', 'gifts', 'school supplies', 'office supplies', 'art supplies', 'Ahmedabad', 'corporate gifts'],
  authors: [{ name: 'THE SCRIBOR' }],
  creator: 'THE SCRIBOR',
  publisher: 'THE SCRIBOR',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://thescribor.com',
    siteName: 'THE SCRIBOR — House of Paper',
    title: 'THE SCRIBOR — House of Paper | Books, Stationery & Gifts',
    description: 'Curated stationery, books, gifts, and art supplies in Ahmedabad.',
    images: [
      {
        url: '/og/og-image.jpg', // EDITABLE: Add your Open Graph image
        width: 1200,
        height: 630,
        alt: 'THE SCRIBOR — House of Paper',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE SCRIBOR — House of Paper | Books, Stationery & Gifts',
    description: 'Curated stationery, books, gifts, and art supplies in Ahmedabad.',
    images: ['/og/twitter-image.jpg'], // EDITABLE: Add your Twitter card image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // EDITABLE: Add Google Search Console verification
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        <CartProvider>
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}
