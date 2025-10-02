# ✅ THE SCRIBOR — Launch Checklist

Use this checklist to track your progress from setup to launch.

---

## 🚀 Phase 1: Initial Setup

- [ ] Run `npm install` to install dependencies
- [ ] Run `npm run dev` to start development server
- [ ] Verify site loads at http://localhost:3000
- [ ] Browse all pages to familiarize yourself with the site
- [ ] Read README.md and SETUP.md

---

## 📝 Phase 2: Content Updates

### Business Information

- [ ] Update store address in `src/app/contact/page.js`
- [ ] Update store address in `src/app/components/Footer.js`
- [ ] Update phone number in contact page
- [ ] Update phone number in footer
- [ ] Update email addresses throughout
- [ ] Update store hours in contact page
- [ ] Update business registration number in `src/app/terms/page.js`
- [ ] Update GST number in terms page

### SEO & Metadata

- [ ] Update domain URL in `src/app/layout.js` (replace thescribor.com)
- [ ] Update Google verification code in layout.js
- [ ] Update business address in `src/app/components/SEO.js`
- [ ] Update GPS coordinates in SEO.js
- [ ] Update opening hours in SEO.js
- [ ] Update social media URLs in SEO.js

### Social Media Links

- [ ] Update Facebook URL in footer
- [ ] Update Instagram URL in footer
- [ ] Update Twitter URL in footer
- [ ] Update WhatsApp number in footer
- [ ] Update social links in contact page

### Promotional Content

- [ ] Update promo text in `src/app/components/Hero.js`
- [ ] Update discount percentage (currently 10%)
- [ ] Update free gift threshold (currently ₹500)
- [ ] Update hero headline if desired
- [ ] Update CTA button text if desired

### Sample Data

- [ ] Update categories in `src/lib/data.js`
- [ ] Add real products with actual prices
- [ ] Replace sample testimonials with real ones
- [ ] Update team member information
- [ ] Customize services offered
- [ ] Update FAQ questions and answers
- [ ] Update "Why Choose Us" section

### Legal Pages

- [ ] Review and customize Privacy Policy
- [ ] Review and customize Terms & Conditions
- [ ] Update last modified dates
- [ ] Update contact emails for legal/privacy concerns

---

## 🎨 Phase 3: Visual Assets

### Images

- [ ] Replace `public/favicon.ico` with your favicon
- [ ] Add category images to `public/images/`:
  - [ ] placeholder-books.jpg (600x400px)
  - [ ] placeholder-school.jpg (600x400px)
  - [ ] placeholder-office.jpg (600x400px)
  - [ ] placeholder-gifts.jpg (600x400px)
  - [ ] placeholder-art.jpg (600x400px)
  - [ ] placeholder-corporate.jpg (600x400px)
- [ ] Add product images to `public/images/`:
  - [ ] placeholder-product-1.jpg through 6 (800x800px)
- [ ] Add team photos to `public/images/`:
  - [ ] placeholder-team-1.jpg through 3 (400x400px)
- [ ] Add testimonial photos (optional)
- [ ] Add Open Graph images to `public/og/`:
  - [ ] og-image.jpg (1200x630px)
  - [ ] twitter-image.jpg (1200x630px)

### Branding (Optional)

- [ ] Customize logo in `src/app/components/Logo.js`
- [ ] Update color scheme in `tailwind.config.js` (if desired)
- [ ] Change fonts in `src/styles/globals.css` (if desired)

---

## 🔧 Phase 4: Configuration

### Environment Variables

- [ ] Copy `.env.example` to `.env.local`
- [ ] Add SendGrid API key (or other email service)
- [ ] Add Google Maps API key (optional)
- [ ] Add Google Analytics tracking ID (optional)
- [ ] Update site URL in .env.local

### Email Service

- [ ] Choose email service (SendGrid, Nodemailer, or form service)
- [ ] Install required packages if using SendGrid/Nodemailer
- [ ] Configure email service in `src/app/api/contact/route.js`
- [ ] Test contact form submission
- [ ] Verify emails are received

### Google Maps

- [ ] Get Google Maps embed code for your location
- [ ] Replace map placeholder in `src/app/contact/page.js`
- [ ] Test map loads correctly

### Analytics (Optional)

- [ ] Set up Google Analytics account
- [ ] Get GA4 tracking ID
- [ ] Add tracking code to `src/app/layout.js`
- [ ] Verify tracking works

---

## 🧪 Phase 5: Testing

### Functionality Testing

- [ ] Test all navigation links
- [ ] Test hamburger menu on mobile
- [ ] Test dark mode toggle
- [ ] Test contact form submission
- [ ] Test form validation (try submitting empty form)
- [ ] Test newsletter signup
- [ ] Test product carousel auto-advance
- [ ] Test testimonial slider
- [ ] Test FAQ accordion expand/collapse
- [ ] Test modal open/close (Request Quote button)
- [ ] Test all internal links
- [ ] Test social media links

### Responsive Testing

