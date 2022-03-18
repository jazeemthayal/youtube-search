import { Video } from "../models/video.model";
import * as VideosActions from "./videos.actions";

export interface State {
  videos: Video[];
  videoFetchError: string;
  loading: boolean;
}

const initialState: State = {
  videos: [],
  videoFetchError: null,
  loading: false,
};

export function videosReducer(
  state = initialState,
  action: VideosActions.VideosActions
) {
  switch (action.type) {
    case VideosActions.VIDEO_FETCH_START:
      return {
        ...state,
        videoFetchError: null,
        loading: true,
      };
    case VideosActions.VIDEO_FETCH_SUCCESS:
      return {
        ...state,
        videoFetchError: null,
        loading: false,
        searchResults: null,
      };
    case VideosActions.VIDEO_FETCH_FAIL:
      return {
        ...state,
        videos: [],
        videoFetchError: action.payload,
        loading: false,
        searchResults: null,
      };
    case VideosActions.SET_VIDEOS:
      return {
        ...state,
        videos: [...action.payload],
        videoFetchError: null,
        loading: false,
      };
    default:
      return state;
  }
}
