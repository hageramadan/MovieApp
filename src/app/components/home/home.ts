import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/movies-service';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  selector: 'app-home',
  imports: [MovieCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  movies:any[]=[];
  constructor(private movieService:MoviesService){}

  ngOnInit(): void {
    this.movieService.getNowPlaying().subscribe((data:any)=>{
      this.movies=data.results})
  }
}
