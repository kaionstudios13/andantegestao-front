import React from 'react';
import { 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  ClipboardList, 
  Landmark, 
  AlertCircle, 
  Users, 
  Building2, 
  Zap, 
  Search,
  Layout as LayoutIcon
} from 'lucide-react';

const workshops = [
  {
    title: 'Estratégias de Circulação Nacional e Internacionalização para Grupos de Artes Cênicas',
    description: 'Formação prática para grupos e coletivos que desejam ampliar sua presença no circuito brasileiro e internacional.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'Produção de Festivais e Modelos de Programação',
    description: 'Capacitação voltada para produção, curadoria e logística de festivais. Trabalha desenho conceitual, modelos curatoriais, redes, comunicação e estrutura operacional.',
    icon: <LayoutIcon className="w-6 h-6" />,
  },
  {
    title: 'Elaboração e Gestão de Projetos Culturais',
    description: 'Formação técnica que aborda escrita de projetos, definição de metas e indicadores, impacto, narrativa institucional e planejamento orçamentário, aplicável a instituições e festivais.',
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    title: 'Políticas Públicas da Cultura no Brasil: História; Modelos; Desafios',
    description: 'Curso que oferece visão aprofundada das políticas culturais brasileiras, com base na experiência de Marcelo na Funarte e nas Secretarias de Cultura de Belo Horizonte e Contagem.',
    icon: <Landmark className="w-6 h-6" />,
  },
  {
    title: 'O Colapso dos Editais e os Novos Paradigmas de Fomento',
    description: 'Exposição crítica baseada em artigos de grande circulação. Analisa o esgotamento do modelo dos editais; discute impactos e apresenta propostas de modelos híbridos e sustentáveis.',
    icon: <AlertCircle className="w-6 h-6" />,
  },
  {
    title: 'Políticas para Festivais de Artes Cênicas',
    description: 'Oficina prática que apresenta a estrutura, os desafios e as estratégias de políticas culturais para festivais, com base na Rede Brasileira de Festivais e no Observatório.',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'Formação para Gestores Municipais de Cultura',
    description: 'Capacitação dirigida a equipes municipais e estaduais. Inclui planejamento cultural, legislação, sistemas de cultura, conselhos, fundos, editais e governança.',
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    title: 'Como Fortalecer Festivais de Artes Cênicas no Século XXI',
    description: 'Oficina estratégica que trabalha governança, curadoria, comunicação, financiamento, redes, plataformas digitais e metodologias participativas.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Observatório dos Festivais: Pesquisa Aplicada e Mapeamentos',
    description: 'Oficina prática sobre criação de observatórios culturais, produção de mapeamentos, análise de dados e construção de conhecimento aplicado no campo das artes cênicas.',
    icon: <Search className="w-6 h-6" />,
  },
];

const OficinasFormacao: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4 text-terracotta-600">
            <GraduationCap className="w-8 h-8" />
            <span className="text-sm font-bold tracking-widest uppercase">Nossas Ações</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8">
            Oficinas, Palestras e Capacitações
          </h1>
          <p className="text-xl text-stone-300 font-light max-w-3xl leading-relaxed border-l-2 border-terracotta-600 pl-6">
            Espaços de troca, aprendizado e qualificação. Nossas ações formativas buscam instrumentalizar artistas e produtores para os desafios contemporâneos da cena cultural.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Intro Description */}
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6 italic">
              A pedagogia da prática
            </h2>
            <p className="text-stone-700 text-lg leading-relaxed mb-6 font-light">
              Acreditamos que a formação em gestão e produção cultural se dá no encontro entre a teoria e a vivência prática. Nossas oficinas são desenhadas a partir da experiência acumulada em décadas de estrada, festivais e palcos, oferecendo ferramentas reais para a autonomia dos grupos e gestores.
            </p>
          </div>

          {/* Workshop Grid */}
          <div className="mb-24">
            <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-12 border-b border-stone-200 pb-6">
              Catálogo de Oficinas e Cursos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.map((workshop, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full relative"
                >
                  <div className="mb-6 text-terracotta-600 group-hover:scale-110 transition-transform duration-300">
                    {workshop.icon}
                  </div>
                  <h4 className="font-serif font-bold text-xl mb-4 text-neutral-900 group-hover:text-terracotta-600 transition-colors">
                    {workshop.title}
                  </h4>
                  <p className="text-stone-600 font-light text-sm leading-relaxed flex-grow">
                    {workshop.description}
                  </p>
                  <div className="mt-8 pt-4 border-t border-stone-50">
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Palestra / Workshop</span>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-terracotta-600 transition-all duration-500 group-hover:w-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Público-Alvo e Formatos */}
          <div className="bg-neutral-900 text-white p-8 md:p-16 rounded-sm shadow-2xl relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-terracotta-600 rounded-full opacity-10 filter blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold mb-10 text-center">
                Público-Alvo e Formatos
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                      <h4 className="font-bold text-sm uppercase tracking-widest text-terracotta-600 mb-4 border-l-2 border-terracotta-600 pl-4">A quem se destina</h4>
                      <ul className="space-y-4">
                          {[
                            "Artistas e grupos de teatro, dança e circo",
                            "Produtores culturais e gestores de festivais",
                            "Equipes de secretarias municipais e estaduais de cultura",
                            "Estudantes de artes, comunicação e gestão"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle2 className="w-5 h-5 text-terracotta-600 mt-1 mr-4 flex-shrink-0" />
                              <span className="text-stone-300 font-light text-lg">{item}</span>
                            </li>
                          ))}
                      </ul>
                  </div>
                  <div className="space-y-6">
                      <h4 className="font-bold text-sm uppercase tracking-widest text-terracotta-600 mb-4 border-l-2 border-terracotta-600 pl-4">Formatos Flexíveis</h4>
                       <ul className="space-y-4">
                          {[
                            "Workshops Intensivos (presenciais ou online)",
                            "Palestras Magnas e Debates Provocativos",
                            "Mentorias Individuais ou para Coletivos",
                            "Cursos Modulares de Curta e Média Duração"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle2 className="w-5 h-5 text-terracotta-600 mt-1 mr-4 flex-shrink-0" />
                              <span className="text-stone-300 font-light text-lg">{item}</span>
                            </li>
                          ))}
                      </ul>
                  </div>
              </div>
            </div>
          </div>

           {/* Contact / CTA */}
           <div className="mt-24 text-center border-t border-stone-200 pt-16">
             <h4 className="text-2xl font-serif font-bold text-neutral-900 mb-6">Gostaria de levar uma destas oficinas para sua cidade ou evento?</h4>
             <a 
              href="mailto:contato@andantecultura.com.br"
              className="group inline-flex items-center px-10 py-5 bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-lg tracking-wide transition-all shadow-lg shadow-terracotta-600/20"
            >
              Solicitar proposta para formação
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
           </div>

        </div>
      </section>
    </div>
  );
};

export default OficinasFormacao;