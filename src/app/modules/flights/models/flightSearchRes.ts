// declare module namespace {

    export interface SupplierFlightFare {
        paxType: string;
        fareDescription: string;
        amount: number;
        fareTag: string;
        fareCode: string;
    }

    export interface CommissionDetails {
        bookingFee: number;
        vendorFee: number;
        clientCommissionSheetId: number;
        clientBaseCommission: number;
        clientPLB: number;
        clientTaxCommission: number;
        clientMarkup: number;
        clientTaxCategoryType: string;
        vendorCommissionSheetId: number;
        vendorBaseCommission: number;
        vendorTaxCommission: number;
        vendorPLB: number;
        vendorMarkup: number;
        vendorTaxCategoryType: string;
        isForcedCommission: boolean;
        baseCommissionLoss: number;
        taxCommissionLoss: number;
        agentCommissionSheetId: number;
        agentApplicableType: string;
        agentAmount: number;
    }

    export interface IngrainedFare {
        supplierParameter: string;
        ingrainedFareCodeName: string;
        ingrainedFareCode: string;
        fareApplicableType: string;
        amount: number;
        fareDescriptions: string[];
    }

    export interface FlightFare {
        paxType: string;
        fareDescription: string;
        amount: number;
        fareTag: string;
        fareCode: string;
    }

    export interface FareRule {
        paxType: string;
        fareBasis: string;
        cityPair: string;
        fareInfoRef: string;
        fareRuleKey: string;
    }

    export interface Baggage {
        airline: string;
        paxType: string;
        baggageInfo: string;
        cityPair: string;
    }

    export interface MiniRule {
        changeAllowed: boolean;
        cancelAllowed: boolean;
        cancellationCharge: number;
        exchangeCharge: number;
        currency: string;
        cat16InfoCancel: boolean;
        cat16InfoChange: boolean;
        paxType: string;
        applicability: string;
        type: string;
        changeRemarks: string;
        cancelRemarks: string;
    }

    export interface SegmentInfo {
        cityPair: string;
        bookingClass: string;
        seatRemaining: number;
        cabinClass: string;
        supplierParameter: string;
    }

    export interface FareFamily {
        supplierFlightFares: SupplierFlightFare[];
        commissionDetails: CommissionDetails;
        purchaseType: string;
        fareType: string;
        currency: string;
        ingrainedFares: IngrainedFare[];
        flightFares: FlightFare[];
        fareRules: FareRule[];
        baggage: Baggage[];
        miniRules: MiniRule[];
        segmentInfos: SegmentInfo[];
        isRefundable: boolean;
        baseCommission: number;
        taxCommission: number;
        plb: number;
        adultNetFare: number;
        childNetFare: number;
        infantNetFare: number;
        totalNetFare: number;
    }

    export interface Fare {
        fareId: string;
        supplierName: string;
        pccCode: string;
        fareFamilies: FareFamily[];
    }

    export interface StopOverSegment {
        stopDepatureTime: Date;
        stopArrivalTime: Date;
        stopAirPortCode: string;
        stopDuration: string;
        stopGMTOffset: string;
        stopEquipment: string;
    }

    export interface Segment {
        segId: string;
        isReturn: boolean;
        origin: string;
        destination: string;
        departureDateTime: Date;
        arrivalDateTime: Date;
        journeyDuration: string;
        stopQuantity: string;
        flightNumber: string;
        operatingAirline: string;
        equipmentType: string;
        marketingAirline: string;
        marriageGrp: string;
        operatingFlightNumber: string;
        departureTimeZone: string;
        arrivalTimeZone: string;
        stopOverSegments: StopOverSegment[];
        departureTerminal: string;
        arrivalTerminal: string;
    }

    export interface Combo {
        validatingCarrier: string;
        segmentMapping: string[][];
        fareMapping: string;
        combinationId: number;
        supplierParameter: string;
    }

    export interface Itineraries {
        mappingType: string;
        adultCount: number;
        childCount: number;
        infantCount: number;
        combo: Combo[];
    }

    export interface Error {
        errorCode: string;
        errorDetail: string;
    }

    export interface FlightSearchRes {
        traceId: string;
        fares: Fare[];
        segments: Segment[];
        itineraries: Itineraries;
        errors: Error[];
    }

// }

