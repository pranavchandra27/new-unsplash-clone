import { Reducer } from "react";
import { FETCH_PHOTOS, SET_HEADER_PHOTO } from "./actionTypes";

export type State = {
  photosData: {
    results: [], total: number
  };
  page: number;
  headerPhoto: string
};

export type Action = {
  type: string;
  payload: any;
};

export const initialState: State = {
  photosData: {
    results: [], total: 0
  },
  page: 1,
  headerPhoto: null
};

const reducer: Reducer<State, Action> = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_PHOTOS:
      return { ...state, photosData: payload };
    case SET_HEADER_PHOTO:
      return { ...state, headerPhoto: payload }
    default:
      return state;
  }
};

export default reducer;
