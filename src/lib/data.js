// Sample data for categories and products
// EDITABLE: Replace with your actual product data

export const categories = [
  {
    id: 1,
    title: 'Books',
    shortDesc: 'Fiction, non-fiction, and bestsellers',
    icon: '📚',
    image: '/images/placeholder-books.jpg',
    link: '/services#books',
  },
  {
    id: 2,
    title: 'School Supplies',
    shortDesc: 'Everything students need',
    icon: '🎒',
    image: '/images/placeholder-school.jpg',
    link: '/services#school',
  },
  {
    id: 3,
    title: 'Office Supplies',
    shortDesc: 'Professional workspace essentials',
    icon: '💼',
    image: '/images/placeholder-office.jpg',
    link: '/services#office',
  },
  {
    id: 4,
    title: 'Gifts',
    shortDesc: 'Thoughtful presents for every occasion',
    icon: '🎁',
    image: '/images/placeholder-gifts.jpg',
    link: '/services#gifts',
  },
  {
    id: 5,
    title: 'Art Supplies',
    shortDesc: 'Premium materials for artists',
    icon: '🎨',
    image: '/images/placeholder-art.jpg',
    link: '/services#art',
  },
  {
    id: 6,
    title: 'Corporate Gifts',
    shortDesc: 'Bulk orders with customization',
    icon: '🏢',
    image: '/images/placeholder-corporate.jpg',
    link: '/services#corporate',
  },
]

export const products = [
  {
    id: 1,
    title: 'Premium Notebook Set',
    shortDesc: 'A5 ruled notebooks with elegant covers',
    price: 499,
    image: '/images/placeholder-product-1.jpg',
    category: 'Office Supplies',
    bestseller: true,
  },
  {
    id: 2,
    title: 'Watercolor Paint Set',
    shortDesc: '24 vibrant colors for artists',
    price: 899,
    image: '/images/placeholder-product-2.jpg',
    category: 'Art Supplies',
    bestseller: true,
  },
  {
    id: 3,
    title: 'Luxury Pen Collection',
    shortDesc: 'Smooth writing experience',
    price: 1299,
    image: '/images/placeholder-product-3.jpg',
    category: 'Office Supplies',
    bestseller: true,
  },
  {
    id: 4,
    title: 'Gift Hamper Deluxe',
    shortDesc: 'Curated stationery gift box',
    price: 1999,
    image: '/images/placeholder-product-4.jpg',
    category: 'Gifts',
    bestseller: true,
  },
  {
    id: 5,
    title: 'Student Starter Kit',
    shortDesc: 'Complete school supplies bundle',
    price: 799,
    image: '/images/placeholder-product-5.jpg',
    category: 'School Supplies',
    bestseller: true,
  },
  {
    id: 6,
    title: 'Desk Organizer Set',
    shortDesc: 'Keep your workspace tidy',
    price: 649,
    image: '/images/placeholder-product-6.jpg',
    category: 'Office Supplies',
    bestseller: true,
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Teacher',
    content: 'The Scribor has been my go-to store for all classroom supplies. Their collection is curated with care, and the quality is always top-notch!',
    rating: 5,
    image: '/images/placeholder-testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'Rahul Patel',
    role: 'Business Owner',
    content: 'Ordered corporate gifts for our team. The personalization service was excellent, and delivery was prompt. Highly recommend!',
    rating: 5,
    image: '/images/placeholder-testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'Ananya Desai',
    role: 'Artist',
    content: 'As an artist, I need quality supplies. The Scribor never disappoints — from sketchbooks to paints, everything is premium quality.',
    rating: 5,
    image: '/images/placeholder-testimonial-3.jpg',
  },
]

