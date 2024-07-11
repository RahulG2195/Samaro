import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import "./Topbar.css";
import axios from 'axios';
const Topbar = () => {

    const [basicInfo, setBasicInfo] = useState({
        email1: "",
        email2: "",
        mobile_no_1: "",
        mobile_no_2: "",
        address: "",
        facebook_url: "",
        insta_url: "",
        linkedin_url: "",
        youtube_url: "",
        map_url: "",
    });


    useEffect(() => {
        const fetchBasicInfo = async () => {
            try {
                const response = await axios.get("/api/admin/basicInfo");
                const info = response.data;
                setBasicInfo(info);
            } catch (error) {
                console.error("Error fetching basic info:", error);
            }
        };

        fetchBasicInfo();
    }, []);


    return (
        <div>
            <div className="topbar py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-8">
                            <div className="topbar-wrapper">
                                <div className="contact-details">
                                    <div className="mail">
                                        <img src="/assets/images/home/topbar/mail.png" alt="err" />
                                        <a href="mailto:">{basicInfo.email1}</a>
                                    </div>
                                    <div className="phone">
                                        <img src="/assets/images/home/topbar/phone.png" alt="err" />
                                        <a href="tel:">{basicInfo.mobile_no_1}</a>
                                    </div>
                                </div>
                                <div className="social-media align-items-center">
                                    <div className="logo text-center">
                                        <Link href="#">
                                            <span className='text-white '>SAMARO ON</span>
                                        </Link>
                                    </div>
                                    <div className="social-media-inner gap-3">
                                        <div className="facebook">
                                            <Link href={basicInfo.facebook_url}>
                                                <img className="img " src="/assets/images/social-media/fb.png" alt="" />
                                            </Link>
                                        </div>
                                        <div className="isntagram">
                                            <Link href={basicInfo.insta_url}>
                                                <img className="img" src="/assets/images/social-media/instagram.png" alt="" />
                                            </Link>
                                        </div>
                                        <div className="x">
                                            <Link href="">
                                                <img className="img" src="/assets/images/social-media/x.png" alt="" />
                                            </Link>
                                        </div>
                                        <div className="linkedin">
                                            <Link href={basicInfo.linkedin_url}>
                                                <img className="img" src="/assets/images/social-media/Group 29179.svg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="youtube">
                                            <Link href={basicInfo.youtube_url}>
                                                <img className="img" src="/assets/images/social-media/yt.png" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
