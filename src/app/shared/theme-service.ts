import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode=false;
  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme==='dark'){
      this.darkMode=true;
       document.body.classList.add('dark-mode');
    }
   }
    isDarkMode(): boolean {
    return this.darkMode;
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }

  
}
