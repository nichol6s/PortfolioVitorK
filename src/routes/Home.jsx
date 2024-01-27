import './Home.scss';
import { Link } from "react-router-dom";
import fotoap from '/img/fotoap.webp'
import setad from '/LogoSimples.svg'

export default function Home() {
  return (
    <main className='conteudo'>
      <section className='apresentacao'>
        <div className='textoap'>
          <h1>DESENVOLVEDOR FULL STACK</h1>
          <p>Portifólio profissional.</p>
          <Link to={""}>
            <p>Ver mais</p>
            <div className='seta'>
              <div className='setacorpo'></div>
              <div className='setacabeca'></div>
            </div>
          </Link>
        </div>
        <div className='imagem'>
          <img src={fotoap}/>
        </div>
      </section>
    </main>
  )
}
  