import React from "react";
import MyFantasyMovieForm from "../components/myFantasyMovieForm";
import MyFantasyMoviesList from "../components/myFantasyMoviesList";
import { Box, Container, Grid, Paper } from "@mui/material";

const MyFantasyMoviesPage = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={5}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box>
              <MyFantasyMoviesList />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <MyFantasyMovieForm />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MyFantasyMoviesPage;
