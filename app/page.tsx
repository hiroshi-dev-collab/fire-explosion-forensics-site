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
              01 / Especialidade Principal
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
  const brazilOutline =
    "M 38 12 C 46 9 56 8 64 11 C 70 13 75 17 78 22 C 81 27 83 33 85 39 C 86 45 86 51 83 57 C 80 64 75 70 68 74 C 62 78 55 81 50 84 C 44 86 38 84 33 79 C 27 73 22 66 19 58 C 16 50 15 41 18 33 C 20 26 24 20 30 16 C 33 14 36 13 38 12 Z";

  const interiorDots: [number, number][] = [
    [40, 18], [48, 16], [55, 17], [62, 19], [68, 22],
    [36, 24], [44, 24], [52, 25], [60, 26], [70, 28], [76, 30],
    [32, 32], [40, 32], [48, 33], [56, 34], [64, 35], [72, 36],
    [30, 40], [38, 41], [46, 42], [54, 43], [62, 44], [70, 45], [78, 46],
    [28, 48], [36, 49], [44, 50], [52, 51], [60, 52], [68, 53], [76, 54],
    [30, 56], [38, 57], [46, 58], [54, 59], [62, 60], [70, 61],
    [32, 64], [40, 65], [48, 66], [56, 67], [64, 68],
    [36, 72], [44, 73], [52, 74], [60, 75],
    [40, 78], [48, 79],
  ];

  const sede: [number, number] = [64, 60];
  const otherBases: [number, number, string][] = [
    [55, 60, "SP"],
    [50, 67, "PR"],
  ];

  return (
    <div className="relative aspect-square w-full max-w-[560px] ml-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <clipPath id="brazil-clip">
            <path d={brazilOutline} />
          </clipPath>
        </defs>

        <path
          d={brazilOutline}
          fill="none"
          stroke="oklch(0.48 0.01 260 / 0.4)"
          strokeWidth="0.4"
        />

        <g clipPath="url(#brazil-clip)">
          {interiorDots.map(([x, y], idx) => (
            <circle
              key={idx}
              cx={x}
              cy={y}
              r={0.45}
              fill="oklch(0.48 0.01 260)"
              opacity={0.45}
            />
          ))}
        </g>

        {otherBases.map(([x, y]) => (
          <line
            key={`route-${x}-${y}`}
            x1={sede[0]}
            y1={sede[1]}
            x2={x}
            y2={y}
            stroke="oklch(0.70 0.17 45)"
            strokeWidth="0.3"
            strokeDasharray="1.2 0.8"
            opacity={0.7}
          />
        ))}

        {otherBases.map(([x, y, label]) => (
          <g key={label}>
            <circle
              cx={x}
              cy={y}
              r={1.2}
              fill="oklch(0.70 0.17 45)"
            />
            <text
              x={x - 3}
              y={y + 0.6}
              fontSize="2.2"
              fill="oklch(0.48 0.01 260)"
              textAnchor="end"
              fontFamily="system-ui, sans-serif"
              fontWeight="500"
            >
              {label}
            </text>
          </g>
        ))}

        <g>
          <circle
            cx={sede[0]}
            cy={sede[1]}
            r={4}
            fill="oklch(0.70 0.17 45)"
            opacity={0.15}
          />
          <circle
            cx={sede[0]}
            cy={sede[1]}
            r={1.6}
            fill="oklch(0.70 0.17 45)"
          />
          <text
            x={sede[0] + 2.5}
            y={sede[1] + 0.8}
            fontSize="2.2"
            fill="oklch(0.18 0.03 260)"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            RJ · Sede
          </text>
        </g>
      </svg>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-mono-tag text-ink-muted text-[10px] tracking-[0.18em]">
        Cobertura Nacional · Ilustrativo
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
            Mobilizamos equipes técnicas para qualquer região do país.
            Estrutura logística preparada para sinistros de média e grande
            complexidade, com base operacional no Rio de Janeiro e rede
            técnica atuando em todas as cinco regiões do Brasil.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-8 max-w-lg">
            <div>
              <div className="font-mono-tag text-ink-muted/70 mb-2">
                Tempo de Resposta
              </div>
              <div className="font-display font-semibold text-ink text-[28px] leading-none tracking-tight">
                ≤ 72h
              </div>
            </div>
            <div>
              <div className="font-mono-tag text-ink-muted/70 mb-2">
                Bases Técnicas
              </div>
              <div className="font-display font-semibold text-ink text-[28px] leading-none tracking-tight">
                RJ · SP · PR
              </div>
            </div>
            <div>
              <div className="font-mono-tag text-ink-muted/70 mb-2">
                Regiões Cobertas
              </div>
              <div className="font-display font-semibold text-ink text-[28px] leading-none tracking-tight">
                5 / 5
              </div>
            </div>
            <div>
              <div className="font-mono-tag text-ink-muted/70 mb-2">
                Atuação Internacional
              </div>
              <div className="font-display font-semibold text-ink text-[28px] leading-none tracking-tight">
                NFPA
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
    {
      name: "IAAI (FIT)",
      href: "https://www.firearson.com/credentials/iaai-fit/",
      src: "/credentials/iaai-fit.svg",
      whiteSource: false,
    },
    {
      name: "ENS",
      href: "https://www.ens.edu.br/",
      src: "/credentials/ens.svg",
      whiteSource: true,
    },
    {
      name: "CREA-RJ",
      href: "https://www.crea-rj.org.br/",
      src: "/credentials/crea-rj.png",
      whiteSource: false,
    },
    {
      name: "IBAPE-RJ",
      href: "https://ibape-rj.org.br/",
      src: "/credentials/ibape.png",
      whiteSource: false,
    },
  ];
  const affiliations = [
    {
      name: "CREA-RJ (Pessoa Jurídica)",
      href: "https://www.crea-rj.org.br/",
      src: "/credentials/crea-rj.png",
      whiteSource: false,
    },
    {
      name: "ABRELPS",
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certs.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visitar ${c.name}`}
                className="group flex flex-col items-stretch gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame"
              >
                <div className="bg-white p-6 min-h-[140px] flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <div className="relative w-full h-20">
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
                <span className="font-mono-tag text-white/50 group-hover:text-flame transition-colors text-center text-[11px]">
                  {c.name} →
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
                <div className="bg-white p-6 min-h-[140px] flex items-center justify-center gap-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <div className="relative w-40 lg:w-52 h-16 shrink-0">
                    <Image
                      src={a.src}
                      alt={`Logo ${a.name}`}
                      fill
                      sizes="220px"
                      className={`object-contain ${
                        a.whiteSource ? "[filter:invert(1)]" : ""
                      }`}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono-tag text-white/50 group-hover:text-flame transition-colors">
                    {a.name}
                  </span>
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
  const clients = [
    { name: "AMBEV", src: "/clients/ambev.jpg" },
    { name: "Cosan", src: "/clients/cosan.png" },
    { name: "Copersucar", src: "/clients/copersucar.png" },
    { name: "EMS", src: "/clients/ems.jpg" },
    { name: "Rede D'Or", src: "/clients/rede-dor.png" },
    { name: "Positivo", src: "/clients/positivo.png" },
    { name: "Record", src: "/clients/record.avif" },
    { name: "FTI Consulting", src: "/clients/fti-consulting.png" },
    { name: "EMCCAMP", src: "/clients/emccamp.png" },
    { name: "Veste", src: "/clients/veste.png" },
    { name: "Portinari", src: "/clients/portinari.png" },
    { name: "Pacheco", src: "/clients/pacheco.png" },
    { name: "A Nossa Drogaria", src: "/clients/a-nossa-drogaria.jpg" },
    { name: "Badim", src: "/clients/badim.png" },
    { name: "BR Marinas", src: "/clients/br-marinas.jpg" },
    { name: "Bell-Art", src: "/clients/bell-art.jpg" },
    { name: "Multilog", src: "/clients/multilog.webp" },
    { name: "TCI BPO", src: "/clients/tci-bpo.png" },
    { name: "Trem do Corcovado", src: "/clients/trem-corcovado.png" },
  ];
  return (
    <section id="clientes" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono-tag text-flame">06 / Clientes</span>
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
              key={c.name}
              className="bg-white aspect-[5/3] grid place-items-center p-6 group cursor-default"
              title={c.name}
            >
              <div className="relative w-full h-full">
                <Image
                  src={c.src}
                  alt={`Logo ${c.name}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 18vw"
                  className="object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
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
          <span className="font-mono-tag text-flame">07 / Sobre a Lauden</span>
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
          <span className="font-mono-tag text-flame">08 / Contato</span>
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
