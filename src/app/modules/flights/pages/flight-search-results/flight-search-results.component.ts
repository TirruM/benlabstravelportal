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
  public comboFlightSearchResults = [];
  public flightMappingType: string;
  constructor(private flightApiService: FlightApiService) {

  }

  ngOnInit() {
    this.flightSearchRequest = JSON.parse(localStorage.getItem("flight-search"));
    console.log("flight search request in flight search results component", this.flightSearchRequest);
    this.getFlightSearchResults();
  }

  /* Get Flight Search Results  */
  public getFlightSearchResults(): void {
    this.flightApiService.request("post", "api/FlightBusiness/AirSearch", this.flightSearchRequest).subscribe((flightSearchRes: FlightSearchRes) => {
/*  */      if (flightSearchRes.errors.length === 0) {
        this.flightMappingType = flightSearchRes.itineraries.mappingType;
        if (flightSearchRes.itineraries.mappingType === "Combined") {
          this.prepareCombinedSearcfhResults(flightSearchRes);
        } else {

        }
      }
    })
  }

  /* Prepare Combined Flight SearchResults */
  public prepareCombinedSearcfhResults(flightSearchRes): void {
    flightSearchRes.itineraries.combo.map(itineray => {
      let obj = itineray;
      let segments = [];
      obj.segmentMapping.forEach(seg => {
        var segInfo = [];
        seg.forEach(segItem => {
          segInfo.push(flightSearchRes.segments.find(seg => seg.segId === segItem));
        })
        obj["segments"] = segInfo;
      })
      obj["fares"] = flightSearchRes.fares.find(fare => fare.fareId === itineray.fareMapping);
      return obj;
    })
    this.comboFlightSearchResults = flightSearchRes.itineraries.combo;
    console.log(this.comboFlightSearchResults);
  }


  /* Prepare Separated Flight SearchResults */
  public prepareSeparatedSearcfhResults(): void {

  }

}
