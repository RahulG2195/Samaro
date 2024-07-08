"use client";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const Banner = () => {
    const [initialData, setInitialData] = useState({});

    useEffect(() => {
        const fetchBanner = async () => {
            const response = await axios.get("/api/admin/heroBanners");
            const banner = response.data;
            const homepageBanner = banner.filter(banner => banner.banner_id === 1);
            setInitialData(homepageBanner[0] || {});
            console.log("data", homepageBanner[0]);
        };

        fetchBanner();
    }, []);

    const formattedContent = initialData.banner_content 
        ? initialData.banner_content.split(' ').map((word, index) => {
            if (word === "SPC") {
                return <strong key={index} className="fw-bold"><Link href={initialData.spcLink || '/#'}>{word}</Link></strong>;
            } else if (word === "LVT") {
                return <strong key={index} className="fw-bold"><Link href={initialData.lvtLink || '/#'}>{word}</Link></strong>;
            } else if (word === "&") {
                return ' & ';
            } else {
                return ` ${word} `;
            }
        })
        : null;

    return (
        <section className="hero">
            <div className="position-relative">
                <div className="homepageHeroBanner">
                    <Image
                        // src="/assets/images/home/banner/Mask Group 320.png"
                        src={`/uploads/${initialData.banner_img}`}
                        alt="Description of the image"
                        width={100}
                        height={100}
                        layout="responsive"
                        objectFit="cover"
                        priority={true}
                        loading="eager"
                        className="prdctdeskbanner"
                    />
                    <Image
                        // src="/assets/images/home/banner/Group 28545.png"
                        src={`/uploads/${initialData.mobileBanner_img}`}
                        alt="Description of the image"
                        width={100}
                        height={100}
                        layout="responsive"
                        objectFit="contain"
                        priority={true}
                        loading="eager"
                        className="prdctmobilebanner"
                    />
                </div>
                <div className="HomebannertextCont position-absolute">
                    <div className="txt">
                        <h2 className="heading w-75 fw-normal">
                            {formattedContent}
                        </h2>
                        <Link href="/product/All" className="discoverBtn button d-inline-block px-3 py-1">
                            Discover all our floors
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
