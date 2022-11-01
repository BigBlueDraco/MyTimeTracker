const { configureStore } = require('@reduxjs/toolkit');
const { treckersReducer } = require('./treckersSlice');

const store = configureStore({
  reducer: {
    treckers: treckersReducer,
  },
});
