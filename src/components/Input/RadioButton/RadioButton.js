import React, { useState } from "react";

const styles = {
  radioWrapper: {
    width: "100%",
    marginBottom: "20px",
  },

  topLabel: {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    color: "#1E1E1E",
  },

  radioContainer: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
    width: "80%",
  },

  radioOption: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    border: '1px solid #B5B5B5',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    backgroundColor: 'white',
    minWidth: '120px',
    flex: '1',
    height: '52px',
    gap: '8px',
  },

  radioInput: {
    appearance: 'none',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    position: 'relative',
    backgroundColor: 'white',
    display: 'inline-block',
    border: '1px solid #B5B5B5',
    transition: 'all 0.2s ease',
  },
  
  radioInputSelected: {
    backgroundColor: '#DB0035', 
    boxShadow: '0 0 0 2px white, 0 0 0 3px #DB0035',
    border: 'none',
  },
  

  radioLabel: {
    fontSize: "12px",
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

const CustomRadioButton = ({
  name,
  options = [],
  value,
  onChange,
  topLabel,
  error,
  helperText,
  disabled = false,
}) => {
  const [hoveredOption, setHoveredOption] = useState(null);

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
    const isHovered = hoveredOption === optionValue;

    return {
      ...styles.radioOption,
      ...(isSelected ? styles.radioOptionSelected : {}),
      ...(isHovered && !isSelected ? styles.radioOptionHover : {}),
      ...(disabled ? { opacity: 0.6, cursor: "not-allowed" } : {}),
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

//   const RadioDot = ({ isSelected }) => (
//     <div
//       style={{
//         position: 'absolute',
//         width: '8px',
//         height: '8px',
//         borderRadius: '50%',
//         backgroundColor: '#DB0035',
//         opacity: isSelected ? 1 : 0,
//         transition: 'opacity 0.2s ease',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//       }}
//     />
//   );

  const helperTextStyle = {
    ...styles.helperText,
    ...(error ? styles.helperTextError : {}),
  };

  return (
    <div style={styles.radioWrapper}>
      {topLabel && <label style={styles.topLabel}>{topLabel}</label>}

      <div style={styles.radioContainer}>
        {options.map((option) => (
          <div
            key={option.value}
            style={getRadioOptionStyle(option.value)}
            onClick={() => handleOptionClick(option.value)}
            onMouseEnter={() => setHoveredOption(option.value)}
            onMouseLeave={() => setHoveredOption(null)}
          >
            <div
              style={{
                position: "relative",
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
                onChange={() => {}}
                style={getRadioInputStyle(option.value)}
                disabled={disabled}
              />
              {/* <RadioDot isSelected={value === option.value} /> */}
            </div>

            <label style={styles.radioLabel}>{option.label}</label>
          </div>
        ))}
      </div>

      {helperText && <div style={helperTextStyle}>{helperText}</div>}
    </div>
  );
};

const RadioButtonDemo = () => {
  const [selectedOption, setSelectedOption] = useState("kohe_plote");
  const [error, setError] = useState("");

  const workTimeOptions = [
    { value: "kohe_plote", label: "Kohë e plotë" },
    { value: "kohe_pjesshme", label: "Kohë e pjesshme" },
    { value: "turne", label: "Turne" },
  ];

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
    setError("");
  };

  return (
    <CustomRadioButton
      name="workTime"
      options={workTimeOptions}
      value={selectedOption}
      onChange={handleRadioChange}
      topLabel="Mundësia për të punuar:"
      error={!!error}
      helperText={error}
    />
  );
};

export default RadioButtonDemo;
