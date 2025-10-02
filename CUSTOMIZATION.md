# 🎨 Customization Guide

This guide helps you customize THE SCRIBOR website to match your brand and requirements.

## 🎨 Branding & Colors

### Change Color Scheme

**File: `tailwind.config.js`**

```javascript
colors: {
  primary: {
    teal: '#00B4D8',    // Change to your primary color
    sky: '#6DD3FF',     // Change to your secondary color
  },
  accent: {
    coral: '#FF758C',   // Change to your accent color
    peach: '#FFB199',   // Change to your accent secondary
  },
  neutral: {
    bg: '#F7FAFC',      // Background color
    text: '#0F172A',    // Text color
  },
}
```

**File: `src/styles/globals.css`**

Update CSS variables:
```css
:root {
  --gradient-primary: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
  --gradient-accent: linear-gradient(135deg, #YOUR_COLOR_3 0%, #YOUR_COLOR_4 100%);
}
```

### Change Fonts

**File: `src/styles/globals.css`**

Replace Google Fonts import:
```css
@import url('https://fonts.googleapis.com/css2?family=YourHeadingFont:wght@300;400;500;600;700&family=YourBodyFont:wght@300;400;500;600;700&display=swap');
```

Update font families:
```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'YourHeadingFont', sans-serif;
}

body {
  font-family: 'YourBodyFont', sans-serif;
}
```

**File: `tailwind.config.js`**

```javascript
fontFamily: {
  poppins: ['YourHeadingFont', 'sans-serif'],
  inter: ['YourBodyFont', 'sans-serif'],
}
```

### Update Logo

**File: `src/app/components/Logo.js`**

Replace the SVG logo with your own design or use an image:

```jsx
// Option 1: Use an image
import Image from 'next/image'

export default function Logo({ className = '' }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image 
        src="/logo.png" 
        alt="THE SCRIBOR Logo" 
        width={150} 
        height={50}
        priority
      />
    </Link>
  )
}

// Option 2: Customize the SVG
// Edit the SVG code in the existing Logo.js file
```

---

## 📝 Content Customization

### Update Hero Section

**File: `src/app/components/Hero.js`**

```jsx
// Change headlines
<h1>Your Custom Headline</h1>

// Change subheadline
<p>Your custom subheadline text</p>

// Update promo badges
<span>Your Promo Text</span>

// Change CTA buttons
<Link href="/your-link">Your CTA Text</Link>
```

### Modify Navigation Menu

**File: `src/app/components/Header.js`**

```javascript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  // Add more links:
  { href: '/shop', label: 'Shop' },
  { href: '/blog', label: 'Blog' },
]
```

### Update Footer Content

**File: `src/app/components/Footer.js`**

```jsx
// Change footer description
<p>Your custom footer description</p>

// Add/remove footer sections
// Modify quick links, social links, etc.
```

### Customize Categories

**File: `src/lib/data.js`**

```javascript
export const categories = [
  {
    id: 1,
    title: 'Your Category',
    shortDesc: 'Description',
    icon: '🎯', // Change emoji or use icon library
    image: '/images/your-image.jpg',
    link: '/your-link',
  },
  // Add more categories
]
```

### Update Products

**File: `src/lib/data.js`**

```javascript
export const products = [
  {
    id: 1,
    title: 'Your Product',
    shortDesc: 'Product description',
    price: 999,
    image: '/images/your-product.jpg',
    category: 'Category Name',
    bestseller: true,
  },
  // Add more products
]
```

---

## 🎭 Layout & Structure

### Add New Page

1. **Create page file:**
   ```
   src/app/your-page/page.js
   ```

2. **Basic page structure:**
   ```jsx
   import Header from '../components/Header'
   import Footer from '../components/Footer'

   export const metadata = {
     title: 'Your Page Title',
     description: 'Your page description',
   }

   export default function YourPage() {
     return (
       <>
         <Header />
         <main id="main-content" className="pt-20">
           {/* Your content */}
         </main>
         <Footer />
       </>
     )
   }
   ```

3. **Add to navigation:**
   Update `src/app/components/Header.js`

### Remove Sections

To remove sections from the home page:

**File: `src/app/page.js`**

Comment out or delete unwanted sections:
```jsx
// <CategoryGrid />  // Commented out
// <ProductCarousel />  // Commented out
```

### Reorder Sections

Simply move the component tags in `src/app/page.js`:
```jsx
<main>
  <Hero />
  <Testimonial />      {/* Moved up */}
  <CategoryGrid />     {/* Moved down */}
  <ProductCarousel />
</main>
```

---

## 🔧 Component Customization

### Modify Button Styles

**File: `src/styles/globals.css`**

```css
.btn-primary {
  /* Change padding, colors, etc. */
  padding: 1rem 2rem;
  background: your-gradient;
  border-radius: 12px;
}
```

### Customize Card Appearance

**File: `src/styles/globals.css`**

```css
.card {
  background: white;
  border-radius: 16px;  /* Change border radius */
  box-shadow: your-shadow;
  /* Add borders, backgrounds, etc. */
}
```

### Adjust Animations

**File: `src/styles/globals.css`**

