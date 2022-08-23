import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { FindMovie } from './components/FindMovie';

export const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[] | []>([]);

  const addMovie = (movieToAdd: Movie) => {
    const isDublicate = movies
      .some(movie => movie.imdbID === movieToAdd.imdbID);

    if (isDublicate) {
      return;
    }

    setMovies(state => [...state, movieToAdd]);
  };

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={movies} />
      </div>
      <div className="sidebar">
        <FindMovie addMovie={addMovie} />
      </div>
    </div>
  );
};