import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockSongList } from "../../mockData";
import { ISong } from "../../models/song";

interface songListState {
  list: ISong[];
  selectedSongId: ISong["id"] | null;
}

const initialState: songListState = {
  list: mockSongList,
  selectedSongId: null,
};

export const SongsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    // select song
    selectSong: (state, action: PayloadAction<ISong["id"]>) => {
      state.selectedSongId = action.payload;
    },
    // get song list
    getSongList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { selectSong } = SongsSlice.actions;

export default SongsSlice.reducer;
