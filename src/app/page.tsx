import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { About } from "@/components/sections/about";
import { PracticeAreas } from "@/components/sections/practice-areas";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Articles } from "@/components/sections/articles";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <MarqueeStrip />
        <About />
        <PracticeAreas />
        <HowItWorks />
        <Articles />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
