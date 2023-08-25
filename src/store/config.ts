import { configureStore } from "@reduxjs/toolkit";
import moodsReducer from "./reducers/moods";
import playlistsReducer from "./reducers/playlists";
import songsReducer from "./reducers/songs";
// create and configure store
export const store = configureStore({
  reducer: {
    moods: moodsReducer,
    playlists: playlistsReducer,
    songs: songsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
