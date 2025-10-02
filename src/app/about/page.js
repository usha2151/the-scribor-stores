import Header from '../components/Header'
import Footer from '../components/Footer'
import { teamMembers } from '@/lib/data'
import Link from 'next/link'

export const metadata = {
  title: 'About Us',
  description: 'Learn about THE SCRIBOR — House of Paper, our story, mission, and the passionate team behind Ahmedabad\'s favorite stationery store.',
}

export default function About() {
  return (
    <>
      <Header />
      
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-teal to-primary-sky text-white">
          <div className="container-custom text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              About THE SCRIBOR
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Where passion for paper meets curated excellence
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-white dark:bg-slate-800">
          <div className="container-custom max-w-4xl">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-text dark:text-white mb-8 text-center">
              Our Story
            </h2>
            
            <div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                THE SCRIBOR was born from a simple love — a love for the tactile joy of paper, the smooth glide of a quality pen, and the endless possibilities held within a blank notebook. Founded in the heart of Ahmedabad, we set out to create more than just a store; we wanted to build a haven for students, professionals, artists, and anyone who believes that the right tools can spark creativity and productivity.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Every product in our collection is handpicked with care. We believe in quality over quantity, in timeless designs over fleeting trends, and in the power of thoughtful curation. Whether you&apos;re a student preparing for exams, an artist seeking the perfect canvas, or someone looking for a meaningful gift, we&apos;re here to help you find exactly what you need.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Today, THE SCRIBOR stands as Ahmedabad&apos;s trusted destination for books, stationery, and gifts. We&apos;re proud to serve our community with personalized service, sustainable choices, and a commitment to making every visit a delightful experience.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-neutral-bg dark:bg-slate-900">
          <div className="container-custom">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-text dark:text-white mb-12 text-center">
              Why Choose Us
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card p-8 text-center">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="font-poppins font-semibold text-xl text-neutral-text dark:text-white mb-3">
                  Curated Selection
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Every product is handpicked for quality and uniqueness. We source the finest stationery from trusted brands.
                </p>
              </div>
              
              <div className="card p-8 text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="font-poppins font-semibold text-xl text-neutral-text dark:text-white mb-3">
                  Affordability
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Premium doesn&apos;t have to mean expensive. We offer competitive prices and regular promotions to make quality accessible.
                </p>
              </div>
              
              <div className="card p-8 text-center">
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="font-poppins font-semibold text-xl text-neutral-text dark:text-white mb-3">
                  Sustainability
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Eco-friendly products and recyclable packaging. We care about the planet as much as we care about paper.
                </p>
              </div>
              
              <div className="card p-8 text-center">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="font-poppins font-semibold text-xl text-neutral-text dark:text-white mb-3">
                  Expert Guidance
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Knowledgeable staff ready to help you find the perfect items for your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* In-Store Experiences */}
        <section className="section-padding bg-white dark:bg-slate-800">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-text dark:text-white mb-6">
              In-Store Experiences & Events
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              THE SCRIBOR is more than a retail space — it&apos;s a community hub. We regularly host art workshops, book launches, stationery showcases, and creative meetups. Whether you&apos;re looking to learn a new skill, meet fellow enthusiasts, or simply browse in a welcoming environment, our store is your creative sanctuary.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🎨</div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-text dark:text-white mb-2">Art Workshops</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Learn new techniques from local artists</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📚</div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-text dark:text-white mb-2">Book Launches</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Meet authors and discover new reads</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">✏️</div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-text dark:text-white mb-2">Stationery Showcases</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Explore the latest in stationery design</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🤝</div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-text dark:text-white mb-2">Creative Meetups</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Connect with fellow creatives</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-accent text-white">
          <div className="container-custom text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              Meet Us in Store
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Experience THE SCRIBOR in person. We&apos;d love to show you around and help you discover your next favorite product.
            </p>
            <Link
              href="/contact"
              className="btn-primary bg-white text-primary-teal hover:bg-gray-100 inline-block"
            >
              Visit Us Today
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
