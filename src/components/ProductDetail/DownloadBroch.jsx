import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



// Initialize Swiper modules

const DownloadBroch = ({pdf}) => {
  const brochureImages = [
    {
      src: '/assets/images/brochure/Brochure.webp',
      alt: 'Brochure 1',
      link: '/#',
    },
    {
      src: '/assets/images/brochure/Brochure.webp',
      alt: 'Brochure 2',
      link: '/#',
    },
    // {
    //   src: '/assets/images/brochure/samaro_spc_flooring_lookbook_front-1.png',
    //   alt: 'Brochure 3',
    //   link: '/#',
    // },
    // {
    //   src: '/assets/images/brochure/samaro_spc_flooring_lookbook_front-1.png',
    //   alt: 'Brochure 4',
    //   link: '/#',
    // },
    // {
    //   src: '/assets/images/brochure/samaro_spc_flooring_lookbook_front-1.png',
    //   alt: 'Brochure 5',
    //   link: '/#',
    // },
    // Add more brochure objects as needed
  ];

  return (
    <section className='downbroch_Sec common_sec'>
      <div className='container'>
        <div className='sec_heading_Left my-2 my-md-4'>
          <h1 className='section_heading'>Download <strong>Brochure</strong></h1>
        </div>
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          // navigation={true}
          pagination={{ clickable: true }}
          className='swiper-container' // Add the swiper-container className
        >
          {brochureImages.map((image, index) => (
            <SwiperSlide key={index} className='row'>
              <div className='col-md-12 col-12 px-3'>
                <div className='brochure_imgdiv'>

                  <Link href={`/uploads/${pdf}`}
                      download={pdf}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={100}
                      height={100}
                      layout='responsive'
                      objectFit='cover'
                    />
                    {/* <a>
                      <button className='Downloadbtn text-danger border-danger rounded-pill py-1 me-2 fw-semibold px-4'>
                        Download</button>
                    </a> */}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </section>
  );
};

export default DownloadBroch;
