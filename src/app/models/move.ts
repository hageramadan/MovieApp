// movie.model.ts
export interface MovieModel {
  id: number;
  title: string;
  original_title: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  overview?: string;
}

export interface MovieApiResponse {
  page: number;
  results: MovieModel[];
  total_pages: number;
  total_results: number;
}
