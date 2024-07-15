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
                <div className="col-lg-10 col-md-10 bg-navy text-white p-0" >
                    <div className="row align-items-center inner-row-one p-0">
                        <div className="col-lg-5 col-md-8 col-12 p-0 img-cont">
                            {/* <img src="/assets/images/why-samaro/dimensions/1.png" alt="" /> */}
                            <img src={`/uploads/${dimensionsData.plank_sizes_image_url}`} alt="img" />
                        </div>
                        <div className="col-lg-7 p-5 respPlanktxt pplrplank text-navy">
                            <h3 className='fw-bold'>
                                {dimensionsData.plank_sizes_heading}
                            </h3>
                            <p className='text-navy'>
                            {dimensionsData.plank_sizes_description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-end my-5">
                <div className="col-lg-10 col-md-8 bg-red text-white p-0" >
                    <div className="row align-items-center inner-row-two p-0">
                        <div className="col-lg-7 p-5 text-end odr1 respPlanktxt plnkThick p-0">
                            <h3 className='fw-bold text-darkred'>
                                {dimensionsData.plank_thickness_heading}
                            </h3>
                            <p className='text-navy '>
                                {dimensionsData.plank_thickness_description} </p> 
                            <div className='thickness text-navy'>
                                <img src={`/uploads/${dimensionsData.plank_thickness_image_1_url}`} alt="err" style={{ width: '40%' }} />
                                <span className='small mx-3'>{dimensionsData.plank_thickness_size_range_1}</span>
                                <img src={`/uploads/${dimensionsData.plank_thickness_image_2_url}`} alt="err" style={{ width: '50%' }} />
                                <span className='small mx-3'>{dimensionsData.plank_thickness_size_range_2}</span>
                                <img src={`/uploads/${dimensionsData.plank_thickness_image_3_url}`} alt="err" style={{ width: '60%' }} />
                                <span className='small mx-3 wl'>{dimensionsData.plank_thickness_size_range_3}</span>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-8 col-12 odr2 img-cont p-o">
                            <img src={`/uploads/${dimensionsData.plank_thickness_main_image_url}`} alt="" className='w-100' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dimensions