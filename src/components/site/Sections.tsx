import { useEffect, useRef, useState } from "react";
import { contact, images, projects, serviceImages, type Category } from "@/content";
import { cn } from "@/lib/utils";
import { useI18n } from "./i18n";
import { Icons, Img, Reveal, SectionHead, useParallax } from "./primitives";

export function Hero() {
  const { t, lang } = useI18n();
  const par = useParallax<HTMLDivElement>(0.15);
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-on-dark">
      <div ref={par} className="absolute -inset-y-[8%] inset-x-0">
        <img
          src={images.hero.src}
          alt=""
          width={images.hero.w}
          height={images.hero.h}
          fetchPriority="high"
          className="kenburns h-full w-full object-cover"
        />
      </div>
      <div className="hero-overlay absolute inset-0" />
      <div key={lang} className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 pt-32 md:px-10 md:pb-24">
        <p className="eyebrow reveal is-in text-on-dark/80" style={{ "--d": "1700ms" } as React.CSSProperties}>
          {t.hero.eyebrow}
        </p>
        <h1 className="mt-6 max-w-4xl font-serif text-[clamp(2.6rem,7.5vw,6.5rem)] font-light leading-[1.02]">
          {t.hero.lines.map((l, i) => (
            <span key={i} className="line-mask">
              <span style={{ "--d": `${1800 + i * 140}ms` } as React.CSSProperties}>{l}</span>
            </span>
          ))}
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <p className="reveal is-in max-w-md text-base text-on-dark/80 md:text-lg" style={{ "--d": "2300ms" } as React.CSSProperties}>
            {t.hero.sub}
          </p>
          <div className="reveal is-in flex flex-wrap gap-3" style={{ "--d": "2450ms" } as React.CSSProperties}>
            <a href="#projects" className="group inline-flex items-center gap-3 bg-on-dark px-7 py-4 text-xs uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:bg-brass">
              {t.hero.ctaProjects}
              <Icons.Arrow className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center border border-on-dark/50 px-7 py-4 text-xs uppercase tracking-[0.16em] transition-colors duration-300 hover:bg-on-dark hover:text-ink">
              {t.hero.ctaContact}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const { t } = useI18n();
  const a = useParallax<HTMLDivElement>(0.05);
  const b = useParallax<HTMLDivElement>(0.14);
  return (
    <section id="about" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-40">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5 lg:pt-16">
          <Reveal as="p" className="eyebrow text-muted-foreground">{t.about.eyebrow}</Reveal>
          <Reveal as="h2" delay={100} className="mt-6 font-serif text-4xl leading-[1.08] md:text-6xl">{t.about.title}</Reveal>
          {t.about.body.map((p, i) => (
            <Reveal as="p" key={i} delay={200 + i * 100} className="mt-6 max-w-md leading-relaxed text-muted-foreground">{p}</Reveal>
          ))}
          <ul className="mt-12 border-t border-border">
            {t.about.facts.map((f, i) => (
              <Reveal as="li" key={f} delay={300 + i * 100} className="flex items-baseline gap-6 border-b border-border py-4">
                <span className="text-xs text-accent">0{i + 1}</span>
                <span className="font-serif text-2xl">{f}</span>
              </Reveal>
            ))}
          </ul>
        </div>
        <div className="relative lg:col-span-6 lg:col-start-7">
          <div ref={a} className="w-[78%] ms-auto">
            <Reveal wipe className="aspect-[4/5] overflow-hidden bg-muted">
              <Img src={images.aboutA.src} w={images.aboutA.w} h={images.aboutA.h} alt={t.projects.alts.tv} />
            </Reveal>
          </div>
          <div ref={b} className="absolute -bottom-12 start-0 w-[46%] border-[10px] border-background">
            <Reveal wipe delay={250} className="aspect-[3/4] overflow-hidden bg-muted">
              <Img src={images.aboutB.src} w={images.aboutB.w} h={images.aboutB.h} alt={t.projects.alts.vanity} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="bg-card py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHead index="01" eyebrow={t.services.eyebrow} title={t.services.title} />
        <div className="mt-4 grid gap-12 lg:grid-cols-12">
          <ul className="lg:col-span-7" onMouseLeave={() => undefined}>
            {t.services.items.map((s, i) => (
              <Reveal as="li" key={i} delay={i * 70}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group grid w-full grid-cols-[2.5rem_minmax(0,1fr)_auto] items-baseline gap-4 border-b border-border py-7 text-start md:grid-cols-[4rem_minmax(0,1fr)_auto]"
                >
                  <span className={cn("text-xs transition-colors duration-500", active === i ? "text-brass" : "text-muted-foreground")}>0{i + 1}</span>
                  <span className="min-w-0">
                    <span className={cn("block font-serif text-3xl transition-transform duration-500 md:text-4xl", active === i ? "translate-x-2 rtl:-translate-x-2 text-primary" : "")}>
                      {s.t}
                    </span>
                    <span className={cn("mt-2 block max-w-md text-sm text-muted-foreground transition-opacity duration-500", active === i ? "opacity-100" : "opacity-60")}>{s.d}</span>
                  </span>
                  <Icons.Arrow className={cn("h-5 w-5 transition-[opacity,transform] duration-500", active === i ? "opacity-100" : "-translate-x-2 opacity-0 rtl:translate-x-2")} />
                </button>
                <div className="mt-4 aspect-[16/10] overflow-hidden lg:hidden" hidden={active !== i}>
                  <Img src={serviceImages[i]} w={828} h={600} alt={s.t} />
                </div>
              </Reveal>
            ))}
          </ul>
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden bg-muted">
              {serviceImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={i === active ? t.services.items[i].t : ""}
                  width={828}
                  height={1023}
                  loading="lazy"
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[900ms]",
                    i === active ? "scale-100 opacity-100" : "scale-105 opacity-0",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const filters = ["all", "kitchens", "bedrooms", "living", "kids"] as const;

export function Projects() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const [open, setOpen] = useState<number | null>(null);
  const list = projects.filter((p) => filter === "all" || p.cat === (filter as Category));

  return (
    <section id="projects" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-40">
      <SectionHead index="02" eyebrow={t.projects.eyebrow} title={t.projects.title} />
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm" role="tablist">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            data-active={filter === f}
            className={cn("link-underline transition-colors", filter === f ? "text-primary" : "text-muted-foreground hover:text-foreground")}
          >
            {t.projects.filters[f]}
          </button>
        ))}
      </div>
      <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {list.map((p, i) => (
          <Reveal key={p.key} delay={(i % 3) * 90} className="mb-5 break-inside-avoid">
            <button
              onClick={() => setOpen(i)}
              className="group relative block w-full overflow-hidden bg-muted"
              style={{ aspectRatio: `${p.w} / ${p.h}` }}
              aria-label={t.projects.alts[p.key]}
            >
              <Img src={p.src} w={p.w} h={p.h} alt={t.projects.alts[p.key]} className="transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between bg-gradient-to-t from-ink/70 to-transparent p-5 text-xs uppercase tracking-[0.2em] text-on-dark opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Nova Home
                <span className="text-brass">{t.projects.filters[p.cat]}</span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      {open !== null && <Lightbox items={list} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />}
    </section>
  );
}

function Lightbox({ items, index, onIndex, onClose }: { items: typeof projects; index: number; onIndex: (i: number) => void; onClose: () => void }) {
  const { t } = useI18n();
  const [shown, setShown] = useState(false);
  const touch = useRef<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const go = (d: number) => onIndex((index + d + items.length) % items.length);

  useEffect(() => {
    requestAnimationFrame(() => setShown(true));
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    const sw = innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingInlineEnd = `${sw}px`;
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingInlineEnd = "";
    };
  }, []);
  useEffect(() => {
    const rtl = document.documentElement.dir === "rtl";
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") go(rtl ? 1 : -1);
    };
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  });
  const p = items[index];
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.projects.alts[p.key]}
      className={cn("fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 transition-opacity duration-500", shown ? "opacity-100" : "opacity-0")}
      onClick={onClose}
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touch.current === null) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        const rtl = document.documentElement.dir === "rtl";
        if (Math.abs(dx) > 50) go((dx < 0 ? 1 : -1) * (rtl ? -1 : 1));
        touch.current = null;
      }}
    >
      <img
        key={p.key}
        src={p.src}
        alt={t.projects.alts[p.key]}
        width={p.w}
        height={p.h}
        onClick={(e) => e.stopPropagation()}
        className="reveal is-in max-h-[86svh] max-w-[92vw] object-contain"
      />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-on-dark">
        <span className="text-xs tracking-[0.2em]">{String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
        <button ref={closeRef} onClick={onClose} aria-label={t.projects.close} className="h-11 w-11 text-2xl font-light">×</button>
      </div>
      {items.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label={t.projects.prev} className="absolute start-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-on-dark/30 text-on-dark transition-colors hover:border-brass sm:flex">
            <Icons.Arrow className="h-5 w-5 -scale-x-100 rtl:scale-x-100" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); go(1); }} aria-label={t.projects.next} className="absolute end-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-on-dark/30 text-on-dark transition-colors hover:border-brass sm:flex">
            <Icons.Arrow className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  );
}

