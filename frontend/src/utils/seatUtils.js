export const generateSeats = (rows, seatsPerRow) => {
  const seats = [];
  const rowLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < seatsPerRow; j++) {
      seats.push({
        id: `${rowLetters[i]}${j + 1}`,
        row: rowLetters[i],
        number: j + 1,
        isBooked: Math.random() < 0.3, // Randomly mark some seats as booked
      });
    }
  }
  return seats;
};

export const calculateTotalPrice = (selectedSeats, basePrice) => {
  return selectedSeats.length * basePrice;
};