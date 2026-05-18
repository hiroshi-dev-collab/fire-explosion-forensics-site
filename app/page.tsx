import Image from "next/image";
import {
  Flame,
  Wrench,
  Leaf,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Microscope,
  FileText,
  Search,
  MessageCircle,
  Award,
  Building2,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ContactForm } from "@/components/contact-form";

const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#credenciais", label: "Credenciais" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contato", label: "Contato" },
];

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-end overflow-hidden surface-navy"
    >
      <Image
        src="/hero-fire-investigation.jpg"
        alt="Investigador forense documentando cena de incêndio em estrutura industrial"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy/60 to-navy/95" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pb-20 lg:pb-28 pt-32 w-full">
        <div className="max-w-4xl fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-flame" />
            <span className="font-mono-tag text-flame">
              Perícia de Engenharia · Atuação Nacional
            </span>
          </div>
          <h1 className="text-white font-display font-semibold text-[40px] sm:text-[56px] lg:text-[76px] leading-[0.98] tracking-[-0.035em]">
            Perícias de incêndio, explosão e acidentes com{" "}
            <span className="text-flame">rigor técnico</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-white/72 text-[17px] lg:text-[19px] leading-[1.65]">
            Investigação independente para seguradoras, escritórios jurídicos e
            grandes corporações. Laudos técnicos com fundamentação rigorosa e
            validação internacional.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 h-12 px-6 bg-flame text-white text-[14px] font-medium rounded-sm hover:brightness-110 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Solicitar Perícia <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#credenciais"
              className="inline-flex items-center gap-2 h-12 px-6 border border-white/40 text-white text-[14px] font-medium rounded-sm hover:bg-white hover:text-ink transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
            >
              Conheça nossas credenciais
            </a>
          </div>
        </div>
        <div className="mt-16 lg:mt-24 pt-6 hairline-dark flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="font-mono-tag text-white/45">Credenciados</span>
          {["IAAI (FIT)", "CREA", "IBAPE", "ABRELPS", "ENS"].map((c) => (
            <span
              key={c}
              className="text-[13px] text-white/75 font-medium tracking-wide"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorityStrip() {
  const items = [
    { n: "+15", l: "anos de atuação técnica" },
    { n: "100%", l: "do território nacional" },
    { n: "IAAI", l: "certificação internacional" },
    { n: "3", l: "esferas: judicial, administrativa e securitária" },
  ];
  return (
    <section className="bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-20 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((i) => (
          <div key={i.l}>
            <div className="font-display font-semibold text-flame text-[44px] lg:text-[56px] leading-none tracking-tight">
              {i.n}
            </div>
            <div className="mt-3 text-[13.5px] text-ink-muted leading-snug max-w-[220px]">
              {i.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FireService() {
  const bullets = [
    "Determinação de causa, origem e propagação",
    "Identificação do agente ignitor",
    "Análise de responsabilidade técnica",
    "Reconstrução do evento e linha do tempo",
    "Análise de sistemas de proteção e prevenção",
    "Suporte a processos judiciais e securitários",
  ];
  return (
    <section id="areas" className="surface-navy relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, oklch(0.70 0.17 45 / 0.7), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-6">
            <Flame className="w-4 h-4 text-flame" />
            <span className="font-mono-tag text-flame">
              Especialidade Principal
            </span>
          </div>
          <h2 className="text-white font-display font-semibold text-[36px] lg:text-[54px] leading-[1.02] tracking-[-0.03em]">
            Perícias de Incêndio e Explosão
          </h2>
          <p className="mt-6 text-white/70 text-[16.5px] leading-[1.7] max-w-2xl">
            Atuamos na investigação técnica de sinistros de incêndio e
            explosões em ambientes industriais, comerciais, residenciais e
            patrimoniais. Nossa metodologia segue padrões reconhecidos
            internacionalmente (NFPA 921 / 1033), garantindo laudos com
            fundamentação científica e validade processual.
          </p>
          <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-[14.5px] text-white/85"
              >
                <span className="mt-[10px] w-1.5 h-1.5 bg-flame shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/fire-forensics-detail.jpg"
              alt="Perito documentando danos em painel elétrico após incêndio"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover grayscale-[35%] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-flame text-white px-5 py-3 font-mono-tag">
            NFPA 921 · NFPA 1033
          </div>
        </div>
      </div>
    </section>
  );
}

function SecondaryServices() {
  const cards = [
    {
      icon: Wrench,
      title: "Investigação de Acidentes e Incidentes",
      body:
        "Análise técnica de acidentes industriais, falhas de equipamento, incidentes de trabalho e eventos catastróficos. Investigação de causa-raiz com fundamentação em normas técnicas brasileiras e internacionais.",
      tag: "INDUSTRIAL · EQUIPAMENTOS · TRABALHO",
    },
    {
      icon: Leaf,
      title: "Perícia Ambiental",
      body:
        "Avaliação de contaminação de solo e água, danos ambientais, conformidade com legislação ambiental e suporte técnico em passivos ambientais para empresas e órgãos públicos.",
      tag: "CONTAMINAÇÃO · DANOS · COMPLIANCE",
    },
  ];
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-2xl mb-14">
          <span className="font-mono-tag text-flame">Áreas complementares</span>
          <h2 className="mt-4 font-display font-semibold text-ink text-[32px] lg:text-[44px] leading-[1.05] tracking-tight">
            Outras frentes de atuação técnica
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group bg-white border border-border p-8 lg:p-10 transition-all hover:border-flame hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="grid place-items-center w-11 h-11 border border-border group-hover:border-flame transition-colors">
                  <c.icon
                    className="w-5 h-5 text-ink group-hover:text-flame transition-colors"
                    strokeWidth={1.6}
                  />
                </span>
                <span className="font-mono-tag text-ink-muted">{c.tag}</span>
              </div>
              <h3 className="font-display font-semibold text-ink text-[24px] lg:text-[28px] leading-tight tracking-tight">
                {c.title}
              </h3>
              <p className="mt-5 text-ink-muted text-[15px] leading-[1.7]">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Methodology() {
  const steps = [
    {
      icon: Phone,
      title: "Acionamento e análise preliminar",
      body: "Triagem do caso, alinhamento de escopo e mobilização imediata de equipe especializada.",
    },
    {
      icon: Search,
      title: "Investigação técnica no local",
      body: "Vistoria, coleta de evidências, documentação fotográfica e ensaios de campo conforme protocolo.",
    },
    {
      icon: Microscope,
      title: "Análise laboratorial e documental",
      body: "Exames técnicos, análise de projetos, registros e cruzamento de informações periciais.",
    },
    {
      icon: FileText,
      title: "Laudo técnico fundamentado",
      body: "Emissão de laudo com conclusão técnica clara, defensável judicial e securitariamente.",
    },
  ];
  return (
    <section id="metodologia" className="surface-navy-deep">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-2xl mb-16">
          <span className="font-mono-tag text-flame">Metodologia</span>
          <h2 className="mt-4 font-display font-semibold text-white text-[32px] lg:text-[44px] leading-[1.05] tracking-tight">
            Um processo rigoroso, do acionamento ao laudo.
          </h2>
        </div>
        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          <div
            aria-hidden
            className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-px bg-flame/40"
          />
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="flex items-center gap-4 mb-6">
                <span className="relative z-10 grid place-items-center w-14 h-14 bg-navy border border-flame/40 text-flame font-mono-tag text-[12px]">
                  0{i + 1}
                </span>
                <s.icon className="w-5 h-5 text-white/50" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-display font-semibold text-[18px] leading-snug tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-white/60 text-[14px] leading-[1.65]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrazilMap() {
  const dots: [number, number, number][] = [
    [50, 8, 0.5], [55, 12, 0.6], [60, 16, 0.7], [65, 20, 0.7], [70, 24, 0.6],
    [45, 14, 0.6], [50, 18, 0.7], [55, 22, 0.8], [60, 26, 0.8], [65, 30, 0.8], [70, 34, 0.7], [75, 38, 0.6],
    [40, 22, 0.6], [45, 26, 0.8], [50, 30, 0.9], [55, 34, 1.0], [60, 38, 1.0], [65, 42, 0.9], [70, 46, 0.7], [78, 44, 0.5],
    [38, 30, 0.6], [43, 34, 0.8], [48, 38, 1.0], [53, 42, 1.0], [58, 46, 1.0], [63, 50, 0.9], [68, 54, 0.7],
    [40, 40, 0.7], [45, 44, 0.9], [50, 48, 1.0], [55, 52, 1.0], [60, 56, 0.9], [65, 60, 0.7],
    [42, 50, 0.8], [47, 54, 1.0], [52, 58, 1.0], [57, 62, 0.9], [62, 66, 0.7],
    [44, 60, 0.7], [49, 64, 0.9], [54, 68, 0.9], [59, 72, 0.7],
    [46, 70, 0.7], [51, 74, 0.8], [56, 78, 0.7],
    [48, 80, 0.7], [53, 84, 0.6],
    [50, 88, 0.5],
  ];
  const highlights: [number, number, string][] = [
    [55, 36, "São Paulo"],
    [62, 32, "Rio de Janeiro"],
    [50, 28, "Brasília"],
    [48, 60, "Porto Alegre"],
    [70, 22, "Salvador"],
    [55, 14, "Manaus"],
  ];
  return (
    <div className="relative aspect-square w-full max-w-[520px] ml-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {dots.map(([x, y, i], idx) => (
          <circle
            key={idx}
            cx={x}
            cy={y}
            r={0.9}
            fill="oklch(0.21 0.04 260)"
            opacity={i * 0.55}
          />
        ))}
        {highlights.map(([x, y, name]) => (
          <g key={name}>
            <circle cx={x} cy={y} r={1.4} fill="oklch(0.70 0.17 45)" />
            <circle
              cx={x}
              cy={y}
              r={3}
              fill="oklch(0.70 0.17 45)"
              opacity={0.18}
            />
          </g>
        ))}
      </svg>
      <div className="absolute bottom-0 right-0 font-mono-tag text-ink-muted">
        Brasil · 26 estados + DF
      </div>
    </div>
  );
}

function Coverage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-mono-tag text-flame">Cobertura</span>
          <h2 className="mt-4 font-display font-semibold text-ink text-[32px] lg:text-[44px] leading-[1.05] tracking-tight">
            Atuação em todo o território nacional.
          </h2>
          <p className="mt-6 text-ink-muted text-[16px] leading-[1.7] max-w-xl">
            Estrutura logística preparada para mobilização ágil em qualquer
            região do Brasil. Atendemos seguradoras, escritórios jurídicos e
            corporações com tempo de resposta crítico, mantendo o mesmo padrão
            técnico em capitais e localidades remotas.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
            <div className="border-t border-flame pt-3">
              <div className="font-display font-semibold text-ink text-[24px]">
                24h
              </div>
              <div className="text-[12.5px] text-ink-muted mt-1">
                tempo médio de mobilização
              </div>
            </div>
            <div className="border-t border-border pt-3">
              <div className="font-display font-semibold text-ink text-[24px]">
                5 regiões
              </div>
              <div className="text-[12.5px] text-ink-muted mt-1">
                cobertura simultânea
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <BrazilMap />
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  const certs = [
    { name: "IAAI (FIT)", href: "https://www.firearson.com/credentials/iaai-fit/" },
    { name: "ENS", href: "https://www.ens.edu.br/" },
    { name: "CREA", href: "https://www.crea-rj.org.br/" },
    { name: "IBAPE-RJ", href: "https://ibape-rj.org.br/" },
  ];
  const affiliations = [
    { name: "CREA (Pessoa Jurídica)", href: "https://www.crea-rj.org.br/" },
    { name: "ABRELPS", href: "https://abrelps.org.br/" },
  ];
  return (
    <section id="credenciais" className="ember-glow">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <ShieldCheck className="w-4 h-4 text-flame" />
            <span className="font-mono-tag text-flame">Trust Core</span>
          </div>
          <h2 className="font-display font-semibold text-white text-[32px] lg:text-[48px] leading-[1.05] tracking-[-0.03em]">
            Credenciais e Filiações
          </h2>
          <p className="mt-5 text-white/65 text-[16px] leading-[1.7]">
            Validação técnica reconhecida no Brasil e no exterior. Nossos
            profissionais e a sociedade mantêm vínculos ativos com as
            principais entidades técnicas do setor.
          </p>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <Award className="w-4 h-4 text-white/60" />
            <h3 className="font-mono-tag text-white/60">
              Certificações dos Profissionais
            </h3>
            <span className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {certs.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-navy hover:bg-navy-deep p-8 lg:p-10 flex flex-col items-center justify-center gap-3 min-h-[140px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
              >
                <span className="font-display font-semibold text-white/85 group-hover:text-flame transition-colors text-[18px] tracking-tight">
                  {c.name}
                </span>
                <span className="font-mono-tag text-white/40 group-hover:text-white/70 transition-colors">
                  Visitar →
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="flex items-center gap-4 mb-8">
            <Building2 className="w-4 h-4 text-white/60" />
            <h3 className="font-mono-tag text-white/60">
              Filiações Institucionais
            </h3>
            <span className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {affiliations.map((a) => (
              <a
                key={a.name}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-navy hover:bg-navy-deep p-8 flex items-center justify-between transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
              >
                <span className="font-display font-semibold text-white/85 group-hover:text-flame transition-colors text-[17px]">
                  {a.name}
                </span>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-flame transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const clients = [
    "AMBEV", "Cosan", "Copersucar", "EMS", "Rede D'Or", "Positivo",
    "Record", "FTI Consulting", "Bradesco", "Porto Seguro", "SulAmérica",
    "Tokio Marine", "Allianz", "Mapfre", "Zurich", "Liberty",
    "Suzano", "Vale", "Petrobras",
  ];
  return (
    <section id="clientes" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono-tag text-flame">Confiança</span>
            <h2 className="mt-4 font-display font-semibold text-ink text-[32px] lg:text-[44px] leading-[1.05] tracking-tight">
              Empresas que confiaram em nossa atuação.
            </h2>
          </div>
          <p className="text-[12.5px] text-ink-muted max-w-xs">
            Empresas atendidas em casos pontuais. Marcas pertencem aos
            respectivos titulares.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-border">
          {clients.map((c) => (
            <div
              key={c}
              className="bg-white aspect-[5/3] grid place-items-center group cursor-default"
            >
              <span className="font-display font-semibold text-ink-muted/80 text-[15px] tracking-tight group-hover:text-flame transition-colors">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <span className="font-mono-tag text-flame">Sobre a Lauden</span>
          <h2 className="mt-4 font-display font-semibold text-ink text-[32px] lg:text-[48px] leading-[1.04] tracking-[-0.03em]">
            Engenharia forense conduzida com independência técnica.
          </h2>
          <p className="mt-7 text-ink-muted text-[16.5px] leading-[1.75] max-w-2xl">
            A Lauden Experts foi constituída para atender uma demanda
            específica do mercado brasileiro: perícias técnicas conduzidas com
            o mesmo rigor metodológico das principais consultorias forenses
            internacionais. Nosso compromisso é com a verdade técnica — e
            apenas com ela.
          </p>
          <p className="mt-4 text-ink-muted text-[16.5px] leading-[1.75] max-w-2xl">
            Trabalhamos com transparência absoluta sobre nossas conclusões,
            metodologia auditável e respeito integral aos prazos críticos dos
            nossos clientes.
          </p>
        </div>
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/team-about.jpg"
              alt="Equipe técnica da Lauden analisando documentação em campo"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover grayscale-[30%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contato" className="ember-glow relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <span className="font-mono-tag text-flame">Contato</span>
          <h2 className="mt-4 font-display font-semibold text-white text-[34px] lg:text-[48px] leading-[1.04] tracking-[-0.03em]">
            Precisa de uma perícia técnica?
          </h2>
          <p className="mt-6 text-white/70 text-[16px] leading-[1.7] max-w-md">
            Atendimento confidencial para seguradoras, escritórios jurídicos e
            empresas. Resposta em até 24 horas úteis.
          </p>
          <div className="mt-10 space-y-5 text-[14.5px] text-white/80">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-flame mt-1 shrink-0" />
              <span>Rio de Janeiro · RJ · Brasil</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-flame mt-1 shrink-0" />
              <span>+55 (21) 0000-0000</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-flame mt-1 shrink-0" />
              <span>contato@laudenexperts.com.br</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="surface-navy-deep border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <a
            href="#top"
            className="flex items-center gap-2.5 group transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame"
          >
            <span className="relative grid place-items-center w-9 h-9 rounded-sm bg-flame">
              <Flame className="w-5 h-5 text-white" strokeWidth={2.2} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display font-semibold text-[17px] tracking-tight text-white">
                Lauden <span className="text-flame">Experts</span>
              </span>
              <span className="font-mono-tag mt-1 text-white/55">
                Engenharia Forense
              </span>
            </span>
          </a>
          <p className="mt-5 text-white/55 text-[13.5px] leading-[1.7] max-w-xs">
            Perícia de engenharia independente. Investigação de incêndio,
            explosão, acidentes e perícia ambiental.
          </p>
        </div>
        <div>
          <h4 className="font-mono-tag text-white/40 mb-5">Navegação</h4>
          <ul className="space-y-3">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-white/75 hover:text-flame text-[13.5px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-mono-tag text-white/40 mb-5">Contato</h4>
          <ul className="space-y-3 text-[13.5px] text-white/75">
            <li>Rio de Janeiro · RJ</li>
            <li>+55 (21) 0000-0000</li>
            <li>contato@laudenexperts.com.br</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-white/45">
          <span>
            CNPJ 00.000.000/0001-00 · © {new Date().getFullYear()} Lauden Experts
          </span>
          <a
            href="#"
            className="hover:text-flame transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
          >
            Política de Privacidade (LGPD)
          </a>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5521000000000"
      aria-label="WhatsApp"
      className="lg:hidden fixed bottom-5 right-5 z-40 grid place-items-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-2xl transition-all hover:bg-emerald-600 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <AuthorityStrip />
        <FireService />
        <SecondaryServices />
        <Methodology />
        <Coverage />
        <Credentials />
        <Clients />
        <About />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
