import CustomTextInput from "../../../components/Input/Text/TextInput";
import classes from "./Personal.module.css";
import CustomSelecter from "../../../components/Input/Autocomplete/Autocomplete";
import locationIcon from "../../../assets/location.png";
import emailIcon from "../../../assets/email.svg";
import CustomRadioButton from "../../../components/Input/RadioButton/RadioButton";
import {
  options,
  genderOptions,
  civilStatusOptions,
  workTimeOptions,
} from "../../../DummyData/DUMMYDATA";
import DateInputDemo from "../../../components/Input/Date/Date";
import CustomPhoneInput from "../../../components/Input/Phone/PhoneInput";
import FileUpload from "../../../components/UploadPic/UploadPic";
import { useState } from "react";

export default function PersonalForm({ formData, updateFormData, updloadPhotoFile }) {

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const validateEmail = (email) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailError(isValid ? "" : "Emaili duhet të përmbajë simbolin '@'");
    return isValid;
  };


  const handlePhoneChange = (e) => {
    let phoneValue = e.target.value;

    // Heq çdo gjë që nuk është numër (vetëm 0-9)
    const onlyNumbers = phoneValue.replace(/\D/g, "");

    // Kontrollo nëse ka më pak se 9 shifra (ose kriterin që dëshiron)
    if (onlyNumbers.length < 9) {
      setPhoneError("Numri i telefonit duhet të ketë të paktën 9 shifra");
    } else {
      setPhoneError("");
    }

    updateFormData("telefon", phoneValue);
  };

  return (
    <div className={classes.personalForm}>
      <div className={classes.firstGroup}>
        <CustomTextInput
          name="Emër dhe Mbiemër"
          label="Sheno emër dhe mbiemër"
          topLabel="Emër dhe Mbiemër"
          value={formData.emriMbiemri}
          onChange={(e) => updateFormData("emriMbiemri", e.target.value)}
        />
        <DateInputDemo
          onChange={(e) => updateFormData("datePersonal", e.target.value)}
          value={formData.datePersonal}
          topLabel="Datëlindja"
        />
      </div>
      <div className={classes.firstGroup}>
        <CustomSelecter
          width="100%"
          options={options}
          label="Selekto qytetin"
          name="select"
          topLabel=" Vendlindja"
          value={formData.vendlindjaPersonal}
          onChange={(value) => updateFormData("vendlindjaPersonal", value)}
        />
        <CustomSelecter
          width="100%"
          options={genderOptions}
          label="Selekto gjininë"
          name="select"
          topLabel=" Gjinia"
          value={formData.gjinia}
          onChange={(value) => updateFormData("gjinia", value)}
        />
      </div>
      <div className={classes.firstGroup}>
        <CustomSelecter
          width="100%"
          options={civilStatusOptions}
          label="Selekto statusin"
          name="select"
          topLabel=" Statusi civil"
          value={formData.statusiCivil}
          onChange={(value) => updateFormData("statusiCivil", value)}
        />
        <CustomTextInput
          name="name"
          label="Rruga, qytetit"
          topLabel="Adresa"
          value={formData.adresaPersonal}
          onChange={(e) => updateFormData("adresaPersonal", e.target.value)}
          icon={
            <img src={locationIcon} alt="location" className={classes.icon} />
          }
          iconPosition="end"
        />
      </div>
      <div className={classes.firstGroup}>
      <CustomPhoneInput
          topLabel="Telefon / Celular"
          name="telefon"
          onChange={handlePhoneChange}
          value={formData.telefon}
          error={!!phoneError}
          helperText={phoneError}
        />
        <CustomTextInput
          name="name"
          label="E-mail"
          topLabel="E-mail"
          value={formData.email}
          onChange={(e) => {
            const newEmail = e.target.value;
            updateFormData("email", newEmail);
            validateEmail(newEmail);
          }}
          icon={<img src={emailIcon} alt="email" />}
          iconPosition="end"
          error={!!emailError}
          helperText={emailError}
        />
      </div>
      <FileUpload
        onFileSelect={(file) => {
    updateFormData("photoFile", file); // Optional: store locally
    updloadPhotoFile(file);            // Upload to server
  }}
        acceptedTypes="image/*"
        value={formData.photoFile}
      />

      <h3 className={classes.h3red}>Interesi për punë</h3>
      <div className={classes.firstGroup}>
        <div style={{ flex: 1 }}>
          <CustomTextInput
            name="name"
            topLabel="Pozicioni për të cilin aplikoj: "
            iconPosition="end"
            value={formData.interesiPërPunë}
            onChange={(e) => updateFormData("interesiPërPunë", e.target.value)}
          />
        </div>
        <div style={{ flex: 1 }} />
      </div>
      <CustomRadioButton
        name="mundësiaPunë"
        options={workTimeOptions}
        value={formData.mundësiaPunë}
        onChange={(e) => updateFormData("mundësiaPunë", e.target.value)}
        topLabel="Mundësia për punë"
        isInsideInput={true}
      />
    </div>
  );
}
