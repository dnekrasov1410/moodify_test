import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockPlaylists } from "../../mockData";
import { TMood } from "../../models/mood";
import { IPlaylistSlice } from "../../models/playlist";
import { ISong } from "../../models/song";

const initialState: IPlaylistSlice = { ...mockPlaylists };

export const PlaylistSlice = createSlice({
  name: "playList",
  initialState,
  reducers: {
    // create empty playlist with selected mood id
    createPlaylist: (state, action: PayloadAction<{ moodId: TMood["id"] }>) => {
      const { moodId } = action.payload;
      state[moodId] = [];
    },
    // add song to selected playlist
    addToPlaylist: (
      state,
      action: PayloadAction<{ moodId: TMood["id"]; song: ISong }>,
    ) => {
      const { moodId, song } = action.payload;
      state[moodId] = [...state[moodId], song];
    },
    // remove selected song from selected playlist
    removeFromPlaylist: (
      state,
      action: PayloadAction<{ moodId: TMood["id"]; id: ISong["id"] }>,
    ) => {
      const { moodId, id } = action.payload;
      state[moodId] = state[moodId].filter(
        (playlistItem) => id !== playlistItem.id,
      );
    },
  },
});

export const { createPlaylist, addToPlaylist, removeFromPlaylist } =
  PlaylistSlice.actions;

export default PlaylistSlice.reducer;
