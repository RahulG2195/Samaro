'Use client'
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import './Testimonials.css';

const testimonials = [
  {
    name: "Calvin pais",
    location: "Mumbai",
    type:"Customer",
    quote:"Samaro's flooring was a perfect match for our home. Great selection, reasonable prices, and excellent quality. The installation was smooth, and we highly recommend them!"
    ,
  },
  {
    name: "Ritu Sharma",
    location: "Gaziabad",
    type:"Customer",
    quote : "I recently bought flooring from Samaro Flooring and am very pleased. They had a great selection, reasonable prices, and excellent customer service. I highly recommend them."
  },
  {
    name: "Tanvir Nizam (Architect)",
    location: "Delhi",
    type:"Customer",
    quote : "I recently bought flooring from Samaro and am very impressed. They have a huge selection, great prices, and excellent customer service. I highly recommend them."
  },
  {
    name: " Sahu N Sons",
    location: "Mumbai",
    type:"Dealer",
    quote: "As a dealer, I've been extremely satisfied with Samaro Flooring's offerings. The variety in shades and styles is impressive, allowing us to cater to diverse customer preferences. The pricing is unbeatable, giving us a significant edge in the market. Our customers are consistently happy with the quality and durability of Samaro Flooring products, which has helped us build a loyal client base. Their customer support is top-notch, always ready to assist with any inquiries or orders.",
  },
  {
    name: "Jitendra",
    location: "",
    type:"Dealer",
    quote : "As a dealer, I've been thoroughly impressed with the offerings from Samaro Flooring. The variety in shades and finishes they provide is exceptional, allowing us to cater to diverse customer preferences. The pricing is competitive, enabling us to offer great deals to our customers without compromising on quality. We've received excellent feedback from end-users, and it’s clear that customer satisfaction is at the core of what Samaro does. Highly recommend them to any dealer looking for a reliable flooring partner."
  },
  {
    name: "SPACEsio Beryl- (Shweta Mehta)",
    location: "Delhi",
    type:"Distributor ",
    quote: "Working with Samaro Flooring as a distributor has been an absolute pleasure. Their extensive range of shades and patterns ensures that we always have the perfect options for our clients. The pricing is competitive, which makes it easier for us to offer great deals to our customers. Samaro Flooring consistently delivers high-quality products and exceptional customer service, making them a reliable partner in the flooring industry.",
  },
];


const TestimonialSwiper = () => {

  return (
    <div className="Testimonial container div_space " >
      <h1 className='pb-3 text-center fw-bold text-navy text-capitalize'> <u className='border-bottom border-danger border-3'>Samaro success stories</u></h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        navigation
        // pagination={{ clickable: true }}
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}

      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className='rounded-5'>
            <div className="shadow content-wrapper card rounded-5 border-1 overflow-hidden "style={{height:'523px'}}>
              <div className="content px-lg-5 px-md-4 px-sm-4 pt-4">
                <p className='lh-base fw-semibold text-navy p-2' style={{textAlign:'justify'}}>{`"${testimonial.quote}"`}</p>
              </div>
              <div className="cite  p-3 w-75">
                <p className='m-0 text-start text-white fs-6 type '>{testimonial.type} </p>
                <p className='m-0 text-start fw-medium text-white fs-5 name'>{testimonial.name} </p>
                <p className='m-0  text-white location'> {testimonial.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default TestimonialSwiper;
