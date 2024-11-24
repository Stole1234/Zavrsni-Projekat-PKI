import { Component, OnInit } from '@angular/core';
import { AuthService } from '../account and login/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: any = {
    fullName: '',
    email: '',
    phone: '',
    favoriteGenres: '',
    password: '' // Dodato polje za lozinku
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Učitaj trenutni profil korisnika
    const currentUser = this.authService.getCurrentUserProfile();
    if (currentUser) {
      this.userProfile = currentUser;
    }
  }

  // Metoda za ažuriranje profila
  saveProfile() {
    this.authService.updateUserProfile(this.userProfile); // Ažuriraj profil korisnika
    alert('Profil je ažuriran!');
  }
}
