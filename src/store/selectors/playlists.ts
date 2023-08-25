import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../config";
import { getSelectedMood } from "./moods";

export const getPlaylists = (state: RootState) => state.playlists;
// get playlist according to selected mood
export const getCurrentPlaylist = createSelector(
  [getSelectedMood, getPlaylists],
  (currentMood, playlists) => (currentMood ? playlists[currentMood.id] : []),
);
