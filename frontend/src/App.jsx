import React, { useState } from 'react';
import { movies } from './data/movies';
import Header from './components/Header';
import MovieList from './components/MovieList';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBookNow = (movie) => {
    setSelectedMovie(movie);
    setBookingConfirmed(false);
  };

  const handleConfirmBooking = (details) => {
    setBookingDetails(details);
    setBookingConfirmed(true);
  };

  const handleNewBooking = () => {
    setSelectedMovie(null);
    setBookingConfirmed(false);
    setBookingDetails(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {!selectedMovie && (
          <MovieList movies={movies} onBookNow={handleBookNow} />
        )}

        {selectedMovie && !bookingConfirmed && (
          <BookingForm
            movie={selectedMovie}
            onConfirm={handleConfirmBooking}
          />
        )}

        {bookingConfirmed && bookingDetails && (
          <BookingConfirmation
            bookingDetails={bookingDetails}
            onNewBooking={handleNewBooking}
          />
        )}
      </main>
    </div>
  );
}

export default App;