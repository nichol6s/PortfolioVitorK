import { Swiper, SwiperSlide} from 'swiper/react';
import './Home.scss';
import { Link } from 'react-router-dom';

// import { EffectCoverFlow, Pagination, Navigation } from 'swiper'; 

export default function Home() {
  const data = [
    { id: '1', image: '/img/banner1.png' },
    { id: '2', image: '/img/banner2.png' },
    { id: '3', image: '/img/banner3.png' },
    { id: '4', image: '/img/banner4.png' },
    { id: '5', image: '/img/banner5.png' },
    { id: '6', image: '/img/banner6.png' },
  ]
  const modelosBorda = [
    { id: '1', image: '/img/Borda1.png'},
    { id: '2', image: '/img/Borda2.png'},
    { id: '3', image: '/img/Borda3.png'},
    { id: '4', image: '/img/Borda4.png'},
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
              <Link to={"https://api.whatsapp.com/send?phone=551123397412"} activeClassName="current" target='Blank'>
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
                Eleve o charme da sua área de lazer com os incríveis pisos e bordas da Linha Riviera. Elegância e praticidade, o toque exclusivo que sua piscina merece! 💦✨ #RivieraStyle #PiscinaComEstilo
                </p>
            </div>
            
            <div className='imagem'>
              <img src="/img/imgBorda.jpg" alt="imagem borda" height="360" width="520"/>
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
    </main>
  )
}
