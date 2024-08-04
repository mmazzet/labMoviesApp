export interface BaseMovieProps {
  title: string;
  budget: number;
  homepage: string | undefined;
  id: number;
  imdb_id: string;
  original_language: string;
  overview: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  poster_path?: string;
  tagline: string;
  runtime: number;
  revenue: number;
  vote_count: number;
  favourite?: boolean;
}

export interface BaseTvShowProps {
  name: string;
  homepage: string | undefined;
  id: number;
  // imdb_id: string;
  original_language: string;
  original_country: string;
  overview: string;
  vote_average: number;
  poster_path?: string;
  first_air_date: number;
  vote_count: number;

}

export interface BaseMovieListProps {
  movies: BaseMovieProps[];
  action: (m: BaseMovieProps) => React.ReactNode;
}

export interface BaseTvShowListProps {
  tvShows: BaseTvShowProps[];
  action: (t: BaseTvShowProps) => React.ReactNode;
}

export interface MovieDetailsProps extends BaseMovieProps {
  genres: {
    id: number;
    name: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
}


export interface MovieImage {
  file_path: string;
  aspect_ratio?: number; //some props are optional...
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface TvShowImage {
  file_path: string;
  aspect_ratio?: number; 
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface MoviePageProps {
  movie: MovieDetailsProps;
  images: MovieImage[];
}

export interface TvShowPageProps {
  tvShow: TvShowDetailsProps;
  images: TvShowImage[];
}

export interface TvShowListPageTemplateProps extends BaseTvShowListProps {
  title: string;
}

export type FilterOption = "title" | "genre";

export interface Review{
  id: string;
  content: string
  author: string
}

export interface GenreData {
  genres: {
    id: string;
    name: string
  }[];
}

export interface DiscoverMovies {
  page: number;	
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}

export interface DiscoverTvShows {
  page: number;	
  total_pages: number;
  total_results: number;
  results: BaseTvShowProps[];
}

export interface Review {
  author: string,
  content: string,
  agree: boolean,
  rating: number,
  movieId: number,
}

export interface MovieListPageTemplateProps extends BaseMovieListProps {
  title: string;
}

export interface TvShowImage {
  file_path: string;
  aspect_ratio?: number; 
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface TvShowDetailsProps {
  name: string;
  id: number;
  tagline: string;
  homepage: string | undefined;
  overview: string;
  number_of_seasons: number;
  number_of_episodes: number;
  vote_average: number;
  vote_count: number;
  first_air_date: string;
  seasons: {
    name: string;
  }[];
  genres: {
    id: number;
    name: string;
  }[];
  production_countries: {
    name: string;
  }[];
  original_language: string;
}

export interface TvShowPageProps {
  tvShow: TvShowDetailsProps;
  images: TvShowImage[];
}

export interface CastProps {
  cast: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  }[];
}

export interface Actor {
  name: string;
  profile_path: string;
  known_for_department: string;
  birthday: string;
  place_of_birth: string;
  deathday?: string;
  biography: string;
}

export interface ActorDetailsProps {
  actor: Actor;
}

export interface MyFantasyMovies {
  title: string,
  overview: string,
  genres: {
    id: number;
    name: string;
  }[];
  release_date: string,
  runtime: number,
  production_companies: string;
}