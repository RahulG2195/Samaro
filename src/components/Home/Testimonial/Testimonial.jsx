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
    quote: "We recently purchased flooring from Samaro, and we couldn't be happier! The selection of shades and patterns was impressive, allowing us to find exactly what we needed to match our home's décor. On top of that, the prices were very reasonable, and the quality of the flooring exceeded our expectations. The entire experience, from choosing the product to the installation, was smooth, and we're extremely satisfied with the results. Highly recommended!"
    ,
  },
  {
    name: "Ritu Sharma",
    location: "Gaziabad",
    quote: "I recently purchased flooring from Samaro Flooring, and I couldn't be happier with my decision. The variety of shades available made it easy for me to find the perfect match for my home. The prices were very reasonable, especially considering the high quality of the flooring. I'm thrilled with the results, and the customer service was exceptional throughout the entire process. I highly recommend Samaro Flooring to anyone looking for beautiful and affordable flooring options.",
  },
  {
    name: "Tanvir Nizam (Architect)",
    location: "Delhi",
    quote: "I recently purchased flooring from Samaro, and I couldn't be happier with the decision. The variety of shades and designs they offer is amazing - I found the perfect match for my home's interior. On top of that, the prices were very reasonable, offering excellent value for money. The customer service was outstanding, ensuring I was fully satisfied with my purchase from start to finish. I highly recommend Samaro for anyone looking for high-quality flooring at great prices.",
  },
  {
    name: "Jitendra",
    location: "",
    quote: "As a dealer, I've been thoroughly impressed with the offerings from Samaro Flooring. The variety in shades and finishes they provide is exceptional, allowing us to cater to diverse customer preferences. The pricing is competitive, enabling us to offer great deals to our customers without compromising on quality. We've received excellent feedback from end-users, and it’s clear that customer satisfaction is at the core of what Samaro does. Highly recommend them to any dealer looking for a reliable flooring partner.",
  },
  {
    name: "SPACEsio Beryl- (Shweta Mehta)",
    location: "Delhi",
    quote:"Working with Samaro Flooring as a distributor has been an absolute pleasure. Their extensive range of shades and patterns ensures that we always have the perfect options for our clients. The pricing is competitive, which makes it easier for us to offer great deals to our customers. Samaro Flooring consistently delivers high-quality products and exceptional customer service, making them a reliable partner in the flooring industry.",
  },

  // {
  //   name: "Calvin pais",
  //   location: "Mumbai",
  //   quote: "We recently purchased flooring from Samaro, and we couldn't be happier! The selection of shades and patterns was impressive, allowing us to find exactly what we needed to match our home's décor. On top of that, the prices were very reasonable, and the quality of the flooring exceeded our expectations. The entire experience, from choosing the product to the installation, was smooth, and we're extremely satisfied with the results. Highly recommended!"
  //   ,
  // },
  // {
  //   name: "Ritu Sharma",
  //   location: "Gaziabad",
  //   quote: "I recently purchased flooring from Samaro Flooring, and I couldn't be happier with my decision. The variety of shades available made it easy for me to find the perfect match for my home. The prices were very reasonable, especially considering the high quality of the flooring. I'm thrilled with the results, and the customer service was exceptional throughout the entire process. I highly recommend Samaro Flooring to anyone looking for beautiful and affordable flooring options.",
  // },
];


const TestimonialSwiper = () => {

  return (
    <div className="Testimonial container pb-5">
      <h1 className='py-5 text-center fw-bold text-navy text-capitalize'> Samaro success stories</h1>
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
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
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
          <SwiperSlide key={index}>
            <div className="content-wrapper card  p-4 rounded-2">
              <div className="content">
                <p>{`"${testimonial.quote}"`}</p>
                <p className="cite">- {testimonial.name}, {testimonial.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default TestimonialSwiper;
