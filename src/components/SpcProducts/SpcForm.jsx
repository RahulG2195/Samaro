"use client";
import React, { useState } from "react";
import "./SpcForm.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import {
  isValidEmail,
  isValidReason,
  isValidMobile,
  isValidName,
} from "@/utils/validation";
import { notify, notifyError } from "@/utils/toaster.js";
import { toast, Bounce } from "react-toastify";

const SpcForm = ({ hideguide, contactformcol, pb, note }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    selectedOption: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleOptionChange = (e) => {
    setFormData({ ...formData, selectedOption: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidName(formData.name)) {
      notifyError("Please enter a valid Name.");
      return;
    }
    if (!isValidEmail(formData.email)) {
      notifyError("Please enter a valid email.");
      return;
    }
    if (!isValidReason(formData.message)) {
      notifyError("Not a valid message.");
      return;
    }
    if (!isValidMobile(formData.phone)) {
      notifyError("Not a valid number.");
      return;
    }

    const submitForm = async () => {
      try {
        const response = await axios.post("/api/spcForm", formData);
        if (response.status === 200) {
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            selectedOption: "",
          });

          return "Application sent successfully!";
        } else {
          throw new Error("Failed to send Mail");
        }
      } catch (e) {
        throw new Error(e.message || "Failed to send Mail");
      }
    };

    toast.promise(
      submitForm(),
      {
        pending: "Sending your application...",
        success: "Application sent successfully!",
        error: "Failed to send your application.",
      },
      {
        position: "top-center",
        transition: Bounce,
      }
    );
  };
  return (
    <>
      <section
        className={`spcFormCont row container mx-auto ${pb ? "pb-0" : ""
          } my-md-4 justify-content-evenly align-items-center getintouchformCont`}
      >
        <div className={`col-md-6 ${hideguide ? "hideguide" : ""}`}>
          <span className="spcformheading">
            <p className="fs-5 guidHeading letsGuideYou p-0">
              LET US GUIDE YOU
            </p>

            <p className="fs-5 guidHeading subH fw-normal">
              {/* TO YOUR PERFECT SPC FLOOR */}
              Ready to transform your space?
            </p>
            <p className="fw-medium txt guid-para">
              {/* Choosing the perfect floor is not easy, but we would love to help
              you with the challenge. Together we will find a vinyl floor that
              fits your home perfectly. */}
              Whether you're designing a new home, renovating an office, or
              planning a commercial project, Samaro Flooring has the solutions you need.
            </p>
          </span>
        </div>
        <span className="getinTouch text-center fs-1 fw-bold mb-0">
          GET IN TOUCH
        </span>
        <div className={`${contactformcol ? "col-md-10" : "col-md-6"}`}>
          <form className="spcform" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control border-0 "
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="row">
              <div className="mb-3 col-md-6 col-lg-6 col-sm-6">
                <input
                  type="email"
                  className="form-control border-0"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3 mobileSbmtResp col-md-6 col-lg-6 col-sm-6">
                <div className="d-flex align-items-end gap-2 ">
                  <PhoneInput
                    country={"in"}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                  />
                </div>
              </div>
            </div>

            <div className={`row my-4 ${pb ? "mb-0" : "my-4 "}`}>
              <p>Select any one</p>

              <div className="col-md-6 slct1 my-2 rdbuttons">
                <input
                  id="Wholesaler"
                  type="radio"
                  name="selectedOption"
                  className="me-2 form-check-input"
                  value="Wholesaler/Distributors"
                  onChange={handleOptionChange}
                />
                <label htmlFor="Wholesaler">Wholesaler/Distributors</label>
              </div>
              <div className="col-md-6 slct1 my-2  rdbuttons">
                <input
                  id="Commercial"
                  type="radio"
                  name="selectedOption"
                  className="me-2 form-check-input"
                  value="Commercial Projects"
                  onChange={handleOptionChange}
                />
                <label htmlFor="Commercial">Commercial Projects</label>
              </div>
              <div className="col-md-6 slct1 my-2  rdbuttons">
                <input
                  id="customer"
                  type="radio"
                  name="selectedOption"
                  className="me-2 form-check-input"
                  value="Sales Inquery"
                  onChange={handleOptionChange}
                />
                <label htmlFor="customer">Sales Enquiry</label>
              </div>
              <div className="col-md-6 slct1 my-2 rdbuttons">
                <input
                  id="OEM"
                  type="radio"
                  name="selectedOption"
                  className="me-2 form-check-input"
                  value="OEM"
                  onChange={handleOptionChange}
                />
                <label htmlFor="OEM">OEM</label>
              </div>

              <div className="my-3">
                <textarea
                  type="text"
                  className="form-control border-0 text-danger"
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              {note && (
                <div className="my-2 text-center">
                  <span className="fw-bold">Note : </span>
                  {note}
                </div>
              )}
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="callBTN btn px-5 py-0 rounded-pill fw-semibold"
                >
                  Get a free call
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SpcForm;
