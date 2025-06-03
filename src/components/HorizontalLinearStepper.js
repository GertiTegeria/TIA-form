import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

// Fully responsive RedConnector without calc()
const RedConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: "50%",
    transform: "translateY(-50%)",
    left: 0,
    right: 0,
    position: "absolute",
    width: "100%",
    zIndex: 0,
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#EDEAEA",
    borderTopWidth: 3,
    borderRadius: 1,
    height: 0,
    width: "100%",
    margin: 0,
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    borderColor: "#DB0035",
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    borderColor: "#DB0035",
  },
}));

const CustomStepIcon = styled("div")(({ ownerState, theme }) => ({
  backgroundColor:
    ownerState.completed || ownerState.active ? "#DB0035" : "#EDEAEA",
  zIndex: 2,
  color: ownerState.completed || ownerState.active ? "#FFFFFF" : "#000000",
  width: 37,
  height: 37,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 16,
  fontWeight: 700,
  position: "relative",
  flexShrink: 0,
  [theme.breakpoints.down("sm")]: {
    width: 32,
    height: 32,
    fontSize: 14,
  },
}));

function CustomStepIconComponent(props) {
  const { active, completed, className } = props;
  return (
    <CustomStepIcon ownerState={{ completed, active }} className={className}>
      {props.icon}
    </CustomStepIcon>
  );
}

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-labelContainer": {
    textAlign: "center",
    width: "100%",
    minWidth: 0, // Allow shrinking
  },
  "& .MuiStepLabel-label": {
    fontSize: 10,
    fontWeight: 700,
    marginTop: 12,
    textAlign: "center",
    lineHeight: "14px",
    color: "#000000",
    wordBreak: "break-word",
    hyphens: "auto",
    [theme.breakpoints.up("sm")]: {
      fontSize: 12,
      marginTop: 16,
      lineHeight: "16px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 20,
      lineHeight: "18px",
    },
    "&.Mui-active": {
      color: "#DB0035",
    },
    "&.Mui-completed": {
      color: "#000000",
    },
  },
}));

// Custom Step wrapper to handle connector positioning
const StepWrapper = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 1,
  minWidth: 0, // Allow shrinking
  "&:not(:last-child)::after": {
    content: '""',
    position: "absolute",
    top: "18.5px", // Half of icon height
    left: "50%",
    right: "-50%",
    height: 3,
    backgroundColor: "#EDEAEA",
    zIndex: 1,
  },
  "&.completed:not(:last-child)::after": {
    backgroundColor: "#DB0035",
  },
});

export default function HorizontalLinearStepper({ activeStep, steps }) {
  return (
    <Box
      sx={{
        width: "100%",
        mt: { xs: 3, sm: 6, md: 8 },
        px: { xs: 1, sm: 2, md: 4 },
        overflowX: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: { xs: 0.5, sm: 1, md: 2 },
          minWidth: "min-content",
          position: "relative",
        }}
      >
        {steps.map((label, index) => {
          const isActive = index === activeStep;
          const isCompleted = index < activeStep;
          
          return (
            <StepWrapper
              key={label}
              className={`${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
            >
              <CustomStepIcon ownerState={{ completed: isCompleted, active: isActive }}>
                {index + 1}
              </CustomStepIcon>
              <Box
                sx={{
                  mt: { xs: 1, sm: 1.5, md: 2 },
                  textAlign: "center",
                  minWidth: 0,
                  maxWidth: { xs: "60px", sm: "80px", md: "100px" },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontSize: { xs: 10, sm: 11, md: 12 },
                    fontWeight: 700,
                    lineHeight: { xs: "12px", sm: "14px", md: "16px" },
                    color: isActive ? "#DB0035" : "#000000",
                    wordBreak: "break-word",
                    hyphens: "auto",
                    display: "block",
                  }}
                >
                  {label}
                </Box>
              </Box>
            </StepWrapper>
          );
        })}
      </Box>
    </Box>
  );
}