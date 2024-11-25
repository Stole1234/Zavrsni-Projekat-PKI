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
        { date: '2024-11-26', time: '20:30', price: 550 },
      ],
    },
    {
      id: 2,
      title: 'Red One',
      imageUrl: 'Red One.jpg',
      description: 'Opis filma o ključnim junacima u borbi protiv mračnih sila.',
      about: 'U ovoj uzbudljivoj avanturi, junaci se suočavaju s mračnim silama koje prete svetu, a njihova hrabrost i odlučnost će biti na testu u spektakularnoj borbi. Pripremajte se za akciju i neverovatne preokrete!',
      genre: 'Akcija',
      releaseDate: '2023-11-15',
      projections: [
        { date: '2024-11-25', time: '19:00', price: 600 },
        { date: '2024-11-27', time: '21:00', price: 650 },
      ],
    },
    {
      id: 3,
      title: 'Beetlejuice',
      imageUrl: 'Beetlejuice.jpg',
      description: 'Klasik horor komedija o duhovima.',
      about: 'Bizarna i duhovita priča o duhovi koji pomažu nesrećnim vlasnicima kuće da se oslobode novih stanara. Uz puno humora i neobičnih scena, ovaj film osvaja srca gledatelja.',
      genre: 'Komedija',
      releaseDate: '1988-03-30',
      projections: [
        { date: '2024-12-05', time: '17:00', price: 300 },
        { date: '2024-12-10', time: '19:30', price: 350 },
      ],
    },
    {
      id: 4,
      title: 'Hellboy',
      imageUrl: 'Hellboy.jpg',
      description: 'Hellboy se vraća u jednoj od najomiljenijih priča o superherojima.',
      about: 'Prepun akcije i avanture, Hellboy se bori protiv zlih sila i otkriva tajne svoje prošlosti dok pokušava da spasi svet. Njegov šarm i borbene veštine vode ga kroz neobične situacije.',
      genre: 'Fantazija, Akcija',
      releaseDate: '2004-04-02',
      projections: [
        { date: '2024-11-29', time: '18:00', price: 400 },
        { date: '2024-11-30', time: '20:00', price: 450 },
      ],
    },
    {
      id: 5,
      title: 'Venom 3',
      imageUrl: 'Venom 3.jpg',
      description: 'Opis trećeg nastavka popularnog filma o Venomu.',
      about: 'Venom se vraća u trećem delu, suočavajući se sa novim izazovima i neprijateljima u svetu punom akcije i avanture. Njegova borba za opstanak i borba protiv unutrašnjih demona stavljaju ga na test.',
      genre: 'Naučna fantastika, Akcija',
      releaseDate: '2024-10-05',
      projections: [
        { date: '2024-11-15', time: '18:00', price: 550 },
        { date: '2024-11-16', time: '20:30', price: 600 },
      ],
    },
    {
      id: 6,
      title: 'Supstance',
      imageUrl: 'Supstance.jpg',
      description: 'Drama o ljudskim emocijama.',
      about: 'Složen alegorijski film o ljudskim povezivanjima i unutrašnjoj borbi, istražuje egzistencijalne teme kroz emotivne likove koji tragaju za smislom i razumevanjem u svetu punom izazova.',
      genre: 'Drama',
      releaseDate: '2022-08-20',
      projections: [
        { date: '2024-07-10', time: '17:00', price: 200 },
        { date: '2024-07-12', time: '19:30', price: 250 },
      ],
    },
    {
      id: 7,
      title: 'Moana 2',
      imageUrl: 'Moana 2.jpg',
      description: 'Nastavak avantura Moane.',
      about: 'Moana se vraća u uzbudljivu avanturu dok istražuje nepoznate delove sveta, prateći svoje srce i prijatelje koji je podržavaju na ovom putovanju. Pripremite se za magiju i poučne trenutke o prijateljstvu.',
      genre: 'Animacija, Porodični',
      releaseDate: '2025-03-10',
      projections: [
        { date: '2025-03-15', time: '10:00', price: 400 },
        { date: '2025-03-16', time: '12:30', price: 450 },
      ],
    },
    {
      id: 8,
      title: 'Transformers',
      imageUrl: 'Transformers.jpg',
      description: 'Akcioni spektakl o sukobu između autobota i deceptikona.',
      about: 'Bizarna borba između autobota i deceptikona koji se odvija u našem svetu. Odlična akcija, efekti i priče čekaju vas! Upoznajte junake koji se bore za opstanak čovečanstva.',
      genre: 'Akcija, Naučna fantastika',
      releaseDate: '2007-07-04',
      projections: [
        { date: '2024-12-01', time: '19:00', price: 500 },
        { date: '2024-12-02', time: '21:30', price: 550 },
      ],
    },
    {
      id: 9,
      title: 'Dune',
      imageUrl: 'Dune.jpg',
      description: 'Epohalna priča o borbi za kontrolu nad planetom Dune.',
      about: 'Na planetu Arrakis, poznatom kao Dune, odvija se epska bitka za nevrednu supstancu chamada "spice". Mladi Paul Atreides bori se za opstanak svoje porodice, hektična politika i pregoravanje sudbine preobražava njegov svet.',
      genre: 'Naučna fantastika, Avantura',
      releaseDate: '2021-10-22',
      projections: [
        { date: '2023-12-01', time: '18:00', price: 600 },
        { date: '2023-12-03', time: '20:30', price: 650 },
      ],
    },
    {
      id: 10,
      title: 'The Batman',
      imageUrl: 'The Batman.jpg',
      description: 'Mračna priča o junaku Gotham City-ja.',
      about: 'Kao Batman, Bruce Wayne preuzima na sebe teret da zaštiti Gotham od kriminala. U ovom mračnom trileru, suočava se s najopasnijim zločincima i otkriva tajne svog grada.',
      genre: 'Akcija, Triler',
      releaseDate: '2022-03-04',
      projections: [
        { date: '2024-12-10', time: '19:00', price: 650 },
        { date: '2024-12-11', time: '21:30', price: 700 },
      ],
    },
    {
      id: 11,
      title: 'Top Gun: Maverick',
      imageUrl: 'TopGun.jpg',
      description: 'Nastavak kultnog filma o pilotima.',
      about: 'Nakon više od tri decenije bezopasne pilotiranja, Maverick se vraća da edukuje novu generaciju. Između starih prijatelja i neprijatelja, suočava se sa dokazom svoje hrabrosti i odgovornosti.',
      genre: 'Akcija, Drama',
      releaseDate: '2022-05-27',
      projections: [
        { date: '2024-12-15', time: '18:00', price: 500 },
        { date: '2024-12-16', time: '20:30', price: 550 },
      ],
    },
    {
      id: 12,
      title: 'Spider-Man: No Way Home',
      imageUrl: 'SpiderMan.jpg',
      description: 'Spider-Man se suočava sa posljedicama svojih akcija.',
      about: 'Nakon što njegovo identitet postane javna stvar, Peter Parker se suočava s izazovima ispraviti greške. U ovom nezaboravnom putovanju, izlazi pred drugačije verzije sebe i preuzima odgovornost za svoje izbore.',
      genre: 'Akcija, Avantura',
      releaseDate: '2021-12-17',
      projections: [
        { date: '2023-12-20', time: '17:00', price: 600 },
        { date: '2023-12-22', time: '20:00', price: 650 },
      ],
    },
    {
      id: 13,
      title: 'Everything Everywhere All At Once',
      imageUrl: 'Everything Everywhere All at Once.jpg',
      description: 'Fantastična avantura o multiverzumu.',
      about: 'Kroz egzistencijalnu krizu, obična žena koja vodi maloprodajni biznis pronalazi moć da istraži razne verzije svog života. Ovaj film izaziva granice stvarnosti i postavlja pitanja o identitetu.',
      genre: 'Avantura, Komedija, Drama',
      releaseDate: '2022-03-25',
      projections: [
        { date: '2024-12-30', time: '20:00', price: 300 },
        { date: '2025-01-02', time: '22:30', price: 350 },
      ],
    },
    {
      id: 14,
      title: 'Avatar: The Way of Water',
      imageUrl: 'Avatar.jpg',
      description: 'Nastavak vizuelno spektakularnog filma.',
      about: 'Nakon nekoliko godina, Jake Sully i Neytiri se suočavaju s novim pretnjama u svetu Pandora. Njihova borba za opstanak postaje složitija dok istražuju prelepe, ali opasne vode.',
      genre: 'Naučna fantastika, Avantura',
      releaseDate: '2022-12-16',
      projections: [
        { date: '2025-01-15', time: '18:00', price: 650 },
        { date: '2025-01-17', time: '20:30', price: 700 },
      ],
    },
    {
      id: 15,
      title: 'Oppenheimer',
      imageUrl: 'Oppenhieimer.jpg',
      description: 'Biografski film o ocu atomske bombe.',
      about: 'Ova priča prati život J. Robert Oppenheimera, fizičara čija je inovacija stvorila atomski bombu, a kasnije se suočava sa moralnim posledicama svog dela. Film istražuje kompleksnost nauke, etike i ljudske prirode.',
      genre: 'Biografija, Drama',
      releaseDate: '2023-07-21',
      projections: [
        { date: '2025-01-20', time: '19:00', price: 700 },
        { date: '2025-01-22', time: '21:30', price: 750 },
      ],
    },
    {
      id: 16,
      title: 'Barbie',
      imageUrl: 'Barbie.jpg',
      description: 'Kreativna priča o popularnoj lutki.',
      about: 'U ovoj fantastičnoj bajci, Barbie kreće na avanturu da pronađe svoj identitet i izvrši vlastite snove. Njena priča kombinuje humor i životne lekcije o samoprihvatanju i prijateljstvu.',
      genre: 'Komedija, Drama',
      releaseDate: '2023-07-21',
      projections: [
        { date: '2025-02-01', time: '18:30', price: 500 },
        { date: '2025-02-03', time: '20:00', price: 550 },
      ],
    },
    {
      id: 17,
      title: 'The Whale',
      imageUrl: 'The Whale.jpg',
      description: 'Priča o čoveku koji se suočava sa sopstvenim demonima.',
      about: 'U ovoj emotivnoj drami, otkrivamo priču o čoveku koji pokušava da se ponovo poveže sa svojom porodicom dok se bori sa svojim unutrašnjim demonima. Film istražuje teme gubitka, kajanja i iskupljenja.',
      genre: 'Drama',
      releaseDate: '2022-12-09',
      projections: [
        { date: '2024-09-15', time: '17:00', price: 300 },
        { date: '2024-09-17', time: '20:30', price: 350 },
      ],
    },
    {
      id: 18,
      title: 'Black Panther: Wakanda Forever',
      imageUrl: 'Black Panther.jpg',
      description: 'Nastavak priče o Wakandi.',
      about: 'U ovom uzbudljivom nastavku, Wakanda se suočava s gubicima i novim pretnjama dok traže način kako da se bore za svoj opstanak. Junaci kreću na putovanje koje će testirati njihovu hrabrost i odanost.',
      genre: 'Akcija, Avantura',
      releaseDate: '2022-11-11',
      projections: [
        { date: '2024-12-20', time: '18:00', price: 650 },
        { date: '2024-12-22', time: '20:30', price: 700 },
      ],
    },
    {
      id: 19,
      title: 'A Quiet Place Part II',
      imageUrl: 'A Quiet Place Part II.jpg',
      description: 'Nastavak napete horor priče.',
      about: 'Dok se suočavaju s novim pretnjama u svetu punom tihi, preživeli članovi porodice moraju se suočiti s opasnostima koje dolaze izvan njihovog doma. Napetost raste dok se bore za opstanak.',
      genre: 'Horor, Triler',
      releaseDate: '2021-05-28',
      projections: [
        { date: '2025-01-30', time: '20:00', price: 450 },
        { date: '2025-02-01', time: '22:30', price: 500 },
      ],
    },
    {
      id: 20,
      title: 'The Northman',
      imageUrl: 'The Northman.jpg',
      description: 'Priča o osveti postavljena u vikinškom svetu.',
      about: 'U ovom epskom filmu, mladi viking kreće na put osvetu za smrt svog oca. Njegovo putovanje ga vodi kroz opasne i nepredvidive situacije u mračnim vremenima.',
      genre: 'Akcija, Avantura',
      releaseDate: '2022-04-22',
      projections: [
        { date: '2024-02-15', time: '18:00', price: 600 },
        { date: '2024-02-17', time: '20:30', price: 650 },
      ],
    },
    {
      id: 21,
      title: 'The Menu',
      imageUrl: 'The Menu.jpg',
      description: 'Zanimljiva priča o kulinarstvu sa horor elementima.',
      about: 'U ovoj neobičnoj drami, gosti se suočavaju s mračnim tajnama tokom večere u ekskluzivnom restoranu. Ova kombinacija horora i komedije izaziva promišljanje o potrošačkoj kulturi.',
      genre: 'Komedija, Horor',
      releaseDate: '2022-11-18',
      projections: [
        { date: '2024-02-20', time: '19:00', price: 300 },
        { date: '2024-02-22', time: '21:30', price: 350 },
      ],
    },
    {
      id: 22,
      title: 'Knives Out: Glass Onion',
      imageUrl: 'Glass Onion.jpg',
      description: 'Misterija koja će vas držati na ivici.',
      about: 'U ovoj duhovitoj i napetoj priči, detektiv Benoit Blanc istražuje složeni slučaj ubistva koja uključuje bogate porodice i spletke. Svi su sumnjivi, a pravda čeka na otkrivanje.',
      genre: 'Misterija, Komedija',
      releaseDate: '2022-11-23',
      projections: [
        { date: '2024-03-12', time: '18:00', price: 400 },
        { date: '2024-03-14', time: '20:30', price: 450 },
      ],
    },
    {
      id: 23,
      title: 'No Time to Die',
      imageUrl: 'No time to die.jpg',
      description: 'Noviji nastavak avantura Džejmsa Bonda.',
      about: 'Dok se agent 007 povlači iz penzije, suočava se s novim neprijateljem koji preti svetu. Akcija, intrige i spektakularne scene donose još jedan uzbudljiv deo ovog globusa.',
      genre: 'Akcija, Avantura',
      releaseDate: '2021-10-08',
      projections: [
        { date: '2024-03-20', time: '19:00', price: 500 },
        { date: '2024-03-22', time: '21:30', price: 550 },
      ],
    },
    {
      id: 24,
      title: 'Encanto',
      imageUrl: 'Encanto.jpg',
      description: 'Magija porodice u svetu čarolije.',
      about: 'U porodici Madrigal, svako ima magične sposobnosti osim Mirabel. Kada zla pretnja zapreti njihovoj čarobnoj kući, ona se mora suočiti s izazovima da spasi svoju porodicu i pokazati njihovu snagu.',
      genre: 'Animacija, Porodični',
      releaseDate: '2021-11-24',
      projections: [
        { date: '2024-04-01', time: '10:00', price: 400 },
        { date: '2024-04-02', time: '12:30', price: 450 },
      ],
    },
    {
      id: 25,
      title: 'Dont Look Up',
      imageUrl: 'Dont look up.jpg',
      description: 'Komedija koja preispituje društvo.',
      about: 'Dva naučnika otkrivaju asteroid koji preti Zemlji, ali naiđu na otpor javnosti i medija. Ova satirična komedija osvetljava kako društvo reaguje na ozbiljne pretnje.',
      genre: 'Komedija, Naučna fantastika',
      releaseDate: '2021-12-24',
      projections: [
        { date: '2024-04-10', time: '15:00', price: 300 },
        { date: '2024-04-12', time: '17:30', price: 350 },
      ],
    },
    {
      id: 26,
      title: 'Mission: Impossible – Dead Reckoning Part One',
      imageUrl: 'Mission Impossible.jpg',
      description: 'Nova uzbudljiva misija Etila Hanta.',
      about: 'Etil Hant se suočava s izazovima u borbi protiv moćnog neprijatelja koji preti svetu. Spektakularna akcija, nepredvidive situacije i internacionalna intriga čine ovu misiju nezaboravnom.',
      genre: 'Akcija, Avantura',
      releaseDate: '2023-07-12',
      projections: [
        { date: '2024-04-15', time: '19:00', price: 600 },
        { date: '2024-04-17', time: '21:30', price: 650 },
      ],
    },
    {
      id: 27,
      title: 'John Wick',
      imageUrl: 'JohnWick.jpg',
      description: 'Priča o profesionalnom ubici.',
      about: 'U ovoj uzbudljivoj akcijskoj drami, profesionalni ubica John Wick kreće na put osvete nakon što mu ukradu ljubimca. Njegova borba protiv sveta kriminala donosi napetu i dinamičnu avanturu.',
      genre: 'Akcija, Triler',
      releaseDate: '2014-10-24',
      projections: [
        { date: '2024-11-27', time: '20:00', price: 550 },
        { date: '2024-11-28', time: '22:30', price: 600 },
      ],
    },
    {
      id: 28,
      title: 'Interstellar',
      imageUrl: 'Interstellar.jpg',
      description: 'Fantastična priča o ljudskoj borbi za preživljavanje.',
      about: 'U svetu suočenim s katastrofom, astronauti kreću na istraživačku misiju u svemir u potrazi za novim domom za čovečanstvo. Njihova istraživanja donose pitanja o ljubavi, vremenu i preživljavanju.',
      genre: 'Naučna fantastika, Drama',
      releaseDate: '2014-11-07',
      projections: [
        { date: '2024-11-29', time: '18:30', price: 700 },
        { date: '2024-12-01', time: '21:00', price: 750 },
      ],
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