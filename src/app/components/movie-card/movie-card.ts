import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css'
})
export class MovieCard {
   constructor(private snackBar: MatSnackBar) {}
 openSnackBar() {
    this.snackBar.open('Saved to wishlist ✅', 'close', {
      duration: 3000, // مدة الظهور بالمللي ثانية
      horizontalPosition: 'right', // start | center | end | left | right
      verticalPosition: 'top',  
        panelClass: ['custom-snackbar']   // top | bottom
    });
  }
}
