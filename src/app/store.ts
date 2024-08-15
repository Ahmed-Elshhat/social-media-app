import { configureStore } from "@reduxjs/toolkit";
import windowReducer from "../feature/window/windowSlice";
import createPostWindowReducer from "../feature/createPostWindow/createPostWindowSlice";
import userReducer from "../feature/user/userSlice";


const store = configureStore({
  reducer: {
    window: windowReducer,
    createPostWindow: createPostWindowReducer,
    user: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
