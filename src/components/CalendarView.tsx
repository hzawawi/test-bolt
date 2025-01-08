import React from 'react';
import { DayAvailability, Flight } from '../types';
import { Calendar as CalendarIcon, Users } from 'lucide-react';

interface CalendarViewProps {
  month: Date;
  availability: DayAvailability[];
  onSelectDate: (date: string) => void;
  selectedDate: string | null;
}

export default function CalendarView({ month, availability, onSelectDate, selectedDate }: CalendarViewProps) {
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(month.getFullYear(), month.getMonth(), 1).getDay();
  
  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(month.getFullYear(), month.getMonth(), i + 1);
    const dateStr = date.toISOString().split('T')[0];
    const dayData = availability.find(a => a.date === dateStr);
    return { date: dateStr, availability: dayData };
  });

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <CalendarIcon className="h-5 w-5" />
          {month.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
        
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} className="h-24" />
        ))}

        {days.map(({ date, availability }) => (
          <button
            key={date}
            onClick={() => availability?.hasAvailability && onSelectDate(date)}
            className={`h-24 p-2 border rounded-lg transition-colors ${
              selectedDate === date
                ? 'border-blue-500 bg-blue-50'
                : availability?.hasAvailability
                ? 'hover:border-blue-300 bg-white'
                : 'bg-gray-50 cursor-not-allowed'
            }`}
          >
            <div className="text-right text-sm mb-1">
              {new Date(date).getDate()}
            </div>
            {availability?.hasAvailability && (
              <div className="text-xs text-gray-600 flex items-center justify-center gap-1">
                <Users className="h-3 w-3" />
                {availability.flights.length} flights
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}