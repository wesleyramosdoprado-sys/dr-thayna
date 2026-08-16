"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLogo } from "@/components/site-logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, SITE, WHATSAPP_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-sm"
          : "border-b border-transparent bg-gradient-to-b from-background/80 to-transparent"
      )}
    >
      <div className="container-luxury flex h-20 items-center justify-between">
        <a href="#inicio" aria-label={SITE.name}>
          <SiteLogo />
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          nativeButton={false}
          render={
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" />
          }
          className="hidden rounded-full px-6 lg:inline-flex"
        >
          Agende uma Consulta
        </Button>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Abrir menu"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>

          <SheetContent side="right" className="w-full sm:max-w-xs">
            <SheetHeader>
              <SheetTitle className="font-serif text-lg">{SITE.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose
                  key={link.href}
                  render={<a href={link.href} />}
                  className="border-b border-border py-4 font-serif text-xl text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto p-4">
              <Button
                nativeButton={false}
                render={
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" />
                }
                className="w-full rounded-full"
              >
                Agende uma Consulta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
