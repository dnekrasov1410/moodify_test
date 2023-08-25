import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledMoodEditorContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "1vh",
  div: {
    zIndex: 10,
  },
  ".MuiFormControl-root": {
    width: "100%",
    background: "rgb(20, 26, 31)",
    borderRadius: 16,
    label: { color: "white" },
  },
  fieldset: { borderRadius: 16 },
  input: { color: "white", borderRadius: 16 },
});

export const StyledColorPickerContainer = styled(Box)({
  height: 150,
  ".react-colorful": {
    height: 150,
    width: "100%",
  },
});

export const StyledButtonsContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "1vw",
  button: { width: "100%", background: "rgb(20, 26, 31)" },
});
