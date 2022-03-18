import { Action } from "@ngrx/store";
import { VideoData } from "../models/video-data.model";

export const VIDEO_FETCH_START = "VIDEO_FETCH_START";
export const VIDEO_FETCH_SUCCESS = "VIDEO_FETCH_SUCCESS";
export const VIDEO_FETCH_FAIL = "VIDEO_FETCH_FAIL";
export const FETCH_RESULTS = "FETCH_RESULTS";

export class VideoFetchStart implements Action {
  readonly type = VIDEO_FETCH_START;
  constructor(public payload: { query: string; pageToken: string }) {}
}

export class VideoFetchSuccess implements Action {
  readonly type = VIDEO_FETCH_SUCCESS;
  constructor() {}
}

export class VideoFetchFail implements Action {
  readonly type = VIDEO_FETCH_FAIL;
  constructor(public payload: string) {}
}

export class FetchResults implements Action {
  readonly type = FETCH_RESULTS;
  constructor(public payload: VideoData) {}
}

export type VideosActions =
  | VideoFetchSuccess
  | VideoFetchStart
  | VideoFetchFail
  | FetchResults;
