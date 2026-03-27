# Ajanta Yoga Academy — Website

## Files included
- `index.html`       — Home page
- `about.html`       — About the academy
- `philosophy.html`  — Yoga philosophy
- `courses.html`     — Courses & programs
- `pranayama.html`   — Pranayama audio/video library
- `blog.html`        — Articles
- `contact.html`     — Enrol & contact form
- `style.css`        — All visual styling (shared)
- `nav.js`           — Shared navigation & footer (shared)
- `audio/`           — Folder: place your .mp3 files here

---

## HOW TO PUBLISH (free, 5 steps)

### Step 1 — Create a GitHub account
Go to https://github.com and sign up for a free account.
(If you already have Starborn, you can use that.)

### Step 2 — Create a new repository
- Click the green "New" button
- Name it exactly: `ajantayoga` (or any name you like)
- Set it to Public
- Click "Create repository"

### Step 3 — Upload all files
- Click "uploading an existing file"
- Drag ALL files from this folder into the browser window
- Important: also create the `audio/` folder and upload your mp3 files there
- Click "Commit changes"

### Step 4 — Enable GitHub Pages
- Go to Settings → Pages (left sidebar)
- Under "Source" select: Deploy from a branch
- Branch: main / (root)
- Click Save
- Wait 2-3 minutes

### Step 5 — Your site is live!
Your URL will be: https://YOUR-USERNAME.github.io/ajantayoga

Example: https://starborn.github.io/ajantayoga

---

## HOW TO ADD YOUR AUDIO FILES

1. Record your pranayama sessions (phone, computer, any device)
2. Save as .mp3 files with these exact names:
   - `audio/natural-breath.mp3`
   - `audio/ujjayi.mp3`
   - `audio/three-part-breath.mp3`
   - `audio/nadi-shodhana.mp3`
   - `audio/bhramari.mp3`
   - `audio/sheetali.mp3`
   - `audio/kapalabhati.mp3`
   - `audio/box-breathing.mp3`
   - `audio/yoga-nidra.mp3`
3. Upload them to the `audio/` folder in your GitHub repository

If you prefer to use SoundCloud (free), replace the <audio> tags with SoundCloud embed codes.

---

## HOW TO ADD YOUTUBE VIDEOS

1. Upload your video to YouTube (can be set to "Unlisted" for privacy)
2. Click Share → Embed — copy the iframe code
3. Open `pranayama.html` in a text editor
4. Find the placeholder blocks that say "Replace this block with:"
5. Paste your YouTube iframe code there

---

## HOW TO SET UP THE CONTACT FORM (free)

1. Go to https://formspree.io
2. Create a free account
3. Create a new form
4. Copy your endpoint URL (looks like: https://formspree.io/f/xabc1234)
5. Open `contact.html`
6. Find: `action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT"`
7. Replace `YOUR_FORMSPREE_ENDPOINT` with your actual endpoint

Free tier: 50 form submissions per month.

---

## HOW TO ADD YOUR OWN CONTENT

### Change email address
Search for `hello@ajantayoga.com` in all files and replace with your real email.

### Change the year in footer
Open `nav.js` and find `&copy; 2025` — update the year.

### Add a real article
In `blog.html`, copy one of the article card blocks and update the text.

### Add your photo or logo
Add an image file to the folder and reference it with:
`<img src="your-image.jpg" alt="description">`

---

## OPTIONAL: Custom domain name

If you want `ajantayoga.com` instead of `github.io/ajantayoga`:
1. Buy a domain at Namecheap or Porkbun (~$10-12/year)
2. In GitHub Pages settings, add your custom domain
3. Follow GitHub's DNS instructions (they provide them)

---

## COLOUR PALETTE (for reference)

Saffron (primary):  #E8843A
Sage (secondary):   #7B9E87
Ivory (background): #FAF7F2
Terracotta (accent):#C06040
Charcoal (text):    #2E2E2E

---

Built with care for Ajanta Yoga Academy.
