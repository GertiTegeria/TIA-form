import React from 'react'
import classes from './ExtraQuestion.module.css'
import CustomRadioButton from '../../../components/Input/RadioButton/RadioButton'
import { extraQuestionOptions, extraQuestionOptions2 } from '../../../DummyData/DUMMYDATA'
import CustomTextInput from '../../../components/Input/Text/TextInput'
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

const CustomCheckbox = styled(Checkbox)(() => ({
padding: "0px",
  '&.Mui-checked': {
    color: '#DB0035',
    padding: "0px",
  },
}));


const label = { inputProps: { 'aria-label': 'Checkbox demo',  } };

export default function ExtraQuestion({ formData, updateFormData }) {
  return (
     <div className={classes.personalForm}>
        <h3 className={classes.h3Title}>Keni të afërm që punojnë për Tirana International Airport? </h3>
      <CustomRadioButton
        name="additionalQuestions" 
        options={extraQuestionOptions}
        value={formData.additionalQuestions}
        onChange={(e) => updateFormData("additionalQuestions", e.target.value)}
      />
      <CustomTextInput
      width="50%"
      label="Specifikoni marrëdhënien"
      value={formData.specifyRelationship}
      onChange={(e) => updateFormData("specifyRelationship", e.target.value)}
      />
     

      <h3 className={classes.h3Title}>Si e morët informacionin për pozicionin vakant? </h3>
   
      <CustomRadioButton
        name="additionalQuestions2" 
        options={extraQuestionOptions2}
        value={formData.additionalQuestions2}
        onChange={(e) => updateFormData("additionalQuestions2", e.target.value)}
        isFullWidth={true}
      />
     <div style={{
        display: "flex", 
        marginTop: "10%", 
        gap: "8px",
        alignItems: "flex-start"  
      }}>
        <CustomCheckbox {...label} defaultChecked />
        <div style={{ 
          fontSize: "12px", 
          fontWeight: "400",
          color: "#1E1E1E", 
          lineHeight: "20px",
        }}>
          Unë deklaroj se të gjitha të dhënat janë të vërteta dhe të plota dhe jam dakord që çdo falsifikim i informacionit, pavarësisht periudhës së zbulimit, mund të shkaktojë përfundim të marrëdhënies time të punësimit me kompaninë. Unë kuptoj që i gjithë informacioni në këtë 
          aplikim është subjekt verifikimi. 
        </div>
      </div>
    </div>
  )
}
