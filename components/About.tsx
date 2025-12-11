
import React from 'react';
import { CheckCircle2 } from 'lucide-react'; // Importar o ícone

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Marcelo Bones Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-neutral-900">
              Marcelo Bones
            </h2>
            <div className="h-1 w-16 bg-terracotta-600"></div>
            <p className="text-lg text-stone-700 leading-relaxed font-light">
             Marcelo Bones é diretor de teatro, dramaturgo e gestor cultural brasileiro, com mais de quatro décadas dedicadas às artes cênicas. Fundador do Grupo Teatro Andante e idealizador do Observatório dos Festivais, atua na intersecção entre criação artística, formação e políticas públicas. Reconhecido por seu trabalho na articulação de redes de festivais, na gestão cultural, na internacionalização das artes cênicas e no fortalecimento das políticas para as artes no Brasil e na Iberoamérica (em 2025 foi o brasileiro reconhecido pelo IBERESCENA com a distinção Guillermo Heras), Bones construiu uma trajetória marcada por uma visão crítica, colaborativa e engajada, que busca integrar arte, reflexão e ação política. Sua produção combina rigor estético e compromisso social, consolidando-o como uma referência na cena teatral e na gestão cultural contemporânea. 
            </p>
            <p className="text-lg text-stone-700 leading-relaxed font-light">
              Sua visão não é apenas técnica, mas humanista: entende que por trás de cada planilha de produção ou organograma institucional existe uma pulsação artística que precisa ser respeitada e potencializada. 
            </p>
          </div>

          {/* Andante Column */}
          <div className="bg-white p-8 md:p-12 shadow-sm border-t-4 border-neutral-900">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
              Andante – Gestão de Cultura
            </h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              A  <strong> Andante</strong>, empresa criada por Marcelo Bones, atua em consultoria e assessoria na área cultural, junto a governos, instituições, festivais, coletivos artísticos e equipamentos culturais na elaboração, execução e qualificação de projetos, processos e modelos de gestão em cultura.
            </p>
            
            <ul className="space-y-3">
              {[
                "Gestão Completa de Projetos: Do planejamento estratégico à produção executiva.",
                "Desenvolvimento de Mercado: Ações de internacionalização, mapeamento de redes e distribuição para a circulação de espetáculos.",
                "Festivais e Eventos: Organização, curadoria e gestão operacional de programações complexas.",
                "Políticas Públicas: Assessoria e consultoria especializada para municípios, estados e o governo federal para a criação e implementação de marcos regulatórios, planejamento e execução de programas e projetos."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-stone-800 text-base leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-terracotta-600 mr-3 flex-shrink-0 mt-1" /> {/* Ícone Checkmark */}
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;