"use client";

import { ArrowRight, MessageCircle } from "lucide-react";

function Field({
  label,
  name,
  type = "text",
  textarea,
  wide,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  wide?: boolean;
}) {
  const cls =
    "w-full bg-transparent border-b border-white/20 focus:border-flame outline-none text-white text-[15px] py-3 placeholder:text-white/30 transition-colors";
  return (
    <label className={`block ${wide ? "sm:col-span-2" : ""}`}>
      <span className="font-mono-tag text-white/50 block mb-1">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls} required />
      ) : (
        <input name={name} type={type} className={cls} required />
      )}
    </label>
  );
}

export function ContactForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-white/[0.03] border border-white/10 p-8 lg:p-10 backdrop-blur-sm"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Nome" name="nome" />
        <Field label="Empresa" name="empresa" />
        <Field label="E-mail" name="email" type="email" wide />
        <Field label="Mensagem" name="mensagem" textarea wide />
      </div>
      <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 h-12 px-7 bg-flame text-white text-[14px] font-medium rounded-sm hover:brightness-110 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Enviar solicitação <ArrowRight className="w-4 h-4" />
        </button>

        <span className="font-mono-tag text-white/40 text-center sm:px-1">
          ou
        </span>

        <a
          href="https://wa.me/5521984774076"
          className="inline-flex items-center justify-center gap-2 h-12 px-6 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-400 hover:text-navy text-[14px] font-medium rounded-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
        >
          <MessageCircle className="w-4 h-4" /> Falar agora pelo WhatsApp
        </a>
      </div>
    </form>
  );
}
