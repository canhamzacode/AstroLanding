import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { allUseCaseData } from './UsecaseData';
import UsecaseCard from './UsecaseCard';

const UsecaseSwipper = ({ imageUrls }: { imageUrls: string[] }) => {
  return (
    <div className="md:hidden flex">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {allUseCaseData.map((data, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrls[index]} alt="img" className="w-[80%] mx-auto" />
            <UsecaseCard description={data.description} title={data.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UsecaseSwipper;
