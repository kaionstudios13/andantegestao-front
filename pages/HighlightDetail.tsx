import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { highlights } from '../data/highlights';

const HighlightDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = highlights.find((h) => h.slug === slug);

  if (!item) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center px-6">
        <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">Destaque não encontrado</h2>
        <Link 
          to="/destaques" 
          className="px-6 py-3 bg-neutral-900 text-white font-bold hover:bg-terracotta-600 transition-colors"
        >
          Voltar para destaques
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="h-24 bg-neutral-900"></div>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link 
          to="/destaques" 
          className="inline-flex items-center text-stone-500 hover:text-terracotta-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para destaques
        </Link>

        <header className="mb-10 border-b border-stone-200 pb-10">
          <div className="flex items-center gap-4 text-sm mb-6">
             <span className="px-3 py-1 bg-terracotta-600 text-white font-bold text-xs uppercase tracking-widest rounded-sm">
                {item.category}
             </span>
             <span className="flex items-center text-stone-500 font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(item.date).toLocaleDateString('pt-BR')}
             </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 leading-tight mb-6">
            {item.title}
          </h1>

          <p className="text-xl text-stone-600 font-light leading-relaxed italic">
            {item.summary}
          </p>
        </header>

        <div 
          className="prose prose-lg prose-stone max-w-none font-light prose-headings:font-serif prose-headings:font-bold prose-headings:text-neutral-900 prose-a:text-terracotta-600 hover:prose-a:text-terracotta-700"
          dangerouslySetInnerHTML={{ __html: item.contentHtml }}
        />

        <footer className="mt-16 pt-8 border-t border-stone-200 flex justify-between items-center">
          <Link 
            to="/destaques" 
            className="text-neutral-900 font-bold hover:text-terracotta-600 transition-colors"
          >
            ← Ver outros destaques
          </Link>
          
          <button 
            className="flex items-center text-stone-500 hover:text-neutral-900 transition-colors"
            onClick={() => {
              navigator.share?.({
                title: item.title,
                url: window.location.href
              }).catch(() => {});
            }}
          >
            <Share2 className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Compartilhar</span>
          </button>
        </footer>
      </article>
    </div>
  );
};

export default HighlightDetail;