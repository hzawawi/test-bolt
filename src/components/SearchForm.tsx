import React, { useState } from 'react';
import { SearchParams } from '../types';
import { Plane, Users, Calendar, MapPin } from 'lucide-react';

interface SearchFormProps {
  onSearch: (params: SearchParams) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    from: '',
    to: '',
    date: '',
    passengers: 10,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Departure City"
              value={searchParams.from}
              onChange={(e) => setSearchParams({ ...searchParams, from: e.target.value })}
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Arrival City"
              value={searchParams.to}
              onChange={(e) => setSearchParams({ ...searchParams, to: e.target.value })}
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="date"
              className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={searchParams.date}
              onChange={(e) => setSearchParams({ ...searchParams, date: e.target.value })}
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Group Size</label>
          <div className="relative">
            <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="number"
              min="10"
              className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={searchParams.passengers}
              onChange={(e) => setSearchParams({ ...searchParams, passengers: parseInt(e.target.value) })}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        <Plane className="h-5 w-5" />
        Search Flights
      </button>
    </form>
  );
}