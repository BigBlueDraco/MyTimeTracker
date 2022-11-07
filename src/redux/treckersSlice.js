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
      prepare({ title, subTitle, color }) {
        return {
          payload: {
            title,
            subTitle,
            color,
            time: 0,
            id: nanoid(),
            isActive: false,
          },
        };
      },
    },
    updateTrecker: (state, action) => {
      const { id, time } = action.payload;
      state.items.map(element => {
        if (element.id === id) {
          return (element.time = time);
        }
        return element;
      });
    },
    removeTrecker: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addTrecker, removeTrecker, updateTrecker } =
  treckersSlice.actions;
export const treckersReducer = treckersSlice.reducer;
