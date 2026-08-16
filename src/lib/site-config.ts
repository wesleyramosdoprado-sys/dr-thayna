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
  Stethoscope,
  Briefcase,
  HandCoins,
  Scale,
  ShieldCheck,
  MessageCircleQuestion,
  Clock,
  Target,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  identity: {
    /** Full legal/brand name, used in <title>, footer copyright, etc. */
    name: "Navarro Bomfim Advocacia",
    /** Short form used next to the logo icon in the header/footer. */
    shortName: "Navarro Bomfim",
    /** Full formal name of the lawyer. */
    lawyer: "Dr. Alexandre Navarro Bomfim",
    /** Short salutation used inside WhatsApp message templates. */
    greetingName: "Dr. Alexandre",
    oab: "OAB/SP",
    city: "Andradina - SP",
    address: "R. Paes Leme, 2345 - Stella Maris, Andradina - SP, 16901-110",
    phoneDisplay: "(18) 99656-9424",
    /** Digits only, with country code — used for wa.me links. */
    phoneRaw: "5518996569424",
    hours: "Segunda a sexta, 8h às 18h",
  },

  /** Swap these files in public/images/ — keep the same filenames. */
  images: {
    logoIcon: "/images/logo-icon-white.png",
    heroDesktop: "/images/hero-advogado.jpg",
    heroMobile: "/images/hero-advogado-mobile.jpg",
    about: "/images/advogado-laptop.jpg",
  },

  hero: {
    headline: "O laudo, o contrato e a negativa dizem mais do que parece.",
    subheadline:
      "Direito Médico, Empresarial e Recuperação de Crédito, conduzidos a partir da leitura técnica dos documentos.",
  },

  /** Taglines that scroll in the strip between the cover and "Sobre". */
  marquee: ["Rigor Técnico", "Discrição Absoluta"],

  about: {
    photoTag: "Especialista",
    photoCaption: "Direito Médico e Bioética pela PUC",
    heading: "Você pode confiar no Navarro Bomfim Advocacia",
    paragraph:
      "Dr. Alexandre Navarro Bomfim atua nas intersecções mais delicadas entre saúde e direito, onde a precisão técnica não é opcional — é o que garante o resultado. À frente do escritório, em Andradina - SP, combina proximidade real com cada cliente à solidez jurídica exigida pelas causas mais sensíveis, das questões de saúde aos negócios.",
    values: [
      { icon: Clock, label: "Atendimento Próximo" },
      { icon: Target, label: "Rigor Técnico" },
      { icon: ShieldCheck, label: "Discrição Absoluta" },
    ] as { icon: LucideIcon; label: string }[],
  },

  /** The last item (no href) becomes the "fale conosco" catch-all tile. */
  practiceAreas: [
    {
      icon: Stethoscope,
      title: "Direito Médico",
      description:
        "Negativas de plano de saúde, autorização de cirurgias e acesso a medicamentos de alto custo.",
    },
    {
      icon: Briefcase,
      title: "Direito Empresarial",
      description:
        "Contratos, governança e consultoria preventiva para proteger a operação do seu negócio.",
    },
    {
      icon: HandCoins,
      title: "Recuperação de Crédito",
      description:
        "Cobrança judicial e extrajudicial conduzida com estratégia, agilidade e firmeza.",
    },
    {
      icon: Scale,
      title: "Direito Cível",
      description:
        "Defesa técnica de direitos e interesses em litígios e questões contratuais.",
    },
    {
      icon: ShieldCheck,
      title: "Trabalhista e Previdenciário",
      description:
        "Orientação e representação em causas trabalhistas e concessão de benefícios do INSS.",
    },
    {
      icon: MessageCircleQuestion,
      title: "Não encontrou sua área?",
      description: "Fale diretamente com o escritório e conte o seu caso.",
    },
  ] as { icon: LucideIcon; title: string; description: string }[],

  articles: [
    {
      icon: Stethoscope,
      tag: "Direito Médico",
      title: "Plano de saúde negou seu tratamento? Veja o que fazer",
      excerpt:
        "Negativas indevidas podem ser revertidas judicialmente, muitas vezes em caráter de urgência.",
    },
    {
      icon: HandCoins,
      tag: "Recuperação de Crédito",
      title: "Como funciona a cobrança judicial de dívidas",
      excerpt:
        "Entenda as etapas, prazos e o que esperar ao levar uma cobrança para a Justiça.",
    },
    {
      icon: ShieldCheck,
      tag: "Trabalhista",
      title: "Direitos trabalhistas que todo funcionário deveria conhecer",
      excerpt:
        "Do aviso prévio ao FGTS: o que a lei garante e como identificar uma irregularidade.",
    },
  ] as { icon: LucideIcon; tag: string; title: string; excerpt: string }[],

  footer: {
    tagline: "Rigor técnico e soluções jurídicas estratégicas em Andradina - SP.",
    social: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
} as const;
