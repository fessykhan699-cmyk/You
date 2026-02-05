# GitHub & Vercel Deployment Guide

## Step 1: Prepare Your Project

✅ Your project is already configured with:
- `.gitignore` file
- `package.json` with build scripts
- Production-ready Vite configuration

## Step 2: Create GitHub Repository

### Option A: Using GitHub CLI (gh)

```bash
# Install GitHub CLI if you haven't: https://cli.github.com/
gh auth login
gh repo create polish-clothing-website --public --source=. --remote=origin
git add .
git commit -m "Initial commit: Polish clothing website"
git push -u origin main
```

### Option B: Using GitHub Web Interface

1. Go to https://github.com/new
2. Create a new repository (e.g., `polish-clothing-website`)
3. Don't initialize with README (we already have files)
4. Copy the repository URL

Then in your terminal:

```bash
cd app
git remote add origin https://github.com/YOUR_USERNAME/polish-clothing-website.git
git add .
git commit -m "Initial commit: Polish clothing website"
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Method 1: Vercel Dashboard (Easiest)

1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click "Add New" → "Project"
4. Import your `polish-clothing-website` repository
5. Vercel will auto-detect it's a Vite project
6. Configure the following settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
7. Click "Deploy"

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Link to existing project? No
# - What's your project's name? polish-clothing-website
# - In which directory is your code located? ./
# - Want to override the settings? No

# For production deployment:
vercel --prod
```

## Step 4: Configuration (Optional)

Create `vercel.json` in the root directory if you need custom settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite"
}
```

## Step 5: Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Automatic Deployments

Once connected, Vercel will automatically:
- ✅ Deploy every push to `main` branch
- ✅ Create preview deployments for pull requests
- ✅ Provide unique URLs for each deployment

## Environment Variables (If Needed)

If you add environment variables later:

1. Create `.env.local` file locally (already in .gitignore)
2. Add variables to Vercel:
   - Go to Project Settings → Environment Variables
   - Add each variable
   - Redeploy the project

## Troubleshooting

### Build Fails on Vercel

Check these common issues:
- Node version mismatch (Vercel uses Node 18 by default)
- Missing dependencies in package.json
- TypeScript errors

### Assets Not Loading

- Ensure images are in `/public` folder
- Check that paths don't have leading `/` in imports
- Clear Vercel cache and redeploy

## Monitoring & Analytics

- **Vercel Analytics:** Enable in Project Settings for traffic insights
- **Performance:** Check Core Web Vitals in the Vercel dashboard

## Your Deployment URLs

After deployment, you'll get:
- **Production:** https://polish-clothing-website.vercel.app
- **Preview:** Unique URL for each branch/PR

## Next Steps

1. ✅ Share your live URL
2. Add custom domain (optional)
3. Enable Vercel Analytics
4. Set up continuous deployment workflow
5. Add your repository to your portfolio

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com
