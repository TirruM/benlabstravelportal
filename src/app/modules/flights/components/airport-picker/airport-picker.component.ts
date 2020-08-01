import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airport-picker',
  templateUrl: './airport-picker.component.html',
  styleUrls: ['./airport-picker.component.scss']
})
export class AirportPickerComponent implements OnInit {

  _radioDevicesList = [
    { id: 11, text: 'one' },
    { id: 22, text: 'two' },
    { id: 33, text: 'three' },
    { id: 44, text: 'fourdfg' },
    { id: 44, text: 'four4534' },
    { id: 44, text: 'fourfghfg' },
    { id: 44, text: 'fourvbvbn' },
    { id: 44, text: 'fourmn,nm' },
    { id: 44, text: 'fouruiuyi' },
    { id: 44, text: 'fourhjkhjk' },
    { id: 55, text: 'fiveqw3q' }
  ];
  radioDevicesList: { id: number; text: string; }[];
  constructor() { }

  ngOnInit() {
  }
  searchAvailableRadioList(selected): void {
    this.radioDevicesList = this._radioDevicesList.filter(r => r.text.includes(selected));
  }


}
