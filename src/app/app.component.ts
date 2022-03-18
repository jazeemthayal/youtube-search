import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { Video } from "./models/video.model";
import { ApiService } from "./services/api.service";
import * as fromApp from "./app.reducer";
import * as VideosActions from "./store/videos.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  search = "";
  isLoading = false;
  error: string;
  subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store.select("videos").subscribe((videosState) => {
      this.isLoading = videosState.loading;
      this.error = videosState.videoFetchError;
    });
  }

  onSubmit() {
    if (this.search.length)
      this.store.dispatch(
        new VideosActions.VideoFetchStart({ query: this.search })
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
