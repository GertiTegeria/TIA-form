import React, { useEffect } from "react";
import classes from "./Button.module.css";
import chevron from "../../assets/chevron-down.png";
import chevronUp from "../../assets/chevron-down (1).png";
import { useNavigate } from "react-router-dom";

export default function ButtonStepper({
  activeStep,
  stepsLength,
  onNext,
  onBack,
  isLastStep ,
}) {
  
  const isFirstStep = activeStep === 0;
  const isCompleted = activeStep === stepsLength;

 
  const navigate = useNavigate();

  useEffect(() => {
    if (isCompleted) {
      localStorage.setItem("activeStep", stepsLength); 
      navigate("/FinishedAplication");
    }
  }, [isCompleted, navigate, stepsLength]);

  if (isCompleted) return null;

  return (
    <div className={classes.wrapper}>
     {activeStep > 0 && <button
        className={classes.backBtn}
        onClick={onBack}
        disabled={isFirstStep}
      >
        <img src={chevronUp} alt="chevron" className={classes.chevron} />
        Kthehu
      </button>   } 
      
      <button
        className={classes.nextBtn}
        onClick={onNext}
        disabled={isCompleted}
      >
        {isLastStep ? "Dërgo aplikimin" : "Vazhdo"}
        {!isLastStep && <img src={chevron} alt="chevron" className={classes.chevron} />}
      </button>
    </div>
  );
}