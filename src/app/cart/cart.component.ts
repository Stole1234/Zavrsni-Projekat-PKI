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
    
    const storedProjections = localStorage.getItem('reservedProjections');
    if (storedProjections) {
      this.reservedMovies = JSON.parse(storedProjections);
    }
  }

  getMovieById(id: number) {
    return this.movieService.getMovieById(id);
  }

  removeMovie(movie: any) {
    
    this.reservedMovies = this.reservedMovies.filter(m => m.id !== movie.id);
    
    
    localStorage.setItem('reservedProjections', JSON.stringify(this.reservedMovies));
    alert('Rezervacija za film je otkazana.');
  }
  

  clearCart() {
    // Čisti sve rezervacije iz korpe
    this.reservedMovies = [];
    localStorage.removeItem('reservedProjections');
  }

  rateProjection(movie: any) {
    const index = this.reservedMovies.findIndex((m) => m.id === movie.id);
    if (index !== -1) {
      this.reservedMovies[index].rating = movie.rating;
      localStorage.setItem('reservedProjections', JSON.stringify(this.reservedMovies));
    }
  }

  toggleMovieStatus(movie: any): void {
    // Promena statusa filma
    movie.status = movie.status === 'gledano' ? 'ne gledano' : 'gledano';
    localStorage.setItem('reservedProjections', JSON.stringify(this.reservedMovies));
  }
}
