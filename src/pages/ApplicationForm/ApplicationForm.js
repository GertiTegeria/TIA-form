import logo from "../../assets/logo.png";
import classes from "./AplicationForm.module.css";
import HorizontalLinearStepper from "../../components/Stepper/HorizontalLinearStepper";
import ButtonStepper from "../../components/ButtonStepper/ButtonStepper";
import { useState } from "react";
import Card from "../../components/Card/Card";
import PersonalForm from "../FormsSteps/Personal/PersonalForm";
import { steps } from "../../DummyData/DUMMYDATA";
import FinishedAplication from "../FinishedAplication/FinishedAplication";
import EducationForm from "../FormsSteps/Education/EducationForm";
import WorkExperience from "../FormsSteps/Experience/WorkExperience";
import Training from "../FormsSteps/Training/Training";
import Language from "../FormsSteps/Languages/Languages";
import ExtraQuestion from "../FormsSteps/ExtraQuestion/ExtraQuestion";
import ComputerProgram from "../FormsSteps/ComputerProgram/ComputerProgram";
import CoverLetter from "../FormsSteps/CoverLetter/CoverLetter";
import axios from "axios";

function ApplicationForm() {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    emriMbiemri: "",
    vendlindjaPersonal: "",
    gjinia: "",
    statusiCivil: "",
    phoneNumber: "",
    adresaPersonal: "",
    telefon: "",
    email: "",
    datePersonal: "",
    pozicioni: "",
    mundësiaPunë: "",
     photoFile: null,
    education: [
      {
        institution: "",
        location: "",
        diploma: "",
        startDate: "",
        endDate: "",
      },
    ],
    workExperience: [
      {
        company: "",
        location: "",
        position: "",
        buinessType: "",
        startDate: "",
        endDate: "",
        positionDetails: "",
      },
    ],
    training: [
      {
        title: "",
        instituti: "",
        vendodhja: "",
        year: "",
        duration: "",
      },
    ],
    computerPrograms: {},
    foreignLanguages: [
      {
        language: "",
        level: "",
      },
    ],
    coverLetter: "",
    additionalQuestions: "",
    additionalQuestions2: "",
    specifyRelationship: "",
    coverLetterLength: "",
    coverLetterFile: null,
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

  const updateEducationEntry = (index, field, value) => {
    const updatedEducation = [...formData.education];
    updatedEducation[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      education: updatedEducation,
    }));
  };

  const addEducationEntry = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          institution: "",
          location: "",
          diploma: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  };

  const removeEducationEntry = () => {
    if (formData.education.length > 1) {
      setFormData((prev) => ({
        ...prev,
        education: prev.education.slice(0, -1),
      }));
    }
  };

  const updateWorkExperienceEntry = (index, field, value) => {
    const updatedWorkExperience = [...formData.workExperience];
    updatedWorkExperience[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      workExperience: updatedWorkExperience,
    }));
  };

  const addWorkExperienceEntry = () => {
    setFormData((prev) => ({
      ...prev,
      workExperience: [
        ...prev.workExperience,
        {
          company: "",
          location: "",
          position: "",
          buinessType: "",
          startDate: "",
          endDate: "",
          positionDetails: "",
        },
      ],
    }));
  };

  const removeWorkExperienceEntry = () => {
    if (formData.workExperience.length > 1) {
      setFormData((prev) => ({
        ...prev,
        workExperience: prev.workExperience.slice(0, -1),
      }));
    }
  };

  const updateTrainingEntry = (index, field, value) => {
    const updatedTraining = [...formData.training];
    updatedTraining[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      training: updatedTraining,
    }));
  };

  const addTrainingEntry = () => {
    setFormData((prev) => ({
      ...prev,
      training: [
        ...prev.training,
        {
          title: "",
          instituti: "",
          vendodhja: "",
          year: "",
          duration: "",
        },
      ],
    }));
  };

  const removeTrainingEntry = () => {
    if (formData.training.length > 1) {
      setFormData((prev) => ({
        ...prev,
        training: prev.training.slice(0, -1),
      }));
    }
  };

  const updateLanguageEntry = (index, field, value) => {
    const updatedLanguage = [...formData.foreignLanguages];
    updatedLanguage[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      foreignLanguages: updatedLanguage,
    }));
  };

  const addLanguageEntry = () => {
    setFormData((prev) => ({
      ...prev,
      foreignLanguages: [
        ...prev.foreignLanguages,
        {
          language: "",
          level: "",
        },
      ],
    }));
  };

  function updloadCoverLetterasFile(file) {
  // console.log("Starting file upload:", file.name, file.size, file.type);
  
  const headers = {
    'Content-Type': 'application/octet-stream',
    'X-File-Size': file.size.toString(),
    'X-File-Type': file.type,
    'X-File-Name': file.name,
    // 'Content-Length': file.size.toString(),
    'X-File-Offset': '0'
  };

  console.log("Upload headers:", headers);

  axios.post("https://tia.digitalapps0.com/ws/files/upload", file, {
    headers: headers,
  })
    .then((response) => {
      console.log("Response data getting id:", response.data.id);
      
    })
    .catch((error) => {
      console.error("Upload failed:", error);
      
      if (error.response) {
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
        console.error("Error data:", error.response.data);
        
      }
      updateFormData("coverLetterFile", null);
      alert("File upload failed. Please try again.");
    });
}



