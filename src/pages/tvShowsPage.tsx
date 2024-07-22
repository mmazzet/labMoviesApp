import React from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { getTvShows } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { DiscoverTvShows, BaseTvShowProps } from "../types/interfaces";

const TvShowsPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverTvShows, Error>("tvShows", getTvShows);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const tvShows = data ? data.results : [];

  return (
    <>
       <PageTemplate
        title="Discover Tv Shows"
        tvShows={tvShows}
        action={(tvShow: BaseTvShowProps)=> null}
        />
    </>
  );
};
export default TvShowsPage;