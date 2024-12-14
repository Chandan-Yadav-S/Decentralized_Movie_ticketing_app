import React from 'react';

const MovieCard = ({ movie, onBookNow }) => {
  return (
    <div className="bg-gray rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{movie.description}</p>
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>{movie.genre}</span>
          <span>{movie.duration}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-yellow-500 flex items-center">
            <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            {movie.rating}
          </span>
          <span className="font-bold">₹{movie.price}</span>
        </div>
        <button
          onClick={() => onBookNow(movie)}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;