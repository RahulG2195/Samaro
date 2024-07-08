'use client'
import React, { useEffect, useState } from 'react'
import './Newsletter.css'
import NewsCard from './NewsCard'
import '../Downloadcenter/dwnld.css'
import DownloadSwiper from '../Downloadcenter/DownloadSwiper'
import NewsletterSwiper from './NewsletterSwiper'
import axios from 'axios'

const Newsletter = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [newsletters, setNewsletters] = useState([]);
    const [newLaunchData, setNewLaunchData] = useState([]);
    const [productKnowledgeData, setProductKnowledgeData] = useState([]);
    const [eventsData, setEventsData] = useState([]);

    // const newLaunchData = [
    //     {
    //         imgurl: '/assets/images/Newletter/picture.png', 
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (1)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'


    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (2)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'


    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture(3)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (1)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (2)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture(3)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    // ]
    // const productKnowledgeData = [
    //     {
    //         imgurl: '/assets/images/Newletter/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap'
    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (4)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (5)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (6)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (7)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (8)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (9)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (10)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (11)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    // ]
    // const eventsData = [
    //     {
    //         imgurl: '/assets/images/Newletter/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (12)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (13)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (14)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (15)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (16)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (17)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (18)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    //     {
    //         imgurl: '/assets/images/Newletter/picture (19)/picture.png',
    //         title: 'Seven tips to help you get better flooring design & Concept',
    //         date: 'November 11,2023 |',
    //         author: 'By Anand Kashyap',
    //         video: 'Samaro- About us Page1.mp4'

    //     },
    // ]


    useEffect(() => {
        fetchNewsletters();
    }, []);

    const fetchNewsletters = async () => {
        try {
            const response = await axios.get('/api/admin/newsletter');
            const newsletters = response.data;

            // Filter newsletters based on category
            const newLaunches = newsletters.filter(item => item.news_category === 'New Launch');
            const productKnowledge = newsletters.filter(item => item.news_category === 'Product Knowledge');
            const events = newsletters.filter(item => item.news_category === 'Events');

            // Update state variables
            setNewLaunchData(newLaunches);
            setProductKnowledgeData(productKnowledge);
            setEventsData(events);

        } catch (error) {
            console.error('Error fetching newsletters:', error);
        }
    };
    return (
        <>

            <div className='text-center dwnldcenterHeading mt-md-5 mt-4'>
                <h2 className='fw-bold text-navy'>Newsletter</h2>
                <div className='dwnldcenterFilters my-4 d-flex gap-2 flex-wrap justify-content-center   '>
                    <button onClick={() => setActiveCategory('All')}
                        className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === 'All' && 'bg-danger text-white'}`}>All</button>

                    <button onClick={() => setActiveCategory('New Launch')}
                        className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === 'New Launch' && 'bg-danger text-white'}`}>New Launch</button>

                    <button onClick={() => setActiveCategory('Product Knowledge')}
                        className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === 'Product Knowledge' && 'bg-danger text-white'}`}>Product Knowledge</button>

                    <button onClick={() => setActiveCategory('Events')}
                        className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === 'Events' && 'bg-danger text-white'}`}>Events</button>

                </div>
            </div>
            <div className='container brochureCont position-relative mb-5'>

                <div className={`col-12 col-lg-12`}>
                    <NewsletterSwiper newlaunchCard='d-block' title="New Launch" cardData={newLaunchData} active={activeCategory === 'All' || activeCategory === 'New Launch'} />

                </div>
            </div>
            <NewsletterSwiper Newsletter title="Product Knowledge" cardData={productKnowledgeData} active={activeCategory === 'All' || activeCategory === 'Product Knowledge'} />
            <NewsletterSwiper Newsletter title="Events" cardData={eventsData} active={activeCategory === 'All' || activeCategory === 'Events'} />


        </>
    )
}

export default Newsletter