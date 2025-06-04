import React from "react";
import classes from "./TextInput.module.css";

const CustomTextInput = ({
  name,
  value,
  onChange,
  onBlur,
  type = "text",
  label,
  topLabel,
  placeholder,
  icon,
  iconPosition = "end",
  error,
  helperText,
  disabled,
}) => {
  return (
    <div className={classes.inputWrapper}>
      {topLabel && <label className={classes.topLabel}>{topLabel}</label>}

      <div className={`${classes.inputContainer} ${error ? classes.error : ""} ${disabled ? classes.disabled : ""}`}>
        {icon && iconPosition === "start" && (
          <span className={classes.icon}>{icon}</span>
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder || label}
          disabled={disabled}
          className={classes.input}
          autoComplete="off"
        />

        {icon && iconPosition === "end" && (
          <span className={classes.icon}>{icon}</span>
        )}
      </div>

      {helperText && <div className={classes.helperText}>{helperText}</div>}
    </div>
  );
};

export default CustomTextInput;
