/**
 * Everything that changes from one law-firm client to the next lives here.
 * To spin up a new client site: edit this file, swap the images listed in
 * `images` below (same filenames, new content), then deploy.
 *
 * Structural/UI copy (section eyebrows, generic button labels, the 4-step
 * "como funciona" narrative) is intentionally left in the components —
 * it doesn't change per client. Only genuinely client-specific content
 * lives in this file.
 */
import {
  Car,
  Landmark,
  HandCoins,
  ShieldCheck,
  MessageCircleQuestion,
  Clock,
  FileSearch,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  identity: {
    /** Full legal/brand name, used in <title>, footer copyright, etc. */
    name: "Tainá Lopes Gonçalves Advocacia",
    /** Short form used next to the logo icon in the header/footer. */
    shortName: "Tainá Lopes",
    /** Full formal name of the lawyer. */
    lawyer: "Dra. Tainá Lopes Gonçalves",
    /** Short salutation used inside WhatsApp message templates. */
    greetingName: "Dra. Tainá",
    oab: "OAB/SP",
    city: "Andradina - SP",
    address: "R. Dr. Orensy Rodrigues da Silva, 1193 - Centro, Andradina - SP, 16901-016",
    phoneDisplay: "(18) 99644-9707",
    /** Digits only, with country code — used for wa.me links. */
    phoneRaw: "5518996449707",
    // TODO: confirm real business hours with the client.
    hours: "Segunda a sexta, 8h às 18h",
  },

  /** Swap these files in public/images/ — keep the same filenames. */
  images: {
    logoIcon: "/images/logo-icon-white.png",
    heroDesktop: "/images/hero-taina.jpg",
    heroMobile: "/images/hero-taina-mobile.jpg",
    about: "/images/about-taina.jpg",
  },

  hero: {
    headline: "Seu carro foi apreendido e o banco não resolve? Existe caminho.",
    subheadline:
      "Direito Bancário e Busca e Apreensão de Veículos, conduzidos com estratégia para reverter contratos e recuperar o que é seu.",
  },

  /** Taglines that scroll in the strip between the cover and "Sobre". */
  marquee: ["Direito Bancário", "Busca e Apreensão de Veículos"],

  about: {
    photoTag: "Especialista",
    photoCaption: "Direito Bancário e Busca e Apreensão de Veículos",
    heading: "Você pode confiar na Tainá Lopes Gonçalves Advocacia",
    paragraph:
      "Advogada especialista em Direito Bancário e Busca e Apreensão de Veículos, Dra. Tainá Lopes Gonçalves atua na defesa de quem teve o carro apreendido ou enfrenta cobranças abusivas de bancos e financeiras. Em Andradina - SP, conduz cada caso revisando contratos e identificando irregularidades que muitas vezes o cliente nem sabia que existiam.",
    values: [
      { icon: Clock, label: "Atendimento Rápido" },
      { icon: FileSearch, label: "Análise de Contratos" },
      { icon: ShieldCheck, label: "Defesa do Consumidor" },
    ] as { icon: LucideIcon; label: string }[],
  },

  /** The last item (no href) becomes the "fale conosco" catch-all tile. */
  practiceAreas: [
    {
      icon: Car,
      title: "Busca e Apreensão de Veículos",
      description:
        "Defesa e reversão de busca e apreensão de veículos financiados, com estratégia para recuperar o bem apreendido.",
    },
    {
      icon: Landmark,
      title: "Direito Bancário",
      description:
        "Revisão de contratos de financiamento, identificação de tarifas abusivas e cláusulas ilegais.",
    },
    {
      icon: HandCoins,
      title: "Renegociação de Dívidas",
      description:
        "Negociação estratégica com bancos e financeiras para reduzir parcelas e encerrar dívidas em aberto.",
    },
    {
      icon: ShieldCheck,
      title: "Direito do Consumidor",
      description:
        "Defesa contra cobranças indevidas, negativação irregular e abusos de instituições financeiras.",
    },
    {
      icon: MessageCircleQuestion,
      title: "Não encontrou sua área?",
      description: "Fale diretamente com o escritório e conte o seu caso.",
    },
  ] as { icon: LucideIcon; title: string; description: string }[],

  articles: [
    {
      icon: Landmark,
      tag: "Direito Bancário",
      title: "5 coisas que o banco torce para você nunca saber",
      excerpt:
        "CET, seguro prestamista, tarifas, juros e cláusulas de vencimento antecipado: onde os contratos escondem custo.",
    },
    {
      icon: Car,
      tag: "Busca e Apreensão",
      title: "Seu carro foi apreendido pelo banco? Veja o que fazer",
      excerpt:
        "Existem caminhos para reverter a apreensão e recuperar o veículo, muitas vezes em caráter de urgência.",
    },
    {
      icon: HandCoins,
      tag: "Renegociação de Dívidas",
      title: "Seu cartão virou uma bola de neve? Faça isso agora",
      excerpt:
        "Antes de ignorar a dívida ou aceitar a primeira proposta do banco, entenda suas opções reais.",
    },
  ] as { icon: LucideIcon; tag: string; title: string; excerpt: string }[],

  footer: {
    tagline: "Defesa técnica em Direito Bancário e Busca e Apreensão de Veículos em Andradina - SP.",
    social: {
      instagram: "https://instagram.com/advtainalopes.goncalves",
      facebook: "#",
      linkedin: "#",
    },
  },
} as const;
