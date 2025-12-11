export interface Article {
  slug: string;
  title: string;
  date: string; // Formato ISO YYYY-MM-DD para ordenação
  displayDate: string;
  summary: string;
  contentHtml: string;
  image?: string; // Imagem opcional para visualização em lista
}

export const articles: Article[] = [
  {
    slug: "alem-dos-editais",
    title: "Além dos Editais: notas para um novo paradigma de fomento à cultura e às artes",
    date: "2025-12-10",
    displayDate: "10 de dezembro de 2025",
    summary: "Reflexões sobre o esgotamento do modelo de editais e a necessidade de novos paradigmas de fomento que diferenciem arte e cultura, garantindo continuidade e infraestrutura.",
    contentHtml: `
      <p class="mb-6">
        O texto que segue nasceu de uma fala apresentada no MICBR 2025, no painel multissetorial “Além dos Editais: novos caminhos para o fomento à cultura”, realizado em 4 de dezembro. Ao lado de Léo Lessa, diretor executivo da Funarte; Raúl Neftalí Castillo Rosales, Ministro da Cultura de El Salvador; e Leandro Maciel Silva, coordenador de Políticas para as Artes da Secretaria de Cultura do Ceará; com mediação de Lia Baron, compartilhei algumas inquietações que venho acumulando há anos sobre o esgotamento do modelo de editais e seus efeitos sobre o ecossistema artístico brasileiro. A fala, lida ali em voz alta, nasce da prática, da cena, das fricções entre criação e política, e carregava o desejo de provocar um deslocamento, ainda que pequeno, no modo como temos pensado o fomento. Ao transformá-la agora em texto, mantenho o mesmo gesto: o de oferecer uma reflexão que não pretende encerrar nada, mas abrir passagens para que possamos imaginar, juntos, um outro horizonte para as artes e para a cultura no país.
      </p>
      <p class="mb-6 font-bold">
        Segue a fala:
      </p>
      <p class="mb-6">
        Quero, mais uma vez, compartilhar e dividir algumas reflexões que venho acumulando nos últimos anos. Falo deste lugar híbrido, para mim sempre fértil: o artista, o gestor, às vezes gestor privado, às vezes gestor público, e em certos momentos até as duas coisas misturadas e, ainda, o pesquisador informal da prática, o inquieto e uma pontinha de prazer pela provocação. Talvez essa mistura me obrigue, há décadas, a olhar as políticas públicas pelo prisma da cena, da criação, da prática, do cotidiano e, claro, da política enquanto espaço de disputa e, também, de invenção.
      </p>
      <p class="mb-6">
        Começo afirmando algo simples, mas complexo, que tenho repetido nos vários textos que escrevi neste ano de 2025: precisamos reconhecer o que chamei de o COLAPSO DOS EDITAIS. Não é exagero, creio, dizer que estamos chegando ao limite de um modelo. Não se trata de negar a importância dos editais. Pelo contrário. Esse instrumento foi fundamental em muitos períodos, no processo de democratização da distribuição de recursos públicos, acabando com o “balcão” institucionalizado e, sobretudo no pós-pandemia, quando ajudou a garantir a sobrevivência de artistas, grupos, coletivos e espaços, pelas leis de emergência cultural. Mas reconhecer a importância de algo não nos impede de admitir que esse modelo, tal como está colocado, exauriu sua capacidade. Hoje ele não resolve mais o que precisa resolver. Chamo isso, nos meus textos, de a Era dos Editais, uma era em que o edital deixou de ser meio e passou a ser fim. Uma era em que transformamos uma ferramenta em objetivo final. E quando isso acontece, o instrumento começa a governar a política, e não o contrário.
      </p>
      <p class="mb-6">
        O que vemos muitas e muitas vezes país afora, seja nas capitais ou nos pequenos municípios, é um cenário que mistura correria, improviso, hiper competitividade e uma sensação crescente de esgotamento. Um esgotamento físico e mental. O processo da PNAB escancarou isso de uma forma quase pedagógica. Para dar um exemplo, em meu estado, Minas Gerais, foram mais de dezoito mil inscrições na PNAB. Para a grande maioria dos editais, menos de quatro por cento das propostas foram contempladas. De cada cem, quatro foram aprovadas. Isso não é fomento, é loteria. É escassez institucionalizada. É uma política que funciona, com muita boa vontade, para pouquíssimos e frustra a imensa maioria.
      </p>
      <p class="mb-6">
        E digo isso com muito respeito aos gestores públicos que estão tentando fazer o possível com ferramentas limitadas e, também, com enorme respeito aos pareceristas, porque conheço bem esse trabalho. Mas a verdade é que o modo como os pareceristas foram incorporados aos editais recentemente revela uma fragilidade estrutural séria. São processos pouco transparentes, critérios pouco precisos, metodologias não compartilhadas, análises feitas em isolamento, sem comissões plurais ou espaços de debate, sem uniformidade mínima. Sem falar na fase de recursos, que costuma ser pouco transparente e nas interferências superiores, que têm sido denunciadas recentemente. É um sistema que gera insegurança, ruído e desconfiança. E quando uma política pública perde a confiança do setor, ela perde quase tudo.
      </p>
      <p class="mb-6">
        O que se estabeleceu no Brasil foi uma gincana. Gincana desigual e desgastante. O poder público corre para lançar editais, avaliar editais, pagar editais, fechar planilhas. A sociedade civil corre para se inscrever no maior número possível, torcendo para que algum projeto passe. E todos nós vamos repetindo coletivamente uma maquinaria absurda que se retroalimenta e não produz acúmulo. Tudo, ou quase tudo, sem acompanhamento e avaliação de indicadores. Não sabemos o impacto dos editais. Não sabemos o que mudou, o que se fortaleceu, o que se perdeu. Não há avaliação real. Há anos vivemos um ciclo sem memória, sem crítica, sem planejamento. E, portanto, sem futuro.
      </p>
      <p class="mb-6">
        Talvez o caminho para a revisão profunda que precisamos empreender não esteja em soluções imediatas, mas na capacidade de nos aproximarmos de experiências que já operam fora da lógica da competição permanente. Não se trata de reproduzir modelos, mas, sim, de observar processos que nasceram do acompanhamento contínuo, do diálogo com artistas e territórios, da curadoria como prática cotidiana, da construção de vínculos e de planejamento que não recomeça do zero a cada ano. Temos experiências, no Brasil e fora daqui.
      </p>
      <p class="mb-6">
        A partir dessa observação, chegamos a uma conclusão: não se trata de acabar com os editais, mas de recolocá-los no lugar certo. Não como centro do universo, mas como um instrumento entre vários. Precisamos de ferramentas híbridas. Precisamos de fundos continuados, políticas plurianuais (de três, quatro, cinco anos), modelos curatoriais, redes de equipamentos, programas de manutenção, equipes qualificadas e planejamento de longo prazo. Precisamos de uma política que ofereça menos aleatoriedade e mais estrutura, menos competição e mais continuidade. E não a maratona de editais.
      </p>

      <h3 class="text-2xl font-serif font-bold text-neutral-900 mt-12 mb-6">Arte e Cultura</h3>

      <p class="mb-6">
        Gostaria ainda de sublinhar um ponto que, para mim, é importante e se relaciona ao colapso dos editais: a confusão entre arte e cultura. Tratei disto também nos meus artigos. Essa confusão produz efeitos diretos na formulação de políticas. A cultura é território dos modos coletivos de vida, é ritual, transmissão, pertencimento, identidade. A arte é linguagem, forma, invenção, ruptura, espaço de risco, de fabulação, de estranhamento. A arte nasce da ficção e da abstração, a cultura nasce das práticas compartilhadas. A cultura afirma, a arte pode desestabilizar. A cultura guarda, a arte inventa.
      </p>
      <p class="mb-6">
        Não existe hierarquia entre elas. Mas quando tratamos arte e cultura como se fossem a mesma coisa, quando pedimos que a arte cumpra funções que são próprias da cultura, ou quando submetemos processos artísticos à mesma lógica das ações comunitárias, o resultado é um modelo que sufoca a criação. Criar exige tempo, continuidade, pesquisa, espaços equipados, remuneração profissional e liberdade estética. Criar exige, sobretudo, política pública específica. E isso quase nunca aparece nos editais genéricos que misturam teatro com patrimônio, com expressões religiosas, com quadrilha, carnaval, festa de bairro e barraquinha no mesmo pacote.
      </p>
      <p class="mb-6">
        Para um país do tamanho e da complexidade do Brasil, isso é ineficaz e, ouso dizer, injusto. O decreto que refundou o Ministério da Cultura já reconhece, em seu texto, que existem duas políticas: a de cultura e a de artes. Mas seguimos agindo como se bastasse colocar tudo dentro da mesma cesta, o que não faz sentido, nem conceitual nem institucionalmente.
      </p>
      <p class="mb-6">
        Quero aproveitar este espaço para propor algo concreto: que iniciemos, com a liderança do governo federal, um processo urgente de construção coletiva de um novo paradigma para o fomento às artes e para o fomento à cultura no Brasil. Que iniciemos este “estudo e elaboração de propostas”. Precisamos sair desse ciclo exaustivo da gincana da sobrevivência e ter coragem de enfrentar temas que precisam de reinvenção.
      </p>
      <p class="mb-6">
        Precisamos rediscutir a Lei Rouanet e suas distorções. Precisamos rediscutir a implantação da PNAB, que entra agora em outro ciclo. Temos que discutir essas duas formas de fomento à cultura para não termos um mecanismo para projetos ricos e outro para projetos pobres.
      </p>
      <p class="mb-6">
        Por fim, precisamos exigir que o Estado, em todas as suas esferas, recupere sua responsabilidade de garantir infraestrutura, continuidade, acompanhamento qualificado e condições reais para que a arte e a cultura floresçam. E exige também que diferenciemos, com coragem e lucidez, o que é arte e o que é cultura, para que cada campo receba o cuidado e a política que lhe são próprios. Só assim poderemos construir um sistema de fomento plural, justo, estruturante e capaz de olhar para o futuro de forma consequente e democrática.
      </p>
      <p class="mb-6">
        Deixo aqui também, já que falei de democracia, que a cultura e a arte só podem sobreviver de forma saudável em um Estado democrático que respeita os direitos humanos e a cidadania.
      </p>
    `,
    image: "/images/alem-dos-editais.png"
  },
  {
    slug: "do-rumor-a-sintese",
    title: "Do rumor à síntese: um debate necessário - Encontro Nacional de Políticas para o Teatro",
    date: "2025-10-08",
    displayDate: "8 de outubro de 2025",
    summary: "Um relato sobre o Encontro Nacional de Políticas para o Teatro em Fortaleza: a rearticulação da sociedade civil, a construção coletiva da Carta de Fortaleza e os caminhos para políticas públicas estruturantes.",
    contentHtml: `
      <p class="mb-6">
        Neste artigo, relato meu olhar sobre o Encontro Nacional de Políticas para o Teatro, que aconteceu em Fortaleza, de 9 a 12 de setembro de 2025. É um olhar muito particular: mesmo sendo da sociedade civil, estive diretamente envolvido como organizador. O Encontro foi uma realização da Fundação Nacional de Artes - FUNARTE, que me convidou para fazer a curadoria, a coordenação metodológica e a produção por meio de minha empresa, a Andante - Gestão de Cultura, desafio que logo ganhou a adesão de Ângela Mourão.
      </p>
      <p class="mb-6">
        É importante começar agradecendo à FUNARTE pelo convite e também reconhecendo a sua ousadia. O Encontro teve uma singularidade: foi um espaço de rearticulação da sociedade civil, nascido de uma convocação pública. À primeira vista, pode soar estranho. Mas, diante da conjuntura e do tamanho da tarefa, faz sentido. Um órgão do Estado chama o campo a se organizar, propor, debater e escrever. Aceitamos o chamado e o convite e fomos trabalhar.
      </p>
      <p class="mb-6">
        Não nasceu do nada. O que fizemos se apoia numa longa trajetória de movimentos e articulações, muito qualificadas, do teatro brasileiro. Ao longo da minha vida profissional, participei de muitos deles: o Movimento Nacional de Teatro de Grupo em 1991, o Redemoinho nos anos 2000, no qual atuei como conselheiro nacional, a Rede Brasileira de Teatro de Rua, de cuja fundação participei em 2007, os Congressos de Teatro, a ATAC, que ajudei a criar em 2018, o Núcleo de Festivais, a Rede Brasileira de Festivais. Cada etapa deixou marcas, construiu instrumentos e afiou argumentos. É nessa memória coletiva que nos sustentamos para organizar o evento.
      </p>
      <p class="mb-6">
        Assim, o Encontro não começou com a chegada a Fortaleza. Começou três meses antes. Coloquei-me a campo. Fiz mais de 70 longas conversas individuais e 10 reuniões coletivas. Foi um processo de escuta e de reconhecimento de demandas e, principalmente, de posições. Grifo: foi, sobretudo, uma escuta de posições. Nesses diálogos, apareceu com evidência, o que não se queria, mais do que consensos prontos. Nomear recusas e críticas também abre horizontes.
      </p>
      <p class="mb-6">
        Com base nessa escuta, pedimos aos participantes, por escrito, uma breve apresentação de sua organização ou do momento político de seu território e também dois pontos, explicados em um ou dois parágrafos, que cada um considerasse fundamentais para constar de um possível documento final. Recebemos 35 contribuições formais. Sistematizamos, dividimos em eixos e, na proposta metodológica, organizamos o trabalho em três grupos. Desse material nasceram 18 pontos, redigidos como proposição inicial, repassados aos participantes antes de chegarmos a Fortaleza. São vozes do processo, que orientaram o debate e serviram de guia para os dias seguintes.
      </p>
      <p class="mb-6">
        A composição foi representativa e plural. Estabelecemos uma lista diversa de 26 organizações nacionais, estaduais e locais entre associações, conselhos, federações, redes, movimentos, sindicatos e coletivos. Mas não foi um encontro apenas de entidades. Somaram-se artistas, produtores, técnicos, críticos e pessoas com história na militância por políticas públicas para o teatro, incluindo diversas formas de produção e buscando contemplar vários setores da rede produtiva do teatro feito no Brasil. Havia quem estivesse ligado a organizações e quem não estivesse ali representando sigla alguma, mas a própria caminhada. Esse encontro de representações e trajetórias pessoais fez diferença.
      </p>
      <p class="mb-6">
        Houve uma “curadoria”, sim. Eu a assumi. Era um recorte. Fosse outro organizador, seriam outras escolhas e outro Encontro. Aceitei a tarefa por entender que minha trajetória me dá legitimidade para conduzir e responder por um método. Com o Encontro em curso, a curadoria se diluiu no coletivo. Era essa a intenção: criar um trilho e, nele, abrir espaço para o conjunto andar.
      </p>
      <p class="mb-6">
        Em Fortaleza, a sala reuniu 80 participantes presenciais, vindos de todos os 26 estados e do Distrito Federal. Entramos com material preparado, a sala se apresentou e, a partir daí, mergulhamos no debate em três grupos, com tempos para sistematizações e plenárias. O que se escrevia era sempre confrontado pelo todo. O que se propunha pedia texto que pudesse ser entendido por quem não estava ali.
      </p>
      <p class="mb-6">
        As dificuldades existiram e importam. O processo de convite gerou ruídos. Houve falhas pontuais. Tratamos disso como parte do procedimento. Quem busca síntese política aceita o desconforto e trabalha a favor do resultado.
      </p>
      <p class="mb-6">
        Quando começamos a pensar a organização deste Encontro, partimos de uma premissa que foi inteiramente constatada ao longo do processo. O setor do teatro não estava desarticulado. Ele estava, na verdade, exausto. Cansado por esperar durante muitos e muitos anos por políticas públicas que fossem de fato robustas e estruturantes. A expectativa criada em relação aos governnos sempre foi muito maior do que o que foi apresentado e ofertado por eles. Nesse contexto, a sobrevivência dos projetos artísticos exige um nível tão grande de trabalho e dedicação que a simples existência deles já dá sinais precisos de uma imensa articulação. Fica evidente que o poder público precisa estar mais próximo e mais ativo, buscando soluções realmente inovadoras que estabeleçam uma conexão mais direta com o setor.
      </p>
      <p class="mb-6">
        Como desdobramento imediato do Encontro, a FUNARTE, a Secretaria da Cultura do Ceará e a Secretaria Municipal da Cultura de Fortaleza assinaram um protocolo de intenções que formaliza uma pactuação entre União, Estado e Município. O texto afirma a prioridade do trabalho continuado de grupos e coletivos, indica alinhamento de programas e instrumentos à Política Nacional Aldir Blanc e cria base para cooperação em continuidade, circulação e condições de trabalho. Não é um gesto apenas simbólico. É um compromisso público que dá lastro para as próximas etapas e para outros territórios. A FUNARTE instituiu ainda um grupo de trabalho composto por participantes do Encontro, com a tarefa de assessorar a própria Fundação na formulação e no acompanhamento de políticas públicas para o teatro, bem como na implementação da Política Nacional das Artes no que toca ao campo teatral.
      </p>
      <p class="mb-6">
        Ao final dos dias presenciais e depois de longas reuniões virtuais, apresentamos a Carta de Fortaleza. Ela registra as vozes que estiveram na construção. Está disponível no site do Observatório dos Festivais (<a href="https://festivais.org.br" target="_blank" class="underline hover:text-terracotta-800">festivais.org.br</a>).
      </p>
      <p class="mb-6">
        É um documento de trabalho, não um enfeite. Pretende orientar escolhas, cronogramas e responsabilidades. Reúne o que o conjunto pôde pactuar e o converte em instrumento operativo. Não apenas registra consensos possíveis; organiza a escuta em uma síntese política capaz de orientar decisões. Explicita problemas, critérios e prioridades, transforma enunciados em diretrizes e cria um vocabulário comum entre diferentes territórios, funções e linguagens. Ao fazê-lo, oferece uma base de negociação entre o setor do teatro no Brasil e o poder público, um quadro de referência para escolhas orçamentárias e um roteiro para sair da retórica para o campo das decisões.
      </p>
      <p class="mb-6">
        Com mais de cinquenta páginas, a Carta de Fortaleza apresenta um mapa do campo e uma arquitetura de ação: fomento continuado, circulação, espaços e equipamentos, formação, condições de trabalho, memória e documentação, diversidade e acessibilidade, governança e participação social. Nomeia problemas, justifica prioridades, sugere caminhos, distribui responsabilidades e indica a necessidade de calendários e critérios de avaliação. Foi escrita para ser usada, corrigida e ampliada pelo próprio setor e pelas gestões com as quais dialoga. A partir deela, cada eixo deve detalhar programas, parâmetros mínimos e prazos, definir responsáveis, pactuar mecanismos de acompanhamento e prever revisões periódicas. O objetivo é que o texto respire no cotidiano das políticas, ajuste rota quando necessário e sustente ações continuadas que façam diferença onde a vida do teatro acontece.
      </p>
      <p class="mb-6">
        Nos últimos meses, escrevi textos que ajudam a iluminar o contexto em que estamos: sobre o colapso dos editais e sobre a necessária distinção entre arte e cultura. Não foram temas centrais do Encontro, mas atravessaram conversas e prepararam terreno.
      </p>
      <p class="mb-6">
        Na minha fala de abertura, homenageei Reinaldo Maia. Ator, dramaturgo, diretor, fundador do Grupo Folias d’Arte na década de 1990 em São Paulo e participante do Manifesto Arte Contra a Barbárie em 1999, Reinaldo foi referência decisiva nas articulações do nosso teatro. Aprendi com ele sobre política e sobre a força da organização coletiva. Partiu cedo, em 2009, de forma repentina. Era duro e doce. Deixou marcas profundas. E, numa lembrança muito minha, o ouvi muitas vezes defender que “organização é paciência com método”: trouxe sua memória como inspiração e agradecimento.
      </p>
      <p class="mb-6">
        O Encontro chamou para si a responsabilidade histórica de um momento conturbado. Contribui para que o teatro brasileiro se reorganize nacionalmente e reencontre formas de articulação com o Estado nas esferas federal, estadual e municipal. Pede uma agenda política mais precisa e instrumentos que resistam às sazonalidades governamentais.
      </p>
      <p class="mb-6">
        Ao observar a riqueza dos debates, noto também um desafio que persiste para além do Encontro. Creio que a importância política de se unificar as várias formas de fazer teatro ainda precisa ser mais bem assimilada pelo conjunto do setor. Reunir em um mesmo projeto político artistas independentes, grupos e coletivos, técnicos, dramaturgos, produtores, gestores, realizadores de pequenos, médios e grandes festivais, redes, fóruns e movimentos organizados, sindicatos, federações, críticos, pesquisadores e representantes de teatros distintos e segmentados, transcende a simples necessidade de diálogo. É uma tomada de posição estratégica. Um campo que se apresenta ao poder público de forma pulverizada, com cada segmento defendendo seus próprios interesses, legítimos, porém isolados, corre o risco de ser atendido de forma igualmente pontual e precária. A unificação, portanto, não significa apagar as diferenças que nos constituem. Significa, antes, compreender que a sustentabilidade de cada parte, da menor à maior, do norte ao sul, do centro à periferia depende da saúde, da articulação e da força política do todo.
      </p>
      <p class="mb-6">
        E encerro agradecendo novamente à FUNARTE pelo convite e pela ousadia dessa convocação, bem como a todos os interlocutores que sustentaram e contribuíram nesse processo. Agradeço às pessoas que estiveram presentes e que, com paciência, escuta, dedicação, militância e alegria, foram correalizadoras do Encontro. A Carta de Fortaleza organiza, em prólogo, atos e cenas, o que deve ser princípios, frentes de trabalho e prioridades. O que pactuamos exige decisão, calendário, orçamento, responsáveis e acompanhamento público.
      </p>
      <p class="mb-6 font-bold">
        Encerramos o encontro! <br>
        Agora, o documento precisa viver no mundo real.
      </p>
    `,
    image: "/images/encontro-nacional.jpg"
  },
  {
    slug: "para-alem-dos-editais",
    title: "Para Além dos Editais: A Necessidade da Arte",
    date: "2025-07-15",
    displayDate: "15 de julho de 2025",
    summary: "Uma reflexão sobre a necessária distinção entre cultura e arte nas políticas públicas, inspirada na obra de Ernst Fischer, e como essa diferenciação é crucial para o fomento adequado às artes.",
    contentHtml: `
      <h4 class="text-xl font-serif text-stone-600 mb-8 italic">A necessária distinção entre cultura e arte nas políticas públicas</h4>

      <p class="mb-6">
        Quando fiz o curso de Sociologia na FAFICH – UFMG, e isso tem muitos… muitos anos, tive acesso ao livro <em>A Necessidade da Arte</em>, de Ernst Fischer. Sem menosprezar o conteúdo, denso e corajoso, escrito num tempo em que a arte ainda era vista como motor de transformação e não como apêndice decorativo das políticas sociais, o que mais me marcou foi o próprio título. Foi a força silenciosa da pergunta embutida no nome que me seguiu até hoje. Àquela altura, eu já ensaiava minhas primeiras aventuras como artista e profissional do teatro e do circo, paralelamente ao curso universitário. E desde então, entre palcos, praças, editais e desmontes, nunca parei de me perguntar ou de ter que responder, afinal: qual é a necessidade da arte?
      </p>
      <p class="mb-6">
        O livro me marcou porque tratava a arte não como ornamento, nem como luxo ou privilégio, mas como algo fundamental à experiência humana. Fischer afirmava que a arte nasce da própria condição de inacabamento do ser humano: ela seria um modo de tornar o mundo habitável, ao mesmo tempo em que revela sua imperfeição. Uma forma de reencantar o cotidiano sem negá-lo, de denunciar a alienação sem abrir mão da beleza, de resistir à barbárie com imaginação. A arte, para ele, é necessária porque reconecta o ser humano consigo mesmo, com o outro e com a possibilidade de um mundo diferente. Não como fuga, mas como presença ampliada. Não como produto, mas como linguagem. Essa visão, que me arrebatou ainda jovem, continua me acompanhando sempre que vejo a arte ser tratada como “ação cultural”, genérica, mensurável, domesticada, nos documentos e planos de fomento do Estado. De lá para cá, é certo que o pensamento acadêmico sobre cultura avançou muito. Mas eu, artista e gestor, segui por outro caminho. Acompanhei esses avanços acadêmicos à distância, atento mais às praças e aos palcos do que às bibliotecas, mas sempre com essa pergunta, que nunca deixou de me convocar: qual é, afinal, a necessidade da arte?
      </p>
      <p class="mb-6">
        É preciso, antes de tudo, marcar uma diferença fundamental, muitas vezes esquecida de modo geral e, sobretudo, no campo das políticas públicas, entre arte e cultura. Embora compartilhem territórios, se interseccionem e, em muitos casos, se confundam, o que é próprio da complexidade contemporânea, são campos distintos. A cultura diz respeito aos modos coletivos de viver, aos saberes compartilhados, aos rituais, às práticas que constroem vínculos e estruturam a memória e o pertencimento. A arte, mesmo quando nasce da cultura, opera em outra lógica: a da invenção, da forma e da linguagem. Não se limita a reproduzir o que já é, mas se lança na criação do que ainda não foi. Enquanto a cultura tende à permanência e à transmissão, a arte se inclina para a ruptura, para a descontinuidade e para a reinvenção. A cultura afirma identidades; a arte pode desestabilizá-las. Reconhecer essa diferença não significa opor nem hierarquizar. Significa compreender que arte e cultura têm funções simbólicas, modos de existência, de fruição, de formação e de transmissão distintos e, por isso, demandam políticas públicas também diferenciadas. Quando essa distinção é apagada, corremos o risco de exigir da arte aquilo que ela não pode, nem deve, oferecer, reduzindo-a a uma ferramenta auxiliar de mediação cultural ou a uma forma uniformizada de intervenção social.
      </p>
      <p class="mb-6">
        A questão é que boa parte das políticas públicas hoje insiste em tratar arte e cultura como se fossem expressões equivalentes, intercambiáveis, confundidas. A arte, assim, é convocada a se ajustar à mesma lógica que orienta ações culturais comunitárias ou patrimoniais: presença territorial obrigatória, função social explícita, impacto mensurável, engajamento direto. Ela passa a ser vista como ferramenta, estratégia ou suporte pedagógico. Nesse processo, perde sua condição mais profunda: a de ser um fim em si mesma. A arte não serve, e é justamente por isso que ela é necessária. Não responde a metas nem se submete a objetivos externos. Sua existência não se justifica por tabelas ou contrapartidas. A arte basta no gesto que a inicia, no movimento que rompe o previsível, no acontecimento que suspende o real e abre um campo outro de experiência. Seu valor está justamente no que escapa, e isso nem sempre pode ser planejado.
      </p>
      <p class="mb-6">
        Quando voltamos o olhar para a arte como ofício profissional, a diferença em relação à cultura torna-se ainda mais nítida. O artista, formado em escolas, universidades, conservatórios ou em longos percursos de aprendizagem não formal (mestres de tradição, grupos de pesquisa, laboratórios coletivos, vivências de palco e de rua), trabalha com elementos que escapam à lógica utilitária: ficção e abstração. É na elaboração consciente da ficção que a arte desenha mundos outros; é na força da abstração que ela modela formas capazes de condensar e expandir sentidos. Essa combinatória exige tempo, rigor técnico, pesquisa continuada e espaços de risco. Muitas vezes requer também infraestrutura específica, como salas de ensaio equipadas, ateliers, estúdios de gravação, sistemas de iluminação cênica ou acervos digitais, custos que tornam ainda mais difícil a sustentabilidade de coletivos e artistas individuais. Políticas públicas que tratam a arte como simples extensão cultural raramente alcançam tais necessidades: financiam a visibilidade, mas não sustentam o processo; pagam o produto final, mas não investem na formação permanente, na pesquisa de linguagem, na manutenção de grupos. Se reconhecermos que a arte profissional opera num território onde a invenção formal, o pensamento abstrato e a fabulação consciente são ferramentas essenciais, então o fomento precisa acolher essa especificidade. Esse princípio reforça a noção de que políticas públicas para as artes devem contemplar não só o resultado final, mas todo o ecossistema que sustenta a pesquisa estética, o aprimoramento técnico e a densidade ética que um ou uma artista pode oferecer à sociedade. Caso contrário, o país continuará confundindo arte com entretenimento ocasional ou com ação sociocultural genérica, deixando órfão justamente o lugar onde a linguagem se reinventa e onde a sociedade pode se ver, em ficção, para imaginar-se de outro modo.
      </p>
      <p class="mb-6">
        Falo a partir de uma experiência direta e engajada no que se convencionou chamar de teatro de grupo. Desde meados da década de 1980 mergulhei nesse universo que se organiza pela coletividade, pela partilha dos processos e pela busca de autonomia estética e política. Naquele período, estendido pelos anos 1990, a articulação entre companhias, coletivos e movimentos foi intensa: festivais independentes, circuitos alternativos, encontros nacionais, manifestos e pesquisas acadêmicas; tudo convergia para fortalecer um segmento que entendia o palco como lugar de criação e de debate público. Havia, nessa militância, uma tríade que orientava a prática: estética, técnica e ética. A estética apontava para a invenção de linguagens próprias, fruto de pesquisa continuada e diálogo com o público; a técnica, entendida não como formalismo vazio, mas como domínio rigoroso dos meios expressivos, garantia a concretude do gesto criativo; a ética, por fim, ligava criação e postura de grupo a um compromisso com a coletividade, com o sentido de comunidade e com a crítica às estruturas de poder que cercam o fazer artístico. Estudos sobre o teatro brasileiro desse período registram como essa tríade forjou obras que, ao mesmo tempo, experimentavam formas e propunham novos modos de organização do trabalho e de relação com a sociedade.
      </p>
      <p class="mb-6">
        Experiências internacionais mostram que diversos países distinguem, com nitidez e sem hierarquias, os instrumentos de apoio à criação artística daqueles voltados à cultura em sentido amplo. Esses modelos reforçam a ideia central deste texto. Demandas diferentes requerem políticas específicas, e arte e cultura cumprem funções públicas complementares. No Brasil, o próprio ato de refundação do Ministério da Cultura, Decreto 11.336 de 1º de janeiro de 2023, já aponta nessa direção, ao estabelecer como competência do órgão “a política nacional de cultura e a política nacional das artes”, sinalizando que cada campo merece abordagem própria. É importante lembrar que o país já possui uma fundação específica para as artes, a Funarte; contudo, suas atribuições cobrem apenas parte do ecossistema artístico, enquanto outras instâncias federais também executam programas para diferentes linguagens. Nos níveis estaduais e municipais, frequentemente existe apenas uma secretaria ou fundação encarregada de tudo ao mesmo tempo: patrimônio, economia criativa, cultura popular e também as artes profissionais, o que dilui a atenção às especificidades de cada campo. Em maio de 2025, o Ministério apresentou uma proposta de Política Nacional das Artes, coordenada pela Funarte, retomando o processo iniciado em 2015 e interrompido pelo impeachment da presidenta Dilma; à época, atuei como consultor e articulador da linguagem do teatro. A nova proposta está em debate público e pretendo fazer algumas considerações a respeito em outro texto. Aqui, interessa sublinhar o que tanto o decreto de 2023 quanto a proposta de 2025 reafirmam. É preciso traçar com nitidez a diferença entre arte e cultura e implantar políticas diferenciadas que contemplem as especificidades de cada uma.
      </p>
      <p class="mb-6">
        A Política Nacional Aldir Blanc de Fomento à Cultura (PNAB) trouxe fôlego inédito ao financiamento cultural brasileiro. A União entrega, a cada ano, parcela única de até R$ 3 bilhões a Estados, Distrito Federal e Municípios, num ciclo plurianual. O desenho federativo impõe contrapartidas importantes — por exemplo, plano de ação local, manutenção do orçamento próprio de cultura e meta de destinar pelo menos 20% dos recursos a territórios periféricos e comunidades tradicionais, além de percentuais mínimos para o Programa Cultura Viva. Esses avanços consolidam uma infraestrutura de fomento cultural continuado, mas, tal como está, a PNAB, no seu plano geral, não diferencia as especificidades da criação artística profissional: a lei agrupa “ações, iniciativas, atividades e projetos culturais” em um único guarda-chuva, de modo que o mesmo edital local, muitas vezes, pode alocar recursos tanto para patrimônio e festas populares quanto para fazedores das linguagens artísticas. A consequência, confirmada nos primeiros editais, é a permanência do modelo concorrencial genérico, em que arte e cultura disputam o mesmo envelope financeiro, sem linhas dedicadas às questões específicas das artes, como a infraestrutura necessária para se fazer arte profissional. Assim, mesmo sendo um marco para as políticas culturais, a PNAB deixa em aberto o desafio central deste artigo: traçar com nitidez a diferença entre cultura e arte e implantar instrumentos de fomento específicos para cada campo nos Municípios e nos Estados, com a necessária coordenação da esfera federal.
      </p>
      <p class="mb-6">
        Há, é verdade, um sinal de mudança que merece atenção. Em junho de 2025, o Ministério da Cultura lançou o Programa Nacional Aldir Blanc de Apoio a Ações Continuadas, concebido para ir além dos editais esporádicos. A proposta reconhece que a sazonalidade e o caráter fragmentado dos projetos pontuais precarizam artistas, grupos, coletivos e espaços de criação. O programa acena com apoio plurianual — inicialmente de, no mínimo, dois anos, período ainda muito modesto para processos artísticos — a coletivos, espaços culturais e eventos permanentes, valorizando trajetórias de longa duração e repertórios contínuos. Ainda assim, o alcance real dessa iniciativa dependerá de como os Estados a implantarão, do volume de recursos efetivamente destinado e da capacidade de avaliar percursos criativos para além de indicadores genéricos. Em outras palavras, a intenção é promissora, mas seu impacto só se confirmará se as esferas governamentais assumirem, na prática, que a arte não cabe em cronogramas de curto prazo e exige ferramentas e instrumentos específicos.
      </p>
      <p class="mb-6">
        Hoje, persiste entre poder público e sociedade civil, incluindo parte dos fazedores de cultura e das artes, uma confusão que trata arte e cultura como se fossem peças intercambiáveis de um mesmo mecanismo sociocultural. Esse embaralhamento é danoso: amortece o pensamento crítico, submete a criação a métricas externas e bloqueia o alcance de políticas que deveriam sustentar justamente quem pesquisa, arrisca e reinventa linguagem. Quando arte e cultura são lançadas no mesmo cesto de obrigações genéricas, perdem a nitidez de suas funções complementares e o país desperdiça potência simbólica. Reconhecer a diferença não significa dividir um orçamento já escasso; significa multiplicar a eficácia de cada real investido. Cabe ao Estado criar instrumentos que garantam a autonomia da arte, e à sociedade civil — fazedores de cultura e das artes, gestores e público — defender esse espaço como direito inegociável. Só assim a arte continuará perguntando e a cultura seguirá respondendo, cada qual em seu lugar, ambos essenciais para a democracia que ainda estamos construindo. Se até o decreto que refundou o Ministério e lhe atribuiu duas competências, “política nacional de cultura” e “política nacional das artes”, já admite nas entrelinhas que estamos falando de campos diferentes, por que não levar a letra da lei às últimas consequências?
      </p>
      <p class="mb-6">
        Fica a sugestão, entre um sorriso e a esperança de precisão: que tal mandarmos fundir uma placa nova para a Esplanada com o título “Ministério da Cultura e das Artes”?
      </p>
    `,
    image: "/images/ernst-fischer.jpg"
  },
  {
    slug: "colapso-e-ineficiencia",
    title: "Ainda sobre o colapso dos editais: Da Ineficiência à APROXIMAÇÃO de Novos Modelos",
    date: "2025-05-22",
    displayDate: "22 de maio de 2025",
    summary: "Uma reflexão sobre a necessidade de aproximar o olhar de experiências que já operam fora da lógica perversa e predatória dos editais, como o Palco Giratório e o SESC SP.",
    contentHtml: `
      <p class="mb-6">
        Quando escrevi sobre o que chamei de Colapso dos Editais, muita gente me cobrou – com aquela pressa típica de uma lógica da qual estou tentando me afastar – que minha "crítica" aos editais, como única ferramenta de fomento, só teria serventia se eu apresentasse propostas concretas de alternativa ao modelo.
      </p>
      <p class="mb-6">
        Como disse no texto: "Neste momento, não desejo – e nem tenho condições – de apresentar soluções". Acredito que um debate sério precisa de estrutura e construção coletiva. Assim, para começar a pensar em alternativas de verdade viáveis, precisamos antes aproximar o olhar de experiências que já operam fora da lógica perversa e predatória dos editais.
      </p>
      <p class="mb-6">
        A estratégia para mim é essa APROXIMAÇÃO. Afinar os instrumentos, com muita escuta e afinação coletiva, antes de sair tocando qualquer melodia supostamente salvadora. Gostaria de ser explícito sobre o recorte que farei aqui neste texto: vou descrever duas experiências em uma área específica, com características muito particulares: a circulação/exibição/programação do que agora chamamos “artes vivas” (teatro, dança, circo, música). Acredito que a construção coletiva de alternativas às "gincanas" dos editais, muito potencializadas pela Lei Paulo Gustavo e pela Política Nacional Aldir Blanc, passa por aprofundar exatamente as especificidades de diversas áreas, de variadas linguagens específicas. Não existe uma forma mágica que resolva tudo para todos e todas. Precisamos olhar com atenção para alguns modelos que já existem.
      </p>
      <p class="mb-6">
        Mas antes de adentrar na exposição destes processos, queria começar esta conversa compartilhando uma história, dessas que a gente guarda e remoe. Aconteceu no ano passado, em 2024. Um grupo de artistas de outro estado – sou de Minas – parceiros de profissão e de militância por políticas públicas para as artes há anos – me convidou para assistir a um espetáculo deles que iria se apresentar em Belo Horizonte. Aceitei, com aquele prazer genuíno que vem da amizade e da confiança no trabalho artístico de quem a gente admira. Adianto logo: minha alegria de ir se confirmou. O espetáculo era bom, potente, e o encontro com os amigos foi muito prazeroso.
      </p>
      <p class="mb-6">
        Mas, quero contar a segunda parte, e faço questão de isentar/inocentar meus amigos de qualquer responsabilidade nesta situação geral. Na plateia, éramos somente cinco pessoas. CINCO PESSOAS. Fiz depois uma daquelas "contas de padeiro", puramente ilustrativas e jamais para precificar um espectador: eles saíram de suas cidades, um dia antes, passaram o dia montando e ensaiando, apresentaram para nós, as cinco pessoas e voltariam no dia seguinte para suas cidades bem distantes de Belo Horizonte. Fizeram uma só apresentação para um público ínfimo. Tentei calcular o custo aproximado daquela operação: equipe de sete pessoas, passagens aéreas, transporte local, alimentação, hospedagem, aluguel do teatro, cachês, divulgação... Chutando uns trinta mil reais para aquela única noite. Me senti um espectador "caríssimo", valendo, naquela matemática estranha, seis mil reais. Óbvio que isso é só uma figura de linguagem; o valor de um espectador, de uma experiência artística, é imensurável. Mas a situação grita!
      </p>
      <p class="mb-6">
        O fato é que esses amigos estavam ali porque ganharam um edital em seu estado para fazer uma circulação. Eles estavam cumprindo o objetivo do edital. Mas, convenhamos: algo muito sério está errado aqui! E o problema, insisto, não está neles ou no espetáculo e nem diretamente em quem lançou este edital. O problema está na lógica deste sistema.
      </p>
      <p class="mb-6">
        É a lógica do edital como instrumento único que nos leva a essas situações bizarras, ineficientes e, no fundo, desrespeitosas com o trabalho artístico. A gente se inscreveu em uma gincana de sobrevivência, e o que vemos são, algumas vezes, projetos de circulação que se movem para plateias vazias, cumprindo planilhas e não o objetivo maior de conectar arte e público.
      </p>
      <p class="mb-6">
        Minha primeira aproximação, então, será olhar para duas experiências que conheço na circulação e programação das artes vivas e que se baseiam fortemente na curadoria, distanciando-se dessa dinâmica competitiva e pontual dos editais tradicionais: o Projeto Palco Giratório do Departamento Nacional do SESC e a forma como o SESC São Paulo constrói sua vasta programação de artes da cena e música em suas unidades. O que podemos aprender com a lógica de curadoria deles?
      </p>
      <p class="mb-6">
        Certamente nenhuma novidade para muitos, mas entendo importante, explicitar o processo para organizar o debate. Importante aproximarmos de experiências interessantes.
      </p>

      <h3 class="text-2xl font-serif font-bold text-neutral-900 mt-12 mb-6">SESC NACIONAL: PALCO GIRATÓRIO E A CURADORIA DE CIRCULAÇÃO NACIONAL</h3>
      <p class="mb-6">
        Criado em 1998, o Palco Giratório é, para mim, o mais importante projeto de circulação de artes cênicas (teatro, dança, circo) do Brasil. Sua missão é promover o intercâmbio artístico e cultural entre as diversas regiões do país, descentralizar o acesso à produção cênica e estimular a formação de público e artistas. O projeto não opera por meio de um edital aberto e competitivo para a seleção das obras que integrarão a circulação nacional. Pelo contrário, sua estrutura se baseia em um processo contínuo e colaborativo de curadoria coletiva e articulação institucional.
      </p>
      <p class="mb-6">
        A curadoria do Palco Giratório envolve uma equipe do Departamento Nacional do SESC, frequentemente em diálogo e recebendo proposições e indicações dos Departamentos Regionais (os Sescs em cada estado). Os Departamentos Regionais, por sua vez, possuem suas próprias programações e equipes que acompanham a produção artística local e regional ao longo do ano. São essas equipes regionais, em contato direto com artistas e coletivos de seus territórios, que sugerem espetáculos com potencial para integrar o circuito nacional.
      </p>
      <p class="mb-6">
        A seleção final dos espetáculos que compõem o Palco Giratório em determinado ano considera uma série de critérios curatoriais que visam garantir a diversidade:
      </p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Diversidade Geográfica:</strong> Representatividade de artistas e estéticas de diferentes estados e regiões do Brasil.</li>
        <li><strong>Diversidade de Linguagens:</strong> Contemplando teatro, dança e circo em suas variadas formas.</li>
        <li><strong>Diversidade Estética e Temática:</strong> Abordando diferentes poéticas, formatos e temas relevantes.</li>
        <li><strong>Potencial de Circulação:</strong> Adequação técnica e logística para itinerar por diferentes espaços e contextos.</li>
        <li><strong>Relevância Artística:</strong> Qualidade estética, originalidade e impacto das obras.</li>
      </ul>
      <p class="mb-6">
        Portanto, o processo curatorial do Palco Giratório é menos sobre "inscrever um projeto" em uma competição e mais sobre ser identificado, acompanhado e proposto pelas equipes técnicas e curatoriais do SESC, em um fluxo que começa nas unidades regionais e culmina na seleção nacional numa reunião presencial de todos os agentes dos Sescs regionais. Esse modelo permite ao SESC Nacional construir uma "vitrine" da produção cênica brasileira, planejada com antecedência e que garante condições profissionais (cachês, transporte, hospedagem, suporte técnico) para as companhias em circulação, algo dificilmente assegurado nos editais pontuais, criticados por mim por sua insistente imprevisibilidade e valores muitas vezes insuficientes.
      </p>

      <h3 class="text-2xl font-serif font-bold text-neutral-900 mt-12 mb-6">SESC SÃO PAULO: PROGRAMAÇÃO EM TODO ESTADO DE SÃO PAULO</h3>
      <p class="mb-6">
        Saindo do circuito nacional do Palco Giratório, mas ainda nessa trilha da curadoria que aponta caminhos para fora da lógica dos editais, vamos "aterrissar" em São Paulo e olhar para a "máquina" de programação das unidades do SESC no estado. O SESC São Paulo é, sem dúvida, um caso à parte no Brasil e, talvez, no mundo, pela escala, qualidade e diversidade de sua programação cultural espalhada por mais de quarenta unidades pela capital e interior. Diferente do Palco Giratório, que é um projeto anual de circulação de artes cênicas, a programação do SESC SP, incluindo música e artes da cena (teatro, dança, circo, performance), além de várias outras linguagens, é contínua, pulsando o ano inteiro em seus teatros, auditórios, áreas de convivência etc.
      </p>
      <p class="mb-6">
        Como essa programação gigante, que envolve tantos artistas, linguagens e unidades, é montada? Quem escolhe o quê vai ser apresentado, quando e onde? A resposta curta, e que nos interessa aqui, é: pela curadoria e pelo relacionamento.
      </p>
      <p class="mb-6">
        Não é por meio de um "editalzão" público único, onde milhares de artistas e grupos submetem projetos para serem ranqueados por pareceristas desconhecidos. O modelo de programação do SESC SP é um processo orgânico, que mistura uma visão mais ampla, com uma autonomia fundamental das equipes que estão no chão de cada unidade e dialogam constantemente com a cena artística.
      </p>
      <p class="mb-6">
        Existem equipes de programação e curadores no SESC SP – muitas vezes especializados por linguagem ou área de atuação – cujo trabalho principal é acompanhar a produção artística, acompanhar festivais nacionais e internacionais, assistir, escutar, pesquisar e dialogar. A seleção dos shows de música, dos espetáculos de teatro, dança e circo, das temporadas que ocupam os espaços, acontece na esmagadora maioria das vezes por convite direto ou proposição interna dessas equipes. Eles identificam trabalhos relevantes, artistas em ascensão ou consagrados com propostas interessantes, obras que se encaixam nas linhas curatoriais que estão sendo pensadas para as unidades. Eles propõem esses artistas e trabalhos para integrar a programação negociando, diretamente, cachês e condições de apresentação.
      </p>
      <p class="mb-6">
        Claro que pode haver uma ou outra chamada pontual para ocupação de espaços específicos ou projetos com formatos diferenciados, mas o grosso da programação de música e artes cênicas não passa por um processo de inscrição em edital aberto e competição por pontos. É um trabalho ativo de prospecção, relacionamento e planejamento curatorial.
      </p>
      <p class="mb-6">
        E o que esse jeito de programar permite, que a lógica dos editais tanto dificulta e que vivenciamos na história que contei?
      </p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Continuidade e Fluxo:</strong> A programação acontece sem parar, permitindo um planejamento de médio e longo prazo, a construção de "temporadas", "ciclos" ou "linhas" de programação que dialogam entre si, em vez de eventos isolados e esporádicos ditados pelos ciclos incertos dos editais.</li>
        <li><strong>Relacionamento e Acompanhamento:</strong> As equipes criam relações de confiança com artistas e grupos ao longo do tempo. Isso permite não só convidar para apresentações, mas também, em muitos casos, apoiar processos criativos, residências, encomendas de novas obras. É uma relação mais parceira do que a meramente burocrática e pontual do edital.</li>
        <li><strong>Qualidade e Coerência Curatorial:</strong> Com equipes dedicadas e com olhar qualificado, é possível construir programações com uma identidade curatorial clara, que arriscam, que trazem diversidade estética, que dialogam com temas contemporâneos, e que não são apenas a soma aleatória de projetos que "pontuaram" bem em uma ficha de avaliação.</li>
        <li><strong>Profissionalização e Remuneração Digna:</strong> Ao convidar e negociar diretamente, o SESC estabelece contratos e cachês que, na média, são muito mais dignos e condizentes com o valor do trabalho artístico do que os valores muitas vezes aviltantes, ou até superfaturados em raros casos, de alguns projetos aprovados em editais.</li>
        <li><strong>Flexibilidade e Agilidade:</strong> Embora haja planejamento, a curadoria permite uma capacidade maior de reação e adaptação para incluir algo relevante que surgiu de última hora, algo que a rigidez dos editais dificulta enormemente.</li>
        <li><strong>Formação de Público:</strong> Uma programação contínua, diversa e de qualidade, aliada a projetos educativos e de mediação, é fundamental para construir e fidelizar público, algo que apresentações isoladas e mal divulgadas (como a dos meus amigos) não conseguem fazer.</li>
      </ul>
      <p class="mb-6">
        Olha só a diferença brutal: em vez da imprevisibilidade e da competição exaustiva dos editais públicos, onde o artista gasta energia concorrendo e muitas vezes recebe valores irrisórios para uma apresentação pontual (cumprindo tabela para o edital, mas com baixo impacto real), o modelo do SESC SP aposta em um fluxo contínuo, em um olhar curatorial ativo, em um relacionamento de longo prazo e na garantia de condições profissionais para a realização da arte.
      </p>
      <p class="mb-6">
        Este modelo, com sua escala e capilaridade, mostra como é possível construir uma programação cultural rica, diversa e, sim, profissionalizante, quando a curadoria, o planejamento e o relacionamento com o campo artístico são colocados no centro da política cultural, e não a "gincana" burocrática e cega dos editais.
      </p>

      <h3 class="text-2xl font-serif font-bold text-neutral-900 mt-12 mb-6">CONSIDERAÇÕES SOBRE OS MODELOS E A INFRAESTRUTURA</h3>
      <p class="mb-6">
        Evidente que estes dois processos [referindo-se ao Palco Giratório e à programação do SESC SP] certamente não são perfeitos e, certamente, devem ser afeitos a muitas críticas e devem enfrentar muitos desafios internos. Eu também não quero aqui fazer “propaganda” deles. E são experiências no campo da atuação privada, não no campo público. Mas acho importante estudarmos as iniciativas que conseguiram sair desta amarra de edital para tudo, para todos e para todas. São subsídios para pensarmos em saídas mais complexas e mais efetivas.
      </p>
      <p class="mb-6">
        Estes são projetos, processos que trabalham especificamente na circulação de obras e projetos artísticos no campo das artes da cena e da música. E como tenho dito, enquanto não separarmos processos artísticos de processos culturais, estaremos sempre tratando coisas diferentes como se fossem iguais.
      </p>
      <p class="mb-6">
        Mas para que modelos baseados em curadoria, planejamento e relacionamento, como os do SESC, ganhem escala e sustentabilidade no campo público, a conversa não pode parar apenas no método de seleção. É fundamental adicionar a dimensão da infraestrutura. O alcance e a potencialidade do Palco Giratório, por exemplo, só são plenamente possíveis porque existe uma rede de equipamentos SESC pelo Brasil, com estrutura mínima para receber os espetáculos. Da mesma forma, a programação contínua do SESC São Paulo vive da força de suas inúmeras unidades, de seus teatros, auditórios e espaços aparelhados. Sem um investimento vultuoso do fomento em manutenção e criação de infraestrutura adequada para apresentações – desde o básico no pequeno município até grandes teatros – continuaremos a ver o sucateamento dos equipamentos públicos (e até privados) e a ter a arte sem lugar digno para acontecer e circular.
      </p>
      <p class="mb-6">
        É preciso que as três esferas de governo – municipal, estadual e federal – ganhem a capacidade de pensar a circulação de obras e projetos artísticos fora desta formatação de editais, o que inclui repensar a própria forma de acesso e ocupação dos espaços públicos já existentes, que muitas vezes, também se dá por editais engessados e ineficientes, nos quais a responsabilidade pelo chamamento do público é entregue aos agentes culturais daquele projeto, que muitas vezes chegam na véspera, sem nenhum vínculo com aquela cidade. Não se trata de um caminho fácil, é trabalhoso e complexo, vai exigir muitos esforços e recursos. Mas é possível. Passa por organizar e fortalecer os equipamentos e espaços de apresentação já existentes, criando redes, inventando, incentivando, apoiando e financiando colaborações entre eles, buscando talvez até uma "identidade" de rede que faça sentido artístico e logístico. Mas aprofundar o como criar e sustentar essas redes de equipamentos colaborativos, e as políticas públicas para isso... bem, isso fica para um próximo texto, que já se anuncia necessário.
      </p>

      <h3 class="text-2xl font-serif font-bold text-neutral-900 mt-12 mb-6">Um Projeto de Futuro</h3>
      <p class="mb-6">
        Chegamos, eu aqui, ao fim desta primeira "aproximação", olhando para experiências que ousaram sair da "amarra dos editais" e construir lógicas de seleção e circulação baseadas na curadoria e no relacionamento. O que as experiências do SESC nos mostram, especialmente em sua base curatorial e de programação contínua, é que fomento à arte (e essa distinção importa!) exige continuidade, olhar especializado, planejamento de longo prazo e, fundamentalmente, respeito ao trabalho do artista, com remuneração profissional e condições dignas de realização. Não se trata de idealizar um modelo (o SESC tem suas próprias complexidades e seu financiamento é privado), nem de simplesmente transplantá-lo para o setor público, que tem outras regras e fontes. Trata-se, sim, de entender que a lógica da curadoria ativa, do relacionamento contínuo, da remuneração profissional e da construção de programações coerentes são alternativas concretas à aleatoriedade, à competição predatória e à precarização geradas pelo edital como via única e salvadora. Antes dos mais apressados dizerem que já sabiam de tudo isto, creio importante pensar em como vamos elaborar propostas mais complexas, mais potentes, diferenciadas e capazes de dar respostas a este diagnóstico sobre o esgotamento dos editais como única ferramenta de fomento.
      </p>
      <p class="mb-6">
        Nossa "gincana" atual da PNAB, apenas cumpre tabela burocrática, como na história dos meus amigos, sem construir pontes sólidas entre arte, artistas e público, sem gerar acúmulo real para o campo. É urgente que o poder público e a sociedade civil – juntos, em um debate de escuta e construção coletiva – tenham a coragem de olhar para além do modelo falido e concebam políticas de fomento que sirvam, de fato, a um projeto de futuro para as artes e a cultura brasileiras.
      </p>
      <p class="mb-6">
        Estamos só no início dos ciclos da PNAB e precisamos refletir sobre seu desdobramento. A "gincana" tem que acabar. O projeto de futuro precisa começar.
      </p>

      <p class="mb-6 text-terracotta-600 font-bold">
        O primeiro artigo, COLAPSO DOS EDITAIS E A URGÊNCIA DE UM NOVO MODELO DE FOMENTO – 29/abril/2025, está no link <a href="https://bit.ly/ColapsoDosEditaisMarceloBones" target="_blank" class="underline hover:text-terracotta-800">bit.ly/ColapsoDosEditaisMarceloBones</a>
      </p>
    `
  },
  {
    slug: "cheran-cultura-viva",
    title: "Cherán, Cultura Viva e as Encruzilhadas de um Movimento: Reflexões sobre abril de 2025 no México",
    date: "2025-05-10",
    displayDate: "10 de maio de 2025",
    summary: "Reflexões sobre abril de 2025 no México. A aventura em Cherán e no Congresso Latino-Americano de Cultura Viva Comunitária. Um olhar sobre as tensões do movimento e a inspiração da autogestão comunitária.",
    contentHtml: `
      <p class="mb-6">
        O mês de abril de 2025 me reservou intensas surpresas e reflexões. Quero compartilhar aqui um pouco da minha aventura mexicana, atravessada por descobertas, encontros e desafios significativos. Antes, creio importante situar-me neste contexto da Cultura Viva.
      </p>
      <p class="mb-6">
        Há tempos me dedico ao Política Cultura Viva, especialmente pela inserção do Grupo Teatro Andante, do qual sou fundador, na Política Nacional Cultura Viva. Sempre defendi que o Andante, que tem mais de 30 anos de estrada como inúmeros outros grupos no Brasil, opera verdadeiramente como um Ponto de Cultura, produzindo pesquisa, formação, redes, pedagogias sofisticadas e projetos artísticos complexos, fortalecendo uma cultura viva e comunitária, ampliando o conceito de território geralmente entendido pelo por esta Política.
      </p>
      <p class="mb-6">
        Nesses meus movimentos, fui contemplado pela convocatória do Programa IberCultura Viva, destinado a formar uma delegação brasileira de oito pessoas para o VI Congresso Latino-Americano de Cultura Viva Comunitária, realizado na cidade autônoma de Cherán, Michoacán, México, de 11 a 15 de abril. Esse edital também nos possibilitava participar antecipadamente do Seminário Internacional Cultura Viva Comunitária: Uma Escola Latino-Americana de Políticas Culturais, realizado pelo Instituto Latino-Americano de Cultura Viva Comunitária e pela Rede de Gestores Culturais – RGC, na Cidade do México, de 08 a 10 de abril.
      </p>
      <p class="mb-6">
        Participei parcialmente do Seminário, sobretudo no último dia. Ali já percebi uma forte tensão entre os grupos organizadores do Seminário e do Congresso. A palestra de encerramento, conduzida por Célio Turino, referência importante do Cultura Viva no Brasil e América Latina, não escamoteou as visões diferentes e algumas cisões internas no movimento. Esse Seminário, a meu ver com uma visão muito acadêmica, me deixou impressionado com a intensidade das divergências continentais e a profundidade das questões políticas e organizacionais não resolvidas.
      </p>
      <p class="mb-6">
        Seguindo para Cherán, enfrentei uma experiência ainda mais intensa e reveladora. Cherán é uma cidade singular: em 2011, as mulheres lideraram uma revolta contra madeireiros, narcotraficantes e o próprio Estado, expulsando a todos estes, e estabelecendo um modelo autônomo baseado em assembleias comunitárias e conselhos locais. Essa autonomia não é romantizada: a segurança comunitária é uma preocupação constante, o que ficou explicitado já na cerimônia de abertura do Congresso, onde membros da Ronda Comunitária fortemente armados estavam presentes junto às autoridades locais, reforçando simbolicamente o compromisso com a autodefesa e controle territorial.
      </p>
      <p class="mb-6">
        Outro elemento central da experiência em Cherán é a abolição dos partidos políticos, vistos pela comunidade como fontes históricas de divisão e corrupção. As decisões são tomadas por usos e costumes, num processo de democracia direta, efetiva e transparente, frequentemente citado como uma alternativa viável à representação partidária tradicional.
      </p>
      <p class="mb-6">
        Contudo, o Congresso propriamente dito aconteceu sob um clima de evidente tensão e conflitos internos já estabelecidos dentro do movimento Cultura Viva. A decisão de limitar drasticamente a participação, permitindo apenas cerca de dez representantes por país, dos 13 presentes (contra os 500 participantes da última edição no Peru) gerou mal-estar. Chegamos, muitos de nós selecionados pelo edital IberCultura Viva, "caindo de paraquedas" em meio a disputas e debates antigos. A situação piorou com a recusa de entrada de figuras históricas do movimento, como Eduardo Balán, da Argentina, o que gerou um mal-estar desnecessário, provocado inclusive por ele, que sabia previamente das restrições à sua entrada no Congresso forçando, equivocadamente, uma situação já delicada.
      </p>
      <p class="mb-6">
        Questões fundamentais, como diferenças geracionais, o papel dos governos e as tensões políticas internas entre organizadores e participantes do movimento internacional, estiveram constantemente presentes, ainda que nem sempre explicitadas. A assembleia final foi conduzida de forma acelerada e precipitada, resultando em decisões importantes tomadas sem nitidez suficiente sobre suas implicações.
      </p>
      <p class="mb-6">
        Sobre essa questão, a Comissão Nacional dos Pontos de Cultura do Brasil (CNPdC) publicou uma carta manifestando indignação pelos critérios restritivos e antidemocráticos adotados na organização do Congresso, reiterando que não reconhecia o evento como instância legítima para decisões sobre o futuro do movimento continental. Nós, participantes brasileiros selecionados pelo edital, publicamos uma nota apoiando as críticas da Comissão, esclarecendo nossa posição de abstenção nas decisões, já que não estávamos legitimados para representar os pontos e pontões de cultura brasileiros. Creio que é muito importante fazer uma avaliação crítica do próprio edital do IberCultura Viva.
      </p>
      <p class="mb-6">
        Retornei ao Brasil com sentimentos ambíguos. Por um lado, maravilhado pela potência inspiradora da experiência autônoma de Cherán, um testemunho vivo de outro mundo possível. Por outro, preocupado com as profundas divisões e a desorganização revelada no 6º Congresso. Torna-se evidente que o Movimento Cultura Viva Latino-americano precisa urgentemente promover uma pacificação interna e realizar um debate mais transparente e inclusivo. Deixei o México esgotado, porém esperançoso, consciente dos desafios que temos pela frente e com a certeza de que a experiência em Cherán precisa ser conhecida, discutida e transformada em uma prática coletiva mais coerente para o futuro.
      </p>

      <h3 class="text-2xl font-serif font-bold text-neutral-900 mt-12 mb-6">Cherán: um outro mundo ainda é possível (e já começou!)</h3>

      <p class="mb-6">
        Em tempos de desesperança e de governos que confundem segurança pública com espetáculo militarizado, há lugares no mundo que resistem — não como utopia - mas como prática. Cherán, no coração do estado de Michoacán, México, é um desses lugares. Uma cidade de 25 mil habitantes e que, em 2011, decidiu dizer: basta!
      </p>
      <p class="mb-6">
        Não foi um movimento articulado por partidos, nem por ONGs internacionais. Foram as mulheres. Elas disseram: chega de madeireiros ilegais destruindo nossa floresta! Chega de narcotráfico aterrorizando nossas famílias! Chega de Estado ausente ou, pior, cúmplice! Elas acenderam a fogueira no cruzamento das quatro principais ruas da cidade, como quem diz: aqui se acende outra forma de viver!
      </p>
      <p class="mb-6">
        E acenderam mesmo. Expulsaram os invasores — os armados, os coniventes, os representantes “legítimos” do sistema — e instauraram algo profundamente revolucionário: a autogestão comunitária.
      </p>
      <p class="mb-6">
        Desde então, Cherán vive sem partidos políticos. Os representantes são escolhidos por usos e costumes. As decisões vêm das assembleias. Não há prefeito, nem vereadores. O poder é descentralizado e, vejam só, funciona. O que há é uma estrutura comunitária baseada em conselhos. E, pasmem: a cidade se tornou mais segura, mais verde, mais igual.
      </p>
      <p class="mb-6">
        O que Cherán fez — e faz — não é um conto bucólico de aldeia alternativa. É um grito latino-americano, ancestral e atual, dizendo que democracia não é só votar a cada quatro anos, mas construir o cotidiano com as próprias mãos. E que mulheres camponesas e indígenas, muitas vezes vistas como as últimas da fila, podem, sim, abrir o caminho.
      </p>
      <p class="mb-6">
        Talvez o que mais espante os observadores externos (e internos também) seja isso: funciona. E porque funciona, incomoda. E porque incomoda, é silenciado. Pouco se fala sobre Cherán nas manchetes do mundo. Mas quem pisa ali, sente: há um outro modo de viver. Um modo que recusa o cinismo do “não tem outro jeito”.
      </p>
      <p class="mb-6">
        Talvez uma das reflexões provocadas seja sobre os limites e possibilidades de replicação da experiência política de Cherán em outros contextos e escalas. A autogestão comunitária, a descentralização do poder e o protagonismo das assembleias populares constituem um modelo potente, mas que nos desafia a pensar: seria possível aplicar princípios semelhantes em cidades maiores? Ou estamos diante de uma experiência que, apesar de inspiradora, carrega em si as marcas e as condições muito específicas de um território indígena e profundamente conectado às suas tradições?
      </p>
      <p class="mb-6">
        É preciso também tensionar dois pilares do modelo de Cherán: a eliminação dos partidos políticos e o foco central na segurança. Por mais que em Cherán essas medidas façam sentido no contexto da luta contra o narcotráfico e a corrupção partidária, não se pode simplesmente transpor esses elementos para outras realidades sem uma análise crítica.
      </p>
      <p class="mb-6">
        Cherán é, ao mesmo tempo, reflexão, denúncia e anúncio. Denúncia de um mundo onde o lucro vale mais que a vida. E anúncio de outro, onde a comunidade, a floresta e a dignidade têm nome, rosto, corpo e história. É respirar o impossível tornado real. É ouvir, no silêncio das montanhas purépechas de Michoacán, a frase batida, mas que teima em sobreviver: sim, outro mundo é possível. E, às vezes, começa por uma fogueira acesa por mulheres cansadas de esperar.
      </p>
    `
  },
  {
    slug: "colapso-dos-editais",
    title: "Colapso dos Editais e a Urgência de um Novo Modelo de Fomento",
    date: "2025-04-29",
    displayDate: "29 de abril de 2025",
    summary: "Uma reflexão crítica e profunda sobre o esgotamento do modelo de editais como principal ferramenta de financiamento à cultura no Brasil e a necessidade de reconhecer essa falência para construir novos paradigmas.",
    contentHtml: `
      <p class="mb-6 italic text-stone-500 border-l-4 border-stone-200 pl-4 py-2">
        Observação: Este texto é uma reescrita, pequenos acréscimos e organização de três textos que publiquei em março de 2025.
      </p>

      <h3 class="text-2xl font-serif font-bold text-neutral-900 mt-12 mb-6">SOBRE A “ERA DOS EDITAIS”</h3>
      <p class="mb-6">
        Estamos agora acompanhando e vivenciando o processo de implantação da PNAB em todo o Brasil. Na maioria das cidades e estados, o que vemos é um cenário de desespero e correria. O momento está confuso, desgastante e profundamente frustrante.
      </p>
      <p class="mb-6">
        Creio que é exatamente por isso que precisamos iniciar uma reflexão mais ampla e profunda sobre o que estamos vivendo no fomento à cultura e às artes.
      </p>
      <p class="mb-6">
        O problema não está apenas neste processo específico, mas na estrutura que nos rege há anos. A fórmula dos editais como principal (ou muitas vezes única) ferramenta de financiamento à cultura chegou ao seu limite.
      </p>
      <p class="mb-6">
        Neste momento, não desejo – e nem tenho condições – de apresentar soluções. Seria prematuro. Acredito que antes de qualquer proposta, é preciso que o setor cultural reconheça com coragem que este modelo faliu. E que só a partir do reconhecimento dessa falência poderemos iniciar um debate consequente sobre outras possibilidades. Sobre o mundo fora do edital.
      </p>
      <p class="mb-6">
        Deixo explícito que não sou contra os editais enquanto instrumentos de fomento. O verdadeiro problema não são os editais em si, mas o fato de terem se tornado praticamente a única forma disponível de apoio financeiro à cultura e às artes, deixando de ser uma ferramenta estratégica para se transformar em objetivo final. Os editais foram transformados em meta, e não em meio.
      </p>
      <p class="mb-6">
        Estamos presos em um sistema imprevisível, sem planejamento de médio ou longo prazo, burocrático e injusto, que transforma os agentes culturais em concorrentes diretos, forçando-os a disputar uns contra os outros, recursos insuficientes para a real demanda do setor. Para quem não tem as benesses dos poderosos, essa é a única alternativa disponível – e, ainda assim, nos empurra para uma lógica de escassez, onde a cada contemplado há centenas de excluídos.
      </p>
      <p class="mb-6">
        Em diversas cidades e estados, vivenciamos um caos que começa já na formulação dos editais, feita de forma amadora e sem planejamento, até a distribuição dos valores dos fomentos, passando por critérios de cotas mal refletidos (em parte derivados de diretrizes do MinC, mas sem o devido aprofundamento). Tudo isso reflete o desrespeito com os trabalhadores e trabalhadoras da cultura e das artes.
      </p>

      <h3 class="text-2xl font-serif font-bold text-neutral-900 mt-12 mb-6">O MODELO EXCLUDENTE DOS EDITAIS</h3>
      <p class="mb-6">
        Os editais nos colocam em uma disputa insustentável. Um produtor, um artista ou coletivo que apenas deseja o financiamento justo de seu projeto precisa disputar com centenas de outros, sabendo que menos de 4% das propostas serão contempladas (projeção baseada nos dados da PNAB de Minas Gerais). Isso não pode ser visto como um sistema saudável ou minimamente estruturante.
      </p>
      <p class="mb-6">
        Além disso, em muitos editais, os valores destinados a cada categoria são ridículos. Como pode um festival artístico – que exige meses de planejamento, equipe qualificada, logística, produção, curadoria e divulgação – receber R$ 60 mil? Como viabilizar uma circulação de espetáculos de artes da cena com um valor que mal cobre os custos básicos? Como montar uma nova obra com orçamentos que mal permitem o pagamento digno de uma equipe? (Estes exemplos referem-se aos valores apresentados pela PNAB de Minas Gerais.)
      </p>
      <p class="mb-6 font-bold text-terracotta-600">
        Isso não é fomento, é esmola.
      </p>
      <p class="mb-6">
        Essa lógica inviabiliza a profissionalização do setor, empurra os fazedores de cultura e das artes para a precarização, confunde trabalho artístico com trabalho social e obriga os agentes culturais e artísticos a atuarem como voluntários de um sistema que não os reconhece como trabalhadores.
      </p>

      <h3 class="text-2xl font-serif font-bold text-neutral-900 mt-12 mb-6">OS LIMITES DA AVALIAÇÃO POR PARECERISTAS</h3>
      <p class="mb-6">
        Gostaria agora de aprofundar a análise sobre um dos aspectos críticos desse modelo: o sistema de avaliação por pareceristas.
      </p>
      <p class="mb-6">
        Não é minha intenção, de forma alguma, desmerecer esse trabalho, que, quando bem-feito, é fundamental e pode, sim, contribuir significativamente para o processo de avaliação dos editais. Falo a partir de uma experiência concreta: ao longo de 45 anos de atuação na cultura, transitei por diversas funções – artista, gestor público, coordenador de programas culturais, proponente e, nos últimos anos, parecerista. Pretendo continuar atuando profissionalmente como parecerista e conheço de perto a complexidade dessa função.
      </p>
      <p class="mb-6">
        Reconheço a importância do trabalho dos pareceristas, muitas vezes realizado sob grande pressão, com prazos exíguos e remuneração insuficiente. Sei também dos desafios, especialmente no que diz respeito à assistência, capacitação e orientações oferecidas por parte dos contratantes. Já vivenciei experiências muito bem conduzidas em avaliações das quais participei, mas também testemunhei falhas significativas em outras.
      </p>
      <p class="mb-6">
        A forma como os pareceristas vêm sendo utilizados nos editais da PNAB, e em outros processos, expõe uma fragilidade estrutural que compromete a transparência e a justiça na distribuição dos recursos.
      </p>
      <p class="mb-6">
        Uma das principais fragilidades é a falta de clareza e transparência sobre o recrutamento, a capacitação e a metodologia de trabalho dos pareceristas. Esses profissionais são selecionados por processos muitas vezes questionáveis, com critérios pouco transparentes e sem uniformidade entre os credenciamentos. Não há garantias de que suas análises seguirão um padrão técnico minimamente coerente. Esse grau de incerteza gera desconfiança e abre brechas para avaliações arbitrárias e incoerentes.
      </p>
      <p class="mb-6">
        Outro ponto crítico é o isolamento do parecerista no processo de avaliação. Modelos mais robustos, baseados em comissões julgadoras com representação da sociedade civil e do poder público, permitem que as propostas sejam debatidas coletivamente, garantindo múltiplas perspectivas e maior equilíbrio na tomada de decisões. O desafio do volume de propostas é real – no caso de Minas Gerais, foram mais de dezoito mil inscrições –, mas isso não pode justificar uma avaliação em massa, quase industrial, que impede uma análise criteriosa e aprofundada.
      </p>
      <p class="mb-6">
        No modelo atual, um ou dois pareceristas atribuem notas sem possibilidade de diálogo ou revisão coletiva. Isso reduz drasticamente as chances de uma avaliação justa e plural, submetendo os projetos à visão unilateral de um avaliador, que pode não compreender o contexto específico de cada proposta.
      </p>
      <p class="mb-6">
        Outro agravante é que, em alguns casos, há uma completa ausência do Estado no processo avaliativo, delegando integralmente aos pareceristas a responsabilidade pela seleção, sem qualquer mecanismo de acompanhamento, mediação ou controle de qualidade.
      </p>
      <p class="mb-6">
        A falta de transparência se acentua ainda mais na etapa dos recursos. Há pouca clareza sobre quem revisa os pedidos (se são os mesmos pareceristas da primeira avaliação ou novos avaliadores) e sobre qual a metodologia é aplicada nessa reanálise. Essa imprecisão fragiliza o sistema e o torna suscetível a injustiças. Normalmente, é na análise dos recursos que se explicitam as falhas: reclamações volumosas de pontuações incoerentes, avaliações contraditórias e insegurança generalizada entre os proponentes.
      </p>
      <p class="mb-6 italic">
        Esse tipo de erro mina a credibilidade dos editais e aprofunda a precarização do setor, transformando o fomento em um jogo de sorte, em vez de um instrumento de fortalecimento das artes e da cultura.
      </p>
      <p class="mb-6">
        O que está em jogo aqui não é apenas a necessidade de ajustes pontuais, mas a urgência de repensar todo o modelo de fomento à cultura e às artes no Brasil. Os editais, da forma como existem hoje, não dão conta da complexidade e diversidade do setor. Precisamos avançar para políticas de financiamento estruturantes, contínuas e democráticas, que garantam não apenas a sobrevivência dos artistas e produtores culturais, mas também a sustentabilidade e o crescimento da cultura brasileira.
      </p>
      <p class="mb-6">
        Se não encararmos essa discussão de frente, seguiremos reféns de um sistema caótico e bagunçado.
      </p>

      <h3 class="text-2xl font-serif font-bold text-neutral-900 mt-12 mb-6">A GINCANA COMO POLÍTICA CULTURAL</h3>
      <p class="mb-6">
        A Política Nacional Aldir Blanc (PNAB), celebrada, com razão, por ter devolvido musculatura ao fomento à cultura e às artes no Brasil, infelizmente reforçou ainda mais a centralidade dos editais.
      </p>
      <p class="mb-6">
        Em Minas Gerais, mais de 18 mil projetos foram inscritos, e apenas uma parcela ínfima será contemplada. Basta citar um dos poucos editais com resultado publicado – o de circulação de espetáculos de teatro –, que recebeu mais de 400 inscrições e selecionou apenas 26 propostas. Qual política pública pode se satisfazer com esse tipo de relação entre demanda e resposta?
      </p>
      <p class="mb-6">
        Esse desequilíbrio não estrutura o setor. Pelo contrário, ele o precariza, estimula a frustração, a exaustão e a desorganização.
      </p>
      <p class="mb-6">
        O que vivemos hoje é a gincana da sobrevivência: o poder público se dedica a lançar, avaliar e pagar editais – como se isso fosse suficiente. À sociedade civil resta correr atrás, inscrever-se no maior número possível de chamadas públicas, na esperança de ser contemplada em alguma.
      </p>
      <p class="mb-6">
        Isso nos condena à lógica do imediatismo, esvaziando qualquer capacidade de planejamento – seja de curto, médio ou longo prazo. Como pensar o futuro de uma política cultural se sequer sabemos como será a próxima rodada de editais da PNAB?
      </p>
      <p class="mb-6">
        Mais grave ainda é a sobreposição descoordenada de editais entre estados e municípios, frequentemente com o mesmo objeto e foco. Não há articulação, não há coerência. Isso exige uma reflexão urgente sobre a responsabilidade do Ministério da Cultura na coordenação nacional desses instrumentos, para garantir que os editais estaduais, municipais e federais se complementem – e não se canibalizem.
      </p>
      <p class="mb-6 text-terracotta-600 font-bold">
        A arte e a cultura brasileiras merecem mais do que uma gincana. Merecem um projeto de futuro.
      </p>
    `
  },

];
