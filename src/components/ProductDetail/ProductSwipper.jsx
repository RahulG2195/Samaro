import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import 'swiper/css/thumbs';
import './productSwipper.css'

const ProductSwipper = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [deviceWidth, setDeviceWidth] = useState(null);
  // alert(deviceWidth);
  useEffect(() => {
    setDeviceWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div className='container row detailSwipper position-relative justify-content-end'>
        {/* multiimages left side  slider  */}
        <div className={`rhsSwiper col-sm-2 col-md-2 col-lg-2 ${(deviceWidth >= 600) ? '' : 'order-1'}`}>
          <Swiper
            loop={true}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={1}
            freeMode={true}

            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
            className={`mySwiper `}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className='sliderchild'>
                <img src={`/uploads/${image}`} alt={image} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Main slider  */}
        </div>
        <div className='col-sm-12 col-md-12 col-lg-12 position-relative MainSLdr'>
          <div className="navigation-arrows d-flex flex-row">

            <div className="swiper-button-prev"></div>

            <div className="swiper-button-next"></div>
          </div>
          <Swiper
            slidesPerView={1}
            loop={true}
            // navigation={true}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
            pagination={{ clickable: true }}

            className="mySwiper2 topSliderRes"
          >


            {images.map((image, index) => (
              <SwiperSlide key={index} className='sliderchild'>
                <img src={` /uploads/${image}`} alt={image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default ProductSwipper