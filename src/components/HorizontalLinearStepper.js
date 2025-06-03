import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const RedConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: "18.5px",
      left: "calc(-50% - 59px)", 
      right: "calc(50% + 59px)",
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#DB0035",
        borderTopWidth: "3px",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#DB0035",
        borderTopWidth: "3px",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#EDEAEA",
      borderTopWidth: "3px",
    },
  }));

const CustomStepIcon = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    ownerState.completed || ownerState.active ? "#DB0035" : "#EDEAEA",
  zIndex: 1,
  color: ownerState.completed || ownerState.active ? "#FFFFFF" : "#000000",
  width: 37,
  height: 37,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "16px",
  fontWeight: "700",
  lineHeight: "16px",
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
    width: "62px",
  },
  "& .MuiStepLabel-label": {
    fontSize: "12px",
    fontWeight: "700",
    marginTop: "22px",
    textAlign: "center",
    lineHeight: "20px",
    color: "#000000",
    "&.Mui-active": {
      fontSize: "12px",
      fontWeight: "700",
      marginTop: "22px",
      textAlign: "center",
      lineHeight: "20px",
      color: "#DB0035",
    },
    "&.Mui-completed": {
      fontSize: "12px",
      fontWeight: "700",
      marginTop: "22px",
      textAlign: "center",
      lineHeight: "20px",
      color: "#000000",
    },
  },
}));

export default function HorizontalLinearStepper({ 
  activeStep, 
  steps, 
}) {
  return (
    <Box sx={{ width: "100%", mt: "74px", px: 0 }}>
     <Stepper
      activeStep={activeStep}
      connector={<RedConnector />}
      alternativeLabel
      sx={{
        "& .MuiStep-root": {
          padding: "0",
          margin: "0",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        },
        "& .MuiStepLabel-root": {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        },  
        "& .MuiStepLabel-iconContainer": {
          alignSelf: "flex-start",
        },
      }}
    >
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <CustomStepLabel
                {...labelProps}
                StepIconComponent={CustomStepIconComponent}
              >
                {label}
              </CustomStepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}