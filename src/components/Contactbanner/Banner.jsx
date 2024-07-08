import Image from 'next/image';
import './SubBanner.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SubBanner = () => {
  const [initialData, setInitialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get("/api/admin/heroBanners");
        const banner = response.data;
        const homepageBanner = banner.filter(b => b.banner_id === 3);
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
  const bannerContent = initialData[0].banner_content;
  const words = bannerContent.split(' ');
  const firstTwoWords = words.slice(0, 2).join(' ');
  const remainingWords = words.slice(2).join(' ');

  return (
    <>
      <section className="career_banner">
        <div className='position-relative'>
          <Image
            // src="/assets/images/career/Mask Group 218@2x.png"
            src={`/uploads/${initialData[0].banner_img}`}
            alt="career banner"
            width={100}
            height={100}
            layout="responsive"
            objectFit="cover"
            className="sub-banner contact-deskresp"
          />
          <Image
            // src="/assets/images/career/Group 28545.png"
            src={`/uploads/${initialData[0].mobileBanner_img}`}
            alt="Description of the image"
            width={100}
            height={100}
            layout="responsive"
            objectFit="cover"
            priority={true}
            loading="eager"
            className='contact-mblresp position-relative'
          />
          <div className='contact-us-bannerTXT col-lg-6 col-md-12 col-12'>
            {/* <h1 className="sub-banner-heading"><u className='border-bottom border-white'>Let's make</u> your flooring</h1> */}
            <h1 className="sub-banner-heading"><u className='border-bottom border-white'>{firstTwoWords}</u> {remainingWords}
            </h1>
            <div className="breadcrump">
              <a>Home</a> <span>-&gt;</span> <a>Contact</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubBanner;
