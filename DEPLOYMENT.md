# 🚀 Deployment Guide

This guide covers deploying THE SCRIBOR website to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All placeholder content is replaced with real data
- [ ] Images are optimized and uploaded
- [ ] Contact form is configured with email service
- [ ] Environment variables are documented
- [ ] SEO metadata is complete
- [ ] Google Maps is embedded (if desired)
- [ ] Social media links are updated
- [ ] Legal pages (Privacy, Terms) are reviewed
- [ ] Build succeeds locally: `npm run build`
- [ ] No console errors in production build
- [ ] Tested on multiple devices and browsers

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the creator of Next.js and offers the best integration.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/the-scribor.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com/)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add all variables from `.env.local`:
     - `SENDGRID_API_KEY`
     - `NEXT_PUBLIC_GA_TRACKING_ID`
     - etc.

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - You'll get a URL like `the-scribor.vercel.app`

5. **Custom Domain** (Optional)
   - Go to Settings → Domains
   - Add your custom domain (e.g., `thescribor.com`)
   - Follow DNS configuration instructions

#### Automatic Deployments:
- Every push to `main` branch triggers a new deployment
- Pull requests get preview deployments

---

### Option 2: Netlify

Netlify is another excellent option with generous free tier.

#### Steps:

1. **Push to GitHub** (same as Vercel)

2. **Import to Netlify**
   - Go to [netlify.com](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Netlify will auto-detect these for Next.js

4. **Environment Variables**
   - Go to Site settings → Environment variables
   - Add all variables from `.env.local`

5. **Deploy**
   - Click "Deploy site"
   - You'll get a URL like `the-scribor.netlify.app`

6. **Custom Domain**
   - Go to Domain settings
   - Add custom domain and configure DNS

---

### Option 3: AWS Amplify

Good for AWS ecosystem integration.

#### Steps:

1. **Push to GitHub**

2. **AWS Amplify Console**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect GitHub repository

3. **Build Settings**
   - Amplify auto-detects Next.js
   - Review and confirm build settings

4. **Environment Variables**
   - Add in App settings → Environment variables

5. **Deploy**
   - Amplify builds and deploys
   - Custom domain available in Domain management

---

### Option 4: Digital Ocean App Platform

Good balance of simplicity and control.

#### Steps:

1. **Push to GitHub**

2. **Create App**
   - Go to [Digital Ocean](https://www.digitalocean.com/)
   - Apps → Create App
   - Connect GitHub repository

3. **Configure**
   - Select Next.js as framework
   - Set environment variables
   - Choose plan (starts at $5/month)

4. **Deploy**
   - Digital Ocean builds and deploys
   - Custom domain in Settings

---

### Option 5: Self-Hosted (VPS)

For full control, deploy to your own server.

#### Requirements:
- Ubuntu/Debian VPS
- Node.js 18+
- Nginx or Apache
- PM2 for process management

#### Steps:

1. **Prepare Server**
   ```bash
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2
   sudo npm install -g pm2
   ```

2. **Upload Code**
   ```bash
   # Clone repository
   git clone https://github.com/yourusername/the-scribor.git
   cd the-scribor
   
   # Install dependencies
   npm install
   
   # Create .env.local with production values
   nano .env.local
   
   # Build
   npm run build
   ```

3. **Start with PM2**
   ```bash
   pm2 start npm --name "the-scribor" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name thescribor.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d thescribor.com
   ```

---

## 🔐 Environment Variables for Production

Ensure these are set in your hosting platform:

```env
# Required
SENDGRID_API_KEY=your_actual_key

# Recommended
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://thescribor.com

# Optional
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_key
```

---

## 📊 Post-Deployment Tasks

### 1. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (domain or URL prefix)
3. Verify ownership (use HTML tag method)
4. Submit sitemap: `https://thescribor.com/sitemap.xml`

### 2. Google Analytics

1. Create GA4 property at [Google Analytics](https://analytics.google.com/)
2. Get tracking ID (G-XXXXXXXXXX)
3. Add to environment variables
4. Implement tracking code in `src/app/layout.js`

### 3. Performance Monitoring

Test your site with:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### 4. Security Headers

Add security headers in `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
      ],
    },
  ]
}
```

### 5. Monitoring & Uptime

Set up monitoring with:
- [UptimeRobot](https://uptimerobot.com/) (free)
- [Pingdom](https://www.pingdom.com/)
- Vercel Analytics (if using Vercel)

---

## 🔄 Continuous Deployment

### Automatic Deployments:

Most platforms support automatic deployments:
- Push to `main` branch → Production deployment
- Push to `develop` branch → Staging deployment
- Pull requests → Preview deployments

### Manual Deployments:

If needed, trigger manual deployments:

**Vercel:**
```bash
npm install -g vercel
vercel --prod
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 🐛 Troubleshooting Deployment Issues

### Build Fails

**Check build logs** for errors:
- Missing environment variables
- Import errors
- Type errors
- Missing dependencies

**Solution:**
```bash
# Test build locally first
npm run build

# If successful locally but fails on platform:
# - Check Node.js version matches
# - Verify all dependencies are in package.json
# - Check environment variables are set
```

### 404 Errors

**Cause:** Routing issues or missing files

**Solution:**
- Ensure `src/app` structure is correct
- Check all page files export default components
- Verify API routes are in `src/app/api/`

### Images Not Loading

**Cause:** Incorrect paths or missing files

**Solution:**
- Images must be in `public/` directory
- Reference without `/public` prefix: `/images/logo.png`
- Check file names match exactly (case-sensitive)

### Environment Variables Not Working

**Cause:** Not set in hosting platform

**Solution:**
- Add all variables in platform dashboard
- Prefix client-side variables with `NEXT_PUBLIC_`
- Redeploy after adding variables

---

## 📞 Support

For deployment help:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Netlify: [netlify.com/support](https://www.netlify.com/support/)
- Next.js: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

---

**Your website is ready to go live! 🎉**
