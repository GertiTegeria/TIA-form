import React from "react";
import classes from "./TextArea.module.css";


const CoverLetterTextarea = ({
  name,
  value,
  onChange,
  onBlur,
  label = "Përse deshironi të punoni për TIA-N? ",
  placeholder,
  disabled = false,
  rows = 8,
  maxLength,
  required = false
}) => {
  return (
    <div className={classes.textareaWrapper}>
      <label className={classes.topLabel}>
        {label}
        {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      
      <div className={classes.textareaContainer}>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          maxLength={maxLength}
          className={classes.textarea}
        />
      </div>
    </div>
  );
};

export default CoverLetterTextarea;