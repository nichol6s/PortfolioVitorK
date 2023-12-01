//Importando dependências e ou arquivos que vamos utilizar e ou referenciar.
import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import "./App.scss";
// import { useState } from "react";

export default function App() {

  // const [produto, setProduto] = useState("PRODUTO");

  // let count = 0;
  // const novoValor =()=>{
  //   count++;
  //   setProduto(produto +" "+ count);
  // }

  return (
    
      <div className="container">
       <Cabecalho />

            <Outlet/>

        <Rodape />
      </div>
    );
}
