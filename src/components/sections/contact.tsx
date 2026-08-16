"use client";

import { useState, type FormEvent } from "react";
import { Clock, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/ui/reveal";
import {
  GOOGLE_MAPS_EMBED_SRC,
  GOOGLE_MAPS_LINK,
  SITE,
  WHATSAPP_LINK,
} from "@/lib/constants";

const fieldClass =
  "border-paper-border bg-white text-paper-foreground placeholder:text-paper-muted-foreground/70 focus-visible:border-paper-accent focus-visible:ring-paper-accent/30";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = [
      `Olá, ${SITE.greetingName}! Meu nome é ${form.name}.`,
      form.email && `E-mail: ${form.email}`,
      form.phone && `Telefone: ${form.phone}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="contato" className="bg-paper py-24 sm:py-32">
      <div className="container-luxury">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-medium tracking-[0.3em] text-paper-accent uppercase">
            Contato
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-paper-foreground sm:text-4xl">
            Vamos conversar sobre o seu caso
          </h2>
          <p className="mt-4 text-base leading-relaxed text-paper-muted-foreground">
            Preencha o formulário ou fale diretamente pelo WhatsApp.
            Retornaremos o mais breve possível.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal className="flex flex-col gap-8 lg:col-span-2">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-paper-accent/40 text-paper-accent">
                <MapPin size={18} strokeWidth={1.5} />
              </span>
              <div>
                <p className="font-serif text-base text-paper-foreground">Endereço</p>
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-paper-muted-foreground transition-colors hover:text-paper-accent"
                >
                  {SITE.address}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-paper-accent/40 text-paper-accent">
                <Phone size={18} strokeWidth={1.5} />
              </span>
              <div>
                <p className="font-serif text-base text-paper-foreground">Telefone / WhatsApp</p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-paper-muted-foreground transition-colors hover:text-paper-accent"
                >
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-paper-accent/40 text-paper-accent">
                <Clock size={18} strokeWidth={1.5} />
              </span>
              <div>
                <p className="font-serif text-base text-paper-foreground">Atendimento</p>
                <p className="text-sm text-paper-muted-foreground">{SITE.hours}</p>
              </div>
            </div>

            <div className="h-64 min-h-[220px] overflow-hidden rounded-lg border border-paper-border lg:h-full">
              <iframe
                title={`Localização do escritório ${SITE.name}`}
                src={GOOGLE_MAPS_EMBED_SRC}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-lg border border-paper-border bg-white p-6 shadow-sm sm:p-10"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="text-paper-foreground">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone" className="text-paper-foreground">Telefone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(18) 99999-9999"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-paper-foreground">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message" className="text-paper-foreground">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Conte brevemente sobre o seu caso"
                className={fieldClass}
              />
            </div>

            <Button type="submit" size="lg" className="mt-2 self-start rounded-full px-8">
              <Send size={16} />
              Enviar mensagem
            </Button>
            <p className="text-xs text-paper-muted-foreground">
              Ao enviar, sua mensagem será encaminhada via WhatsApp para o escritório.
            </p>
          </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
