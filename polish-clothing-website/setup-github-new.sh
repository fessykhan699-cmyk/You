#!/bin/bash

# Polish Clothing Website - GitHub Setup Script
# This script automates the process of pushing your code to GitHub

echo "🚀 Polish Clothing Website - GitHub Setup"
echo "=========================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing git repository..."
    git init
fi

# Check if remote already exists
if git remote | grep -q "origin"; then
    echo "⚠️  Remote 'origin' already exists."
    echo "Current remote URL:"
    git remote get-url origin
    echo ""
    read -p "Do you want to update it? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter your GitHub repository URL: " repo_url
        git remote set-url origin "$repo_url"
        echo "✅ Remote URL updated!"
    fi
else
    # Ask for repository URL
    echo "📝 Please create a repository on GitHub first:"
    echo "   Go to: https://github.com/new"
    echo ""
    read -p "Enter your GitHub repository URL: " repo_url
    
    if [ -z "$repo_url" ]; then
        echo "❌ No URL provided. Exiting."
        exit 1
    fi
    
    git remote add origin "$repo_url"
    echo "✅ Remote added successfully!"
fi

echo ""
echo "📋 Preparing files for commit..."

# Add all files
git add .

echo ""
echo "💬 Creating commit..."
git commit -m "Initial commit: Polish clothing website

- React 19 + TypeScript + Vite
- Tailwind CSS with shadcn/ui components
- Responsive design with smooth animations
- Product showcase and collections
- Newsletter subscription
- Ready for Vercel deployment"

echo ""
echo "🌿 Setting up main branch..."
git branch -M main

echo ""
echo "📤 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 SUCCESS! Your code is now on GitHub!"
    echo ""
    echo "Next steps:"
    echo "1. Visit your repository on GitHub"
    echo "2. Go to https://vercel.com to deploy"
    echo "3. Import your GitHub repository"
    echo "4. Click 'Deploy' - Vercel will auto-configure everything!"
    echo ""
    echo "📖 For detailed deployment instructions, see GITHUB_VERCEL_GUIDE.md"
else
    echo ""
    echo "❌ Push failed. Common fixes:"
    echo "1. Make sure you've created the repository on GitHub"
    echo "2. Check if you're logged in: git config user.name && git config user.email"
    echo "3. Try: git push -u origin main --force (if you're sure)"
fi
