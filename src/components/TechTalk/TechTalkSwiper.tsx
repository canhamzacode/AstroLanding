import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import { providerImg } from '../UseCase/UsecaseData';

const TechTalkSwiper = () => {
  return (
    <div className="w-full my-14 mb-4 md:hidden">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 4
          },
          768: {
            slidesPerView: 6
          },
          1024: {
            slidesPerView: 8
          }
        }}
        className="w-full"
      >
        {providerImg.map((data, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div
              className="border border-white/15 rounded-2xl flex items-center justify-center md:p-7 p-3 h-32"
              style={{
                minHeight: '8rem',
                maxHeight: '8rem'
              }}
            >
              <img
                src={data.src}
                alt="open ai"
                className="h-full max-h-full"
                style={{
                  objectFit: 'contain'
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TechTalkSwiper;
