# 🚀 Setup Guide for THE SCRIBOR

This guide will help you get THE SCRIBOR website up and running quickly.

## ✅ Step-by-Step Setup

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including Next.js, React, and Tailwind CSS.

### Step 2: Start Development Server

```bash
npm run dev
```

The website will be available at [http://localhost:3000](http://localhost:3000)

### Step 3: Update Business Information

#### 🏢 Contact Details

Search for `/* EDITABLE: */` comments and update:

**File: `src/app/contact/page.js`**
- Store address
- Phone number
- Email address
- Store hours

**File: `src/app/components/Footer.js`**
- Address
- Phone
- Email
- Social media links

#### 🌐 SEO & Metadata

**File: `src/app/layout.js`**
- Domain URL (replace `https://thescribor.com`)
- Google verification code
- Meta descriptions

**File: `src/app/components/SEO.js`**
- Business address
- Phone number
- GPS coordinates
- Opening hours
- Social media URLs

#### 📄 Legal Pages

**File: `src/app/privacy/page.js`**
- Privacy contact email
- Last updated date

**File: `src/app/terms/page.js`**
- Business registration number
- GST number
- Legal contact email
- Last updated date

#### 🎉 Promotional Content

**File: `src/app/components/Hero.js`**
- Discount offers
- Free gift threshold (currently ₹500)
- Promo text

### Step 4: Add Your Images

#### Required Image Directories:

1. **Product & Category Images**: `public/images/`
2. **Social Media Images**: `public/og/`

#### Image Specifications:

**Category Images** (600x400px):
- `placeholder-books.jpg`
- `placeholder-school.jpg`
- `placeholder-office.jpg`
- `placeholder-gifts.jpg`
- `placeholder-art.jpg`
- `placeholder-corporate.jpg`

**Product Images** (800x800px):
- `placeholder-product-1.jpg` to `placeholder-product-6.jpg`

**Team Photos** (400x400px):
- `placeholder-team-1.jpg` to `placeholder-team-3.jpg`

**Open Graph Images** (1200x630px):
- `public/og/og-image.jpg`
- `public/og/twitter-image.jpg`

**Favicon**:
- Replace `public/favicon.ico`
- Generate at [favicon.io](https://favicon.io/)

### Step 5: Update Sample Data

**File: `src/lib/data.js`**

Update with your actual:
- Categories
- Products (with real prices)
- Testimonials
- Team members
- Services
- FAQs

### Step 6: Configure Contact Form Email

The contact form currently returns a success message without sending emails.

#### Option A: SendGrid (Recommended)

1. Sign up at [SendGrid](https://sendgrid.com/)
2. Get your API key
3. Install package:
   ```bash
   npm install @sendgrid/mail
   ```
4. Create `.env.local`:
   ```
   SENDGRID_API_KEY=your_api_key_here
   ```
5. Edit `src/app/api/contact/route.js` and uncomment SendGrid code

#### Option B: Use Form Service

Services like [Formspree](https://formspree.io/) or [Web3Forms](https://web3forms.com/) can handle form submissions without backend code.

### Step 7: Add Google Maps

**File: `src/app/contact/page.js`**

1. Go to [Google Maps](https://www.google.com/maps)
2. Find your store location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the placeholder in the contact page

### Step 8: Test Everything

Before going live, test:

- ✅ All pages load correctly
- ✅ Navigation works on mobile and desktop
- ✅ Contact form submits (check console logs)
- ✅ Dark mode toggle works
- ✅ All images load
- ✅ Links go to correct pages
- ✅ Responsive design on different screen sizes

### Step 9: Build for Production

```bash
npm run build
```

This will create an optimized production build. Check for any errors.

### Step 10: Deploy

#### Deploy to Vercel (Easiest):

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Add environment variables (if using SendGrid)
5. Deploy!

#### Other Options:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## 🔧 Environment Variables

Create `.env.local` file for sensitive data:

```env
# Email Service
SENDGRID_API_KEY=your_sendgrid_api_key

# Google Maps (optional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key

# Analytics (optional)
NEXT_PUBLIC_GA_TRACKING_ID=your_google_analytics_id
```

**Important**: Never commit `.env.local` to Git!

## 📱 Testing Checklist

### Desktop Testing
- [ ] Home page loads
- [ ] All navigation links work
- [ ] Hero animations play
- [ ] Product carousel auto-advances
- [ ] Contact form validates
- [ ] Dark mode toggle works
- [ ] Footer links work

### Mobile Testing
- [ ] Hamburger menu opens/closes
- [ ] All pages are readable
- [ ] Buttons are tappable (44px minimum)
- [ ] Images load properly
- [ ] Forms are usable
- [ ] No horizontal scroll

### Accessibility Testing
- [ ] Tab navigation works
- [ ] Skip to content link appears on focus
- [ ] All images have alt text
- [ ] Form labels are present
- [ ] Color contrast is sufficient
- [ ] Screen reader friendly

### SEO Testing
- [ ] Page titles are unique
- [ ] Meta descriptions are present
- [ ] Open Graph tags work (test with [OpenGraph.xyz](https://www.opengraph.xyz/))
- [ ] Structured data is valid (test with [Schema.org validator](https://validator.schema.org/))

## 🆘 Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
npm run build
```
Check the error message and fix the issue in the code.

### Images not loading
- Verify images are in `public/images/`
- Check file names match code references
- Ensure file extensions are correct

### Contact form not working
- Check browser console for errors
- Verify API route at `/api/contact` is accessible
- Check environment variables are set

### Dark mode not persisting
- Check browser localStorage is enabled
- Clear browser cache and try again

## 📞 Need Help?

If you encounter issues:
1. Check the README.md for detailed documentation
2. Review the code comments marked with `/* EDITABLE: */`
3. Consult Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
4. Check Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## 🎉 You're Ready!

Once you've completed all steps, your website is ready to launch. Don't forget to:
- Set up Google Analytics
- Submit sitemap to Google Search Console
- Test on real devices
- Get feedback from users
- Monitor performance with Lighthouse

**Good luck with THE SCRIBOR! 🚀**
