// All site copy and images live here. Edit text or swap images in this one file.
import livingRoom from "@/assets/living-room.webp.asset.json";
import tvWall from "@/assets/tv-wall-walnut.webp.asset.json";
import kitchen from "@/assets/kitchen-pantry.webp.asset.json";
import bedroomWardrobe from "@/assets/bedroom-wardrobe.webp.asset.json";
import vanity from "@/assets/vanity-mirror.webp.asset.json";
import entry from "@/assets/entry-wardrobe.webp.asset.json";
import kids from "@/assets/kids-study.webp.asset.json";
import twin from "@/assets/twin-bedroom.webp.asset.json";

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
  { key: "entry", src: entry.url, w: 828, h: 982, cat: "living" },
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
    lines: ["Rooms made", "to be lived in."],
    ctaProjects: "View Projects",
    ctaContact: "Contact Us",
  },
  about: {
    title: "Design. Build. Install.",
    facts: ["Kitchens", "Wardrobes", "Living Spaces"],
  },
  services: {
    title: "Services",
    items: [
      { t: "Kitchens" },
      { t: "Wardrobes & Dressing Areas" },
      { t: "TV Walls & Living Rooms" },
      { t: "Bedrooms" },
      { t: "Kids' Rooms" },
      { t: "Full Interior Fit-out" },
    ],
  },
  projects: {
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
  contact: {
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
    lines: ["ئەو ژوورانەی", "تێیدا دەژیت."],
    ctaProjects: "پرۆژەکان ببینە",
    ctaContact: "پەیوەندیمان پێوە بکە",
  },
  about: {
    title: "دیزاین. دروستکردن. دامەزراندن.",
    facts: ["چێشتخانە", "کەنتۆر", "هۆڵ و ژووری دانیشتن"],
  },
  services: {
    title: "خزمەتگوزارییەکان",
    items: [
      { t: "چێشتخانە" },
      { t: "کەنتۆر و ژووری جلوبەرگ" },
      { t: "دیواری تیڤی و هۆڵ" },
      { t: "ژووری نوستن" },
      { t: "ژووری منداڵان" },
      { t: "تەواوکردنی ناوخۆی ماڵ" },
    ],
  },
  projects: {
    title: "پرۆژەکان",
    filters: { all: "هەموو", kitchens: "چێشتخانە", bedrooms: "ژووری نوستن", living: "هۆڵ", kids: "منداڵان" },
    alts: en.projects.alts,
    close: "داخستن",
    prev: "پێشوو",
    next: "دواتر",
  },
  contact: {
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
    lines: ["غرف صُنعت", "لتعيش فيها."],
    ctaProjects: "شاهد المشاريع",
    ctaContact: "تواصل معنا",
  },
  about: {
    title: "تصميم. تصنيع. تركيب.",
    facts: ["مطابخ", "خزائن", "مساحات معيشة"],
  },
  services: {
    title: "الخدمات",
    items: [
      { t: "المطابخ" },
      { t: "الخزائن وغرف الملابس" },
      { t: "جدران التلفاز وغرف المعيشة" },
      { t: "غرف النوم" },
      { t: "غرف الأطفال" },
      { t: "تجهيز داخلي كامل" },
    ],
  },
  projects: {
    title: "المشاريع",
    filters: { all: "الكل", kitchens: "مطابخ", bedrooms: "غرف نوم", living: "معيشة", kids: "أطفال" },
    alts: en.projects.alts,
    close: "إغلاق",
    prev: "السابق",
    next: "التالي",
  },
  contact: {
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
