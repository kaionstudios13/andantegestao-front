import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { ExternalLink } from 'lucide-react';

const Universe: React.FC = () => {
  const partners = [
    { 
      name: 'Observatório dos Festivais', 
      desc: 'Plataforma dedicada à pesquisa, mapeamento e análise de festivais de artes cênicas, fortalecendo o campo e suas redes.',
      url: 'https://www.festivais.com.br/' 
    },
    { 
      name: 'Grupo Teatro Andante', 
      desc: 'Companhia que cria, circula e pensa o teatro, unindo dramaturgia, formação e articulação de redes.',
      url: 'https://www.teatroandante.com.br' 
    },
    { 
      name: 'REDELAE', 
      desc: 'Rede Latino-Americana de Festivais de Artes Cênicas, fomentando a cooperação, o intercâmbio e a integração entre festivais de toda a Ibero-América.',
      url: 'https://redelae.org/' 
    },
  ];

  return (
    <section id="universo" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Universo de Atuação" 
          subtitle="Conexões que formam nossa rede de trabalho e afeto."
          centered
        />

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {partners.map((partner, index) => (
            <a 
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-transparent hover:border-terracotta-600 text-center w-full sm:w-72"
            >
              <h3 className="text-xl font-serif font-bold text-neutral-900 mb-3 group-hover:text-terracotta-600 transition-colors">
                {partner.name}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                {partner.desc}
              </p>
              <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <ExternalLink className="w-5 h-5 text-terracotta-600" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Universe;