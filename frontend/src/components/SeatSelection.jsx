import React from 'react';

const SeatSelection = ({ seats, selectedSeats, onSeatSelect }) => {
  const rows = [...new Set(seats.map(seat => seat.row))];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-4">Select Your Seats</h3>
      <div className="flex justify-center mb-4">
        <div className="flex gap-4">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-200 rounded mr-2"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-600 rounded mr-2"></div>
            <span>Selected</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-400 rounded mr-2"></div>
            <span>Booked</span>
          </div>
        </div>
      </div>
      
      <div className="w-full overflow-x-auto">
        <div className="mb-8 text-center">
          <div className="w-2/3 h-2 bg-gray-300 mx-auto rounded-lg mb-8">
            <div className="text-center text-sm text-gray-500 mt-4">Screen</div>
          </div>
        </div>
        
        <div className="grid gap-4">
          {rows.map(row => (
            <div key={row} className="flex justify-center gap-2">
              <div className="w-6 flex items-center justify-center font-bold">
                {row}
              </div>
              {seats
                .filter(seat => seat.row === row)
                .map(seat => (
                  <button
                    key={seat.id}
                    disabled={seat.isBooked}
                    onClick={() => onSeatSelect(seat)}
                    className={`
                      w-8 h-8 rounded-t-lg text-sm
                      ${seat.isBooked 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : selectedSeats.includes(seat.id)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 hover:bg-gray-300'
                      }
                    `}
                  >
                    {seat.number}
                  </button>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;