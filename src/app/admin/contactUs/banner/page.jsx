"use client"
import React, { useEffect, useState } from 'react';
import HeroBanner from '@/components/Admin/Home/HeroBanner.jsx';
import axios from 'axios';

const page = () => {
    const [initialData, setInitialData] = useState([]);

    useEffect(() => {
        const fetchBanner = async() =>{
            const response = await axios.get("/api/admin/heroBanners")
            const banner = response.data
            const homepageBanner = banner.filter(banner => banner.banner_id === 3);
            setInitialData(homepageBanner)
           
        }

        fetchBanner();

    }, [])

    return <HeroBanner pageName="Contact Us page" initialData={initialData} isEditing={true} />;
};


// Usage in other pages similarly

export default page;
