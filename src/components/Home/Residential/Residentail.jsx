import React, { useEffect, useState } from 'react';
import "./Residential.css";
import axios from 'axios';

const Residential = () => {
    const [spacesData, setSpacesData] = useState({
        residential_images: ""
    });
    // const images = spacesData.commercial_images.split(',');

    useEffect(() => {
        const fetchSpacesData = async () => {
            try {
                const response = await axios.get("/api/admin/spaces");
                const data = response.data;
                setSpacesData(data);
            } catch (error) {
                console.error("Error fetching spaces data:", error);
            }
        };

        fetchSpacesData();
    }, []);

    const images = [
        {
            src: "/assets/images/home/commercial/Mask Group 12.png",
            alt: "Image 1"
        },
        {
            src: "/assets/images/home/commercial/Mask Group 128.png",
            alt: "Image 2"
        },
        {
            src: "/assets/images/gallery/px-conversions/1 (2).webp",
            alt: "Image 3"
        },
        {
            src: "/assets/images/gallery/px-conversions/2 (5).webp",
            alt: "Image 3"
        },
    ];
    return (
        <section className="commercial-2 my-5">
            <div className="row justify-content-end">
                <div className="col-lg-11">
                    <div id="carouselExampleFade2" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {images.map((image, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                    <img src={image.src} className="d-block w-100" alt={image.alt} />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="prev">
                            <img src="/assets/images/home/commercial/Group 29040.svg" alt="Previous" className='w-25' />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="next">
                            <img src="/assets/images/home/commercial/Group 29039.svg" alt="Next" className='w-25' />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Residential;
