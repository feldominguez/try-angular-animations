import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

import { RedditDataService } from '../shared';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-stagger',
  templateUrl: './stagger.component.html',
  styleUrls: ['./stagger.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class StaggerComponent implements OnInit {
  asyncSubreddits;
  staticSubreddits;

  asyncDataLength: number;

  constructor(
    private redditData: RedditDataService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.asyncSubreddits = this.redditData.getData().map((data: any) => {
      this.asyncDataLength = data.subreddit_names.length;
      return data.subreddit_names;
    });

    this.redditData
      .getStaticData()
      .map((data: any) => data.subreddit_names)
      .subscribe(data => (this.staticSubreddits = data));
  }

  clearStaticSubReddits(): void {
    this.staticSubreddits = [];
  }

  reloadAsyncSubreddits(): void {
    this.asyncSubreddits = null;
    this.asyncDataLength = null;
    this.asyncSubreddits = this.redditData.getData().map((data: any) => {
      this.asyncDataLength = data.subreddit_names.length;
      return data.subreddit_names;
    });
  }

  reloadStaticSubreddits(): void {
    this.clearStaticSubReddits();
    this.cd.detectChanges();

    this.redditData
      .getStaticData()
      .map((data: any) => data.subreddit_names)
      .subscribe(data => {
        console.log(this.staticSubreddits);
        this.staticSubreddits = data;
        this.cd.detectChanges();
      });
  }
}
