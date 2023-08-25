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
  isMobileView,
  onRemove,
}: IMoodComponentView) => (
  <>
    <StyledMenuTitle isMobileView={isMobileView}>
      <h4>
        {selectedMood
          ? `Your mood is: ${selectedMood.title}`
          : "Choose your mood"}
      </h4>
    </StyledMenuTitle>
    <StyledMenuContent>
      {moodList.map((mood: TMood) => (
        <StyledMenuItem
          isMobileView={isMobileView}
          moodColor={mood.color}
          isActive={selectedMood?.id === mood.id}
          onClick={() => onSelectMood(mood)}
        >
          {currentEditableMoodId && currentEditableMoodId === mood.id ? (
            <MoodEditor
              mood={mood}
              onCancel={onCloseEditor}
              onConfirm={onConfirmEditor}
              onRemove={onRemove}
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
    <StyledMenuFooter isMobileView={isMobileView}>
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
  </>
);

export default SideBarComponent;
