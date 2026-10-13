# Your portfolio site

## Files
- `content.js` — **the only file you edit.** Your name, about text, links and projects.
- `images/` — put your screenshots here.
- `index.html`, `style.css`, `app.js` — the site itself. Leave these alone.

## Preview it
Double-click `index.html`. It opens in your browser.

## Add a project
1. Take screenshots in Unreal (High Res Screenshot, or just Win+Shift+S). 1920×1080 JPGs are fine.
2. Drop them in `images/`, e.g. `images/forest-1.jpg`.
3. In `content.js`, copy one `{ ... },` block and change the text. Set:
   - `cover: "images/forest-1.jpg"`
   - `gallery: ["images/forest-2.jpg", "images/forest-3.jpg"]`
   - `video: "dQw4w9WgXcQ"` (YouTube ID only) if you have a flythrough
   - `placeholder: false`
4. Delete the example projects once you have real ones. Three good pieces beat six placeholders.

## Sell an asset
Put the Fab listing URL in `fab:` and a price in `price:`. It automatically appears in the "Assets for sale" section with a buy button.

## Put it online free (GitHub Pages)
1. Make a GitHub account.
2. New repository → name it `yourusername.github.io` → Public.
3. "uploading an existing file" → drag in everything in this folder → Commit.
4. Settings → Pages → Branch: `main` → Save.
5. Live at `https://yourusername.github.io` in a minute or two.

To update: edit `content.js` on GitHub (pencil icon) or re-upload the file.

Custom domain (optional, ~£10/yr): buy one from Cloudflare or Namecheap, then add it under Settings → Pages → Custom domain.

Alternative: drag the whole folder onto https://app.netlify.com/drop — instant link, no account setup.
