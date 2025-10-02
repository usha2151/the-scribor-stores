import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'
import ProductCarousel from './components/ProductCarousel'
import Testimonial from './components/Testimonial'
import WhyChooseUs from './components/WhyChooseUs'
import { generateLocalBusinessSchema } from './components/SEO'

export const metadata = {
  title: 'THE SCRIBOR — House of Paper | Books, Stationery & Gifts — Ahmedabad',
  description: 'Curated stationery, books, gifts, and art supplies in Ahmedabad. Everything for school, office, art & celebrations — locally handpicked with love.',
}

export default function Home() {
  const jsonLd = generateLocalBusinessSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />
      
      <main id="main-content">
        <Hero />
        
        <CategoryGrid />
        
        <ProductCarousel />
        
        <WhyChooseUs />
        
        <Testimonial />
        
        {/* CTA Section */}
        <section className="section-padding bg-gradient-accent text-white">
          <div className="container-custom text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              Visit Our Store Today
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Experience the joy of browsing our curated collection in person. Our friendly team is ready to help you find exactly what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary bg-white text-primary-teal hover:bg-gray-100"
              >
                Get Directions
              </a>
              <a
                href="/services"
                className="px-6 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-accent-coral transition-all duration-300"
              >
                Browse Services
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
