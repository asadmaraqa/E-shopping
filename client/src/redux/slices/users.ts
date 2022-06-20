import { createSlice } from "@reduxjs/toolkit";
import { initStateUsers, userTypes } from "../../globalTypes";
import { apiCallBegan } from "../actions/api";

const slice = createSlice({
  name: "users",
  initialState: {
    list: [],
    listOne:[],
    currentUser:[],
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
    usersBanned: (users:initStateUsers, action) => {
      const index = users.list.findIndex((user:any) => user._id === action.payload._id);
      users.list[index].isBanned = action.payload.isBanned;

    },
    userDeleted: (users, action) => {
      users.list = users.list.filter(
        (user: userTypes) => user._id !== action.payload
      );
    },
    userAdded: (users: initStateUsers, action) => {
      users.currentUser= users.list.filter((user:userTypes) => user.email===action.payload.email)
    },
    userModified: (users: initStateUsers, action) => {
      const index = users.list.findIndex((user:userTypes) => user._id === action.payload._id);
      users.list[index]=action.payload
      users.currentUser[0] =action.payload
    },
    getById: (user, action) => {
      user.listOne = action.payload;
      user.loading = false;
    },
  },
});

export const { usersReceived, usersRequested,usersBanned,userDeleted,userAdded,userModified,getById } = slice.actions;
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
  export const modifyUser = (userId?: string,userInfo?:any) =>
  apiCallBegan({
    url: url + "/" + userId,
    method: "patch",
    data:userInfo,
    onSuccess:userModified.type
    
  });
  export const getByIda = (userId?: string) =>
  apiCallBegan({
    url: url + "/" + userId,
    onSuccess: getById.type,
  });
