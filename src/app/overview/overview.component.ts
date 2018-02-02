import { Component, OnInit } from '@angular/core';

import {
  useAnimation,
  transition,
  trigger,
  style,
  animate,
  AnimationOptions
} from '@angular/animations';
import { fadeAnimation } from '../shared/animations';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [
    trigger('fadeAnimate', [
      transition('* => *', [
        useAnimation(fadeAnimation, {
          params: {
            from: 0,
            to: 1,
            time: '450ms'
          }
        })
      ])
    ])
  ]
})

// delay?: number | string;
// params?: {
//     [name: string]: any;
// };
export class OverviewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
