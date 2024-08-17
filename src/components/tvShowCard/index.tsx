import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarRateIcon from "@mui/icons-material/StarRate";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import Box from "@mui/material/Box";
import img from "../../images/film-poster-placeholder.png";
import { BaseTvShowProps } from "../../types/interfaces";
import { Link } from "react-router-dom";
import styles from "./styles";

interface TvShowCardProps {
  tvShow: BaseTvShowProps;
  action: (m: BaseTvShowProps) => React.ReactNode;
}

const TvShowCard: React.FC<TvShowCardProps> = ({ tvShow, action }) => {
  return (
    <Card sx={styles.card}>
      <CardMedia
        sx={styles.media}
        image={
          tvShow.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`
            : img
        }
      />

      <CardContent>
        <Typography sx={styles.title} variant="h6" component="p" align="center">
          <strong>{tvShow.name}</strong>
        </Typography>

        <Typography sx={styles.releaseDate} variant="body2" align="center">
          <CalendarIcon fontSize="small" />
          {tvShow.first_air_date}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {action(tvShow)}
        <Link
          to={`/tvShows/${tvShow.id}`}
          style={{ textDecoration: "none", marginLeft: "auto" }}
        >
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>

      <Box sx={styles.ratingBox}>
        <Typography variant="h6" component="p">
          <StarRateIcon fontSize="small" />
          {tvShow.vote_average.toFixed(1)}
        </Typography>
      </Box>
    </Card>
  );
};

export default TvShowCard;
