import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TravellerClass } from '../../models/travellerClass';
import { FlightClass } from '../../models/flightClass.enum';
import { FlightApiService } from 'src/app/core/http/flight-api.service';
import { FlightSearchReq, OriginDestination } from '../../models/flightSearchRq';
import { AirTravelType } from '../../models/airTravelType.enum';
import { StopOvers } from '../../models/stopOvers.enum';
import { Router } from '@angular/router';
interface Book {
  name: string;
  author: string;
}

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  public origin;
  public destination;
  public depatureDate;
  public returnDate;
  public flight_search_form: FormGroup;
  public flightSearchValidationFlag: boolean = false;
  public isTravellerModalVisible: boolean = false;
  public isOriginOpen: boolean = false;
  public isDestinationOpen: boolean = false;
  public travellerClassObj: TravellerClass;
  public flightsearchRequest: FlightSearchReq = {} ;

  @Input() pageLocation:string;

  radioDevicesList;
  constructor(private readonly formBuilder: FormBuilder,
    private flightApiService: FlightApiService,private router:Router) { }
  ngOnInit() {
    let obj = {
      "adultCount": 1,
      "childCount": 0,
      "infantCount": 0,
      "travellerClass": FlightClass.Economy
    }
    this.travellerClassObj = obj;
    this.loadFlightSearchForm();
  }

  /* Load form controls */
  public loadFlightSearchForm() {
    this.flight_search_form = this.formBuilder.group({
      'origin': [null, Validators.required],
      'destination': [null, Validators.required],
      'dapature_date': [null, Validators.required],
      'return_date': [null, Validators.required],
      'travellers': [2, Validators.required],
      'adultCount': [this.travellerClassObj.adultCount],
      'childCount': [this.travellerClassObj.childCount],
      'infantCount': [this.travellerClassObj.infantCount],
      'class': ["economy", Validators.required],
      'airTravelType': [AirTravelType.OneWay]
    })
  }

  /* on Click search button  */
  public onFlightSearch() {
    console.log(this.flight_search_form.value);
    this.flightSearchValidationFlag = this.flight_search_form.invalid ? true : false;
    if (this.flightSearchValidationFlag) {
      console.log("form valid submit data");
      let orginDestinations: OriginDestination[] = [];
      orginDestinations.push({
        departureDateTime: new Date("2020-10-30T05:05:28.983Z"),
        origin: "DEL",
        destination: "BLR"
      })
      this.flightsearchRequest.consolidationWaitTime = 12000;
      this.flightsearchRequest.originDestinations = orginDestinations;
      this.flightsearchRequest.adultCount = this.flight_search_form.value.adultCount;
      this.flightsearchRequest.childCount = this.flight_search_form.value.childCount;
      this.flightsearchRequest.infantCount = this.flight_search_form.value.infantCount;
      this.flightsearchRequest.includeCarrier = null;
      this.flightsearchRequest.excludeCarrier = null;
      this.flightsearchRequest.stopOver = StopOvers.None;
      this.flightsearchRequest.airTravelType = AirTravelType.OneWay;
      this.flightsearchRequest.traceId = this.randomTraceIdGenerator(8);
      console.log(JSON.stringify(this.flightsearchRequest));
      
      if(this.pageLocation === "home"){
        this.router.navigateByUrl("/flights/search-results");
      }
      localStorage.setItem("flight-search",JSON.stringify(this.flightsearchRequest));
    

    } 
  }

  /* Random traceId generator */
  randomTraceIdGenerator(length) {
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
  }
  /* onClickTravellerForm */
  public onClickTravellerForm() {
    this.isTravellerModalVisible = !this.isTravellerModalVisible;
    console.log(this.isTravellerModalVisible)
      ;
  }

  /* On Handling traveller and class data from traveller&class component using output emiiter */
  onHandingTravellerClassInfo(event) {
    console.log("event", event);
    this.travellerClassObj = event;
  }

  toggleOrigin() {
    this.isOriginOpen = !this.isOriginOpen;
    this.isDestinationOpen = !this.isDestinationOpen;
  }

  toggleDestination() {
    this.isDestinationOpen = !this.isDestinationOpen;
    this.isOriginOpen = !this.isOriginOpen;
  }
}
