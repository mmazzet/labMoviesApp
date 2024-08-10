import React, { useState } from "react";
import FilterCard from "../filterMoviesCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { BaseMovieProps } from "../../types/interfaces";

export const titleFilter = (movie: BaseMovieProps, value: string): boolean => {
  return movie.title.toLowerCase().search(value.toLowerCase()) !== -1;
};

export const genreFilter = (movie: BaseMovieProps, value: string) => {
  const genreId = Number(value);
  const genreIds = movie.genre_ids;
  return genreId > 0 && genreIds ? genreIds.includes(genreId) : true;
};

export const voteAverageFilter = (movie: BaseMovieProps, value: string) => {
  const voteAverage = Number(value);
  return voteAverage > 0 ? movie.vote_average >= voteAverage : true;
};

export const releaseDateFilter = (movie: BaseMovieProps, value: string) => {
  const releaseDate = new Date(value);
  return releaseDate ? new Date(movie.release_date) >= releaseDate : true;
};

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 20,
    right: 2,
  },
};

interface MovieFilterUIProps {
  onFilterValuesChange: (f: string, s: string) => void;
  titleFilter: string;
  genreFilter: string;
  voteAverageFilter: string;
  releaseDateFilter: string;
}

const MovieFilterUI: React.FC<MovieFilterUIProps> = ({
  onFilterValuesChange,
  titleFilter,
  genreFilter,
  voteAverageFilter,
  releaseDateFilter,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState<Date | null>(
    releaseDateFilter ? new Date(releaseDateFilter) : null
  );

  return (
    <>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={onFilterValuesChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          voteAverageFilter={voteAverageFilter}
          releaseDateFilter={selectedDate ? selectedDate.toISOString() : ""}
        />
      </Drawer>
    </>
  );
};

export default MovieFilterUI;