```css
/* Speed up/slow down animations */
.animate-fade-up {
  animation: fadeUp 0.3s ease-out;  /* Changed from 0.6s */
}

/* Disable animations */
.card {
  transition: none;  /* Remove hover effects */
}
```

### Change Spacing

**File: `tailwind.config.js`**

```javascript
extend: {
  spacing: {
    '128': '32rem',  // Add custom spacing
    '144': '36rem',
  }
}
```

---

## 📱 Responsive Behavior

### Adjust Breakpoints

**File: `tailwind.config.js`**

```javascript
theme: {
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
    // Add custom breakpoints:
    'tablet': '900px',
  }
}
```

### Mobile-Specific Styles

Use Tailwind responsive prefixes:
```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  Responsive grid
</div>
```

---

## 🎯 Feature Customization

### Disable Dark Mode

**File: `src/app/components/Header.js`**

Remove or comment out the dark mode toggle button:
```jsx
{/* Dark Mode Toggle - Commented out
<button onClick={toggleDarkMode}>
  ...
</button>
*/}
```

### Change Carousel Auto-Advance Speed

**File: `src/app/components/ProductCarousel.js`**

```javascript
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, 5000)  // Change from 5000ms (5s) to your preferred duration
  
  return () => clearInterval(interval)
}, [maxIndex])
```

### Modify Testimonial Rotation

**File: `src/app/components/Testimonial.js`**

```javascript
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, 6000)  // Change rotation speed
  
  return () => clearInterval(interval)
}, [])
```

### Customize Contact Form Fields

**File: `src/app/components/ContactForm.js`**

Add new fields:
```jsx
{/* Add new field */}
<div>
  <label htmlFor="company">Company Name</label>
  <input
    type="text"
    id="company"
    name="company"
    value={formData.company}
    onChange={handleChange}
  />
</div>
```

Update form state:
```javascript
const [formData, setFormData] = useState({
  // ... existing fields
  company: '',  // Add new field
})
```

---

## 🌐 Multi-Language Support

### Add Language Switcher

1. **Install i18n package:**
   ```bash
   npm install next-intl
   ```

2. **Create language files:**
   ```
   messages/
     en.json
     hi.json
   ```

3. **Configure in `next.config.js`**

4. **Update components to use translations**

### Simple Bilingual Content

For simple bilingual content (English + Hindi):

```jsx
<h1>
  <span className="block">Curated stationery & joyful gifts</span>
  <span className="block text-lg mt-2">चुनी हुई स्टेशनरी और खूबसूरत उपहार</span>
</h1>
```

---

## 🛒 Add E-Commerce Features

### Product Pages

1. **Create product detail page:**
   ```
   src/app/products/[id]/page.js
   ```

2. **Implement product display:**
   ```jsx
   export default function ProductPage({ params }) {
     const product = products.find(p => p.id === params.id)
     return (
       // Product details, images, add to cart
     )
   }
   ```

### Shopping Cart

1. **Create cart context:**
   ```
   src/context/CartContext.js
   ```

2. **Implement cart functionality:**
   - Add to cart
   - Remove from cart
   - Update quantities
   - Calculate totals

3. **Create cart page:**
   ```
   src/app/cart/page.js
   ```

### Payment Integration

**Razorpay (India):**
```bash
npm install razorpay
```

**Stripe (International):**
```bash
npm install @stripe/stripe-js
```

Implement in API routes and checkout page.

---

## 📊 Analytics & Tracking

### Add Google Analytics

**File: `src/app/layout.js`**

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Add Facebook Pixel

Similar to Google Analytics, add Facebook Pixel script to layout.

---

## 🔍 SEO Customization

### Update Meta Tags

**File: `src/app/layout.js`**

```javascript
export const metadata = {
  title: 'Your Custom Title',
  description: 'Your custom description',
  keywords: ['your', 'keywords'],
  // ... other metadata
}
```

### Add Sitemap

Create `src/app/sitemap.js`:
```javascript
export default function sitemap() {
  return [
    {
      url: 'https://thescribor.com',
      lastModified: new Date(),
    },
    {
      url: 'https://thescribor.com/about',
      lastModified: new Date(),
    },
    // Add all pages
  ]
}
```

### Add Robots.txt

Already included in `public/robots.txt` - update as needed.

---

## 🎨 Advanced Styling

### Use Custom CSS

Create component-specific CSS:
```
src/app/components/YourComponent.module.css
```

Import and use:
```jsx
import styles from './YourComponent.module.css'

<div className={styles.yourClass}>Content</div>
```

### Add Animation Library

**Framer Motion:**
```bash
npm install framer-motion
```

Use in components:
```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

---

## 💡 Tips & Best Practices

1. **Test After Changes**: Always test in development before deploying
2. **Keep Backups**: Commit changes to Git regularly
3. **Mobile First**: Test mobile responsiveness for all changes
4. **Performance**: Optimize images and minimize custom code
5. **Accessibility**: Maintain ARIA labels and keyboard navigation
6. **SEO**: Update metadata when adding new pages
7. **Consistency**: Follow existing patterns and naming conventions

---

## 🆘 Need Help?

- Check the main README.md for general documentation
- Review existing components for examples
- Consult [Next.js Documentation](https://nextjs.org/docs)
- Consult [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Happy Customizing! 🎨**
