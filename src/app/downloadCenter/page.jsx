"use client"
import React, { useEffect, useState } from 'react';
import '../../components/Downloadcenter/dwnld.css'
import DownloadCenterCard from '@/components/Downloadcenter/DownloadCenterCard'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
import DownloadSwiper from '@/components/Downloadcenter/DownloadSwiper';
import axios from 'axios';

const page = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [downloads, setDownloads] = useState([]);
  const [brocardData, setBrochureData] = useState([]);
  const [installationData, setInstallationData] = useState([]);
  const [warrantyData, setWarrantyData] = useState([]);
 
  // const brocardData = [
  //   {
  //     imgurl: '/assets/images/brochure/Brochure.png',
  //     title: 'Seven tips to help you get better flooring design & Concept',
  //     date: 'November 11,2023 |',
  //     author: 'By Anand Kashyap',
  //     Badgetitle:"SPC Tuscany",
  //     pdf: 'Samara flooring product installation guide.docx'

  //   },
  //   {
  //     imgurl: '/assets/images/brochure/Brochure.png',
  //     title: 'Seven tips to help you get better flooring design & Concept',
  //     date: 'November 11,2023 |',
  //     author: 'By Anand Kashyap',
  //     Badgetitle:"SPC Sicilian",
  //     pdf: 'Samara flooring product installation guide.docx'


  //   },
  // ]
  // const installationData = [  
  //   {
  //     imgurl: 'assets/images/brochure/Brochure.png',
  //     title: 'Seven tips to help you get better flooring design & Concept',
  //     date: 'November 11,2023 |',
  //     author: 'By Anand Kashyap',
  //     Badgetitle:"Installation",
  //     pdf: 'Samara flooring product installation guide.docx'


  //   },
    
  // ]
  // const warrantyData = [
  //   {
  //     imgurl: 'assets/images/brochure/Brochure.png',
  //     title: 'Seven tips to help you get better flooring design & Concept',
  //     date: 'November 11,2023 |',
  //     author: 'By Anand Kashyap',
  //     Badgetitle:"Warrenty",
  //     pdf: 'Samara flooring product installation guide.docx'


  //   },
    
  // ]

   useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('/api/admin/main_dcPage');
            const data = response.data;

            const brochures = data.filter(item => item.dc_category === 'Brochure');
            const installationGuides = data.filter(item => item.dc_category === 'Installation Guide');
            const warranties = data.filter(item => item.dc_category === 'Warranty');

            setBrochureData(brochures);
            setInstallationData(installationGuides);
            setWarrantyData(warranties);
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
          <button onClick={() => setActiveCategory('All')} 
          className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === 'All' && 'bg-danger text-white'}`}>All</button>

          <button onClick={() => setActiveCategory('Brochure')} 
          className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === 'Brochure' && 'bg-danger text-white'}`}>Brochure</button>

          <button onClick={() => setActiveCategory('Installation Guide')} 
          className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === 'Installation Guide' && 'bg-danger text-white'}`}>Installation Guide</button>

          {/* <button onClick={() => setActiveCategory('Care Tips')}
          className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === 'Care Tips' && 'bg-danger text-white'}`}>Care Tips</button> */}

          <button onClick={() => setActiveCategory('Warranty')} 
          className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === 'Warranty' && 'bg-danger text-white'}`}>Warranty</button>
        </div>
      </div>

      <DownloadSwiper title="Brochure" cardData={brocardData} active={activeCategory === 'All' || activeCategory === 'Brochure'} />
      <DownloadSwiper title="Installation Guide" cardData={installationData} active={activeCategory === 'All' || activeCategory === 'Installation Guide'} />
      {/* <DownloadSwiper title="Care Tips" cardData={cardData} active={activeCategory === 'All' || activeCategory === 'Care Tips'} /> */}
      <DownloadSwiper title="Warranty" cardData={warrantyData} active={activeCategory === 'All' || activeCategory === 'Warranty'} />



    </section>
  )
}

export default page