import {createAction } from "@reduxjs/toolkit";

export const apiCallBegan:any  = createAction("api/apiCallBegan");
export const apiCallSuccess:any = createAction("api/callSuccess");
export const apiCallFailed:any= createAction("api/callFailed");
