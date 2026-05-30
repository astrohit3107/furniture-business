# GitHub & Vercel Deployment Guide

## 🚀 Complete Setup for GitHub & Vercel Deployment

This guide covers everything needed to deploy your LUXESPACES website to GitHub and Vercel.

---

## Part 1: GitHub Setup

### Step 1: Initialize Git Repository

```bash
# Navigate to your project
cd luxespaces-website

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: LUXESPACES website"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create new repository: `luxespaces-website`
3. **Important**: Do NOT initialize with README, .gitignore, or license
4. Copy the repository URL

### Step 3: Connect Local Repository to GitHub

```bash
# Add remote origin
git remote add origin https://github.com/yourusername/luxespaces-website.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 4: Verify GitHub Setup

- [ ] Repository appears on GitHub
- [ ] All files are pushed
- [ ] Main branch is default
- [ ] No build artifacts in repo (check `.gitignore`)

---

## Part 2: Vercel Deployment

### Option A: Deploy via Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel (opens browser)
vercel login

# Deploy
vercel --prod
```

### Option B: Deploy via GitHub Integration (Easiest)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Click "Import Git Repository"
4. Paste your GitHub repository URL
5. Click "Import"
6. Configure project:
   - **Framework Preset**: Next.js ✅
   - **Root Directory**: ./ ✅
   - **Build Command**: npm run build ✅
   - **Output Directory**: .next ✅
7. Add Environment Variables (if needed)
8. Click "Deploy"

### Step 1: Configure Environment Variables on Vercel

1. Go to Project Settings → Environment Variables
2. Add variables from `.env.example`:
   ```
   NEXT_PUBLIC_APP_URL=https://yourdomain.com
   ```
3. **Never** add secrets in your repository - only on Vercel

### Step 2: Configure Domain

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., luxespaces.com)
3. Update DNS records with Vercel instructions
4. Or use auto-generated domain: `luxespaces-website.vercel.app`

### Step 3: Enable Auto-Deployments

This happens automatically when you use GitHub integration:
- ✅ Main branch automatically deploys to production
- ✅ Pull requests create preview deployments
- ✅ All commits trigger builds

---

## Part 3: Vercel Configuration Files

Your project includes optimized configs:

### vercel.json - Verified ✅
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "nodeVersion": "20.x"
}
```
**Status**: Ready for Vercel deployment

### next.config.js - Verified ✅
```javascript
{
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: {
    domains: ['images.unsplash.com', ...],
    formats: ['image/avif', 'image/webp']
  },
  headers: [ /* Security headers */ ],
  poweredByHeader: false
}
```
**Status**: Optimized for production

### package.json - Verified ✅
```json
{
  "engines": {
    "node": "18.x || 19.x || 20.x",
    "npm": "9.x || 10.x"
  },
  "scripts": {
    "build": "next build",
    "start": "next start"
  }
}
```
**Status**: Compatible with Vercel

---

## Part 4: Pre-Deployment Checklist

### Code Quality
- [ ] `npm run lint` passes without errors
- [ ] `npm run type-check` passes
- [ ] No console errors in development
- [ ] No unhandled promises

### Build Verification
```bash
# Test production build locally
npm run build

# Test production server
npm start

# Visit http://localhost:3000
```

Verify:
- [ ] Website loads
- [ ] All pages accessible
- [ ] Images load correctly
- [ ] Animations smooth
- [ ] Mobile responsive
- [ ] No errors in console

### Dependencies
```bash
# Check for security vulnerabilities
npm audit

# Update dependencies (optional)
npm update
```

### Environment Variables
- [ ] `.env.local` never committed
- [ ] `.env.example` has template
- [ ] Production vars set in Vercel dashboard
- [ ] No secrets in code

### Git Repository
```bash
# View all files that will be pushed
git ls-files

# Verify .gitignore is correct
cat .gitignore
```

Should NOT include:
- ❌ node_modules/
- ❌ .next/
- ❌ .env.local
- ❌ .env.*.local
- ❌ .DS_Store

---

## Part 5: Deployment Commands

### First-Time Deployment

```bash
# 1. Make sure everything is committed
git status  # Should be clean

# 2. Push to GitHub
git push origin main

# 3. Vercel auto-deploys (wait 2-3 minutes)

# 4. Visit your Vercel domain
# https://luxespaces-website.vercel.app
```

### Subsequent Deployments

Just push to GitHub - Vercel handles the rest:

```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main

# Watch deployment in Vercel dashboard
# Production deploys in ~30 seconds
```

---

## Part 6: Monitoring & Debugging

### Check Deployment Status

1. **Vercel Dashboard**: https://vercel.com/dashboard
   - View build logs
   - Check deployment status
   - Monitor performance

2. **GitHub Actions** (if enabled):
   - Goes to Workflows tab
   - Shows deployment history

### View Build Logs

**On Vercel:**
1. Go to Project → Deployments
2. Click on deployment
3. Scroll to "Build Logs"
4. Check for errors

