# Rahbanan International Transport

One-page website for [rahbanan.com](https://rahbanan.com) — road, rail, air and sea freight between Europe, Türkiye, Iran and East Asia.

Static HTML/CSS/JS. No build step, no framework, no dependencies. Drop the folder on any web host.

```
index.html    markup (English source copy)
styles.css    design system, RTL rules, animations
app.js        particle world map, route finder, track & trace, quote form
i18n.js       English ⇄ Farsi dictionary and runtime
assets/       logo + four Unsplash photos
```

## Run locally

Any static server works:

```bash
npx serve .
```

## Editing content

- **Copy** — edit the English in `index.html`. Farsi lives in `i18n.js`, keyed by the exact English text; untranslated strings just stay English.
- **Places, routes, transit bands** — the `PLACES`, `ROUTES` and `LANES` tables at the top of `app.js`. A place's `kind` is `'hub'` (your office; shown on the map *and* in the Network list), `'point'` (map only) or `''` (route-finder only).
- **Tracking** — `fetchShipment()` in `app.js` is the single backend seam. Point it at the real API and delete the `DEMO` array.
- **Quote form** — currently composes a `mailto:` to the Tehran desk. Swap for a `POST` when there's somewhere to post to.

Run `__check()` in the browser console after editing the data tables — it fails loudly if a region pair has no lane or a demo reference stops resolving.

## Before this is the real site

Items marked `ponytail:` in `app.js` are placeholders that need confirming:

- transit-time bands in `LANES` are estimates, not schedule data
- the East Asia corridor nodes (Almaty → Busan) are a routing claim to verify
- the three demo tracking references are fictional

## Credits

Photography via [Unsplash](https://unsplash.com/license). World land mask sampled from a public-domain equirectangular map on Wikimedia Commons.
