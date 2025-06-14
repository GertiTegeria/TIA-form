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
    height: "52px",
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
}) => {
  
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
        <div style={styles.countryCodeSection}>
          <span style={styles.countryCode}>+355</span>
        </div>

        <input
          type="tel"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder || label}
          disabled={disabled}
          style={styles.input}
          autoComplete="tel"
          inputMode="numeric"
          pattern="[0-10]*"
          maxLength={10}
        />

        <span style={styles.phoneIconEnd}>
          <PhoneIcon />
        </span>
      </div>

      {helperText && <div style={helperTextStyle}>{helperText}</div>}
    </div>
  );
};

export default CustomPhoneInput;
