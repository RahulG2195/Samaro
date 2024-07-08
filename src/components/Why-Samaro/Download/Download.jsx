import React, { useEffect, useState } from 'react';
import "./Download.css";
import Link from 'next/link';
import axios from 'axios';
const Download = ({ useRed }) => {
    const [downloadData, setDownloadData] = useState([]);

    useEffect(() => {
        fetchDownloadData();
    }, []);

    // Function to fetch download center data
    const fetchDownloadData = async () => {
        try {
            const response = await axios.get('/api/admin/downloadCenter');
            setDownloadData(response.data[0]); // Set fetched data into state
        } catch (error) {
            console.error('Error fetching download center data:', error);
        }
    };


    return (
        <>
            <div className='mb-5 row downlodbackground '>
                <div className=' col-lg-10 col-md-12 position-relative'>
                    {useRed && (
                        <div className='redAndBlueBg'>
                            <img
                                src="/assets/images/why-samaro/downloads/Group 29181.svg"
                                alt="" className='deskDwnldimg'
                            />
                            <img
                                src="/assets/images/why-samaro/downloads/Group 29191.svg"
                                alt="" className='mobileDwnldimg '
                            />
                        </div>
                    )}
                    {!useRed && (
                        <div className='redAndBlueBg'>
                            <img
                                src="/assets/images/why-samaro/downloads/Group 29183.svg"
                                alt="" className='deskDwnldimg'
                            />
                            <img
                                src="/assets/images/why-samaro/downloads/Group 29192.svg"
                                alt="" className='mobileDwnldimg '
                            />
                        </div>
                    )}
                    <div className="col-lg-4 col-md-4 col-sm-2 col-8 samply position-absolute">
                        <img className="" src="/assets/images/home/floor-explorer/2.png" alt="" />
                        {/* <img className="" src={downloadData.image_url} alt="err" /> */}
                    </div>
                    <div className="dwnldTXTAbout col-lg-4 col-md-4 col-8 position-absolute pt-4">
                        <h3 className="respHeading2">{downloadData.heading}</h3>
                        <p className=" respCption pe-3 my-4">
                            {downloadData.description}
                        </p>
                        <Link href={`${downloadData.button_url}`} className={`${useRed} ? 'redimg' : button py-1 px-3 mb-4 respCption small`}>{downloadData.button_text}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Download