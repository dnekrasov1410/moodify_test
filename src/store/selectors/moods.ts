import { RootState } from "../config";

export const getMoodList = (state: RootState) => state.moods.list;
export const getSelectedMood = (state: RootState) => state.moods.selectedMood;
export const getSelectedMoodId = (state: RootState) =>
  state.moods.selectedMood?.id;
