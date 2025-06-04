import React, { useState } from "react";
import phoneIcon from "../../../assets/phone.png";

const PhoneIcon = () => (
  <img src={phoneIcon} alt="phone" style={{ width: 16, height: 16 }} />
);

const styles = {
  inputWrapper: {
    width: "100%",
    
  },

  topLabel: {
    display: "block",
    marginBottom: "6px",
    fontSize: "14px",
    color: "#1E1E1E",
    fontWeight: "500",
  },

  inputContainer: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #B5B5B5",
    fontSize: "14px",
     height: "52px"
  },

  inputContainerDisabled: {
    backgroundColor: "#f5f5f5",
    opacity: 0.6,
    pointerEvents: "none",
  },

  inputContainerError: {
    borderColor: "red",
  },

  countryCodeSection: {
    display: "flex",
    alignItems: "center",
    padding: "18px 16px",
    borderRight: "1px solid #B5B5B5",
    cursor: "pointer",
  },

  countryCode: {
    fontSize: "12px",
    color: "#1E1E1E",
    marginRight: "6px",
  },

input: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "12px",
    height: "100%",         
    padding: "0 12px",     
    backgroundColor: "transparent",
    fontFamily: "inherit",
    color: "#1E1E1E",
  },

  phoneIconEnd: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: "0 16px",      
  },
  helperText: {
    fontSize: "12px",
    marginTop: "4px",
    color: "#666",
  },

  helperTextError: {
    color: "red",
  },
};

const CustomPhoneInput = ({
  name,
  value = "",
  onChange,
  onBlur,
  label,
  topLabel,
  placeholder = "Enter phone number",
  error,
  helperText,
  disabled,
  defaultCountryCode = "+355",
}) => {
  const [selectedCountryCode, setSelectedCountryCode] =
    useState(defaultCountryCode);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(
    value ? value.replace(selectedCountryCode, "").trim() : ""
  );

  const handleCountryCodeChange = (code) => {
    setSelectedCountryCode(code);
    setIsDropdownOpen(false);

    const fullNumber = code + phoneNumber;
    if (onChange) {
      onChange({
        target: {
          name,
          value: fullNumber,
        },
      });
    }
  };

  const handlePhoneNumberChange = (e) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);

    const fullNumber = selectedCountryCode + newPhoneNumber;
    if (onChange) {
      onChange({
        target: {
          name,
          value: fullNumber,
        },
      });
    }
  };

  const handleDropdownToggle = () => {
    if (!disabled) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const inputContainerStyle = {
    ...styles.inputContainer,
    ...(disabled ? styles.inputContainerDisabled : {}),
    ...(error ? styles.inputContainerError : {}),
  };

  const helperTextStyle = {
    ...styles.helperText,
    ...(error ? styles.helperTextError : {}),
  };

  return (
    <div style={styles.inputWrapper}>
        <style>
      {`
        input::placeholder {
          color: #1E1E1E;
        }
      `}
    </style>
      {topLabel && <label style={styles.topLabel}>{topLabel}</label>}

      <div style={inputContainerStyle}>
        <div style={styles.countryCodeSection} onClick={handleDropdownToggle}>
          <span style={styles.countryCode}>{selectedCountryCode}</span>
        </div>

        <input
          type="tel"
          name={name}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          onBlur={onBlur}
          placeholder={placeholder || label}
          disabled={disabled}
          style={styles.input}
          autoComplete="tel"
        />

        <span style={styles.phoneIconEnd}>
          <PhoneIcon />
        </span>
      </div>

      {helperText && <div style={helperTextStyle}>{helperText}</div>}
    </div>
  );
};

const PhoneInputDemo = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const [error, setError] = useState("");

  const handlePhoneChange = (e) => {
    setPhoneValue(e.target.value);

    const phoneNumberOnly = e.target.value.replace(/^\+\d+/, "").trim();
    if (phoneNumberOnly.length > 0 && phoneNumberOnly.length < 7) {
      setError("Phone number is too short");
    } else {
      setError("");
    }
  };

  return (
    <CustomPhoneInput
      name="phone"
      value={phoneValue}
      onChange={handlePhoneChange}
      topLabel="Telefon / Celular"
      placeholder="Enter your phone number"
      error={!!error}
      helperText={error}
      defaultCountryCode="+355"
    />
  );
};

export default PhoneInputDemo;
