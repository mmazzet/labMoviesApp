import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getActor } from "../api/tmdb-api";
import { Container, Paper, Grid, Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import PersonalInfo from "../components/personalInfo";
import { Actor } from "../types/interfaces";

const ActorDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: actor, error, isLoading, isError } = useQuery<Actor, Error>(["actor", id], () =>
    getActor(id || "")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actor ? (
        <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Card elevation={3} sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 300 }}
                  image={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                />
                <CardContent sx={{ flex: 1 }}>
                  <PersonalInfo actor={actor} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3}>
                <Box padding={"20px"}>
                  <Typography variant="h5" paddingBottom={"20px"} sx={{ fontWeight: "bold" }}>
                    Biography
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {actor.biography}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;