'Use client'
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Import Navigation styles
import 'swiper/css/pagination'; // Import Pagination styles

import { Navigation, Pagination } from 'swiper/modules'; // Import Swiper modules

import './Testimonials.css'; // Import your custom CSS

const testimonials = [
  {
    title: "Mussum Ipsum",
    subtitle: "Mussum Ipsum",
    text: "Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Quem manda na minha terra sou euzis!",
  },
  {
    title: "Mussum Ipsum",
    subtitle: "Mussum Ipsum",
    text: "Cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Quem manda na minha terra sou euzis!",
  },
  {
    title: "Mussum Ipsum",
    subtitle: "Mussum Ipsum",
    text: "Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Quem manda na minha terra sou euzis!",
  },
  {
    title: "Mussum Ipsum",
    subtitle: "Mussum Ipsum",
    text: "Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Quem manda na minha terra sou euzis!",
  },
  {
    title: "Mussum Ipsum",
    subtitle: "Mussum Ipsum",
    text: "Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Quem manda na minha terra sou euzis!",
  },
];



const TestimonialSwiper = () => {

  return (
    <div className="section-testmonials position-relative container py-5">
      <div className="column-testmonials border-end border-2 px-2">
        <div className="section-details">
          <h1 className="fw-bold text-danger fs-1 border-bottom border-danger py-3 ">What Our Client Say</h1>
          <p className="fw-medium">Discover what our clients have to say about their experience with</p>
        </div>
        
      </div>
      <div className="swiper-testmonials px-5">
        <Swiper
          modules={[Navigation]} // Include Navigation module
          loop={true}
          spaceBetween={0}
          slidesPerView={1.2}
          grabCursor={true}
          navigation={{
            nextEl: '.swiper-button-testmonials-next',
            prevEl: '.swiper-button-testmonials-prev',
          }}
          breakpoints={{
            500: {
              slidesPerView: 1.4,
            },
            780: {
              slidesPerView: 1.8,
            },
            1300: {
              slidesPerView: 2,
            },
            1630: {
              slidesPerView: 3.6,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="card-slide p-2">
                <div className="head-slide">
                </div>
                <p className="text-slide">{testimonial.text}</p>
                <div className="title-slide">
                  <h4>{testimonial.title}</h4>
                  <h6>{testimonial.subtitle}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="navigation-testmonials">
          <div className="swiper-button-testmonials-prev ">Prev</div>
          <div className="swiper-button-testmonials-next ">Next</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSwiper;
