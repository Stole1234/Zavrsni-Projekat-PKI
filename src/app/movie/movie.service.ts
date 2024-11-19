import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies = [
    {
      id: 1,
      title: 'Deadpool & Wolverine',
      imageUrl: 'Deadpool-Wolverine.jpeg',
      description: 'Komedija, Akcija, Naučna fantastika  Trajanje: 2h 7m',
      about: 'U ovoj neodoljivoj kombinaciji akcije i humora, Deadpool i Wolverine se suočavaju s novim neprijateljima i izazovima koji testiraju njihove granice. Kada misteriozna pretnja zapreti miru, ovaj nesvakidašnji dvojac se udružuje u borbi protiv zla. Deadpool, poznat po svom oštrom jeziku i sarkazmu, i Wolverine, koji je poznat po svojim sposobnostima regeneracije i borbenim veštinama, kombinuju svoje snage da pruže spektakularan spektakl pun uzbuđenja, smeha i akcije.',
     
    },
    {
      id: 2,
      title: 'Red One',
      imageUrl: 'Red One.jpg',
      description: 'Description for Movie 2',
      about: 'Movie 2 ima zanimljiv zaplet.',
      
    },
    {
      id: 3,
      title: 'Beetlejuice',
      imageUrl: 'Beetlejuice.jpg',
      description: 'Description for Movie 2',
      about: 'Movie 3 ima zanimljiv zaplet. Neverovatna akcija i romansa u jednom',
      
    },

    {
      id: 4,
      title: 'Hellboy',
      imageUrl: 'Hellboy.jpg',
      description: 'Description for Movie 4',
      about: 'Movie 4 ima zanimljiv zaplet. Neverovatna akcija i romansa u jednom',
      
    },

    {
      id: 5,
      title: 'Venlom 3',
      imageUrl: 'Venom 3.jpg',
      description: 'Description for Movie 5',
      about: 'Movie 5 ima zanimljiv zaplet. Neverovatna akcija i romansa u jednom',
      
    },
  
    {
      id: 6,
      title: 'Supstance',
      imageUrl: 'Supstance.jpg',
      description: 'Description for Movie 6',
      about: 'Movie 6 ima zanimljiv zaplet. Neverovatna akcija i romansa u jednom',
      
    },

    {
      id: 7,
      title: 'Moana 2',
      imageUrl: 'Moana 2.jpg',
      description: 'Description for Movie 7',
      about: 'Movie 7 ima zanimljiv zaplet. Neverovatna akcija i romansa u jednom',
      
    },
  
    {
      id: 8,
      title: 'Transformers',
      imageUrl: 'Transformers.jpg',
      description: 'Description for Movie 8',
      about: 'Movie 8 ima zanimljiv zaplet. Neverovatna akcija i romansa u jednom',
      
    },
  
  ];

  getMovies() {
    return this.movies;
  }

  getMovieById(id: number) {
    return this.movies.find(movie => movie.id === id);
  }
  searchMovies(term: string): any[] {
    if (!term) return this.getMovies(); 
    return this.getMovies().filter(movie =>
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
  }
  
}