import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
  voteAverageFilter,
} from "../components/movieFilterUI";
import { DiscoverMovies } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { BaseMovieProps } from "../types/interfaces";
import { useTranslation } from "react-i18next";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};
const voteAverageFiltering = {
  name: "voteAverage",
  value: "0",
  condition: voteAverageFilter,
};
const releaseDateFiltering = {
  name: "releaseDate",
  value: "",
  condition: (movie: BaseMovieProps, value: string) => {
    if (!value) return true;
    const releaseDate = new Date(movie.release_date);
    const filterDate = new Date(value);
    return releaseDate >= filterDate;
  },
};

const HomePage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { t } = useTranslation();

  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    ["discover", page],
    () => getMovies(page),
    { keepPreviousData: true }
  );
  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    titleFiltering,
    genreFiltering,
    voteAverageFiltering,
    releaseDateFiltering,
  ]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet = filterValues.map((filter) =>
      filter.name === type ? changedFilter : filter
    );

    setFilterValues(updatedFilterSet);
  };

  const movies = data ? data.results : [];
  const displayedMovies = filterFunction(movies);

  // Redundant, but necessary to avoid app crashing.
  // const favourites = movies.filter(m => m.favourite)
  // localStorage.setItem("favourites", JSON.stringify(favourites));
  // const addToFavourites = (movieId: number) => true;

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
        title={t("homepage_header_discover_movies")}
        movies={displayedMovies}
        onNextPage={goToNextPage}
        onPreviousPage={goToPreviousPage}
        action={(movie: BaseMovieProps) => {
          return <AddToFavouritesIcon {...movie} />;
        }}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0]?.value}
        genreFilter={filterValues[1]?.value}
        voteAverageFilter={filterValues[2]?.value}
        releaseDateFilter={filterValues[3]?.value}
      />
    </>
  );
};
export default HomePage;
