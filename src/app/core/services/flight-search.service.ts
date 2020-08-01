import { Injectable } from '@angular/core';
import { FlightSearchReq } from 'src/app/modules/flights/models/flightSearchRq';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {
  public flightSearchObj: FlightSearchReq;
  constructor() { }

  public setSearchObj(searchObj: FlightSearchReq) {
    this.flightSearchObj = searchObj;
  }

  public getSearchObj(): FlightSearchReq {
    return this.flightSearchObj;
  }
}
