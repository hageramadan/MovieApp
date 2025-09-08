import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  imports: [CommonModule],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {
  movies = [
    {
      title: 'Black Widow',
      date: 'Sep 25, 2017',
      rating: 9288,
      description: 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by...',
      poster: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRqjJ87P-OJLGPvTnWZ4RrVsYDv3lLdO_Gbt38cbW6U8bIhazqE',
    },
    {
      title: 'Black Widow',
      date: 'Sep 25, 2017',
      rating: 9288,
      description: 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by...',
      poster: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRqjJ87P-OJLGPvTnWZ4RrVsYDv3lLdO_Gbt38cbW6U8bIhazqE',
    },
    {
      title: 'Black Widow',
      date: 'Sep 25, 2017',
      rating: 9288,
      description: 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by...',
      poster: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRqjJ87P-OJLGPvTnWZ4RrVsYDv3lLdO_Gbt38cbW6U8bIhazqE',
    },
    {
      title: 'Black Widow',
      date: 'Sep 25, 2017',
      rating: 9288,
      description: 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by...',
      poster: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRqjJ87P-OJLGPvTnWZ4RrVsYDv3lLdO_Gbt38cbW6U8bIhazqE',
    },
  ];
}
