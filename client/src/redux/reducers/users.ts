import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/api";

const slice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    usersRequested: (users, action) => {
      users.loading = true;
    },
    usersReceived: (users, action) => {
      users.list = action.payload;
      users.loading = false;
    },
  },
});

export const { usersReceived, usersRequested } = slice.actions;
export default slice.reducer;


const url = "/users";

export const loadUsers = () =>
  apiCallBegan({
    url,
    onStart: usersRequested.type,
    onSuccess: usersReceived.type,
  });
