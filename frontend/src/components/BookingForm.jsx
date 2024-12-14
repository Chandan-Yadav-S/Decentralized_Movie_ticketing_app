import React, { useState } from 'react';
import { generateSeats } from '../utils/seatUtils';
import { timeSlots } from '../data/timeSlots';
import SeatSelection from './SeatSelection';

const BookingForm = ({ movie, onConfirm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [seats] = useState(generateSeats(8, 10)); // 8 rows, 10 seats per row
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (seat) => {
    setSelectedSeats(prev => 
      prev.includes(seat.id)
        ? prev.filter(id => id !== seat.id)
        : [...prev, seat.id]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({
      movie,
      selectedSeats,
      date,
      time,
      totalPrice: selectedSeats.length * movie.price
    });
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Book Tickets for {movie.title}</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 mb-2">Select Date</label>
            <input
              type="date"
              min={today}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Select Time</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select time</option>
              {timeSlots.map(slot => (
                <option key={slot.id} value={slot.time}>{slot.label}</option>
              ))}
            </select>
          </div>
        </div>

        <SeatSelection
          seats={seats}
          selectedSeats={selectedSeats}
          onSeatSelect={handleSeatSelect}
        />

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg">Selected Seats:</span>
            <span className="font-semibold">
              {selectedSeats.length > 0 
                ? selectedSeats.join(', ')
                : 'None selected'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg">Total Price:</span>
            <span className="text-xl font-bold">
            ₹{(selectedSeats.length * movie.price).toFixed(2)}
            </span>
          </div>
        </div>

        <button
          type="submit"
          disabled={selectedSeats.length === 0}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {selectedSeats.length === 0 ? 'Please select seats' : 'Confirm Booking'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;