import { Swiper, SwiperSlide} from 'swiper/react'
import './Home.scss'
import { Link } from 'react-router-dom'

export default function Home() {
  const data = [
    { id: '1', image: '/img/1.png' },
    { id: '2', image: '/img/2.png' },
    { id: '3', image: '/img/3.png' },
    { id: '4', image: '/img/4.png' },
    { id: '5', image: '/img/5.png' },
    { id: '6', image: '/img/6.png' },
  ]
  return (
    <div>
      <div className='botaoWhatsapp'>
      <a href="https://api.whatsapp.com/send?phone=551123397412" target='Blank'><img src="/img/logoWhatsapp.png" alt="botao whatsapp" /></a>
      </div>
      <Swiper 
        slidesPerView={1}
        pagination={{ clickable: false}}
        navigation
        >
          {data.map( (item) => (
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
  )
}
