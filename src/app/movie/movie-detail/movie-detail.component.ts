import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { AuthService } from '../../account and login/auth.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  showAbout: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const movieIdString = this.route.snapshot.paramMap.get('id');
    const movieId = movieIdString ? +movieIdString : null; 

    if (movieId !== null) { 
      this.movie = this.movieService.getMovieById(movieId); 
    } else {
      console.error('Movie ID is null or invalid'); 
    }
  }

  toggleAbout() {
    this.showAbout = !this.showAbout;
  }

  reserveMovie(movie: any) {
    let reservedMovies = JSON.parse(localStorage.getItem('reservedMovies') || '[]');
  
    
    const movieExists = reservedMovies.find((m: any) => m.title === movie.title);
    if (!movieExists) {
      reservedMovies.push(movie);  
    }
  
    localStorage.setItem('reservedMovies', JSON.stringify(reservedMovies));
  }
  
  
  
}
