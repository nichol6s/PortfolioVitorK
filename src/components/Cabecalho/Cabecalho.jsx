import { Link } from "react-router-dom";
import './Cabecalho.scss'

export default function Cabecalho() {
  return (
    <>
      <header className="cabecalho">
        <div className="logo">
          <h1>VITOR KUBICA</h1>
        </div>
        <div className="menu">
          <div className="traco1"></div>
          <div className="traco2"></div>
          <div className="traco3"></div>
        </div>
      </header>
    </>
  );
}
