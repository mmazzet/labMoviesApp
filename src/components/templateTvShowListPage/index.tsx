import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import TvShowList from "../tvShowList";
import { TvShowListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
};

const TvShowListPageTemplate: React.FC<TvShowListPageTemplateProps> = ({
  tvShows,
  title,
  onNextPage,
  onPreviousPage,
  action,
}) => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header
          title={title}
          onPreviousPage={onPreviousPage}
          onNextPage={onNextPage}
        />
      </Grid>
      <Grid item container spacing={5}>
        <TvShowList action={action} tvShows={tvShows} />
      </Grid>
    </Grid>
  );
};
export default TvShowListPageTemplate;
