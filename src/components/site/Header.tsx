import { useEffect, useState } from "react";
import { contact, dictionaries, type Lang } from "@/content";
import { cn } from "@/lib/utils";
import { useI18n } from "./i18n";
import { Logo } from "./primitives";

const ids = ["home", "projects", "services", "about", "contact"] as const;

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(scrollY > 40);
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, [open]);

  const solid = scrolled && !open;
  const LangSwitch = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center gap-1 text-xs", className)} role="group" aria-label="Language">
      {(Object.keys(dictionaries) as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          aria-label={dictionaries[l].name}
          className={cn(
            "min-w-8 px-2 py-1 transition-opacity duration-300",
            lang === l ? "opacity-100 underline decoration-brass underline-offset-4" : "opacity-55 hover:opacity-100",
          )}
        >
          {dictionaries[l].label}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-500",
          solid
            ? "border-b border-border bg-background/85 text-primary backdrop-blur-md"
            : "border-b border-transparent text-on-dark",
          open && "text-on-dark",
        )}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-6 px-5 md:px-10">
          <a href="#home" aria-label="Nova Home" className="shrink-0">
            <Logo />
          </a>
          <nav className="hidden items-center gap-8 text-sm lg:flex" aria-label="Main">
            {ids.map((id) => (
              <a key={id} href={`#${id}`} className="link-underline">
                {t.nav[id]}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <LangSwitch className="hidden sm:flex" />
            <a
              href={`tel:${contact.phones[0].tel}`}
              className={cn(
                "hidden border px-5 py-2.5 text-xs uppercase tracking-[0.16em] transition-colors duration-300 md:inline-block",
                solid ? "border-primary hover:bg-primary hover:text-primary-foreground" : "border-on-dark/60 hover:bg-on-dark hover:text-ink",
              )}
            >
              {t.nav.call}
            </a>
            <button
              className="relative h-10 w-10 lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? t.nav.close : t.nav.menu}
            >
              <span className={cn("absolute inset-x-2 top-[15px] h-px bg-current transition-transform duration-500", open && "translate-y-[5px] rotate-45")} />
              <span className={cn("absolute inset-x-2 top-[25px] h-px bg-current transition-transform duration-500", open && "-translate-y-[5px] -rotate-45")} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-between bg-primary px-6 pb-10 pt-28 text-primary-foreground transition-transform duration-700 lg:hidden",
          open ? "translate-x-0" : "translate-x-full rtl:-translate-x-full",
        )}
        style={{ transitionTimingFunction: "var(--ease-out)" }}
        aria-hidden={!open}
        inert={!open}
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {ids.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-5 border-b border-primary-foreground/15 py-4 font-serif text-4xl"
            >
              <span className="font-sans text-xs text-brass">0{i + 1}</span>
              {t.nav[id]}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-between">
          <LangSwitch />
          <a href={`tel:${contact.phones[0].tel}`} className="border border-primary-foreground/40 px-5 py-3 text-xs uppercase tracking-[0.16em]">
            {t.nav.call}
          </a>
        </div>
      </div>
    </>
  );
}
