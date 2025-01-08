export interface Flight {
  id: string;
  from: string;
  to: string;
  departureDate: string;
  arrivalDate: string;
  availableSeats: number;
  price: number;
  airline: string;
}

export interface DayAvailability {
  date: string;
  flights: Flight[];
  hasAvailability: boolean;
}