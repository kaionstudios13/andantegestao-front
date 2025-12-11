import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-neutral-900 text-white flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40 md:opacity-100">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left Side (Content Background - mostly black) */}
          <div className="bg-neutral-900 hidden md:block"></div>
          
          {/* Right Side (Image) */}
          <div className="relative h-full w-full bg-neutral-800">
             {/* 
                NOTE: This image URL is a placeholder. 
                Ideally, replace this with the user's specific photo of Marcelo with hand on mouth.
                I am using a high-quality stylized black and white portrait placeholder for structure.
             */}
            <img 
              src="https://marcelobones.com.br/wp-content/uploads/2025/11/19300964954_cf49b3b327_o-3-683x1024.jpg" 
              alt="Marcelo Bones - Gesto pensativo" 
              className="absolute inset-0 w-full h-full object-cover object-top filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-transparent md:bg-gradient-to-r md:from-neutral-900 md:via-neutral-900/40 md:to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 w-full">
        <div className="md:w-1/2 flex flex-col justify-center h-full space-y-8">
          <div className="space-y-4">
            <h2 className="text-terracotta-600 font-medium tracking-[0.2em] text-sm uppercase">
              Consultoria e Gestão em Políticas Culturais • Distribuição de espetáculos 
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Arte em movimento. <br />
              <span className="italic font-light text-stone-300">Gestão com alma.</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-stone-300 font-light max-w-lg leading-relaxed border-l-2 border-terracotta-600 pl-6">
            Ações culturais que conectam trajetórias, territórios e políticas públicas, tecendo pontes entre cena, cidade e festivais a partir da experiência de Marcelo Bones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#contato" 
              className="px-8 py-4 bg-terracotta-600 hover:bg-terracotta-700 text-white transition-colors duration-300 font-medium flex items-center justify-center gap-2 group"
            >
              Vamos conversar?
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#acoes" 
              className="px-8 py-4 border border-stone-500 hover:border-white text-stone-300 hover:text-white transition-colors duration-300 font-medium flex items-center justify-center"
            >
              Conheça nossas ações
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;