import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateType } from "../../Types/app"

const initialState: initialStateType = {
  windowSize: window.innerWidth,
};

const windowSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    setWindowSize: (state, action:PayloadAction<number>) => {
      state.windowSize = action.payload;
    },
  },
});

export default windowSlice.reducer;
export const { setWindowSize } = windowSlice.actions;
