// TestimonialSwiper.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Import Navigation styles
import 'swiper/css/pagination'; // Import Pagination styles

import { Navigation, Pagination } from 'swiper/modules'; // Import Swiper modules

import './Testimonials.css'; // Import your custom CSS

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    place: 'New York',
    review: 'This is an amazing product! Highly recommended. I was truly impressed with the quality and customer service. This has exceeded my expectations in every way. The details and craftsmanship are top-notch. I would definitely recommend this to anyone looking for something special.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    place: 'Los Angeles',
    review: 'I had a great experience. Will buy again! The delivery was prompt, and the product was exactly as described. I’m very satisfied with the purchase and will consider buying more products from this seller in the future.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    place: 'Chicago',
    review: 'Fantastic service and support. The customer support team went above and beyond to ensure that my needs were met. They were very responsive and helpful throughout the entire process. I truly appreciate their dedication and hard work.',
  },
  // Add more testimonials as needed
];

const TestimonialSwiper = () => {
  return (
    <div className="testimonial-swiper container pb-5">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }} // Ensure pagination is enabled
        navigation={true} // Enable navigation
        loop={true}
        modules={[Navigation, Pagination]} // Register the modules
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className='py-5 px-5'>
            <div className="testimonial">
              <div className="testimonial-content">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-place">{testimonial.place}</p>
                <p className="testimonial-review">"{testimonial.review}"</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Navigation buttons will be added automatically */}
    </div>
  );
};

export default TestimonialSwiper;
