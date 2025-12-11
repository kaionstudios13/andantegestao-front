import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { ClipboardList, GraduationCap, Truck, ArrowRight, Theater } from 'lucide-react';
import { Link } from 'react-router-dom';

const actions = [
  {
    id: 'gestao',
    title: 'Gestão Cultural',
    description: 'Gestão completa de projetos culturais, redes, festivais e implementação de políticas públicas. Uma abordagem que une visão estratégica e sensibilidade artística para viabilizar ideias.',
    icon: <ClipboardList className="w-10 h-10 text-terracotta-600" />,
    path: '/gestao-cultural'
  },
  {
    id: 'formacao',
    title: 'Oficinas, Palestras & Capacitações',
    description: 'Percursos formativos para artistas, produtores e gestores. Oficinas que combinam prática, reflexão crítica e partilha de experiências em diferentes contextos e territórios.',
    icon: <GraduationCap className="w-10 h-10 text-terracotta-600" />,
    path: '/oficinas'
  },
  {
    id: 'espetaculos',
    title: 'Distribuição de Espetáculos',
    description: 'Estratégias e curadoria na distribuição de obras de artes cênicas, facilitando a circulação de espetáculos brasileiros de alta relevância para importantes programações e festivais no cenário nacional e internacional.',
    icon: <Theater className="w-10 h-10 text-terracotta-600" />,
    path: '/espetaculos'
  },
];

const Actions: React.FC = () => {
  return (
    <section id="acoes" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Nossas Ações" 
          subtitle="Três eixos fundamentais onde a experiência se transforma em movimento."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {actions.map((action) => (
            <div key={action.id} className="group relative bg-stone-50 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-stone-100">
              <div className="mb-6 p-4 bg-white inline-block rounded-full shadow-sm group-hover:bg-neutral-900 transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                   {action.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4 group-hover:text-terracotta-600 transition-colors">
                {action.title}
              </h3>
              
              <p className="text-stone-600 leading-relaxed mb-8">
                {action.description}
              </p>

              <Link 
                to={action.path}
                className="flex items-center text-sm font-bold uppercase tracking-wider text-neutral-900 group-hover:text-terracotta-600 transition-colors"
              >
                Ver em detalhes
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-terracotta-600 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Actions;