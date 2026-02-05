# 🚀 Quick Start Guide

Get your Polish Clothing Website live in 5 minutes!

## Prerequisites

- GitHub account
- Vercel account (free - sign up at vercel.com)
- Git installed on your computer

## Option 1: Automated Setup (Fastest)

```bash
# Run the setup script
./setup-github-new.sh
```

Follow the prompts and you're done!

## Option 2: Manual Setup

### Step 1: Push to GitHub

```bash
# 1. Create a new repository on GitHub
#    Visit: https://github.com/new
#    Name it: polish-clothing-website (or anything you like)
#    Don't initialize with README

# 2. Configure git (if you haven't already)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# 3. Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/polish-clothing-website.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New"** → **"Project"**
3. Select your **polish-clothing-website** repository
4. Click **"Deploy"**

That's it! Vercel automatically detects Vite and configures everything.

## What You Get

✅ **Production URL:** `https://your-project.vercel.app`  
✅ **Auto-deploy:** Every push to main triggers deployment  
✅ **Preview URLs:** Every pull request gets a unique URL  
✅ **HTTPS:** Free SSL certificate  
✅ **Global CDN:** Fast worldwide performance  

## Verify Your Deployment

After deployment completes:

1. ✅ Visit your Vercel URL
2. ✅ Check all sections load correctly
3. ✅ Test on mobile and desktop
4. ✅ Verify images are displaying

## Troubleshooting

### Push Failed?

```bash
# Make sure you're in the app directory
cd app

# Check git status
git status

# Try force push (only if you're sure)
git push -u origin main --force
```

### Build Failed on Vercel?

- Check the build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Try building locally: `npm run build`

### Need Help?

- Read the full guide: `GITHUB_VERCEL_GUIDE.md`
- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com

## Next Steps

1. 🎨 Customize your site
2. 🌐 Add a custom domain
3. 📊 Enable Vercel Analytics
4. 🚀 Share your live URL!

---

**Time to launch:** ~5 minutes  
**Cost:** $0 (free tier)  
**Difficulty:** Easy ⭐⭐☆☆☆
