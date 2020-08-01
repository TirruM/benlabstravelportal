import { NgModule } from '@angular/core';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { TravellerClassSelectionComponent } from './components/traveller-class-selection/traveller-class-selection.component';
import { FlightFilterComponent } from './components/flight-filter/flight-filter.component';
import { ItenaryComponent } from './components/itenary/itenary.component';
import { FlightFareComponent } from './components/flight-fare/flight-fare.component';
import { FlightInfoComponent } from './components/flight-info/flight-info.component';
import { FlightsRoutingModule } from './flights-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightHomeComponent } from './pages/flight-home/flight-home.component';
import { FlightSearchResultsComponent } from './pages/flight-search-results/flight-search-results.component';
import { FlightCheckoutComponent } from './pages/flight-checkout/flight-checkout.component';
import { FlightCartComponent } from './pages/flight-cart/flight-cart.component';
import { FlightBookComponent } from './pages/flight-book/flight-book.component';

import {CarouselModule} from 'primeng/carousel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import { AirportPickerComponent } from './components/airport-picker/airport-picker.component';

@NgModule({
  declarations: [FlightSearchComponent,
    TravellerClassSelectionComponent,
    FlightFilterComponent,
    ItenaryComponent,
    FlightFareComponent,
    FlightInfoComponent,
    FlightHomeComponent,
    FlightSearchResultsComponent,
    FlightCheckoutComponent,
    FlightCartComponent,
    FlightBookComponent,
    AirportPickerComponent
  ],
  imports: [
    FlightsRoutingModule,
    // SharedModule,
    FormsModule, ReactiveFormsModule,
    DropdownModule,
    CarouselModule,
    InputTextModule,
    ButtonModule,
    AutoCompleteModule,
    CalendarModule
  ]
})
export class FlightModule { }
