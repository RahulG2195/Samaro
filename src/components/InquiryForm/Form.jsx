import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
      <div
        className="container inquiryformcont d-flex flex-column align-items-center"
        id="inquiryForm"
      >
        <div className="col-md-12">
          <h1 className="fw-bold text-white">Knock, Knock,</h1>
          <p className="text-white">Step into joy with beautiful floors.</p>
          <p className="mt-4 text-white">
            <i className="fa fa-map-marker" aria-hidden="true"></i> 213-215,
            Hubtown Solaris, N. S. Phadake Marg, Andheri(East), Mumbai-400069,
            India.
          </p>
          <p>
            <span className="me-3 text-white">
              <i className="fa fa-envelope " aria-hidden="true"></i>{" "}
              info@samaro.in
            </span>
            <span>
              <i className="fa fa-mobile text-white" aria-hidden="true"></i>{" "}
              +91-809754115
            </span>
          </p>
        </div>

        <div className=" col-md-12 popup">
          <h1 className="my-5 fw-bold text-white">GET IN TOUCH</h1>
          <form className="popform">
            <div className="mb-3">
              <input
                type="text"
                className="form-control border-0 "
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control border-0 "
                placeholder="Email"
              />
            </div>
            <div className="mb-3  w-75">
              <input
                type="tel"
                className="form-control border-0"
                placeholder="Mobile Number"
              />
            </div>
            <div className="row my-4">
              <p>Select any one</p>

              <div className="col-md-6 slct1 my-2">
                <input
                  type="radio"
                  name="example"
                  className="me-2 form-check-input"
                />
                <label for="radio-red1">Wholesaler/Distributors</label>
              </div>
              <div className="col-md-6 slct1 my-2">
                <input
                  type="radio"
                  name="example"
                  className="me-2 form-check-input"
                />
                <label for="radio-red2">Commercial Projects</label>
              </div>
              <div className="col-md-6 slct1 my-2">
                <input
                  type="radio"
                  name="example"
                  className="me-2 form-check-input"
                />
                <label for="radio-red3">Sales Inquery</label>
              </div>
              <div className="col-md-6 slct1 my-2">
                <input
                  type="radio"
                  name="example"
                  className="me-2 form-check-input"
                />
                <label for="radio-red4">OEM</label>
              </div>
            </div>

            <div className="my-3">
              <textarea
                type="text"
                className="form-control border-0 "
                placeholder="Your Message"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn px-5 py-0 rounded-pill border-3 border-white text-white fw-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
