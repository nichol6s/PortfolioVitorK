import './Rodape.scss';
import { Link } from 'react-router-dom';

import githubIcon from '/img/icons8-github.svg'
import linkedinIcon from '/img/icons8-linkedin.svg'
import whatsappIcon from '/img/icons8-whatsapp.svg'



export default function Rodape() {
  return (
    <>
      <footer>
        <div className="conteudoRodape">
          <div className="redes">
            <h1>Redes Sociais</h1>
            <ul>
              <Link to={'https://github.com/VitorKubica'} target='_Blank'><img src={githubIcon} alt="githubIcon" /></Link>
              <Link to={'https://www.linkedin.com/in/vitorkubica/'} target='_Blank'><img src={linkedinIcon} alt="linkedinIcon" /></Link>
              <Link to={'https://api.whatsapp.com/send?phone=11940138704'} target='_Blank'><img src={whatsappIcon} alt="whatsappIcon" /></Link>
              
            </ul>
           
          </div>
          <div className="contato">
            <h1>Contato</h1>
            <p>(11) 94013-8704</p>
            <p>vitor05kubica12@gmail.com</p>
          </div>
        </div>
        <div className='linha'></div>
        <div className="rodapeInfo">
          <p>
          @ 2024 Vitor Kubica Silveira. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
