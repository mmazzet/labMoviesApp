import { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const MyFantasyMoviesList = () => {
  const { myFantasyMovies } = useContext(MoviesContext);

  return (
    <>
      <Typography variant="h3">My Fantasy Movies</Typography>
      <Box mt={2}>
        <Grid container spacing={2}>
          {myFantasyMovies.map((movie, i) => (
            <Grid item xs={4} key={i}>
              <Card>
                <CardContent>
                  <Typography variant="h4">{movie.title}</Typography>
                  <Typography variant="body1">
                    <strong>Overview: </strong>
                    {movie.overview}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Genres: </strong> {movie.genres.join(", ")}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Release Date: </strong>
                    {movie.release_date}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Runtime: </strong>
                    {movie.runtime} minutes
                  </Typography>
                  <Typography variant="body1">
                    <strong>Production Companies: </strong>
                    {movie.production_companies}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MyFantasyMoviesList;
