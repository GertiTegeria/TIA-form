import logo from "../../assets/logo.png";
import classes from "./AplicationForm.module.css";
import HorizontalLinearStepper from "../../components/Stepper/HorizontalLinearStepper";
import ButtonStepper from "../../components/ButtonStepper/ButtonStepper";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import PersonalForm from "../Forms/PersonalForm";
import { steps } from "../../DummyData/DUMMYDATA";

function ApplicationForm() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const savedStep = localStorage.getItem("activeStep");
    if (savedStep !== null) {
      setActiveStep(parseInt(savedStep));
    }
  }, []);


  const handleNext = () => {
    setActiveStep((prev) => {
      const nextStep = prev + 1;
      localStorage.setItem("activeStep", nextStep);
      return nextStep;
    });
  };
  
  const handleBack = () => {
    setActiveStep((prev) => {
      const prevStep = prev - 1;
      localStorage.setItem("activeStep", prevStep);
      return prevStep;
    });
  };
  
  return (
    <div className={classes.container}>
      <Card>
        <div className={classes.header}>
          <h1>
            <span className={classes.h1black}>Formular </span>
            <span className={classes.h1red}>Aplikimi</span>
          </h1>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>
        <div className={classes.hideSteper}>
          <HorizontalLinearStepper activeStep={activeStep} steps={steps} />
        </div>
        <h3 className={classes.h3red}>{steps[activeStep]}</h3>
        <div className={classes.formContent}>
          {activeStep === 0 && <PersonalForm />}
          {activeStep === 1 && <div>Education Form</div>}
          {activeStep === 2 && <div>Work Experience Form</div>}
          {activeStep === 3 && <div>Professional Training Form</div>}
          {activeStep === 4 && <div>Computer Programs Form</div>}
          {activeStep === 5 && <div>Foreign Languages Form</div>}
          {activeStep === 6 && <div>Cover Letter Form</div>}
          {activeStep === 7 && <div>Additional Questions Form</div>}
        </div>
        <div className={classes.divider}></div>
        <ButtonStepper
          activeStep={activeStep}
          stepsLength={steps.length}
          onNext={handleNext}
          onBack={handleBack}
        />
      </Card>
    </div>
  );
}

export default ApplicationForm;
