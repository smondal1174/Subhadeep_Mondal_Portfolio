# Vercel Deployment Guide

## Quick Fix for 404 Error

The `vercel.json` configuration file has been added to fix the 404 error. Follow these steps:

## Option 1: Redeploy Automatically

If you already connected the repository to Vercel:
1. Vercel will automatically detect the new commit
2. It will trigger a new deployment
3. Wait for the build to complete
4. Your site should now work! 🎉

## Option 2: Manual Deployment

If you need to redeploy manually:

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Find your `Subhadeep_Mondal_Portfolio` project
3. Click on the project
4. Go to "Settings" → "Git"
5. Scroll down and click "Redeploy" or trigger a new deployment

## Option 3: Fresh Import (If needed)

If you want to start fresh:

1. Go to https://vercel.com/new
2. Click "Import" next to your repository: `smondal1174/Subhadeep_Mondal_Portfolio`
3. **Important Settings**:
   - **Framework Preset**: Other (or None)
   - **Root Directory**: Leave as `.` (root)
   - **Build Command**: `cd frontend && yarn install && yarn build`
   - **Output Directory**: `frontend/build`
   - **Install Command**: `cd frontend && yarn install`

4. Click "Deploy"
5. Wait for deployment to complete

## What Was Fixed?

The `vercel.json` file tells Vercel:
- ✅ Your React app is in the `frontend` folder
- ✅ Where to find the build output (`frontend/build`)
- ✅ How to handle client-side routing (SPA rewrites)
- ✅ Correct build and install commands

## Verify Deployment

Once deployed, your portfolio should be live at:
- `https://your-project-name.vercel.app`
- All routes should work correctly
- No more 404 errors!

## Alternative: Deploy to Netlify

If Vercel continues to have issues, you can use Netlify:

1. Go to https://app.netlify.com/drop
2. Build locally:
   ```bash
   cd frontend
   yarn install
   yarn build
   ```
3. Drag and drop the `frontend/build` folder
4. Done! Your site is live!

## Need Help?

If you still see errors:
1. Check the Vercel build logs for specific errors
2. Make sure all dependencies are listed in `package.json`
3. Verify the build completes successfully locally first

---

**The fix has been pushed to GitHub. Try redeploying on Vercel now!** 🚀
