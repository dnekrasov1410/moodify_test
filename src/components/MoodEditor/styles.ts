import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { appStyles } from "../../styles";
const { _borders, _gaps, _bgColors } = appStyles;

export const StyledMoodEditorContainer = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: _gaps.sm.vertical,
  div: {
    zIndex: 10,
  },
  ".MuiFormControl-root": {
    width: "100%",
    background: _bgColors.main,
    borderRadius: _borders.mainRadius,
    label: { color: "white" },
  },
  fieldset: { borderRadius: _borders.mainRadius },
  input: { color: "white", borderRadius: _borders.mainRadius },
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
  gap: _gaps.main.horizontal,
  button: {
    width: "100%",
    background: _bgColors.main,
    "&:hover": { background: _bgColors.secondary },
  },
});
