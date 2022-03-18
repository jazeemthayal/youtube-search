import { Action } from "@ngrx/store";
import { Video } from "../models/video.model";

export const VIDEO_FETCH_START = "VIDEO_FETCH_START";
export const VIDEO_FETCH_SUCCESS = "VIDEO_FETCH_SUCCESS";
export const VIDEO_FETCH_FAIL = "VIDEO_FETCH_FAIL";
export const SET_VIDEOS = "SET_VIDEOS";

export class VideoFetchStart implements Action {
  readonly type = VIDEO_FETCH_START;
  constructor(public payload: { query: string }) {}
}

export class VideoFetchSuccess implements Action {
  readonly type = VIDEO_FETCH_SUCCESS;
  constructor() {}
}

export class VideoFetchFail implements Action {
  readonly type = VIDEO_FETCH_FAIL;
  constructor(public payload: string) {}
}

export class SetVideos implements Action {
  readonly type = SET_VIDEOS;
  constructor(public payload: Video[]) {}
}

export type VideosActions =
  | VideoFetchSuccess
  | VideoFetchStart
  | VideoFetchFail
  | SetVideos;
