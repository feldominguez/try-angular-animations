import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-stagger',
  templateUrl: './stagger.component.html',
  styleUrls: ['./stagger.component.scss']
})
export class StaggerComponent implements OnInit {
  popularSubreddits;

  BASE_URL = 'http://www.reddit.com/api/trending_subreddits.json';
  HEADER = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this.getData()
      .map((data: any) => data.subreddit_names)
      .subscribe(data => (this.popularSubreddits = data));
  }

  getData() {
    return this._http.get(this.BASE_URL, this.HEADER);
  }
}
