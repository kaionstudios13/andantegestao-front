<div align="center">

# Andante — Gestão de Cultura

Plataforma digital do escritório de gestão cultural de **Marcelo Bones**

</div>

---

## O que é este projeto

A Andante é o escritório de gestão cultural de Marcelo Bones — dramaturgo, curador e produtor com décadas de atuação nas artes cênicas brasileiras. Este repositório é a plataforma que dá corpo digital a esse trabalho.

Não se trata de um portfólio genérico. A proposta foi construir algo que respeitasse a seriedade da produção cultural sem perder leveza e legibilidade — um ambiente onde textos longos são lidos com conforto, onde a navegação não compete com o conteúdo, e onde quem publica tem autonomia real sem depender de uma equipe técnica toda vez que precisa de uma atualização.

## Para quem é

- **Visitantes e leitores** que acompanham os artigos e reflexões de Marcelo sobre teatro, políticas públicas e processos de criação
- **Promotores, institutos e parceiros** que precisam conhecer o portfólio e os serviços da Andante
- **Grupos e coletivos teatrais** que fazem parte da rede de trabalho do escritório
- **O próprio Marcelo** — que usa o painel administrativo para publicar seus textos de forma independente

## O que tem aqui

**Área pública**
- Home institucional com os destaques mais recentes
- Listagem e leitura de artigos autorais completos
- Seção de destaques: notícias, agenda e reconhecimentos
- Páginas de serviço: gestão cultural, oficinas de formação, distribuição de espetáculos
- Biografia e trajetória de Marcelo Bones
- Grupos e afiliações

**Painel administrativo** (autenticado)
- Editor de texto rico (Quill) para criação e edição de artigos e destaques
- Upload de imagens direto para o Supabase Storage
- Acesso protegido por autenticação — publicar não requer nenhum conhecimento técnico

## Stack

O projeto foi construído com ferramentas consolidadas e escolhidas pela previsibilidade, não pela novidade:

| | |
|---|---|
| **React 19 + TypeScript** | Interface e tipagem estática |
| **Vite 6** | Bundler e servidor de dev |
| **Tailwind CSS + Typography** | Estilo — sem CSS customizado desnecessário |
| **Supabase** | Banco PostgreSQL, autenticação e storage em uma só plataforma |
| **React Router v6** | Roteamento com rotas protegidas |
| **React Quill New** | Editor WYSIWYG no admin |
| **DOMPurify** | Sanitização de HTML antes de qualquer renderização |

## Rodando localmente

```bash
git clone git@github.com:kaionstudios13/andantegestao-front.git
cd andantegestao-front
npm install
```

Crie um arquivo `.env` na raiz (use o `.env.example` como guia):

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-anon-key
```

```bash
npm run dev   # http://localhost:3000
```

## Decisões que valem mencionar

**Por que Supabase e não um backend próprio?** — O escopo do projeto não justificava manter uma API separada. O Supabase entrega autenticação, banco relacional e storage num único serviço gerenciado, com RLS para garantir que regras de acesso vivam no banco — não só no front-end.

**Por que não usar CMS como Contentful ou Sanity?** — Custo e complexidade desnecessários para o volume de publicações previsto. O painel admin construído aqui é enxuto, centrado no que Marcelo realmente precisa: escrever e publicar.

**XSS e RLS** — O conteúdo dos artigos é HTML gerado pelo editor Quill e armazenado no banco. Antes de qualquer renderização, passa por `DOMPurify.sanitize()`. As tabelas do banco têm RLS habilitado: leitura é pública, escrita é restrita a usuários autenticados.

## Estrutura resumida

```
andantegestao-front/
├── pages/             # Páginas públicas (artigos, destaques, home…)
├── components/        # Header, Footer, Layout e componentes visuais
├── src/
│   ├── components/admin/   # ProtectedRoute, AdminLayout
│   ├── contexts/           # AuthContext
│   ├── pages/admin/        # Login, Dashboard, ArticleEditor, HighlightEditor
│   └── supabase.ts         # Cliente Supabase
├── App.tsx            # Definição de rotas
└── vite.config.ts     # Configuração do build
```

---

> 📄 [Read in English](./README.md)

<div align="center">
  <sub>Andante — Gestão de Cultura · 2026</sub>
</div>
