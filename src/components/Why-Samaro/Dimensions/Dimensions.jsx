import React, { useEffect, useState } from 'react'
import "./Dimensions.css";
import axios from 'axios';

const Dimensions = () => {
    const [dimensionsData, setDimensionsData] = useState({
        plank_sizes_heading: '',
        plank_sizes_description: '',
        plank_sizes_image: '',
        plank_thickness_heading: '',
        plank_thickness_description: '',
        plank_thickness_main_image_url: '',
        plank_thickness_image_1: '',
        plank_thickness_size_range_1: '',
        plank_thickness_image_2: '',
        plank_thickness_size_range_2: '',
        plank_thickness_image_3: '',
        plank_thickness_size_range_3: ''
      });

      useEffect(() => {
        const fetchDimensionsData = async () => {
          try {
            const response = await axios.get('/api/admin/dimensions');
            if (response.status === 200) {
              setDimensionsData(response.data[0]); // Assuming there's only one row of dimensions data
            }
          } catch (error) {
            console.error('Error fetching dimensions data:', error);
          }
        };
    
        fetchDimensionsData();
      }, []);
    return (
        <section className='dimensions'>
            <div className="row">
                <div className="col-lg-10 col-md-10 bg-navy text-white " >
                    <div className="row align-items-center inner-row-one">
                        <div className="col-lg-5 col-md-8 col-12 ">
                            <img src="/assets/images/why-samaro/dimensions/1.png" alt="" />
                        </div>
                        <div className="col-lg-7 p-5 respPlanktxt pplrplank text-navy">
                            <h3 className='fw-bold'>
                                {/* Our Popular Plank Sizes */}
                                {dimensionsData.plank_sizes_heading}
                            </h3>
                            <p className='text-navy'>
                            {dimensionsData.plank_sizes_description}
                            {/* Explore endless possibilities with our popular plank sizes, curated for diverse tastes. From versatile widths to exquisite lengths, our selection ensures the perfect fit, seamlessly blending style and functionality. Transform your space with excellence as you choose from our acclaimed plank sizes, setting new standards in flooring.                           */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-end my-5">
                <div className="col-lg-10 col-md-8 bg-red text-white " >
                    <div className="row align-items-center inner-row-two">
                        <div className="col-lg-7 p-5 text-end odr1 respPlanktxt plnkThick">
                            <h3 className='fw-bold text-darkred'>
                                {/* Plank Thickness & Wear Layer */}
                                {dimensionsData.plank_thickness_heading}
                            </h3>
                            <p className='text-navy '>
                                {dimensionsData.plank_thickness_description}
                            {/* Discover the Perfect Balance of Optimal strength and Style  */}      
                                                </p> 
                            <div className='thickness text-navy'>
                                <img src="/assets/images/why-samaro/dimensions/Group 28285.svg" alt="err" style={{ width: '40%' }} />
                                {/* <img src={dimensionsData.plank_thickness_image_1} alt="err" style={{ width: '40%' }} /> */}
                                <span className='small mx-3'>{dimensionsData.plank_thickness_size_range_1}</span>
                                <img src="/assets/images/why-samaro/dimensions/Group 28287.svg" alt="err" style={{ width: '50%' }} />
                                {/* <img src={dimensionsData.plank_thickness_image_2} alt="err" style={{ width: '50%' }} /> */}
                                <span className='small mx-3'>{dimensionsData.plank_thickness_size_range_2}</span>
                                <img src="/assets/images/why-samaro/dimensions/Group 28289.svg" alt="err" style={{ width: '60%' }} />
                                {/* <img src={dimensionsData.plank_thickness_image_3} alt="err" style={{ width: '60%' }} /> */}
                                <span className='small mx-3 wl'>{dimensionsData.plank_thickness_size_range_3}</span>
                            </div>
                        </div>
                        <div className="col-lg-5  col-md-8 col-12 odr2">
                            <img src="/assets/images/why-samaro/dimensions/2.png" alt="" />
                            <img src={dimensionsData.plank_thickness_main_image_url} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dimensions