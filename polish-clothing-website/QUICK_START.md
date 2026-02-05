# Quick Start Cheat Sheet

## 🚀 Upload to GitHub (5 minutes)

### 1. Create Repository on GitHub
```
Go to: https://github.com/new
Name: polish-clothing-website
Visibility: Public or Private
DON'T check "Initialize with README"
Click "Create repository"
```

### 2. Push Your Code
```bash
# In your project folder, run:
git remote add origin https://github.com/YOUR_USERNAME/polish-clothing-website.git
git push -u origin main
```

✅ Done! Your code is now on GitHub.

---

## ⚡ Deploy to Vercel (2 minutes)

### Quick Deploy
```
1. Go to: https://vercel.com
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Select your repository: polish-clothing-website
5. Click "Deploy" (Vercel auto-detects Vite config)
6. Wait ~60 seconds
```

✅ Done! Your site is live at: `https://your-project.vercel.app`

---

## 📝 Key Files Added

- `.gitignore` - Tells git which files to ignore
- `README.md` - Updated with project info
- `DEPLOYMENT_GUIDE.md` - Detailed deployment instructions
- `setup-github.sh` - Helper script for GitHub setup

---

## 🔄 Making Changes Later

```bash
# Make your changes to code
npm run dev           # Test locally

# Push changes
git add .
git commit -m "Update design"
git push

# Vercel will auto-deploy in ~1 minute
```

---

## 🛠️ Local Development

```bash
npm install          # Install dependencies (first time only)
npm run dev          # Start dev server → http://localhost:5173
npm run build        # Build for production
npm run preview      # Preview production build
```

---

## 🆘 Need Help?

- **Build fails?** Check Node.js version is 18+ in Vercel settings
- **Images missing?** Ensure they're in `public/` folder
- **Vercel docs:** https://vercel.com/docs

---

## ⚡ Super Quick Deploy (Alternative)

If you want to skip GitHub:
```bash
npm i -g vercel
vercel login
vercel --prod
```

This uploads directly from your computer to Vercel.

---

**That's it!** 🎉 Your Polish Clothing Website is ready to go live.
