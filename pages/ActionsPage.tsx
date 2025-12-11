import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, GraduationCap, Theater, ArrowRight } from 'lucide-react'; // Adicionado Theater para Distribuição

const ActionsPage: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Nossas Ações
          </h1>
          <p className="text-xl text-stone-300 font-light max-w-3xl leading-relaxed border-l-2 border-terracotta-600 pl-6">
            A Andante – Gestão de Cultura atua em três frentes principais, conectando artistas, territórios e políticas públicas para fortalecer o cenário cultural.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Card 1: Gestão Cultural */}
            <div className="bg-white p-8 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6">
                <ClipboardList className="w-12 h-12 text-terracotta-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4 group-hover:text-terracotta-600 transition-colors">
                Gestão Cultural
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Gestão completa de projetos culturais, redes, festivais e implementação de políticas públicas. Uma abordagem que une visão estratégica e sensibilidade artística para viabilizar ideias.
              </p>
              <Link 
                to="/gestao-cultural" 
                className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-neutral-900 hover:text-terracotta-600 transition-colors"
              >
                Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: Oficinas */}
            <div className="bg-white p-8 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6">
                <GraduationCap className="w-12 h-12 text-terracotta-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4 group-hover:text-terracotta-600 transition-colors">
                Oficinas, Palestras e Capacitações
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Percursos formativos, workshops e mentorias destinados a artistas, produtores e gestores. Compartilhamento de saberes para fortalecer a cadeia produtiva da cultura.
              </p>
              <Link 
                to="/oficinas" 
                className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-neutral-900 hover:text-terracotta-600 transition-colors"
              >
                Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Card 3: Distribuição de Espetáculos */}
            <div className="bg-white p-8 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6">
                <Theater className="w-12 h-12 text-terracotta-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4 group-hover:text-terracotta-600 transition-colors">
                Distribuição de Espetáculos
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Estratégias e curadoria na distribuição de obras de artes cênicas, facilitando a circulação de espetáculos brasileiros de alta relevância para importantes programações e festivais no cenário nacional e internacional.
              </p>
              <Link 
                to="/espetaculos" 
                className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-neutral-900 hover:text-terracotta-600 transition-colors"
              >
                Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ActionsPage;