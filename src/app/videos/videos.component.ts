import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { VideoData } from "../models/video-data.model";
import * as fromApp from "../app.reducer";

@Component({
  selector: "app-videos",
  templateUrl: "./videos.component.html",
  styleUrls: ["./videos.component.css"],
})
export class VideosComponent implements OnInit, OnDestroy {
  videosData: VideoData;
  subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store.select("videos").subscribe((videosState) => {
      this.videosData = videosState.data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