export function Process() {
  const { t } = useI18n();
  const wrap = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const w = wrap.current, l = line.current;
    if (!w || !l) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      l.style.transform = "scaleY(1)";
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = w.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.7 - r.top) / r.height));
      l.style.transform = `scaleY(${p.toFixed(3)})`;
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    addEventListener("scroll", on, { passive: true });
    return () => { removeEventListener("scroll", on); cancelAnimationFrame(raf); };
  }, []);
  return (
    <section className="bg-primary py-24 text-primary-foreground md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal as="p" className="eyebrow text-primary-foreground/70">{t.process.eyebrow}</Reveal>
            <Reveal as="h2" delay={100} className="mt-4 font-serif text-5xl md:text-7xl">{t.process.title}</Reveal>
          </div>
        </div>
        <div ref={wrap} className="relative lg:col-span-7 lg:col-start-6">
          <div className="absolute inset-y-0 start-[11px] w-px bg-primary-foreground/15" />
          <div ref={line} className="absolute inset-y-0 start-[11px] w-px origin-top bg-brass" style={{ transform: "scaleY(0)" }} />
          <ol>
            {t.process.steps.map((s, i) => (
              <li key={i} className="relative grid grid-cols-[1.5rem_minmax(0,1fr)] gap-8 pb-20 last:pb-0">
                <span className="relative z-10 mt-3 h-[23px] w-[23px] rounded-full border border-brass bg-primary" />
                <Reveal delay={80}>
                  <span className="font-serif text-6xl text-primary-foreground/25 md:text-7xl">0{i + 1}</span>
                  <h3 className="mt-2 font-serif text-3xl md:text-4xl">{s.t}</h3>
                  <p className="mt-3 max-w-md text-primary-foreground/70">{s.d}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useI18n();
  const f = t.contact.form;
  const [vals, setVals] = useState({ name: "", phone: "", type: "", message: "" });
  const [errs, setErrs] = useState<Partial<Record<keyof typeof vals, string>>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const n: typeof errs = {};
    if (vals.name.trim().length < 2) n.name = f.errName;
    if (!/^\+?[\d\s-]{7,16}$/.test(vals.phone.trim())) n.phone = f.errPhone;
    if (!vals.type) n.type = f.errType;
    if (vals.message.trim().length < 5) n.message = f.errMessage;
    setErrs(n);
    if (Object.keys(n).length === 0) setSent(true);
  };
  const field = "w-full border-0 border-b border-input bg-transparent py-3 outline-none transition-colors focus:border-primary";
  const set = (k: keyof typeof vals) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setVals({ ...vals, [k]: e.target.value });

  return (
    <section id="contact" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-40">
      <SectionHead index="03" eyebrow={t.contact.eyebrow} title={t.contact.title} />
      <div className="mt-16 grid gap-16 lg:grid-cols-12">
        <div className="space-y-10 lg:col-span-5">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.contact.phones}</p>
            {contact.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} dir="ltr" className="link-underline mt-3 block w-fit font-serif text-3xl md:text-4xl">{p.display}</a>
            ))}
          </Reveal>
          <Reveal delay={100} className="flex flex-wrap gap-3">
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-primary px-6 py-4 text-xs uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-accent">
              <Icons.WhatsApp className="h-5 w-5" /> {t.contact.whatsapp}
            </a>
            <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-[52px] w-[52px] items-center justify-center border border-border transition-colors hover:border-brass hover:text-accent"><Icons.Instagram className="h-5 w-5" /></a>
            <a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-[52px] w-[52px] items-center justify-center border border-border transition-colors hover:border-brass hover:text-accent"><Icons.Facebook className="h-5 w-5" /></a>
          </Reveal>
          <Reveal delay={150}>
            <div className="aspect-[4/3] overflow-hidden border border-border bg-muted">
              <iframe title="Nova Home map" src={contact.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full w-full saturate-[1.2]" />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
              <span className="text-muted-foreground">{t.contact.location}</span>
              <a href={contact.mapLink} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 text-primary">
                {t.contact.openMap} <Icons.Arrow className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
          {sent ? (
            <div className="flex min-h-[420px] flex-col justify-center border-t border-primary pt-10" role="status">
              <p className="font-serif text-5xl text-primary">{f.successTitle}</p>
              <p className="mt-4 max-w-sm text-muted-foreground">{f.successBody}</p>
              <button onClick={() => { setSent(false); setVals({ name: "", phone: "", type: "", message: "" }); }} className="link-underline mt-8 w-fit text-sm">{f.again}</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="grid gap-8 sm:grid-cols-2">
              {(["name", "phone"] as const).map((k) => (
                <label key={k} className="block">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{f[k]}</span>
                  <input type={k === "phone" ? "tel" : "text"} value={vals[k]} onChange={set(k)} className={field} aria-invalid={!!errs[k]} autoComplete={k === "phone" ? "tel" : "name"} />
                  {errs[k] && <span className="mt-2 block text-xs text-destructive">{errs[k]}</span>}
                </label>
              ))}
              <label className="block sm:col-span-2">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{f.type}</span>
                <select value={vals.type} onChange={set("type")} className={field} aria-invalid={!!errs.type}>
                  <option value="">{f.typeChoose}</option>
                  {t.services.items.map((s) => <option key={s.t} value={s.t}>{s.t}</option>)}
                </select>
                {errs.type && <span className="mt-2 block text-xs text-destructive">{errs.type}</span>}
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{f.message}</span>
                <textarea rows={5} value={vals.message} onChange={set("message")} className={cn(field, "resize-none")} aria-invalid={!!errs.message} />
                {errs.message && <span className="mt-2 block text-xs text-destructive">{errs.message}</span>}
              </label>
              <button type="submit" className="group inline-flex w-fit items-center gap-3 bg-primary px-8 py-4 text-xs uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-accent">
                {f.send}
                <Icons.Arrow className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-ink text-on-dark">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <FooterLogo />
          <p className="mt-6 max-w-xs text-sm text-on-dark/60">{t.hero.sub}</p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.2em] text-brass">{t.footer.links}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {(["home", "projects", "services", "about", "contact"] as const).map((id) => (
              <li key={id}><a href={`#${id}`} className="link-underline text-on-dark/80">{t.nav[id]}</a></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-brass">{t.footer.reach}</p>
          {contact.phones.map((p) => (
            <a key={p.tel} href={`tel:${p.tel}`} dir="ltr" className="mt-4 block w-fit font-serif text-2xl">{p.display}</a>
          ))}
          <div className="mt-6 flex gap-3">
            <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center border border-on-dark/20 transition-colors hover:border-brass"><Icons.Instagram className="h-4 w-4" /></a>
            <a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center border border-on-dark/20 transition-colors hover:border-brass"><Icons.Facebook className="h-4 w-4" /></a>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center border border-on-dark/20 transition-colors hover:border-brass"><Icons.WhatsApp className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-on-dark/10">
        <p className="mx-auto max-w-[1440px] px-5 py-6 text-xs text-on-dark/50 md:px-10">© {new Date().getFullYear()} Nova Home. {t.footer.rights}</p>
      </div>
    </footer>
  );
}

import { Logo } from "./primitives";
function FooterLogo() {
  return <Logo />;
}
