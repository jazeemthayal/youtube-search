import { VideoData } from "../models/video-data.model";
import * as VideosActions from "./videos.actions";

export interface State {
  videoFetchError: string;
  loading: boolean;
  data: VideoData;
}

const initialState: State = {
  videoFetchError: null,
  loading: false,
  data: {
    items: [],
    pageInfo: {
      totalResults: null,
      resultsPerPage: null,
    },
    nextPageToken: null,
    prevPageToken: null,
  },
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
      };
    case VideosActions.VIDEO_FETCH_FAIL:
      return {
        ...state,
        data: null,
        videoFetchError: action.payload,
        loading: false,
      };
    case VideosActions.FETCH_RESULTS:
      return {
        ...state,
        data: { ...action.payload },
        videoFetchError: null,
        loading: false,
      };
    default:
      return state;
  }
}
