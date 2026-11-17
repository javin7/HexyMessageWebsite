# HEXY Wellness Clinic website

Static website hosted on GitHub Pages. No build step is required.

In the repository’s Settings → Pages, use “Deploy from a branch”, with `main` and `/ (root)`. The `CNAME` file retains the custom domain `hexybestlife.com`; configure that domain in Pages settings and point its DNS to GitHub Pages.

The contact form opens a draft in the visitor’s email app using the address in `js/config.js`. Visitors must send the email themselves; the website does not store or deliver submissions. English and Chinese instructions include a direct email fallback.

The `/book/` page redirects to the Juvonno patient portal. The `/services/` and `/pricing/` pages redirect visitors to the services section using static HTML. Custom response headers and cache rules are controlled by GitHub Pages.

Preview locally with `python3 -m http.server 8000` and open http://localhost:8000.

The service menu follows the bilingual HEXY Wellness service list. Prices are shown on the Juvonno patient portal; each menu item links to that page.

Set `booking.url` in `js/config.js` to change the booking portal. Booking buttons and service links open the portal in a new tab; the portal may require patients to sign in.
