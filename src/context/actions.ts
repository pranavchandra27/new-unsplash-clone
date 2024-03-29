import React from "react";
import {
  SET_PHOTOS,
  SET_HEADER_PHOTO,
  SET_PAGE,
  SET_LOADING,
  SET_COLLECTIONS,
  SET_COLLECTION_PAGE,
  SET_SEARCH_QUERY,
  SET_SEARCH_PHOTOS,
  SET_SEARCH_COLLECTIONS
} from "./actionTypes";
import { Action } from "./reducer";

export const setPhotosData =
  (data: object) =>
    (dispatch: React.Dispatch<Action>) => {
      dispatch({
        type: SET_PHOTOS,
        payload: data,
      });
    };

export const changePage =
  (page: number) =>
    (dispatch: React.Dispatch<Action>) => {
      dispatch({
        type: SET_PAGE,
        payload: page,
      });
    };

export const changeCollectionPage =
  (page: number) =>
    (dispatch: React.Dispatch<Action>) => {
      dispatch({
        type: SET_COLLECTION_PAGE,
        payload: page,
      });
    };

export const setHeaderPhoto =
  (data: object) =>
    (dispatch: React.Dispatch<Action>) => {
      dispatch({
        type: SET_HEADER_PHOTO,
        payload: data,
      });
    };

export const setLoadingPhotos =
  (data: boolean) =>
    (dispatch: React.Dispatch<Action>) => {
      dispatch({
        type: SET_LOADING,
        payload: data,
      });
    };

export const setCollections =
  (data: object) =>
    (dispatch: React.Dispatch<Action>) => {
      dispatch({
        type: SET_COLLECTIONS,
        payload: data,
      });
    };

export const setSearchQuery =
  (query: string) =>
    (dispatch: React.Dispatch<Action>) => {
      dispatch({
        type: SET_SEARCH_QUERY,
        payload: query,
      });
    };

export const setSearchPhotos =
  (results: object) =>
    (dispatch: React.Dispatch<Action>) => {
      dispatch({
        type: SET_SEARCH_PHOTOS,
        payload: results,
      });
    };
export const setSearchCollections =
  (results: object) =>
    (dispatch: React.Dispatch<Action>) => {
      dispatch({
        type: SET_SEARCH_COLLECTIONS,
        payload: results,
      });
    };
