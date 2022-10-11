import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  redirection: 'jeudi',
};
const stockGest = createSlice({
  name: 'stockGest',
  initialState,
  reducers: {
    handleRedirection(state, action) {
      state.redirection = action.payload;
    },
  },
});

export default stockGest.reducer;
export const {handleRedirection} = stockGest.actions;
