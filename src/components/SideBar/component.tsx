import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Button, IconButton } from "@mui/material";
import { IMoodComponentView, TMood } from "../../models/mood";
import MoodEditor from "../MoodEditor";
import {
  StyledMenuContent,
  StyledMenuFooter,
  StyledMenuItem,
  StyledMenuItemContent,
  StyledMenuTitle,
  StyledSideMenuWrapper,
} from "./styles";

const SideBarComponent = ({
  moodList,
  selectedMood,
  onSelectMood,
  onCreateMood,
  isCreateMode,
  currentEditableMoodId,
  onCloseEditor,
  onConfirmEditor,
  onEditMood,
}: IMoodComponentView) => (
  <StyledSideMenuWrapper>
    <StyledMenuTitle>
      <h4>
        {selectedMood
          ? `Your mood is: ${selectedMood.title}`
          : "Choose your mood"}
      </h4>
    </StyledMenuTitle>
    <StyledMenuContent>
      {moodList.map((mood: TMood) => (
        <StyledMenuItem
          moodColor={mood.color}
          isActive={selectedMood?.id === mood.id}
          onClick={() => onSelectMood(mood)}
        >
          {currentEditableMoodId && currentEditableMoodId === mood.id ? (
            <MoodEditor
              mood={mood}
              onCancel={onCloseEditor}
              onConfirm={onConfirmEditor}
            />
          ) : (
            <StyledMenuItemContent>
              <h4>{mood.title}</h4>
              <IconButton
                className={"icon-btn"}
                onClick={() => onEditMood(mood.id)}
                aria-label="edit"
                size="small"
              >
                <EditIcon fontSize={"inherit"} />
              </IconButton>
            </StyledMenuItemContent>
          )}
        </StyledMenuItem>
      ))}
    </StyledMenuContent>
    <StyledMenuFooter>
      {isCreateMode ? (
        <MoodEditor onCancel={onCloseEditor} onConfirm={onConfirmEditor} />
      ) : (
        <Button
          onClick={onCreateMood}
          variant="outlined"
          startIcon={<AddIcon />}
        >
          Create mood
        </Button>
      )}
    </StyledMenuFooter>
  </StyledSideMenuWrapper>
);

export default SideBarComponent;
