import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { videosReducer } from "./store/videos.reducer";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { EffectsModule } from "@ngrx/effects";
import { VideosEffects } from "./store/videos.effects";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { VideosComponent } from "./videos/videos.component";

@NgModule({
  declarations: [AppComponent, VideosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ videos: videosReducer }),
    EffectsModule.forRoot([VideosEffects]),
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
