# Deployment Guide: GitHub + Vercel

## Step 1: Push to GitHub

### Create a new repository on GitHub:
1. Go to https://github.com/new
2. Repository name: `polish-clothing-website` (or your preferred name)
3. Choose Public or Private
4. **Do NOT** initialize with README (we already have one)
5. Click "Create repository"

### Push your local code to GitHub:
Run these commands in your terminal (in the project folder):

```bash
git remote add origin https://github.com/YOUR_USERNAME/polish-clothing-website.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Step 2: Deploy to Vercel

### Option A: Via Vercel Dashboard (Easiest - Recommended)

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign in with your GitHub account

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find and select `polish-clothing-website`

3. **Configure Project:**
   - **Framework Preset:** Vercel will auto-detect "Vite"
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `dist` (auto-filled)
   - **Install Command:** `npm install` (auto-filled)

4. **Deploy:**
   - Click "Deploy"
   - Wait 1-2 minutes for build to complete
   - Your site will be live at: `https://polish-clothing-website.vercel.app`

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project directory
cd /path/to/polish-clothing-website

# Login to Vercel (opens browser)
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

---

## Step 3: Automatic Deployments

Once connected, Vercel will automatically deploy:
- **Every push to `main` branch** → Production deployment
- **Pull requests** → Preview deployments

---

## Step 4: Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed by Vercel
5. Vercel provides free SSL certificates automatically

---

## Troubleshooting

### Build fails on Vercel:
- Check Node.js version (should be 18+)
- In Vercel project settings → Environment → set Node version: 18.x

### Images not loading:
- Ensure all images are in the `public/` folder
- Check that paths in code use `/image.jpg` (not `./image.jpg`)

### 404 on refresh:
- This shouldn't happen with Vite, but if it does:
- Create `vercel.json` in root with:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## Monitoring & Analytics

- **Vercel Dashboard:** View deployment logs, analytics, and performance
- **Analytics:** Enable in Vercel project settings (free tier available)
- **Speed Insights:** Monitor Core Web Vitals

---

## Quick Reference Commands

```bash
# Local development
npm run dev              # Start dev server (localhost:5173)
npm run build            # Build for production
npm run preview          # Preview production build locally

# Git
git add .                # Stage changes
git commit -m "message"  # Commit changes
git push                 # Push to GitHub (triggers Vercel deploy)

# Vercel CLI
vercel                   # Deploy preview
vercel --prod            # Deploy to production
vercel logs              # View deployment logs
```

---

## Environment Variables (if needed later)

If you need to add API keys or secrets:

1. **Vercel Dashboard:**
   - Project Settings → Environment Variables
   - Add variables (e.g., `VITE_API_KEY`)

2. **Local Development:**
   - Create `.env.local` file in root
   - Add: `VITE_API_KEY=your_key_here`
   - `.env.local` is git-ignored by default

3. **Access in code:**
   ```typescript
   const apiKey = import.meta.env.VITE_API_KEY
   ```

---

## Success Checklist

- [ ] Code pushed to GitHub
- [ ] GitHub repository is accessible
- [ ] Vercel project created and connected
- [ ] First deployment successful
- [ ] Website loads correctly at Vercel URL
- [ ] All images display properly
- [ ] All animations and interactions work
- [ ] Mobile responsive layout verified
- [ ] Custom domain configured (optional)

---

**Your site should now be live!** 🎉

Default URL format: `https://[project-name]-[random-hash].vercel.app`

You can customize the project name in Vercel settings.
