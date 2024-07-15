import React, { useState, useEffect } from 'react'
import "./SPCLVT.css"
import Link from 'next/link'
import axios from 'axios';

const Spclvt = () => {

    const [buildHomeData, setBuildHomeData] = useState({
        heading: "",
        description: "",
        feature1_icon: "",
        feature1_title: "",
        feature2_icon: "",
        feature2_title: "",
        feature3_icon: "",
        feature3_title: "",
      });
    

    useEffect(() => {
        const fetchBuildHomeData = async () => {
          try {
            const response = await axios.get("/api/admin/buildHome"); // Using API route for fetching data
            const data = response.data;
            setBuildHomeData({
              ...data,
              feature1_icon: data.feature1_icon || "",
              feature2_icon: data.feature2_icon || "",
              feature3_icon: data.feature3_icon || "",
            });
          } catch (error) {
            console.error("Error fetching build home data:", error);
          }
        };
    
        fetchBuildHomeData();
      }, []);


    return (
        <section className="mt-5 spc-lvt">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6 ">
                        <div className="content">
                            <h2 className="sub-heading fw-bold navyBlue col-md-8 col-12 ">
                                {buildHomeData.heading}
                                {/* Build a happy home with a Samaro floor */}
                            </h2>
                            <p className="mt-4 text-navy">
                            {buildHomeData.description}
                            {/* Step into your dream home, where every floorboard tells a story of happiness and inspiration. Let us be your partner in crafting a space that reflects your unique vision, one plank at a time, destined to last a lifetime. Whether your heart beats for the timeless elegance of Vinyl tiles & planks, the durability of SPC, or the luxury of LVT flooring, we're here to turn your renovation dreams into reality. */}
                            </p>
                        </div>
                        <div className="qualities px-4 mt-4 ">
                            <div className="d-flex flex-wrap justify-content-evenly py-2 " >
                                <div className="d-flex align-items-center gap-2 text-white installTxt">
                                    {/* <img src="/assets/images/home/spc-lvt/icons/Group 29194.svg" alt="" /> */}
                                    <img src={`/uploads/${buildHomeData.feature1_icon}`} alt="" />
                                    <span className=''>{buildHomeData.feature1_title}</span>
                                </div>
                                <div className="d-flex align-items-center gap-2 text-white">
                                    {/* <img src="/assets/images/home/spc-lvt/icons/2.png" alt="" /> */}
                                    <img src={`/uploads/${buildHomeData.feature2_icon}`} alt="" />
                                    <span className=''>{buildHomeData.feature2_title}</span>
                                </div>
                                <div className="d-flex align-items-center gap-2 text-white waterResistText waterDrop">
                                    {/* <img src="/assets/images/home/spc-lvt/icons/Group 29195.svg" alt="" /> */}
                                    <img src={`/uploads/${buildHomeData.feature3_icon}`} alt="" />
                                    <span className=''>{buildHomeData.feature3_title}</span>
                                    {/* <span className=''>100% Water-Resistant</span> */}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="images-wrapper">
                            <div className="img">
                                <img src="/assets/images/home/spc-lvt/1.png" alt="" />
                                <div className='text-center position-absolute onImgtext text-white'>
                                    <span className=' border-3 border-bottom px-2 fs-2 px-4 fw-semibold'>SPC</span>
                                    <p className='m-0 text-white small'>Click & Lock</p>
                                    <Link href="/product/All" className='discoverBtn button d-inline-block mt-3 px-3 py-1'>Know more </Link>
                                </div>
                            </div>
                            <div className="img-2">
                                <img src="/assets/images/home/spc-lvt/2.png" alt="" />
                                <div className='text-center position-absolute onImgtext2 text-white'>
                                    <span className=' border-3 border-bottom px-2 fs-2 px-4 fw-semibold'>LVT</span>
                                    <p className='m-0 text-white small'>Glue down</p>
                                    <Link href='/product' className='discoverBtn button d-inline-block mt-3 px-3 py-1'>Know more </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Spclvt