"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";

const ACCESS_KEY = "dd3f1d6b-0aeb-4874-bf46-73c256b87c48";

type Status = "idle" | "sending" | "success" | "error";

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
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "Nova solicitação — site Lauden Experts");
    formData.append("from_name", "Lauden Experts — Site");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
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
          disabled={status === "sending" || status === "success"}
          className="inline-flex items-center justify-center gap-2 h-12 px-7 bg-flame text-white text-[14px] font-medium rounded-sm hover:brightness-110 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending"
            ? "Enviando..."
            : status === "success"
            ? "Enviado!"
            : "Enviar solicitação"}{" "}
          {status !== "success" && <ArrowRight className="w-4 h-4" />}
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

      {status === "success" && (
        <div className="mt-6 flex items-start gap-3 text-emerald-300 text-[13.5px]">
          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
          <span>
            Solicitação enviada com sucesso. Nosso time entrará em contato em
            até 24 horas.
          </span>
        </div>
      )}
      {status === "error" && (
        <div className="mt-6 flex items-start gap-3 text-red-300 text-[13.5px]">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>
            Não foi possível enviar agora. Tente novamente em alguns instantes
            ou fale pelo WhatsApp.
          </span>
        </div>
      )}
    </form>
  );
}
