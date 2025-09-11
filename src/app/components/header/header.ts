import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../shared/theme-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule , CommonModule ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
   constructor(private theme:ThemeService){

   }
    get isDarkMode() {
    return this.theme.isDarkMode();
  }

  toggleTheme() {
    this.theme.toggleTheme();
  }
}
