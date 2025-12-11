import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ActionsPage from './pages/ActionsPage';
import GestaoCultural from './pages/GestaoCultural';
import OficinasFormacao from './pages/OficinasFormacao';
import DistribuicaoEspetaculos from './pages/DistribuicaoEspetaculos'; // Nova importação
import MarceloBones from './pages/MarceloBones';
import Groups from './pages/Groups';
import ArticlesList from './pages/ArticlesList';
import ArticleDetail from './pages/ArticleDetail';
import HighlightsList from './pages/HighlightsList';
import HighlightDetail from './pages/HighlightDetail';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="acoes" element={<ActionsPage />} />
          <Route path="gestao-cultural" element={<GestaoCultural />} />
          <Route path="oficinas" element={<OficinasFormacao />} />
          <Route path="espetaculos" element={<DistribuicaoEspetaculos />} /> {/* Nova rota */}
          <Route path="marcelo-bones" element={<MarceloBones />} />
          <Route path="grupos-e-afiliacoes" element={<Groups />} />
          <Route path="artigos" element={<ArticlesList />} />
          <Route path="artigos/:slug" element={<ArticleDetail />} />
          <Route path="destaques" element={<HighlightsList />} />
          <Route path="destaques/:slug" element={<HighlightDetail />} />
          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;