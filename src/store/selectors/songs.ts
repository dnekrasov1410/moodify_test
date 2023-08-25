import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../config";
import { getCurrentPlaylist } from "./playlists";

export const getSongList = (state: RootState) => state.songs.list;

export const getSelectedSongId = (state: RootState) =>
  state.songs.selectedSongId;

export const getSelectedSong = createSelector(
  [getSongList, getSelectedSongId],
  (songList, selectedSongId) =>
    songList.find((song) => song.id === selectedSongId),
);
// get list of all songs without songs in selected playlist
export const getFilteredSongList = createSelector(
  [getSongList, getCurrentPlaylist],
  (songList, currentPlaylist) =>
    currentPlaylist
      ? songList.filter(
          (song) =>
            currentPlaylist.findIndex(
              (playlistItem) => playlistItem.id === song.id,
            ) <= -1,
        )
      : songList,
);
