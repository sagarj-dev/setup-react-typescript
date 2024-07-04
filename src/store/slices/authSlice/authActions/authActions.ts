import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import authSlice from '../authSlice';

export const todoActions = authSlice.actions;

export const login = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  // eslint-disable-next-line
  return async (dispatch, getState) => {
    //API CALL
    // dispatch action
  };
};
