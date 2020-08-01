import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // Fallback when no prior route is matched
    {
        path: '',
        redirectTo: "/flights",
        pathMatch: "full"
    },
    {
        path: "flights",
        loadChildren: () => import('./modules/flights/flight.module').then(m => m.FlightModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule { }
