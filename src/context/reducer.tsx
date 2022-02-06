import { Reducer } from "react";
import {
  SET_PHOTOS,
  SET_HEADER_PHOTO,
  SET_PAGE,
  SET_LOADING,
  SET_COLLECTIONS,
  SET_COLLECTION_PAGE,
} from "./actionTypes";
import * as PhotoApi from "unsplash-js/dist/methods/photos/types";
import { ICollectionProps } from "typings";
import { uniqArray } from "@utils/helpers";

export type State = {
  photosData: {
    results: [PhotoApi.Full] | any[];
    total: number;
  };
  page: number;
  headerPhoto: string;
  loading: boolean;
  collections: { results: [ICollectionProps] | any[]; total: number };
  collectionPage: number;
};

export type Action = {
  type: string;
  payload: any;
};

export const initialState: State = {
  photosData: {
    results: [],
    total: 0,
  },
  page: 1,
  headerPhoto: null,
  loading: false,
  collections: {
    results: [],
    total: 0,
  },
  collectionPage: 1,
};

const reducer: Reducer<State, Action> = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_PHOTOS:
      const { photosData } = state;
      const { results: photosResults, total: photosTotal } = payload;

      const photos = [...photosData.results, ...photosResults];
      const existingPhotos = {
        results: uniqArray(photos),
        total: photosTotal,
      };
      return { ...state, photosData: existingPhotos };
    case SET_COLLECTIONS:
      const { collections } = state;
      const { results: collectionResults, total: collectionTotal } = payload;

      const collectionsData = [...collections.results, ...collectionResults];
      const newData = {
        results: collectionsData,
        total: collectionTotal,
      };
      return { ...state, collections: newData };
    case SET_HEADER_PHOTO:
      return { ...state, headerPhoto: payload };
    case SET_PAGE:
      return { ...state, page: payload };
    case SET_COLLECTION_PAGE:
      return { ...state, collectionPage: payload };
    case SET_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};

export default reducer;
