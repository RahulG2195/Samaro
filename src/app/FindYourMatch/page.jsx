"use client";
import React, { useState } from "react";
import "@/components/FindYourMatch/findmatch.css";
import StepPoints from "@/components/FindYourMatch/StepPoints";
import StepOne from "@/components/FindYourMatch/StepOne";
import StepTwo from "@/components/FindYourMatch/StepTwo";
import StepThree from "@/components/FindYourMatch/StepThree";
import StepFour from "@/components/FindYourMatch/StepFour";
import StepOutput from "@/components/FindYourMatch/StepOutput";
import { useRouter } from "next/navigation";

// Define steps here with the Page as a function that receives props
const steps = [
  { title: "Get Started", Page: StepPoints },
  { title: "Continue", Page: StepOne },
  { title: "Continue", Page: StepTwo },
  { title: "Continue", Page: StepThree },
  { title: "Submit", Page: StepFour },
  { title: " ", Page: StepOutput },
];

const FindYourMatchPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({

    preferences: [],
    floorType: "",
    color: "",
    features: [], 
    // ... other fields
  });
  const router = useRouter();

  const nextStep = (e) => {
    e.preventDefault();
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = (e) => {
    e.preventDefault();
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle final form submission here
    console.log("Form Data Submitted:", formData);
    // router.push("/StepOutput");
    // setCurrentStep((prevStep) => prevStep + 1);
  };

  const CurrentStepComponent = steps[currentStep].Page;

  return (
    <section className="finyourMatch_sec my-md-5 mb-5">
      <div className="container">
        <div className="row">
          <form onSubmit={handleFormSubmit} className="step_form">
            {currentStep > 0 && (
              <i
                onClick={prevStep}
                className="fa-solid fa-chevron-left prev_step"
              ></i>
            )}
            <CurrentStepComponent formData={formData} handleInputChange={handleInputChange} />
            {currentStep < steps.length - 1 && (
              <div className="step_next_button">
                <button
                  className="btn border-3 submit_btn_match border-danger rounded-pill"
                  onClick={nextStep}
                >
                  {steps[currentStep].title}
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            )}
            {/* {currentStep === steps.length - 1 && (
              <div className="step_next_button">
                <button
                  type="submit"
                  className="btn border-3 submit_btn_match border-danger rounded-pill"
                >
                  Submit <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            )} */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default FindYourMatchPage;