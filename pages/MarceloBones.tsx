import React, { useState } from 'react';
import { User, BookOpen, Landmark, Theater, PenTool, Users, Award } from 'lucide-react';

// Data types for the timeline
type TimelineCategory = 'gestao' | 'artistico' | 'formacao' | 'publicacoes' | 'movimentos' | 'academico';

interface TimelineItem {
  year: string;
  title?: string;
  description: string;
}

const timelineData: Record<TimelineCategory, TimelineItem[]> = {
  academico: [
    { year: '1983', description: 'Bacharel em Ciências Sociais – Universidade Federal de Minas Gerais (UFMG).' }
  ],
  gestao: [
    { year: '2020 – 2024', description: 'Subsecretario de Cultura de Contagem.' },
    { year: '2017 – 2020', description: 'Diretor de Articulação e Desenvolvimento Institucional da Secretaria de Cultura de Belo Horizonte.' },
    { year: '2017 – 2018', description: 'Consultor do Ministério da Cultura do Brasil no Grupo de Inteligência de Mercado para a organização do MICbr – Mercado das Indústrias Criativas do Brasil.' },
    { year: '2018', description: 'Idealizador e Consultor do INTERCENA – Mercado de Artes cênicas do Rio Grande do Sul.' },
    { year: '2018', description: 'Idealizador e Coordenador Geral do CENABELORIZONTE – Mercado de Artes Cênicas de Belo Horizonte.' },
    { year: '2015 – 2016', description: 'Consultor do Ministério da Cultura do Brasil para a formulação da Política Nacional das Artes (PNA).' },
    { year: '2015', description: 'Diretor Geral do VIA DUPLA – Encontro de Intercâmbio Ibero-americano (Brasil, Argentina, Uruguai).' },
    { year: '2015 – Presente', description: 'Articulador da REDE BRASILEIRA DE FESTIVAIS (mais de 60 festivais de Artes Cênicas).' },
    { year: '2013 – Presente', description: 'Diretor Executivo da Platô – Plataforma de Internacionalização do Teatro.' },
    { year: '2009 – 2011', description: 'Primeiro ANTENA do Brasil no Programa IBERESCENA.' },
    { year: '2008 – 2011', description: 'Diretor de Artes Cênicas da FUNARTE. Gerenciou editais nacionais, criou novos programas de fomento e promoveu o ingresso do Brasil no Iberescena.' },
    { year: '2008', description: 'Coordenador e Diretor Geral do "Palhaçadas em Geral – Encontro Internacional de Palhaços".' },
    { year: '2005', description: 'Assessor da Presidência da Fundação Municipal de Cultura de Belo Horizonte.' },
    { year: '2004, 2012', description: 'Coordenador Geral e Diretor Artístico do FIT BH – Festival Internacional de Teatro Palco e Rua de Belo Horizonte.' },
    { year: '2004 – Presente', description: 'Articulador do Núcleo dos Festivais Internacionais de Artes Cênicas do Brasil.' },
    { year: '1992 – 1996', description: 'Consultor na área cultural da Secretaria Municipal de Assistência Social de Belo Horizonte.' },
    { year: 'Permanente', description: 'Idealizador e coordenador do Observatório dos Festivais.' },
    { year: 'Diversos', description: 'Assessor e consultor de festivais como Festival do Teatro Brasileiro (DF), Festival de Teatro de Rua de Porto Alegre, Festival Nacional de Teatro de Fortaleza, entre outros.' },
  ],
  artistico: [
    { year: '2018', title: 'LAMA', description: 'Espetáculo sobre a tragédia do rompimento da Barragem de Fundão em Mariana.' },
    { year: '2013', title: 'Travessia', description: 'Espetáculo de percurso, estreado em Fafe, Portugal.' },
    { year: '2008', title: 'A História de Édipo', description: 'Com o Grupo Teatro Andante.' },
    { year: '2006', title: 'Cem Mil derradeiros Instantes', description: 'Com formandos do CEFAR.' },
    { year: '2006', title: 'O Último Inverno', description: 'Com o Grupo Boca de Baco de Londrina.' },
    { year: '2005', title: 'Estado de Sítio', description: 'Com o Oficinão do Galpão.' },
    { year: '2004', title: 'Bicicleta Branca', description: 'Com o Grupo ArCênico.' },
    { year: '2003', title: 'À Sombra do Sucesso', description: 'Com a Companhia Burlantins.' },
    { year: '2002', title: 'Um Trem Chamado Desejo', description: 'Com o Grupo Galpão.' },
    { year: '2001', title: 'Olympia', description: 'Com o Grupo Teatro Andante.' },
    { year: '2001', title: 'O Homem da Cabeça de Papelão', description: 'Com o Grupo Trama.' },
    { year: '2000', title: 'Na Lata', description: 'Espetáculo teatral com moradores de rua de Belo Horizonte.' },
    { year: '1999', title: 'Radical Brecht', description: 'Com formandos do CEFAR.' },
    { year: '1998', title: 'Musiclown', description: 'Com o Grupo Teatro Andante.' },
    { year: '1997', title: 'O Beijo no Asfalto', description: 'Com Cia Reviu a Volta.' },
    { year: '1996', title: 'As Mulatas de Chico Rodrigues', description: 'Com o Grupo Deu Pala.' },
    { year: 'Trajetória', description: 'Fundador e diretor do Grupo Teatro Andante (28 anos). Participação em festivais internacionais em Buenos Aires, Santiago, Bogotá, Moscou, Avignon, Aurrilac, Barcelona, entre outros.' }
  ],
  formacao: [
    { year: '2017 – 2018', description: 'Capacitação e formação das companhias de artes cênicas das Ilhas Canárias/Espanha para o MAPAS.' },
    { year: '1989 – 2017', description: 'Professor de Interpretação no Curso Profissionalizante de Ator da Fundação Clóvis Salgado (Palácio das Artes).' },
    { year: '1997 – 1999', description: 'Consultor da ONG Circo de Todo Mundo.' },
    { year: '1997', description: 'Participou da concepção e implantação do projeto Galpão Cine Horto – Oficinão.' },
    { year: 'Diversos', description: 'Idealizador e Coordenador do Curso de Capacitação para Cias teatrais de BH. Ministrante da Oficina "Caminhos para a Circulação Nacional e Internacional" e oficinas de interpretação em mais de 40 cidades.' },
    { year: 'Acadêmico', description: 'Lecionou no Teatro Universitário da UFMG e na Oficina-PUC de Teatro.' }
  ],
  publicacoes: [
    { year: '2017', description: 'Catálogo do Projeto Palco Giratório: Um olhar sobre os Festivais.' },
    { year: '2017', description: 'Livro "O que pensam os Curadores de Artes Cênicas" de Michele Rolim – Entrevista.' },
    { year: '2016', description: 'Revista Argentina Todavía: Políticas Públicas para las Artes.' },
    { year: '2014', description: 'Revista Trama em Revista – Artigo Maia.' },
    { year: '2007', description: 'Revista Sub-texto, No 4 (Galpão Cine Horto): "Teatro de grupo, grupo de teatro".' },
    { year: '1998', description: 'Livro "A la recherche des enfants des rue" (Paris): "Art et population de rue à Belo Horizonte".' },
    { year: '1996', description: 'Jornal Estado de Minas: "Meninos de Rua e Cultura".' },
    { year: '1995', description: 'Livro "O Lúdico e as Políticas Públicas": "Arte e Meninos de Rua".' },
    { year: 'Online', description: 'Portal de Teatro Terceiro Sinal e Observatório dos Festivais: "Teatro – Dilemas e Possibilidades da Circulação Internacional".' }
  ],
  movimentos: [
    { year: '2006 – 2009', description: 'Fundador e Conselheiro Nacional do REDEMOINHO (representação de grupos teatrais).' },
    { year: '2006', description: 'Fundador e articulador da Rede Brasileira de Teatro de Rua.' },
    { year: '1992 – 1995', description: 'Fundador e primeiro presidente do Movimento de Teatro de Grupo de Minas Gerais.' },
    { year: 'Anos 90', description: 'Um dos criadores do Movimento Brasileiro de Teatro de Grupo.' }
  ]
};

