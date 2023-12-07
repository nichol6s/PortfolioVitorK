import { Swiper, SwiperSlide} from 'swiper/react';
import './Home.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';

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
  const modelosPiso = [
    { id: '1', image: 'https://i.ibb.co/H4Np6WG/Piso50.png'},
    { id: '2', image: 'https://i.ibb.co/xjwYfML/Piso60.png'},
    { id: '3', image: 'https://i.ibb.co/p4thRqT/Piso75.png'},
    { id: '4', image: 'https://i.ibb.co/tPTMprF/Piso100.png'},
    { id: '5', image: 'https://i.ibb.co/7Vq24XS/grelha.png'},
  ]
  const videos = [
    { id: '1', image: "https://vimeo.com/892301939"},
    { id: '2', image: '/img/Piso60.png'},
    { id: '3', image: '/img/Piso75.png'},
    { id: '4', image: '/img/Piso100.png'},
    { id: '5', image: '/img/grelha.png'},
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
                depth: 0,
                modifier: 2,
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
      <div className='conteudoPisos'>
      <div className='topoPisos'>
            <h1>Pisos</h1>
            <div className='linha'></div>
      </div>
          <div className='infoPisos'>
            <div className='imagemPiso'>
              <img src="https://i.ibb.co/wRhV2M3/Avante-Pisos-ALTA-1-1.jpg" alt="imagem piso" height="360" width="520"/>
            </div>
            <div className='textoPisos'>
                <p className='textoPisos-p'>
                  Mantendo o padrão de suas bordas, compre nossos pisos direto da fábrica, compre agora e receba <span>até 10%</span> de desconto!
                </p>
            </div>  
          </div>
          <div className='galeriaPisos'>
          <Swiper
            effect={ 'coverflow' }
            centeredSlides={ true }
            loop={ true }
            slidesPerView={3}
            coverflowEffect={
              {
                rotate: 5,
                stretch: 0,
                depth: 0,
                modifier: 2,
              }}
            navigation
            className='swiper_galeriaPiso'
            
          >
            {modelosPiso.map( (item) => (
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
      </div>
      <div className='review'>
      <Helmet>
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer />
      </Helmet>
      <div className="elfsight-app-c1c6da59-90e0-489f-8dc0-e1747e2d3e9b" data-elfsight-app-lazy />
      </div>
      <div className='videos'>
        <h1>Video de nossos clientes</h1>

        <Swiper
            effect={ 'coverflow' }
            centeredSlides={ true }
            loop={ true }
            slidesPerView={3}
            coverflowEffect={
              {
                rotate: 5,
                stretch: 0,
                depth: 0,
                modifier: 2,
              }}
            navigation
            className='swiper_galeriaVideos'
            
          >
            {videos.map( (item) => (
              <SwiperSlide key={item.id}>
                <ReactPlayer
                  url={item.image}
                  width="100%"
                  height="100%"
                  controls={true}
                />
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </main>
  )
}
