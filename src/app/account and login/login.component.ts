import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html' // Putanja do tvog HTML fajla
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = ''; // Dodajemo varijablu za greške

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/movies']); // Preusmeravanje na stranicu filmova
    } else {
      this.errorMessage = 'Pogrešno korisničko ime ili lozinka'; // Postavljanje poruke o grešci
    }
  }
}