function updloadPhotoFile(file) {
  const headers = {
    'Content-Type': 'application/octet-stream',
    'X-File-Size': file.size.toString(),
    'X-File-Type': file.type,
    'X-File-Name': file.name,
    'X-File-Offset': '0'
  };

  axios.post("https://tia.digitalapps0.com/ws/files/upload", file, {
    headers: headers,
  })
    .then((response) => {
      console.log("Upload successful, ID:", response.data.id, response.data.fileName, response.data.fileType, response.data.fileSize);
      updateFormData("photoFile", {
        id: response.data.id,
        name: file.name,
        type: file.type,
        size: file.size,
      });
    })
    .catch((error) => {
      console.error("Upload failed:", error);
      updateFormData("photoFile", null);
      alert("Image upload failed. Please try again.");
    });
}


  const removeLanguageEntry = () => {
    if (formData.foreignLanguages.length > 1) {
      setFormData((prev) => ({
        ...prev,
        foreignLanguages: prev.foreignLanguages.slice(0, -1),
      }));
    }
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
            <PersonalForm formData={formData} updateFormData={updateFormData} updloadPhotoFile={updloadPhotoFile} />
          )}
          {activeStep === 1 && (
            <EducationForm
              education={formData.education}
              updateEducationEntry={updateEducationEntry}
              addEducationEntry={addEducationEntry}
              removeEducationEntry={removeEducationEntry}
            />
          )}

          {activeStep === 2 && (
            <WorkExperience
              workExperience={formData.workExperience}
              updateWorkExperienceEntry={updateWorkExperienceEntry}
              addWorkExperienceEntry={addWorkExperienceEntry}
              removeWorkExperienceEntry={removeWorkExperienceEntry}
            />
          )}
          {activeStep === 3 && (
            <Training
              training={formData.training}
              updateTrainingEntry={updateTrainingEntry}
              addTrainingEntry={addTrainingEntry}
              removeTrainingEntry={removeTrainingEntry}
            />
          )}
          {activeStep === 4 && (
            <ComputerProgram
              computerPrograms={formData.computerPrograms}
              setComputerPrograms={(value) =>
                updateFormData("computerPrograms", value)
              }
            />
          )}
          {activeStep === 5 && (
            <Language
              languages={formData.foreignLanguages}
              updateLanguageEntry={updateLanguageEntry}
              addLanguageEntry={addLanguageEntry}
              removeLanguageEntry={removeLanguageEntry}
            />
          )}
          {activeStep === 6 && (
            <CoverLetter formData={formData} updateFormData={updateFormData} updloadCoverLetterasFile={updloadCoverLetterasFile} />
          )}
          {activeStep === 7 && (
            <ExtraQuestion
              formData={formData}
              updateFormData={updateFormData}
            />
          )}
          {activeStep === 8 && (
            <FinishedAplication
              computerPrograms={formData.computerPrograms}
              formData={formData}
              updateFormData={updateFormData}
              onBack={handleBack}
              onSubmit={handleSubmit}
            />
          )}
        </div>
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
