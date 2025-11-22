# Logo Setup Instructions

## Required Logo File

Please add your CSM Study Zone logo image file to the `public` folder:

**File location:** `/public/csm-logo.png`

## Logo Requirements

- **Format:** PNG (recommended) or JPG
- **Aspect Ratio:** Should match your logo design (typically around 4:1 or 3:1 for horizontal logos)
- **Background:** Transparent or solid background (will work with both)
- **Size:** Recommended minimum 480x120px for sharp display on high-DPI screens

## Current Implementation

The logo is configured in `components/Header.tsx` with:
- Responsive sizing: `h-10 w-28` (mobile), `h-12 w-32` (tablet), `h-14 w-36` (desktop)
- `object-contain` to maintain aspect ratio without cropping
- Clickable link to homepage
- Priority loading for better performance

## After Adding the Logo

1. Place your logo file at: `public/csm-logo.png`
2. Refresh your browser to see the logo in the navbar
3. The logo will automatically appear on all pages

## Favicon (Optional)

If you want to use the logo as a favicon:
1. Create a square version (icon only, 32x32 or 64x64px)
2. Save as `public/favicon.ico` or `app/icon.png`
3. The layout.tsx already references the logo for favicon

