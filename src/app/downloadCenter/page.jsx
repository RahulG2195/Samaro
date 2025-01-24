"use client"
import React, { useEffect, useState } from 'react';
import '../../components/Downloadcenter/dwnld.css'
import DownloadCenterCard from '@/components/Downloadcenter/DownloadCenterCard'
import DownloadSwiper from '@/components/Downloadcenter/DownloadSwiper';
import axios from 'axios';

const page = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [downloads, setDownloads] = useState([]);
  const [categories, setCategories] = useState([]); // Added categories state
  const [dataByCategory, setDataByCategory] = useState({
    All: [],
    Brochure: [],
    'Installation Guide': [],
    Warranty: [],
  }); // This will hold data categorized by type

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('/api/admin/main_dcPage');
            const data = response.data;

            // Get unique categories dynamically
            const uniqueCategories = [
              'All',
              ...new Set(data.map(item => item.dc_category)) // Extract unique categories from the response
            ];
            setCategories(uniqueCategories);

            // Categorize the data
            const categorizedData = {
              All: data,
              ...uniqueCategories.reduce((acc, category) => {
                acc[category] = data.filter(item => item.dc_category === category);
                return acc;
              }, {}),
            };
            setDataByCategory(categorizedData);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
  }, []);

  return (
    <section className='py-5 dwnldCentermainCont'>
      <div className='text-center dwnldcenterHeading'>
        <h1 className='fw-bold text-navy fw-bold text-capitalize'>Download center</h1>
        <div className='dwnldcenterFilters my-4 d-flex justify-content-center flex-wrap gap-2'>
          {/* Dynamically render category buttons */}
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)} 
              className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === category && 'bg-danger text-white'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamically render DownloadSwiper for each category */}
      {categories.map(category => (
        <DownloadSwiper 
          key={category}
          title={category}
          cardData={dataByCategory[category]} 
          active={activeCategory === 'All' || activeCategory === category} 
        />
      ))}
    </section>
  );
};

export default page;
