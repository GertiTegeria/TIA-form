import CustomTextInput from "../../../components/Input/Text/TextInput";
import classes from "./Personal.module.css";
import CustomSelecter from "../../../components/Input/Autocomplete/Autocomplete";
import locationIcon from "../../../assets/location.png";
import emailIcon from "../../../assets/email.svg";
import PhoneInputDemo from "../../../components/Input/Phone/PhoneInput";
import CustomRadioButton from "../../../components/Input/RadioButton/RadioButton";
import {
  options,
  genderOptions,
  civilStatusOptions,
  workTimeOptions,
} from "../../../DummyData/DUMMYDATA";
import PhotoUpload from "../../../components/UploadPic/UploadPic";
import DateInputDemo from "../../../components/Input/Date/Date";
import CustomPhoneInput from "../../../components/Input/Phone/PhoneInput";

export default function PersonalForm({ formData, updateFormData }) {
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
          onChange={(e) => updateFormData("telefon", e.target.value)}
          value={formData.telefon}
        />
        <CustomTextInput
          name="name"
          label="E-mail"
          topLabel="E-mail"
          value={formData.email}
          onChange={(e) => updateFormData("email", e.target.value)}
          icon={<img src={emailIcon} alt="email" />}
          iconPosition="end"
        />
      </div>
      <PhotoUpload
        onFileSelect={(file) => updateFormData("photoFile", file)}
        acceptedTypes="image/*,application/pdf"
        maxSize={5 * 1024 * 1024}
        coverLetter={false}
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