const MarceloBones: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TimelineCategory>('gestao');

  const tabs: { id: TimelineCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'gestao', label: 'Gestão Cultural', icon: <Landmark className="w-4 h-4" /> },
    { id: 'artistico', label: 'Direção Artística', icon: <Theater className="w-4 h-4" /> },
    { id: 'formacao', label: 'Ensino & Formação', icon: <Users className="w-4 h-4" /> },
    { id: 'movimentos', label: 'Movimentos', icon: <Award className="w-4 h-4" /> },
    { id: 'publicacoes', label: 'Publicações', icon: <PenTool className="w-4 h-4" /> },
    { id: 'academico', label: 'Acadêmico', icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4 text-terracotta-600">
              <User className="w-8 h-8" />
              <span className="text-sm font-bold tracking-widest uppercase">Sobre</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              Marcelo Bones
            </h1>
            <p className="text-xl text-stone-300 font-light max-w-2xl leading-relaxed border-l-2 border-terracotta-600 pl-6">
              É um dos nomes mais influentes do teatro e da gestão cultural no Brasil, com uma trajetória marcada por inovação, articulação institucional e compromisso com a formação artística.
            </p>
          </div>
          {/* Optional: Add a portrait here if available, currently using placeholder or just text layout */}
        </div>
      </section>

      {/* Presentation / Bio Section */}
      <section className="py-20 px-6 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto text-lg text-stone-700 font-light leading-relaxed space-y-6">
          <p>
            Marcelo Bones é licenciado em Ciências Sociais e construiu uma carreira sólida como diretor,
            professor, pesquisador e gestor cultural. Fundador do Grupo Teatro Andante, Bones dirigiu a
            maioria dos espetáculos da companhia desde 1990, incluindo obras como LAMA, Olympia,
            A História de Édipo, Musiclown e Por Um Triz. Seu trabalho se destaca pela fusão entre pesquisa
            cênica e engajamento social, com forte presença em festivais nacionais e internacionais.
          </p>
          <p>
            Além da direção artística, Bones tem uma atuação expressiva na formação de artistas.
            Foi professor no Centro de Formação Artística da Fundação Clóvis Salgado (CEFAR) entre 1990
            e 2016, onde influenciou gerações de profissionais das artes cênicas. Suas oficinas, como
            Treinamento com o Bastão para a Atuação e Estratégias para Circulação Nacional e Internacional, são
            reconhecidas por sua abordagem prática e reflexiva, promovendo o intercâmbio entre artistas de
            diferentes regiões e países.
          </p>
          <p>
            Na gestão pública, Marcelo Bones ocupou cargos estratégicos que moldaram políticas culturais no Brasil.
            Foi Diretor de Artes Cênicas da Funarte/MINC entre 2009 e 2011, e consultor para a Política Nacional
            das Artes do Ministério da Cultura entre 2015 e 2016. Em Belo Horizonte, atuou como Diretor de
            Articulação da Secretaria de Cultura de 2017 a 2019, e em Contagem, como Subsecretário de Cultura
            de 2020 a 2024. Em todas essas funções, Bones buscou fortalecer redes colaborativas e ampliar o
            acesso à cultura.
          </p>
          <p>
            Em 2025, Marcelo Bones foi um dos 19 homenageados com o Reconhecimento à Gestão Escênica Ibero-Americana
            “Guillermo Heras”, concedido pelo programa Iberescena e pela Secretaria-Geral Ibero-Americana (SEGIB).
            A distinção celebra profissionais que contribuíram de forma decisiva para o fortalecimento das artes
            cênicas no espaço ibero-americano. O prêmio homenageia a memória de Guillermo Heras, gestor cultural
            espanhol e referência na cooperação cultural internacional. A escolha de Bones reafirma seu papel como
            articulador de políticas públicas e promotor da circulação artística entre países da América Latina e 
            da Península Ibérica. Marcelo também é criador e coordenador do Observatório dos Festivais, uma iniciativa
            voltada para o estudo e articulação dos festivais de artes cênicas no Brasil.
            Como Diretor Executivo da Platô – Plataforma de Internacionalização do Teatro, ele promove a circulação
            de artistas brasileiros no exterior, fomentando parcerias e trocas culturais com países da América Latina e Europa.
          </p>
          <p>
            Sua produção intelectual inclui artigos e reflexões sobre políticas culturais, como o texto “Colapso dos editais
            e a urgência de um novo modelo de fomento”, publicado em 2025. Nele, Bones propõe uma revisão crítica da estrutura
            de financiamento das artes no Brasil, apontando caminhos para uma política mais inclusiva e sustentável.
            Seu pensamento é referência para gestores, artistas e pesquisadores que buscam compreender os desafios
            contemporâneos da cultura.
          </p>
          <p>
            Com mais de três décadas de atuação, Marcelo Bones representa uma síntese entre criação artística, pensamento crítico
            e ação institucional. Seu trabalho é movido pela crença de que a arte transforma, conecta e revela. No site que o
            apresenta, este texto é um convite para conhecer um profissional que continua a inspirar e construir caminhos
            para a cultura no Brasil e além..
          </p>
        </div>
      </section>

      {/* Trajectory Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-12 text-center">
            Trajetória e Realizações
          </h2>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-neutral-900 text-white shadow-lg scale-105'
                    : 'bg-white text-stone-500 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Timeline Content */}
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-stone-100 rounded-sm min-h-[400px]">
            <div className="space-y-10">
              {timelineData[activeTab].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-10 border-l-2 border-stone-100 pl-6 md:pl-0 md:border-l-0 relative group">
                  {/* Timeline Line for Desktop */}
                  <div className="hidden md:block absolute left-[140px] top-0 bottom-0 w-[2px] bg-stone-100 group-last:bottom-auto group-last:h-full"></div>
                  <div className="hidden md:block absolute left-[135px] top-1.5 w-3 h-3 rounded-full bg-terracotta-600 border-2 border-white shadow-sm z-10"></div>

                  {/* Year */}
                  <div className="md:w-[140px] md:text-right flex-shrink-0">
                    <span className="inline-block px-3 py-1 bg-stone-100 text-neutral-900 text-sm font-bold rounded">
                      {item.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    {item.title && (
                      <h3 className="text-xl font-serif font-bold text-neutral-900 mb-2">
                        {item.title}
                      </h3>
                    )}
                    <p className="text-stone-600 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default MarceloBones;