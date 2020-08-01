export interface OriginDestination {
    departureDateTime?: Date;
    origin?: string;
    destination?: string;
}

export interface FlightSearchReq{
    consolidationWaitTime?: number;
    originDestinations?: OriginDestination[];
    adultCount?: number;
    childCount?: number;
    infantCount?: number;
    cabinClass?: string;
    includeCarrier?: string;
    excludeCarrier?: string;
    stopOver?: string;
    airTravelType?: string;
    traceId?: string;
}

