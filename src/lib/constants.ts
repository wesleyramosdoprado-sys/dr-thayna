import { siteConfig } from "@/lib/site-config";

export const SITE = siteConfig.identity;

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGE = `Olá, ${SITE.greetingName}! Gostaria de agendar uma consulta com o escritório ${SITE.name}.`;

export const WHATSAPP_LINK = buildWhatsAppLink(WHATSAPP_MESSAGE);

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Áreas de Atuação", href: "#areas-de-atuacao" },
  { label: "Sobre", href: "#sobre" },
  { label: "Artigos", href: "#conteudos" },
  { label: "Contato", href: "#contato" },
];

export const GOOGLE_MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  SITE.address
)}&output=embed`;

export const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SITE.address
)}`;
