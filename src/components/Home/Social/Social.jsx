import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, Navigation, Pagination  } from 'swiper/modules';
import Link from 'next/link';
import axios from 'axios';
import "./Social.css";



const Social = () => {
    const [feed, setFeed] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQWRQYlhnWXE5dkV4bXZAVNnh5LUxyWl90Rm9QMW00ZAUcwNExVSWU0UHpFNWxXRlJLNjJLdkdSZA1lhYllRejNJQzU3S1dFZAHFob2xqY1NYNUpCNWp6Vklaemp2WjZALaFRzcE5famstUzJNRTdjN1F4U0pyR2wxNE0ZD';
                const response = await axios.get(url);
                setFeed(response.data.data);

                // Log media URLs for images
                response.data.data.forEach(item => {
                    if (item.media_type === 'IMAGE') {
                        console.log("Image media_url: ", item.media_url);
                    }
                });
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="social">
            <div className="container h-screen">
                <h2 className="text-center">let's get <span>social</span></h2>
                <div className='d-flex align-items-center justify-content-center mt-4 mb-3 instagramimg'>
                    <div className='instaLogo'><img src="/assets/images/home/social/Group 29049.svg" alt="err" className='w-75' /></div>
                    <div>
                    <a href="https://www.instagram.com/samaroflooring?igsh=amowMmMyeHU1eXVh" target="_blank" className='idAndbio'>
                        <span className='instaid'>@SAMAROFLOORING</span>
                        <p className='instabio'>Where Indian Craftsmanship Meets Global Luxury, <br />Ready to Elevate Your World.</p>
                    </a>
                    </div>
                </div>

                {/* Swiper Carousel */}
                <div className="swiper-container">
                    <Swiper
                       spaceBetween={30}
                       slidesPerView={3}
                       loop={true}
                       pagination={true}
                       autoplay={{
                           delay: 4000,
                           disableOnInteraction: false,
                       }}
                       breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                       modules={[Autoplay, Navigation, Pagination]}
                    >
                        {feed
                            .filter(item => item.media_type === 'IMAGE')
                            .map(item => (
                                <SwiperSlide key={item.id}>
                                    <a href={item.permalink} target="_blank" rel="noopener noreferrer">
                                        <img src={item.media_url} alt={item.caption} className='swiper-slide-image rounded' />
                                    </a>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Social;
