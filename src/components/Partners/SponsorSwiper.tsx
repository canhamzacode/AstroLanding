import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';

// Define the prop type correctly
interface Sponsor {
  src: string;
  alt: string;
}

interface SponsorsSwiperProps {
  allSponsors: Sponsor[];
}

const SponsorsSwiper: React.FC<SponsorsSwiperProps> = ({ allSponsors }) => {
  return (
    <div className="w-full mb-4 md:hidden">
      <Swiper
        spaceBetween={20}
        slidesPerView={3.5}
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
        className="flex items-center justify-center h-[55px]"
      >
        {allSponsors.map((sponsor, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center h-full">
            <div
              className="flex items-center justify-center p-2"
              style={{
                height: '55px'
              }}
            >
              <img
                src={sponsor.src}
                alt={sponsor.alt}
                className="h-full"
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

export default SponsorsSwiper;
