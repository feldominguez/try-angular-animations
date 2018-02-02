import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';

import 'rxjs/add/observable/from';

@Injectable()
export class RedditDataService {
  staticData: Object[] = [
    {
      subreddit_names: [
        'megalophobia',
        'UnresolvedMysteries',
        'dontyouknowwhoiam',
        'Justrolledintotheshop',
        'MemeYourEnthusiasm'
      ],
      comment_count: 13,
      comment_url:
        '/r/trendingsubreddits/comments/7uh5uf/trending_subreddits_for_20180201_rmegalophobia/'
    }
  ];

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

  getStaticData(): Observable<any> {
    return Observable.from(this.staticData);
  }
}
