import React from 'react';
import { Flight } from '../types';
import { Plane, Clock, Users } from 'lucide-react';

interface FlightCardProps {
  flight: Flight;
  onSelect: (flight: Flight) => void;
}

export default function FlightCard({ flight, onSelect }: FlightCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{flight.airline}</h3>
          <div className="flex items-center gap-2 text-gray-600 mt-1">
            <Plane className="h-4 w-4" />
            <span>{flight.from} → {flight.to}</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-blue-600">${flight.price}</p>
          <p className="text-sm text-gray-500">per person</p>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{new Date(flight.departureDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="h-4 w-4" />
          <span>{flight.availableSeats} seats available</span>
        </div>
      </div>

      <button
        onClick={() => onSelect(flight)}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Select Flight
      </button>
    </div>
  );
}