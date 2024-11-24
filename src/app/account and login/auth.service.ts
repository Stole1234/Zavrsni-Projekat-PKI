import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  private users: { username: string; password: string; profile: any }[] = [];
  private currentUser: any = null;

  constructor() {
    // Inicijalizuj korisnike iz localStorage ako postoje
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  // Login metoda koja prihvata username i password
  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.loggedIn = true;
      localStorage.setItem('loggedIn', 'true'); // Dodajte status prijave
      this.currentUser = user.profile; // Sačuvajte profil
      return true;
    }
    return false;
  }

  // Register metoda koja kreira novog korisnika
  register(username: string, password: string, profile: any): boolean {
    const userExists = this.users.find(u => u.username === username);
    if (!userExists) {
      // Dodajte profil kada se korisnik registruje
      this.users.push({ username, password, profile });
      localStorage.setItem('users', JSON.stringify(this.users)); // Čuvanje korisnika u localStorage
      return true; // Uspešna registracija
    }
    return false; // Korisnik već postoji
  }

  // Logout metoda
  logout() {
    this.loggedIn = false;
    this.currentUser = null;
    localStorage.removeItem('loggedIn'); // Ukloni status prijave iz localStorage
    localStorage.removeItem('currentUser'); // Ukloni profil iz localStorage
  }

  // Provera da li je korisnik prijavljen
  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }

  // Metoda za dobijanje trenutnog korisničkog profila
  getCurrentUserProfile(): any {
    return this.currentUser;
  }

  // Ažuriranje korisničkog profila
  updateUserProfile(updatedProfile: any): void {
    if (this.currentUser) {
      Object.assign(this.currentUser, updatedProfile);
  
      // Ažuriranje korisnika u lokalnom skladištu
      const userIndex = this.users.findIndex(user => user.username === this.currentUser.username);
      if (userIndex !== -1) {
        this.users[userIndex] = this.currentUser;
        localStorage.setItem('users', JSON.stringify(this.users));
      }
    }
  }
  
}
