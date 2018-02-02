import { Component, OnInit } from '@angular/core';

import { RedditDataService } from '../shared';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-stagger',
  templateUrl: './stagger.component.html',
  styleUrls: ['./stagger.component.scss']
})
export class StaggerComponent implements OnInit {
  asyncSubreddits;
  staticSubreddits;

  constructor(private redditData: RedditDataService) {}

  ngOnInit() {
    this.redditData
      .getData()
      .map((data: any) => data.subreddit_names)
      .subscribe(data => (this.asyncSubreddits = data));

    this.redditData
      .getStaticData()
      .map((data: any) => data.subreddit_names)
      .subscribe(data => (this.staticSubreddits = data));
  }

  reloadAsyncSubreddits(): void {
    this.asyncSubreddits = null;
    this.redditData
      .getData()
      .map((data: any) => data.subreddit_names)
      .subscribe(data => (this.asyncSubreddits = data));
  }

  reloadStaticSubreddits(): void {
    this.staticSubreddits = null;
    this.redditData
      .getStaticData()
      .map((data: any) => data.subreddit_names)
      .subscribe(data => {
        this.staticSubreddits = data;
      });
  }
}
