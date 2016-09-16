export interface IFlight {
    id: string,
    flightNumber: IFlightNr,
    departureAirport: string,
    departureAirportCode: string,
    arrivalAirport: string,
    arrivalAirportCode: string,
    depTerminalName: string,
    localDepartureTime: string,
    localArrivalTime: string,
    flightDuration?:string,
    isDisrupted: boolean,
    seatsAvailable: Number,
    prices: IPriceAll,
    lower?:boolean,
    higher?:boolean
}

export interface IFlightNr {
    carrierCode: string,
    number: string
}

export interface IPriceAll {
    adult?: IPrice,
    child?: IPrice,
    infant?: IPrice
};

export interface IPrice {
    value: Number,
    valueWithDebitCard: Number,
    valueWithCreditCard: Number
}