import { ISong } from "./models/song";

export const getParsedTime = (seconds?: number) => {
  if (seconds) {
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.round(seconds % 60);
    return m.toString().padStart(2, "0") + ":" + s.toString().padStart(2, "0");
  }
  return "";
};

export const getSongsTotal = (songList: ISong[]) => ({
  items: songList.length,
  duration: songList.reduce((acc, song) => acc + song.duration, 0),
});
