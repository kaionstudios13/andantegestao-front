import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

const Articles: React.FC = () => {
  const recentArticles = articles
    .filter(article => !article.hiddenOnHome)
    .slice(0, 3);
  const hasArticles = recentArticles.length > 0;

  return (
    <section id="artigos" className="py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionTitle title="Textos, ideias e provocações" subtitle="Reflexões sobre o fazer teatral e a gestão da cultura." />
          {hasArticles && (
            <div className="hidden md:block mb-12">
              <Link to="/artigos" className="text-neutral-900 border-b-2 border-terracotta-600 hover:text-terracotta-600 transition-colors pb-1 font-bold text-sm uppercase tracking-wider">Ver todos os textos</Link>
            </div>
          )}
        </div>

        {hasArticles ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {recentArticles.map((article) => (
              <article key={article.slug} className="flex flex-col group cursor-pointer">
                <div className="h-48 bg-stone-100 mb-6 overflow-hidden relative border border-stone-100">
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-neutral-900 opacity-0 group-hover:opacity-5 transition-opacity"></div>


                </div>
                <div className="text-xs font-bold text-terracotta-600 uppercase tracking-widest mb-2">Artigo • {article.displayDate}</div>
                <h3 className="text-3xl font-serif font-bold text-neutral-900 mb-3 group-hover:text-terracotta-600 transition-colors">
                  <Link to={`/artigos/${article.slug}`}>{article.title}</Link>
                </h3>
                <p className="text-stone-600 font-light mb-4 line-clamp-3">
                  {article.summary}
                </p>
                <Link to={`/artigos/${article.slug}`} className="text-neutral-900 font-bold text-sm underline decoration-transparent group-hover:decoration-terracotta-600 transition-all">Ler mais</Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-16 px-8 bg-stone-50 border border-stone-100 text-center">
            <p className="text-stone-500 italic font-serif text-lg">Novos artigos e reflexões serão publicados em breve.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Articles;