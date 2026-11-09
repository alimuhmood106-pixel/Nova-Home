// All site copy and images live here. Edit text or swap images in this one file.
// Real files live in /public/images so any host (Cloudflare Pages) serves them.
const livingRoom = { url: "/images/living-room.webp" };
const tvWall = { url: "/images/tv-wall-walnut.webp" };
const kitchen = { url: "/images/kitchen-pantry.webp" };
const bedroomWardrobe = { url: "/images/bedroom-wardrobe.webp" };
const vanity = { url: "/images/vanity-mirror.webp" };
const entry = { url: "/images/entry-wardrobe.webp" };
const kids = { url: "/images/kids-study.webp" };
const twin = { url: "/images/twin-bedroom.webp" };

export type Lang = "en" | "ckb" | "ar";
export type Category = "kitchens" | "bedrooms" | "living" | "kids";

export const contact = {
  phones: [
    { display: "0770 877 0303", tel: "+9647708770303" },
    { display: "0750 752 1080", tel: "+9647507521080" },
  ],
  whatsapp: "https://wa.me/9647708770303",
  instagram: "https://www.instagram.com/n0va_group",
  facebook: "https://www.facebook.com/profile.php?id=100090671102635",
  mapEmbed: "https://maps.google.com/maps?q=35.5785925,45.4097737&z=17&output=embed",
  mapLink: "https://www.google.com/maps/@35.5785925,45.4097737,152m/data=!3m1!1e3",
};

export const images = {
  hero: { src: livingRoom.url, w: 828, h: 543 },
  aboutA: { src: tvWall.url, w: 828, h: 1023 },
  aboutB: { src: vanity.url, w: 828, h: 1021 },
};

export const projects: { src: string; w: number; h: number; cat: Category; key: string }[] = [
  { key: "living", src: livingRoom.url, w: 828, h: 543, cat: "living" },
  { key: "tv", src: tvWall.url, w: 828, h: 1023, cat: "living" },
  { key: "kitchen", src: kitchen.url, w: 828, h: 1022, cat: "kitchens" },
  { key: "kids", src: kids.url, w: 828, h: 543, cat: "kids" },
  { key: "wardrobe", src: bedroomWardrobe.url, w: 828, h: 1023, cat: "bedrooms" },
  { key: "entry", src: entry.url, w: 828, h: 1031, cat: "living" },
  { key: "twin", src: twin.url, w: 828, h: 543, cat: "bedrooms" },
  { key: "vanity", src: vanity.url, w: 828, h: 1021, cat: "bedrooms" },
];

export const serviceImages = [kitchen.url, bedroomWardrobe.url, tvWall.url, twin.url, kids.url, livingRoom.url];

