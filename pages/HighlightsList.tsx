import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Calendar } from 'lucide-react';
import { highlights } from '../data/highlights';

const HighlightsList: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4 text-terracotta-600">
            <Star className="w-8 h-8" />
            <span className="text-sm font-bold tracking-widest uppercase">Novidades</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8">
            Destaques
          </h1>
          <p className="text-xl text-stone-300 font-light max-w-3xl leading-relaxed border-l-2 border-terracotta-600 pl-6">
            Acompanhe as notícias mais recentes, reconhecimentos e a agenda de atividades da Andante e de Marcelo Bones.
          </p>
        </div>
      </section>

      {/* List Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid gap-10">
          {highlights.map((item) => (
            <div 
              key={item.slug} 
              className="bg-white border border-stone-200 p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-bold text-terracotta-600 uppercase tracking-widest">
                    {item.category}
                  </span>
                  <span className="text-xs text-stone-400 font-medium flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(item.date).toLocaleDateString('pt-BR')}
                  </span>
                </div>

                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4 hover:text-terracotta-600 transition-colors">
                  <Link to={`/destaques/${item.slug}`}>
                    {item.title}
                  </Link>
                </h2>

                <p className="text-stone-600 leading-relaxed mb-6 font-light">
                  {item.summary}
                </p>

                <Link 
                  to={`/destaques/${item.slug}`}
                  className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-neutral-900 hover:text-terracotta-600 transition-colors"
                >
                  Ler mais <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HighlightsList;