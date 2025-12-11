import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-stone-500 py-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-white font-serif font-bold text-lg">Andante</h3>
          <p className="text-sm mt-1">Gestão de Cultura</p>
        </div>
        
        <div className="text-sm font-light">
          &copy; {new Date().getFullYear()} Marcelo Bones. Todos os direitos reservados. 
          <p>Produzido por Sam Veloso - Kaion Studios.</p>
        </div>
        
        <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;