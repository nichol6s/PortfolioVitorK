import { useRef } from 'react';
import './Home.scss';
import { Link } from "react-router-dom";
import fotoap from '/img/fotoap.webp'
import element from '/img/elementos1.svg'
import imgsm from '/img/imagemsobremim.webp'
import Headline from '../Headline';

export default function Home() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const handleClick = () => {
    ref1.current?.scrollIntoView({ behavior: 'smooth' });
    ref2.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <main className='conteudo'>
      <section className='apresentacao'>
        <div className='textoap'>
          <h1>DESENVOLVEDOR FULL STACK</h1>
          <p>Portifólio profissional.</p>
          <button onClick={handleClick} className='botaovermais'>
            <p>Ver mais</p>
            <div className='seta'>
              <div className='setacorpo'></div>
            </div>
          </button>
          
        </div>
        <div className='imagem'>
          <img src={fotoap} alt='foto' className='foto'/>
          <img src={element} alt='elementos' className='elementosfundo'/>
        </div>
      </section>
      <section className='sobremim' >
        <Headline ref={ref1}></Headline>
        <div className='imagemsobremim'>
            <img src={imgsm} alt='img sobre mim' className='imgsm'/>
        </div>
        <div className='conteudosobremim' >
          <h1>SOBRE MIM</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum leo tellus, eget blandit urna consequat sit amet. Aenean tincidunt lacus eget purus dictum, congue imperdiet neque eleifend. Duis nulla mauris, volutpat ut placerat in, ornare quis lacus. In suscipit nunc dui, id aliquam turpis pharetra vel.</p>
          <div className='botoes'>
            <button className="buttoncontato" type="button">
              <span className="buttoncontato__text">Contato</span>
            </button>
            <button className="buttondwnld" type="button">
              <span className="buttondwnld__text">Download</span>
              <span className="buttondwnld__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
  