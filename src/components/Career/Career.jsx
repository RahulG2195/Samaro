"use client";
import React, { useState } from "react";
import "./Career.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  isValidEmail,
  isValidReason,
  isValidMobile,
  isValidName,
} from "@/utils/validation";
import { notify, notifyError } from "@/utils/toaster.js";

// toast.configure();

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
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
    if (!isValidReason(formData.position)) {
      notifyError("Not a valid Role.");
      return;
    }
    if (!isValidMobile(formData.phone)) {
      notifyError("Not a valid number");
      return;
    }

    const submitForm = async () => {
      try {
        const response = await axios.post("api/careerForm", formData);
        if (response.status === 200) {
          setFormData({
            name: "",
            email: "",
            phone: "",
            position: "",
          });
          return "Application sent successfully!";
          // notify("Mailed Sended Successfully");
        } else {
          console.error("Form submission failed");
          // notifyError("Failed to send Mail");
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
    <div className="mt-5 pt-5 careerCont">
      <div className="headingCont text-center mt-5 mb-3">
        <h1 className="careerHeading my-4 fw-bold">
          <u className="border-3 border-danger border-bottom ">Career</u>
        </h1>
      </div>
      <div className="text-center whyus">
        <h4>Join Our Team</h4>
        <p className="w-50 mx-auto ">
          At Samaro Flooring, we're always on the lookout for passionate, talented individuals
          to join our growing team.
        </p>
      </div>
      <div className="container mt-2 ">
        <div className="row justify-content-center">
          <div className="col-md-6 careerform">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <div className="">
                  <PhoneInput
                    country={"in"}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  id="position"
                  name="position"
                  value={formData.position}
                  placeholder="Position"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="my-3"><span className="fw-semibold">Note : </span>
                To apply, please send your resume and a cover letter to <a href="mailto:Hrd@samaro.in">Hrd@samaro.in</a>. We'll be in touch if
                your qualifications meet our needs.
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn Csubmitbtn text-danger border-2 border-danger fw-semibold  rounded-pill py-0 px-5"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
