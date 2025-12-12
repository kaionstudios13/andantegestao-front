import React from 'react';
import { Mail, Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = React.useState(false);
  const email = "marcelo@andantecultura.com.br";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Abstract geometric decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Quer construir algo com a Andante?
        </h2>
        <p className="text-xl text-stone-300 font-light mb-10 max-w-2xl mx-auto">
          Projetos, consultorias, parcerias, circulação de espetáculos ou formação. Estamos prontos para ouvir sua proposta.
        </p>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center animate-fade-in">
            <a
              href={`mailto:${email}`}
              className="group flex items-center gap-3 px-8 py-5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-terracotta-900/40 hover:-translate-y-1"
            >
              Fale com Marcelo
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
            <span className="text-stone-500 text-sm mt-6 mb-2">ou copie o endereço:</span>
            <div className="flex items-center gap-2 px-4 py-2 rounded bg-white/5 border border-white/10">
              <code className="text-stone-400 font-mono text-sm">{email}</code>
              <button
                onClick={handleCopy}
                className="text-stone-500 hover:text-white transition-colors p-1"
                title="Copiar"
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;