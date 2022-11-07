import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { element } from 'prop-types';

export const treckersSlice = createSlice({
  name: 'treckers',
  initialState: {
    items: [],
  },
  reducers: {
    addTrecker: {
      reducer(state, action) {
        console.log(state.items);
        console.log(action.payload);
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
          },
        };
      },
    },
    updateTrecker: (state, action) => {
      const { id, time } = action.payload;
      state.items.map(element => {
        if (element.id === id) {
          console.log(time);
          return (element.time = time);
        }
      });
    },
    removeTrecker: (state, action) => {
      console.log(action.payload);
      state.items = state.items.filter(({ id }) => id != action.payload);
    },
  },
});

export const { addTrecker, removeTrecker, updateTrecker } =
  treckersSlice.actions;
export const treckersReducer = treckersSlice.reducer;
