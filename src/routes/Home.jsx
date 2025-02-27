  import { useRef, useState, useEffect } from 'react';
  import './Home.scss';
  import fotoap from '/img/fotoap.webp'
  import element from '/img/elementos1.svg'
  import elementoxp from '/img/elementoxp.svg'
  import elementoap from '/img/elementoap.svg'
  import elementoprjt from '/img/elementoprjt.svg'
  import imgsm from '/img/imagemsobremim.webp'
  import avanttilp from '/img/AvanttiLP.webp'
  import helpfila from '/img/Helpfila.webp'
  import contabilizador from '/img/Contabilizador.webp'
  import fiagro from '/img/Fiagro.webp'
  import { Link } from 'react-router-dom';
  import { Swiper, SwiperSlide} from 'swiper/react';
  import emailjs from '@emailjs/browser';


  export default function Home() {
    const data = [
      { id: '1', hd: "Landing page", p: "Landing Page desenvolvida em React.js, focada em uma linha de produto", image: avanttilp, link:'https://avantti-lp.vercel.app/' },
      { id: '2', hd: "Help Fila", p: "Projeto de uma Startup de redução de filas em hospitais, desenvolvida em next.js, com funcionalidades de compleat search bar e login.", image: helpfila, link:'https://help-fila.vercel.app/' },
      { id: '3', hd: "contabilizador", p: "Sistema de auxilio a produção, com forte em lógica de programação em js", image: contabilizador, link:'https://masseira.vercel.app/' },
      { id: '4', hd: "fiagro", p: "Site informativo com HTML, CSS, JS puros", image: fiagro, link:'https://fiagro.vercel.app/' },
    ];
    
    const dataBack = [
      { id: '1', hd: "Biblioteca Java", p: "Projeto de uma biblioteca, com criação de API em JAVA", image: avanttilp, link:'https://github.com/VitorKubica/ProjetoBiblioteca' },
      { id: '2', hd: "Projeto ML", p: "Projeto de iniciação ao Machine Learning em python", image: helpfila, link:'https://github.com/VitorKubica/MachineLearningIntro' },
      { id: '3', hd: "Database", p: "Banco de dados com para um projeto da porto seguro, desenvolvido em SQL, manipulação e criação de tabelas", image: contabilizador, link:'/' },
      { id: '4', hd: "Bot Automação", p: "Bot de automação de tarefas em Python, importante para aprimorar a lógica de programação", image: fiagro, link:'/' },
    ];
    
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const [projetoAberto, setProjetoAberto] = useState('projetos');

    const [widths, setWidths] = useState({
      front: '100%',
      back: '100%',
      projectsFront: '0',
      projectsBack: '0'
    });

    const handleClick = (ref) => {
    
      if (ref == 'ref1'){
        ref1.current?.scrollIntoView({ behavior: 'smooth' });
      } if (ref == 'ref2') {
        ref2.current?.scrollIntoView({ behavior: 'smooth' });
      };
      
  };

    const handleDownload = () => {
      const a = document.createElement('a');
      a.href = '/CV-Vitor-Kubica.pdf';
      a.download = 'CV-Vitor-Kubica.pdf';
      a.click();
    };
  
    const handleFrontButtonClick = () => {
      setWidths({
        front: '0',
        back: '0',
        projectsFront: '100%',
        projectsBack: '0'
      });
    };
  
    const handleBackButtonClick = () => {
      setWidths({
        front: '0',
        back: '0',
        projectsFront: '0',
        projectsBack: '100%'
      });
    };
  
    const handleBackArrowClick = () => {
      setWidths({
        front: '100%',
        back: '100%',
        projectsFront: '0',
        projectsBack: '0'
      });
    };

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
    function sendEmail(e) {
      e.preventDefault();

      console.log("Enviando email...");

      if(name === '' || email === '' || message === ''){
        alert("preencha todos os campos")
        return;
      }
      
      const templateParams = {
        from_name: name,
        message: message,
        email: email
      }
      emailjs.send("service_k9xvl2c", "template_wl9ulh7", templateParams, "mA7j8XalsYbdTyDzW")
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
      }, (err) =>{
        console.log("ERRO", err)
      })
    }
    return (
      <main className='conteudo'>
        <section className='apresentacao' id='section1'>
          <div className='textoap'>
            <h1>DESENVOLVEDOR FULL STACK</h1>
            <p>Portifólio profissional.</p>
            <button onClick={() => handleClick('ref1')} className='botaovermais'>
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
        <section className='sobremim' ref={ref1} id='section2'>
          <div className='imagemsobremim'>
              <img src={imgsm} alt='img sobre mim' className='imgsm'/>
          </div>
          <div className='conteudosobremim' >
            <h1>SOBRE MIM</h1>
            <p>Olá! 
              <br/> Sou o Vitor, tenho 19 anos e sou estudante de ADS na FIAP. Tenho habilidades como organização, postura ativa, boa comunicação e relacionamento interpessoal, raciocínio lógico e pensamento analítico. <br/>  Vivendo o mundo da programação, sempre em busca de aprender.</p>
            <div className='botoes'>
              <button className="buttoncontato" type="button" onClick={() => handleClick('ref2')}>
                <span className="buttoncontato__text">Contato</span>
              </button>
              {/* onClick={handleDownload} */}
              <button className="buttondwnld" type="button" >
                <span className="buttondwnld__text">Download CV </span>
                <span className="buttondwnld__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" className="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
              </button>
            </div>
          </div>
        </section>
        <section className='XpAc' id='section3'>
          <div className='XP'>
            <div className='xptxt'>
              <h1>Experiência</h1>
              <h2>Avantti Pisos - nov/21 a ago/23</h2>
              <p>Criação de Landing Page<br/> 
              Criação de Sistema de automação de tarefas (Python)<br/> 
              Criação de Sistema Auxiliar de Produção (JS)<br/> 
              Gestão de integração do sistema ERP com o PCP<br/> 
              Atendimento ao cliente<br/> 
              Apoio ao setor de compras<br/> 

              </p>
            </div>
            <div className='xpelementos'>
              <img src={elementoxp} alt='elementos xp' className='elementoxp'/>
            </div>
          </div>
          <div className='AC'>
              <div className='acelementos'>
              <img src={elementoap} alt='elementos ac' className='elementoac'/>
              </div>
            <div className='actxt'>
            <h1>Acadêmico</h1>
            <h2>Análise e desenvolvimento de sistemas - Fiap (término dez/24)</h2>
              <p>Durante dois anos de estudo, está em desenvolvimento meus conhcimentos em Engenharia de Software e Modelos de Negócios, IA, Python, Java, DevOps, .NET, IoT e Mobile App Development, Linguagens de front-end(html/css/js/react.js+vite/next.js/scss), com o auxilio de projetos e cursos (Alura e Nano Cursos)</p>
            </div>
          </div>
        </section>
        <section className='projetos'>
          <div className='elementoprojeto'>
          <img src={elementoprjt} alt='elemento projeto' className='elementoprjt'/>
          <h1>{projetoAberto === 'projetos' ? 'PROJETOS' : 'Front-End'}</h1>
          </div>
          <div className="conteudoprojeto" >
          <div className='FrontprojetosAberto' style={{ width: widths.projectsFront, }}>
          <button className='setaVoltarBotao' onClick={handleBackArrowClick} style={{ display: parseInt(widths.projectsFront) === 0 ? 'none' : 'block' }}>
            <div className='setaVoltar'></div>
          </button>
            <div className='galeriaProjetosF'>
          <Swiper
          effect={ 'coverflow' }
          centeredSlides={ true }
          autoplay={{ delay: 5000 }}
          loop={ true }
          slidesPerView={1}
          navigation
          className='swiper_galeriaProjetos'
          >
            {data.map(item => (
        <SwiperSlide key={item.id} className='swiper-slider-div'>
          <img
            src={item.image}
            alt="slider"
            className="slide-item"
          />
          <Link to={item.link} target='_Blank' className="conteudoProjetosF">
            <h1>{item.hd}</h1>
            <p>{item.p}</p>
          </Link>
        </SwiperSlide>
      ))}
          </Swiper>
          </div>
          </div>
          <div className='projetosAll' style={{ width: widths.front }}>
            <div className='projetosfront' style={{ width: '100%' }}>
              <h1>FRONT-END</h1>
              <p>Projetos desenvolvidos em: <br/> Next.js | React.js+Vite | Html | CSS | JS</p>
              <button id='botaofront' className='botaovermais' onClick={handleFrontButtonClick}>
              <p>Conhecer</p>
              <div className='seta'>
                <div className='setacorpo'></div>
              </div>
            </button>
            </div>
            <div className='projetosback' style={{ width: '100%' }}>
            <h1>BACK-END & DATABASE</h1>
            <p>Projetos desenvolvidos em: <br/> Java | Phyton | SqL</p>
              <button id='botaoback' className='botaovermais'  onClick={handleBackButtonClick}>
              <p>Conhecer</p>
              <div className='seta'>
                <div className='setacorpo'></div>
              </div>
            </button>
            </div>
          </div>
            <div className='BackprojetosAberto' style={{ width: widths.projectsBack}} >
            <button className='setaVoltarBotao' onClick={handleBackArrowClick} style={{ display: parseInt(widths.projectsBack) === 0 ? 'none' : 'block' }}>
              <div className='setaVoltar'></div>
            </button>
            <div className='galeriaProjetosF'>
          <Swiper
          effect={ 'coverflow' }
          centeredSlides={ true }
          autoplay={{ delay: 5000 }}
          loop={ true }
          slidesPerView={1}
          navigation
          className='swiper_galeriaProjetos'
          >
            {dataBack.map(item => (
        <SwiperSlide key={item.id} className='swiper-slider-div'>
          <img
            src={item.image}
            alt="slider"
            className="slide-item"
          />
          <Link to={item.link} target='_Blank'className="conteudoProjetosF">
            <h1>{item.hd}</h1>
            <p>{item.p}</p>
          </Link>
        </SwiperSlide>
      ))}
          </Swiper>
          </div>
          </div>
          </div>
        </section>
        <section className='formulario' ref={ref2}>
          <div className='cabecalhoforms'>
          <h1>
          Se interessou?
          </h1>
          <p>Mande um email para conversarmos mais</p>
          </div>
        <div className="card">
          <form className="form" onSubmit={sendEmail}>
            <div className='juncao'>
              <div className="group">
              <input placeholder="‎" type="text" required="" onChange={(e) => setName(e.target.value)}
          value={name}/>
              <label htmlFor="">Name</label>
              </div>
              <div className=''></div>
          <div className="group">
              <input placeholder="‎" type="email" id="email" name="email" required="" onChange={(e) => setEmail(e.target.value)}
          value={email}/>
              <label htmlFor="">Email</label>
              </div>
            </div>
          <div className="group">
              <textarea placeholder="‎" id="comment" name="comment" rows="5" required="" onChange={(e) => setMessage(e.target.value)}
          value={message}></textarea>
              <label htmlFor="">Comment</label>
          </div>
          <div className='espacoB'>
            <button className='botaovermais' type='submit' value="Enviar">
              <p>Enviar</p>
              <div className='seta'>
                <div className='setacorpo'></div>
              </div>
            </button>
          </div>
            </form>
        </div>
        </section>
      </main>
    )
  }
