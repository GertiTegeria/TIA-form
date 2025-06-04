import logo from "../../logo.png";
import classes from "./Form.module.css";
import HorizontalLinearStepper from "../../components/Stepper/HorizontalLinearStepper";
import ButtonStepper from "../../components/ButtonStepper/ButtonStepper";
import { useState } from "react";
import Card from "../../components/Card/Card";
import PersonalForm from "../PersonalForm";
import { steps } from "../../DummyData/DUMMYDATA";

function Form() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
        <HorizontalLinearStepper activeStep={activeStep} steps={steps} />

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
          onReset={handleReset}
        />
      </Card>
    </div>
  );
}

export default Form;
