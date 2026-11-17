# Greenbank Handyman & Repair — website

Static, one-page site for **Greenbank Handyman & Repair**, owned by Gabriel Greenbank and based in Moreno Valley, California.

Tagline: **Repair it. Fix it. Get it done.**

The site is ready to drag and drop onto [Netlify Drop](https://app.netlify.com/drop) or to upload as the root of a [GitHub Pages](https://pages.github.com/) site. There is no build step, no backend, and no domain hardcoded into links or forms. It works at any domain, including a free `*.netlify.app` or `*.github.io` URL.

## What’s in this folder

```
index.html              Homepage (all main sections)
thank-you.html          Shown after a successful estimate form
404.html                Custom “page not found”
css/                    Styles and self-hosted fonts
js/main.js              Mobile menu, gallery lightbox, form helpers
images/                 Logo, favicon, social image
images/projects/        Optimized photos of completed jobs (full-size + thumbs/)
videos/                 Web MP4 project videos and poster images, when added
favicon.ico
apple-touch-icon.png
site.webmanifest
robots.txt
sitemap.xml
netlify.toml            Optional 404 handling on Netlify
```

## Brand colors (pulled from the logo)

| Role  | Hex       | Notes                                      |
|-------|-----------|--------------------------------------------|
| Navy  | `#002040` | House, tools, and the GREENBANK wordmark   |
| Orange| `#F06C02` | Shield and “HANDYMAN & REPAIR”             |
| Slate | `#4E565C` | Tagline on the logo                        |
| White | `#FFFFFF` | Backgrounds                                |

The original logo file is saved as `images/logo-original.png`. Web-optimized versions:

- `images/logo.png` — 800px, used for larger placements
- `images/logo-400.png` — header and footer (also used today)
- `images/logo.webp` — smaller modern-format copy of the 800px logo
- `images/favicon.ico`, `favicon-32.png`, `favicon-16.png`, `apple-touch-icon.png` — cropped to the house / tools / shield mark
- `images/og-image.jpg` — 1200×630 social sharing image

## Contact details already on the site

- Phone: [(951) 217-7547](tel:+19512177547)
- Email: [ggreenbank725@gmail.com](mailto:ggreenbank725@gmail.com)
- Location listed as **Moreno Valley, California** only (no street address)
- The estimate form posts to [FormSubmit](https://formsubmit.co) at `https://formsubmit.co/ggreenbank725@gmail.com`

### Activate the form (one-time)

The first time someone submits the form, FormSubmit emails `ggreenbank725@gmail.com` a confirmation link. Click that link once and later submissions will arrive in the inbox as a table of the form fields.

After you have a live domain, you can leave the thank-you page as-is. The site fills in `_next` automatically from the current address, so a successful submit returns to `thank-you.html` on whatever domain the site is hosted on.

If you ever need to change the inbox, edit the `action` attribute on the `<form>` in `index.html`.

## Placeholders still left for you

These are intentional and clearly marked. Nothing here invents a license, a street address, or fake reviews.

1. **Domain / SEO URLs** — search the project for `YOUR-DOMAIN.TLD` and replace it in:
   - `index.html` (canonical, Open Graph, Twitter, and LocalBusiness schema)
   - `thank-you.html` (canonical)
   - `robots.txt`
   - `sitemap.xml`
   The site works without this. Do it once you buy a domain so Google and social previews get the correct absolute URLs. `og:image` must be an `https://` URL to work in Facebook, iMessage, and similar.

2. **More project photos or videos** — the Our Work gallery already has real job photos (garage lighting and a van rooftop 12V AC / solar install). To add more, drop a web-sized JPEG (about 1600px on the long edge, EXIF/GPS stripped) into `images/projects/`, a thumbnail into `images/projects/thumbs/`, and add a tile in the matching group in `index.html`. Project videos go in `videos/` as H.264 MP4 with a poster image.

3. **Reviews** — the Reviews box is a placeholder on purpose. Add real customer quotes later; do not invent testimonials.

4. **Insurance (optional)** — the site does **not** claim you are insured. If you want the word “Insured” to appear, open `index.html`, find the HTML comment in the “Why Us” section, and uncomment the line that says `<p>Insured</p>`. Add a short factual note if you want to be more specific.

There is **no contractor license** on the site, and the copy never says “licensed.” California unlicensed handyman work must stay under $1,000 including labor and materials. The site states **“Small jobs & repairs under $1,000”** in the hero, services, contact, and footer, and it does not advertise major remodels.

Hours of operation are not listed. Add them in the contact panel if you want set days and times.

## Preview on your computer

From this folder:

```bash
python3 -m http.server 8080
```

Then open http://127.0.0.1:8080/

## Hosting (free, no build step)

The whole folder is the website. Upload the *contents* (so `index.html` is at the root of the host), not a zip sitting inside another folder.

**Netlify Drop (easiest)**

1. Open https://app.netlify.com/drop
2. Drag this entire folder onto the page
3. You’ll get a live `*.netlify.app` URL in about a minute
4. Later, point a custom domain at that site in Netlify’s domain settings

**GitHub Pages**

1. Create a GitHub repository and upload these files to the root (or a `/docs` folder)
2. In the repo Settings → Pages, publish from the branch (and `/docs` if you used that)
3. The site will be at `https://YOUR-USERNAME.github.io/REPO-NAME/`
4. If the site is in a subfolder rather than a custom domain, image and CSS paths still work because they are relative

**Other static hosts** — Cloudflare Pages, Render, Surge, or any web host that serves HTML files will work the same way.

After the site is live, send yourself a test estimate so you can confirm the FormSubmit email and click the verification link.

## Screenshots

Reference screenshots from local testing are in `screenshots/desktop.png` and `screenshots/mobile.png`.
