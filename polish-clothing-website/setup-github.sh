#!/bin/bash

# Polish Clothing Website - GitHub Setup Script
# This script helps you quickly push your code to GitHub

echo "==================================="
echo "GitHub Setup Script"
echo "==================================="
echo ""

# Get GitHub username
read -p "Enter your GitHub username: " GITHUB_USERNAME

# Get repository name
read -p "Enter repository name (default: polish-clothing-website): " REPO_NAME
REPO_NAME=${REPO_NAME:-polish-clothing-website}

echo ""
echo "Setting up remote repository..."
echo "Repository URL: https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
echo ""

# Add remote
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git" 2>/dev/null

if [ $? -ne 0 ]; then
    echo "Remote 'origin' already exists. Updating URL..."
    git remote set-url origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
fi

echo ""
echo "Checking git status..."
git status

echo ""
echo "==================================="
echo "Ready to push!"
echo "==================================="
echo ""
echo "Make sure you've created the repository on GitHub first:"
echo "https://github.com/new"
echo ""
echo "Then run: git push -u origin main"
echo ""
echo "After pushing, go to https://vercel.com to deploy!"
echo ""
