import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { MovieDetailsProps } from "../../types/interfaces";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieReviews from '../movieReviews';

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

const MovieDetails: React.FC<MovieDetailsProps> = (movie) => {

    const [drawerOpen, setDrawerOpen] = useState(false); 
    const [showAllCast, setShowAllCast] = useState(false);

    const displayedCast = showAllCast ? movie.credits.cast : movie.credits.cast.slice(0, 15);

    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>

            <Typography variant="h6" component="p">
                {movie.overview}
            </Typography>

            <Paper component="ul" sx={styles.chipSet}>
                <li>
                    <Chip label="Genres" sx={styles.chipLabel} color="primary" />
                </li>
                {movie.genres.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} />
                    </li>
                ))}
            </Paper>
            <Paper component="ul" sx={styles.chipSet}>
                <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
                <Chip
                    icon={<MonetizationIcon />}
                    label={`${movie.revenue.toLocaleString()}`}
                />
                <Chip
                    icon={<StarRate />}
                    label={`${movie.vote_average} (${movie.vote_count}`}
                />
                <Chip label={`Released: ${movie.release_date}`} />
            </Paper>
            <Paper component="ul" sx={styles.chipSet}>
                <li>
                    <Chip label="Production Countries" sx={styles.chipLabel} color="primary" />
                </li>
                {movie.production_countries.map((p) => (
                    <li key={p.name}>
                        <Chip label={p.name} />
                    </li>
                ))}
            </Paper>

            <Typography variant="h5" component="h3">
                Cast
            </Typography>
            {displayedCast.map((castMember) => (
                <Typography key={castMember.credit_id}>
                    {castMember.name} {" - "} {castMember.character}
                </Typography>
            ))}
            {movie.credits.cast.length > 15 && (
                <Typography 
                    variant="body2" 
                    color="primary" 
                    onClick={() => setShowAllCast(!showAllCast)}
                    style={{ cursor: "pointer" }}
                >
                    {showAllCast ? "Show Less" : "Show More"}
                </Typography>
            )}

            
            <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={styles.fab}
            >
                <NavigationIcon />
                Reviews
            </Fab>
            <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <MovieReviews {...movie} />
            </Drawer>
        </>
    );
};
export default MovieDetails;