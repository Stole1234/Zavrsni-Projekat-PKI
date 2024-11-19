import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie/movie.service'; 


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  reservedMovies: any[] = [];

  constructor(private movieService: MovieService) {} 

  ngOnInit() {
    const storedMovies = localStorage.getItem('reservedMovies');
    if (storedMovies) {
      const movieIds = JSON.parse(storedMovies);
      this.reservedMovies = movieIds.map((id: number) => this.getMovieById(id)); 
    }
  }

  getMovieById(id: number) {
    
    return this.movieService.getMovieById(id);
  }

  removeMovie(movieId: number) {
    this.reservedMovies = this.reservedMovies.filter(movie => movie.id !== movieId);
    localStorage.setItem('reservedMovies', JSON.stringify(this.reservedMovies.map(m => m.id))); 
  }

  clearCart() {
    this.reservedMovies = [];
    localStorage.removeItem('reservedMovies');
  }
}
