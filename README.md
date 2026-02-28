<div align="center">

# Andante — Cultural Management

Digital platform for **Marcelo Bones**' cultural management office

</div>

---

## What this is

Andante is the cultural management office of Marcelo Bones — a playwright, curator and producer with decades of work in Brazilian performing arts. This repository is the platform that gives that work a digital presence.

This isn't a generic portfolio. The goal was to build something that honours the seriousness of cultural production without losing readability — a space where long-form texts are comfortable to read, where navigation doesn't compete with content, and where the author can publish independently without relying on a developer every time.

## Who it's for

- **Readers and visitors** following Marcelo's articles and reflections on theatre, public policy and creative processes
- **Promoters, institutions and partners** exploring the office's portfolio and services
- **Theatre groups and collectives** that are part of Andante's network
- **Marcelo himself** — who uses the admin panel to publish his writing independently

## Features

**Public site**
- Institutional homepage with recent highlights
- Full article reading experience
- Highlights section: news, agenda and recognitions
- Service pages: cultural management, training workshops, show distribution
- Biography and career overview
- Affiliated groups and partnerships

**Admin panel** (authenticated)
- Rich text editor (Quill) for articles and highlights
- Cover image upload to Supabase Storage
- Auth-protected access — publishing requires zero technical knowledge

## Stack

Tools chosen for reliability and fit, not trend:

| | |
|---|---|
| **React 19 + TypeScript** | UI and static typing |
| **Vite 6** | Bundler and dev server |
| **Tailwind CSS + Typography** | Styling |
| **Supabase** | PostgreSQL, auth and storage in one managed platform |
| **React Router v6** | Routing with protected routes |
| **React Quill New** | WYSIWYG editor in the admin |
| **DOMPurify** | HTML sanitisation before any rendering |

## Getting started

```bash
git clone git@github.com:kaionstudios13/andantegestao-front.git
cd andantegestao-front
npm install
```

Create a `.env` file at the project root (see `.env.example`):

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

```bash
npm run dev   # http://localhost:3000
```

## Notable decisions

**Supabase over a custom backend** — The scope didn't justify a separate API. Supabase provides auth, a relational database and file storage in a single managed service, with Row Level Security keeping access rules at the database level rather than only in the front-end.

**No CMS (Contentful, Sanity, etc.)** — Unnecessary cost and complexity for the expected publishing volume. The admin panel built here is lean and focused on exactly what's needed: write and publish.

**XSS and RLS** — Article content is HTML produced by the Quill editor and stored in the database. Before any rendering it passes through `DOMPurify.sanitize()`. All tables have RLS enabled: public read, authenticated-only write.

## Project structure

```
andantegestao-front/
├── pages/             # Public pages (articles, highlights, home…)
├── components/        # Header, Footer, Layout and UI components
├── src/
│   ├── components/admin/   # ProtectedRoute, AdminLayout
│   ├── contexts/           # AuthContext
│   ├── pages/admin/        # Login, Dashboard, ArticleEditor, HighlightEditor
│   └── supabase.ts         # Supabase client
├── App.tsx            # Route definitions
└── vite.config.ts     # Build configuration
```

---

> 📄 [Leia em Português](./README.pt-BR.md)

<div align="center">
  <sub>Andante — Cultural Management · 2026</sub>
</div>
