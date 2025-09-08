import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Header } from './components/header/header';
import { Search } from './components/search/search';
import { MovieCard } from './components/movie-card/movie-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Search],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('movieApp');
}
