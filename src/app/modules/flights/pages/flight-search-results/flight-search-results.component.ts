import { Component, OnInit } from '@angular/core';
import { FlightApiService } from 'src/app/core/http/flight-api.service';
import { FlightSearchReq } from '../../models/flightSearchRq';
import { FlightSearchRes } from '../../models/flightSearchRes';

@Component({
  selector: 'app-flight-search-results',
  templateUrl: './flight-search-results.component.html',
  styleUrls: ['./flight-search-results.component.scss']
})
export class FlightSearchResultsComponent implements OnInit {
  public flightSearchRequest: FlightSearchReq = {};
  constructor(private flightApiService: FlightApiService) {
    
  }

  ngOnInit() {
    this.flightSearchRequest = JSON.parse(localStorage.getItem("flight-search"));
    console.log("flight search request in flight search results component",this.flightSearchRequest);
    this.getFlightSearchResults();
  }

  public getFlightSearchResults(): void {
    console.log("calling flight search results api call ");
    this.flightApiService.request("post", "api/FlightBusiness/AirSearch", this.flightSearchRequest ).subscribe((flightSearchRes: FlightSearchRes) => {
      console.log(flightSearchRes);
      if (flightSearchRes.errors.length === 0) {
        if (flightSearchRes.itineraries.mappingType === "Combined") {

        } else {

        }
      }
    })
  }

}
