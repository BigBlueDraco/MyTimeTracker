import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const treckersSlice = createSlice({
  name: 'treckers',
  initialState: {
    items: [],
  },
  reducers: {
    addTrecker: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ title, subTitle, saveTime }) {
        return {
          payload: {
            title,
            subTitle,
            id: nanoid(),
          },
        };
      },
    },
    updateTrecker: (state, action) => {
      const { id, time } = action.payload;
      const index = state.items.findIndex(elem => id === elem.id);
      state.items[index].time = time;
    },
    removeTrecker: (state, action) => {
      state.items = state.items.filter(({ id }) => id != action.payload);
    },
  },
});

export const { addTrecker, removeTrecker } = treckersSlice.actions;
export const treckersReducer = treckersSlice.reducer;
