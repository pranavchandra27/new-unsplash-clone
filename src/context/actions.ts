import { FETCH_PHOTOS, SET_HEADER_PHOTO } from "./actionTypes";

export const setPhotosData = (data) => (dispatch) => {
  dispatch({
    type: FETCH_PHOTOS,
    payload: data,
  });
};

export const setHeaderPhoto = (data) => (dispatch) => {
  dispatch({
    type: SET_HEADER_PHOTO,
    payload: data,
  });
};
