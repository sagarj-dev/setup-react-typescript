import authSlice from "../authSlice";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
export const todoActions = authSlice.actions;

export const login = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    //API CALL
    // dispatch action
  };
};
