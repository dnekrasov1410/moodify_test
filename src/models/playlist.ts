import { ISong } from "./song";

export interface IPlaylistSlice {
  [moodId: string]: ISong[];
}
