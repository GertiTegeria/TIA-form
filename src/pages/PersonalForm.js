import React, { useState } from "react";
import CustomTextInput from "../components/Input/Text/TextInput";
import classes from "./Personal.module.css";
import CustomSelecter from "../components/Input/Autocomplete/Autocomplete";
import locationIcon from "../assets/location.png";
import emailIcon from "../assets/email.svg";
import PhoneInputDemo from "../components/Input/Phone/PhoneInput";
import CustomRadioButton from "../components/Input/RadioButton/RadioButton";
import {
  options,
  genderOptions,
  civilStatusOptions,
} from "../DummyData/DUMMYDATA";
import PhotoUploadExample from "../components/UploadPic/UploadPic";
import DateInputDemo from "../components/Input/Date/Date";

export default function PersonalForm() {

    const [emriMbiemri, setEmriMbiemri] = useState("");
    const [vendndodhja, setVendndodhja] = useState("");
    const [vendlindja, setVendlindja] = useState("");
    const [gjinia, setGjinia] = useState("");
    const [statusiCivil, setStatusiCivil] = useState("");
    const [adresa, setAdresa] = useState("");
    const [telefon, setTelefon] = useState("");
    const [email, setEmail] = useState("");
    const [interesiPërPunë, setInteresiPërPunë] = useState("");

  return (
    <div className={classes.personalForm}>
      <div className={classes.firstGroup}>
        <CustomTextInput
          name="Emër dhe Mbiemër"
          label="Sheno emër dhe mbiemër"
          topLabel="Emër dhe Mbiemër"
          value={emriMbiemri}
          onChange={(e) => setEmriMbiemri(e.target.value)}
        />
        <DateInputDemo/>
      </div>
      <div className={classes.firstGroup}>
        <CustomSelecter
          width="100%"
          options={options}
          label="Selekto qytetin"
          name="select"
          topLabel=" Vendlindja"
          value={vendlindja}
          onChange={(value) => setVendlindja(value)}
        />
        <CustomSelecter
          width="100%"
          options={genderOptions}
          label="Selekto gjininë"
          name="select"
          topLabel=" Gjinia"
          value={gjinia}
          onChange={(value) => setGjinia(value)}
        />
      </div>
      <div className={classes.firstGroup}>
        <CustomSelecter
          width="100%"
          options={civilStatusOptions}
          label="Selekto statusin"
          name="select"
          topLabel=" Statusi civil"
          value={statusiCivil}
          onChange={(value) => setStatusiCivil(value)}
        />
        <CustomTextInput
          name="name"
          label="Rruga, qytetit"
          topLabel="Adresa"
          value={adresa}
          onChange={(e) => setAdresa(e.target.value)}
          icon={
            <img
              src={locationIcon}
              alt="location"
              style={{ width: 14, height: 14 }}
            />
          }
          iconPosition="end"
        />
      </div>
      <div className={classes.firstGroup}>
        <PhoneInputDemo onChange={(e) => setTelefon(e.target.value)} value={telefon}/>
        <CustomTextInput
          name="name"
          label="E-mail"
          topLabel="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={
            <img
              src={emailIcon}
              alt="email"
              style={{ width: 14, height: 14 }}
            />
          }
          iconPosition="end"
        />
      </div>
     
       

          <PhotoUploadExample />
      <h3 className={classes.h3red}>Interesi për punë</h3>
      <div className={classes.firstGroup}>
        <div style={{ flex: 1 }}>
          <CustomTextInput
            name="name"
            topLabel="Pozicioni për të cilin aplikoj: "
            iconPosition="end"
            value={interesiPërPunë}
            onChange={(e) => setInteresiPërPunë(e.target.value)}
          />
        </div>
        <div style={{ flex: 1 }} />
      </div>
      <CustomRadioButton
        name="radio"
        options={options}
        value={interesiPërPunë}
        onChange={(e) => setInteresiPërPunë(e.target.value)}
        topLabel="Interesi për punë"
      />
    </div>
  );
}
