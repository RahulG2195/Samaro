import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "@/components/Home/Social/Social.css";

const Inspiration = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/gallery')
      .then(response => setImages(response.data.slice(0, 6))) // Assuming the API returns an array of image paths
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <>
      <section className="social mb-5 d-flex justify-content-center">
        <div className="container">
          <div className="row mt-">
            <div className="col-lg-12">
              <h1 className='gallerytext'>
                <span className='fw-medium'>INSPIRATIONAL</span> GALLERY
              </h1>

              <div className="social-grid mt-4">
                {images.map((image, index) => (
                  <div className="image" key={index}>
                    <img src={`/uploads/${image.imageName}`} alt={`Inspiration ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inspiration;
