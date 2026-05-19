"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#credenciais", label: "Credenciais" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contato", label: "Contato" },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      aria-label="Lauden Experts — voltar ao topo"
      className="flex items-center transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame"
    >
      <Image
        src="/lauden-logo.png"
        alt="Lauden Experts"
        width={520}
        height={170}
        priority
        className={`h-10 w-auto transition-[filter] duration-300 ${
          light ? "brightness-0 invert" : ""
        }`}
      />
    </a>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <Logo light={!scrolled} />
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-[13.5px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame ${
                scrolled
                  ? "text-ink-muted hover:text-ink"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5521000000000"
            className={`hidden sm:inline-flex items-center gap-2 px-4 h-10 rounded-sm border text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame ${
              scrolled
                ? "border-flame text-flame hover:bg-flame hover:text-white"
                : "border-white/40 text-white hover:bg-white hover:text-ink"
            }`}
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className={`lg:hidden grid place-items-center w-10 h-10 rounded-sm border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame ${
              scrolled
                ? "border-border text-ink hover:bg-surface"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
          >
            <span className="flex flex-col gap-[5px]">
              <span className="w-4 h-px bg-current" />
              <span className="w-4 h-px bg-current" />
              <span className="w-4 h-px bg-current" />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-[14px] text-ink py-1.5 transition-colors hover:text-flame focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
