# MovieApp

An Angular 20 standalone-components application that integrates with The Movie Database (TMDB) to browse movies, view details and recommendations, search titles, and manage a personal watchlist. The app implements authentication with TMDB, route guards, a shared header with theme toggling and a watchlist counter, and reusable UI components like movie cards, rating circles, and pagination.


## Quick start

- Prerequisites
  - Node.js 18+ (recommended Node 20 LTS)
  - Angular CLI 20+ installed globally: `npm i -g @angular/cli`
- Install and run
  - Install dependencies: `npm install`
  - Start dev server: `npm start` or `ng serve`
  - Open http://localhost:4200
- Build: `npm run build`
- Test: `npm test`


## Project structure (key files)

- src/main.ts — bootstraps the application with standalone root component
- src/app/app.ts, app.html, app.css — root component and layout (header + router outlet + back-to-top)
- src/app/app.routes.ts — routes and guards configuration
- src/app/app.config.ts — providers (router, HttpClient, zone settings, error listeners)
- src/app/components/* — feature components
  - home/ — landing page, lists categories with pagination
  - search/ — keyword search with pagination
  - movie-card/ — reusable card with add/remove watchlist
  - movie-details/ — details, rating stars, recommendations, watchlist toggle
  - wishlist/ — account’s watchlist listing with removal
  - header/ — navbar, auth state, theme switch, watchlist counter
  - login/, register/ — auth UI (login with TMDB flow)
  - movie-pagination/ — reusable pagination control
  - rating-circle/ — circular rating UI
  - not-found/ — fallback 404 page
  - guards/ — route guards (authGuard, guestGuard)
- src/app/shared/* — services, state, and cross-cutting utilities
  - services/movie.ts — TMDB movie API (browse/search/details/recommendations)
  - watchlist.ts — TMDB v4 watchlist operations (add/remove/get)
  - account-s.ts — TMDB v4 account details fetch
  - user-credtional-i.ts — session/account id state (BehaviorSubject + localStorage)
  - theme-service.ts — dark/light theme state (localStorage)
  - watchlist-counter.ts — cross-app watchlist count state
- src/app/models/* — interfaces
- src/app/utils/star-calculator.ts — helpers to compute 5-star ratings from TMDB vote_average


## How the app works

The app uses Angular standalone components (no NgModules) with a single root component and Router. HttpClient communicates with TMDB APIs. Minimal app state is handled via RxJS BehaviorSubjects exposed by shared services and persisted as needed to localStorage.

- Bootstrap
  - main.ts calls bootstrapApplication(App, { providers: [...appConfig.providers, provideHttpClient()] })
  - app.ts renders Header + <router-outlet> and exposes a back-to-top button on scroll
- Routing (src/app/app.routes.ts)
  - path '' → HomeComponent
  - path 'login' → Login (guarded by guestGuard)
  - path 'register' → Register (guestGuard)
  - path 'wishlist' → Wishlist (authGuard)
  - path 'search' → Search
  - path 'movie/:id' → MovieDetails
  - path 'account' → AccountDetails (authGuard)
  - '**' → NotFound
- Guards
  - authGuard: allows access only if tmdb_session_id exists in localStorage, otherwise navigates to /login
  - guestGuard: allows access only if no tmdb_session_id exists, otherwise navigates to /


### Authentication and session flow (TMDB)

Implemented in src/app/components/login/login.ts and shared/user-credtional-i.ts.

1) Get request token (v3):
   GET /authentication/token/new?api_key=API_KEY
2) Validate token with login:
   POST /authentication/token/validate_with_login?api_key=API_KEY
   Body: { username, password, request_token }
3) Create session:
   POST /authentication/session/new?api_key=API_KEY
   Body: { request_token }
4) Fetch account details:
   GET /account?api_key=API_KEY&session_id=SESSION_ID
5) Persist identifiers:
   - user-credtional-i.ts stores sessionId and accountId in BehaviorSubjects and mirrors them into localStorage under tmdb_session_id and tmdb_account_id

Guards and services read these values from the BehaviorSubjects/localStorage to authorize routes and execute account/watchlist calls.


### Movie data and search

- Movie service (src/app/shared/services/movie.ts) wraps TMDB v3 endpoints:
  - Trending: GET /trending/movie/{day|week}?page
  - Popular: GET /movie/popular?page
  - Top Rated: GET /movie/top_rated?page
  - Upcoming: GET /movie/upcoming?page
  - Details: GET /movie/{id}
  - Recommendations: GET /movie/{id}/recommendations
  - Search: GET /search/movie?query=...&page=...

HomeComponent loads the main categories with independent pagination. Search component binds to query params (q, page) and updates the URL when navigating pages.


### Watchlist and account

- Watchlist service (src/app/shared/watchlist.ts) uses TMDB v4 Bearer token to:
  - GET account/{accountId}/watchlist/movies?session_id=...
  - POST account/{accountId}/watchlist?session_id=... with body { media_type, media_id, watchlist: true|false }
- AccountS service (src/app/shared/account-s.ts) fetches account details via v4 Bearer + v3 session_id
- WatchlistCounter (BehaviorSubject) holds a global count, updated when:
  - Wishlist component loads or removes an item
  - MovieCard/MovieDetails add/remove items

Header subscribes to:
- UserCredtionalI.sessionId$ to reflect login status
- WatchlistCounter.count$ to display current count
- AccountS.getAccountDetails() for account info


### UI components and UX

- Header shows brand links, search navigation, theme toggler, auth actions, and a dynamic watchlist badge.
- MovieCard displays poster, title/date, rating circle, and a heart button to toggle watchlist with snack-bar notifications.
- MovieDetails shows full details, star breakdown, poster states, website link, and recommended titles; includes heart toggle synced with the watchlist service.
- Wishlist lists saved items with ability to remove; updates the shared counter.
- Search manages query params and uses PaginationComponent.
- RatingCircle renders vote average as a circular indicator (used by MovieCard).
- A back-to-top button appears after scrolling to improve navigation.
- ThemeService persists dark/light preference in localStorage and toggles a body class.


## Configuration: TMDB credentials

The project currently includes hardcoded keys/tokens for development. Replace them with your TMDB credentials before production.

- v3 API Key
  - src/app/shared/services/movie.ts → private apiKey = 'YOUR_V3_API_KEY'
  - src/app/components/login/login.ts → apiKey: string = 'YOUR_V3_API_KEY'
- v4 Read Access Token (Bearer)
  - src/app/shared/watchlist.ts → private token = 'YOUR_V4_READ_ACCESS_TOKEN'
  - src/app/shared/account-s.ts → private token = 'YOUR_V4_READ_ACCESS_TOKEN'

Recommended: centralize credentials using Angular build-time environment files or injection tokens rather than hardcoding them in services.


## Data flow summary

- Login
  - Login component orchestrates v3 token → validate → session → account
  - UserCredtionalI persists sessionId/accountId to state + localStorage
  - Guards use localStorage to gate routes
- Watchlist
  - MovieCard/MovieDetails toggles call Watchlist service; success updates WatchlistCounter
  - Wishlist page fetches account/{id}/watchlist and seeds the counter
- Search/Pagination
  - Search updates query params and calls Movie.getSearchResults
  - PaginationComponent emits pageChange; listeners call loaders with new page


## Styling and assets

- Global styles: src/styles.css, src/app/app.css, custom-theme.scss
- Icons: FontAwesome and Bootstrap Icons
- UI libs: @ng-bootstrap/ng-bootstrap, Angular Material snack-bar
- Assets: public/assets/* (posters, placeholders, icons)


## Scripts

- start: `ng serve`
- build: `ng build`
- watch: `ng build --watch --configuration development`
- test: `ng test`


## Extending the app

- Add a new movie category:
  - Add a method in Movie service to fetch the list
  - In HomeComponent, call loadMovies('newCategory', page) and render a new section with MovieCard + PaginationComponent
- Improve credential handling:
  - Introduce an environment service or Angular providers for API keys/tokens
  - Ensure tokens are never committed to version control
- Caching and performance:
  - Use HttpClient caching interceptors (RxJS shareReplay) to reduce API calls
  - Add skeleton loaders and better error boundaries
- Accessibility and i18n:
  - Add ARIA attributes, keyboard focus styles, and language switch support


## Known limitations and notes

- API keys and tokens are hardcoded for development convenience
- The login flow requires a valid TMDB account
- SSR/Prerender not configured
- Unit tests are placeholders (spec files exist but not comprehensive)


## TMDB endpoints used (reference)

- v3:
  - /authentication/token/new
  - /authentication/token/validate_with_login
  - /authentication/session/new
  - /account
  - /movie/popular, /movie/top_rated, /movie/upcoming, /trending/movie/{day|week}
  - /movie/{id}, /movie/{id}/recommendations
  - /search/movie
- v4 (Bearer):
  - /account/{account_id}
  - /account/{account_id}/watchlist
  - /account/{account_id}/watchlist/movies


## License

This project is provided for educational purposes. Replace API credentials and review TMDB terms before deploying.
