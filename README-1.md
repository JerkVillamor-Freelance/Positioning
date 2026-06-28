# The Visual Atelier — Jerk T. Villamor

A one-page portfolio site. Pure HTML/CSS/JS — no build step, no dependencies beyond Google Fonts.

## Files
- `index.html` — all content and structure
- `style.css` — all styling (design tokens at the top of the file)
- `script.js` — scroll reveal + "develop into focus" effect

## Put it live on GitHub Pages

1. Create a new repository on GitHub (e.g. `visual-atelier`).
2. Upload these three files (`index.html`, `style.css`, `script.js`) to the root of the repo.
   - On github.com: **Add file → Upload files**, drag all three in, commit.
3. Go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
5. Wait 1–2 minutes. Your site will be live at:
   `https://YOUR-USERNAME.github.io/visual-atelier/`

No other configuration is needed.

## Swapping in your real photos

Search `index.html` for `placeholder-photo`. There are 10 placeholder blocks (FRAME 01–FRAME 10). To replace one:

1. Add your image file to the repo (e.g. create an `images/` folder and put `portrait.jpg` inside it).
2. Find the placeholder `<div>` for that spot, for example:
   ```html
   <div class="reveal-photo placeholder-photo" data-frame="FRAME 01" role="img" aria-label="Placeholder for personal photo">
     <span class="placeholder-tag">Photo placeholder — personal photo...</span>
   </div>
   ```
3. Replace it with an `<img>` tag, keeping the outer class so it inherits sizing:
   ```html
   <div class="reveal-photo">
     <img src="images/portrait.jpg" alt="Jerk T. Villamor" style="width:100%;height:100%;object-fit:cover;">
   </div>
   ```
4. Repeat for each placeholder. Recommended sizes are noted in the placeholder text:
   - Personal photo: 4:5 ratio, 1200×1500px minimum
   - Work grid / pillar images: 4:3 ratio
   - Before/after editing examples: wide, 16:7-ish
   - Manifesto section sample grid: 16:9

## Notes

- All written content is unchanged from what you provided — nothing was reworded.
- Color, type, and the "registration mark" / "frame counter" motif are defined as CSS variables at the top of `style.css` if you want to adjust the palette later.
- Animations respect `prefers-reduced-motion` and degrade gracefully with JavaScript disabled.
