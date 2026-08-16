import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SITE, buildWhatsAppLink } from "@/lib/constants";
import { siteConfig } from "@/lib/site-config";

export function Articles() {
  return (
    <section id="conteudos" className="bg-card py-24 sm:py-32">
      <div className="container-luxury">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium tracking-[0.3em] text-primary uppercase">
            Conteúdos
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Artigos e Orientações
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Direito explicado em linguagem acessível, para você entender seus
            direitos antes mesmo de precisar de um advogado.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.articles.map(({ icon: Icon, tag, title, excerpt }, i) => {
            const href = buildWhatsAppLink(
              `Olá, ${SITE.greetingName}! Li sobre "${title}" e gostaria de entender melhor como isso se aplica ao meu caso.`
            );
            return (
              <Reveal key={title} delay={i * 0.08}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col gap-4 rounded-lg border border-border bg-background p-8 transition-colors hover:border-primary/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-medium tracking-[0.2em] text-primary uppercase">
                    {tag}
                  </span>
                  <h3 className="font-serif text-lg leading-snug font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {excerpt}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-primary uppercase transition-transform group-hover:translate-x-1">
                    Falar sobre isso
                    <ArrowRight size={14} />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
