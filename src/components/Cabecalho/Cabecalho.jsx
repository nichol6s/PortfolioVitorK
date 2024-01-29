import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Cabecalho.scss';

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <>
      <header className={`cabecalho ${menuAberto ? 'menu-aberto' : ''}`}>
        <Link to="/" className="logo">
          <h1>VITOR KUBICA</h1>
        </Link>
        <div className="mobile-menu" onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </header>
      <div className={`menu-conteudo ${menuAberto ? 'menu-aberto' : ''}`}>
        <Link to="/">Página Inicial</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </>
  );
}
