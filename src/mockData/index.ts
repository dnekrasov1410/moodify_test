import { faker } from "@faker-js/faker";
import { TMood } from "../models/mood";

import { ISong } from "../models/song";

// creating 50 random fake songs
export const mockSongList = faker.helpers.uniqueArray(
  (): ISong => ({
    id: faker.string.uuid(),
    artist: faker.person.lastName(),
    duration: faker.number.int({ min: 60, max: 360 }),
    name: faker.music.songName(),
  }),
  50,
);
// creating 10 random fake moods
export const mockInitialMoodList: TMood[] = faker.helpers.uniqueArray<TMood>(
  (): TMood => ({
    id: faker.string.uuid(),
    title: faker.internet.emoji() + " " + faker.music.genre(),
    color: faker.color.rgb(),
  }),
  10,
);
// creating 10 random playlists and linking playlists to moods
export const mockPlaylists = mockInitialMoodList.reduce(
  (acc, mood) => ({
    ...acc,
    [mood.id]: faker.helpers.uniqueArray(mockSongList, 10),
  }),
  {},
);
