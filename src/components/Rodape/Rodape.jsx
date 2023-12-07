import { Link } from "react-router-dom";
import './Rodape.scss';

export default function Rodape() {
  return (
    <>
      <footer>
      
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
