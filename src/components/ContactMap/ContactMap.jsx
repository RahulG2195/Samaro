import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import './contactMap.css'
import axios from 'axios';

const ContactMap = () => {
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
        <>
            <div className='row align-items-center justify-content-center'>
                <div className="inner-head-office col-lg-4 col-md-6 col-12 ">
                    <div className="row ">
                        <div className="py-3 px-3 ">
                            <div className="office_heading">
                                <div className='pb-'>
                                    <h5 className="text-Capitalize m-0 fw-bold"> Contact Information</h5>
                                    <span>Say something to start a live chat!</span>
                                </div>
                                <address className='py-4'>
                                    <h3 className='fw-bold'>For Enquires</h3>
                                    <div><span>{basicInfo.email1}</span></div>
                                    <div><span>{basicInfo.email2}</span></div>
                                </address>
                                <h3 className='fw-bold'>Head Office</h3>
                                <address>{basicInfo.address}</address>

                                <div className="social-media pt-5 justify-content-start align-items-center">
                                    <div className="logo text-center">
                                        <Link href="#">
                                            <span className='text-white '>Follow More</span>
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
                                            <Link href={basicInfo.linkedin_url}>
                                                <img className="img" src="/assets/images/social-media/x.png" alt="" />
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
                <div className='col-xl-8 p-0'>
                    <iframe className='w-100'
                        // src={`https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3769.967650805929!2d72.84926427497828!3d19.109075032102382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s5th%20Floor%2C%20Vilco%20Centre%2C%20Subhash%20Road%2C%20Opp.%20Garware%2C%20Vile%20Parle%20East%2C%20Mumbai-400057%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1715236220781!5m2!1sen!2sin`}
                            src= {`${basicInfo.map_url}`}
                        width="100" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>
            </div>
        </>
    )
}

export default ContactMap