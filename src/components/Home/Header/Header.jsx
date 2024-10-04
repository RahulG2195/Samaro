
"use client"

import React, { useEffect, useState } from "react";
import "./Header.css";
import Link from "next/link";
import NavLink from "@/components/helpers/NavLink/NavLink";
import FollowMore from "../FollowMore/FollowMore";
import axios from "axios";

const Header = () => {

    const [companyLogo, setcompanyLogo] = useState('')
    const [contatnumber, setContatnumber] = useState('')
    const [facebook, setFacebook] = useState('');
    const [insta, setInsta] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [twitter, setTwitter] = useState('');
    const [youtube, setYoutube] = useState('');
    useEffect(() => {
        const fetchBasicInfo = async () => {
            try {
                const response = await axios.get("/api/admin/basicInfo");
                const info = response.data;
                setcompanyLogo(info.comp_logo);
                setContatnumber(info.mobile_no_1)
                setFacebook(info.facebook_url)
                setInsta(info.insta_url)
                setLinkedin(info.linkedin_url)
                setTwitter(info.twitter_url)
                setYoutube(info.youtube_url)
            } catch (error) {
                console.error("Error fetching basic info:", error);
            }
        };

        fetchBasicInfo();
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (

        <header className="header  ">
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <Link className="navbar-brand" href="/" >
                        <img src={`/uploads/${companyLogo}`} alt="comapany logo" />
                    </Link>
                    <div className="d-flex gap-3 align-items-center ">
                        <div className="headphoneJack">
                            <a href={`tel:${contatnumber}`}>
                                <img src="/assets/images/icons/Group 28600.svg" alt="Call" />
                            </a>
                        </div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={toggleMenu} // Toggle menu on button click
                        >

                            {/* <span className="navbar-toggler-icon"></span> */}
                            <img src="/assets/images/icons/Group 28769.svg" alt="err" />
                        </button>
                    </div>
                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto gap-2">
                            <li className="nav-item" onClick={closeMenu}>
                                <NavLink href="/">Home</NavLink>
                            </li>
                            <li className="nav-item " onClick={closeMenu}>
                                <NavLink href="/why-samaro">About Us</NavLink>
                            </li>
                            <li className="nav-item position-relative prdcts" onClick={closeMenu}>
                                <NavLink className="prdctHeading" href="/product/All">Product</NavLink>
                                {/* <ul className=" prdctDrop drop1 px-5 position-absolute " style={{listStyle:'none'}}>
                                    <li><Link href="/spcProducts"><p className="darkBlue">SPC</p></Link></li>
                                    <li><Link href="/lvtProducts"><p className="darkBlue">LVT</p></Link></li>
                                </ul>
                                <ul className="mobileoptions">
                                    <li><Link href="/spcProducts">SPC</Link></li>
                                    <li><Link href="/lvtProducts">LVT</Link></li>
                                </ul> */}
                            </li>
                            <li className="nav-item position-relative prdcts inspiration">
                                <div className="inspi " >
                                    <NavLink href="/gallery" className="lnk "> Inspiration</NavLink>
                                </div>
                                <ul className=" prdctDrop px-4 position-absolute">
                                    <li onClick={closeMenu}><Link href="/gallery"><p className="darkBlue">Gallery</p></Link></li>
                                    {/* <li onClick={closeMenu}><Link href="/FindYourMatch"><p className="darkBlue">Find your ideal floor</p></Link></li> */}
                                    <li onClick={closeMenu}><Link href="/downloadCenter"><p className="darkBlue">Download center</p></Link></li>
                                </ul>

                            </li>
                            <span className="mobileoptions" >

                                <li className="nav-ite" onClick={closeMenu}><NavLink className="nav-link" href="/gallery">Gallery</NavLink></li>
                                {/* <li className="nav-ite" onClick={closeMenu}><NavLink className="nav-link" href="/FindYourMatch">Find your ideal floor</NavLink></li> */}
                                <li className="nav-ite" onClick={closeMenu}><NavLink className="nav-link" href="/downloadCenter">Download center</NavLink></li>
                            </span>
                            {/* <li className="nav-item" onClick={closeMenu}>
                                <NavLink className="nav-link" href="/newsletter">
                                    Newsletter
                                </NavLink>
                            </li> */}
                            <li className="nav-item" onClick={closeMenu}>
                                <NavLink className="nav-link" href="/contact-us">
                                    Contact Us
                                </NavLink>
                            </li>
                            <li className="nav-item" onClick={closeMenu}>
                                <NavLink className="nav-link" href="/newCareer">
                                    Career
                                </NavLink>
                            </li>
                        </ul>
                        <div className="bottomOptionsOfHeader pb-5 mb-3">
                            <div className="pt-4 d-flex justify-content-center gap-5 align-items-center">
                                <div className="d-flex align-items-center text-danger " style={{ fontSize: '12px' }}>
                                    <div>
                                        <img src="/assets/images/icons/Group 28210.svg" alt="" className="w-75" />
                                    </div>
                                    <Link href="mailto:" ><span className="text-danger ">info@samaro.in</span></Link>
                                </div>
                                <div className="d-flex align-items-center " style={{ fontSize: '12px' }}>
                                    <div>
                                        <img src="/assets/images/icons/Group 28211.svg" alt="" className="w-75" />
                                    </div>
                                    <div>
                                        <span className="text-danger">+918655984340</span>
                                    </div>
                                </div>
                            </div>


                            <div className="align-items-center d-flex flex-column justify-content-center flex-wrap gap-2 mt-4">
                                <div className="logo text-center">
                                    <a href="#">
                                        <span className='text-danger' style={{ fontSize: '12px' }}>SAMARO ON</span>
                                    </a>
                                </div>
                                <div className="social-media-inner-home d-flex gap-3" >
                                    <div className="facebook" >
                                        <a href={facebook} target="_blank">
                                            <img className="img p-1" src="/assets/images/social-media/Group 28057.svg" alt="err" />
                                        </a>
                                    </div>
                                    <div className="x">
                                        <a href={twitter} target="blank">
                                            <img className="img " src="/assets/images/social-media/Path 98762.svg" alt="" />
                                        </a>
                                    </div>

                                    {/* <div className="youtube">
                                        <a href={youtube} target="blank">
                                            <img className="img" src="/assets/images/social-media/Group 28059.svg" alt="" />
                                        </a>
                                    </div> */}
                                    <div className="insta">
                                        <a href={insta} target="blank">
                                            <img className="img" src="/assets/images/icons/Group 28058.svg" alt="" />
                                        </a>
                                    </div>
                                    <div className="in">
                                        <a href={linkedin} target="blank">
                                            <img className="img" src="/assets/images/social-media/Group 28615.svg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
