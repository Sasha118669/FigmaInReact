import React from "react";
import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import './CustomSwiper.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CustomSwiper({ content1}) {
  useEffect(() => {
    const swiper = new Swiper('.CustomSwiper', {
      modules: [Navigation, Pagination],
      spaceBetween: 30,
      slidesPerView: 1,

      navigation: {
        nextEl: '.custom-next',
        // prevEl: '.custom-prev',
      },
       pagination: {
        el: '.custom-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },
    });

    // очищаем свайпер при размонтировании
    return () => swiper.destroy();
  }, []);

  return (
    <div className="swiper CustomSwiper">
      <div className="swiper-wrapper">

        <div className="swiper-slide CustomSwiperSlide">
          <div className="swiper-content">{content1}</div>
        </div>

        <div className="swiper-slide CustomSwiperSlide">
          <div className="swiper-content">{content1}</div>
        </div>

        <div className="swiper-slide CustomSwiperSlide">
          <div className="swiper-content">{content1}</div>
        </div>

      </div>

      {/* <div className="custom-prev">◀</div> */}

      <div className="custom-nav">
      <div className="custom-pagination"></div>
      <div className="custom-next">Next</div>
      </div>

    </div>
  );
}
