import React, { useState } from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { getTvShows } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { DiscoverTvShows } from "../types/interfaces";

const TvShowsPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isError } = useQuery<DiscoverTvShows, Error>(
    ["tvShows", page],
    () => getTvShows(page),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const tvShows = data ? data.results : [];

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
    <>
       <PageTemplate
        title="Discover Tv Shows"
        tvShows={tvShows}
        onNextPage={goToNextPage}
        onPreviousPage={goToPreviousPage}
        action={() => null}
        />
    </>
  );
};
export default TvShowsPage;