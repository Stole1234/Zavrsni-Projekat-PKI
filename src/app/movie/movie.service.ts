import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies = [
    {
      id: 1,
      title: 'Deadpool & Wolverine',
      imageUrl: 'Deadpool-Wolverine.jpeg',
      description: 'Trajanje: 2h 7m',
      about: 'U ovoj neodoljivoj kombinaciji akcije i humora, Deadpool i Wolverine se suočavaju s novim neprijateljima i izazovima koji testiraju njihove granice. Kada misteriozna pretnja zapreti miru, ovaj nesvakidašnji dvojac se udružuje u borbi protiv zla. Deadpool, poznat po svom oštrom jeziku i sarkazmu, i Wolverine, koji je poznat po svojim sposobnostima regeneracije i borbenim veštinama, kombinuju svoje snage da pruže spektakularan spektakl pun uzbuđenja, smeha i akcije.',
      genre: 'Komedija, Akcija, Naučna fantastika',
      releaseDate: '2024-07-12',
      projections: [
        { date: '2024-11-25', time: '18:00', price: 500 },
        { date: '2024-11-26', time: '20:30', price: 550 }
      ]
    },
    {
      id: 2,
      title: 'Red One',
      imageUrl: 'Red One.jpg',
      description: 'Description for Movie 2',
      about: 'Movie 2 ima zanimljiv zaplet.',
      genre: 'Akcija',
      releaseDate: '2023-11-15',
      projections: [
        { date: '2024-11-25', time: '19:00', price: 600 },
        { date: '2024-11-27', time: '21:00', price: 650 }
      ]
    },
    {
      id: 3,
      title: 'Beetlejuice',
      imageUrl: 'Beetlejuice.jpg',
      description: 'Description for Movie 2',
      about: 'Movie 3 ima zanimljiv zaplet. Neverovatna akcija i romansa u jednom',
      genre: 'Komedija',
      releaseDate: '1988-03-30',
    },
    {
      id: 4,
      title: 'Hellboy',
      imageUrl: 'Hellboy.jpg',
      description: 'Description for Movie 4',
      about: 'Movie 4 ima zanimljiv zaplet. Neverovatna akcija i romansa u jednom',
      genre: 'Fantazija, Akcija',
      releaseDate: '2004-04-02',
    },
    {
      id: 5,
      title: 'Venlom 3',
      imageUrl: 'Venom 3.jpg',
      description: 'Description for Movie 5',
      about: 'Movie 5 ima zanimljiv zaplet. Neverovatna akcija i romansa u jednom',
      genre: 'Naučna fantastika, Akcija',
      releaseDate: '2024-10-05',
    },
    {
      id: 6,
      title: 'Supstance',
      imageUrl: 'Supstance.jpg',
      description: 'Description for Movie 6',
      about: 'Movie 6 ima zanimljiv zaplet. Neverovatna akcija i romansa u jednom',
      genre: 'Drama',
      releaseDate: '2022-08-20',
    },
    {
      id: 7,
      title: 'Moana 2',
      imageUrl: 'Moana 2.jpg',
      description: 'Description for Movie 7',
      about: 'Movie 7 ima zanimljiv zaplet. Neverovatna akcija i romansa u jednom',
      genre: 'Animacija, Porodični',
      releaseDate: '2025-03-10',
    },
    {
      id: 8,
      title: 'Transformers',
      imageUrl: 'Transformers.jpg',
      description: 'Description for Movie 8',
      about: 'Movie 8 ima zanimljiv zaplet. Neverovatna akcija i romansa u jednom',
      genre: 'Akcija, Naučna fantastika',
      releaseDate: '2007-07-04',
    },
    {
      id: 9,
      title: 'Film 1',
      imageUrl: '...',
      description: 'Opis filma 1',
      genre: 'Komedija',
      releaseDate: '2024-01-01',
    },
    {
      id: 10,
      title: 'Film 2',
      imageUrl: '...',
      description: 'Opis filma 2',
      genre: 'Akcija',
      releaseDate: '2023-12-12',
    },
    {
      id: 11,
      title: 'Film 3',
      imageUrl: '...',
      description: 'Opis filma 3',
      genre: 'Drama',
      releaseDate: '2022-05-05',
    },
    {
      id: 12,
      title: 'Film 4',
      imageUrl: '...',
      description: 'Opis filma 4',
      genre: 'Fantazija',
      releaseDate: '2021-10-10',
    },
  ];

  getMovies() {
    return this.movies;
  }

  getMovieById(id: number) {
    return this.movies.find((movie) => movie.id === id);
  }

  searchMovies(term: string): any[] {
    return this.getMovies().filter((movie) =>
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}
