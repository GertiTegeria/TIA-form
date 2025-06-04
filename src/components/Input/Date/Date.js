import React, { useRef } from "react";
import calendarIcon from "../../../assets/calendar.png"; 


const classes = {
  inputWrapper: {
    width: '100%',
  },

  topLabel: {
    display: 'block',
    marginBottom: '6px',
    fontSize: '14px',
    color: '#1E1E1E',
  },

  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #B5B5B5',
    padding: '0 18px',
    fontSize: '14px',
    height: '52px',
    position: 'relative',
  },

  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '12px',
    height: '100%',
    fontFamily: 'inherit',
    color: '#1E1E1E',
    paddingRight: '32px',
    backgroundColor: 'transparent',
  },

  icon: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    zIndex: 2,
  },

  helperText: {
    color: 'red',
    fontSize: '12px',
    marginTop: '4px',
  },

  error: {
    borderColor: 'red',
  },

  disabled: {
    backgroundColor: '#f5f5f5',
    pointerEvents: 'none',
    opacity: 0.6,
  },
};

const GlobalStyle = () => (
  <style>
    {`
    input[type="date"]::-webkit-inner-spin-button,
    input[type="date"]::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }
    `}
  </style>
);

const CalendarIcon = () => (
  <img src={calendarIcon} alt="calendar icon"/>
);

const CustomDateInput = ({
  name,
  value,
  onChange,
  onBlur,
  topLabel,
  placeholder,
  error,
  helperText,
  disabled,
}) => {
  const inputRef = useRef(null);

  const handleIconClick = () => {
    if (inputRef.current) {
      if (typeof inputRef.current.showPicker === 'function') {
        inputRef.current.showPicker();
      } else {
        inputRef.current.click();
      }
    }
  };

  const getInputContainerStyle = () => {
    let style = { ...classes.inputContainer };
    if (error) style = { ...style, ...classes.error };
    if (disabled) style = { ...style, ...classes.disabled };
    return style;
  };

  return (
    <div style={classes.inputWrapper}>
      <GlobalStyle /> 

      {topLabel && <label style={classes.topLabel}>{topLabel}</label>}

      <div style={getInputContainerStyle()}>
        <input
          ref={inputRef}
          type="date"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          style={classes.input}
          autoComplete="off"
        />
        <span style={classes.icon} onClick={handleIconClick}>
          <CalendarIcon />
        </span>
      </div>

      {helperText && <div style={classes.helperText}>{helperText}</div>}
    </div>
  );
};

const DateInputDemo = () => {
  const [dateValue, setDateValue] = React.useState('');
  const [errorState, setErrorState] = React.useState(false);

  const handleDateChange = (e) => {
    const val = e.target.value;
    setDateValue(val);
    if (val) {
      const selectedDate = new Date(val);
      const today = new Date();
      setErrorState(selectedDate > today);
    } else {
      setErrorState(false);
    }
  };

  return (
    <CustomDateInput
      name="birthDate"
      topLabel="Datëlindja"
      value={dateValue}
      onChange={handleDateChange}
      placeholder="dd/mm/yyyy"
      error={errorState}
      helperText={errorState ? "Data nuk mund të jetë në të ardhmen." : ""}
    />
  );
};

export default DateInputDemo;
