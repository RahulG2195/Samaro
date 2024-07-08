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
          {/* <div className="row px-0 whysam-benifits pt-5 w-100 position-absolute top-0">
            {benefits.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-3 col-sm-12 col-md-pt-1 pt-5">
                <div className="benefits-boxes">
                  <img src={`${item.logo}`} alt="err" className="mt-4" />
                  <div className={`d-flex flex-column align-items-center ${item.id % 2 === 0 ? 'text-navy pt-5' : 'text-darkred'}`}>
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
          </div> */}


          {/*end dynamic data of the benifits section of why sam */}



          <div className="row px-0 whysam-benifits pt-5 w-100 position-absolute top-0">
            <div className="col-lg-3 col-md-3 col-sm-12 col-md-pt-1 pt-5">
              <div className="benefits-boxes manfactResp">
                <img
                  src=" /assets/images/why-samaro/Group 28879.svg"
                  alt=""
                  className="mt-4"
                />
                <div className="d-flex flex-column align-items-center text-darkred">
                  <h3 className="mb-4 text-center">Manufacturing</h3>
                  <ul className="fw-normal ps-xl-5">
                    <li>Blend materials for durability.</li>
                    <li>Layer vinyl for stability.</li>
                    <li>Added texture for realism.</li>
                    <li>Cut for precise fit.</li>
                    <li>Apply protective finish.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 mt-5 performanceResp">
              <div className="benefits-boxes h-100 text-navy ">
                <img src=" /assets/images/why-samaro/Group 28880.svg" alt="" />
                <div className="d-flex flex-column align-items-center">
                  <h3 className="my-4 px-4 text-center">Product Performance</h3>
                  <ul className="fw-normal  ps-xl-5">
                    <li>Resilience: Withstands scratches and impacts.</li>
                    <li>
                      100% Water Resistance: Ideal for moisture-prone areas.
                    </li>
                    <li>
                      Stability: Maintains shape in different temperatures.{" "}
                    </li>
                    <li>Easy Care: Requires minimal cleaning effort.</li>
                    <li>Longevity: Designed for lasting performance.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 ">
              <div className="benefits-boxes h-100 text-darkred ">
                <img src=" /assets/images/why-samaro/Group 28877.svg" alt="" />
                <div className="d-flex flex-column align-items-center">
                  <h3 className="my-4 px-4 text-center">Quality Assurance</h3>
                  <ul className="fw-normal px-lg-0 px-md-0 px-5 ps-xl-5">
                    <li>
                      International Standards Compliance: Meets quality
                      benchmarks.
                    </li>
                    <li>
                      Material Inspection: Rigorously checks raw materials.
                    </li>
                    <li>
                      Production Oversight: Constant monitoring during
                      manufacturing.
                    </li>
                    <li>
                      Quality Testing: Thorough assessment of finished products.
                    </li>
                    <li>
                      Feedback Integration: Incorporates customer input for
                      improvement.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 pt-5 mt-3 inovativeREsp">
              <div className="benefits-boxes h-100 text-navy">
                <img src=" /assets/images/why-samaro/Group 28883.svg" alt="" />
                <div className="d-flex flex-column align-items-center">
                  <h3 className="my-4  px-4 text-center">lnnovating</h3>
                  <ul className="fw-normal px-lg-0 px-md-0 px-5 ps-xl-5">
                    <li>Sustainable Materials: Eco-friendly exploration.</li>
                    <li>
                      Innovative Designs: Developing reusable and renewable
                      material with new design and shades.
                    </li>
                    <li> Smart Integration: Technological functionality.</li>
                    <li>Custom Solutions: Tailored options.</li>
                    <li> Enhanced Performance: Focus on durability.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
};

export default Benefits;
