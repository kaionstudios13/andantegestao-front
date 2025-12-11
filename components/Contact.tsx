import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
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
        
        <a 
          href="mailto:contato@andantecultura.com.br"
          className="inline-flex items-center px-10 py-5 bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-lg tracking-wide transition-all transform hover:scale-105 shadow-lg shadow-terracotta-900/50"
        >
          <Mail className="mr-3 w-5 h-5" />
          Fale com Marcelo
        </a>
      </div>
    </section>
  );
};

export default Contact;