import { Swiper, SwiperSlide} from 'swiper/react';
import './Home.scss';
import { Link } from 'react-router-dom';

// import { EffectCoverFlow, Pagination, Navigation } from 'swiper'; 

export default function Home() {
  const data = [
    { id: '1', image: 'https://i.ibb.co/xStjkPM/banner1.png '},
    { id: '2', image: 'https://i.ibb.co/q0FZH5L/banner2.png' },
    { id: '3', image: 'https://i.ibb.co/jVFDRb4/banner3.png' },
    { id: '4', image: 'https://i.ibb.co/r4s2NFR/banner4.png' },
    { id: '5', image: 'https://i.ibb.co/9n384Kk/banner5.png' },
    { id: '6', image: 'https://i.ibb.co/sjwdKHq/banner6.png' },
  ]
  const modelosBorda = [
    { id: '1', image: 'https://i.ibb.co/gZ0F2QG/Borda1.png'},
    { id: '2', image: 'https://i.ibb.co/N7x5N09/Borda2.png'},
    { id: '3', image: 'https://i.ibb.co/ZLBd3WR/Borda3.png'},
    { id: '4', image: 'https://i.ibb.co/2Z8mBQX/Borda4.png'},
  ]

  return (
    <main className='conteudo'>
      <div className='botaoWhatsapp'>
      <Link to={"https://api.whatsapp.com/send?phone=551123397412"} activeClassName="current" target='Blank'><img src="/img/logoWhatsapp.png" alt="botao whatsapp" /></Link>
      </div>
      <div className='bannerTopo'>
        <Swiper 
        slidesPerView={1}
        pagination={{ clickable: false}}
        navigation
        loop={true}
        autoplay={{ delay: 5000 }}
        >
          {data.map( (item) => (
            
              <SwiperSlide key={item.id}>
              <Link activeClassName="current">
              <img 
              src={item.image} 
              alt="slider"
              className="slide-item"
               /></Link>
            </SwiperSlide>
            
          ))}
        </Swiper>
      </div>
        <div className='conteudoBordas'>
          <div className='topoBordas'>
            <h1>Bordas</h1>
            <div className='linha'></div>
          </div>
          <div className='infoBordas'>
            <div className='textoBorda'>
                <p>           
                  Bordas de piscina <span>anti-derrapantes</span> e <span>atérmicas</span> , que garantem o conforto e a segurança mantendo a sofisticação. Confira os modelos abaixo
                </p>
            </div>
            
            <div className='imagem'>
              <img src="https://i.ibb.co/bJVTqSg/imgBorda.jpg" alt="imagem borda" height="360" width="520"/>
            </div>
            
          </div>
          
        </div>
        <div className='galeriaBordas'>
          <Swiper
            effect={ 'coverflow' }
            centeredSlides={ true }
            loop={ true }
            slidesPerView={3}
            coverflowEffect={
              {
                rotate: 5,
                stretch: 0,
                depth: 80,
                modifier: 1,
              }}
            navigation
            className='swiper_galeriaBorda'
            
          >
            {modelosBorda.map( (item) => (
              <SwiperSlide key={item.id}>
                <img 
                src={item.image} 
                alt="slider"
                className="slide-item"
                />
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
      <div className='botaoSaibaMais'>
      <Link to={"https://api.whatsapp.com/send?phone=551123397412"} activeClassName="current" target='Blank'>Saiba mais</Link>
      </div>
      <div className='infoPisos'>
      <div className='topoBordas'>
            <h1>Pisos</h1>
            <div className='linha'></div>
      </div>
          <div className='infoBordas'>
            
            <div className='imagem'>
              <img src="https://i.ibb.co/K00kkyH/Avante-Pisos-ALTA-19.jpg" alt="imagem piso" height="360" width="520"/>
            </div>
            <div className='textoBorda'>
                <p>
                  Mantendo o padrão de suas bordas, compre nossos pisos direto da fábrica, compre agora e receba <span>até 10%</span> de desconto!
                </p>
            </div>  
          </div>
          <div className='galeriaPisos'>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div className='botaoSaibaMais'>
          <Link to={"https://api.whatsapp.com/send?phone=551123397412"} activeClassName="current" target='Blank'>Saiba mais</Link>
      </div>
      </div>

    </main>
  )
}
