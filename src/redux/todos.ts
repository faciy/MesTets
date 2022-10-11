import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  texte: 'mardi',
};
const todo = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    testShow(state, action) {
      state.texte = action.payload;
    },
  },
});

export default todo.reducer;
export const {testShow} = todo.actions;
