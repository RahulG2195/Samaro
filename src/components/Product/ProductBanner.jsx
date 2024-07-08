import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import './productsBanner.css'
import axios from 'axios';
import Link from 'next/link';

const ProductBanner = () => {
    const [initialData, setInitialData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const response = await axios.get("/api/admin/heroBanners");
                const banners = response.data;
                const homepageBanner = banners.filter(banner => banner.banner_id === 2);
                setInitialData(homepageBanner);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchBanner();
    }, []);



    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading banner data.</div>;
    }

    if (initialData.length === 0) {
        return <div>No banner data available.</div>;
    }
    const spcContent = initialData[0].banner_title
        ? initialData[0].banner_title.split(' ').map((word, index) => {
            if (word == "SPC") {
                return <span key={index} className="fw-bold text-danger">{word}</span>;
            } else {
                return <React.Fragment key={index}> {word} </React.Fragment>;
            }
        })
        : null;
    const lvtContent = initialData[0].banner_content
        ? initialData[0].banner_content.split(' ').map((word, index) => {
            if (word == "LVT") {
                return <span key={index} className="fw-bold text-navy">{word}</span>;
            } else {
                return <React.Fragment key={index}> {word} </React.Fragment>;
            }
        })
        : null;


    return (
        <div>
            <div className='position-relative'>
                <Image
                    // src="/assets/images/products/Group 29177.png"
                    src={`/uploads/${initialData[0].banner_img}`}
                    alt="Description of the image"
                    width={100}
                    height={100}
                    layout="responsive"
                    objectFit="contain"
                    priority={true}
                    loading="eager"
                    className='prdctdeskbanner'
                />
                <Image
                    // src="/assets/images/products/Group 29096.png"
                    src={`/uploads/${initialData[0].mobileBanner_img}`}
                    alt="Description of the image"
                    width={100}
                    height={100}
                    layout="responsive"
                    objectFit="contain"
                    priority={true}
                    loading="eager"
                    className='prdctmobilebanner'
                />

                <div className='position-absolute spcBrotext'>
                    <p className='text-white prdbannerresp fw-semibold m-1'>
                        {spcContent}
                        {/* Premium quality <strong className='fw-bold text-danger'>SPC</strong> flooring. */}
                    </p>
                    <Link href={`${initialData[0].banner_url}`}  className="button py-1 px-3 mb-4 respCption small">
                        {initialData[0].button_text}
                        {/* BROCHURE & DOWNLOAD CENTER */}
                    </Link>
                </div>

                <div className='position-absolute lvtBrotext'>
                    <p className='text-white fw-semibold m-1'>
                        {lvtContent}
                        {/* High-quality <strong className='fw-bold text-navy'>LVT</strong> flooring. */}
                    </p>
                    <Link href={`${initialData[0].banner_url}`} className="button py-1 px-3 mb-4 respCption small">
                        {initialData[0].button_text}

                        {/* BROCHURE & DOWNLOAD CENTER */}
                    </Link>
                </div>
            </div>

            {/* Uncomment this section if needed
            <section>
                <div>
                    <div className="row align-items-center bannerbottom py-3">
                        <div className="col-md-4 text-center text-md-end mb-3 mb-md-0">
                            <p className='passiontext'>A passion for timeless</p>
                            <p className='passiontext'>beauty</p>
                        </div>
                        <div className="col-md-8 px-3 px-md-5">
                            <p className="mb-0 subcption">
                                Carefree living starts in a home with high-performance floors. That's Samaro's motivation since 1990. Today, you can choose between a wide range of long-lasting laminate, vinyl, and wood flooring, topped off with matching skirting boards and finishing profiles. Our trademarks: beautiful designs, waterproof floors, and easy installation - all thanks to a series of ground-breaking innovations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            */}
        </div>
    );
};

export default ProductBanner;
