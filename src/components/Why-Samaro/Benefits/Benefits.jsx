import React, { useEffect, useState } from "react";
import "./Benefits.css";
import axios from "axios";

const Benefits = () => {
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const response = await axios.get('/api/admin/whySamaro_benifits');
        const formattedBenefits = response.data.map(benefit => ({
          ...benefit,
          subpoints: benefit.subpoints.split(',').map(subpoint => subpoint.trim())
        }));
        setBenefits(formattedBenefits);
      } catch (error) {
        console.error('Error fetching benefits data:', error);
      }
    };

    fetchBenefits();
  }, []);

  return (
    <section className="benefits samcontResp why-samaro position-relative mt-5 pt-md-5">
      <div className="container px-5">
        <h2 className="text-navy text-center mb-5">Benefits</h2>
        <div className="position-relative col-12">
          <img
            src="/assets/images/why-samaro/Path 97423.svg"
            alt=""
            className="whysamBenifitsDeskbg"
          />
          <img
            src="/assets/images/why-samaro/Path 98155.svg"
            alt=""
            className="whysamBenifitsMblbg position-relative"
          />

          {/* dynamic data of the benifits section of why sam */}
          <div className="row px-0 whysam-benifits pt-5 w-100 position-absolute top-0">
            {benefits.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-3 col-sm-12 col-md-pt-1 pt-4">
                <div className="benefits-boxes">
                  <img src={`/uploads/${item.logo}`} alt="err" className={` ${item.id === 1 ? 'mt-5' : ''}`} />
                  <div className={`d-flex flex-column align-items-center ${item.id % 2 === 0 ? 'text-navy' : 'text-darkred'}`}>
                    <h3 className="mb-4 text-center fw-bold">{item.point_heading}</h3>
                    <ul className="fw-normal ps-xl-5">
                      {item.subpoints.map((subpoint, index) => (
                        <li key={index}>{subpoint}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/*end dynamic data of the benifits section of why sam */}







        </div>
      </div>
    </section>
  );
};

export default Benefits;
