/* ═══════════════════════════════════════════════════════════
   Rahbanan — English / Farsi.

   Translations are keyed by the English source text, so the markup
   needs no data-* attributes and nothing has to be kept in sync by
   hand: write English in the HTML, add the Farsi line here.
   Anything with no entry simply stays English.

   To add a string: put the exact English text (as it renders — ’ — “ ”,
   not &rsquo;) on the left, the Farsi on the right.
   ═══════════════════════════════════════════════════════════ */
(() => {
'use strict';

const FA = {
  /* ── chrome ── */
  'Skip to content': 'رفتن به محتوا',
  'International Transport': 'حمل‌ونقل بین‌المللی',
  'Rahbanan, home': 'رهبانان، صفحهٔ اصلی',
  'Main': 'اصلی',
  'Menu': 'منو',
  'Language': 'زبان',
  'Sections': 'بخش‌ها',
  'Services': 'خدمات',
  'Network': 'شبکه',
  'Find a route': 'یافتن مسیر',
  'Track': 'رهگیری',
  'Contact': 'تماس',
  'Get a quote': 'دریافت نرخ',

  /* ── hero ── */
  'Over 40 years · Tehran, Iran': 'بیش از ۴۰ سال · تهران، ایران',
  'Transport': 'حمل‌ونقل',
  'is': 'است',
  'art.': 'هنر',
  'A Tehran freight forwarder. For over forty years we have moved goods between Europe and Iran by road, rail, air and sea, through our own hubs from Dartford to Istanbul.':
    'شرکت فورواردری در تهران. بیش از چهل سال است که کالا را میان اروپا و ایران از راه جاده، ریل، هوا و دریا جابه‌جا می‌کنیم؛ از طریق هاب‌های خودمان از دارتفورد تا استانبول.',
  'Track a shipment': 'رهگیری محموله',
  'Move your cursor across the map': 'نشانگر را روی نقشه حرکت دهید',
  'Years of trade': 'سال فعالیت',
  'European hubs': 'هاب اروپایی',
  'Transport modes': 'شیوهٔ حمل',
  'Ocean coverage': 'پوشش دریایی',
  'Global': 'جهانی',

  /* ── services ── */
  'Four modes, one file number.': 'چهار شیوهٔ حمل، یک شماره پرونده.',
  'Every shipment gets one file number. Booking, customs, delivery and tracking all sit under it.':
    'هر محموله یک شماره پرونده می‌گیرد. رزرو، گمرک، تحویل و رهگیری همه زیر همان شماره است.',
  'Land': 'زمینی',
  'FTL and LTL loads through Europe': 'بارهای FTL و LTL در سراسر اروپا',
  'We cover Europe, with hubs in Dartford, Paris, Lyon, Nürnberg, Vienna, Milan and Istanbul, providing direct LTL services at daily intervals with the shortest transit time.':
    'سراسر اروپا را با هاب‌هایی در دارتفورد، پاریس، لیون، نورنبرگ، وین، میلان و استانبول پوشش می‌دهیم، با سرویس مستقیم LTL در فواصل روزانه و کوتاه‌ترین زمان حمل.',
  'Daily departures': 'حرکت روزانه',
  'Rail': 'ریلی',
  'Multimodal land-bridge services': 'سرویس‌های پل زمینی چندوجهی',
  'We handle rail shipments mainly from Turkey, conventionally and containerised, and also combined multimodal services.':
    'حمل ریلی را عمدتاً از ترکیه، به‌صورت متعارف و کانتینری، و نیز سرویس‌های ترکیبی چندوجهی انجام می‌دهیم.',
  'Containerised': 'کانتینری',
  'Conventional': 'متعارف',
  'Land bridge': 'پل زمینی',
  'Air': 'هوایی',
  'Efficient air freight handling': 'حمل هوایی سریع و کارآمد',
  'Through our extensive network we ship in and out, connecting all major airports, with DDU and DDP services.':
    'از طریق شبکهٔ گستردهٔ خود، واردات و صادرات را با اتصال به همهٔ فرودگاه‌های اصلی و با سرویس‌های DDU و DDP انجام می‌دهیم.',
  'Airport to door': 'فرودگاه تا درب',
  'Sea': 'دریایی',
  'FCL and LCL services globally': 'سرویس‌های FCL و LCL در سراسر جهان',
  'We offer worldwide coverage: direct through major shipping lines, and indirect via NVO services, without cross-stuffing of goods, to and from Iranian ports.':
    'پوشش جهانی ارائه می‌دهیم: مستقیم از طریق خطوط کشتیرانی اصلی و غیرمستقیم از طریق سرویس‌های NVO، بدون تخلیه و بارگیری مجدد کالا، از و به بنادر ایران.',
  'No cross-stuffing': 'بدون تخلیهٔ مجدد',
  'Coverage': 'پوشش', 'Departures': 'حرکت', 'Service': 'سرویس', 'Cargo': 'نوع بار',
  'Terms': 'شرایط', 'Via': 'از طریق',
  'Europe → Türkiye → Iran': 'اروپا ← ترکیه ← ایران',
  'Daily, from seven hubs': 'روزانه، از هفت هاب',
  'Türkiye → Iran, with a European land bridge': 'ترکیه ← ایران، با پل زمینی اروپا',
  'Containerised · Conventional': 'کانتینری · متعارف',
  'Multimodal · Combined': 'چندوجهی · ترکیبی',
  'All major airports': 'همهٔ فرودگاه‌های اصلی',
  'Import · Export': 'واردات · صادرات',
  'Global, to and from Iranian ports': 'جهانی، از و به بنادر ایران',
  'Direct lines · NVO': 'خطوط مستقیم · NVO',
  'FCL · LCL, no cross-stuffing': 'FCL · LCL، بدون تخلیهٔ مجدد',

  /* ── route finder ── */
  'Route & service finder': 'یافتن مسیر و سرویس',
  'Tell us the lane. We’ll tell you the options.': 'مسیر را بگویید، گزینه‌ها را بگوییم.',
  'Pick an origin and a destination to see which of our modes serve it, and roughly how long each takes.':
    'مبدأ و مقصد را انتخاب کنید تا ببینید کدام شیوه‌های حمل آن مسیر را پوشش می‌دهند و هر کدام تقریباً چقدر طول می‌کشد.',
  'Origin': 'مبدأ',
  'Destination': 'مقصد',
  'Show routes': 'نمایش مسیرها',
  'Swap origin and destination': 'جابه‌جایی مبدأ و مقصد',
  'Swap': 'جابه‌جایی',
  'On request': 'بنا به درخواست',
  'FTL & LTL road freight': 'حمل جاده‌ای FTL و LTL',
  'Multimodal land bridge': 'پل زمینی چندوجهی',
  'DDU & DDP air freight': 'حمل هوایی DDU و DDP',
  'FCL & LCL ocean freight': 'حمل دریایی FCL و LCL',
  'Origin and destination are the same. Pick two different places.':
    'مبدأ و مقصد یکسان هستند. دو مکان متفاوت انتخاب کنید.',
  'Transit times are indicative door-to-door bands, excluding customs dwell.':
    'زمان‌های حمل، بازه‌های تقریبی درب تا درب و بدون احتساب توقف گمرکی است.',
  'Ask us for a firm quote on this lane': 'برای این مسیر نرخ قطعی بگیرید',

  /* lane notes */
  'Direct LTL departs daily from our European hubs; rail runs as a land bridge via Türkiye.':
    'سرویس مستقیم LTL روزانه از هاب‌های اروپایی ما حرکت می‌کند؛ ریل به‌صورت پل زمینی از مسیر ترکیه عمل می‌کند.',
  'Our Istanbul hub consolidates for onward movement east.':
    'هاب استانبول ما بارها را برای حرکت به سمت شرق تجمیع می‌کند.',
  'Conventional and containerised rail, plus combined multimodal.':
    'ریل متعارف و کانتینری، به‌همراه سرویس ترکیبی چندوجهی.',
  'FTL and LTL between our own hubs, at daily intervals.':
    'FTL و LTL میان هاب‌های خودمان، در فواصل روزانه.',
  'Domestic haulage and customs clearance handled by the Tehran office.':
    'حمل داخلی و ترخیص گمرکی توسط دفتر تهران انجام می‌شود.',
  'FCL and LCL direct through major lines, or NVO, with no cross-stuffing of goods.':
    'FCL و LCL مستقیم از خطوط اصلی یا از طریق NVO، بدون تخلیهٔ مجدد کالا.',
  'Airport-to-door with DDU and DDP, or port-to-port by sea.':
    'فرودگاه تا درب با DDU و DDP، یا بندر تا بندر از راه دریا.',
  'Consolidated in Istanbul for onward European or Iranian delivery.':
    'تجمیع در استانبول برای تحویل در اروپا یا ایران.',
  'Domestic Turkish haulage, feeding our Istanbul consolidation.':
    'حمل داخلی ترکیه، تغذیه‌کنندهٔ مرکز تجمیع استانبول.',
  'Global coverage through our line and airline network.':
    'پوشش جهانی از طریق شبکهٔ خطوط کشتیرانی و هواپیمایی ما.',
  'Overland through Kazakhstan and Ürümqi, or direct ocean into Iranian ports.':
    'زمینی از مسیر قزاقستان و ارومچی، یا دریایی مستقیم به بنادر ایران.',
  'Rail land bridge into Istanbul for onward European distribution.':
    'پل زمینی ریلی تا استانبول برای توزیع در اروپا.',
  'Block-train land bridge, or FCL and LCL through major lines.':
    'پل زمینی با قطار بلوکی، یا FCL و LCL از طریق خطوط اصلی.',
  'Intra-Asia feeder and cross-border trucking.':
    'سرویس فیدر درون‌آسیایی و حمل جاده‌ای فرامرزی.',
  'Consolidated out of Shanghai, Shenzhen and Busan.':
    'تجمیع‌شده از شانگهای، شنژن و بوسان.',

  /* ── network ── */
  'Our own hubs.':
    'هاب‌های خودمان.',
  'Seven hubs in Europe consolidate cargo for the corridor through Istanbul into Iran. LTL leaves each hub daily. East of Tehran the corridor continues through Kazakhstan and Ürümqi to Xi’an, Shanghai and the East Asian ports.':
    'هفت هاب در اروپا بار را برای کریدور استانبول به ایران تجمیع می‌کنند. LTL هر روز از هر هاب حرکت می‌کند. در شرق تهران، کریدور از قزاقستان و ارومچی تا شی‌آن، شانگهای و بنادر شرق آسیا ادامه دارد.',
  'Head office is in Tehran. The team that books the space also handles customs, the delivery order and final delivery.':
    'دفتر مرکزی در تهران است. همان تیمی که فضا را رزرو می‌کند، گمرک، ترخیصیه و تحویل نهایی را هم انجام می‌دهد.',
  'Talk to the Tehran desk': 'تماس با دفتر تهران',
  'Head office': 'دفتر مرکزی',

  /* ── track & trace ── */
  'Track & trace': 'رهگیری محموله',
  'Track a shipment.':
    'رهگیری محموله.',
  'Search by bill of lading, container or truck number, or by our file number.':
    'با شمارهٔ بارنامه، کانتینر یا کامیون، یا با شمارهٔ پروندهٔ ما جست‌وجو کنید.',
  'CNTR / Truck': 'کانتینر / کامیون',
  'File no.': 'شماره پرونده',
  'Reference number': 'شمارهٔ مرجع',
  'Demo references:': 'نمونه‌های آزمایشی:',
  'e.g. MSCUAB1948217': 'مثلاً MSCUAB1948217',
  'e.g. MSCU7741208': 'مثلاً MSCU7741208',
  'e.g. RB-2026-0412': 'مثلاً RB-2026-0412',
  'Searching…': 'در حال جست‌وجو…',
  'No record for': 'رکوردی یافت نشد برای',
  'Check the reference, or': 'شماره را بررسی کنید، یا',
  'call the Tehran desk': 'با دفتر تهران تماس بگیرید',
  'and we will find it by shipper name and date.': 'تا آن را با نام فرستنده و تاریخ پیدا کنیم.',
  'Bill of lading': 'بارنامه',
  'Container / truck': 'کانتینر / کامیون',
  'Pieces': 'تعداد',
  'Gross weight': 'وزن ناخالص',
  'ETA': 'زمان تقریبی رسیدن',
  'In transit': 'در حال حمل',
  'Out for delivery': 'در مسیر تحویل',
  'Delivered': 'تحویل شد',
  'Booking confirmed': 'رزرو تأیید شد',
  'Loaded and sealed': 'بارگیری و پلمب شد',
  'Departed load port': 'خروج از بندر بارگیری',
  'On water': 'در مسیر دریایی',
  'Arrival at discharge port': 'ورود به بندر تخلیه',
  'Customs clearance': 'ترخیص گمرکی',
  'Collected': 'دریافت شد',
  'Hub transfer': 'انتقال در هاب',
  'Border crossing': 'عبور از مرز',
  'Customs cleared': 'ترخیص گمرکی انجام شد',
  'Space confirmed with the carrier; documents issued.': 'فضا نزد خط حمل تأیید و مدارک صادر شد.',
  'Containers stuffed at shipper’s premises.': 'کانتینرها در محل فرستنده بارگیری شدند.',
  'On board, bill of lading released.': 'بارگیری روی کشتی انجام و بارنامه صادر شد.',
  'Vessel transited on schedule.': 'کشتی طبق برنامه عبور کرد.',
  'Estimated.': 'تخمینی.',
  'Handled by our Tehran desk.': 'توسط دفتر تهران ما انجام می‌شود.',
  'Delivery order to consignee.': 'ترخیصیه به گیرنده.',
  'Consolidated on our daily Nürnberg departure.': 'تجمیع‌شده در حرکت روزانهٔ نورنبرگ.',
  'Cross-docked for the eastbound leg.': 'انتقال مستقیم برای مسیر شرق.',
  'Transit formalities completed.': 'تشریفات ترانزیت تکمیل شد.',
  'Duties settled, goods released.': 'حقوق گمرکی پرداخت و کالا ترخیص شد.',
  'With the local haulier.': 'نزد شرکت حمل محلی.',
  'Estimated today': 'تخمینی، امروز',
  'Proof of delivery to follow.': 'رسید تحویل متعاقباً ارسال می‌شود.',

  /* ── about ── */
  '“We are a business over 40 years, and we have handled most types of goods through various routes.”':
    '«ما کسب‌وکاری با بیش از ۴۰ سال سابقه هستیم و بیشتر انواع کالا را از مسیرهای گوناگون جابه‌جا کرده‌ایم.»',
  'Rahbanan International Transport Co. Ltd.': 'شرکت حمل‌ونقل بین‌المللی رهبانان (مسئولیت محدود)',
  'Flexible': 'انعطاف‌پذیر',
  'Out-of-gauge cargo, unusual routings, tight deadlines.':
    'بار خارج از ابعاد، مسیرهای غیرمعمول، مهلت‌های فشرده.',
  'Competitive': 'رقابتی',
  'Direct line and airline contracts, plus NVO options where they price better.':
    'قرارداد مستقیم با خطوط کشتیرانی و هواپیمایی، به‌علاوهٔ گزینه‌های NVO هر جا که نرخ بهتری داشته باشند.',
  'Customer oriented': 'مشتری‌مدار',
  'One named contact from booking to delivery order.':
    'یک نفر مشخص از رزرو تا صدور ترخیصیه.',

  /* ── quote form ── */
  'Receive a quote for your shipment.': 'برای محمولهٔ خود نرخ بگیرید.',
  'Contact details and route are required. Everything else helps us price it accurately.':
    'اطلاعات تماس و مسیر الزامی است. بقیهٔ موارد به قیمت‌گذاری دقیق‌تر کمک می‌کند.',
  'Contact information': 'اطلاعات تماس',
  'Full name *': 'نام و نام خانوادگی *',
  'Company': 'شرکت',
  'Email *': 'ایمیل *',
  'Phone': 'تلفن',
  'Parcel information': 'اطلاعات محموله',
  'From *': 'از *',
  'To *': 'به *',
  'City, country': 'شهر، کشور',
  'Preferred mode': 'شیوهٔ حمل ترجیحی',
  'No preference': 'فرقی نمی‌کند',
  'Incoterm': 'اینکوترمز',
  'Not sure': 'مطمئن نیستم',
  'Commodity': 'نوع کالا',
  'What is it?': 'چه کالایی است؟',
  'Dimensions / volume': 'ابعاد / حجم',
  'L×W×H cm, or m³': 'طول×عرض×ارتفاع سانتی‌متر، یا متر مکعب',
  'Packages': 'تعداد بسته',
  'Pallets, cartons, units': 'پالت، کارتن، عدد',
  'Anything else': 'توضیحات دیگر',
  'Ready date, hazardous class, temperature control, deadlines…':
    'تاریخ آمادگی بار، کلاس خطر، کنترل دما، مهلت‌ها…',
  'Send request': 'ارسال درخواست',
  'Goes to': 'ارسال به',
  '. We reply within one working day.': '. ظرف یک روز کاری پاسخ می‌دهیم.',
  'Your email client should now be open with the request filled in. Just press send. If nothing happened, mail us at tehran@rahbanan.com.':
    'برنامهٔ ایمیل شما باید با درخواست تکمیل‌شده باز شده باشد. کافی است ارسال را بزنید. اگر باز نشد، به tehran@rahbanan.com ایمیل بزنید.',

  /* ── contact + footer ── */
  'Contact us': 'تماس با ما',
  'Tehran head office.': 'دفتر مرکزی تهران.',
  'Telephone': 'تلفن',
  'Sat–Wed, 08:30–17:00 IRST': 'شنبه تا چهارشنبه، ۸:۳۰ تا ۱۷:۰۰ به وقت ایران',
  'Email': 'ایمیل',
  'Quotes, bookings and documents': 'نرخ، رزرو و مدارک',
  'Location': 'نشانی',
  '95 North Kheradmand Ave': 'خیابان خردمند شمالی، پلاک ۹۵',
  'Karimkhan Zand Blvd, Tehran, Iran': 'بلوار کریم‌خان زند، تهران، ایران',
  '95 North Kheradmand Ave, Karimkhan Zand Blvd, Tehran, Iran':
    'تهران، بلوار کریم‌خان زند، خیابان خردمند شمالی، پلاک ۹۵',
  'About us': 'دربارهٔ ما',
  'Track shipment': 'رهگیری محموله',
  'External links': 'پیوندهای بیرونی',
  'Int’l Transport Companies Association of Iran': 'انجمن شرکت‌های حمل‌ونقل بین‌المللی ایران',
  'Iran Ports & Maritime Organization': 'سازمان بنادر و دریانوردی ایران',
  'Shipping Association of Iran': 'انجمن کشتیرانی ایران',
  'Freight forwarder software (OTMS)': 'نرم‌افزار فورواردری (OTMS)',
  'XE live exchange rates': 'نرخ لحظه‌ای ارز XE',
  'Photography:': 'عکس‌ها:',
  '· Transport is art.': '· حمل‌ونقل، هنر است.',

  /* ── places (also used for the labels drawn on the map) ── */
  'Dartford, United Kingdom': 'دارتفورد، بریتانیا',
  'Paris, France': 'پاریس، فرانسه',
  'Lyon, France': 'لیون، فرانسه',
  'Nürnberg, Germany': 'نورنبرگ، آلمان',
  'Milan, Italy': 'میلان، ایتالیا',
  'Vienna, Austria': 'وین، اتریش',
  'Istanbul, Türkiye': 'استانبول، ترکیه',
  'Tehran, Iran': 'تهران، ایران',
  'Bandar Abbas, Iran': 'بندرعباس، ایران',
  'Bandar Imam Khomeini, Iran': 'بندر امام خمینی، ایران',
  'Almaty, Kazakhstan': 'آلماتی، قزاقستان',
  'Ürümqi, China': 'ارومچی، چین',
  "Xi'an, China": 'شی‌آن، چین',
  'Shanghai, China': 'شانگهای، چین',
  'Shenzhen, China': 'شنژن، چین',
  'Busan, South Korea': 'بوسان، کرهٔ جنوبی',
  'Elsewhere in Europe': 'سایر نقاط اروپا',
  'Elsewhere in East Asia': 'سایر نقاط شرق آسیا',
  'Rest of world': 'سایر نقاط جهان',
  'United Kingdom': 'بریتانیا', 'France': 'فرانسه', 'Germany': 'آلمان',
  'Italy': 'ایتالیا', 'Austria': 'اتریش', 'Türkiye': 'ترکیه', 'Iran': 'ایران',
  'Kazakhstan': 'قزاقستان', 'China': 'چین', 'South Korea': 'کرهٔ جنوبی',
};

/* Transit bands are generated, not listed — one rule beats thirty entries. */
const digits = s => String(s).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
const RULES = [
  [/^(\d+)[–-](\d+) days?$/, (_, a, b) => `${digits(a)} تا ${digits(b)} روز`],
  [/^(\d+) days?$/, (_, a) => `${digits(a)} روز`],
];

const norm = s => s.replace(/\s+/g, ' ').trim();

function lookup(en) {
  const k = norm(en);
  if (!k) return null;
  if (FA[k] !== undefined) return FA[k];
  for (const [re, fn] of RULES) if (re.test(k)) return k.replace(re, fn);
  return null;
}

/* ── runtime ─────────────────────────────────────────────── */
let lang = 'en';
const originals = new WeakMap();          // node -> its English source
const ATTRS = ['placeholder', 'title', 'aria-label'];
const SKIP = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'CANVAS']);
const listeners = [];

