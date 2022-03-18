import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, switchMap, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { VideoData } from "../models/video-data.model";
import * as VideosActions from "./videos.actions";

const handleError = (errorRes) => {
  let errorMessage = "An unknown error occurred!";
  if (!errorRes.error || !errorRes.error.error) {
    return of(new VideosActions.VideoFetchFail(errorMessage));
  }
  return of(new VideosActions.VideoFetchFail(errorRes.error.error.message));
};

@Injectable()
export class VideosEffects {
  @Effect()
  fetchVideos = this.actions$.pipe(
    ofType(VideosActions.VIDEO_FETCH_START),
    switchMap((actionData: VideosActions.VideoFetchStart) => {
      return this.http.get<VideoData>(
        `https://www.googleapis.com/youtube/v3/search?q=${actionData.payload.query}&key=${environment.apiKey2}&part=snippet&type=video&maxResults=9&pageToken=${actionData.payload.pageToken}`
      );
    }),
    map((res: VideoData) => new VideosActions.FetchResults(res)),
    catchError((errorRes) => handleError(errorRes))
  );
  constructor(private actions$: Actions, private http: HttpClient) {}
}
