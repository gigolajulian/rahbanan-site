/* ═══════════════════════════════════════════════════════════
   Rahbanan — one-page site behaviour.
   No dependencies, no build step. Three things live here:
   the corridor map, the route finder, and track & trace.
   ═══════════════════════════════════════════════════════════ */
(() => {
'use strict';

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* i18n: tr() for strings built here, i18n.apply() for markup we inject.
   Generated HTML is translated by the same dictionary as the static page. */
const tr = s => window.i18n ? window.i18n.t(s) : s;
const paint = el => window.i18n && window.i18n.apply(el);

/* ───────────────────────── data ─────────────────────────────
   Everything a non-developer might want to edit lives here. */

const PLACES = [
  /* kind: 'hub'   = our own hub, shown on the map AND in the Network list
           'point' = corridor node, shown on the map only
           ''      = selectable in the route finder only                  */
  // id            label                        region kind      lat     lon
  ['dartford',    'Dartford, United Kingdom',   'EU', 'hub',   51.44,   0.22],
  ['paris',       'Paris, France',              'EU', 'hub',   48.86,   2.35],
  ['lyon',        'Lyon, France',               'EU', 'hub',   45.76,   4.84],
  ['nurnberg',    'Nürnberg, Germany',          'EU', 'hub',   49.45,  11.08],
  ['milan',       'Milan, Italy',               'EU', 'hub',   45.46,   9.19],
  ['vienna',      'Vienna, Austria',            'EU', 'hub',   48.21,  16.37],
  ['istanbul',    'Istanbul, Türkiye',          'TR', 'hub',   41.01,  28.98],
  ['tehran',      'Tehran, Iran',               'IR', 'hub',   35.69,  51.39],
  ['bandarabbas', 'Bandar Abbas, Iran',         'IR', 'point', 27.18,  56.28],
  ['bik',         'Bandar Imam Khomeini, Iran', 'IR', '',      30.43,  49.08],

  /* Eastward extension. ponytail: these are corridor nodes, not offices —
     confirm the routing before launch, then promote any real ones to 'hub'. */
  ['almaty',      'Almaty, Kazakhstan',         'AS', 'point', 43.24,  76.89],
  ['urumqi',      'Ürümqi, China',              'AS', 'point', 43.83,  87.62],
  ['xian',        "Xi'an, China",               'AS', 'point', 34.34, 108.94],
  ['shanghai',    'Shanghai, China',            'AS', 'point', 31.23, 121.47],
  ['shenzhen',    'Shenzhen, China',            'AS', 'point', 22.54, 114.06],
  ['busan',       'Busan, South Korea',         'AS', 'point', 35.18, 129.08],

  ['eu-other',    'Elsewhere in Europe',        'EU', '',      null,   null ],
  ['as-other',    'Elsewhere in East Asia',     'AS', '',      null,   null ],
  ['world',       'Rest of world',              'WW', '',      null,   null ],
].map(([id, label, region, kind, lat, lon]) => ({ id, label, region, kind, lat, lon }));

/* Indicative transit bands, keyed by region pair (order-independent).
   ponytail: hand-entered estimates — replace with your real schedule
   figures before launch; the UI already labels them "indicative". */
const LANES = {
  'EU|IR': { land: '8–12 days', rail: '14–20 days', air: '2–4 days',  sea: '21–30 days',
             note: 'Direct LTL departs daily from our European hubs; rail runs as a land bridge via Türkiye.' },
  'EU|TR': { land: '4–7 days',  rail: '10–14 days', air: '1–2 days',  sea: '10–16 days',
             note: 'Our Istanbul hub consolidates for onward movement east.' },
  'IR|TR': { land: '4–6 days',  rail: '8–12 days',  air: '1–2 days',  sea: '12–18 days',
             note: 'Conventional and containerised rail, plus combined multimodal.' },
  'EU|EU': { land: '1–4 days',  rail: null,         air: '1 day',     sea: null,
             note: 'FTL and LTL between our own hubs, at daily intervals.' },
  'IR|IR': { land: '1–3 days',  rail: '3–5 days',   air: '1 day',     sea: null,
             note: 'Domestic haulage and customs clearance handled by the Tehran office.' },
  'IR|WW': { land: null,        rail: null,         air: '3–6 days',  sea: '25–40 days',
             note: 'FCL and LCL direct through major lines, or NVO — no cross-stuffing of goods.' },
  'EU|WW': { land: null,        rail: null,         air: '2–5 days',  sea: '20–35 days',
             note: 'Airport-to-door with DDU and DDP, or port-to-port by sea.' },
  'TR|WW': { land: null,        rail: null,         air: '2–5 days',  sea: '18–30 days',
             note: 'Consolidated in Istanbul for onward European or Iranian delivery.' },
  'TR|TR': { land: '1–3 days',  rail: '2–4 days',   air: '1 day',     sea: null,
             note: 'Domestic Turkish haulage, feeding our Istanbul consolidation.' },
  'WW|WW': { land: null,        rail: null,         air: '3–7 days',  sea: '25–45 days',
             note: 'Global coverage through our line and airline network.' },

  /* Eastward corridor — see the note on the East Asia nodes above. */
  'AS|IR': { land: '22–30 days', rail: '18–25 days', air: '3–5 days',  sea: '20–28 days',
             note: 'Overland through Kazakhstan and Ürümqi, or direct ocean into Iranian ports.' },
  'AS|TR': { land: '24–32 days', rail: '14–20 days', air: '3–5 days',  sea: '25–35 days',
             note: 'Rail land bridge into Istanbul for onward European distribution.' },
  'AS|EU': { land: null,         rail: '16–22 days', air: '3–6 days',  sea: '30–40 days',
             note: 'Block-train land bridge, or FCL and LCL through major lines.' },
  'AS|AS': { land: '2–5 days',   rail: '3–7 days',   air: '1–2 days',  sea: '3–8 days',
             note: 'Intra-Asia feeder and cross-border trucking.' },
  'AS|WW': { land: null,         rail: null,         air: '4–8 days',  sea: '25–45 days',
             note: 'Consolidated out of Shanghai, Shenzhen and Busan.' },
};

const MODES = [
  ['land', 'Land', 'FTL &amp; LTL road freight'],
  ['rail', 'Rail', 'Multimodal land bridge'],
  ['air',  'Air',  'DDU &amp; DDP air freight'],
  ['sea',  'Sea',  'FCL &amp; LCL ocean freight'],
];

/* Demo shipments. ponytail: swap lookup() for a real endpoint —
   see fetchShipment() below, it is the only place that needs changing. */
const DEMO = [
  {
    file: 'RB-2026-0412', bl: 'MSCUAB1948217', cntr: 'MSCU7741208',
    mode: 'Sea', status: 'In transit', eta: '24 Sep 2026',
    from: 'Milan, Italy', to: 'Bandar Abbas, Iran',
    pieces: '2 × 40′ HC', weight: '21,400 kg',
    events: [
      ['Booking confirmed',        '02 Sep 2026 · Milan',        'Space confirmed with the carrier; documents issued.', 'done'],
      ['Loaded and sealed',        '04 Sep 2026 · Milan',        'Containers stuffed at shipper’s premises.',           'done'],
      ['Departed load port',       '07 Sep 2026 · Genoa',        'On board, bill of lading released.',                  'done'],
      ['On water',                 '12 Sep 2026 · Suez Canal',   'Vessel transited on schedule.',                       'now' ],
      ['Arrival at discharge port','24 Sep 2026 · Bandar Abbas', 'Estimated.',                                          ''    ],
      ['Customs clearance',        'Estimated · Bandar Abbas',   'Handled by our Tehran desk.',                          ''    ],
      ['Delivered',                'Estimated',                  'Delivery order to consignee.',                         ''    ],
    ],
  },
  {
    file: 'RB-2026-0388', bl: 'RB-CMR-118420', cntr: '34-TR-9910',
    mode: 'Land', status: 'Out for delivery', eta: '13 Sep 2026',
    from: 'Nürnberg, Germany', to: 'Tehran, Iran',
    pieces: '14 pallets (LTL)', weight: '6,180 kg',
    events: [
      ['Collected',            '30 Aug 2026 · Nürnberg',      'Consolidated on our daily Nürnberg departure.', 'done'],
      ['Hub transfer',         '02 Sep 2026 · Istanbul',      'Cross-docked for the eastbound leg.',           'done'],
      ['Border crossing',      '08 Sep 2026 · Bazargan',      'Transit formalities completed.',                'done'],
      ['Customs cleared',      '11 Sep 2026 · Tehran',        'Duties settled, goods released.',               'done'],
      ['Out for delivery',     '13 Sep 2026 · Tehran',        'With the local haulier.',                       'now' ],
      ['Delivered',            'Estimated today',             'Proof of delivery to follow.',                  ''    ],
    ],
  },
];

/* ───────────────────────── header + nav ─────────────────── */
const hdr = $('#hdr');
addEventListener('scroll', () => hdr.classList.toggle('stuck', scrollY > 20), { passive: true });

$('#burger').addEventListener('click', function () {
  const open = document.body.classList.toggle('nav-open');
  this.setAttribute('aria-expanded', open);
});
$$('#nav a').forEach(a => a.addEventListener('click', () => {
  document.body.classList.remove('nav-open');
  $('#burger').setAttribute('aria-expanded', 'false');
}));

/* ───────────────────────── reveal + counters ────────────── */
/* The hero is above the fold, so its numbers count up on load rather than
   waiting for a scroll that may never happen. `.ready` starts the type. */
addEventListener('load', () => {
  document.body.classList.add('ready');
  setTimeout(() => $$('.hero [data-count]').forEach(countUp), 550);
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    $$('[data-count]', e.target).forEach(countUp);
    io.unobserve(e.target);
  });
}, { rootMargin: '0px 0px -12% 0px' });
$$('[data-reveal]').forEach(el => io.observe(el));
// children of a stagger group arrive one after another
$$('[data-stagger]').forEach(g =>
  [...g.children].forEach((c, i) => { c.style.transitionDelay = `${i * 70}ms`; }));

