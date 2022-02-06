import { Action, State } from "@context/reducer";
import React from "react";
import * as Photo from "unsplash-js/src/methods/photos/types";
import * as Collection from "unsplash-js/src/methods/collections/types";

export interface ICollectionProps extends Collection.Basic {
  tags: [ITagProps];
  share_key: string;
  alt_description: string;
  preview_photos: Photo.Basic[];
}

export interface IPhotoProps extends Photo.Full {
  width: number;
  height: number;
}

export interface ITagProps {
  title: string;
  type: string;
  source: {
    ancestry: {
      category: {
        pretty_slug: string;
        slug: string;
      };
      type: {
        pretty_slug: string;
        slug: string;
      };
    };
    cover_photo: Photo.Full;
    description: string;
    meta_description: string;
    meta_title: string;
    subtitle: string;
    title: string;
  };
}

export interface StateProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export interface IUserType {
  accepted_tos: boolean;
  allow_messages: boolean;
  badge: {
    link: string;
    primary: boolean;
    slug: string;
    title: string;
  };
  for_hire: boolean;
  id: string;
  numeric_id: number;
  bio: Nullable<string>;
  first_name: string;
  instagram_username: Nullable<string>;
  last_name: Nullable<string>;
  links: {
    followers: string;
    following: string;
    html: string;
    likes: string;
    photos: string;
    portfolio: string;
    self: string;
  };
  location: Nullable<string>;
  name: string;
  portfolio_url: Nullable<string>;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username: Nullable<string>;
  updated_at: string;
  username: string;
  photos: Photo.VeryBasic[];
  downloads: number;
  followers_count: number;
  following_count: number;
  tags: {
    aggregated: [ITagProps];
    custom: [ITagProps];
  };
}

export interface IResponse {
  results: any[];
  total: number;
}
