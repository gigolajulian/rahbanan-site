/* ═══════════════════════════════════════════════════════════
   Rahbanan: English, Farsi, Chinese.

   Translations are keyed by the English source text, so the markup
   needs no data-* attributes and nothing has to be kept in sync by
   hand: write English in the HTML, add the Farsi and Chinese lines here.
   Anything with no entry simply stays English.

   To add a string: put the exact English text (as it renders — ’ — “ ”,
   not &rsquo;) on the left, the translation on the right.
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

const ZH = {
  /* ── chrome ── */
  'Skip to content': '跳到正文',
  'International Transport': '国际运输',
  'Rahbanan, home': 'Rahbanan，首页',
  'Main': '主导航',
  'Menu': '菜单',
  'Language': '语言',
  'Sections': '栏目',
  'Services': '服务',
  'Network': '网络',
  'Find a route': '查询路线',
  'Track': '追踪',
  'Contact': '联系',
  'Get a quote': '获取报价',

  /* ── hero ── */
  'Over 40 years · Tehran, Iran': '四十余年 · 伊朗德黑兰',
  'Transport': '运输',
  'is': '是',
  'art.': '艺术。',
  'A Tehran freight forwarder. For over forty years we have moved goods between Europe and Iran by road, rail, air and sea, through our own hubs from Dartford to Istanbul.':
    '德黑兰货运代理公司。四十多年来，我们通过公路、铁路、航空和海运，经由从达特福德到伊斯坦布尔的自有枢纽，在欧洲与伊朗之间运送货物。',
  'Track a shipment': '追踪货物',
  'Move your cursor across the map': '在地图上移动光标',
  'Years of trade': '经营年限',
  'European hubs': '欧洲枢纽',
  'Transport modes': '运输方式',
  'Ocean coverage': '海运覆盖',
  'Global': '全球',

  /* ── services ── */
  'Four modes, one file number.': '四种方式，一个档案号。',
  'Every shipment gets one file number. Booking, customs, delivery and tracking all sit under it.':
    '每批货物只有一个档案号。订舱、清关、交付和追踪都在这个号码之下。',
  'Land': '陆运',
  'FTL and LTL loads through Europe': '欧洲全境的整车与零担运输',
  'We cover Europe, with hubs in Dartford, Paris, Lyon, Nürnberg, Vienna, Milan and Istanbul, providing direct LTL services at daily intervals with the shortest transit time.':
    '我们覆盖整个欧洲，在达特福德、巴黎、里昂、纽伦堡、维也纳、米兰和伊斯坦布尔设有枢纽，提供每日发运的直达零担服务，运输时间最短。',
  'Daily departures': '每日发运',
  'Rail': '铁路',
  'Multimodal land-bridge services': '多式联运陆桥服务',
  'We handle rail shipments mainly from Turkey, conventionally and containerised, and also combined multimodal services.':
    '我们主要承接从土耳其出发的铁路运输，包括散货和集装箱，以及多式联运组合服务。',
  'Containerised': '集装箱',
  'Conventional': '散货',
  'Land bridge': '陆桥',
  'Air': '空运',
  'Efficient air freight handling': '高效的空运操作',
  'Through our extensive network we ship in and out, connecting all major airports, with DDU and DDP services.':
    '通过我们广泛的网络，我们承接进出口空运，连接所有主要机场，并提供 DDU 和 DDP 服务。',
  'Airport to door': '机场到门',
  'Sea': '海运',
  'FCL and LCL services globally': '全球整箱与拼箱服务',
  'We offer worldwide coverage: direct through major shipping lines, and indirect via NVO services, without cross-stuffing of goods, to and from Iranian ports.':
    '我们提供全球覆盖：通过主要船公司直航，或通过无船承运人服务中转，货物不换箱，往返伊朗各港口。',
  'No cross-stuffing': '不换箱',
  'Coverage': '覆盖范围', 'Departures': '发运', 'Service': '服务', 'Cargo': '货物类型',
  'Terms': '条款', 'Via': '经由',
  'Europe → Türkiye → Iran': '欧洲 → 土耳其 → 伊朗',
  'Daily, from seven hubs': '每日，从七个枢纽发出',
  'Türkiye → Iran, with a European land bridge': '土耳其 → 伊朗，附欧洲陆桥',
  'Containerised · Conventional': '集装箱 · 散货',
  'Multimodal · Combined': '多式联运 · 组合运输',
  'All major airports': '所有主要机场',
  'Import · Export': '进口 · 出口',
  'Global, to and from Iranian ports': '全球，往返伊朗港口',
  'Direct lines · NVO': '直航船公司 · 无船承运人',
  'FCL · LCL, no cross-stuffing': '整箱 · 拼箱，不换箱',

  /* ── route finder ── */
  'Route & service finder': '路线与服务查询',
  'Tell us the lane. We’ll tell you the options.': '告诉我们航线，我们告诉您选项。',
  'Pick an origin and a destination to see which of our modes serve it, and roughly how long each takes.':
    '选择起点和终点，查看我们哪些运输方式覆盖该路线，以及各自大致需要多长时间。',
  'Origin': '起点',
  'Destination': '终点',
  'Show routes': '显示路线',
  'Swap origin and destination': '交换起点与终点',
  'Swap': '交换',
  'On request': '按需提供',
  'FTL & LTL road freight': '整车与零担公路运输',
  'Multimodal land bridge': '多式联运陆桥',
  'DDU & DDP air freight': 'DDU 与 DDP 空运',
  'FCL & LCL ocean freight': '整箱与拼箱海运',
  'Origin and destination are the same. Pick two different places.':
    '起点与终点相同。请选择两个不同的地点。',
  'Transit times are indicative door-to-door bands, excluding customs dwell.':
    '运输时间为门到门的参考区间，不含清关停留时间。',
  'Ask us for a firm quote on this lane': '获取此路线的正式报价',

  /* lane notes */
  'Direct LTL departs daily from our European hubs; rail runs as a land bridge via Türkiye.':
    '直达零担每日从我们的欧洲枢纽发出；铁路经土耳其作为陆桥运行。',
  'Our Istanbul hub consolidates for onward movement east.':
    '我们的伊斯坦布尔枢纽集拼货物，继续向东运送。',
  'Conventional and containerised rail, plus combined multimodal.':
    '散货与集装箱铁路运输，以及多式联运组合。',
  'FTL and LTL between our own hubs, at daily intervals.':
    '我们自有枢纽之间的整车与零担运输，每日发运。',
  'Domestic haulage and customs clearance handled by the Tehran office.':
    '境内运输和清关由德黑兰办公室办理。',
  'FCL and LCL direct through major lines, or NVO, with no cross-stuffing of goods.':
    '整箱与拼箱通过主要船公司直航或无船承运人运输，货物不换箱。',
  'Airport-to-door with DDU and DDP, or port-to-port by sea.':
    'DDU 与 DDP 机场到门空运，或港到港海运。',
  'Consolidated in Istanbul for onward European or Iranian delivery.':
    '在伊斯坦布尔集拼，继而送达欧洲或伊朗。',
  'Domestic Turkish haulage, feeding our Istanbul consolidation.':
    '土耳其境内运输，汇入我们的伊斯坦布尔集拼中心。',
  'Global coverage through our line and airline network.':
    '通过我们的船公司和航空公司网络覆盖全球。',
  'Overland through Kazakhstan and Ürümqi, or direct ocean into Iranian ports.':
    '经哈萨克斯坦和乌鲁木齐陆运，或直航海运至伊朗港口。',
  'Rail land bridge into Istanbul for onward European distribution.':
    '铁路陆桥至伊斯坦布尔，继而分拨至欧洲。',
  'Block-train land bridge, or FCL and LCL through major lines.':
    '整列班列陆桥，或通过主要船公司的整箱与拼箱运输。',
  'Intra-Asia feeder and cross-border trucking.':
    '亚洲区内支线运输与跨境卡车运输。',
  'Consolidated out of Shanghai, Shenzhen and Busan.':
    '从上海、深圳和釜山集拼发出。',

  /* ── network ── */
  'Our own hubs.':
    '我们的自有枢纽。',
  'Seven hubs in Europe consolidate cargo for the corridor through Istanbul into Iran. LTL leaves each hub daily. East of Tehran the corridor continues through Kazakhstan and Ürümqi to Xi’an, Shanghai and the East Asian ports.':
    '欧洲的七个枢纽为经伊斯坦布尔进入伊朗的走廊集拼货物。零担每日从每个枢纽发出。德黑兰以东，走廊经哈萨克斯坦和乌鲁木齐延伸至西安、上海和东亚各港口。',
  'Head office is in Tehran. The team that books the space also handles customs, the delivery order and final delivery.':
    '总部位于德黑兰。负责订舱的团队同时办理清关、提货单和最终交付。',
  'Talk to the Tehran desk': '联系德黑兰团队',
  'Head office': '总部',

  /* ── track & trace ── */
  'Track & trace': '货物追踪',
  'Track a shipment.':
    '追踪货物。',
  'Search by bill of lading, container or truck number, or by our file number.':
    '按提单号、集装箱号或卡车号，或按我们的档案号查询。',
  'CNTR / Truck': '集装箱 / 卡车',
  'File no.': '档案号',
  'Reference number': '参考编号',
  'Demo references:': '示例编号：',
  'e.g. MSCUAB1948217': '例如 MSCUAB1948217',
  'e.g. MSCU7741208': '例如 MSCU7741208',
  'e.g. RB-2026-0412': '例如 RB-2026-0412',
  'Searching…': '查询中…',
  'No record for': '未找到记录：',
  'Check the reference, or': '请核对编号，或',
  'call the Tehran desk': '致电德黑兰团队',
  'and we will find it by shipper name and date.': '，我们将按发货人名称和日期为您查找。',
  'Bill of lading': '提单',
  'Container / truck': '集装箱 / 卡车',
  'Pieces': '件数',
  'Gross weight': '毛重',
  'ETA': '预计到达',
  'In transit': '运输中',
  'Out for delivery': '派送中',
  'Delivered': '已交付',
  'Booking confirmed': '订舱已确认',
  'Loaded and sealed': '已装箱封签',
  'Departed load port': '已离装货港',
  'On water': '海上运输中',
  'Arrival at discharge port': '抵达卸货港',
  'Customs clearance': '清关',
  'Collected': '已提货',
  'Hub transfer': '枢纽中转',
  'Border crossing': '过境',
  'Customs cleared': '清关完成',
  'Space confirmed with the carrier; documents issued.': '已向承运人确认舱位；单证已出具。',
  'Containers stuffed at shipper’s premises.': '集装箱已在发货人处装箱。',
  'On board, bill of lading released.': '已装船，提单已放行。',
  'Vessel transited on schedule.': '船舶按计划航行。',
  'Estimated.': '预计。',
  'Handled by our Tehran desk.': '由我们的德黑兰团队办理。',
  'Delivery order to consignee.': '提货单已交收货人。',
  'Consolidated on our daily Nürnberg departure.': '已并入我们每日的纽伦堡发运。',
  'Cross-docked for the eastbound leg.': '已越库转运至东行段。',
  'Transit formalities completed.': '过境手续已完成。',
  'Duties settled, goods released.': '关税已缴，货物已放行。',
  'With the local haulier.': '已交本地运输商。',
  'Estimated today': '预计今日',
  'Proof of delivery to follow.': '签收证明随后提供。',

  /* ── about ── */
  '“We are a business over 40 years, and we have handled most types of goods through various routes.”':
    '“我们经营四十余年，通过各种路线运送过大多数类型的货物。”',
  'Rahbanan International Transport Co. Ltd.': 'Rahbanan 国际运输有限公司',
  'Flexible': '灵活',
  'Out-of-gauge cargo, unusual routings, tight deadlines.':
    '超限货物、非常规路线、紧迫期限。',
  'Competitive': '有竞争力',
  'Direct line and airline contracts, plus NVO options where they price better.':
    '与船公司和航空公司直接签约，在价格更优时另有无船承运人方案。',
  'Customer oriented': '以客户为本',
  'One named contact from booking to delivery order.':
    '从订舱到提货单，由同一位专人负责。',

  /* ── quote form ── */
  'Receive a quote for your shipment.': '获取您货物的报价。',
  'Contact details and route are required. Everything else helps us price it accurately.':
    '联系方式和路线为必填项。其余信息有助于我们准确报价。',
  'Contact information': '联系信息',
  'Full name *': '姓名 *',
  'Company': '公司',
  'Email *': '电子邮箱 *',
  'Phone': '电话',
  'Parcel information': '货物信息',
  'From *': '起点 *',
  'To *': '终点 *',
  'City, country': '城市，国家',
  'Preferred mode': '首选运输方式',
  'No preference': '无偏好',
  'Incoterm': '贸易术语',
  'Not sure': '不确定',
  'Commodity': '货物品名',
  'What is it?': '是什么货物？',
  'Dimensions / volume': '尺寸 / 体积',
  'L×W×H cm, or m³': '长×宽×高（厘米），或立方米',
  'Packages': '包装件数',
  'Pallets, cartons, units': '托盘、纸箱、件',
  'Anything else': '其他说明',
  'Ready date, hazardous class, temperature control, deadlines…':
    '备货日期、危险品等级、温控、期限…',
  'Send request': '发送请求',
  'Goes to': '发送至',
  '. We reply within one working day.': '。我们将在一个工作日内回复。',
  'Your email client should now be open with the request filled in. Just press send. If nothing happened, mail us at tehran@rahbanan.com.':
    '您的邮件客户端应已打开并填好请求内容，点击发送即可。如果没有反应，请发邮件至 tehran@rahbanan.com。',

  /* ── contact + footer ── */
  'Contact us': '联系我们',
  'Tehran head office.': '德黑兰总部。',
  'Telephone': '电话',
  'Sat–Wed, 08:30–17:00 IRST': '周六至周三，08:30–17:00（伊朗时间）',
  'Email': '电子邮箱',
  'Quotes, bookings and documents': '报价、订舱与单证',
  'Location': '地址',
  '95 North Kheradmand Ave': 'North Kheradmand 大街 95 号',
  'Karimkhan Zand Blvd, Tehran, Iran': 'Karimkhan Zand 大道，伊朗德黑兰',
  '95 North Kheradmand Ave, Karimkhan Zand Blvd, Tehran, Iran':
    '伊朗德黑兰 Karimkhan Zand 大道 North Kheradmand 大街 95 号',
  'About us': '关于我们',
  'Track shipment': '追踪货物',
  'External links': '外部链接',
  'Int’l Transport Companies Association of Iran': '伊朗国际运输公司协会',
  'Iran Ports & Maritime Organization': '伊朗港口与海事组织',
  'Shipping Association of Iran': '伊朗航运协会',
  'Freight forwarder software (OTMS)': '货代软件（OTMS）',
  'XE live exchange rates': 'XE 实时汇率',
  'Photography:': '摄影：',
  '· Transport is art.': '· 运输是艺术。',

  /* ── places (also used for the labels drawn on the map) ── */
  'Dartford, United Kingdom': '达特福德，英国',
  'Paris, France': '巴黎，法国',
  'Lyon, France': '里昂，法国',
  'Nürnberg, Germany': '纽伦堡，德国',
  'Milan, Italy': '米兰，意大利',
  'Vienna, Austria': '维也纳，奥地利',
  'Istanbul, Türkiye': '伊斯坦布尔，土耳其',
  'Tehran, Iran': '德黑兰，伊朗',
  'Bandar Abbas, Iran': '阿巴斯港，伊朗',
  'Bandar Imam Khomeini, Iran': '霍梅尼港，伊朗',
  'Almaty, Kazakhstan': '阿拉木图，哈萨克斯坦',
  'Ürümqi, China': '乌鲁木齐，中国',
  "Xi'an, China": '西安，中国',
  'Shanghai, China': '上海，中国',
  'Shenzhen, China': '深圳，中国',
  'Busan, South Korea': '釜山，韩国',
  'Elsewhere in Europe': '欧洲其他地区',
  'Elsewhere in East Asia': '东亚其他地区',
  'Rest of world': '世界其他地区',
  'United Kingdom': '英国', 'France': '法国', 'Germany': '德国',
  'Italy': '意大利', 'Austria': '奥地利', 'Türkiye': '土耳其', 'Iran': '伊朗',
  'Kazakhstan': '哈萨克斯坦', 'China': '中国', 'South Korea': '韩国',
};

