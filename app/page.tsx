import fs from "fs";
import path from "path";
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
        alt="Perito documentando cena de incêndio em estrutura industrial"
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
              Perícia de Engenharia · Rio de Janeiro e Todo o Brasil
            </span>
          </div>
          <h1 className="text-white font-display font-semibold text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.02] tracking-[-0.035em]">
            Perícias de incêndios e explosões, acidentes e meio ambiente com{" "}
            <span className="text-flame">rigor técnico e respaldo normativo</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-white/72 text-[17px] lg:text-[19px] leading-[1.65]">
            Assistência técnica e perícia de engenharia para seguradoras,
            escritórios de advocacia e empresas. Laudos fundamentados na
            NFPA 921, nas normas da ABNT e em protocolos internacionalmente
            reconhecidos.
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
        <div className="mt-16 lg:mt-24 pt-6 hairline-dark">
          <span className="font-mono-tag text-white/45 block mb-5">
            Certificações e Associações
          </span>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
            {[
              { name: "IAAI", src: "/credentials/iaai.png", href: "https://www.firearson.com/", h: "h-14", chip: false },
              { name: "ENS", src: "/credentials/ens.svg", href: "https://www.ens.edu.br/", h: "h-8", chip: false },
              { name: "CREA-RJ", src: "/credentials/crea-rj.png", href: "https://www.crea-rj.org.br/", h: "h-9", chip: true },
              { name: "IBAPE", src: "/credentials/ibape.png", href: "https://ibape-rj.org.br/", h: "h-9", chip: true },
              { name: "ABRELPS", src: "/credentials/abrelps.png", href: "https://abrelps.org.br/", h: "h-7", chip: false },
            ].map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                title={c.name}
                aria-label={`Visitar ${c.name}`}
                className="relative shrink-0 opacity-90 hover:opacity-100 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame"
              >
                {c.chip ? (
                  <div className="bg-white/85 backdrop-blur-sm rounded-sm px-3 py-1.5 flex items-center">
                    <Image
                      src={c.src}
                      alt={`Logo ${c.name}`}
                      width={160}
                      height={56}
                      className={`${c.h} w-auto object-contain`}
                    />
                  </div>
                ) : (
                  <Image
                    src={c.src}
                    alt={`Logo ${c.name}`}
                    width={160}
                    height={56}
                    className={`${c.h} w-auto object-contain`}
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthorityStrip() {
  const items = [
    { n: "+10", l: "anos de atuação técnica" },
    { n: "100%", l: "do território nacional" },
    { n: "IAAI (FIT)", l: "certificação internacional em investigação de incêndios" },
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
    "Determinação de causa, origem e dinâmica de propagação",
    "Identificação dos fatores contribuintes",
    "Avaliação das medidas de segurança contra incêndio e pânico",
    "Proposição de recomendações de segurança",
    "Assistência técnica a processos judiciais, arbitrais e de seguros (regulação de sinistros)",
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
              01 / Especialidade Principal
            </span>
          </div>
          <h2 className="text-white font-display font-semibold text-[36px] lg:text-[54px] leading-[1.02] tracking-[-0.03em]">
            Perícias de Incêndio e Explosão
          </h2>
          <p className="mt-6 text-white/70 text-[16.5px] leading-[1.7] max-w-2xl">
            Atuamos na investigação técnica de sinistros de incêndio e
            explosão em ambientes industriais, comerciais, residenciais,
            veículos e propriedades rurais. Nossa metodologia é fundamentada
            na NFPA 921 — guia de referência mundial para investigação de
            incêndios e explosões — assegurando laudos com fundamentação
            científica e plena validade processual.
          </p>
          <div className="mt-10 mb-5">
            <span className="font-mono-tag text-white/45">
              Escopo de Atuação
            </span>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
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
            NFPA 921
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
        "Análise técnica de acidentes industriais, de trabalho e sinistros de alta complexidade. A investigação de causa-raiz segue a metodologia estruturada da IEC 62740 — norma internacional que define princípios e diretrizes para análise de causa-raiz — garantindo rastreabilidade das conclusões e solidez técnica para uso judicial, administrativo e securitário.",
      tag: "INDUSTRIAL · TRABALHO · ALTA COMPLEXIDADE",
    },
    {
      icon: Leaf,
      title: "Perícia Ambiental",
      body:
        "Assistência técnica na contestação de autos de infração, laudos periciais e avaliações de danos ambientais. Atuação na análise crítica da caracterização do dano e na revisão dos métodos de valoração aplicados, com fundamentação nas Resoluções CONAMA e nos métodos da ABNT NBR 14653-6.",
      tag: "ASSISTÊNCIA TÉCNICA · DANOS AMBIENTAIS",
    },
  ];
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-2xl mb-14">
          <span className="font-mono-tag text-flame">02 / Demais Áreas</span>
          <h2 className="mt-4 font-display font-semibold text-ink text-[32px] lg:text-[44px] leading-[1.05] tracking-tight">
            Duas frentes complementares com o mesmo rigor metodológico.
          </h2>
          <p className="mt-5 text-ink-muted text-[15.5px] leading-[1.7] max-w-xl">
            Além da especialidade principal em incêndios e explosões, atuamos
            com a mesma profundidade técnica em duas frentes complementares
            de igual relevância.
          </p>
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
      body: "Triagem do caso, definição do escopo técnico e mobilização da equipe especializada.",
    },
    {
      icon: Search,
      title: "Investigação técnica no local",
      body: "Vistoria do local, coleta e preservação de evidências, documentação fotográfica e ensaios de campo.",
    },
    {
      icon: Microscope,
      title: "Análise das evidências",
      body: "Análise das evidências coletadas, da documentação existente e cruzamento de informações periciais para formação das conclusões técnicas.",
    },
    {
      icon: FileText,
      title: "Laudo ou relatório técnico fundamentado",
      body: "Emissão de laudo ou relatório técnico fundamentado para uso nas esferas judicial, administrativa e securitária.",
    },
  ];
  return (
    <section id="metodologia" className="surface-navy-deep">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-2xl mb-16">
          <span className="font-mono-tag text-flame">03 / Metodologia</span>
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
                <s.icon className="w-8 h-8 text-white/70" strokeWidth={1.4} />
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
  const W = 220000;
  const H = 194010;
  const sede: [number, number] = [152860, 135140];

  // Endpoints fanned at even ~28° steps around RJ for visual balance,
  // each kept inside Brazilian territory.
  const destinations: [number, number][] = [
    [102348, 176045],
    [76295, 150022],
    [57750, 104240],
    [86863, 66806],
    [128056, 48623],
    [169908, 54936],
  ];

  const arrows = destinations.map(([x, y]) => {
    const dx = x - sede[0];
    const dy = y - sede[1];
    const len = Math.sqrt(dx * dx + dy * dy);
    const t = (len - 5000) / len;
    return {
      endX: sede[0] + dx * t,
      endY: sede[1] + dy * t,
    };
  });

  const svgFile = fs.readFileSync(
    path.join(process.cwd(), "public", "brazil-states.svg"),
    "utf-8"
  );
  const mapInner = svgFile.match(/<svg[^>]*>([\s\S]*)<\/svg>/)?.[1] ?? "";

  return (
    <div className="ml-auto w-full max-w-[600px]">
      <div
        className="relative w-full"
        style={{ aspectRatio: `${W} / ${H}` }}
      >
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="6"
              markerHeight="6"
              refX="4.5"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M 0 0 L 5 3 L 0 6 Z" fill="#e87b3a" />
            </marker>
          </defs>

          <g dangerouslySetInnerHTML={{ __html: mapInner }} />

          {arrows.map((a, i) => (
            <line
              key={i}
              x1={sede[0]}
              y1={sede[1]}
              x2={a.endX}
              y2={a.endY}
              stroke="#e87b3a"
              strokeWidth="900"
              opacity={0.9}
              markerEnd="url(#arrowhead)"
              strokeLinecap="round"
            />
          ))}

          <g>
            <circle cx={sede[0]} cy={sede[1]} r={9500} fill="#e87b3a" opacity={0.18} />
            <circle cx={sede[0]} cy={sede[1]} r={3400} fill="#e87b3a" />
            <text
              x={sede[0] + 5500}
              y={sede[1] + 2200}
              fontSize="5400"
              fill="#1a2236"
              fontFamily="system-ui, sans-serif"
              fontWeight="700"
            >
              RJ · Sede
            </text>
          </g>
        </svg>
      </div>
      <div className="mt-4 text-center font-mono-tag text-ink-muted text-[10px] tracking-[0.18em]">
        Mobilização Nacional · Ilustrativo
      </div>
    </div>
  );
}

function Coverage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-mono-tag text-flame">04 / Cobertura</span>
          <h2 className="mt-4 font-display font-semibold text-ink text-[32px] lg:text-[48px] leading-[1.04] tracking-[-0.03em]">
            Atuação em todo o<br />território nacional.
          </h2>
          <p className="mt-6 text-ink-muted text-[16px] leading-[1.7] max-w-xl">
            Mobilizamos equipes técnicas para qualquer região do país a partir
            da base operacional no Rio de Janeiro. A mobilização é planejada
            conforme a urgência e a complexidade do caso.
          </p>
          <p className="mt-4 text-ink-muted text-[16px] leading-[1.7] max-w-xl">
            Para sinistros no estado do Rio de Janeiro, atendemos ocorrências
            de qualquer porte. Para demais regiões, atuamos em sinistros de
            média e alta complexidade.
          </p>
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
    {
      name: "IAAI (FIT)",
      sub: "Certificação internacional em perícia de incêndio e explosão",
      href: "https://www.firearson.com/credentials/iaai-fit/",
      src: "/credentials/iaai.png",
      whiteSource: false,
    },
    {
      name: "ENS",
      sub: "Certificação em Regulação e Liquidação de Sinistros pela Escola Nacional de Seguros",
      href: "https://www.ens.edu.br/",
      src: "/credentials/ens.svg",
      whiteSource: true,
    },
    {
      name: "IBAPE",
      sub: "Associação ao Instituto Brasileiro de Avaliações e Perícias",
      href: "https://ibape-rj.org.br/",
      src: "/credentials/ibape.png",
      whiteSource: false,
    },
  ];
  const affiliations = [
    {
      name: "CREA-RJ",
      sub: "Registrada (nº 2019201553) no Conselho Regional de Engenharia e Agronomia",
      href: "https://www.crea-rj.org.br/",
      src: "/credentials/crea-rj.png",
      whiteSource: false,
    },
    {
      name: "ABRELPS",
      sub: "Registrada (nº 879492) na Associação Brasileira de Reguladores, Liquidantes e Peritos de Sinistros",
      href: "https://abrelps.org.br/",
      src: "/credentials/abrelps.png",
      whiteSource: true,
    },
  ];
  return (
    <section id="credenciais" className="ember-glow">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <ShieldCheck className="w-4 h-4 text-flame" />
            <span className="font-mono-tag text-flame">05 / Credenciais</span>
          </div>
          <h2 className="font-display font-semibold text-white text-[32px] lg:text-[48px] leading-[1.05] tracking-[-0.03em]">
            Certificações e Filiações
          </h2>
          <p className="mt-5 text-white/65 text-[16px] leading-[1.7]">
            Nossos profissionais e a empresa mantêm certificações e
            associações ativas com as principais entidades técnicas do setor
            no Brasil e no exterior.
          </p>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <Award className="w-4 h-4 text-white/60" />
            <h3 className="font-mono-tag text-white/60">
              Dos Profissionais
            </h3>
            <span className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certs.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visitar ${c.name}`}
                className="group flex flex-col items-stretch gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame"
              >
                <div className="bg-white p-6 min-h-[180px] flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <div className="relative w-full h-28">
                    <Image
                      src={c.src}
                      alt={`Logo ${c.name}`}
                      fill
                      sizes="(max-width: 768px) 40vw, 18vw"
                      className={`object-contain ${
                        c.whiteSource ? "[filter:invert(1)]" : ""
                      }`}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-mono-tag text-white/55 group-hover:text-flame transition-colors text-[11px]">
                    {c.name} →
                  </div>
                  <div className="text-[11px] text-white/35 mt-1.5 leading-tight">
                    {c.sub}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="flex items-center gap-4 mb-8">
            <Building2 className="w-4 h-4 text-white/60" />
            <h3 className="font-mono-tag text-white/60">
              Da Lauden Experts
            </h3>
            <span className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {affiliations.map((a) => (
              <a
                key={a.name}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visitar ${a.name}`}
                className="group flex flex-col gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame"
              >
                <div className="bg-white p-8 min-h-[200px] flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <div className="relative w-full max-w-[260px] h-24">
                    <Image
                      src={a.src}
                      alt={`Logo ${a.name}`}
                      fill
                      sizes="300px"
                      className={`object-contain ${
                        a.whiteSource ? "[filter:invert(1)]" : ""
                      }`}
                    />
                  </div>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="font-mono-tag text-white/55 group-hover:text-flame transition-colors">
                      {a.name} →
                    </div>
                    <div className="text-[11.5px] text-white/35 mt-1.5 leading-tight">
                      {a.sub}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-flame transition-colors shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const clients: { name: string; src: string; href?: string; scale?: number }[] = [
    { name: "Cosan", src: "/clients/cosan.png", href: "https://www.cosan.com.br" },
    { name: "Copersucar", src: "/clients/copersucar.png", href: "https://www.copersucar.com.br" },
    { name: "EMS Farmacêutica", src: "/clients/ems.jpg", href: "https://www.ems.com.br", scale: 1.4 },
    { name: "Rede D'Or", src: "/clients/rede-dor.png", href: "https://www.rededorsaoluiz.com.br" },
    { name: "Positivo Tecnologia", src: "/clients/positivo.png", href: "https://www.positivotecnologia.com.br" },
    { name: "Record TV", src: "/clients/record.avif", href: "https://www.recordtv.com.br" },
    { name: "FTI Consulting", src: "/clients/fti-consulting.png", href: "https://www.fticonsulting.com" },
    { name: "EMCCAMP Residencial", src: "/clients/emccamp.png", href: "https://emccamp.com.br" },
    { name: "Veste S.A. Estilo", src: "/clients/veste.png", href: "https://www.veste.com" },
    { name: "Projeto Portinari", src: "/clients/portinari.png", href: "https://www.portinari.org.br", scale: 1.3 },
    { name: "Drogarias Pacheco", src: "/clients/pacheco.png", href: "https://www.drogariaspacheco.com.br" },
    { name: "A Nossa Drogaria", src: "/clients/a-nossa-drogaria.jpg", href: "https://www.anossadrogaria.com.br" },
    { name: "Hospital Badim", src: "/clients/badim.png", scale: 1.5 },
    { name: "BR Marinas", src: "/clients/br-marinas.jpg", href: "https://brmarinas.com.br" },
    { name: "Bell'Art", src: "/clients/bell-art.jpg" },
    { name: "Multilog", src: "/clients/multilog.webp", href: "https://site.multilog.com.br", scale: 1.8 },
    { name: "TCI BPO", src: "/clients/tci-bpo.png", href: "https://www.tcibpo.com" },
    { name: "Trem do Corcovado", src: "/clients/trem-corcovado.png", href: "https://www.tremdocorcovado.rio", scale: 1.6 },
  ];
  return (
    <section id="clientes" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono-tag text-flame">06 / Clientes</span>
            <h2 className="mt-4 font-display font-semibold text-ink text-[32px] lg:text-[44px] leading-[1.05] tracking-tight">
              Empresas que confiaram em nossos serviços.
            </h2>
          </div>
          <p className="text-[12.5px] text-ink-muted max-w-xs">
            Empresas atendidas em casos pontuais. Marcas pertencem aos
            respectivos titulares.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-border">
          {clients.map((c) => {
            const inner = (
              <div
                className="relative w-full h-full"
                style={c.scale ? { transform: `scale(${c.scale})` } : undefined}
              >
                <Image
                  src={c.src}
                  alt={`Logo ${c.name}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 18vw"
                  className="object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            );
            return c.href ? (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visitar site da ${c.name}`}
                aria-label={`Visitar site da ${c.name} (abre em nova aba)`}
                className="bg-white aspect-[5/3] grid place-items-center p-6 group focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-flame"
              >
                {inner}
              </a>
            ) : (
              <div
                key={c.name}
                title={c.name}
                className="bg-white aspect-[5/3] grid place-items-center p-6 group cursor-default"
              >
                {inner}
              </div>
            );
          })}
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
          <span className="font-mono-tag text-flame">07 / Sobre a Lauden</span>
          <h2 className="mt-4 font-display font-semibold text-ink text-[32px] lg:text-[48px] leading-[1.04] tracking-[-0.03em]">
            Engenharia legal a serviço do seu resultado.
          </h2>
          <p className="mt-7 text-ink-muted text-[16.5px] leading-[1.75] max-w-2xl">
            A Lauden Experts nasceu para suprir uma demanda específica do
            mercado brasileiro: perícias técnicas conduzidas com o rigor das
            principais consultorias internacionais de engenharia legal, sempre
            orientadas ao resultado do cliente.
          </p>
          <p className="mt-4 text-ink-muted text-[16.5px] leading-[1.75] max-w-2xl">
            Reunimos profissionais com formação de alto nível, certificações
            internacionais e sólida experiência em sinistros de alta
            complexidade.
          </p>
          <p className="mt-4 text-ink-muted text-[16.5px] leading-[1.75] max-w-2xl">
            Atuamos nas esferas judicial, administrativa e securitária com
            conclusões tecnicamente defensáveis e respeito integral aos
            prazos dos nossos clientes.
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
          <span className="font-mono-tag text-flame">08 / Contato</span>
          <h2 className="mt-4 font-display font-semibold text-white text-[34px] lg:text-[48px] leading-[1.04] tracking-[-0.03em]">
            Precisa de uma perícia técnica?
          </h2>
          <p className="mt-6 text-white/70 text-[16px] leading-[1.7] max-w-md">
            Atendimento confidencial para seguradoras, escritórios jurídicos e
            empresas. Retorno em até 24 horas.
          </p>
          <div className="mt-10 space-y-5 text-[14.5px] text-white/80">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-flame mt-1 shrink-0" />
              <span>Rio de Janeiro · Brasil</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-flame mt-1 shrink-0" />
              <span>+55 (21) 98477-4076</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-flame mt-1 shrink-0" />
              <span>contato@lauden.com.br</span>
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
            aria-label="Lauden Experts — voltar ao topo"
            className="inline-flex transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame"
          >
            <Image
              src="/lauden-logo.png"
              alt="Lauden Experts"
              width={520}
              height={170}
              className="h-12 w-auto brightness-0 invert"
            />
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
            <li>Rio de Janeiro · Brasil</li>
            <li>+55 (21) 98477-4076</li>
            <li>contato@lauden.com.br</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-white/45">
          <span>
            CNPJ 21.009.574/0001-09 · © {new Date().getFullYear()} Lauden Experts
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
      href="https://wa.me/5521984774076"
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
