"use client"
import React, { useEffect, useState } from 'react';
import HeroBanner from '@/components/Admin/Home/HeroBanner.jsx';
import axios from 'axios';

const page = () => {
    const [initialData, setInitialData] = useState([]);
    // console.log("intial data ",initialData  )

    useEffect(() => {
        const fetchBanner = async() =>{
            const response = await axios.get("/api/admin/heroBanners")
            const banner = response.data
            const homepageBanner = banner.filter(banner => banner.banner_id === 3);
            setInitialData(homepageBanner)
           
        }

        fetchBanner();

    }, [])

    //   const initialData = [
    //     { id: 1, Image: 'about_image.jpg', Banner_title: 'Home page', Banner_Content: 'Lorem ipsum dolor sit amet.' },
    //   ];
    // console.log("data is going",initialData)

    return <HeroBanner pageName="Contact Us page" initialData={initialData} isEditing={true} />;
};


// Usage in other pages similarly

export default page;
