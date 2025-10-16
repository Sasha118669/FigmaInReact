import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Swiper.css'
import HomeSwiperImg1 from './assets/pictures/HomeSwiperImg1.png'
import HomeSwiperImg2 from './assets/pictures/HomeSwiperImg2.png'

export default () => {
  return (
    <Swiper
      className='mySwiper'
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: false }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='SwiperSlide'>
        <img src={HomeSwiperImg1} alt="HomeSwiperImg1" />
        <img src={HomeSwiperImg2} alt="HomeSwiperImg2" />
      </SwiperSlide>
      <SwiperSlide className='SwiperSlide'>
        <img src={HomeSwiperImg1} alt="HomeSwiperImg1" />
        <img src={HomeSwiperImg2} alt="HomeSwiperImg2" />
      </SwiperSlide>
      <SwiperSlide className='SwiperSlide'>
        <img src={HomeSwiperImg1} alt="HomeSwiperImg1" />
        <img src={HomeSwiperImg2} alt="HomeSwiperImg2" />
      </SwiperSlide>
      <SwiperSlide className='SwiperSlide'>
        <img src={HomeSwiperImg1} alt="HomeSwiperImg1" />
        <img src={HomeSwiperImg2} alt="HomeSwiperImg2" />
      </SwiperSlide>
    </Swiper>
  );
};