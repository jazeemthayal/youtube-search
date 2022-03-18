import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // fetchVideos(query: string) {
  //   return this.http
  //     .get(
  //       `https://www.googleapis.com/youtube/v3/search?q=${query}&key=AIzaSyDrsU4lxdSRWmO053F7KinyzysDAwAMf4U&part=snippet&type=video&maxResults=10`
  //     )
  // }
}
