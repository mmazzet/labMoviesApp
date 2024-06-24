import React, { useContext, MouseEvent }  from "react";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import { BaseMovieProps } from "../../types/interfaces";

const AddToPlaylistIcon: React.FC<{ movie: BaseMovieProps }> = ({ movie }) => {
  const context = useContext(MoviesContext);

 const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Movie object in onUserSelect: ", movie);
    context.addToMustWatch(movie);
  };
  return (
    <IconButton aria-label="add to must watch list" onClick={onUserSelect}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;