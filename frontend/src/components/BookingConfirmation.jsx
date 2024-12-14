import React from 'react';

const BookingConfirmation = ({ bookingDetails, onNewBooking }) => {
  return (
    <div className="max-w-md mx-auto bg-black text-white p-6 rounded-lg shadow-md">
      <div className="text-center mb-6">
        <svg
          className="w-16 h-16 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-green-600">Booking Confirmed!</h2>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-lg mb-4">Booking Details</h3>
        <div className="space-y-2">
          <p><span className="font-medium">Movie:</span> {bookingDetails.movie.title}</p>
          <p><span className="font-medium">Date:</span> {new Date(bookingDetails.date).toLocaleDateString()}</p>
          <p><span className="font-medium">Time:</span> {bookingDetails.time}</p>
          <p><span className="font-medium">Seats:</span> {bookingDetails.selectedSeats.join(', ')}</p>
          <p className="text-lg mt-4">
            <span className="font-medium">Total Price:</span>{' '}
            <span className="font-bold">₹{bookingDetails.totalPrice.toFixed(2)}</span>
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mb-6">
        <p>A confirmation email has been sent to your email address.</p>
        <p>Please arrive 15 minutes before showtime.</p>
      </div>

      <button
  onClick={() => window.location.href = "http://192.168.137.1:3000/allowed-voters"}
  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
>
  Go To Payment
</button>

    </div>
  );
};

export default BookingConfirmation;
