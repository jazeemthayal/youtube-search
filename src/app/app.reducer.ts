import { ActionReducerMap } from "@ngrx/store";
import * as fromVideos from "./store/videos.reducer";

export interface AppState {
  videos: fromVideos.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  videos: fromVideos.videosReducer,
};
