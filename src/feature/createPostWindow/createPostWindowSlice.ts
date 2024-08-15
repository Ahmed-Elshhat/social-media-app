import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateCreatePostWindow } from "../../Types/app"

const initialState: initialStateCreatePostWindow = {
  createPostIsOpen: false,
};

const createPostWindowSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    setCreatePostWindow: (state, action:PayloadAction<boolean>) => {
      state.createPostIsOpen = action.payload;
    },
  },
});

export default createPostWindowSlice.reducer;
export const { setCreatePostWindow } = createPostWindowSlice.actions;