- [ ] Test on mobile phone (portrait)
- [ ] Test on mobile phone (landscape)
- [ ] Test on tablet (portrait)
- [ ] Test on tablet (landscape)
- [ ] Test on laptop (1366x768)
- [ ] Test on desktop (1920x1080)
- [ ] Test on large screen (2560x1440)

### Browser Testing

- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge
- [ ] Test on mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility Testing

- [ ] Test keyboard navigation (Tab key)
- [ ] Test skip-to-content link (Tab on page load)
- [ ] Test screen reader (NVDA or VoiceOver)
- [ ] Verify all images have alt text
- [ ] Verify all form inputs have labels
- [ ] Check color contrast (use browser dev tools)
- [ ] Test with reduced motion enabled

### Performance Testing

- [ ] Run Lighthouse audit in Chrome DevTools
- [ ] Check Performance score (target: 90+)
- [ ] Check Accessibility score (target: 95+)
- [ ] Check Best Practices score (target: 95+)
- [ ] Check SEO score (target: 95+)
- [ ] Test page load speed on slow 3G
- [ ] Optimize images if needed

### SEO Testing

- [ ] Verify page titles are unique
- [ ] Verify meta descriptions are present
- [ ] Test Open Graph tags with [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Test Twitter cards
- [ ] Validate structured data with [Schema.org validator](https://validator.schema.org/)
- [ ] Check robots.txt is accessible
- [ ] Verify sitemap will be generated

---

## 🚀 Phase 6: Pre-Deployment

### Code Quality

- [ ] Run `npm run lint` and fix any errors
- [ ] Run `npm run build` successfully
- [ ] Review console for any warnings
- [ ] Remove any console.log statements
- [ ] Remove any TODO comments
- [ ] Verify no sensitive data in code

### Git Setup

- [ ] Initialize Git repository: `git init`
- [ ] Create `.gitignore` (already included)
- [ ] Verify `.env.local` is in .gitignore
- [ ] Make initial commit
- [ ] Create GitHub repository
- [ ] Push code to GitHub

### Documentation Review

- [ ] Update README.md if you made significant changes
- [ ] Document any custom configurations
- [ ] Note any special deployment requirements

---

## 🌐 Phase 7: Deployment

### Choose Hosting Platform

- [ ] Decide on hosting (Vercel recommended)
- [ ] Create account on chosen platform
- [ ] Review pricing and limits

### Deploy

- [ ] Import repository to hosting platform
- [ ] Configure build settings (usually auto-detected)
- [ ] Add environment variables on hosting platform
- [ ] Trigger first deployment
- [ ] Verify deployment succeeds
- [ ] Test deployed site thoroughly

### Custom Domain (Optional)

- [ ] Purchase domain name (if not already owned)
- [ ] Add custom domain in hosting dashboard
- [ ] Configure DNS records
- [ ] Wait for DNS propagation (can take 24-48 hours)
- [ ] Verify SSL certificate is active
- [ ] Test site on custom domain

---

## 📊 Phase 8: Post-Launch

### Search Engine Setup

- [ ] Submit site to Google Search Console
- [ ] Verify ownership
- [ ] Submit sitemap
- [ ] Request indexing for main pages
- [ ] Set up Bing Webmaster Tools (optional)

### Analytics & Monitoring

- [ ] Verify Google Analytics is tracking
- [ ] Set up conversion goals (form submissions)
- [ ] Set up uptime monitoring (UptimeRobot, etc.)
- [ ] Configure email alerts for downtime

### Social Media

- [ ] Share website on Facebook
- [ ] Share website on Instagram
- [ ] Share website on WhatsApp Business
- [ ] Update social media bios with website link

### Marketing

- [ ] Add website to Google My Business
- [ ] Add website to local directories
- [ ] Create social media posts announcing launch
- [ ] Send email to existing customers
- [ ] Update business cards with website URL

---

## 🔄 Ongoing Maintenance

### Regular Tasks

- [ ] Monitor contact form submissions
- [ ] Respond to inquiries promptly
- [ ] Update product information regularly
- [ ] Add new testimonials as received
- [ ] Update promotional offers
- [ ] Check for broken links monthly
- [ ] Review analytics monthly
- [ ] Update content seasonally

### Technical Maintenance

- [ ] Update dependencies quarterly: `npm update`
- [ ] Check for security vulnerabilities: `npm audit`
- [ ] Review and update legal pages annually
- [ ] Renew domain name annually
- [ ] Back up site regularly
- [ ] Monitor site performance
- [ ] Test on new browser versions

---

## 📝 Notes & Custom Tasks

Add your own custom tasks here:

- [ ] _______________________________________________
- [ ] _______________________________________________
- [ ] _______________________________________________
- [ ] _______________________________________________
- [ ] _______________________________________________

---

## 🎉 Launch Ready!

When all items are checked, you're ready to launch!

**Congratulations on your new website! 🚀**

---

**Last Updated**: October 2, 2025  
**Project**: THE SCRIBOR — House of Paper  
**Status**: Ready for Launch ✅