**Common Issues:**

| Error | Solution |
|-------|----------|
| "Module not found" | Run `npm install` locally, push to GitHub |
| "Port 3000 is in use" | Different port: `next dev -p 3001` |
| "Build timeout" | Optimize images, reduce bundle size |
| "Out of memory" | Increase Node memory or split code |

### Real-time Logs

```bash
# Tail Vercel logs in terminal
vercel logs --follow

# View specific deployment
vercel logs <deployment-url>
```

---

## Part 7: Troubleshooting

### Issue: "Build failed on Vercel but works locally"

**Solution:**
```bash
# Exactly replicate Vercel environment
rm -rf node_modules .next
npm ci  # Clean install (uses package-lock.json)
npm run build
npm start
```

### Issue: "Environment variables not working"

**Solution:**
1. Add to Vercel dashboard (not .env file)
2. Redeploy after adding vars
3. Check `console.log()` with dev tools
4. NEXT_PUBLIC_ prefix for browser-exposed vars only

### Issue: "Image not loading on Vercel"

**Solution:**
1. Check `next.config.js` has correct image domains
2. Ensure image URL is accessible
3. Try `next/image` component
4. Check image format (WebP vs JPG)

### Issue: "Animations stuttering on mobile"

**Solution:**
1. Reduce animation complexity
2. Use `transform` and `opacity` only
3. Avoid `width` and `height` animations
4. Check `will-change` usage

---

## Part 8: Performance Optimization for Vercel

### Enable Caching

**In vercel.json:**
```json
{
  "headers": [
    {
      "source": "/static/:path*",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Optimize Images

```bash
# Install Sharp (image optimization)
npm install sharp

# Vercel automatically optimizes with Next.js
```

### Monitor Performance

1. Go to Vercel Analytics
2. Check Core Web Vitals
3. View page speed metrics
4. Monitor build times

---

## Part 9: CI/CD with GitHub Actions

### Optional: Automatic Linting on Push

Create `.github/workflows/lint.yml`:

```yaml
name: Lint

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
```

---

## Part 10: Domain Setup

### Connect Custom Domain

1. **Vercel Dashboard** → Projects → Settings → Domains
2. Enter your domain: `luxespaces.com`
3. Update DNS records:

**For Godaddy / Namecheap:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For your root domain:**
```
Type: A
Name: @
Value: 76.76.19.165

Type: AAAA
Name: @
Value: 2606:4700:4700::1111
```

### Verify Domain

```bash
# Check DNS propagation
nslookup luxespaces.com
dig luxespaces.com

# Should resolve to Vercel IPs within 24 hours
```

---

## Part 11: Post-Deployment

### Verify Live Deployment

- [ ] Visit your domain
- [ ] All pages load
- [ ] Images display
- [ ] Animations work
- [ ] Forms functional
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Run Lighthouse audit

### Monitor Deployment

```bash
# Get deployment info
vercel inspect

# Set as production
vercel alias <deployment-url> luxespaces.com
```

### Rollback if Needed

```bash
# View previous deployments
vercel list

# Redeploy previous version
vercel rollback
```

---

## Part 12: Continuous Improvement

### Weekly Maintenance

- [ ] Monitor Vercel Analytics
- [ ] Check error logs
- [ ] Review performance metrics
- [ ] Update content if needed

### Monthly Tasks

- [ ] Update dependencies: `npm update`
- [ ] Run security audit: `npm audit`
- [ ] Test all forms and CTAs
- [ ] Check for broken links
- [ ] Verify image loading

### Quarterly Review

- [ ] Full performance audit
- [ ] Security audit
- [ ] Mobile testing
- [ ] Browser compatibility
- [ ] Plan updates/features

---

## Quick Reference

### Essential Commands

```bash
# Local development
npm run dev         # Start dev server
npm run build       # Build for production
npm start           # Run production build
npm run lint        # Check code quality

# Git workflow
git status          # Check changes
git add .           # Stage all changes
git commit -m "..."  # Create commit
git push            # Push to GitHub

# Vercel
vercel login        # Authenticate
vercel --prod       # Deploy to production
vercel logs         # View logs
```

### Important URLs

- **GitHub**: https://github.com/yourusername/luxespaces-website
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Live Site**: https://luxespaces-website.vercel.app
- **Custom Domain**: https://luxespaces.com

---

## Getting Help

### Vercel Support
- Docs: https://vercel.com/docs
- Status: https://www.vercelstatus.com
- Community: https://github.com/vercel/next.js/discussions

### Next.js Support
- Docs: https://nextjs.org/docs
- GitHub Issues: https://github.com/vercel/next.js/issues
- Community: https://stackoverflow.com/questions/tagged/next.js

---

**✅ Your website is now ready for GitHub and Vercel deployment!**

Start with Step 1 (GitHub Setup) and follow through. You'll be live in less than 30 minutes.
