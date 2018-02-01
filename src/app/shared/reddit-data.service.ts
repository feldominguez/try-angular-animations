import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RedditDataService {
  BASE_URL = 'https://www.reddit.com/api/trending_subreddits.json';
  HEADER = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(private _http: HttpClient) {}

  getData() {
    return this._http.get(this.BASE_URL, this.HEADER);
  }
}
