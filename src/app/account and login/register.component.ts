import { Component } from '@angular/core';
import { AuthService } from './auth.service'; // Importujte AuthService

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  fullName: string = '';
  email: string = '';
  phone: string = '';
  favoriteGenres: string = '';

  constructor(private authService: AuthService) {}

  // Metoda koja se poziva pri registraciji
  register() {
    // Kreirajte profil sa podacima
    const profile = {
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      favoriteGenres: this.favoriteGenres
    };

    // Pozivanje register metode iz AuthService
    const success = this.authService.register(this.username, this.password, profile);

    if (success) {
      alert('Registracija je uspešna!');
    } else {
      alert('Korisnik već postoji!');
    }
  }
}
