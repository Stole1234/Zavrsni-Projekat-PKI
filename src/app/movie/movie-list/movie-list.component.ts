import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { AuthService } from '../../account and login/auth.service'; 
import { DomSanitizer } from '@angular/platform-browser'; 
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];  
  searchTerm: string = ''; 
  reservedMovies: any[] = []; 
  filteredMovies: any[] = [];

  constructor(
    private movieService: MovieService,
    private authService: AuthService,
    private sanitizer: DomSanitizer, 
    private router: Router 
  ) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.movies = this.movieService.getMovies();
    this.filteredMovies = this.movies;
  }

  searchMovies(criteria: any) {
    this.filteredMovies = this.movies.filter(movie => {
      return (
        (!criteria.title || movie.title.toLowerCase().includes(criteria.title.toLowerCase())) &&
        (!criteria.genre || movie.genre === criteria.genre) &&
        (!criteria.releaseYear || movie.releaseDate.startsWith(criteria.releaseYear))
      );
    });
  }

  
  addMovieToCart(movie: any) {
    if (this.authService.isLoggedIn()) { 
      let reservedMovies = JSON.parse(localStorage.getItem('reservedMovies') || '[]');
      const existingMovie = reservedMovies.find((m: any) => m.title === movie.title);

      if (!existingMovie) {
        reservedMovies.push(movie);
        localStorage.setItem('reservedMovies', JSON.stringify(reservedMovies));
      } else {
        alert('Film je već u tvojoj rezervaciji!');
      }
    } else {
      alert('Moraš biti prijavljen da bi rezervisao film!');  
    }
  }
  


  viewDetails(movieId: number) {
    this.router.navigate(['/movies', movieId]);
  }

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  watchTrailer(movie: any) {
    if (movie && movie.trailerUrl) {
      const sanitizedUrl = this.sanitizeUrl(movie.trailerUrl);
      window.open(sanitizedUrl as string, '_blank');
    } else {
      alert('Ovaj film nema dostupnog trejlera.');
    }
  }

  viewCart() {
    this.router.navigate(['/cart']);
  }
  

  
  
}

