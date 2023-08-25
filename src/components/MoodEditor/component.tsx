import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button, TextField } from "@mui/material";
import { HexColorPicker } from "react-colorful";
import { IMoodEditorComponentView } from "../../models/mood";
import {
  StyledButtonsContainer,
  StyledColorPickerContainer,
  StyledMoodEditorContainer,
} from "./styles";

const MoodEditorComponent = ({
  onChange,
  onCancel,
  onConfirm,
  currentMood,
  onRemove,
}: IMoodEditorComponentView) => (
  <StyledMoodEditorContainer>
    <TextField
      label="title"
      variant="outlined"
      value={currentMood.title}
      onChange={(e) => onChange({ field: "title", val: e.target.value })}
    />

    <StyledColorPickerContainer>
      <HexColorPicker
        color={currentMood.color}
        onChange={(val) => {
          onChange({ field: "color", val });
        }}
      />
    </StyledColorPickerContainer>
    <StyledButtonsContainer>
      <Button variant={"outlined"} color={"success"} onClick={onConfirm}>
        <CheckIcon />
      </Button>
      <Button variant={"outlined"} color={"error"} onClick={onCancel}>
        <CloseIcon />
      </Button>
    </StyledButtonsContainer>
    {currentMood.id ? (
      <StyledButtonsContainer>
        <Button variant={"outlined"} color={"error"} onClick={onRemove}>
          <DeleteForeverIcon />
        </Button>
      </StyledButtonsContainer>
    ) : null}
  </StyledMoodEditorContainer>
);

export default MoodEditorComponent;
