# Google Search Console - Action Steps

## Current Status
The `/practice` page shows "URL is not on Google" - this is **NORMAL** for newly created pages.

## Immediate Actions Required

### Step 1: Request Indexing (Do This Now)
1. In Google Search Console, you're already on the URL Inspection page for `/practice`
2. **Click the "REQUEST INDEXING" button** (visible in the screenshot)
3. Wait for Google to process the request (usually takes a few minutes to hours)

### Step 2: Submit/Update Sitemap
1. Go to Google Search Console → **Sitemaps** (left sidebar)
2. Check if sitemap is already submitted: `https://www.csmstudyzone.in/sitemap.xml`
3. If not submitted, click **"Add a new sitemap"** and enter: `sitemap.xml`
4. If already submitted, click **"Resubmit"** or wait for automatic refresh

### Step 3: Verify Sitemap Includes New Pages
After your next deployment, check:
- Visit: `https://www.csmstudyzone.in/sitemap.xml`
- Verify it includes:
  - `/practice`
  - `/contests`
  - `/contests/weekly-challenge-1`
  - `/contests/weekly-challenge-2`
  - `/contests/weekly-challenge-3-finished`

## Why This Happens

1. **New Pages**: Google hasn't discovered the page yet
2. **No Referring Links**: The page isn't linked from other indexed pages (yet)
3. **Sitemap Not Updated**: The sitemap needs to be regenerated after deployment

## What Happens Next

After clicking "REQUEST INDEXING":
1. Google will crawl the page within 24-48 hours
2. The page will be indexed if it meets Google's quality guidelines
3. You'll see status change from "URL is not on Google" to "URL is on Google"

## Additional Steps

### For All New Pages
Repeat the "REQUEST INDEXING" process for:
- `/contests`
- `/contests/weekly-challenge-1`
- `/contests/weekly-challenge-2`
- `/contests/weekly-challenge-3-finished`

### For Updated Pages
For pages that already existed but got canonical URLs added:
- Use "REQUEST INDEXING" to force re-crawl
- This helps Google recognize the canonical URL

## Monitoring

Check back in 24-48 hours:
1. Go to URL Inspection tool
2. Enter the URL again
3. Status should change to "URL is on Google" if successful

## Troubleshooting

If page still not indexed after 48 hours:
1. Verify page is accessible: Visit `https://www.csmstudyzone.in/practice` in browser
2. Check for errors: Look for any console errors or 404s
3. Verify canonical URL: View page source, check for `<link rel="canonical">`
4. Check robots.txt: Visit `https://www.csmstudyzone.in/robots.txt` - should allow `/practice`
5. Verify sitemap: Check `https://www.csmstudyzone.in/sitemap.xml` includes the page

## Quick Checklist

- [ ] Click "REQUEST INDEXING" for `/practice` (you're on this page now)
- [ ] Click "REQUEST INDEXING" for `/contests`
- [ ] Submit/verify sitemap in Google Search Console
- [ ] Wait 24-48 hours
- [ ] Check indexing status again
- [ ] Request indexing for other new pages


