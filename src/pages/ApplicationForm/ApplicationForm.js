import logo from "../../assets/logo.png";
import classes from "./AplicationForm.module.css";
import HorizontalLinearStepper from "../../components/Stepper/HorizontalLinearStepper";
import ButtonStepper from "../../components/ButtonStepper/ButtonStepper";
import { useState } from "react";
import Card from "../../components/Card/Card";
import PersonalForm from "../FormsSteps/PersonalForm";
import { steps } from "../../DummyData/DUMMYDATA";
import FinishedAplication from "../FinishedAplication/FinishedAplication";

function ApplicationForm() {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    emriMbiemri: "",
    vendlindja: "",
    gjinia: "",
    statusiCivil: "",
    adresa: "",
    telefon: "",
    email: "",
    date: "",
    pozicioni: "", 
    mundësiaPunë: "", 
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    // Add your form submission logic here
    console.log("Application submitted!");
    // You can add API call, navigation, or other submission logic here
    alert("Application submitted successfully!");
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
        {activeStep < 8 && (
          <div className={classes.hideSteper}>
            <HorizontalLinearStepper activeStep={activeStep} steps={steps} />
          </div>
        )}

        <h3 className={classes.h3red}>{steps[activeStep]}</h3>
        <div className={classes.formContent}>
          {activeStep === 0 && (
            <PersonalForm formData={formData} updateFormData={updateFormData} />
          )}
          {activeStep === 1 && <div>Education Form</div>}
          {activeStep === 2 && <div>Work Experience Form</div>}
          {activeStep === 3 && <div>Professional Training Form</div>}
          {activeStep === 4 && <div>Computer Programs Form</div>}
          {activeStep === 5 && <div>Foreign Languages Form</div>}
          {activeStep === 6 && <div>Cover Letter Form</div>}
          {activeStep === 7 && <div>Additional Questions Form</div>}
          {activeStep === 8 && (
            <FinishedAplication onBack={handleBack} onSubmit={handleSubmit} />
          )}
        </div>
        {/* {activeStep === 0 && 8 ? '' :<div className={classes.divider}></div>} */}
        {activeStep < 8 && (
          <>
            <div className={classes.divider}></div>
            <ButtonStepper
              activeStep={activeStep}
              stepsLength={steps.length}
              onNext={handleNext}
              onBack={handleBack}
            />
          </>
        )}
      </Card>
    </div>
  );
}

export default ApplicationForm;
