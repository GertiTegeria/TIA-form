import React from 'react'
import classes from './ExtraQuestion.module.css'
import CustomRadioButton from '../../../components/Input/RadioButton/RadioButton'
import { extraQuestionOptions, extraQuestionOptions2 } from '../../../DummyData/DUMMYDATA'
import CustomTextInput from '../../../components/Input/Text/TextInput'

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
      <div style={{marginTop: "20px"}}></div>
      <h3 className={classes.h3Title}>Si e morët informacionin për pozicionin vakant? </h3>
      <CustomRadioButton
        name="additionalQuestions2" 
        options={extraQuestionOptions2}
        value={formData.additionalQuestions2}
        onChange={(e) => updateFormData("additionalQuestions2", e.target.value)}
        isFullWidth={true}
      />
    </div>
  )
}
