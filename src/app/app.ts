import { Component, signal , HostListener  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header , MatSnackBarModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  showButton: boolean = false;
  protected readonly title = signal('movieApp');
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.showButton = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
