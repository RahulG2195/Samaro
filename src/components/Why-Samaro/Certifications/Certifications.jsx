import React, { useEffect, useState } from 'react';
import "./Certifications.css";
import axios from 'axios';

const Certifications = () => {
        // const certifications = [
        //   {id: 1, logo:'/assets/images/why-samaro/certifications/7.png'},
        //   {id: 2, logo:'/assets/images/why-samaro/certifications/8.png'},
        //   {id: 3, logo:'/assets/images/why-samaro/certifications/9.png'},
        //   {id: 4, logo:'/assets/images/why-samaro/certifications/5.png'},
        //   {id: 5, logo:'/assets/images/why-samaro/certifications/6.png'},
        //   {id: 6, logo:'/assets/images/why-samaro/certifications/1.png'},
        //   {id: 7, logo:'/assets/images/why-samaro/certifications/2.png'},
        //   {id: 8, logo:'/assets/images/why-samaro/certifications/3.png'},
        //   {id: 9, logo:'/assets/images/why-samaro/certifications/4.png'},
        //   {id: 10, logo:'/assets/images/why-samaro/certifications/10.png'},
        // ];
        const [certifications, setCertifications] = useState([]);

        useEffect(() => {
            const fetchCertifications = async () => {
              try {
                const response = await axios.get('/api/admin/certifications');
                setCertifications(response.data);
              } catch (error) {
                console.error('Error fetching certifications data:', error);
              }
            };
        
            fetchCertifications();
          }, []);
        

    return (
        <section className='sectio certifications mt-0'>
           <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 d-flex justify-content-center">
          <div className="certifications-grid">
            {certifications.map((certification, index) => (
              <div key={certification.id} className="certificate-image">
                <img src={`/uploads/${certification.logo}`} alt={`Certification ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
        </section>
    )
}

export default Certifications;
