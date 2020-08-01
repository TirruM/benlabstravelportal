import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-home',
  templateUrl: './flight-home.component.html',
  styleUrls: ['./flight-home.component.scss']
})
export class FlightHomeComponent implements OnInit {
  public images = [];
  public responsiveOptions = [];
  public pageLocation: string = "home";
  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    for (let i = 0; i < 4; i++) {
      if (i / 2 === 0) {
        this.images.push({
          "id": i + 1,
          "path": "https://image.shutterstock.com/image-vector/blue-bokeh-background-260nw-627140603.jpg"
        })
      } else {
        this.images.push({
          "id": i + 1,
          "path": "https://images.unsplash.com/photo-1513366208864-87536b8bd7b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        })
      }

    };

  }

}
