import React, { useEffect, useState } from 'react'
import "./Commercial.css"
import axios from 'axios';

const Commercial = () => {
    const [spacesData, setSpacesData] = useState({
        commercial_images: "",
    });
    const images = spacesData.commercial_images.split(',');


    


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

    return (
        <>
            <section className="commericial-heading">
                <div className="container">
                    <h2 className="heading fw-bold">Spaces</h2>
                </div>
            </section>

            <section className="commercial mt-5">
                <div className="container"></div>
                <div className="row">
                    <div className="col-lg-11">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade">
                            <div className="carousel-inner">
                                {images.map((image, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                        <img src={`/uploads/${image}`} className="d-block w-100" alt={`Slide ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <img src="/assets/images/home/commercial/Group 29040.svg" alt="Previous" className='w-25' />
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <img src="/assets/images/home/commercial/Group 29039.svg" alt="Next" className='w-25' />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Commercial