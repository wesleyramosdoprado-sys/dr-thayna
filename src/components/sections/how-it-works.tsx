import { CalendarCheck, MessageCircle, ScrollText, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { WHATSAPP_LINK } from "@/lib/constants";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Contato inicial",
    description: "Você fala com o escritório pelo WhatsApp ou formulário e conta, em poucas palavras, o que está acontecendo.",
  },
  {
    icon: Search,
    title: "Análise do caso",
    description: "O Dr. Alexandre avalia os documentos e o contexto com rigor técnico, sem respostas prontas ou genéricas.",
  },
  {
    icon: ScrollText,
    title: "Estratégia clara",
    description: "Você recebe um caminho jurídico objetivo, com prazos e possibilidades reais explicados sem juridiquês.",
  },
  {
    icon: CalendarCheck,
    title: "Acompanhamento até o fim",
    description: "Contato direto em cada etapa do processo, até a resolução do seu caso.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="container-luxury">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium tracking-[0.3em] text-paper-accent uppercase">
            Atendimento
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-paper-foreground sm:text-4xl">
            Como funciona
          </h2>
          <p className="mt-4 text-base leading-relaxed text-paper-muted-foreground">
            Um processo direto, pensado para quem precisa de respostas
            claras &mdash; não de mais burocracia.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.08} className="relative flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-paper-foreground text-paper">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <span className="font-serif text-2xl text-paper-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-paper-foreground">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-paper-muted-foreground">
                {description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center">
          <Button
            size="lg"
            className="rounded-full px-8"
            nativeButton={false}
            render={<a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" />}
          >
            Iniciar meu atendimento
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
