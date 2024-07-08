import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import './whySmbanner.css'
import axios from 'axios';

const Banner = () => {
    const [videoData, setVideoData] = useState({
        video: ''
    });

    useEffect(() => {
        // Fetch video data based on videoId
        const fetchVideoData = async () => {
            try {
                const response = await axios.get(`/api/admin/whysamaro_video`); // Adjust endpoint as per your API route
                setVideoData(response.data);
            } catch (error) {
                console.error('Error fetching video data:', error);
            }
        };

        fetchVideoData();
    }, []);

    return (
        <section className='banner why-samaro whysamaro_sec position-relative'>


            <video autoPlay muted loop className='w-100 '>
                <source src="assets/images/why-samaro/Samaro- About us Page1.mp4" type="video/mp4" />
                {/* <source src={videoData.video} type="video/mp4" /> */}
                Your browser does not support the video tag.
            </video>

        </section>

    )
}

export default Banner