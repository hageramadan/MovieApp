import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../shared/theme-service';
import { CommonModule } from '@angular/common';
import { WatchlistCounter } from '../../shared/watchlist-counter';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  count = 0;
  constructor(private theme: ThemeService, private counterService: WatchlistCounter) {}

isLoggedIn = false;


ngOnInit() {
  this.isLoggedIn = !!localStorage.getItem("tmdb_session_id");
}

logout() {
  localStorage.removeItem("tmdb_session_id");
  location.reload(); 
}





   constructor(private theme:ThemeService){

  get isDarkMode() {
    return this.theme.isDarkMode();
  }

  toggleTheme() {
    this.theme.toggleTheme();
  }

  ngOnInit() {
    this.counterService.count$.subscribe((val) => {
      this.count= val
    })
  }
}
