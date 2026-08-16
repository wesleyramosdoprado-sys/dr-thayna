import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE, WHATSAPP_LINK } from "@/lib/constants";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background">
      {/* Phones (<640px): photo on top, fading into the background, content stacked and centered below */}
      <div className="sm:hidden">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={siteConfig.images.heroMobile}
            alt={`${SITE.lawyer} em seu escritório`}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        <div className="relative -mt-20 flex flex-col items-center gap-3 px-6 pt-1 pb-10 text-center">
          <Badge variant="outline" className="border-primary/40 text-primary uppercase">
            {SITE.oab} &middot; {SITE.city}
          </Badge>

          <h1 className="text-balance font-serif text-[26px] leading-[1.2] font-semibold text-foreground">
            {siteConfig.hero.headline}
          </h1>

          <p className="max-w-[36ch] text-sm leading-relaxed text-muted-foreground">
            {siteConfig.hero.subheadline}
          </p>

          <Button
            size="lg"
            className="mt-2 w-full rounded-full"
            nativeButton={false}
            render={<a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" />}
          >
            Fale com o Advogado
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>

      {/* Tablet and up: unchanged — full-bleed photo with a solid text panel */}
      <div className="relative hidden sm:flex sm:min-h-[760px] sm:items-end sm:pt-28">
        <Image
          src={siteConfig.images.heroDesktop}
          alt={`${SITE.lawyer} em seu escritório`}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />

        {/* Solid panel on the left so the headline always sits on a flat, readable surface */}
        <div className="absolute inset-y-0 left-0 w-[50%] bg-background" />
        {/* Soft seam between the solid panel and the photo */}
        <div className="absolute inset-y-0 left-[50%] w-[14%] bg-gradient-to-r from-background to-transparent" />
        {/* Bottom fade so text never sits directly on a hard image edge */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="container-luxury relative w-full pb-16 sm:pb-24">
          <div className="max-w-md sm:max-w-lg">
            <Badge variant="outline" className="border-primary/40 text-primary uppercase">
              {SITE.oab} &middot; {SITE.city}
            </Badge>

            <h1 className="mt-8 min-w-[20ch] text-balance text-[clamp(36px,4.4vw,64px)] leading-[1.15] font-serif font-semibold text-foreground">
              {siteConfig.hero.headline}
            </h1>

            <p className="mt-8 max-w-[42ch] text-[clamp(16px,1.35vw,19px)] leading-relaxed text-muted-foreground">
              {siteConfig.hero.subheadline}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full px-8"
                nativeButton={false}
                render={<a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" />}
              >
                Fale com o Advogado
                <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-foreground/20 px-8"
                nativeButton={false}
                render={<a href="#areas-de-atuacao" />}
              >
                Áreas de Atuação
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
