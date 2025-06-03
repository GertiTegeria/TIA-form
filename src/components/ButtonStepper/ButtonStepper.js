import React from "react";
import classes from "./Button.module.css";
import chevron from "../../assets/chevron-down.png";
import chevronUp from "../../assets/chevron-down (1).png";

export default function ButtonStepper({
  activeStep,
  stepsLength,
  onNext,
  onBack,
  onReset,
}) {
  const isLastStep = activeStep === stepsLength - 1;
  const isFirstStep = activeStep === 0;
  const isCompleted = activeStep === stepsLength;

  if (isCompleted) {
    return (
      <div className={classes.wrapper}>
        <div className={classes.completedMessage}>
          All steps completed - you're finished
        </div>
        <button className={classes.resetBtn} onClick={onReset}>
          Reset
        </button>
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
     {activeStep > 0 && <button
        className={classes.backBtn}
        onClick={onBack}
        disabled={isFirstStep}
      >
        <img src={chevronUp} alt="chevron" className={classes.chevron} />
        Back
      </button>   } 
      
      <button
        className={classes.nextBtn}
        onClick={onNext}
        disabled={isCompleted}
      >
        {isLastStep ? "Finish" : "Next"}
        <img src={chevron} alt="chevron" className={classes.chevron} />
      </button>
    </div>
  );
}