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
      title: 'Dune',
      imageUrl: 'Dune.jpg',
      description: 'Trajanje: 2h 35m',
      about: 'Putovanje kroz opasni pustinjski svet...',
      genre: 'Naučna fantastika, Avantura',
      releaseDate: '2021-10-22',
    },
    {
      id: 10,
      title: 'The Batman',
      imageUrl: 'TheBatman.jpg',
      description: 'Trajanje: 2h 56m',
      about: 'Mračni Vitez u svom najnapetijem trileru...',
      genre: 'Akcija, Triler',
      releaseDate: '2022-03-04',
    },
    {
      id: 11,
      title: 'Top Gun: Maverick',
      imageUrl: 'TopGunMaverick.jpg',
      description: 'Trajanje: 2h 11m',
      about: 'Legendarni pilot se vraća u novoj misiji...',
      genre: 'Akcija, Drama',
      releaseDate: '2022-05-27',
    },
    {
      id: 12,
      title: 'Spider-Man: No Way Home',
      imageUrl: 'SpiderManNoWayHome.jpg',
      description: 'Trajanje: 2h 28m',
      about: 'Spider-Man se suočava sa multiverzumom...',
      genre: 'Akcija, Avantura',
      releaseDate: '2021-12-17',
    },
    {
      id: 13,
      title: 'Everything Everywhere All At Once',
      imageUrl: 'EverythingEverywhere.jpg',
      description: 'Trajanje: 2h 19m',
      about: 'Jedinstvena avantura kroz multiverzum...',
      genre: 'Avantura, Komedija, Drama',
      releaseDate: '2022-03-25',
    },
    {
      id: 14,
      title: 'Avatar: The Way of Water',
      imageUrl: 'AvatarWayOfWater.jpg',
      description: 'Trajanje: 3h 12m',
      about: 'Pandora se vraća u spektakularnom nastavku...',
      genre: 'Naučna fantastika, Avantura',
      releaseDate: '2022-12-16',
    },
    {
      id: 15,
      title: 'Oppenheimer',
      imageUrl: 'Oppenheimer.jpg',
      description: 'Trajanje: 3h',
      about: 'Priča o čoveku koji je oblikovao istoriju...',
      genre: 'Biografija, Drama',
      releaseDate: '2023-07-21',
    },
    {
      id: 16,
      title: 'Barbie',
      imageUrl: 'Barbie.jpg',
      description: 'Trajanje: 1h 54m',
      about: 'Duhovita priča o slavnoj lutki...',
      genre: 'Komedija, Drama',
      releaseDate: '2023-07-21',
    },
    {
      id: 17,
      title: 'The Whale',
      imageUrl: 'TheWhale.jpg',
      description: 'Trajanje: 1h 57m',
      about: 'Dirljiva priča o iskupljenju...',
      genre: 'Drama',
      releaseDate: '2022-12-09',
    },
    {
      id: 18,
      title: 'Black Panther: Wakanda Forever',
      imageUrl: 'WakandaForever.jpg',
      description: 'Trajanje: 2h 41m',
      about: 'Naslednici Wakande suočavaju se s novim izazovima...',
      genre: 'Akcija, Avantura',
      releaseDate: '2022-11-11',
    },
    {
      id: 19,
      title: 'A Quiet Place Part II',
      imageUrl: 'QuietPlacePart2.jpg',
      description: 'Trajanje: 1h 37m',
      about: 'Preživljavanje u svetu u tišini...',
      genre: 'Horor, Triler',
      releaseDate: '2021-05-28',
    },
    {
      id: 20,
      title: 'The Northman',
      imageUrl: 'TheNorthman.jpg',
      description: 'Trajanje: 2h 17m',
      about: 'Saga o osveti iz drevnog severa...',
      genre: 'Akcija, Avantura',
      releaseDate: '2022-04-22',
    },
    {
      id: 21,
      title: 'The Menu',
      imageUrl: 'TheMenu.jpg',
      description: 'Trajanje: 1h 46m',
      about: 'Ekscentrična večera u luksuznom restoranu...',
      genre: 'Komedija, Horor',
      releaseDate: '2022-11-18',
    },
    {
      id: 22,
      title: 'Knives Out: Glass Onion',
      imageUrl: 'GlassOnion.jpg',
      description: 'Trajanje: 2h 19m',
      about: 'Nova misterija sa slavnim detektivom...',
      genre: 'Misterija, Komedija',
      releaseDate: '2022-11-23',
    },
    {
      id: 23,
      title: 'No Time to Die',
      imageUrl: 'NoTimeToDie.jpg',
      description: 'Trajanje: 2h 43m',
      about: 'Bondova poslednja avantura...',
      genre: 'Akcija, Avantura',
      releaseDate: '2021-10-08',
    },
    {
      id: 24,
      title: 'Encanto',
      imageUrl: 'Encanto.jpg',
      description: 'Trajanje: 1h 42m',
      about: 'Čarobna priča o porodici Madrigal...',
      genre: 'Animacija, Porodični',
      releaseDate: '2021-11-24',
    },
    {
      id: 25,
      title: 'Don’t Look Up',
      imageUrl: 'DontLookUp.jpg',
      description: 'Trajanje: 2h 18m',
      about: 'Satirična priča o pretnji planeti...',
      genre: 'Komedija, Naučna fantastika',
      releaseDate: '2021-12-24',
    },
    {
      id: 26,
      title: 'Mission: Impossible – Dead Reckoning Part One',
      imageUrl: 'MissionImpossibleDead.jpg',
      description: 'Trajanje: 2h 43m',
      about: 'Nemoguća misija u novoj epizodi...',
      genre: 'Akcija, Avantura',
      releaseDate: '2023-07-12',
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