const en = {
  dir: "ltr" as const,
  label: "EN",
  name: "English",
  nav: { home: "Home", projects: "Projects", services: "Services", about: "About", contact: "Contact", call: "Call Us", menu: "Menu", close: "Close" },
  hero: {
    eyebrow: "Interior design · Joinery · Construction",
    lines: ["We design and build", "the rooms you", "actually live in."],
    sub: "Custom kitchens, wardrobes and living spaces, made in Sulaymaniyah.",
    ctaProjects: "View Projects",
    ctaContact: "Contact Us",
  },
  about: {
    eyebrow: "About Nova Home",
    title: "One team, from the first sketch to the last hinge.",
    body: [
      "Nova Home designs, builds and installs interiors for homes across Sulaymaniyah. We draw the room, make the joinery in our own workshop, and fit it on site.",
    ],
    facts: ["Kitchens", "Wardrobes", "Living Spaces"],
  },
  services: {
    eyebrow: "What we make",
    title: "Services",
    items: [
      { t: "Kitchens", d: "Cabinets, pantries and worktops built around how you cook." },
      { t: "Wardrobes & Dressing Areas", d: "Floor-to-ceiling storage, glass fronts and soft interior light." },
      { t: "TV Walls & Living Rooms", d: "Wood, stone and lighting composed into one quiet wall." },
      { t: "Bedrooms", d: "Headboards, side units and vanities made as one set." },
      { t: "Kids' Rooms", d: "Study desks, beds and shelving that grow with them." },
      { t: "Full Interior Fit-out", d: "Ceilings, walls, lighting and joinery for the whole home." },
    ],
  },
  projects: {
    eyebrow: "Selected work",
    title: "Projects",
    filters: { all: "All", kitchens: "Kitchens", bedrooms: "Bedrooms", living: "Living", kids: "Kids" },
    alts: {
      living: "Living room with cream sofas, walnut panels and a stone feature wall",
      tv: "TV wall in walnut and dark stone with vertical light strips",
      kitchen: "Kitchen pantry with glass cabinets, marble backsplash and grey drawers",
      kids: "Kids' study room with pink chairs, desks and shelving",
      wardrobe: "Bedroom wardrobe with glass doors and interior lighting",
      entry: "Entry wardrobe in walnut and white with hidden light",
      twin: "Twin bedroom with navy curtains and built-in wardrobes",
      vanity: "Floating vanity with an arched brass mirror",
    } as Record<string, string>,
    close: "Close",
    prev: "Previous",
    next: "Next",
  },
  process: {
    eyebrow: "How we work",
    title: "Process",
    steps: [
      { t: "Consultation", d: "We visit, measure and listen to how you use the space." },
      { t: "Design", d: "Drawings, materials and colours, agreed before anything is cut." },
      { t: "Production", d: "Every piece is made to measure in our workshop." },
      { t: "Installation", d: "Our own team fits, adjusts and cleans up." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell us about your room.",
    phones: "Phone",
    follow: "Follow",
    whatsapp: "WhatsApp us",
    openMap: "Open in Google Maps",
    location: "Sulaymaniyah, Kurdistan Region, Iraq",
    form: {
      name: "Name",
      phone: "Phone",
      type: "Project type",
      typeChoose: "Choose one",
      message: "Message",
      send: "Send message",
      errName: "Please enter your name.",
      errPhone: "Please enter a valid phone number.",
      errType: "Please choose a project type.",
      errMessage: "Tell us a little about the project.",
      successTitle: "Thank you.",
      successBody: "We have your message and will call you back soon.",
      again: "Send another",
    },
  },
  footer: { rights: "All rights reserved.", links: "Explore", reach: "Reach us" },
};

type Dict = typeof en;

const ckb: Dict = {
  dir: "rtl",
  label: "کو",
  name: "کوردی",
  nav: { home: "سەرەکی", projects: "پرۆژەکان", services: "خزمەتگوزاری", about: "دەربارە", contact: "پەیوەندی", call: "پەیوەندیمان پێوە بکە", menu: "لیست", close: "داخستن" },
  hero: {
    eyebrow: "دیزاینی ناوخۆ · دارتاشی · بیناسازی",
    lines: ["ئێمە ئەو ژوورانە", "دیزاین و دروست دەکەین", "کە تێیدا دەژیت."],
    sub: "چێشتخانە، کەنتۆر و هۆڵی تایبەت، دروستکراو لە سلێمانی.",
    ctaProjects: "پرۆژەکان ببینە",
    ctaContact: "پەیوەندیمان پێوە بکە",
  },
  about: {
    eyebrow: "دەربارەی نۆڤا هۆم",
    title: "یەک تیم، لە یەکەم ڕەسمەوە تا دوایین وردەکاری.",
    body: [
      "نۆڤا هۆم ناوخۆی ماڵان لە سلێمانی دیزاین و دروست و دامەزراندن دەکات. ژوورەکە دەکێشین، کارە دارییەکان لە کارگەی خۆمان دروست دەکەین و لە شوێنی خۆی دایدەمەزرێنین.",
    ],
    facts: ["چێشتخانە", "کەنتۆر", "هۆڵ و ژووری دانیشتن"],
  },
  services: {
    eyebrow: "ئەوەی دروستی دەکەین",
    title: "خزمەتگوزارییەکان",
    items: [
      { t: "چێشتخانە", d: "کابینە و ڕەفە و مەڕمەڕ بەپێی شێوازی چێشتلێنانت." },
      { t: "کەنتۆر و ژووری جلوبەرگ", d: "هەڵگرتنی تا بنمیچ، دەرگای شووشە و ڕووناکی ناوەوە." },
      { t: "دیواری تیڤی و هۆڵ", d: "دار و بەرد و ڕووناکی لە یەک دیواری هێمندا." },
      { t: "ژووری نوستن", d: "سەرەجێگا، مێزی تەنیشت و ئاوێنە وەک یەک کۆمەڵە." },
      { t: "ژووری منداڵان", d: "مێزی خوێندن، جێگا و ڕەفە کە لەگەڵیان گەورە دەبن." },
      { t: "تەواوکردنی ناوخۆی ماڵ", d: "بنمیچ، دیوار، ڕووناکی و دارتاشی بۆ هەموو ماڵەکە." },
    ],
  },
  projects: {
    eyebrow: "کارە هەڵبژێردراوەکان",
    title: "پرۆژەکان",
    filters: { all: "هەموو", kitchens: "چێشتخانە", bedrooms: "ژووری نوستن", living: "هۆڵ", kids: "منداڵان" },
    alts: en.projects.alts,
    close: "داخستن",
    prev: "پێشوو",
    next: "دواتر",
  },
  process: {
    eyebrow: "چۆن کار دەکەین",
    title: "قۆناغەکان",
    steps: [
      { t: "ڕاوێژ", d: "سەردان دەکەین، دەپێوین و گوێ لە پێداویستییەکانت دەگرین." },
      { t: "دیزاین", d: "نەخشە، کەرەستە و ڕەنگ پێش دەستپێکردن ڕێک دەخەین." },
      { t: "بەرهەمهێنان", d: "هەموو پارچەیەک بەپێی پێوانە لە کارگەکەمان دروست دەکرێت." },
      { t: "دامەزراندن", d: "تیمی خۆمان دایدەمەزرێنێت و ڕێکی دەخات." },
    ],
  },
  contact: {
    eyebrow: "پەیوەندی",
    title: "باسی ژوورەکەتمان بۆ بکە.",
    phones: "تەلەفۆن",
    follow: "فۆڵۆمان بکە",
    whatsapp: "واتسئاپ",
    openMap: "لە گووگڵ ماپ بیکەرەوە",
    location: "سلێمانی، هەرێمی کوردستان، عێراق",
    form: {
      name: "ناو",
      phone: "ژمارەی تەلەفۆن",
      type: "جۆری پرۆژە",
      typeChoose: "یەکێک هەڵبژێرە",
      message: "نامە",
      send: "ناردن",
      errName: "تکایە ناوت بنووسە.",
      errPhone: "تکایە ژمارەیەکی دروست بنووسە.",
      errType: "تکایە جۆری پرۆژە هەڵبژێرە.",
      errMessage: "کەمێک باسی پرۆژەکەمان بۆ بکە.",
      successTitle: "سوپاس.",
      successBody: "نامەکەت گەیشت، بەم زووانە پەیوەندیت پێوە دەکەین.",
      again: "نامەیەکی تر",
    },
  },
  footer: { rights: "هەموو مافەکان پارێزراون.", links: "بەشەکان", reach: "پەیوەندی" },
};

const ar: Dict = {
  dir: "rtl",
  label: "ع",
  name: "العربية",
  nav: { home: "الرئيسية", projects: "المشاريع", services: "الخدمات", about: "من نحن", contact: "تواصل", call: "اتصل بنا", menu: "القائمة", close: "إغلاق" },
  hero: {
    eyebrow: "تصميم داخلي · نجارة · بناء",
    lines: ["نصمّم ونبني", "الغرف التي", "تعيش فيها فعلاً."],
    sub: "مطابخ وخزائن ومساحات معيشة حسب الطلب، تُصنع في السليمانية.",
    ctaProjects: "شاهد المشاريع",
    ctaContact: "تواصل معنا",
  },
  about: {
    eyebrow: "عن نوفا هوم",
    title: "فريق واحد، من أول رسم إلى آخر مفصّلة.",
    body: [
      "تصمّم نوفا هوم وتنفّذ وتركّب التصاميم الداخلية للمنازل في السليمانية. نرسم الغرفة، ونصنع أعمال النجارة في ورشتنا، ونركّبها في الموقع.",
    ],
    facts: ["مطابخ", "خزائن", "مساحات معيشة"],
  },
  services: {
    eyebrow: "ما نصنعه",
    title: "الخدمات",
    items: [
      { t: "المطابخ", d: "خزائن ومخازن وأسطح عمل مبنية حول طريقة طبخك." },
      { t: "الخزائن وغرف الملابس", d: "تخزين حتى السقف، واجهات زجاجية وإضاءة داخلية ناعمة." },
      { t: "جدران التلفاز وغرف المعيشة", d: "خشب وحجر وإضاءة في جدار واحد هادئ." },
      { t: "غرف النوم", d: "ظهر سرير وطاولات جانبية وتسريحات كطقم واحد." },
      { t: "غرف الأطفال", d: "مكاتب دراسة وأسرّة ورفوف تكبر معهم." },
      { t: "تجهيز داخلي كامل", d: "أسقف وجدران وإضاءة ونجارة للمنزل بأكمله." },
    ],
  },
  projects: {
    eyebrow: "أعمال مختارة",
    title: "المشاريع",
    filters: { all: "الكل", kitchens: "مطابخ", bedrooms: "غرف نوم", living: "معيشة", kids: "أطفال" },
    alts: en.projects.alts,
    close: "إغلاق",
    prev: "السابق",
    next: "التالي",
  },
  process: {
    eyebrow: "طريقة عملنا",
    title: "المراحل",
    steps: [
      { t: "الاستشارة", d: "نزورك ونقيس ونستمع إلى طريقة استخدامك للمكان." },
      { t: "التصميم", d: "رسومات ومواد وألوان يُتفق عليها قبل أي قص." },
      { t: "التصنيع", d: "كل قطعة تُصنع على المقاس في ورشتنا." },
      { t: "التركيب", d: "فريقنا يركّب ويضبط وينظّف." },
    ],
  },
  contact: {
    eyebrow: "تواصل",
    title: "حدّثنا عن غرفتك.",
    phones: "الهاتف",
    follow: "تابعنا",
    whatsapp: "راسلنا على واتساب",
    openMap: "افتح في خرائط جوجل",
    location: "السليمانية، إقليم كردستان، العراق",
    form: {
      name: "الاسم",
      phone: "الهاتف",
      type: "نوع المشروع",
      typeChoose: "اختر واحداً",
      message: "الرسالة",
      send: "إرسال",
      errName: "يرجى إدخال اسمك.",
      errPhone: "يرجى إدخال رقم هاتف صحيح.",
      errType: "يرجى اختيار نوع المشروع.",
      errMessage: "أخبرنا قليلاً عن المشروع.",
      successTitle: "شكراً لك.",
      successBody: "وصلتنا رسالتك وسنتصل بك قريباً.",
      again: "إرسال رسالة أخرى",
    },
  },
  footer: { rights: "جميع الحقوق محفوظة.", links: "روابط", reach: "تواصل معنا" },
};

export const dictionaries: Record<Lang, Dict> = { en, ckb, ar };
export type { Dict };
