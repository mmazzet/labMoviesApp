import React from "react"; 
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { MovieDetailsProps, CastProps } from "../types/interfaces";

const MovieDetailsPage: React.FC= () => {
  const { id } = useParams();
  const { data: movie, error: movieError, isLoading: movieLoading, isError: isMovieError } = useQuery<MovieDetailsProps, Error>(
    ["movie", id],
    () => getMovie(id || "")
  );

  const { data: credits, error: creditsError, isLoading: creditsLoading, isError: isCreditsError } = useQuery<CastProps, Error>(
    ["credits", id],
    () => getCredits(id || "")
  );

  if (movieLoading || creditsLoading) {
    return <Spinner />;
  }

  if (isMovieError) {
    return <h1>{(movieError as Error).message}</h1>;
  }

  if (isCreditsError) {
    return <h1>{(creditsError as Error).message}</h1>;
  }

  return (
    <>
      {movie && credits ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails {...movie} credits={credits} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;