import React, { useState, useEffect } from 'react';
import "./Benefits.css";
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import axios from 'axios';

const Benefits = () => {
    const [benefit, setBenefit] = useState({
        heading: "",
        icons: [],
        titles: [],
        slider_images: []
    });

    useEffect(() => {
        const fetchBenefit = async () => {
            try {
                const response = await axios.get("/api/admin/benifits");
                const benefitData = response.data[0]; // Assuming the API returns an array with one object

                // Convert comma-separated strings to arrays
                benefitData.icons = benefitData.icons.split(",");
                benefitData.titles = benefitData.titles.split(",");
                benefitData.slider_images = benefitData.slider_images.split(",");

                setBenefit(benefitData);
            } catch (error) {
                console.error("Error fetching benefit:", error);
            }
        };

        fetchBenefit();
    }, []);

    // const benifitsIcon = [
    //     { imageSrc: "/assets/images/home/benefits/benefits/weather.png", text: "Weather Proof" },
    //     { imageSrc: "/assets/images/home/benefits/benefits/waterproof.png", text: "100% waterproof" },
    //     { imageSrc: "/assets/images/home/benefits/benefits/lock.png", text: "CLICK N LOCK INSTALLATION" },
    //     { imageSrc: "/assets/images/home/benefits/benefits/scratch.png", text: "SCRATCH RESISTANT" },
    //     { imageSrc: "/assets/images/home/benefits/benefits/termite.png", text: "TERMITE PROOF" },
    //     { imageSrc: "/assets/images/home/benefits/benefits/glue-free.png", text: "GLUE FREE APPLICATION" },
    //     { imageSrc: "/assets/images/home/benefits/benefits/fire-resistant.png", text: "FIRE RESISTANT" },
    //     { imageSrc: "/assets/images/home/benefits/benefits/stain-protection.png", text: "STAIN PROTECTION" },
    //     { imageSrc: "/assets/images/home/benefits/benefits/dust-free.png", text: "DUST FREE INSTALLATION" },
    //     { imageSrc: "/assets/images/home/benefits/benefits/recyclable.png", text: "100% RECYCLABLE" },
    //     { imageSrc: "/assets/images/home/benefits/benefits/durability.png", text: "DURABILITY" },
    //     // { imageSrc: "/assets/images/home/benefits/benefits/Group 28770.svg", text: "Know Now" },
    // ];



    // dynamic data for icon and titie

    const benifitsIcon = benefit.icons.map((icon, index) => ({
        imageSrc: `/uploads/${icon}`,
        text: benefit.titles[index]
    }));

    // const benifitsARR = [
    //     {
    //         url: "/assets/images/home/benefits/Mask Group 323.png",
    //         alt: 'err'
    //     },
    //     {
    //         url: "/assets/images/home/benefits/Mask Group 322.png",
    //         alt: 'err'
    //     },
    //     {
    //         url: "/assets/images/home/benefits/Mask Group 324.png",
    //         alt: 'err'
    //     },
    //     {
    //         url: "/assets/images/home/benefits/Mask Group 325.png",
    //         alt: 'err'
    //     },
    // ]

    //dynamic data of slider

    const benifitsARR = benefit.slider_images.map((image, index) => ({
        url: `/uploads/${image}`,
        alt: `Benefit ${index + 1}`
    }));

    return (
        <section className="benefits position-relative">

            <div className="mt-3">

                {/* <h2 className="text-navy benifitsHeading px-5 UpperBenifitsText pt-5">
                    Unlock Many Benefits <br />
                    with Click-N-Lock® Tiles
                </h2> */}
                <div className="row align-items-center justify-content-between ms-5 benifitscont">
                    <div className="col-lg-6 col-md-12 position-relative px-5  beniInnerCont">
                        <h4 className="text-navy benifitsHeading px-5 lowerBenifitsText w-75">
                            {benefit.heading}
                            {/* Unlock Many Benefits <br />
                            with Click-N-Lock® Tiles */}
                        </h4>
                        <img src="/assets/images/home/benefits/Mask Group 325.png" alt="" className='upperimage' />
                        <div className="topcorner">
                            <img src="/assets/images/home/benefits/Group 27837.svg" alt="err" />
                        </div>
                        <div className="bottomcorner">
                            <img src="/assets/images/home/benefits/Group 27834.svg" alt="err" />
                        </div>

                        {/* dynamic data """ " */}
                        <div className="column-wrapper px-5 benifitsinDesktop">
                            <div className="row g-4 mt-1 respBenifitrow">
                                {benifitsIcon.map((item, index) => (
                                    <div key={index} className="col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                        <div className="image">
                                            <img src={item.imageSrc} alt={item.text} />
                                        </div>
                                        <span className="text-navy text small fw-semibold">{item.text}</span>
                                    </div>
                                ))}
                                {/* Dynamic data end */}
                                <div className="col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                    <Link href={'/why-samaro'}>
                                        <div className="image">
                                            <img src="/assets/images/home/benefits/benefits/Group 28770.svg" alt="" />
                                        </div>
                                        <span className="text-navy text small fw-semibold">Know Now</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/*  Swipper of benifits icons in mobile view */}


                        <div className='benifitsSwipper'>
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={3}
                                modules={[EffectFade, Autoplay]}
                                loop={true}
                                autoplay={{
                                    delay: 1000,
                                }}
                            >
                                {benifitsIcon.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="column-wrapper my-3">
                                            <div className="row g-5 respBenifitrow px-0">
                                                <div className=" text-center">
                                                    <div className="image">
                                                        <img src={item.imageSrc} alt="" />
                                                    </div>
                                                    <span className="text-navy text small fw-semibold">{item.text}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>


                    </div>
                    <div className="col-lg-6 col-md-6 col-12 benifitsRightSide">

                        <Swiper
                            effect='fade'
                            slidesPerView={1}
                            spaceBetween={0}
                            modules={[EffectFade, Autoplay]}
                            loop={true}
                            autoplay={{
                                delay: 1000,
                            }}
                            className="mySwiper"
                        >
                            {benifitsARR.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='benifitsSliderImage'>
                                        <img src={item.url} className="rightside-image" alt={item.alt} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits