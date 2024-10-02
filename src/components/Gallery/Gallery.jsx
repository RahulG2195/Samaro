import React, { useEffect, useState } from 'react';
import "./Gallery.css";
import Image from 'next/image';
import axios from 'axios';


const Gallery = () => {
    // const Images = [
    //     { imageName: "/assets/images/gallery/1.jpg" },
    //     { imageName: "/assets/images/gallery/px-conversions/1 (1).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/1 (2).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/1 (3).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/1 (4).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/1 (5).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/1 (6).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/1 (7).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/1 (8).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/1 (9).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/1 (10).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/1 (11).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/1 (12).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/1 (13).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/1 (14).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/1 (15).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (1).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (2).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (3).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (4).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (5).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (6).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (7).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (8).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (9).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (10).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (11).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (12).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (13).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (14).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (15).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (16).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (17).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (18).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (19).webp" },
    //     { imageName: "/assets/images/gallery/px-conversions/2 (20).webp" },
       
       
    // ];



    const [Images, setImages] = useState([]);


    useEffect(() => {
        fetchImages();
      }, []);
    
      const fetchImages = async () => {
        try {
          const response = await axios.get('/api/admin/gallery');
          setImages(response.data);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };

    return (
        <section className='gallery pb-5'>
            <div className="container">
                <h2 className='pt-4'>Gallery</h2>
                <div className="border-top border-danger border-3"></div>

                <div className="grid">
                    {Images.map((img, index) => (
                        <div key={index} className="grid-item">
                            <div className="card border-0 new_div">
                                <img src={`/uploads/${img.imageName}`} alt="err" />
                                {/* <Image
                                id="myImg"
                                className="news_img"
                                src={img.imgUrl}
                                alt={`Image ${index + 1}`}
                                width={500}
                                height={500}
                                loading="lazy"
                            /> */}
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}

export default Gallery;