function render(en) {
  if (lang === 'en') return en;
  const hit = lookup(en);
  if (hit === null) return en;
  // keep the node's surrounding whitespace; only the words change
  return en.match(/^\s*/)[0] + hit + en.match(/\s*$/)[0];
}

function apply(root = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: n => SKIP.has(n.parentNode.nodeName) || !n.data.trim()
      ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
  });
  const texts = [];
  for (let n; (n = walker.nextNode());) texts.push(n);
  for (const n of texts) {
    if (!originals.has(n)) originals.set(n, n.data);
    n.data = render(originals.get(n));
  }

  const els = root.nodeType === 1 ? [root, ...root.querySelectorAll('*')]
                                  : [...root.querySelectorAll('*')];
  for (const el of els) {
    for (const a of ATTRS) {
      if (!el.hasAttribute(a)) continue;
      const key = 'i18n' + a.replace(/-/g, '');
      if (el.dataset[key] === undefined) el.dataset[key] = el.getAttribute(a);
      el.setAttribute(a, render(el.dataset[key]));
    }
  }
}

let faFontLoaded = false;
function loadFaFont() {
  if (faFontLoaded) return;
  faFontLoaded = true;
  document.head.insertAdjacentHTML('beforeend',
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?' +
    'family=Vazirmatn:wght@400;500;600;700;800&display=swap">');
}

function set(next) {
  lang = next === 'fa' ? 'fa' : 'en';
  if (lang === 'fa') loadFaFont();

  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'fa' ? 'rtl' : 'ltr';

  apply();
  document.querySelectorAll('[data-lang]').forEach(b =>
    b.setAttribute('aria-pressed', b.dataset.lang === lang));

  try { localStorage.setItem('rb-lang', lang); } catch {}
  listeners.forEach(fn => fn(lang));
}

window.i18n = {
  apply,
  set,
  get lang() { return lang; },
  t: en => render(en),                       // for strings built in JS
  num: n => lang === 'fa' ? digits(n) : String(n),
  on: fn => listeners.push(fn),
};

document.addEventListener('click', e => {
  const b = e.target.closest('[data-lang]');
  if (b) set(b.dataset.lang);
});

let saved = null;
try { saved = localStorage.getItem('rb-lang'); } catch {}
if (saved === 'fa') set('fa');
})();
