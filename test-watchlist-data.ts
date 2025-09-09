// Test data for WatchlistI interface
// Random array of movies for testing watchlist functionality

export interface WatchlistI {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number, number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

export const testWatchlistData: WatchlistI[] = [
  {
    adult: false,
    backdrop_path: "/8K9qHeM6G6QjQN0C5XKFGvK5lzM.jpg",
    genre_ids: [28, 878],
    id: 603,
    original_language: "en",
    original_title: "The Matrix",
    overview: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    popularity: 87.523,
    poster_path: "/p96dm7sCMn4VYAStA6siNz30G1r.jpg",
    release_date: new Date("1999-03-31"),
    title: "The Matrix",
    video: false,
    vote_average: 8.232,
    vote_count: 26766
  },
  {
    adult: false,
    backdrop_path: "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    genre_ids: [28, 12],
    id: 299536,
    original_language: "en",
    original_title: "Avengers: Infinity War",
    overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos.",
    popularity: 142.891,
    poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    release_date: new Date("2018-04-25"),
    title: "Avengers: Infinity War",
    video: false,
    vote_average: 8.3,
    vote_count: 28547
  },
  {
    adult: false,
    backdrop_path: "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
    genre_ids: [18, 28],
    id: 155,
    original_language: "en",
    original_title: "The Dark Knight",
    overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets.",
    popularity: 123.456,
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    release_date: new Date("2008-07-16"),
    title: "The Dark Knight",
    video: false,
    vote_average: 9.0,
    vote_count: 32145
  },
  {
    adult: false,
    backdrop_path: "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
    genre_ids: [18, 80],
    id: 238,
    original_language: "en",
    original_title: "The Godfather",
    overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers.",
    popularity: 98.765,
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    release_date: new Date("1972-03-14"),
    title: "The Godfather",
    video: false,
    vote_average: 9.2,
    vote_count: 19847
  },
  {
    adult: false,
    backdrop_path: "/vxJ08SvwomfKbpboCWynC3uqUg4.jpg",
    genre_ids: [14, 12],
    id: 121,
    original_language: "en",
    original_title: "The Lord of the Rings: The Two Towers",
    overview: "Frodo Baggins and the other members of the Fellowship continue on their sacred quest to destroy the One Ring--but on separate paths. Their destinies lie at two towers--Orthanc Tower in Isengard, where the corrupt wizard Saruman awaits, and Sauron's fortress at Barad-dur, deep within the dark lands of Mordor.",
    popularity: 156.234,
    poster_path: "/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
    release_date: new Date("2002-12-18"),
    title: "The Lord of the Rings: The Two Towers",
    video: false,
    vote_average: 8.4,
    vote_count: 21456
  },
  {
    adult: false,
    backdrop_path: "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
    genre_ids: [16, 10751],
    id: 129,
    original_language: "ja",
    original_title: "千と千尋の神隠し",
    overview: "A ten-year-old girl who, while moving to a new neighborhood, enters the world of Kami (spirits of Japanese Shinto folklore). After her parents are turned into pigs by the witch Yubaba, Chihiro takes a job working in Yubaba's bathhouse to find a way to free herself and her parents and return to the human world.",
    popularity: 89.432,
    poster_path: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    release_date: new Date("2001-07-20"),
    title: "Spirited Away",
    video: false,
    vote_average: 8.6,
    vote_count: 15789
  },
  {
    adult: false,
    backdrop_path: "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
    genre_ids: [16, 35],
    id: 862,
    original_language: "en",
    original_title: "Toy Story",
    overview: "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
    popularity: 76.543,
    poster_path: "/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    release_date: new Date("1995-10-30"),
    title: "Toy Story",
    video: false,
    vote_average: 8.0,
    vote_count: 18234
  },
  {
    adult: false,
    backdrop_path: "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
    genre_ids: [28, 12],
    id: 299534,
    original_language: "en",
    original_title: "Avengers: Endgame",
    overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all.",
    popularity: 198.765,
    poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    release_date: new Date("2019-04-24"),
    title: "Avengers: Endgame",
    video: false,
    vote_average: 8.4,
    vote_count: 24567
  },
  {
    adult: false,
    backdrop_path: "/cinER0ESG0eJ49kXlExM0MEWGxW.jpg",
    genre_ids: [28, 18],
    id: 550,
    original_language: "en",
    original_title: "Fight Club",
    overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    popularity: 134.567,
    poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    release_date: new Date("1999-10-15"),
    title: "Fight Club",
    video: false,
    vote_average: 8.8,
    vote_count: 27891
  },
  {
    adult: false,
    backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    genre_ids: [18, 80],
    id: 278,
    original_language: "en",
    original_title: "The Shawshank Redemption",
    overview: "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates.",
    popularity: 167.234,
    poster_path: "/9cqNxx0GxF0bflyCy3FpPiy3BXg.jpg",
    release_date: new Date("1994-09-23"),
    title: "The Shawshank Redemption",
    video: false,
    vote_average: 9.3,
    vote_count: 26789
  },
  {
    adult: false,
    backdrop_path: "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    genre_ids: [35, 53],
    id: 496243,
    original_language: "ko",
    original_title: "기생충",
    overview: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    popularity: 112.345,
    poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    release_date: new Date("2019-05-30"),
    title: "Parasite",
    video: false,
    vote_average: 8.5,
    vote_count: 17654
  },
  {
    adult: false,
    backdrop_path: "/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
    genre_ids: [14, 18],
    id: 637,
    original_language: "it",
    original_title: "La vita è bella",
    overview: "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
    popularity: 95.678,
    poster_path: "/mfnkSeeVOBcGyaOoNNEwE7cBm2.jpg",
    release_date: new Date("1997-12-20"),
    title: "Life Is Beautiful",
    video: false,
    vote_average: 8.7,
    vote_count: 12456
  }
];

// Helper function to get a random subset of the watchlist
export function getRandomWatchlistMovies(count: number = 5): WatchlistI[] {
  const shuffled = [...testWatchlistData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, testWatchlistData.length));
}

// Helper function to get a single random movie
export function getRandomMovie(): WatchlistI {
  const randomIndex = Math.floor(Math.random() * testWatchlistData.length);
  return testWatchlistData[randomIndex];
}

// Helper function to generate full image URLs
export function getFullImageUrl(imagePath: string, size: string = 'w500'): string {
  if (!imagePath) return '';
  return `https://image.tmdb.org/t/p/${size}${imagePath}`;
}

// Helper function to process movies with full image URLs
export function processMoviesWithImages(movies: WatchlistI[]): (WatchlistI & { 
  poster_url: string; 
  backdrop_url: string; 
  poster_small: string;
  backdrop_large: string;
})[] {
  return movies.map(movie => ({
    ...movie,
    poster_url: getFullImageUrl(movie.poster_path, 'w500'),
    backdrop_url: getFullImageUrl(movie.backdrop_path, 'w1280'),
    poster_small: getFullImageUrl(movie.poster_path, 'w185'),
    backdrop_large: getFullImageUrl(movie.backdrop_path, 'original')
  }));
}

// Usage examples:
console.log('🎬 Test Watchlist Data Generated!');
console.log(`📊 Total movies: ${testWatchlistData.length}`);
console.log('🎲 Random 3 movies:', getRandomWatchlistMovies(3).map(m => m.title));
console.log('🎯 Random single movie:', getRandomMovie().title);

// Export for Angular usage
export default testWatchlistData;