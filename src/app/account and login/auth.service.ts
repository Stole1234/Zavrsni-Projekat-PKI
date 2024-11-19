import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: { username: string; password: string }[] = [];
  
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
      localStorage.setItem('loggedIn', 'true'); // Postavi status prijave u localStorage
      return true; // Uspešna prijava
    }
    return false; // Neuspešna prijava
  }

  // Register metoda koja kreira novog korisnika
  register(username: string, password: string): boolean {
    const userExists = this.users.find(u => u.username === username);
    if (!userExists) {
      this.users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(this.users)); // Čuvanje korisnika u localStorage
      return true; // Uspešna registracija
    }
    return false; // Korisnik već postoji
  }

  // Logout metoda
  logout() {
    localStorage.removeItem('loggedIn'); // Ukloni status prijave iz localStorage
  }

  // Provera da li je korisnik prijavljen
  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
}
