import Link from 'next/link';
import React from 'react';
import "./Topbar.css";
const Topbar = () => {
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
                                        <a href="mailto:">info@samaro.in</a>
                                    </div>
                                    <div className="phone">
                                        <img src="/assets/images/home/topbar/phone.png" alt="err" />
                                        <a href="tel:">+918655984340</a>
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
                                            <Link href="#">
                                                <img className="img " src="/assets/images/social-media/fb.png" alt="" />
                                            </Link>
                                        </div>
                                        <div className="isntagram">
                                            <Link href="#">
                                                <img className="img" src="/assets/images/social-media/instagram.png" alt="" />
                                            </Link>
                                        </div>
                                        <div className="x">
                                            <Link href="">
                                                <img className="img" src="/assets/images/social-media/x.png" alt="" />
                                            </Link>
                                        </div>
                                        <div className="linkedin">
                                            <Link href="#">
                                                <img className="img" src="/assets/images/social-media/Group 29179.svg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="youtube">
                                            <Link href="">
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
