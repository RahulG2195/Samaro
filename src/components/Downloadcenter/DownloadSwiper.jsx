import React, { useState } from 'react';
import DownloadCenterCard from '@/components/Downloadcenter/DownloadCenterCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../../components/Downloadcenter/dwnld.css';


const DownloadSwiper = ({ Badgetitle, title, cardData, active }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  if (!active) return null;


  return (
    <div className='container brochureCont position-relative mb-5'>
      <h1 className='fw-bold text-navy border-bottom border-danger border-4 mb-4 px-5'>{title}</h1>
      <div className={`col-12 col-lg-12`}>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={40}
          slidesPerView={3}
          freeMode={true}
          modules={[FreeMode, Navigation, Thumbs]}
          navigation={true}
          className={`mySwiper px-lg-5 mx-lg-5`}
          breakpoints={{
            300: { slidesPerView: 2, spaceBetween: 10 },
            576: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 40 },
            992: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index} className='sliderchild '>
              <DownloadCenterCard
                imgurl={`/uploads/${card.imgurl}`}
                // Badge={card.Badgetitle}
                pdf={card.pdf}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DownloadSwiper;