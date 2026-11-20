# HEXY Wellness Clinic website

Static website hosted on GitHub Pages. No build step is required.

In the repository’s Settings → Pages, use “Deploy from a branch”, with `main` and `/ (root)`. The `CNAME` file retains the custom domain `hexybestlife.com`; configure that domain in Pages settings and point its DNS to GitHub Pages.

The contact form opens a draft in the visitor’s email app using the address in `js/config.js`. Visitors must send the email themselves; the website does not store or deliver submissions. English and Chinese instructions include a direct email fallback.

The `/book/` page redirects to the Juvonno public booking page. The `/services/` and `/pricing/` pages redirect visitors to the services section using static HTML. Custom response headers and cache rules are controlled by GitHub Pages.

Preview locally with `python3 -m http.server 8000` and open http://localhost:8000.

The service menu follows the bilingual HEXY Wellness service list. Prices are shown on the Juvonno public booking page. Massage, acupuncture, and osteopathy links select the matching service category so visitors can choose their duration. The two cheek acupuncture links also select the specific appointment. TCM consultations and products are not currently listed in the public portal and retain the general booking link.

Set `booking.url` in `js/config.js` to change the booking portal. General booking buttons use this setting. Service links retain their own URLs in `index.html` and open in a new tab. Juvonno uses `branch_id=1` for HEXY LIFE, `category` for service categories, and `product_id` for individual appointments. Verify IDs against the public portal when changing links. Enable the Patient Portal and set the clinic’s “Book in Portal” option to Yes in Juvonno.

Public booking URL: https://hexylife.juvonno.com/portal/publicbook.php
