import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
     name: 'user',
     initialState: [],
     reducers: {
          addUser(state, action) {},
          removeusUser(state, action){},
          deleteUsers(state, action){},
     },
})

export { users };