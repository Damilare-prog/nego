# Deployment Guide

## Deploy to GitHub Pages

### 1. Create a New Repository on GitHub

1. Go to [GitHub](https://github.com) and create a new repository named `nego`
2. Make it public (required for GitHub Pages free hosting)
3. Do NOT initialize with README, .gitignore, or license (we have our own)

### 2. Push the Code

```bash
# Navigate to the project directory
cd nego

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Production-ready Nego landing page"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/nego.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
4. The workflow will automatically trigger on your next push

### 4. Monitor Deployment

1. Go to the **Actions** tab in your repository
2. Watch the workflow run (takes ~2-3 minutes)
3. Once complete, your site will be live at:
   `https://YOUR_USERNAME.github.io/nego/`

### 5. Custom Domain (Optional)

If you own `negoempire.live`:

1. In repository Settings → Pages:
   - Under **Custom domain**, enter `negoempire.live`
   - Check "Enforce HTTPS"
2. Add a CNAME file to the `public/` folder with your domain
3. Configure DNS with your domain provider:
   - Type: CNAME
   - Name: www (or @ for root)
   - Value: YOUR_USERNAME.github.io

## Alternative: Deploy to Vercel

For even easier deployment with zero configuration:

1. Go to [Vercel](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Framework Preset: Next.js
5. Click Deploy

Your site will be live in seconds with automatic deployments on every push.

## Project Structure

```
nego/
├── app/                    # Next.js App Router
│   ├── components/         # Reusable components
│   ├── sections/           # Page sections
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities and data
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── not-found.tsx       # 404 page
├── public/                 # Static assets
├── .github/workflows/       # CI/CD
├── next.config.ts          # Next.js config
├── tailwind.config.ts      # Tailwind config
└── package.json            # Dependencies
```

## Features Implemented

✅ Age Gate with localStorage persistence
✅ Hero carousel with auto-advance
✅ Bento grid about section with stats
✅ Talent carousel with skeleton loaders
✅ Premium section with pricing tiers
✅ Trust badges (SSL, Discreet Billing, Verified)
✅ Newsletter signup in footer
✅ Framer Motion scroll animations
✅ Mobile-responsive navigation
✅ Professional copy and tone
✅ Real contact information
✅ GitHub Actions auto-deployment
