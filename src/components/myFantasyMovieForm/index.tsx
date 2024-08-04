import React, { useContext } from "react";
import { useQuery } from "react-query";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Spinner from "../spinner";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import { MyFantasyMovies, GenreData } from "../../types/interfaces";
import { getGenres } from "../../api/tmdb-api";

const styles = {
  root: {
    marginTop: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    width: "90%",
    maxWidth: "600px",
    padding: "16px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    "& > * ": {
      marginTop: 2,
    },
  },
  textField: {
    width: "100%",
  },
  submit: {
    marginRight: 2,
  },
};

const MyFantasyMovieForm: React.FC = () => {
  const defaultValues = {
    title: "",
    overview: "",
    genres: [],
    release_date: "",
    runtime: 0,
    production_companies: "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<MyFantasyMovies>({ defaultValues });
  const { addToMyFantasyMovies } = useContext(MoviesContext);
  const { data, error, isLoading, isError } = useQuery<GenreData, Error>(
    "genres",
    getGenres
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }
  const genres = data?.genres || [];

  const onSubmit: SubmitHandler<MyFantasyMovies> = (movie) => {
    addToMyFantasyMovies(movie);
    reset();
    console.log(movie);
  };

  return (
    <Box component="div" sx={styles.root}>
      <Typography component="h3" variant="h4">
        Add your Fantasy Movie
      </Typography>
      <Card sx={styles.card}>
        <CardContent>
          <form
            style={styles.form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <Controller
              name="title"
              control={control}
              rules={{ required: "Title is required" }}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  sx={styles.textField}
                  variant="outlined"
                  margin="normal"
                  required
                  onChange={onChange}
                  value={value}
                  id="title"
                  label="Movie's title"
                  autoFocus
                />
              )}
            />
            {errors.title && (
              <Typography variant="h6" component="p">
                {errors.title.message}
              </Typography>
            )}
            <Controller
              name="overview"
              control={control}
              rules={{
                required: "Overview cannot be empty.",
                minLength: { value: 10, message: "Overview is too short" },
              }}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  value={value}
                  onChange={onChange}
                  label="Overview text"
                  id="overview"
                  multiline
                  minRows={10}
                />
              )}
            />
            {errors.overview && (
              <Typography variant="h6" component="p">
                {errors.overview.message}
              </Typography>
            )}
            <Controller
              name="genres"
              control={control}
              rules={{ required: "Genre is required" }}
              defaultValue={[]}
              render={({ field: { onChange, value } }) => (
                <>
                  <InputLabel id="genre-label">Genre(s)</InputLabel>
                  <Select
                    labelId="genre-label"
                    id="genre-select"
                    value={value}
                    multiple
                    onChange={onChange}
                    sx={styles.textField}
                  >
                    {genres.map((genre) => (
                      <MenuItem key={genre.id} value={genre.name}>
                        {genre.name}
                      </MenuItem>
                    ))}
                  </Select>
                </>
              )}
            />
            {errors.genres && (
              <Typography variant="h6" component="p">
                {errors.genres.message}
              </Typography>
            )}
            <Controller
              name="release_date"
              control={control}
              rules={{ required: "Release date is required" }}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  sx={styles.textField}
                  variant="outlined"
                  margin="normal"
                  required
                  onChange={onChange}
                  value={value}
                  id="release_date"
                  label="Release Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
            {errors.release_date && (
              <Typography variant="h6" component="p">
                {errors.release_date.message}
              </Typography>
            )}
            <Controller
              name="runtime"
              control={control}
              rules={{ required: "Runtime is required" }}
              defaultValue={0}
              render={({ field: { onChange, value } }) => (
                <TextField
                  sx={styles.textField}
                  variant="outlined"
                  margin="normal"
                  required
                  onChange={onChange}
                  value={value}
                  id="runtime"
                  label="Runtime (minutes)"
                  type="number"
                />
              )}
            />
            {errors.runtime && (
              <Typography variant="h6" component="p">
                {errors.runtime.message}
              </Typography>
            )}
            <Controller
              name="production_companies"
              control={control}
              rules={{ required: "Production companies are required" }}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  sx={styles.textField}
                  variant="outlined"
                  margin="normal"
                  required
                  onChange={onChange}
                  value={value}
                  id="production_companies"
                  label="Production Company"
                />
              )}
            />
            {errors.production_companies && (
              <Typography variant="h6" component="p">
                {errors.production_companies.message}
              </Typography>
            )}
          </form>
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={styles.submit}
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            sx={styles.submit}
            onClick={() => {
              reset({
                title: "",
                overview: "",
                genres: [],
                runtime: 0,
                production_companies: "",
              });
            }}
          >
            Reset
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MyFantasyMovieForm;
