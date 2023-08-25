import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockInitialMoodList } from "../../mockData";
import { MoodsState, TMood } from "../../models/mood";

const initialState: MoodsState = {
  list: mockInitialMoodList,
  selectedMood: null,
};

export const MoodsSlice = createSlice({
  name: "moods",
  initialState,
  reducers: {
    // create new mood
    addMood: (state, action: PayloadAction<TMood>) => {
      state.list = [...state.list, action.payload];
    },
    // update existing mood
    updateMood: (state, action: PayloadAction<TMood>) => {
      const { id } = action.payload;
      state.list = state.list.map((mood) =>
        mood.id === id ? { ...action.payload } : mood,
      );
    },
    // remove mood TBD
    removeMood: (state) => {
      state.list = [];
    },
    // select mood
    selectMood: (state, action: PayloadAction<TMood>) => {
      state.selectedMood = action.payload;
    },
  },
});

export const { addMood, updateMood, removeMood, selectMood } =
  MoodsSlice.actions;

export default MoodsSlice.reducer;
