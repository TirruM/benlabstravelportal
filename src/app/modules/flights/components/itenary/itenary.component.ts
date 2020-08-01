import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-itenary',
  templateUrl: './itenary.component.html',
  styleUrls: ['./itenary.component.css']
})
export class ItenaryComponent implements OnInit, OnChanges {
  @Input() itinerary;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
    this.itinerary = changes.itinerary.currentValue;
  }

}
