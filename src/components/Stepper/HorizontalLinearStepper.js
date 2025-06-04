import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";


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

const StepWrapper = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 1,
  minWidth: 0, 
  "&:not(:last-child)::after": {
    content: '""',
    position: "absolute",
    top: "18.5px", 
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
        marginTop: "74px",
        px: 0,
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