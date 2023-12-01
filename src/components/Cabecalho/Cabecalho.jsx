import { Link } from "react-router-dom";
import {AiFillHome as H} from "react-icons/ai";
import './Cabecalho.scss'

export default function Cabecalho() {
  return (
    <>
      <header className="cabecalho">
        <img src="./LogoCNome.png" alt="Logo" />
      </header>
    </>
  );
}
