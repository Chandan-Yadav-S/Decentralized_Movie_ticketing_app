import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onBookNow }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onBookNow={onBookNow}
        />
      ))}
    </div>
  );
};

export default MovieList;