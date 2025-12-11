import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { Link } from 'react-router-dom';
import { highlights } from '../data/highlights';

const Highlights: React.FC = () => {
  // Display only the first 3 items on the home page
  const recentHighlights = highlights.slice(0, 3);

  return (
    <section id="destaques" className="py-24 bg-neutral-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Destaques Recentes" 
          subtitle="Conquistas, presenças e marcos da trajetória atual."
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentHighlights.map((item) => (
            <div key={item.slug} className="border border-neutral-700 p-8 hover:bg-neutral-800 transition-colors flex flex-col h-full">
              <span className="text-terracotta-600 text-sm font-bold tracking-widest uppercase mb-2 block">
                {item.category}
              </span>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                <Link to={`/destaques/${item.slug}`} className="hover:text-terracotta-500 transition-colors">
                  {item.title}
                </Link>
              </h3>
              <p className="text-stone-400 font-light mb-6 flex-grow">
                {item.summary}
              </p>
              <Link 
                to={`/destaques/${item.slug}`}
                className="text-sm font-bold uppercase tracking-wider text-stone-300 hover:text-white transition-colors self-start border-b border-transparent hover:border-white pb-1"
              >
                Ler mais
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <Link 
              to="/destaques" 
              className="text-stone-400 hover:text-white underline decoration-terracotta-600 underline-offset-4 transition-colors"
            >
                Ver histórico completo
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Highlights;