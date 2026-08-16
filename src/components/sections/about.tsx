import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SITE, WHATSAPP_LINK } from "@/lib/constants";
import { siteConfig } from "@/lib/site-config";

export function About() {
  return (
    <section id="sobre" className="bg-paper py-24 sm:py-32">
      <Reveal className="container-luxury grid grid-cols-1 items-stretch gap-0 overflow-hidden rounded-lg lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-0">
          <Image
            src={siteConfig.images.about}
            alt={`${SITE.lawyer} em seu escritório`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8">
            <span className="text-xs font-medium tracking-[0.3em] text-primary uppercase">
              {siteConfig.about.photoTag}
            </span>
            <p className="mt-2 max-w-xs font-serif text-xl leading-snug font-semibold text-white">
              {siteConfig.about.photoCaption}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 bg-paper p-10 sm:p-14">
          <span className="text-xs font-medium tracking-[0.3em] text-paper-accent uppercase">
            Sobre o Escritório
          </span>
          <h2 className="text-balance font-serif text-3xl font-semibold text-paper-foreground sm:text-4xl">
            {siteConfig.about.heading}
          </h2>
          <p className="text-base leading-relaxed text-paper-muted-foreground">
            {siteConfig.about.paragraph}
          </p>

          <div className="grid grid-cols-3 gap-4 border-y border-paper-border py-6">
            {siteConfig.about.values.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
                <Icon className="text-paper-accent" size={22} strokeWidth={1.5} />
                <span className="text-xs leading-tight font-medium text-paper-foreground sm:text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="w-fit rounded-full px-8"
            nativeButton={false}
            render={<a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" />}
          >
            Pedir Consulta
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
