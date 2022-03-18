export class Video {
  public title: string;
  public channelTitle: string;
  public description: string;
  public url: string;

  constructor(title: string, channelTitle: string, desc: string, url: string) {
    this.title = title;
    this.channelTitle = channelTitle;
    this.description = desc;
    this.url = url;
  }
}
