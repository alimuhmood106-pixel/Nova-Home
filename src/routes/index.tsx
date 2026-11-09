import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { I18nProvider } from "@/components/site/i18n";
import { Monogram } from "@/components/site/primitives";
import { About, Contact, Footer, Hero, Projects, Services } from "@/components/site/Sections";

const title = "Nova Home | Interior Design & Custom Joinery in Sulaymaniyah";
const description =
  "Nova Home designs, builds and installs custom kitchens, wardrobes, TV walls, bedrooms and full interiors in Sulaymaniyah, Iraq.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div aria-hidden="true" className="intro pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-background text-primary">
        <Monogram className="intro-logo h-20 w-16" />
      </div>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
