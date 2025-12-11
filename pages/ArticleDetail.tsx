import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { articles } from '../data/articles';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center px-6">
        <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">Artigo não encontrado</h2>
        <p className="text-stone-600 mb-8">O texto que você está procurando não existe ou foi movido.</p>
        <Link 
          to="/artigos" 
          className="px-6 py-3 bg-neutral-900 text-white font-bold hover:bg-terracotta-600 transition-colors"
        >
          Voltar para artigos
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header Spacer for fixed header */}
      <div className="h-24 bg-neutral-900"></div>

      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Navigation Back */}
        <Link 
          to="/artigos" 
          className="inline-flex items-center text-stone-500 hover:text-terracotta-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para artigos
        </Link>

        {/* Article Header */}
        <header className="mb-12 border-b border-stone-200 pb-12">
          <div className="flex flex-wrap gap-6 text-sm text-stone-500 mb-6 font-medium">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {article.displayDate}
            </span>
            <span className="flex items-center text-terracotta-600">
              <User className="w-4 h-4 mr-2" />
              Por Marcelo Bones
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 leading-tight mb-8">
            {article.title}
          </h1>

          <p className="text-xl text-stone-600 font-light leading-relaxed italic">
            {article.summary}
          </p>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg prose-stone max-w-none font-light prose-headings:font-serif prose-headings:font-bold prose-headings:text-neutral-900 prose-a:text-terracotta-600 hover:prose-a:text-terracotta-700 prose-strong:font-bold prose-blockquote:border-l-terracotta-600 prose-blockquote:text-stone-600 prose-blockquote:font-serif prose-blockquote:italic"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-stone-200 flex justify-between items-center">
          <Link 
            to="/artigos" 
            className="text-neutral-900 font-bold hover:text-terracotta-600 transition-colors"
          >
            ← Ler outros textos
          </Link>
          
          <button 
            className="flex items-center text-stone-500 hover:text-neutral-900 transition-colors"
            onClick={() => {
              navigator.share?.({
                title: article.title,
                url: window.location.href
              }).catch(() => {});
            }}
          >
            <Share2 className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Compartilhar</span>
          </button>
        </footer>
      </article>

      {/* Newsletter / CTA Section at bottom */}
      <section className="bg-white py-16 border-t border-stone-200">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
            Gostou da leitura?
          </h3>
          <p className="text-stone-600 mb-8">
            Acompanhe nossas atualizações e receba novos textos sobre gestão cultural e teatro.
          </p>
          <a 
            href="#contato" 
            className="inline-block px-8 py-3 border border-neutral-900 text-neutral-900 font-bold hover:bg-neutral-900 hover:text-white transition-colors uppercase tracking-wider text-sm"
          >
            Fale com Marcelo
          </a>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;