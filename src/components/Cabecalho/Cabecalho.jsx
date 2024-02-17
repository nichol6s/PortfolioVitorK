import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Cabecalho.scss';

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

//   const handleClick = (ref) => {
//     if (ref == 'ref1'){
//       ref1.current?.scrollIntoView({ behavior: 'smooth' });
//     } if (ref == 'ref2') {
//       ref2.current?.scrollIntoView({ behavior: 'smooth' });
//     };
    
// };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({ behavior: "smooth"});
    }
  }

  return (
    <>
      <header className={`cabecalho ${menuAberto ? 'menu-aberto' : ''}`}>
        <Link onClick={() => scrollToSection("section1")} to="#" className="logo">
          <h1>VITOR KUBICA</h1>
        </Link>
        <div className="mobile-menu" onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </header>
      <div className={`menu-conteudo ${menuAberto ? 'menu-aberto' : ''}`}>
        <Link onClick={() => scrollToSection("section2")} to="#">Sobre mim</Link>
        <Link onClick={() => scrollToSection("section4")} to="#">Projetos</Link>
        <Link onClick={() => scrollToSection("section5")} to="#">Contato</Link>
      </div>
      
    </>
  );
}
