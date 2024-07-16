import React from "react";
import Grid from "@mui/material/Grid";
import { BaseTvShowListProps } from "../../types/interfaces";
import TvShow from "../tvShowCard";

const TvShowList: React.FC<BaseTvShowListProps> = ({tvShows, action}) => {
  let tvShowCards = tvShows.map((t) => (
    <Grid key={t.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TvShow key={t.id} tvShow={t} action={action}/>
    </Grid>
  ));
  return tvShowCards;
}

  export default TvShowList;