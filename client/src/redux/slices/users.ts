import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/api";

const slice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    usersRequested: (users, action) => {
      users.loading = true;
    },
    usersReceived: (users, action) => {
      users.list = action.payload;
      users.loading = false;
    },
    usersBanned: (users:any, action) => {
      console.log(action.payload)
      const index = users.list.findIndex((user:any) => user._id === action.payload._id);
      users.list[index].isBanned = action.payload.isBanned;
    },
    userDeleted: (users, action) => {
      console.log(action.payload)
      users.list = users.list.filter(
        (user: any) => user._id !== action.payload
      );
    },
  },
});

export const { usersReceived, usersRequested,usersBanned,userDeleted } = slice.actions;
export default slice.reducer;


const url = "/users";

export const loadUsers = () =>
  apiCallBegan({
    url,
    onStart: usersRequested.type,
    onSuccess: usersReceived.type,
  });
  export const banUser = (userId: string,banState:boolean) =>
  apiCallBegan({
    url: url + "/" + userId,
    method: "patch",
    data:{isBanned:banState},
    onSuccess: usersBanned.type,
  });
  export const deleteUser = (userId: string) =>
  apiCallBegan({
    url: url + "/" + userId,
    method: "delete",
    onSuccess:userDeleted.type
  });