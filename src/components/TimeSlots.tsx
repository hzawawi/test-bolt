import React from 'react';
import { Flight } from '../types';
import { Clock, Plane, Users } from 'lucide-react';

interface TimeSlotsProps {
  flights: Flight[];
  onSelect: (flight: Flight) => void;
}

export default function TimeSlots({ flights, onSelect }: TimeSlotsProps) {
  return (
    <div className="space-y-4">
      {flights.map(flight => (
        <div
          key={flight.id}
          className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <span className="font-medium">
                {new Date(flight.departureDate).toLocaleTimeString([], { 
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
            <span className="text-lg font-bold text-blue-600">
              ${flight.price}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-2">
              <Plane className="h-4 w-4" />
              <span>{flight.airline}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{flight.availableSeats} seats</span>
            </div>
          </div>

          <button
            onClick={() => onSelect(flight)}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Select Flight
          </button>
        </div>
      ))}
    </div>
  );
}