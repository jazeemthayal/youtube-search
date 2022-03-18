export interface VideoData {
  items: [];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  nextPageToken: string;
  prevPageToken: string;
}
