import { TestBed, inject } from '@angular/core/testing';

import { RedditDataService } from './reddit-data.service';

describe('RedditDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedditDataService]
    });
  });

  it('should be created', inject([RedditDataService], (service: RedditDataService) => {
    expect(service).toBeTruthy();
  }));
});
