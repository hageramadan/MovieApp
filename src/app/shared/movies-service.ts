import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 private  base:string = "https://api.themoviedb.org/3/movie/now_playing?api_key=";
 private key:string = "be65d7b3d46dfba9302541c949513d31";
  constructor(private http:HttpClient) { }
  getNowPlaying():Observable<any>{
    return this.http.get<Observable<any>>(`${this.base}${this.key}&language=en-US&page=1`)

  }
}
