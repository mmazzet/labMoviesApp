import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";


const UpcomingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]);
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
    />
  );
};
export default UpcomingMoviesPage;