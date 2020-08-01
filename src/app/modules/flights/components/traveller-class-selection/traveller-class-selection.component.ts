import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { TravellerClass } from '../../models/travellerClass';
import { FlightClass } from '../../models/flightClass.enum';

@Component({
  selector: 'app-traveller-class-selection',
  templateUrl: './traveller-class-selection.component.html',
  styleUrls: ['./traveller-class-selection.component.scss']
})
export class TravellerClassSelectionComponent implements OnInit, OnChanges {
  @Input() travellerClassInfo: TravellerClass;
  @Output() selectedTravellerClass: EventEmitter<TravellerClass> = new EventEmitter<TravellerClass>();
  public travellersCount: number = 0;

  public travellerCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  public classType = Object.keys(FlightClass);

  constructor() { }

  ngOnInit() {
    console.log(JSON.stringify(this.classType));
  }

  ngOnChanges(changes): void {
    this.travellerClassInfo = changes.travellerClassInfo.currentValue;
    this.travellersCount = this.travellerClassInfo.adultCount +
      this.travellerClassInfo.childCount +
      this.travellerClassInfo.infantCount;
    console.log(this.travellersCount);

  }

  /* onSelection of adult */
  public onSelectTravellerCount(count: number, travellerType: string) {
    console.log(count);
    switch (travellerType) {
      case "ADT":
        this.travellerClassInfo.adultCount = count;
        break;
      case "CHD":
        this.travellerClassInfo.childCount = count;
        break;
      case "INF":
        this.travellerClassInfo.infantCount = count;
        break;

      default:
        break;
    }
    this.travellersCount = this.travellerClassInfo.adultCount +
      this.travellerClassInfo.childCount +
      this.travellerClassInfo.infantCount;
    console.log(this.travellersCount);
    this.selectedTravellerClass.emit(this.travellerClassInfo);
  }

}
