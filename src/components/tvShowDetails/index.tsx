import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Tv from "@mui/icons-material/tv";
import Book from "@mui/icons-material/Book";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { TvShowDetailsProps } from "../../types/interfaces";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: {
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const TvShowDetails: React.FC<TvShowDetailsProps> = (tvShow) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>
      <Typography variant="h6" component="p">
        {tvShow.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <Chip icon={<Tv />} label={`${tvShow.number_of_seasons} season`} />
        <Chip icon={<Book />} label={`${tvShow.number_of_episodes} episodes`} />
        <Chip
          icon={<StarRate />}
          label={`${tvShow.vote_average} (${tvShow.vote_count})`}
        />
        <Chip label={`First aired: ${tvShow.first_air_date}`} />
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label={`Language: ${tvShow.original_language}`} color="primary" />
        </li>
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {tvShow.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip
            label="Production Countries"
            sx={styles.chipLabel}
            color="primary"
          />
        </li>
        {tvShow.production_countries.map((c) => (
          <li key={c.name}>
            <Chip label={c.name} />
          </li>
        ))}
      </Paper>
    </>
  );
};
export default TvShowDetails;