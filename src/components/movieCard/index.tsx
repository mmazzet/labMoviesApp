import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import img from "../../images/film-poster-placeholder.png";
import { BaseMovieProps } from "../../types/interfaces";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";
import Box from "@mui/material/Box";
import styles from "./styles";

interface MovieCardProps {
  movie: BaseMovieProps;
  action: (m: BaseMovieProps) => React.ReactNode;
}


const MovieCard: React.FC<MovieCardProps> = ({ movie, action }) => {
  const { favourites } = useContext(MoviesContext);

  const isFavourite = favourites.find((id) => id === movie.id) ? true : false;

  return (
    <Card sx={styles.card}>
      <CardMedia
        sx={styles.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />

      <CardContent>
        <Typography sx={styles.title} variant="h5" component="p" align="center">
          <strong>{movie.title}</strong>
        </Typography>

        <Typography sx={styles.releaseDate} variant="body2" align="center">
          <CalendarIcon fontSize="small" />
          {movie.release_date}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {action(movie)}
        <Link
          to={`/movies/${movie.id}`}
          style={{ textDecoration: "none", marginLeft: "auto" }}
        >
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>

      {isFavourite && (
        <Avatar sx={styles.avatar}>
          <FavoriteIcon />
        </Avatar>
      )}

      <Box sx={styles.ratingBox}>
        <Typography variant="h6" component="p">
          <StarRateIcon fontSize="small" />
          {movie.vote_average.toFixed(1)}
        </Typography>
      </Box>
    </Card>
  );
};

export default MovieCard;
