import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Marcelo Bones', path: '/marcelo-bones' },
    { name: 'Ações', path: '/acoes' },
    { name: 'Artigos', path: '/artigos' },
    { name: 'Destaques', path: '/destaques' },
    { name: 'Grupos & Afiliações', path: '/grupos-e-afiliacoes' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col">
          <Link to="/" className={`font-serif text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
            Andante
          </Link>
          <span className={`text-xs uppercase tracking-widest font-light ${isScrolled ? 'text-neutral-600' : 'text-stone-300'}`}>
            Gestão de Cultura
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            link.path.startsWith('/#') ? (
               <a
                  key={link.name}
                  href={location.pathname === '/' ? link.path.substring(1) : link.path}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-terracotta-600 ${
                    isScrolled ? 'text-neutral-800' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </a>
            ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-terracotta-600 ${
                    isScrolled ? 'text-neutral-800' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-neutral-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-neutral-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
             link.path.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={location.pathname === '/' ? link.path.substring(1) : link.path}
                  className="text-neutral-900 text-lg font-serif hover:text-terracotta-600"
                  onClick={handleNavClick}
                >
                  {link.name}
                </a>
             ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-neutral-900 text-lg font-serif hover:text-terracotta-600"
                  onClick={handleNavClick}
                >
                  {link.name}
                </Link>
             )
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;