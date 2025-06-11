// import React, { useState } from "react";


const CustomRadioButton = ({
  name,
  options = [],
  value,
  onChange,
  topLabel,
  // helperText,
  disabled = false,
  isInsideInput = false, 
  isFullWidth = false,
}) => {
  const styles = {
    radioWrapper: {
      width: "100%",
    },
  
    topLabel: {
      display: "block",
      marginBottom: "8px",
      fontSize: "14px",
      color: "#1E1E1E",
      fontWeight: "700",
    },
  
    radioContainer: {
      display: "flex",
      gap: "24px",
      flexWrap: "wrap",
      width: "100%",
    },
  
    radioOption: {
      display: "flex",
      alignItems: "center",
      padding: isInsideInput ? "0 16px" : "0px",
      border: "1px solid #B5B5B5",
      cursor: "pointer",
      transition: "all 0.2s ease",
      backgroundColor: "white",
      height: "52px",
      minWidth: isInsideInput ? "160px" : "",
      gap: "8px",
      maxWidth: "100%",
    },
  
    radioInput: {
      appearance: "none",
      width: "14px",
      height: "14px",
      borderRadius: "50%",
      position: "relative",
      backgroundColor: "white",
      display: "inline-block",
      border: "1px solid #B5B5B5",
      transition: "all 0.2s ease",
    },
  
    radioInputSelected: {
      backgroundColor: "#DB0035",
      boxShadow: "0 0 0 2px white, 0 0 0 3px #DB0035",
      border: "none",
    },
  
    radioLabel: {
      fontSize: "14px",
      color: "#1E1E1E",
      cursor: "pointer",
      userSelect: "none",
    },
  
    helperText: {
      fontSize: "12px",
      marginTop: "8px",
      color: "#666",
    },
  
    helperTextError: {
      color: "red",
    },
  };
  // const [hoveredOption, setHoveredOption] = useState(null);
  // const [selectedOption, setSelectedOption] = useState("kohe_plote");
  // const [error, setError] = useState("");

  // const handleRadioChange = (e) => {
  //   setSelectedOption(e.target.value);
  //   setError("");
  // };

  const handleOptionClick = (optionValue) => {
    if (disabled) return;

    if (onChange) {
      onChange({
        target: {
          name,
          value: optionValue,
        },
      });
    }
  };

  const getRadioOptionStyle = (optionValue) => {
    const isSelected = value === optionValue;
    // const isHovered = hoveredOption === optionValue;

    return {
      ...styles.radioOption,
      ...(isSelected ? styles.radioOptionSelected : {}),
      // ...(isHovered && !isSelected ? styles.radioOptionHover : {}),
      ...(disabled ? { opacity: 0.6, cursor: "not-allowed" } : {}),
      ...(isInsideInput ? {} : { border: "none", cursor:'pointer' }),
    };
  };

  const getRadioInputStyle = (optionValue) => {
    const isSelected = value === optionValue;

    return {
      ...styles.radioInput,
      ...(isSelected ? styles.radioInputSelected : {}),
      ...(disabled ? { cursor: "not-allowed" } : {}),
    };
  };

  // const helperTextStyle = {
  //   ...styles.helperText,
  //   ...(error ? styles.helperTextError : {}),
  // };

  


  return (
    <div style={styles.radioWrapper}>
      {topLabel && <label style={styles.topLabel}>{topLabel}</label>}

      <div style={styles.radioContainer}>
        {options.map((option) => (
          <div
            key={option.value}
            style={getRadioOptionStyle(option.value)}
            onClick={() => handleOptionClick(option.value)}
          >
            <div
              style={{
                width: 24,
                height: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={() => handleOptionClick(option.value)}
                style={getRadioInputStyle(option.value)}
                disabled={disabled}
              />

              {/* <RadioDot isSelected={value === option.value} /> */}
            </div>

            <label style={styles.radioLabel}>{option.label}</label>
          </div>
        ))}
      </div>

      {/* {helperText && <div style={helperTextStyle}>{helperText}</div>} */}
    </div>
  );
};

export default CustomRadioButton;
