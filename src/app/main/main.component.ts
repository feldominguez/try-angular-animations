import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  routes = [
    // {
    //   icon: '',
    //   name: 'Overview',
    //   route: ['/']
    // },
    {
      categoryName: 'Animations',
      routes: [
        {
          route: ['/stagger'],
          name: 'Stagger'
        },
        {
          route: ['/fade'],
          name: 'Fade'
        }
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
