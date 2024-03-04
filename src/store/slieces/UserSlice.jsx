import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
     name: 'user',
     initialState: [],
     reducers: {
          addUser(state, action) {},
          removeusUser(state, action){},
          deleteUsers(state, action){},
     },
})

export { userSlice };