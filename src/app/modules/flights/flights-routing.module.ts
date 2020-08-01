import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FlightHomeComponent } from './pages/flight-home/flight-home.component';
import { FlightSearchResultsComponent } from './pages/flight-search-results/flight-search-results.component';
import { FlightCheckoutComponent } from './pages/flight-checkout/flight-checkout.component';
import { FlightCartComponent } from './pages/flight-cart/flight-cart.component';
import { FlightBookComponent } from './pages/flight-book/flight-book.component';

const routes: Routes = [
    {
      path: '',
      component: FlightHomeComponent
    },
    {
      path: "search-results",
      component: FlightSearchResultsComponent
    },
    {
      path: "checkout",
      component: FlightCheckoutComponent
    },
    {
      path: "cart",
      component: FlightCartComponent
    },
    {
      path: "book",
      component: FlightBookComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FlightsRoutingModule { }
  