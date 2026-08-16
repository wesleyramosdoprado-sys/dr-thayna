import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { WHATSAPP_LINK } from "@/lib/constants";
import { siteConfig } from "@/lib/site-config";

export function PracticeAreas() {
  const areas = siteConfig.practiceAreas;
  const lastIndex = areas.length - 1;

  return (
    <section id="areas-de-atuacao" className="relative overflow-hidden bg-card py-24 sm:py-32">
      <div className="pointer-events-none absolute top-0 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-luxury relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium tracking-[0.3em] text-primary uppercase">
            Especialidades
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Áreas de Atuação
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Soluções jurídicas estratégicas, construídas com rigor técnico
            para cada área do direito em que atuamos.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map(({ icon: Icon, title, description }, i) => {
            const isCatchAll = i === lastIndex;
            return (
              <Reveal key={title} delay={i * 0.08} className="text-center sm:text-left">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 text-primary sm:mx-0">
                  <Icon size={24} strokeWidth={1.25} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
                {isCatchAll ? (
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-primary uppercase transition-colors hover:text-primary-hover"
                  >
                    Fale conosco
                    <ArrowRight size={14} />
                  </a>
                ) : (
                  <a
                    href="#contato"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-primary uppercase transition-colors hover:text-primary-hover"
                  >
                    Saiba mais
                    <ArrowRight size={14} />
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
