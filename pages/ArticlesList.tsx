import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, ArrowRight, Calendar, Inbox } from 'lucide-react';
import { articles } from '../data/articles';

const ArticlesList: React.FC = () => {
  // Sort articles by date descending
  const sortedArticles = [...articles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const hasArticles = sortedArticles.length > 0;

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4 text-terracotta-600">
            <PenTool className="w-8 h-8" />
            <span className="text-sm font-bold tracking-widest uppercase">Publicações</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8">
            Textos, ideias e provocações
          </h1>
          <p className="text-xl text-stone-300 font-light max-w-3xl leading-relaxed border-l-2 border-terracotta-600 pl-6">
            Um espaço para compartilhar reflexões sobre teatro, gestão cultural, políticas públicas e processos de criação.
          </p>
        </div>
      </section>

      {/* List Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {hasArticles ? (
            <div className="space-y-12">
              {sortedArticles.map((article) => (
                <article 
                  key={article.slug} 
                  className="bg-white p-8 md:p-10 border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 text-stone-500 text-sm font-medium mb-4">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={article.date}>{article.displayDate}</time>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-4 group-hover:text-terracotta-600 transition-colors">
                    <Link to={`/artigos/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-stone-600 text-lg leading-relaxed mb-8 font-light">
                    {article.summary}
                  </p>

                  <Link 
                    to={`/artigos/${article.slug}`}
                    className="inline-flex items-center text-neutral-900 font-bold uppercase tracking-wider text-sm hover:text-terracotta-600 transition-colors"
                  >
                    Ler na íntegra
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white border border-stone-100 shadow-sm">
              <Inbox className="w-16 h-16 text-stone-200 mx-auto mb-6" />
              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Novos artigos em breve</h3>
              <p className="text-stone-500 font-light max-w-md mx-auto leading-relaxed">
                Estamos preparando novos conteúdos e reflexões. Em breve, esta página será atualizada com novos textos e provocações.
              </p>
              <div className="mt-10">
                 <Link to="/" className="text-terracotta-600 font-bold uppercase tracking-widest text-xs hover:text-neutral-900 transition-colors border-b border-terracotta-600">
                    Voltar para o início
                 </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ArticlesList;