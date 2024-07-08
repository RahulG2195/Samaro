import React, { useEffect, useState } from 'react'
import './Newsletter.css'
import axios from 'axios';

const NewLaunchCard = () => {

    const [initialData, setInitialData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    // console.log("data is ",initialData[0].banner_title)

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const response = await axios.get("/api/admin/heroBanners");
                const banner = response.data;
                const homepageBanner = banner.filter(b => b.banner_id === 4);
                setInitialData(homepageBanner);
                setIsLoading(false); // Set loading to false after data is fetched
            } catch (err) {
                setError(err);
                setIsLoading(false); // Set loading to false even if there's an error
            }
        };

        fetchBanner();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading banner data: {error.message}</div>;
    }

    if (initialData.length === 0) {
        return <div>No banner data available.</div>;
    }
    const banner_title = initialData[0].banner_title;
    const bannerContent = initialData[0].banner_content;
    const bannerImg = initialData[0].banner_img;



    return (
        <>
            <div className='row my-5 align-items-center newlaunchCard'>
                <div className='col-md-8 col-12'>
                    <img src={`/uploads/${bannerImg}`} alt="err" />
                </div>
                <div className='col-md-4 col-12 cardCont position-absolute'>
                    <div className='card px-4 py-5 rounded-4'>
                        <div className="cardBody py-3">
                            {/* <h5 className=''>Get to know our SPC Collection</h5> */}
                            <h5 className=''>{banner_title}</h5>
                            <p className=' m-0 pb-3 p-0 fw-normal'>{bannerContent}</p>
                            <button className='btn text-danger border-3 border-danger rounded-pill py-0 px-4 me-2 fw-semibold'>{initialData[0].button_text}</button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default NewLaunchCard