export const services = [
  {
    id: 1,
    title: 'Retail Store',
    description: 'Browse our curated collection of books, stationery, and gifts in-store. Experience the joy of paper products handpicked with love.',
    icon: '🏪',
    features: ['Wide selection', 'Expert assistance', 'Try before you buy'],
  },
  {
    id: 2,
    title: 'Gift Wrapping & Personalization',
    description: 'Make your gifts extra special with our professional wrapping service and custom personalization options.',
    icon: '🎀',
    features: ['Beautiful wrapping', 'Custom messages', 'Name engraving'],
  },
  {
    id: 3,
    title: 'Corporate Gifting',
    description: 'Bulk orders for corporate events, employee gifts, and client appreciation. Logo customization available.',
    icon: '🏢',
    features: ['Bulk discounts', 'Logo printing', 'Dedicated support'],
    cta: 'Request Quote',
  },
  {
    id: 4,
    title: 'Event & Return Gifts',
    description: 'Perfect gift solutions for weddings, birthdays, and celebrations. Customized packages for every budget.',
    icon: '🎉',
    features: ['Custom packages', 'Budget-friendly', 'Timely delivery'],
  },
  {
    id: 5,
    title: 'Art Supplies',
    description: 'Premium art materials for professionals and hobbyists. From paints to canvases, we have it all.',
    icon: '🎨',
    features: ['Professional grade', 'Wide variety', 'Expert advice'],
  },
  {
    id: 6,
    title: 'Custom Orders',
    description: 'Special requirements? We can source specific items and create custom stationery solutions for you.',
    icon: '✨',
    features: ['Personalized service', 'Special sourcing', 'Flexible options'],
  },
]

export const faqs = [
  {
    id: 1,
    question: 'Do you offer home delivery?',
    answer: 'Yes! We offer home delivery within Ahmedabad. Orders above ₹500 qualify for free delivery. For orders below ₹500, a nominal delivery charge applies.',
  },
  {
    id: 2,
    question: 'What is your return policy?',
    answer: 'We accept returns within 7 days of purchase for unused items in original packaging. Books and personalized items are non-returnable. Please keep your receipt for returns.',
  },
  {
    id: 3,
    question: 'How do I qualify for the free gift?',
    answer: 'Any purchase of ₹500 or more automatically qualifies for a complimentary gift. The gift is selected by our team and may vary based on availability.',
  },
  {
    id: 4,
    question: 'Do you accept online payments?',
    answer: 'Yes, we accept UPI, credit/debit cards, and net banking. Cash on delivery is also available for local orders.',
  },
  {
    id: 5,
    question: 'Can I customize products with my company logo?',
    answer: 'Absolutely! We offer logo printing and customization for bulk orders. Please contact us with your requirements, and we\'ll provide a quote within 24 hours.',
  },
  {
    id: 6,
    question: 'Do you organize workshops or events?',
    answer: 'Yes! We regularly host book launches, art workshops, and stationery events. Follow us on social media or subscribe to our newsletter to stay updated.',
  },
]

export const teamMembers = [
  {
    id: 1,
    name: 'Anjali Mehta',
    role: 'Founder & Curator',
    bio: 'A lifelong lover of paper and books, Anjali founded The Scribor to share her passion for quality stationery with Ahmedabad.',
    image: '/images/placeholder-team-1.jpg',
  },
  {
    id: 2,
    name: 'Vikram Shah',
    role: 'Store Manager',
    bio: 'With 10 years in retail, Vikram ensures every customer finds exactly what they need with a smile.',
    image: '/images/placeholder-team-2.jpg',
  },
  {
    id: 3,
    name: 'Neha Joshi',
    role: 'Art Supplies Specialist',
    bio: 'An artist herself, Neha curates our art supplies collection and helps customers choose the perfect materials.',
    image: '/images/placeholder-team-3.jpg',
  },
]

export const whyChooseUs = [
  {
    id: 1,
    title: 'Curated Selection',
    description: 'Every product is handpicked for quality and uniqueness. We source the finest stationery from trusted brands and local artisans.',
    icon: '✨',
  },
  {
    id: 2,
    title: 'Local & Trusted',
    description: 'Proudly serving Ahmedabad for over 5 years with personalized service. Your neighborhood stationery destination.',
    icon: '🏠',
  },
  {
    id: 3,
    title: 'Sustainable Choices',
    description: 'Eco-friendly products and recyclable packaging. We care about the planet as much as we care about paper.',
    icon: '🌱',
  },
  {
    id: 4,
    title: 'Expert Guidance',
    description: 'Knowledgeable staff ready to help you find the perfect items. From students to professionals, we understand your needs.',
    icon: '💡',
  },
]
