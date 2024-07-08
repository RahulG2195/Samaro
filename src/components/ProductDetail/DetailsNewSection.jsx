import React from "react";
import "@/components/ProductDetail/productdetail.css";


const DetailsNewSection = () => {
  return (
    <section className="container py-5">
      <p className="fw-bold fs-4 text-center py-2">Product Detail</p>
      <div className="row g-5 justify-content-center">
        <div className="col-lg-5">
          <p className="fs-6">
            SPC product is a collection born of purity and inspired by the
            natural elements which make up the world we live in.
          </p>
          <span>
            <p className="p-0 m-0 fw-bold fs-6 text-danger">Quality</p>
            <p className="mx-4 px-2 border-start border-2 border-danger">
              Our commitment to excellence shines through in every meticulously
              crafted product, ensuring superior durability, functionality, and
              aesthetic appeal.
            </p>
          </span>
          <span>
            <p className="p-0 m-0 fw-bold fs-6 text-danger">Innovation</p>
            <p className="mx-4 px-2 border-start border-2 border-danger">
              We lead the way in pioneering new ideas and pushing the boundaries
              of design, constantly striving to revolutionize the industry with
              inventive solutions.
            </p>
          </span>
          <span>
            <p className="p-0 m-0 fw-bold fs-6 text-danger">Sustainability</p>
            <p className="mx-4 px-2 border-start border-2 border-danger">
              Embracing eco-conscious practices, we minimize our environmental
              footprint, romote a healthier planet for future generations.
            </p>
          </span>

          <span>
            <span className=" px-2 ">
              <p className="p-0 m-0 fw-bold fs-6">HIGHLY VERSATILE</p>
              <span className="d-flex align-items-center gap-2">
                <i className="fa fa-check" aria-hidden="true"></i>
                <p className="m-0 ">
                  Specially engineered for fast & mess-free Installation
                </p>
              </span>
              <span className="d-flex align-items-base gap-2">
                <i className="fa fa-check" aria-hidden="true"></i>
                <p className="m-0 ">
                  Splendid flooring solution for high-traffic, commercial spaces
                  like schools, hospitals and offices
                </p>
              </span>
              <span className="d-flex align-items-center gap-2">
                <i className="fa fa-check" aria-hidden="true"></i>
                <p className="m-0 ">Easily adapts to bespoke design plans</p>
              </span>
            </span>
          </span>
        </div>
        <div className="col-lg-5">
          <div>
            <p className="fw-bold fs-6 m-0 p-0">
              BRILLIANT DESIGN ELEVATES SPACES
            </p>{" "}
            <span className="d-flex align-items-center gap-2">
              <i className="fa fa-check" aria-hidden="true"></i>
              <p className="m-0 ">
                Displays superior design,stability & durability
              </p>
            </span>
            <span className="d-flex align-items-center gap-2">
              <i className="fa fa-check" aria-hidden="true"></i>
              <p className="m-0 ">
                Combines the natural beauty of wood with the strength of stone
              </p>
            </span>
            <span className="d-flex  gap-2">
              <i className="fa fa-check" aria-hidden="true"></i>
              <p className="m-0 ">
                Reproduces variations of raw wood grain, tonal hues & textures
                on a rock-solid surface
              </p>
            </span>
          </div>

          <div className="pt-4">
            <p className="fw-bold fs-6 m-0 p-0">
              UV TOP COAT IS MULTI-FUNCTIONAL
            </p>
            <span className="d-flex align-items-center gap-2">
              <i className="fa fa-check" aria-hidden="true"></i>
              <p className="m-0 ">
                The UV coating layer offers surface protection & wear-resistance
              </p>
            </span>
            <span className="d-flex align-items-center gap-2">
              <i className="fa fa-check" aria-hidden="true"></i>
              <p className="m-0 ">
                Its anti-fade effect retains flooring look & longevity
              </p>
            </span>
            <span className="d-flex  gap-2">
              <i className="fa fa-check" aria-hidden="true"></i>
              <p className="m-0 ">
                It adjusts the unnatural shine of plasticised extrusion to
                amplify flooring elegance
              </p>
            </span>
          </div>

          <div className="pt-4">
            <p className="fw-bold fs-6 m-">Application areas:</p>
            <div className="row PDroomslogo px-lg-5 px-md-5">
              <div className="col-3 px-4 d-flex flex-column align-items-center">
                <img src="/assets/images/icons/Group 29203.svg" alt="" />
                <p>Living room</p>
              </div>
              <div className="col-3 px-4 d-flex flex-column align-items-center">
                <img src="/assets/images/icons/Group 29204.svg" alt="" />
                <p>Bedroom</p>
              </div>
              <div className="col-3 px-4 d-flex flex-column align-items-center">
                <img src="/assets/images/icons/Group 29205.svg" alt="" />
                <p>Kitchen</p>

              </div>
              <div className="col-3 px-4 d-flex flex-column align-items-center">
                <img src="/assets/images/icons/Group 29206.svg" alt="" />
                <p>Washroom</p>

              </div>
              <div className="col-3 px-4 d-flex flex-column align-items-center">
                <img src="/assets/images/icons/Group 29207.svg" alt="" />
                <p>Commercial</p>

              </div>
              <div className="col-3 px-4 d-flex flex-column align-items-center">
                <img src="/assets/images/icons/Group 29208.svg" alt="" />
                <p>Housing</p>

              </div>
              <div className="col-3 px-4 d-flex flex-column align-items-center">
                <img src="/assets/images/icons/Group 29209.svg" alt="" />
                <p>Institutions</p>

              </div>
              <div className="col-3 px-4 d-flex flex-column align-items-center">
                <img src="/assets/images/icons/Group 29210.svg" alt="" />
                <p>F & B</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsNewSection;
