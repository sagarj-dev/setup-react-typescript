import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuth } from "../../../types/types";
const initialState: IAuth = {
  email: "",
  name: "",
  token: "",
};
const authSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IAuth>) => ({ ...action.payload }),
  },
});

export default authSlice;
