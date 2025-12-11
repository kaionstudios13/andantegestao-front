import React from 'react';
import { Users, ExternalLink, Globe, Star } from 'lucide-react';

const Groups: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4 text-terracotta-600">
            <Users className="w-8 h-8" />
            <span className="text-sm font-bold tracking-widest uppercase">Rede</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8">
            Grupos e Afiliações
          </h1>
          <p className="text-xl text-stone-300 font-light max-w-3xl leading-relaxed border-l-2 border-terracotta-600 pl-6">
            A trajetória de Marcelo Bones e da Andante é construída no coletivo. Seja na criação artística ou na circulação, caminhamos ao lado de grupos que são referência na cena teatral brasileira.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Section: Universo de Atuação */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-4">
                <Star className="w-6 h-6 text-terracotta-600" />
                <h2 className="text-3xl font-serif font-bold text-neutral-900">
                Universo de Atuação
                </h2>
            </div>
            
            <p className="text-stone-600 text-lg mb-10 max-w-3xl">
              O espaço de criação e pesquisa continuada, onde a gestão se encontra com a prática artística diária.
            </p>

            <div className="flex flex-col gap-8">
                {/* Card: Grupo Teatro Andante */}
                <div className="bg-white border-l-4 border-terracotta-600 shadow-sm p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start hover:shadow-lg transition-shadow duration-300">
                    <div className="flex-1">
                        <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-3">Grupo Teatro Andante</h3>
                        <p className="text-stone-600 leading-relaxed mb-6 font-light">
                            Fundado em 1990, o Grupo Teatro Andante é um dos mais longevos e atuantes de Belo Horizonte. Sob a direção de Marcelo Bones, o grupo desenvolve uma pesquisa focada na dramaturgia, no trabalho do ator e na ocupação de espaços não convencionais. Com espetáculos como "Olympia" e "A História de Édipo", o grupo construiu uma sólida carreira internacional.
                        </p>
                        <a 
                          href="https://www.teatroandante.com.br" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-terracotta-600 hover:text-neutral-900 transition-colors"
                        >
                            <Globe className="w-4 h-4 mr-2" />
                            Visitar site oficial
                        </a>
                    </div>
                    {/* Optional Image Placeholder */}
                    <div className="w-full md:w-1/3 h-48 bg-stone-100 flex items-center justify-center text-stone-400 italic font-serif">
                        Foto do Grupo
                    </div>
                </div>

                {/* Card: Observatório dos Festivais */}
                <div className="bg-white border-l-4 border-terracotta-600 shadow-sm p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start hover:shadow-lg transition-shadow duration-300">
                    <div className="flex-1">
                        <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-3">Observatório dos Festivais</h3>
                        <p className="text-stone-600 leading-relaxed mb-6 font-light">
                            O Observatório dos Festivais é uma iniciativa dedicada à pesquisa, articulação e divulgação de informações sobre festivais de artes cênicas, promovendo encontros, formação e produção de conhecimento para fortalecer o campo das artes cênicas no Brasil.
                        </p>
                        <a 
                          href="https://www.festivais.com.br/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-terracotta-600 hover:text-neutral-900 transition-colors"
                        >
                            <Globe className="w-4 h-4 mr-2" />
                            Visitar site oficial
                        </a>
                    </div>
                    {/* Optional Image Placeholder */}
                    <div className="w-full md:w-1/3 h-48 bg-stone-100 flex items-center justify-center text-stone-400 italic font-serif">
                        Logo/Imagem
                    </div>
                </div>
            </div>
          </div>

          {/* Section: Distribuição e Parcerias */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-4">
                <Globe className="w-6 h-6 text-terracotta-600" />
                <h2 className="text-3xl font-serif font-bold text-neutral-900">
                Distribuição e Representação
                </h2>
            </div>

            <p className="text-stone-600 text-lg mb-10 max-w-3xl">
              A Andante atua na circulação e distribuição de grupos parceiros, abrindo caminhos em festivais e mercados nacionais e internacionais.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card: Grupo Galpão */}
                <div className="bg-white border border-stone-200 p-8 hover:border-terracotta-600 transition-colors duration-300 group">
                    <h3 className="text-xl font-serif font-bold text-neutral-900 mb-4 group-hover:text-terracotta-600 transition-colors">
                        Grupo Galpão
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-6 font-light text-sm">
                        Um dos grupos de teatro mais importantes do país, com uma linguagem que une o popular e o erudito, a rua e o palco. A Andante colaborou historicamente na distribuição e circulação internacional de espetáculos icônicos do repertório do Galpão.
                    </p>
                    <a 
                      href="https://www.grupogalpao.com.br/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-terracotta-600 transition-colors"
                    >
                        <ExternalLink className="w-3 h-3 mr-2" />
                        Visitar site oficial
                    </a>
                </div>

                {/* Card: Grupo Giramundo */}
                <div className="bg-white border border-stone-200 p-8 hover:border-terracotta-600 transition-colors duration-300 group">
                    <h3 className="text-xl font-serif font-bold text-neutral-900 mb-4 group-hover:text-terracotta-600 transition-colors">
                        Grupo Giramundo
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-6 font-light text-sm">
                        Referência mundial em teatro de bonecos e animação. A parceria com a Andante foca na expansão de fronteiras e na presença do grupo em circuitos de festivais internacionais, levando a magia e a técnica apurada do Giramundo para novos públicos.
                    </p>
                    <a 
                      href="https://giramundo.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-terracotta-600 transition-colors"
                    >
                        <ExternalLink className="w-3 h-3 mr-2" />
                        Visitar site oficial
                    </a>
                </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Groups;