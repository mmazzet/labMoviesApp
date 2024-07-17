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
  title: string;
  homepage: string | undefined;
  id: number;
  imdb_id: string;
  original_language: string;
  overview: string;
  vote_average: number;
  poster_path?: string;
  tagline: string;
  revenue: number;
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