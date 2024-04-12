/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
var sum = 10 + 20;

/*OPPURE*/
let a = 10;
let b = 20;

sum = a + b;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
var random = Math.floor(math.random() * 21)
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
var me = {
  name: "Morgan",
  surname: "Grande",
  age: "28",
}
console.log(me);
/* ESERCIZIO D
Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);
/* ESERCIZIO E
Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["JavaScript", "HTML", "CSS"];
console.log(me);
/* ESERCIZIO F
Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("problem solving");

console.log("aggiungo skills");
console.log(me.skills);
/* ESERCIZIO G
Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();

console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function () {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min) + min)
}

dice();
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = function (a, b) {
  if (a < b) {
    return b;
  } else {
    return a;
  };
}

console.log(whoIsBigger(10, 8));
console.log(whoIsBigger(7, 8));
console.log(whoIsBigger(109, 30));
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = function (testo) {

  let paroleSplit = [];
  const words = testo.split(' ');
  words.forEach(parola => {
    paroleSplit.push(parola);
    //console.log(parola);
  });
  console.log(paroleSplit);
}

splitMe("ciao come stai io bene")
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function (str, bool) {
  if (bool === true) {
    return str.substring(1)
  } else {
    return str.slice(0, -1);
  }
}
console.log(deleteOne("manchera la prima", true));
console.log(deleteOne("manchera l'ultima", false));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = function (str) {

  const onlyLetters = str.replace(/\d+/g, '');
  console.log(onlyLetters);
}

onlyLetters("ci1ao0 c0ome3 s5t4ai1");
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = function (str) {
  const path = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return path.test(str);
}
console.log(isThisAnEmail("questaeunaveraemail@qualcosa.com"));
console.log(isThisAnEmail("direipropriochenonsonounaemail.ciao"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = function () {
  const oggi = new Date();
  return oggi.toLocaleString('it-IT', { weekday: 'long' });;
}
const whatDayIsIt2 = function () {
  const oggi = new Date();
  return oggi.getDate();
}

console.log("oggi è " + whatDayIsIt() + " " + whatDayIsIt2())
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(dadi) {
  let sum = 0;
  for (i = 0; i < dadi; i++) {
    let num = dice();
    console.log(num);
    sum += num;
  }
  console.log(sum)
}

rollTheDices(3);
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(onceAponATime) {
  var oggi = new Date();

  var millisecondi = oggi - onceAponATime;

  var giorni = Math.floor(millisecondi / (1000 * 60 * 60 * 24));

  return giorni
}
var ceraunavolta = new Date('2024-04-04');//date è yyyy mm dd
console.log("sono trascorsi " + howManyDays(ceraunavolta));
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(compleanno) {
  var oggi = new Date();
  var bday = new Date(compleanno)
  var bdayM = bday.getMonth();
  var bdayD = bday.getDate();
  var oggiM = oggi.getMonth();
  var OggiD = oggi.getDate();

  if (bdayM === oggiM && bdayD === OggiD) {

    console.log("TANTI AUGURI!!!");
    return true;
  } else {

    console.log("torna un altro giorno")
    return false
  }
}


console.log(isTodayMyBirthday("2000-04-12"));
console.log(isTodayMyBirthday("2000-03-12"));


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file


/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(oggetto, str) {
  delete oggetto[str];
}

deleteProp(me, "surname")
console.log(me);
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(lista) {
  let piuNuovo = 0
  let newfilm = null;

  lista.forEach(film => {
    const anno = parseInt(film.Year)
    if (piuNuovo < anno) {
      piuNuovo = anno
      newfilm = film
    }

  });
  return newfilm
}
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(lista) {
  let count = 0
  lista.forEach(film => {
    count++;
  })
  return count;
}
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(lista) {
  let soloGliAnni = [];
  lista.forEach(film => {
    soloGliAnni.push(film.Year)
  });
  return soloGliAnni;
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(lista) {
  let ultimoMillennio = [];
  lista.forEach(film => {
    let millennioScorso = parseInt(film.Year)
    if (millennioScorso < 2000) {
      ultimoMillennio.push(film.Year)
    }

  });
  return ultimoMillennio;
}
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(lista) {
  let somma = 0;
  lista.forEach(film => {
    let anno = parseInt(film.Year)
    somma = somma + anno;

  });
  return somma;
}
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(lista, keyWord) {
  let compresi = []
  lista.forEach(film => {
    let titolo = film.Title;
    if (titolo.includes(keyWord)) {
      compresi.push(film);
    }
  });
  return compresi;
}
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(lista, keyWord) {
  let match = []
  let unMatch = []

  lista.forEach(film => {
    let titolo = film.Title;
    if (titolo.includes(keyWord)) {
      match.push(film);
    } else {
      unMatch.push(film);
    }
  });
  console.log(match);
  console.log(unMatch);
}
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(lista, indice) {
  let noI = []

  lista.forEach((film, i) => {
    if (indice !== (i + 1)) {
      noI.push(film);
    }
  });
  console.log(noI);
}
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const container = document.getElementById("container");
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const allTds = document.querySelectorAll("td");
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function printAllTds() {
  const tds = document.querySelectorAll("td");

  tds.forEach(td => {
    console.log(td.textContent);
  });
}
printAllTds()
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function setBgColorA() {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.style.backgroundColor = "red";
  });
}
setBgColorA()
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addElementList(contenuto) {
  const ulList = document.getElementById("myList");
  const newLi = `<li>${contenuto}</li>`; // ho messo la variabile cosi se si chiama la funzione si puo scegliere cosa immettere nella lista ma potevo mettere anche solo un testo, aggiungerlo cosi non mi costava nulla 
  ulList.innerHTML += newLi;
}
addElementList("contenuto")
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function deleteAllLi() {
  const uls = document.getElementById("myList");
  uls.innerHTML = "";
}
deleteAllLi()
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addTrClass() {
  const trs = document.querySelectorAll("table tr");

  // Loop through each <tr> element and add the "test" class
  trs.forEach(tr => {
    tr.classList.add("test");
  })
}
addTrClass()
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
function halftree(altezza) {
  let mezAlbero = '';
  for (let i = 1; i <= altezza; i++) {
    for (let j = 1; j <= i; j++) {
      mezAlbero += '*';
    }
    mezAlbero += '\n';
  }
  return mezAlbero;
}

console.log(halftree(5))
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function tree(altezza) {
  let albero = '';
  for (let i = 1; i <= altezza; i++) {
    let row = '';

    for (let j = altezza - i; j > 0; j--) {
      row += ' ';
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      row += '*';
    }
    albero += row + '\n';
  }
  return albero;
}


console.log(tree(3));
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrime(numero) {
  if (numero < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isItPrime(191)); // true
console.log(isItPrime(168)); // false
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


console.log(newestMovie(movies));

console.log(countMovies(movies));
console.log(onlyTheYears(movies));
console.log(onlyInLastMillennium(movies));
console.log(sumAllTheYears(movies));
console.log(searchByTitle(movies, "Lord"));
console.log(searchByTitle(movies, "Avengers"));
searchAndDivide(movies, "Lord");
removeIndex(movies, 3);