/* a soft light that follows the cursor across cards */
document.addEventListener('pointermove', e => {
  const el = e.target.closest('.card, .ccard, .mode, .hubs li');
  if (!el) return;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - r.left}px`);
  el.style.setProperty('--my', `${e.clientY - r.top}px`);
}, { passive: true });

// the "move your cursor" hint has done its job once they do
$('.hero').addEventListener('pointermove', function h() {
  this.classList.add('hero--touched'); this.removeEventListener('pointermove', h);
}, { once: true });

function countUp(el) {
  if (el.dataset.counted) return;          // load and scroll can both fire
  el.dataset.counted = '1';
  const to = +el.dataset.count;
  const show = n => { el.textContent = window.i18n ? window.i18n.num(n) : n; };
  if (calm) return show(to);
  const t0 = performance.now(), dur = 1400;
  const step = (t) => {
    const p = Math.min(1, (t - t0) / dur);
    show(Math.round(to * (1 - Math.pow(1 - p, 3))));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ───────────────────── particle world map ───────────────────
   The land mask below is a 200x76 bitmask sampled from a public-domain
   equirectangular world map - one bit per grid cell, 1 = land. Baked in
   so the hero costs 2.5 KB instead of a megabyte of PNG.
   Because the source is equirectangular, lat/lon projects straight onto it. */

const COLS = 200, ROWS = 76, LAT_TOP = 78, LAT_BOT = -58;
const MAP_ASPECT = 360 / (LAT_TOP - LAT_BOT);
const LAND_MASK = 'AAAAADAAHwf////AAAwAAAAAAA4AAAAAAAAAAAAPjX8AD///AAAAAAAMAAf/4ADwAAAAAAAB4E2XgAf/+YAAAAAAMAB//nxgMAAAAAAAAb/FP8AF//4AAAAAAGA1v///8D8AAAA/6AAf4Y58Av/+AAAA+AAAd///////+ADA////8MTsXgH/wAAAB//M////////////+L///z//8BWD/wAAAB/+1//v/////////xCf/////+xeAPgA8AA/Pn////////////4A/////euABgD4AAAA/P7////////////9AP9f/+f/AHgAUAAAAfz7///////////h8AA+Af/+/gB4gAAAAAHsf//////////ghgAACgA///+Af8AAAABgWL//////////gB4AAAAAP///8H/AAAAAYHD//////////wA8AAAAAC//8fz/cAAAAbB/////////f/9AGAAAAAAH//P+//gAAAF7////////////wBAAAAAAB/////4oAAAAB////////v///9AAAAAAAAD//8//HAAAAD/////////////AAAAAAAAB//+v/wAAAAAf//s/P/7/////gAAAAAAAAf//7P6AAAAAH+/wfPf/////+wAAAAAAAAH//+/4AAAAAfwz4Bx///////44AAAAAAAB+///8AAAAAH4GfceP//////wAAAAAAAAAf///+AAAAAB8AGf/j/////9YCAAAAAAAAD////AAAAAAeAQn/4//////DBAAAAAAAAAf///wAAAAAAPwAD///////4wwAAAAAAAAD///4AAAAAA/sAA///////+AwAAAAAAAAAf//4AAAAAAf/xgf///////ggAAAAAAAAAB//+AAAAAAH//f////////4AAAAAAAAAAAv+AgAAAAAD/////v//////AAAAAAAAAAAF/AMAAAAAD////v8v/////gAAAAAAAAAAAPwAAAAAAA////5/gH////wAAAAAAAAAAAB8AAAAAAAf////f/g////4AAAAAAAAAAAAfACAAAAAH////z/4H/n/wAAAAAAABAAAADwgCAAAAB////+f8A/g/gAAAAAAAAAAAAAf4AAAAAAf////n+AHwP4BAAAAAAAAAAAAB+AAAAAAH////8+AB4C/AQAAAAAAAAAAAAB8AAAAAB/////uAAcAP4EAAAAAAAAAAAAADAAAAAAf////8AADgB+AAAAAAAAAAAAAAAw8AAAAD/////MAAwAHAAAAAAAAAAAAAAAEv8AAAAf/////AAOAAgAAAAAAAAAAAAAAAH/gAAAH/////wAAgBAAQAAAAAAAAAAAAAB//gAAAfH///4AAAAIDAAAAAAAAAAAAAAAf/8AAAAAf//8AAAAKBgAAAAAAAAAAAAAAP//AAAAAH//+AAAABQ4AAAAAAAAAAAAAAD//wAAAAB//fAAAAAYeAAAAAAAAAAAAAAB///gAAAAf/3gAAAADHsEgAAAAAAAAAAAAf///AAAAD//wAAAAAYbI/AAAAAAAAAAAAH///8AAAAf98AAAAACAgD4AAAAAAAAAAAA////gAAAH//AAAAAAcAAfAAAAAAAAAAAAP///wAAAB//wAAAAAAAQCQAAAAAAAAAAAB///8AAAAP/8AAAAAAAAAAAAAAAAAAAAAAf//+AAAAD//AAAAAAAAHAAAAAAAAAAAAAD///AAAAB//4QAAAAAALhAAAAAAAAAAAAAb//wAAAAf/8cAAAAAAH8YAAAAAAAAAAAAB//8AAAAH/+OAAAAAAD/+AAAAAAAAAAAAAf//AAAAB//BgAAAAAB//wAAAAAAAAAAAAH//gAAAAP/g4AAAAAD//+AAAAAAAAAAAAB//gAAAAD/8OAAAAAB///wAAAAAAAAAAAAf/gAAAAA/+DAAAAAAf//+AAAAAAAAAAAAH/4AAAAAP/AAAAAAAH///gAAAAAAAAAAAD/+AAAAAB/wAAAAAAA///4AAAAAAAAAAAA/+AAAAAAP4AAAAAAAP//+AAAAAAAAAAAAP/gAAAAAD8AAAAAAAD+P/gAAAAAAAAAAAD/wAAAAAA8AAAAAAAA+BfwAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAH4ACAAAAAAAAAAf8AAAAAAAAAAAAAAAAAA+AAQAAAAAAAAAH4AAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAB+AAAAAAAAAAAAAAAAAAAgABAAAAAAAAAAPAAAAAAAAAAAAAAAAAAAEABAAAAAAAAAAHwAAAAAAAAAAAAAAAAAAAABgAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==';

/* Ordered west to east so the intro draws the corridor in that direction. */
const ROUTES = [
  ['dartford', 'paris'], ['paris', 'lyon'], ['lyon', 'milan'],
  ['paris', 'nurnberg'], ['nurnberg', 'vienna'], ['milan', 'vienna'],
  ['vienna', 'istanbul'], ['istanbul', 'tehran'], ['tehran', 'bandarabbas'],
  ['tehran', 'almaty'], ['almaty', 'urumqi'], ['urumqi', 'xian'],
  ['xian', 'shanghai'], ['shanghai', 'busan'], ['shanghai', 'shenzhen'],
];

function worldMap(cv) {
  const ctx = cv.getContext('2d');
  const bytes = Uint8Array.from(atob(LAND_MASK), c => c.charCodeAt(0));
  const isLand = i => (bytes[i >> 3] >> (7 - (i & 7))) & 1;

  const RAD = Math.PI / 180;
  const MAP_SCALE  = 1.56;     // map width as a multiple of the hero width
  const CENTER_LON = 45;       // framing: Atlantic at the left, Pacific at the right
  const VIEW_LON   = 60;       // the point on the globe we look straight at
  const TILT_LAT   = 16;       // seen slightly from the north
  const FLATTEN    = 0.82;     // 1 = dead flat. Short of 1 keeps real curvature.
  const INTRO_HOLD = 520;      // a beat of stillness first, for anticipation
  const INTRO_MS   = 3400;

  const small = innerWidth < 760;
  const thin = small ? 2 : 1;               // fewer dots on small screens

  const dots = [];
  for (let r = 0; r < ROWS; r += thin)
    for (let c = 0; c < COLS; c += thin)
      if (isLand(r * COLS + c)) {
        const u = (c + .5) / COLS, v = (r + .5) / ROWS;
        const lon = -180 + u * 360, lat = LAT_TOP - v * (LAT_TOP - LAT_BOT);
        dots.push({
          u, lon, lat,
          sla: Math.sin(lat * RAD), cla: Math.cos(lat * RAD),   // precomputed, so the
          slo: Math.sin(lon * RAD), clo: Math.cos(lon * RAD),   // hot loop stays trig-free
          x: 0, y: 0, shade: 1, size: 2, bucket: 7,
          dx: 0, dy: 0, vx: 0, vy: 0,
        });
      }

  const nodes = PLACES.filter(p => p.kind);
  const legs = ROUTES.map(([a, b]) => [nodes.find(n => n.id === a), nodes.find(n => n.id === b)]);

  let W = 0, H = 0, mw = 0, mh = 0, ox = 0, oy = 0, R = 0, cx = 0, cy = 0;
  const sT = Math.sin(TILT_LAT * RAD), cT = Math.cos(TILT_LAT * RAD);

  const flat = (lon, lat) => ({
    x: ox + ((lon + 180) / 360) * mw,
    y: oy + ((LAT_TOP - lat) / (LAT_TOP - LAT_BOT)) * mh,
  });

  /* Orthographic globe. R is chosen so the sphere's scale at the view point
     matches the flat map's exactly — that is what lets the two blend without
     the geography sliding around underneath. */
  function sphere(sla, cla, slo, clo, sL, cL) {
    const sd = slo * cL - clo * sL;          // sin(lon - lam)
    const cd = clo * cL + slo * sL;          // cos(lon - lam)
    return {
      x: cx + R * cla * sd,
      y: cy - R * (cT * sla - sT * cla * cd),
      depth: sT * sla + cT * cla * cd,       // 1 = facing us, < 0 = round the back
    };
  }

  /* blend globe -> flat by e, for anything with a lon/lat */
  function proj(lon, lat, e, sL, cL) {
    const g = sphere(Math.sin(lat * RAD), Math.cos(lat * RAD),
                     Math.sin(lon * RAD), Math.cos(lon * RAD), sL, cL);
    const f = flat(lon, lat);
    return { x: g.x + (f.x - g.x) * e, y: g.y + (f.y - g.y) * e, depth: g.depth };
  }

  function layout() {
    W = cv.clientWidth; H = cv.clientHeight;
    if (!W || !H) return false;
    const dpr = Math.min(devicePixelRatio || 1, 1.5);   // dots are 2px; 2x buys nothing
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    mw = W * MAP_SCALE; mh = mw / MAP_ASPECT;
    ox = W * .5 - ((CENTER_LON + 180) / 360) * mw;
    oy = small ? H * .13 : H * .40 - mh / 2;

    R = mw / (2 * Math.PI);                  // tangent-matched, see sphere()
    const c = flat(VIEW_LON, TILT_LAT); cx = c.x; cy = c.y;

    // settle every dot into its resting 3D position once, not per frame
    const sL = Math.sin(VIEW_LON * RAD), cL = Math.cos(VIEW_LON * RAD);
    for (const p of dots) {
      const g = sphere(p.sla, p.cla, p.slo, p.clo, sL, cL);
      const f = flat(p.lon, p.lat);
      p.x = g.x + (f.x - g.x) * FLATTEN;
      p.y = g.y + (f.y - g.y) * FLATTEN;
      p.shade = .42 + .58 * Math.max(0, g.depth);   // the limb falls away
      p.size = 1.25 + 1.15 * p.shade;
      p.bucket = Math.min(7, Math.max(0, (p.shade * 7.99) | 0));
    }
    // Draw order = colour order, so the resting field costs 8 fillStyle
    // changes per frame instead of several thousand.
    dots.sort((a, b) => a.bucket - b.bucket);
    return true;
  }

  /* pointer: repels nearby dots and lights them up */
  const m = { x: -1e5, y: -1e5, on: false };
  const PR = 135, PR2 = PR * PR;
  if (!matchMedia('(hover: none)').matches) {
    const host = cv.parentElement;
    host.addEventListener('pointermove', e => {
      const b = cv.getBoundingClientRect();
      m.x = e.clientX - b.left; m.y = e.clientY - b.top; m.on = true;
    });
    host.addEventListener('pointerleave', () => { m.on = false; });
  }

  const RAMP = Array.from({ length: 8 }, (_, i) => 'rgba(104,165,232,' + (.3 + i * .062).toFixed(2) + ')');
  const HOT = 'rgba(247,238,7,.92)';

  const clamp = n => n < 0 ? 0 : n > 1 ? 1 : n;
  const outCubic = t => 1 - Math.pow(1 - t, 3);
  const inOut = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  function frame(t, intro) {
    ctx.clearRect(0, 0, W, H);

    /* intro === 1 is the resting state, and costs no trigonometry at all */
    let lam = VIEW_LON, sL = 0, cL = 1, routeP = 1, e = FLATTEN;
    if (intro < 1) {
      lam = VIEW_LON - 150 * (1 - outCubic(clamp(intro / .72)));
      sL = Math.sin(lam * RAD); cL = Math.cos(lam * RAD);
      routeP = clamp((intro - .78) / .22);
      e = inOut(clamp((intro - .42) / .46)) * FLATTEN;
    }

    /* ── dots ── */
    let last = -1;
    for (const p of dots) {
      let X, Y, shade, size, alpha = 1;

      if (intro < 1) {
        // each meridian peels off the globe a moment after the one west of it
        const pe = inOut(clamp((intro - (.26 + p.u * .16)) / .46)) * FLATTEN;
        const g = sphere(p.sla, p.cla, p.slo, p.clo, sL, cL);
        const f = flat(p.lon, p.lat);
        X = g.x + (f.x - g.x) * pe;
        Y = g.y + (f.y - g.y) * pe;
        shade = .42 + .58 * Math.max(0, g.depth);
        size = 1.25 + 1.15 * shade;
        // kept hidden round the back until its meridian swings into view
        alpha = clamp(intro / .14) * Math.max(g.depth > 0 ? 1 : 0, pe / FLATTEN);
      } else {
        X = p.x; Y = p.y; shade = p.shade; size = p.size;
      }

      let ax = -p.dx * .055, ay = -p.dy * .055, hot = 0;
      if (m.on && intro === 1) {
        const dx = X + p.dx - m.x, dy = Y + p.dy - m.y, d2 = dx * dx + dy * dy;
        if (d2 < PR2) {
          const d = Math.sqrt(d2) || 1, f = (1 - d / PR) * 1.9;
          ax += (dx / d) * f; ay += (dy / d) * f; hot = 1 - d / PR;
        }
      }
      p.vx = (p.vx + ax) * .87; p.vy = (p.vy + ay) * .87;
      p.dx += p.vx; p.dy += p.vy;

      if (alpha < .02) continue;
      if (alpha < 1) { ctx.globalAlpha = alpha; last = -3; }

      if (hot > .08) {
        if (last !== -2) { ctx.fillStyle = HOT; last = -2; }
        ctx.fillRect(X + p.dx, Y + p.dy, size + hot * 2.6, size + hot * 2.6);
      } else {
        const i = intro < 1 ? Math.min(7, Math.max(0, (shade * 7.99) | 0)) : p.bucket;
        if (i !== last) { ctx.fillStyle = RAMP[i]; last = i; }
        ctx.fillRect(X + p.dx, Y + p.dy, size, size);
      }
      if (alpha < 1) ctx.globalAlpha = 1;
    }

    if (routeP <= 0) return;

    /* ── corridor legs, drawn west to east ── */
    ctx.lineCap = 'round';
    legs.forEach(([a, b], i) => {
      const grow = clamp(routeP * legs.length - i);      // each leg's own draw-in
      if (grow <= 0) return;

      const A = proj(a.lon, a.lat, e, sL, cL);
      const B = proj(b.lon, b.lat, e, sL, cL);
      const len = Math.hypot(B.x - A.x, B.y - A.y) || 1;
      const bow = Math.min(60, len * .25);
      const C = { x: (A.x + B.x) / 2 + ((B.y - A.y) / len) * bow,
                  y: (A.y + B.y) / 2 - ((B.x - A.x) / len) * bow };
      const at = k => { const s = 1 - k; return {
        x: s * s * A.x + 2 * s * k * C.x + k * k * B.x,
        y: s * s * A.y + 2 * s * k * C.y + k * k * B.y }; };

      ctx.beginPath();
      ctx.moveTo(A.x, A.y);
      if (grow >= 1) ctx.quadraticCurveTo(C.x, C.y, B.x, B.y);
      else for (let k = 1; k <= 16; k++) { const q = at((k / 16) * grow); ctx.lineTo(q.x, q.y); }
      ctx.strokeStyle = 'rgba(247,238,7,.26)'; ctx.lineWidth = 1.1;
      ctx.stroke();

      if (grow >= 1) {
        const q = at(((t * .00013) + i * .07) % 1);       // travelling pulse
        ctx.beginPath(); ctx.arc(q.x, q.y, 2.2, 0, 6.283);
        ctx.fillStyle = 'rgba(247,238,7,.95)'; ctx.fill();
      }
    });

    /* ── nodes, with the name on hover ── */
    ctx.globalAlpha = routeP;
    for (const n of nodes) {
      const P = proj(n.lon, n.lat, e, sL, cL);
      const hq = n.id === 'tehran';
      const own = n.kind === 'hub';
      const near = m.on && intro === 1 && Math.hypot(P.x - m.x, P.y - m.y) < 22;

      const pulse = (t * .0006 + (hq ? 0 : .5)) % 1;
      ctx.beginPath(); ctx.arc(P.x, P.y, 4 + pulse * 13, 0, 6.283);
      ctx.strokeStyle = 'rgba(247,238,7,' + ((1 - pulse) * (hq ? .45 : .18)).toFixed(3) + ')';
      ctx.lineWidth = 1; ctx.stroke();

      ctx.beginPath(); ctx.arc(P.x, P.y, hq || near ? 4 : own ? 2.8 : 2.1, 0, 6.283);
      ctx.fillStyle = hq || near ? '#f7ee07'
                    : own ? 'rgba(150,200,245,.95)' : 'rgba(150,200,245,.6)';
      ctx.fill();

      if (near || hq) {
        const name = tr(n.label).split(/[,،]/)[0].toUpperCase();
        ctx.font = '600 11px Vazirmatn, Inter, system-ui, sans-serif';
        const left = P.x + ctx.measureText(name).width + 24 < W;
        ctx.fillStyle = near ? '#e9f0f9' : 'rgba(233,240,249,.7)';
        ctx.textAlign = left ? 'left' : 'right';
        ctx.fillText(name, P.x + (left ? 12 : -12), P.y + 4);
      }
    }
    ctx.globalAlpha = 1;
  }

  if (!layout()) return;
  if (calm) { frame(0, 1); return; }        // resting state only, no globe, no loop

  let running = true, t0 = null;
  const tick = (t) => {
    if (running) {
      if (t0 === null) t0 = t;
      frame(t, clamp((t - t0 - INTRO_HOLD) / INTRO_MS));
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  // don't burn cycles animating a hero nobody is looking at
  new IntersectionObserver(([e]) => { running = e.isIntersecting; })
    .observe(cv.parentElement);

  let rt;
  addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(layout, 150); });
}

const cv = $('#world');
if (cv) worldMap(cv);

/* hub list under the network section */
function drawHubs() {
  $('#hubs').innerHTML = PLACES.filter(p => p.kind === 'hub').map(p => {
    const [city, country] = tr(p.label).split(/[,،]\s*/);
    const hq = p.id === 'tehran';
    return `<li class="${hq ? 'is-hq' : ''}"><strong>${city}</strong>` +
           `<span>${hq ? tr('Head office') : country}</span></li>`;
  }).join('');
  [...$('#hubs').children].forEach((c, i) => { c.style.transitionDelay = `${i * 70}ms`; });
}
drawHubs();

/* ───────────────────────── route finder ─────────────────── */
const fFrom = $('#fFrom'), fTo = $('#fTo'), fOut = $('#finderOut');
function fillPlaces() {
  const keep = [fFrom.value || 'nurnberg', fTo.value || 'tehran'];
  const opts = PLACES.map(p => `<option value="${p.id}">${tr(p.label)}</option>`).join('');
  fFrom.innerHTML = opts; fTo.innerHTML = opts;
  fFrom.value = keep[0]; fTo.value = keep[1];
}
fillPlaces();

$('#fSwap').addEventListener('click', () => {
  [fFrom.value, fTo.value] = [fTo.value, fFrom.value];
  if (fOut.innerHTML) showLane();
});
$('#finderForm').addEventListener('submit', e => { e.preventDefault(); showLane(); });

function showLane() {
  const A = PLACES.find(p => p.id === fFrom.value);
  const B = PLACES.find(p => p.id === fTo.value);

  if (A.id === B.id) {
    fOut.innerHTML = `<p class="note">${tr('Pick two different places — origin and destination are the same.')}</p>`;
    return;
  }

  const lane = LANES[[A.region, B.region].sort().join('|')] || LANES['WW|WW'];
  const served = MODES.filter(([k]) => lane[k]);

  fOut.innerHTML = `
    <p class="lane">${tr(A.label)} <span>→</span> ${tr(B.label)}</p>
    <ul class="modes">
      ${MODES.map(([k, name, desc], i) => `
        <li class="mode ${lane[k] ? '' : 'off'}" style="--i:${i}">
          <div class="mode__t"><h4>${name}</h4><i class="dot"></i></div>
          <p class="mode__d">${tr(lane[k] || 'On request')}</p>
          <p>${desc}</p>
        </li>`).join('')}
    </ul>
    <p class="note"><span>${tr(lane.note)}</span>
      <span>${tr('Transit times are indicative door-to-door bands, excluding customs dwell —')}</span>
      <a href="#quote" data-lane>${tr('ask us for a firm quote on this lane')}</a>.
    </p>`;

  paint(fOut);

  // carry the lane into the quote form
  $('[data-lane]', fOut).addEventListener('click', () => {
    $('#qFrom').value = A.label;
    $('#qTo').value = B.label;
    if (served.length === 1) $('#qMode').value = served[0][1];
  });
}

/* ───────────────────────── track & trace ───────────────── */
const tOut = $('#trackOut'), tInput = $('#trackInput');
let tMode = 'bl';
const PLACEHOLDER = { bl: 'e.g. MSCUAB1948217', cntr: 'e.g. MSCU7741208', file: 'e.g. RB-2026-0412' };

$$('.tabs button').forEach(b => b.addEventListener('click', () => {
  $$('.tabs button').forEach(x => x.setAttribute('aria-pressed', x === b));
  tMode = b.dataset.mode;
  tInput.placeholder = tr(PLACEHOLDER[tMode]);
  tInput.focus();
}));

$$('.chip').forEach(c => c.addEventListener('click', () => {
  tInput.value = c.textContent;
  $('#trackForm').requestSubmit();
}));

$('#trackForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const ref = tInput.value.trim();
  if (!ref) return;
  tOut.innerHTML = `<p class="note">${tr('Searching…')}</p>`;
  renderShipment(await fetchShipment(ref), ref);
});

/* ponytail: the whole backend seam is this one function.
   Point it at the real tracking API and delete the DEMO array. */
async function fetchShipment(ref) {
  // return (await fetch(`/api/track?ref=${encodeURIComponent(ref)}`)).json();
  const k = ref.toUpperCase().replace(/\s+/g, '');
  await new Promise(r => setTimeout(r, 380));           // fake latency
  return DEMO.find(s => [s.file, s.bl, s.cntr].some(v => v.toUpperCase() === k)) || null;
}

function renderShipment(s, ref) {
  if (!s) {
    tOut.innerHTML = `
      <div class="empty">
        <strong>${tr('No record for')} “${esc(ref)}”</strong>
        <p>${tr('Check the reference, or')}
           <a href="#contact">${tr('call the Tehran desk')}</a>
           ${tr('and we will find it by shipper name and date.')}</p>
      </div>`;
    return;
  }
  const delivered = /delivered/i.test(s.status);
  tOut.innerHTML = `
    <div class="res__hd">
      <h3>${s.file}</h3>
      <span class="badge ${delivered ? 'ok' : ''}">${s.status}</span>
      <span class="hint">${tr(s.mode)} · ${tr('ETA')} ${s.eta}</span>
    </div>
    <div class="meta">
      <div style="--i:0"><span>Origin</span><strong>${tr(s.from)}</strong></div>
      <div style="--i:1"><span>Destination</span><strong>${tr(s.to)}</strong></div>
      <div style="--i:2"><span>Bill of lading</span><strong>${s.bl}</strong></div>
      <div style="--i:3"><span>Container / truck</span><strong>${s.cntr}</strong></div>
      <div style="--i:4"><span>Pieces</span><strong>${s.pieces}</strong></div>
      <div style="--i:5"><span>Gross weight</span><strong>${s.weight}</strong></div>
    </div>
    <ol class="tl">
      ${s.events.map(([ev, when, note, state], i) => `
        <li class="${state}" style="--i:${i}"><strong>${ev}</strong><em>${when}</em><p>${note}</p></li>`).join('')}
    </ol>`;
  paint(tOut);
}

const esc = str => str.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ───────────────────────── quote form ──────────────────── */
/* No backend needed: compose a complete mail to the Tehran desk.
   ponytail: swap for a POST when you have somewhere to post to. */
$('#quoteForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target;
  const lines = [...f.elements]
    .filter(el => el.name && el.value && el.value !== 'No preference' && el.value !== 'Not sure')
    .map(el => `${el.name}: ${el.value}`);
  const body = ['Quote request from rahbanan.com', '', ...lines].join('\n');
  location.href = `mailto:tehran@rahbanan.com`
    + `?subject=${encodeURIComponent(`Quote request — ${f.From.value} to ${f.To.value}`)}`
    + `&body=${encodeURIComponent(body)}`;
  $('#quoteMsg').textContent = tr('Your email client should now be open with the request '
    + 'filled in — just press send. If nothing happened, mail us at tehran@rahbanan.com.');
});

/* Re-render anything we generated when the language flips. */
if (window.i18n) window.i18n.on(() => {
  drawHubs();
  fillPlaces();
  tInput.placeholder = tr(PLACEHOLDER[tMode]);
  if (fOut.innerHTML.trim()) showLane();
  $$('.hero [data-count]').forEach(el => {
    delete el.dataset.counted;
    el.dataset.count && countUp(el);
  });
});

/* ───────────────────────── misc ────────────────────────── */
$('#yr').textContent = new Date().getFullYear();

/* ═══ self-check ═══════════════════════════════════════════
   Run  __check()  in the console. Fails loudly if the lane
   table has a hole or a demo reference stops resolving. */
window.__check = async () => {
  const fails = [];

  // every region pair a visitor can pick must resolve to a lane
  const regions = [...new Set(PLACES.map(p => p.region))];
  for (const a of regions) for (const b of regions) {
    const k = [a, b].sort().join('|');
    if (!LANES[k]) fails.push(`no lane for ${k}`);
  }

  // every lane must offer at least one mode, or the UI shows four dead cards
  for (const [k, l] of Object.entries(LANES)) {
    if (!MODES.some(([m]) => l[m])) fails.push(`lane ${k} serves no mode`);
  }

  // every demo shipment must be findable by all three references
  for (const s of DEMO) {
    for (const ref of [s.file, s.bl, s.cntr]) {
      if (await fetchShipment(ref.toLowerCase()) !== s) fails.push(`lookup failed: ${ref}`);
    }
  }
  if (await fetchShipment('NOPE-000') !== null) fails.push('unknown ref should return null');

  console[fails.length ? 'error' : 'log'](fails.length ? fails : 'all checks pass');
  return !fails.length;
};

})();
