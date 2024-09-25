import React, { useState, useEffect } from 'react';
import "./Benefits.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import Link from 'next/link';
import axios from 'axios';

const Benefits = () => {
    const [benefit, setBenefit] = useState([]);
    const [sliderImages, setSliderImages] = useState([]);
    const [heading, setHeading] = useState('');


    useEffect(() => {
        const fetchBenefit = async () => {
            try {
                const response = await axios.get("/api/admin/benifits");
                // console.log(response)
                const benefitData = response.data;
                setBenefit(benefitData);


                // console.log("first all data beniftis ", benefitData)

                const sliderResponse = await axios.get("/api/admin/benefits_slider");
                const sliderData = sliderResponse.data[0];
                setHeading(sliderResponse.data[0].heading)
                // console.log("datatata",sliderData.image)

                // If sliderData is a string, split it into an array
                const formattedSliderImages = sliderData.image.split(',').map((image, index) => ({
                    url: `/uploads/${image.trim()}`,
                    alt: `Benefit ${index + 1}`
                }));
                console.log(formattedSliderImages)

                setSliderImages(formattedSliderImages);

                // Convert comma-separated strings to arrays
                // benefitData.icons = benefitData.icons.split(",");
                // benefitData.titles = benefitData.titles.split(",");
                // benefitData.slider_images = benefitData.slider_images.split(",");

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

    const benefitsIcon = benefit.map((benefit) => ({
        imageSrc: `/uploads/${benefit.icons}`,
        text: benefit.titles
    }));
    // console.log("icons data is ", benefit.icons)

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

    // const benifitsARR = slider.map((image, index) => ({
    //     url: `/uploads/${image.image}`,
    //     alt: `Benefit ${index + 1}`
    // }));

    return (
        <section className="benefits position-relative mt-5">

            <div className="mt-5">

                {/* <h2 className="text-navy benifitsHeading px-5 UpperBenifitsText pt-5">
                    Unlock Many Benefits <br />
                    with Click-N-Lock® Tiles
                </h2> */}
                <div className="row align-items-center justify-content-between ms-5 benifitscont">
                    <div className="col-lg-6 col-md-12 position-relative px-5  beniInnerCont">
                        <h2 className="text-navy benifitsHeading px-5 lowerBenifitsText w-75">
                            <u className='border-bottom border-danger'>{heading}</u>
                            {/* Unlock Many Benefits <br />
                            with Click-N-Lock® Tiles */}
                        </h2>
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
                                {benefitsIcon.map((item, index) => (
                                    <div key={index} className="col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                        <div className="image">
                                            <img src={item.imageSrc} alt="err" />
                                        </div>
                                        <span className="text-navy text small fw-semibold">{item.text}</span>
                                    </div>
                                ))}
                                {/* Dynamic data end */}
                                {/* <div className="col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                    <Link href={'/why-samaro'}>
                                        <div className="image">
                                            <img src="/assets/images/home/benefits/benefits/Group 28770.svg" alt="" />
                                        </div>
                                        <span className="text-navy text small fw-semibold">10 year Warrenty</span>
                                    </Link>
                                </div> */}
                            </div>
                        </div>

                        {/*  Swipper of benifits icons in mobile view */}


                        <div className='benifitsSwipper'>
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={3}
                                loop={true}
                                autoplay={{
                                    delay: 1000,
                                    disableOnInteraction: false,
                                }}
                                modules={[EffectFade, Autoplay]}
                            >
                                {benefitsIcon.map((item, index) => (
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
                            loop={true}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            modules={[EffectFade, Autoplay]}
                            className="mySwiper"
                        >
                            {sliderImages.map((item, index) => (
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