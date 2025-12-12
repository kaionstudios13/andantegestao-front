import React from 'react';
import { Truck } from 'lucide-react';
import { ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import CopyEmailButton from '../components/CopyEmailButton';

const DistribuicaoEspetaculos: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/acoes" className="inline-flex items-center gap-4 mb-4 text-terracotta-600 hover:text-terracotta-500 transition-colors group">
            <Truck className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold tracking-widest uppercase border-b-2 border-transparent group-hover:border-terracotta-500">Nossas Ações</span>
          </Link>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8">
            Distribuição de Espetáculos
          </h1>
          <p className="text-xl text-stone-300 font-light max-w-3xl leading-relaxed border-l-2 border-terracotta-600 pl-6">
            Conectando a potência da arte brasileira com palcos e festivais do mundo todo.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-lg text-stone-700 font-light leading-relaxed space-y-6">
          <p>
            A Andante Gestão de Cultura atua como agente estratégico e curador na distribuição de obras de artes cênicas,
            facilitando a circulação de espetáculos brasileiros de alta relevância para importantes programações e festivais
            no cenário nacional e internacional. Nossa abordagem visa não apenas a venda dos espetáculos, mas a construção
            de pontes culturais e a gestão de turnês sustentáveis, garantindo que o impacto e a excelência das criações
            alcancem novos públicos com planejamento e eficácia.
          </p>
          <p>
            Assumimos a gestão da distribuição internacional do{' '}
            <a href="https://www.grupogalpao.com.br/" target="_blank" rel="noopener noreferrer" className="text-terracotta-600 hover:underline font-medium">Grupo Galpão</a>,
            um dos mais importantes e longevos coletivos teatrais do Brasil. Conhecido por sua pesquisa vibrante que mistura a força do
            teatro de rua com a profundidade do drama e da comédia, o Galpão tem uma trajetória consolidada em turnês mundiais.
            Nossa expertise busca garantir suas obras mantenham seu vigor e identidade ao circular em diferentes culturas e ambientes
            cênicos, desde a negociação até a adaptação técnica e logística internacional.
          </p>
          <p>
            Colaboramos na distribuição nacional e internacional do{' '}
            <a href="https://giramundo.org/" target="_blank" rel="noopener noreferrer" className="text-terracotta-600 hover:underline font-medium">Grupo Giramundo</a>,
            um núcleo de criação que é referência mundial em teatro de bonecos e animação. O Giramundo possui um repertório vastíssimo
            e um museu vivo de personagens. Nossa ação busca abranger o mapeamento de festivais de animação, teatro e artes integradas,
            para promover o diálogo de suas criações com o público brasileiro e internacional.
          </p>
          <p>
            Também somos responsáveis pela distribuição nacional e internacional do{' '}
            <a href="https://www.teatroandante.com.br" target="_blank" rel="noopener noreferrer" className="text-terracotta-600 hover:underline font-medium">Grupo Teatro Andante</a>,
            um coletivo que se destaca pela pesquisa aprofundada da linguagem teatral e pela criação de espetáculos apurados na técnica,
            mas populares na comunicação. Atuamos na inserção do grupo em circuitos que valorizam a experimentação e a renovação da linguagem cênica.
            Promovemos a circulação de suas obras em festivais, mostras e circuitos que reconhecem sua contribuição para a vanguarda e a
            contemporaneidade das artes cênicas.
          </p>
          <p>
            O trabalho de distribuição da Andante Gestão de Cultura é abrangente, cuidando de todos os aspectos além da negociação,
            como a gestão logística complexa, o gerenciamento de contratos, a assessoria em questões de compliance e a captação de
            recursos para viabilizar as turnês. Ao confiar a circulação de seus espetáculos à Andante, os grupos parceiros garantem
            que suas obras sejam vistas, valorizadas e respeitadas globalmente, com toda a segurança e eficiência estratégica que
            apenas uma gestão especializada pode oferecer.
          </p>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="bg-neutral-900 text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-serif font-bold mb-4">
            Quer discutir a distribuição do seu espetáculo?
          </h3>
          <p className="text-xl text-stone-300 mb-8 font-light">
            Entre em contato para explorar parcerias e estratégias de circulação.
          </p>
          <a
            href="mailto:contato@andantecultura.com.br"
            className="inline-flex items-center px-8 py-4 bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold tracking-wide transition-colors duration-300"
          >
            Fale com a Andante
            <ArrowRight className="ml-3 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default DistribuicaoEspetaculos;