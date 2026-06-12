# SSCASC Library & Information Center — Website

A React + Vite website for the **Library & Information Center, Sree Siddaganga College of
Arts, Science and Commerce, Tumkur**.

## Features

- **Full navigation** with dropdowns: Home, About Us, Collection, Services, OA Resources,
  Research Support, AI Tools, E-learning, Photo Gallery, Virtual Tour, Best Practices,
  Activities, Feedback, Contact.
- **All resource tables** from the brief (OA Journals, OA Books, ETDs, Research Support tools,
  AI tools, E-learning platforms) with working external links.
- **Keyword search** — type a word and matching pages appear as clickable links (press `/` to
  open search quickly).
- **Chatbot frontend** — a demo library assistant (UI only; a real API can be wired into
  `src/components/Chatbot.jsx` → `getReply`).
- **Bilingual: English + ಕನ್ನಡ** — toggle in the top bar; UI chrome and intros are translated
  in `src/data/translations.js`.
- **Accessibility** — skip link, keyboard focus rings, ARIA labels, screen-reader friendly
  structure, text-size controls (A− / A / A+), and reduced-motion support.
- **Responsive** — mobile menu, fluid tables and grids.
- **White background**, scholarly design, footer with Copyright / Disclaimer / Privacy /
  Webmaster and a **last-updated** date.
- **Contact page with embedded Google Map.**

## Run it

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

Node 18+ recommended.

## Where to customize

| What | File |
|------|------|
| Resource tables, staff, budget, collection, nav | `src/data/site.js` |
| English / Kannada strings | `src/data/translations.js` |
| Search index entries | `src/data/searchIndex.js` |
| Chatbot replies (or connect a real API) | `src/components/Chatbot.jsx` |
| Colors, typography, layout | `src/styles/global.css` (CSS variables at top) |
| Google Map location | `college.mapEmbed` in `src/data/site.js` |
| Logo / Swamiji photo | drop images in `src/assets/` and use in `Header.jsx` / pages |

## Notes / placeholders to fill in

- **Logo & Swamiji photo** — replace the text crest in `Header.jsx` with the official college
  logo, and add the Swamiji photo where appropriate (see https://www.sampathkumar.info/).
- **OPAC link** — add your live catalogue URL on the Services page (`CollectionServices.jsx`).
- **Phone / email** — fill real contact details in `Contact.jsx`.
- **Photos & virtual tour** — replace gallery placeholders and embed the tour video.
- **Feedback form** — currently a demo; connect to a backend or Google Form.
- **Chatbot** — frontend only; connect to an AI service later.

Routing uses `HashRouter` so the site works on any static host (GitHub Pages, college server)
without extra server configuration.
