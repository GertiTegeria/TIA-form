import React, { useState, useRef, useEffect } from "react";
import classes from "./CustomSelecter.module.css";
import arrowIcon from "../../../assets/arrowDown.png";

const CustomSelecter = ({
  value,
  onChange,
  options,
  multiple = false,
  label,
  name,
  width,
  disabled,
  topLabel,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const normalizedOptions = options.map((option) =>
    typeof option === "string" ? { label: option, value: option } : option
  );

  const handleSelect = (optionValue) => {
    if (disabled) return;

    if (multiple) {
      const newValues = value.includes(optionValue)
        ? value.filter((val) => val !== optionValue)
        : [...value, optionValue];
      onChange(newValues);
    } else {
      onChange(optionValue);
      setOpen(false);
    }
  };

  const getSelectedLabel = () => {
    if (multiple) {
      return normalizedOptions
        .filter((opt) => value.includes(opt.value))
        .map((opt) => opt.label)
        .join(", ");
    } else {
      const selected = normalizedOptions.find((opt) => opt.value === value);
      return selected ? selected.label : "";
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={classes.selectWrapper}
      style={{ width: width || "100%" }}
      ref={ref}
    >
      {topLabel && <label className={classes.topLabel}>{topLabel}</label>}

      <div
        className={`${classes.selectBox} ${disabled ? classes.disabled : ""}`}
        onClick={() => !disabled && setOpen(!open)}
      >
        <span className={classes.label}>{getSelectedLabel() || label}</span>
        <span className={`${classes.arrow} ${open ? classes.rotate : ""}`}>
          <img src={arrowIcon} alt="dropdown arrow" />
        </span>
      </div>

      {open && (
        <ul className={classes.optionsList}>
          {normalizedOptions.map((opt) => (
            <li
              key={opt.value}
              className={`${classes.option} ${
                (multiple && value.includes(opt.value)) || value === opt.value
                  ? classes.selected
                  : ""
              }`}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelecter;
