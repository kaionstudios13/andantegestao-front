import React from 'react';
import { ClipboardList, ArrowRight } from 'lucide-react';

const GestaoCultural: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4 text-terracotta-600">
            <ClipboardList className="w-8 h-8" />
            <span className="text-sm font-bold tracking-widest uppercase">Nossas Ações</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8">
            Gestão Cultural
          </h1>
          <p className="text-xl text-stone-300 font-light max-w-3xl leading-relaxed border-l-2 border-terracotta-600 pl-6">
            Planejamento, articulação e viabilização de projetos que transformam cenários. Da concepção à prestação de contas, uma gestão focada na sustentabilidade e no impacto cultural.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Description */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
              O que fazemos
            </h2>
            <p className="text-stone-700 text-lg leading-relaxed mb-6">
              [Placeholder] A gestão cultural na visão da Andante vai além da administração de recursos. Trata-se de desenhar estratégias que conectem artistas, público e financiadores de forma coerente. Atuamos na direção de produção, na coordenação técnica e na gestão executiva de festivais, mostras e temporadas.
            </p>
            <p className="text-stone-700 text-lg leading-relaxed">
              [Placeholder] Nosso trabalho envolve desde a elaboração de leis de incentivo e editais até a logística complexa de eventos internacionais, sempre com um olhar atento às especificidades de cada território e grupo artístico.
            </p>
          </div>

          {/* Contact / Contextual CTA */}
          <div className="bg-white border border-stone-200 p-10 md:p-14 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-neutral-900 transition-all duration-500 group-hover:h-full group-hover:bg-terracotta-600"></div>
            
            <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
              Vamos estruturar seu projeto?
            </h3>
            
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Para transformar essas ideias em estruturas sólidas, a Andante se coloca como parceira estratégica. Se você precisa de suporte na gestão do seu festival, na escrita de projetos ou na administração executiva do seu grupo, estamos prontos para dialogar e construir soluções personalizadas.
            </p>

            <a 
              href="mailto:contato@andantecultura.com.br"
              className="inline-flex items-center px-8 py-4 bg-neutral-900 hover:bg-terracotta-600 text-white font-bold tracking-wide transition-colors duration-300"
            >
              Fale com a equipe de gestão
              <ArrowRight className="ml-3 w-5 h-5" />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default GestaoCultural;