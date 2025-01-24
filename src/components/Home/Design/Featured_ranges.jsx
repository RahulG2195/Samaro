import React, { useState } from "react";
import "./FeaturedRanges.css"; // Ensure this file exists

const FeaturedRanges = ({ ranges }) => {
  const [activeRange, setActiveRange] = useState(1);

  return (
    <>
      <div className="featured-ranges row justify-content-center align-items-center div-space">
        <div className="heading col-12 col-lg-3 col-md-12 text-center text-md-start pb-3">
          <h1 className="fw-semibold text-danger ">
            <span className="text-navy">Featured</span> Ranges
          </h1>
        </div>
        <div className="ranges-container col-12 col-lg-6 col-md-8 position-relative">
          {ranges.map((range) => (
            <div
              key={range.id}
              className={`range-card ${
                activeRange === range.id && range.image ? "active" : ""
              }`}
              onMouseEnter={() => range.image && setActiveRange(range.id)}
              onMouseLeave={() => setActiveRange(1)}
            >
              {range.image ? (
                <div className="image">
                  <img src={`/uploads/${range.image}`} alt="" />
                </div>
              ) : (
                <div className="coming-soon text-center">
                  <p className="fw-bold">COMING SOON</p>
                </div>
              )}
              {activeRange !== range.id && (
                <div className="overlayName">
                  <p className={`rotated_name fw-bold ${range.image ? '' : 'medium'}`}>{range.name}</p>
                </div>
              )}
              {activeRange === range.id && range.image && (
                <div className="description ps-5 w-100">
                  <p className="fw-semibold p-0 ">{range.description}</p>
                </div>
              )}
            </div>
          ))}
          {ranges.map((range) => (
            <div className="position-absolute titleCont" key={range.id}>
              {activeRange === range.id && range.image && (
                <div className="">
                  <h3 className="bg-danger text-white rounded d-inline px-3 py-2 fw-bold">
                    {range.name}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedRanges;
