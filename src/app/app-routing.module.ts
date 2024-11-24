// Uvozi NgModule koji omogućava definisanje modula
import { NgModule } from '@angular/core'; 

// Uvozi RouterModule i Routes za definisanje rutiranja unutar aplikacije
import { RouterModule, Routes } from '@angular/router'; 

// Uvozi komponente za različite rute
import { AboutComponent } from './about/about.component'; 
import { ContactComponent } from './contact/contact.component'; 
import { MovieListComponent } from './movie/movie-list/movie-list.component'; 
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component'; 
import { LoginComponent } from './account and login/login.component'; 
import { RegisterComponent } from './account and login/register.component'; 
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';

// Definiše niz ruta (URL putanja) i komponente koje će biti prikazane kada korisnik pristupi određenoj ruti
const routes: Routes = [
  // Preusmerava na stranicu sa filmovima
  { path: '', redirectTo: '/movies', pathMatch: 'full' }, 
  
  // Prikazuje stranicu sa informacijama o aplikaciji
  { path: 'about', component: AboutComponent }, 
  
  // PRikazuje stranicu sa kontaktnim informacijama
  { path: 'contact', component: ContactComponent }, 
  
  // Prikazuje listu filmova
  { path: 'movies', component: MovieListComponent }, 
  
  // Prikaz detalja filma prema ID-u filma
  { path: 'movies/:id', component: MovieDetailComponent },

  // Ruta za prijavu korisnika
  { path: 'login', component: LoginComponent },

  // Ruta za registraciju korisnika
  { path: 'register', component: RegisterComponent },

  // Ruta za Korpu
  { path: 'cart', component: CartComponent },

  //Ruta za Profil
  { path: 'profile', component: ProfileComponent }
   
  ];

// Definiše i izvozi AppRoutingModule, koji upravlja rutiranjem aplikacije
@NgModule({
  // Uvozi RouterModule sa definisanim rutama u glavni modul aplikacije
  imports: [RouterModule.forRoot(routes)], 
  
  // Omogućava da RouterModule bude dostupan u ostatku aplikacije
  exports: [RouterModule] 
})
// Definiše i izvozi AppRoutingModule
export class AppRoutingModule { } 
