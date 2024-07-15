import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import './whySmbanner.css'
import axios from 'axios';

const Banner = () => {
    const [videoData, setVideoData] = useState({
        video: ''
    });
    const [videoUrl, setVideoUrl] = useState('')

    useEffect(() => {
        // Fetch video data based on videoId
        const fetchVideoData = async () => {
            try {
                const response = await axios.get(`/api/admin/whysamaro_video`); // Adjust endpoint as per your API route
                setVideoData(response.data);
                setVideoUrl(`/uploads/${response.data.video}`);

            } catch (error) {
                console.error('Error fetching video data:', error);
            }
        };

        fetchVideoData();
    }, []);

    return (
       
        <section className='banner  whysamaro_sec'>
        {videoUrl ? (
            <video autoPlay muted loop className='w-100' >
                <source src={videoUrl} type="video/mp4" />
            </video>
        ) : (
            <p>Loading video...</p>
        )}
    </section>

    )
}

export default Banner