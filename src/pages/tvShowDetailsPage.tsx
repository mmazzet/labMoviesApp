import React from "react";
import TvShowHeader from "../components/headerTvShow";
import TvShowDetails from "../components/tvShowDetails";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getTvShow, getTvShowImages } from "../api/tmdb-api";
import { TvShowPageProps} from "../types/interfaces";

const styles = {
  imageListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridListTile: { 
    width: "100%",
    height: "auto",
  },

};

const TvShowPage: React.FC<TvShowPageProps> = ({tvShow, images}) => {

  return (
    <>
      {tvShow ? (
        <>
          <TvShowHeader {...tvShow} />
          <Grid container spacing={5} style={{ padding: "15px" }}>
            <Grid item xs={3}>
              <div >
                <ImageList sx={styles.imageListRoot} cols={1}>
                  {images.map((image) => (
                    <ImageListItem
                      key={image.file_path}
                      sx={styles.gridListTile}
                      cols={1}
                    >
                     <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={'Image alternative'}
                      />                    
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </Grid>
            <Grid item xs={9}>
              <TvShowDetails {...tvShow} />
            </Grid>
          </Grid>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default TvShowPage;