import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { VideoData } from "./models/video-data.model";
import * as fromApp from "./app.reducer";
import * as VideosActions from "./store/videos.actions";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild("p") paginator: MatPaginator;
  search = "";
  isLoading = false;
  error: string;
  subscription: Subscription;
  videoData: VideoData;
  nextPageToken: string;
  prevPageToken: string;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store.select("videos").subscribe((videosState) => {
      this.isLoading = videosState.loading;
      this.error = videosState.videoFetchError;
      this.videoData = videosState.data;
      this.nextPageToken = videosState.data.nextPageToken;
      this.prevPageToken = videosState.data.prevPageToken;
    });
  }

  onSubmit() {
    if (this.search.length) {
      this.store.dispatch(
        new VideosActions.VideoFetchStart({ query: this.search, pageToken: "" })
      );
      if (this.videoData.pageInfo.totalResults) this.paginator.firstPage();
    }
  }

  pageChange(event) {
    let prevIndex = event.previousPageIndex;
    let currIndex = event.pageIndex;
    let pageToken = "";
    if (currIndex > prevIndex) pageToken = this.nextPageToken;
    if (currIndex < prevIndex) pageToken = this.prevPageToken;

    this.store.dispatch(
      new VideosActions.VideoFetchStart({
        query: this.search,
        pageToken: pageToken,
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
