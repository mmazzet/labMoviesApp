import React, { useState, useCallback } from "react";
import { BaseMovieProps, MyFantasyMovies, Review } from "../types/interfaces";


interface MovieContextInterface {
    favourites: number[];
    mustWatch: number[];  
    myFantasyMovies: MyFantasyMovies[];
    addToFavourites: ((movie: BaseMovieProps) => void);
    addToMustWatch: ((movie: BaseMovieProps) => void);
    removeFromFavourites: ((movie: BaseMovieProps) => void);
    addReview: ((movie: BaseMovieProps, review: Review) => void); 
    addToMyFantasyMovies: (movie: MyFantasyMovies) => void;
}
const initialContextState: MovieContextInterface = {
    favourites: [],
    mustWatch: [],
    myFantasyMovies:[],
    addToFavourites: () => {},
    addToMustWatch: () => {},
    removeFromFavourites: () => {},
    addReview: (movie, review) => { movie.id, review},  
    addToMyFantasyMovies: () => {},
};

export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [myReviews, setMyReviews] = useState<Review[]>( [] ) 
    const [favourites, setFavourites] = useState<number[]>([]);
    const [mustWatch, setMustWatch ] = useState<number[]>([]); 
    const [myFantasyMovies, setMyFantasyMovies] = useState<MyFantasyMovies[]>([]);

    const addToFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => {
          if (!prevFavourites.includes(movie.id)) {
            return [...prevFavourites, movie.id];
          }
          return prevFavourites;
        });
      }, []);

    const addToMustWatch = useCallback((movie: BaseMovieProps) => {
        setMustWatch((prevMustWatch) => {
            if (!prevMustWatch.includes(movie.id)) {
                const updatedList = [...prevMustWatch, movie.id];
                console.log(
                    `Added to must watch list, Movie ID: ${movie.id}`,
                    updatedList
                );
                return updatedList;
            }
            return prevMustWatch;
        });
    }, []);

    const addReview = (movie:BaseMovieProps, review: Review) => {   // NEW
        setMyReviews( {...myReviews, [movie.id]: review } )
    };

    const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => prevFavourites.filter((mId) => mId !== movie.id));
    }, []);

    const addToMyFantasyMovies = (movie: MyFantasyMovies) => {
        setMyFantasyMovies((prevMovies) => [...prevMovies, movie]);
        console.log(movie);
    };

    return (
        <MoviesContext.Provider
            value={{
                favourites,
                mustWatch,
                myFantasyMovies,
                addToFavourites,
                removeFromFavourites,
                addReview, 
                addToMustWatch,
                addToMyFantasyMovies,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;