import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 116" className={className} aria-hidden="true" fill="currentColor">
      <path d="M6 32 20 22v66H6z" />
      <path d="M28 18 42 6v104l-14-10z" />
      <path d="M58 6l14 12v82l-14 10z" />
      <path d="M42 50h16v12H42z" />
      <path d="M80 22l14 10v56H80z" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)} dir="ltr">
      <Monogram className="h-9 w-8 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-[0.95rem] font-semibold tracking-[0.18em]">NOVA HOME</span>
        <span className="mt-1 text-[0.55rem] tracking-[0.42em] opacity-70">COMPANY</span>
      </span>
    </span>
  );
}

/** Adds .is-in once when the element scrolls into view. */
export function Reveal({
  as: Tag = "div",
  className,
  delay = 0,
  wipe = false,
  children,
  style,
}: {
  as?: ElementType;
  className?: string;
  delay?: number;
  wipe?: boolean;
  children: ReactNode;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={cn(wipe ? "wipe" : "reveal", inView && "is-in", className)}
      style={{ ...style, "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

export function Img({
  src,
  alt,
  w,
  h,
  className,
  eager,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  className?: string;
  eager?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      width={w}
      height={h}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      ref={(el) => {
        if (el?.complete) setLoaded(true);
      }}
      onLoad={() => setLoaded(true)}
      className={cn("fade-img block h-full w-full object-cover", loaded && "loaded", className)}
    />
  );
}

/** Vertical parallax (transform only), disabled for reduced motion / coarse pointers. */
export function useParallax<T extends HTMLElement>(speed = 0.1) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const offset = (r.top + r.height / 2 - innerHeight / 2) * -speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);
  return ref;
}

export function SectionHead({ title }: { title: string }) {
  return (
    <div className="border-b border-border pb-6">
      <Reveal as="h2" className="font-serif text-4xl uppercase leading-tight md:text-6xl">
        {title}
      </Reveal>
    </div>
  );
}

export const Icons = {
  Instagram: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={p.className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  ),
  Facebook: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={p.className} aria-hidden="true">
      <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />
    </svg>
  ),
  WhatsApp: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={p.className} aria-hidden="true">
      <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z" />
    </svg>
  ),
  Phone: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={p.className} aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />
    </svg>
  ),
  Arrow: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={cn("rtl:-scale-x-100", p.className)} aria-hidden="true">
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  ),
};
