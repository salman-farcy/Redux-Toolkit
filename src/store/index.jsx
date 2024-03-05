
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slieces/UserSlice";


const store = configureStore({
     reducer: {
          users: userSlice,
     },
});

export default store;