/* Transit bands are generated, not listed: one rule beats thirty entries. */
const digits = s => String(s).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
const RULES = {
  fa: [[/^(\d+)[–-](\d+) days?$/, (_, a, b) => `${digits(a)} تا ${digits(b)} روز`],
       [/^(\d+) days?$/, (_, a) => `${digits(a)} روز`]],
  zh: [[/^(\d+)[–-](\d+) days?$/, (_, a, b) => `${a}至${b}天`],
       [/^(\d+) days?$/, (_, a) => `${a}天`]],
};
const DICTS = { fa: FA, zh: ZH };
const FONTS = {                     // loaded on first switch, not up front
  fa: 'Vazirmatn:wght@400;500;600;700;800',
  zh: 'Noto+Sans+SC:wght@400;500;600;700',
};

const norm = s => s.replace(/\s+/g, ' ').trim();

function lookup(en) {
  const k = norm(en);
  if (!k) return null;
  const d = DICTS[lang];
  if (d[k] !== undefined) return d[k];
  for (const [re, fn] of RULES[lang]) if (re.test(k)) return k.replace(re, fn);
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

const fontLoaded = new Set();
function loadFont(l) {
  if (fontLoaded.has(l)) return;
  fontLoaded.add(l);
  document.head.insertAdjacentHTML('beforeend',
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=' +
    FONTS[l] + '&display=swap">');
}

function set(next) {
  lang = DICTS[next] ? next : 'en';
  if (lang !== 'en') loadFont(lang);

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
if (DICTS[saved]) set(saved);
})();
