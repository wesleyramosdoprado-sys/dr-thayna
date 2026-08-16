import Image from "next/image";
import { SITE } from "@/lib/constants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteLogo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Image
        src={siteConfig.images.logoIcon}
        alt=""
        width={454}
        height={445}
        priority
        className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
      />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg font-semibold tracking-wide text-foreground sm:text-xl">
          {SITE.shortName}
        </span>
        <span className="text-[10px] font-medium tracking-[0.3em] text-primary uppercase">
          Advocacia
        </span>
      </span>
    </span>
  );
}
