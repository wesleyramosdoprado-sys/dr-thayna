import { SITE } from "@/lib/constants";
import { siteConfig } from "@/lib/site-config";

const ITEMS = [SITE.name, ...siteConfig.marquee, `Atendimento em ${SITE.city}`];

function MarqueeContent({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center gap-6 px-6">
          <span className="font-serif text-sm font-semibold tracking-[0.2em] whitespace-nowrap text-black uppercase">
            {item}
          </span>
          <span className="text-base leading-none text-paper-accent" aria-hidden>
            &#10022;
          </span>
        </span>
      ))}
    </div>
  );
}

export function MarqueeStrip() {
  return (
    <div className="overflow-hidden border-y border-paper-border bg-white py-4">
      <div className="flex w-max animate-marquee">
        <MarqueeContent />
        <MarqueeContent hidden />
      </div>
    </div>
  );
}
