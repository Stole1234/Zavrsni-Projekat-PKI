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
    password: '' 
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Učitajavanje trenutnog profila korisnika
    const currentUser = this.authService.getCurrentUserProfile();
    if (currentUser) {
      this.userProfile = currentUser;
    }
  }

  // Metoda za ažuriranje profila
  saveProfile() {
    this.authService.updateUserProfile(this.userProfile); 
    alert('Profil je ažuriran!');
  }
}
