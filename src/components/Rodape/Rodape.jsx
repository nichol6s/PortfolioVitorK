import { Link } from "react-router-dom";
import './Rodape.scss';

export default function Rodape() {
  return (
    <>
      <footer>
        <div className="rodapeConteudo">
          <div className="redesSociais">
            <div>
              <h1>Redes Sociais</h1>
            </div>
            <div className="iconesRedes">
              <div className="icones">
              <Link to={"https://www.instagram.com/avanttipisos/"} activeClassName="current" target='Blank'><img src="/img/logoInsta.png" alt="Instagram" /></Link>
              </div>
              <div>
              <Link to={"https://www.facebook.com/avanttipisos"} activeClassName="current" target='Blank'><img src="/img/logoFace.png" alt="Facebook" /></Link>
              </div>
            </div>
            
          </div>
          <div className="atendimento">
              <h1>Atendimento</h1>
              <div className="infoAtendimento">
              <img src="/img/logoInsta.png" alt="Instagram" />
              <p>(11) 2339-7412</p>
              </div>
              <div>
              <div className="infoAtendimento">
              <img src="/img/logoInsta.png" alt="Instagram" />
              <p>(11) 2339-7412</p>
              </div>
              
            </div>
          </div>
        </div>
        <div className="linhacentro">
          <div className="linha"></div>
        </div>
        
        <div className="rodapeInfo">
          <img src="/LogoCNome.png" alt="logo" />
          <p>
          @ 2023 Avantti. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
