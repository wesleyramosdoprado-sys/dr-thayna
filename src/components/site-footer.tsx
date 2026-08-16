import { MapPin, Phone } from "lucide-react";
import { SiteLogo } from "@/components/site-logo";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { NAV_LINKS, SITE, WHATSAPP_LINK } from "@/lib/constants";
import { siteConfig } from "@/lib/site-config";

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram", href: siteConfig.footer.social.instagram },
  { icon: FacebookIcon, label: "Facebook", href: siteConfig.footer.social.facebook },
  { icon: LinkedinIcon, label: "LinkedIn", href: siteConfig.footer.social.linkedin },
];

// Every practice area except the trailing "fale conosco" catch-all tile.
const PRACTICE_AREAS = siteConfig.practiceAreas.slice(0, -1).map((area) => area.title);

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <SiteLogo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.footer.tagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-serif text-base text-foreground">Links Rápidos</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-serif text-base text-foreground">Áreas de Atuação</p>
            <div className="flex flex-col gap-3">
              {PRACTICE_AREAS.map((area) => (
                <span key={area} className="text-sm text-muted-foreground">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-serif text-base text-foreground">Contato</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone size={16} className="mt-0.5 shrink-0" strokeWidth={1.5} />
              {SITE.phoneDisplay}
            </a>
            <span className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="mt-0.5 shrink-0" strokeWidth={1.5} />
              {SITE.address}
            </span>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-muted-foreground/70">
            &copy; {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground/70">
            {SITE.lawyer} &mdash; Inscrito na {SITE.oab}. Este site não garante
            resultados específicos em processos judiciais.
          </p>
        </div>
      </div>
    </footer>
  );
}
