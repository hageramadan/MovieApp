export interface AccountDetailsI {
  id: number;
  name: string;
  username: string;
  iso_639_1: string;
  iso_3166_1: string;
  avatar: {
    gravatar: {
      hash: string;
    };
    tmdb: {
      avatar_path: string;
    };
  };
}
