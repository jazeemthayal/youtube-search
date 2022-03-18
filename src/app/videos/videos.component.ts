import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { Video } from "../models/video.model";
import * as fromApp from "../app.reducer";
import { map } from "rxjs/operators";

@Component({
  selector: "app-videos",
  templateUrl: "./videos.component.html",
  styleUrls: ["./videos.component.css"],
})
export class VideosComponent implements OnInit, OnDestroy {
  videos: Video[];
  subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select("videos")
      .pipe(
        map((videosState) => {
          return videosState.videos;
        })
      )
      .subscribe((videos: Video[]) => {
        this.videos = videos;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
