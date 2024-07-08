"use client";
import React, { useState } from "react";
import StepOne from "../StepOne/StepOne";
import StepTwo from "../StepTwo/StepTwo";
import StepThree from "../StepThree/StepThree";
import StepFour from "../StepFour/StepFour";

const StepForm = () => {
  const [stepNumber, setStepNumber] = useState(1);

  const nextStep = () => {
    setStepNumber(stepNumber + 1);
  };

  const renderStep = () => {
    switch (stepNumber) {
      case 1:
        return <StepOne nextStep={nextStep} />;
      case 2:
        return <StepTwo nextStep={nextStep} />;
      case 3:
        return <StepThree nextStep={nextStep} />;
      case 4:
        return <StepFour />;
      default:
        return null;
    }
  };

  return <section className="steps">{renderStep()}</section>;
};

export default StepForm;
