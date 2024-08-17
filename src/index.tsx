import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; 
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TvShowsPage from "./pages/tvShowsPage";
import TvShowDetailsPage from "./pages/tvShowDetailsPage";
import MyFantasyMoviesPage from "./pages/myFantasyMoviesPage";
import ActorDetailsPage from "./pages/actorDetailsPage";
import LoginPage from "./pages/loginPage";
import ProtectedRoute from "./components/protectedRoute";
import { AuthProvider } from "./contexts/authContext";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <AuthProvider>
        <SiteHeader /> 
        
        <MoviesContextProvider>
        <Routes>
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
              <Route 
                path="/movies/favourites" 
                element={
                  <ProtectedRoute>
                    <FavouriteMoviesPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/myFantasyMovies" 
                element={
                  <ProtectedRoute>
                    <MyFantasyMoviesPage />
                  </ProtectedRoute>
                } 
              />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/reviews/:id" element={<MovieReviewPage/>} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
              <Route path="/tvshows" element={<TvShowsPage />} />
              <Route path="/tvshows/:id" element={<TvShowDetailsPage />} />
              <Route path="/actor/:id" element={<ActorDetailsPage />} />
              <Route path="/login" element={<LoginPage />} />
        </Routes>
        </MoviesContextProvider>
        </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)