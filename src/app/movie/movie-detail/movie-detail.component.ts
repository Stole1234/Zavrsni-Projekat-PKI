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

  reserveProjection(projection: any) {
    let reservedProjections = JSON.parse(localStorage.getItem('reservedProjections') || '[]');
  
    const projectionExists = reservedProjections.some((p: any) =>
      p.movieTitle === this.movie.title &&
      p.date === projection.date &&
      p.time === projection.time
    );
  
    if (!projectionExists) {
      reservedProjections.push({
        movieTitle: this.movie.title,
        date: projection.date,
        time: projection.time,
        price: projection.price,
        status: 'rezervisana',
        rating: null
      });
  
      localStorage.setItem('reservedProjections', JSON.stringify(reservedProjections));
      alert('Projekcija je uspešno rezervisana!');
    } else {
      alert('Ova projekcija je već rezervisana.');
    }
  }
  
  
}
