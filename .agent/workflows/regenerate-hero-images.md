---
description: Regenerate fullscreen hero banner images for the homepage carousel
---

// turbo-all

# Regenerate Hero Banner Images

## Goal
Generate 3 high-quality, **fullscreen images** for the homepage hero carousel that:
- **Fill the entire hero section completely** - no background color visible, no cropping needed
- Feature actual HDPE products (bottles, jars, cans, pump dispensers)
- Show color customization options (blue, yellow, white)
- Match the professional look of the original website design

## Image Size Requirements
- **CRITICAL**: Images must be designed to **FILL THE ENTIRE PAGE/HERO SECTION**
- Products should span across the **full width** of the image
- Background gradient should extend to all edges with no empty space
- The hero section is approximately **1920x800 pixels** (wide banner format)
- Images should work with `object-cover` CSS without important content being cropped

## Image Specifications
- **Format**: Wide horizontal banner that fills entire viewport width
- **Products**: HDPE plastic containers - jerry cans, bottles, jars, pump dispensers, cleaner bottles
- **Colors**: White plastic with blue caps (primary), plus yellow and blue colored cans for customization
- **Background**: Full gradient backgrounds extending edge-to-edge (navy-to-gold, teal-to-navy, amber-to-brown)
- **Style**: Professional studio product photography, luxury commercial style
- **Product Placement**: Products should be positioned in the **center-bottom** area leaving room for text overlay on the left

---

## Step 1: Generate Hero Banner Image 1 (Main Product Lineup)

Generate an image with this prompt:

```
Wide fullscreen banner product photography filling entire frame. White HDPE plastic packaging products arranged in a row from left to right across the entire image width: two large jerry cans with handles, medium jerry can, white pump bottle with blue cap, squeeze bottle with blue flip cap, and two large detergent bottles. All containers are solid WHITE plastic with BLUE caps. Products positioned in center-bottom third of frame. Seamless gradient background filling entire image from deep navy blue (#0a1628) on left edge to warm golden amber (#92400e) on right edge. Professional studio lighting, luxury commercial photography, no text, photorealistic, high resolution, fullscreen hero banner that fills entire viewport
```

Save as: `/home/kevin/Desktop/crystal-canvas/public/hero_slide_1.png`

---

## Step 2: Generate Hero Banner Image 2 (Color Customization)

Generate an image with this prompt:

```
Wide fullscreen banner product photography filling entire frame. Three large HDPE plastic jerry cans (5 litre industrial oil containers with handles) in BLUE, YELLOW, and WHITE colors arranged across the image. Products positioned in center-right area of frame. Seamless gradient background filling entire image from dark teal (#134e4a) on left edge to deep navy (#0f172a) on right edge. Professional studio lighting, luxury commercial photography showing color customization options, no text, photorealistic, high resolution, fullscreen hero banner that fills entire viewport
```

Save as: `/home/kevin/Desktop/crystal-canvas/public/hero_slide_2.png`

---

## Step 3: Generate Hero Banner Image 3 (Bottles & Jars Collection)

Generate an image with this prompt:

```
Wide fullscreen banner product photography filling entire frame. Collection of white HDPE plastic bottles and jars arranged across the entire image width: two plastic jars with blue screw lids, detergent bottle, pump dispenser bottle, two cleaner bottles. All WHITE plastic with BLUE caps. Products positioned in center-bottom area. Seamless gradient background filling entire image from warm amber (#d97706) on left edge to deep brown (#78350f) on right edge. Professional studio lighting, luxury commercial photography, no text, photorealistic, high resolution, fullscreen hero banner that fills entire viewport
```

Save as: `/home/kevin/Desktop/crystal-canvas/public/hero_slide_3.png`

---

## Step 4: Verify

1. Refresh browser at http://localhost:8080
2. Check that:
   - All 3 hero slides **fill the entire hero section** completely
   - **No background color or empty space** is visible
   - Products are fully visible and not awkwardly cropped
   - Carousel auto-rotates every 5 seconds
   - Text overlay "Premium HDPE Packaging Solutions" is readable on the left side

---

## Files Modified
- `/home/kevin/Desktop/crystal-canvas/public/hero_slide_1.png`
- `/home/kevin/Desktop/crystal-canvas/public/hero_slide_2.png`
- `/home/kevin/Desktop/crystal-canvas/public/hero_slide_3.png`

**Note**: No CSS changes needed - the images should be properly sized to fill the page.

---

## Quick Command to Run This Workflow
Just tell me: **"Run the /regenerate-hero-images workflow"** after the quota resets.
