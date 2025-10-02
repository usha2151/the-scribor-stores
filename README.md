# THE SCRIBOR — House of Paper

A modern, responsive Next.js website for THE SCRIBOR, a curated stationery and gifts store in Ahmedabad, Gujarat.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd the-scribor
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
the-scribor/
├── src/
│   ├── app/
│   │   ├── components/      # Reusable React components
│   │   ├── api/            # API routes
│   │   ├── about/          # About page
│   │   ├── services/       # Services page
│   │   ├── contact/        # Contact page
│   │   ├── privacy/        # Privacy Policy page
│   │   ├── terms/          # Terms & Conditions page
│   │   ├── layout.js       # Root layout
│   │   └── page.js         # Home page
│   ├── lib/
│   │   ├── data.js         # Sample data
│   │   └── useReveal.js    # Custom hook for scroll animations
│   └── styles/
│       └── globals.css     # Global styles
├── public/
│   ├── images/             # Product and category images
│   └── og/                 # Open Graph images
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## ⚙️ Configuration & Customization

### 1. Update Business Information

Search for `/* EDITABLE: */` comments throughout the codebase to find placeholders that need to be updated:

#### Contact Information (`src/app/contact/page.js`, `src/app/components/Footer.js`)
- **Address**: Replace `[Street Address]` with your actual store address
- **Phone**: Replace `+91-XXXXXXXXXX` with your phone number
- **Email**: Replace `info@thescribor.com` with your email
- **Store Hours**: Update opening/closing times

#### SEO & Metadata (`src/app/layout.js`, `src/app/components/SEO.js`)
- **Domain**: Replace `https://thescribor.com` with your actual domain
- **Google Verification**: Add your Google Search Console verification code
- **Business Schema**: Update address, phone, coordinates, and opening hours

#### Legal Documents (`src/app/privacy/page.js`, `src/app/terms/page.js`)
- **Business Registration**: Add your registration number and GST number
- **Contact Email**: Update privacy and legal contact emails
- **Last Updated Date**: Update the date when you publish

#### Promotional Content (`src/app/components/Hero.js`)
- **Promo Badge**: Update discount offers and free gift thresholds
- **Hero Text**: Customize headlines and CTAs

### 2. Add Images

Replace placeholder images in the `public/images/` directory:

#### Required Images:
- **Category Images** (600x400px):
  - `placeholder-books.jpg`
  - `placeholder-school.jpg`
  - `placeholder-office.jpg`
  - `placeholder-gifts.jpg`
  - `placeholder-art.jpg`
  - `placeholder-corporate.jpg`

- **Product Images** (800x800px):
  - `placeholder-product-1.jpg` through `placeholder-product-6.jpg`

- **Team Photos** (400x400px):
  - `placeholder-team-1.jpg` through `placeholder-team-3.jpg`

- **Testimonial Photos** (400x400px):
  - `placeholder-testimonial-1.jpg` through `placeholder-testimonial-3.jpg`

#### Open Graph Images (`public/og/`):
- `og-image.jpg` (1200x630px) - For social media sharing
- `twitter-image.jpg` (1200x630px) - For Twitter cards

#### Favicon:
Replace `public/favicon.ico` with your custom favicon. You can generate favicons at [favicon.io](https://favicon.io/)

### 3. Update Sample Data

Edit `src/lib/data.js` to customize:
- **Categories**: Modify category names, descriptions, and icons
- **Products**: Add your actual products with prices and descriptions
- **Testimonials**: Replace with real customer testimonials
- **Services**: Update service offerings and features
- **FAQs**: Add frequently asked questions specific to your business
- **Team Members**: Update team information

### 4. Configure Contact Form

The contact form currently uses a placeholder API. To enable real email functionality:

#### Option 1: SendGrid (Recommended)
1. Sign up at [SendGrid](https://sendgrid.com/)
2. Install the package:
   ```bash
   npm install @sendgrid/mail
   ```
3. Create `.env.local` file:
   ```
   SENDGRID_API_KEY=your_api_key_here
   ```
4. Uncomment the SendGrid code in `src/app/api/contact/route.js`

#### Option 2: Nodemailer
1. Install:
   ```bash
   npm install nodemailer
   ```
2. Configure SMTP settings in `.env.local`
3. Implement nodemailer transport in the API route

#### Option 3: Form Service
Use a third-party service like:
- [Formspree](https://formspree.io/)
- [Getform](https://getform.io/)
- [Web3Forms](https://web3forms.com/)

### 5. Add Google Maps

In `src/app/contact/page.js`, replace the map placeholder with your Google Maps embed:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your store location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the placeholder section in the contact page

### 6. Social Media Links

Update social media URLs in:
- `src/app/components/Footer.js`
- `src/app/contact/page.js`
- `src/app/components/SEO.js` (for structured data)

Replace placeholder URLs with your actual social media profiles.

## 🎨 Styling & Branding

### Color Scheme

The project uses a gradient-based design with the following colors:

- **Primary Gradient**: Teal to Sky (`#00B4D8` → `#6DD3FF`)
- **Accent Gradient**: Coral to Peach (`#FF758C` → `#FFB199`)
- **Neutral Background**: `#F7FAFC`
- **Text**: `#0F172A`

To change colors, edit `tailwind.config.js` and `src/styles/globals.css`.

### Typography

- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

Fonts are imported in `src/styles/globals.css`.

### Dark Mode

The site includes a dark mode toggle. Theme preference is saved in localStorage.

## 🔒 Environment Variables

Create a `.env.local` file in the root directory for sensitive data:

```env
# Email Service (SendGrid example)
SENDGRID_API_KEY=your_sendgrid_api_key

# Google Maps (if needed)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key

# Analytics (optional)
NEXT_PUBLIC_GA_TRACKING_ID=your_google_analytics_id
```

**Important**: Never commit `.env.local` to version control. It's already in `.gitignore`.

## 📱 Features

- ✅ Fully responsive design (mobile-first)
- ✅ Dark mode support with localStorage persistence
- ✅ Accessible (ARIA labels, keyboard navigation, focus management)
- ✅ SEO optimized with metadata and structured data
- ✅ Smooth scroll animations with IntersectionObserver
- ✅ Contact form with validation
- ✅ Product carousel with auto-advance
- ✅ FAQ accordion
- ✅ Modal with focus trap
- ✅ Testimonial slider
- ✅ Open Graph and Twitter card support
- ✅ LocalBusiness JSON-LD schema

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/)
3. Configure environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This Next.js app can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Render

Follow the platform-specific Next.js deployment guides.

## 📊 Analytics & Monitoring

To add Google Analytics:

1. Get your GA4 tracking ID
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
   ```
3. Add the Google Analytics script to `src/app/layout.js`

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:
1. Delete `node_modules` and `.next` folders
2. Run `npm install` again
3. Run `npm run build`

### Image Loading Issues

- Ensure images are in the correct `public/images/` directory
- Check file names match those referenced in the code
- Verify image formats are supported (jpg, png, webp)

### Contact Form Not Working

- Check that the API route is accessible at `/api/contact`
- Verify environment variables are set correctly
- Check browser console for error messages
- Ensure CORS is properly configured if using external services

## 📄 License

This project is proprietary and confidential. All rights reserved by THE SCRIBOR — House of Paper.

## 🤝 Support

For technical support or questions:
- Email: info@thescribor.com
- Phone: +91-XXXXXXXXXX

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
