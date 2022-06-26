#!/usr/bin/env sh

# Build the app
npm run build
cd "dist"

# Initialize git repo
git rev-parse --is-inside-work-tree > "/dev/null" && git init
git branch --force --move "main"

# Commit the distribution
git add --all
git commit --message="deploy"

# Push to https://utilyre.github.io/commission
git push --force "git@github.com:utilyre/commission.git" "main:gh-pages"
