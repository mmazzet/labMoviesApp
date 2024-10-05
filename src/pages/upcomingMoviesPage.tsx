import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import { DiscoverMovies } from "../types/interfaces";
import { useTranslation } from "react-i18next";

const UpcomingMoviesPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { t } = useTranslation();
  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    ["upcoming", page],
    () => getUpcomingMovies(page),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data?.results ?? [];

  const goToNextPage = () => {
    if (data && page < data.total_pages) {
      setPage(page + 1);
    }
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <PageTemplate
      title={t("homepage_header_upcoming_movies")}
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />;
      }}
      onNextPage={goToNextPage}
      onPreviousPage={goToPreviousPage}
    />
  );
};
export default UpcomingMoviesPage;
