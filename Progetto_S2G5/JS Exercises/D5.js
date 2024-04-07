/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
pets.forEach((pet) => {
  console.log(pet);
});

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
var petsOrdinati = pets.slice(0).sort();
console.log("alfabetico " + petsOrdinati);
console.log("normale " + pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

for (let i = pets.length -1 ; i >= 0; i--) {
  console.log(pets[i]);
}

/* se si preferisce un metodo piu in linea con il programma ho una seconda versione*/

const reversedPets = [];

const copyOfPets = pets.slice();

while (copyOfPets.length > 0) {
    reversedPets.push(copyOfPets.pop());
}

console.log(pets); 
console.log(reversedPets); 

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let ultimo = pets.shift();
console.log(pets)
pets.push(ultimo);
console.log(pets);


const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

//document.write(cars);
cars.forEach((car) => {
  car.licensePlate = "GO000OO"
});
//document.write(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let car = {
  brand: 'Toyota',
  model: 'Supra',
  color: 'Orange',
  trims: ['Stututu', 'GT'],
};
cars.push(car);

cars.forEach(car => {
  const ultimoTrim = car.trims.length - 1;

  if (ultimoTrim >= 0) {
    car.trims.splice(ultimoTrim, 1);
  }
});
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
cars.forEach(car => {
  if (car.trims.length > 0) {
    justTrims.push(car.trims[0]);
  }
});

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/


for (const car of cars) {

  if (car.color && car.color.length > 0) {

    let iniziale = car.color[0];
    if (iniziale == "b") {
      console.log("Fizz");
    } else {
      console.log("Buzz")
    }
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0;
while (i < numericArray.length) {
  valoreAttuale = numericArray[i];
  if (valoreAttuale === 32) {
    break;
  }
  console.log(valoreAttuale);
  i++
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

function alfabetoNumber(charactersArray) {
  for (let i = 0; i < charactersArray.length; i++) {
    const letter = charactersArray[i].toLowerCase();
    switch (letter.toLowerCase()) {
      case 'a':
        console.log('A - 1');
        break;
      case 'b':
        console.log('B - 2');
        break;
      case 'c':
        console.log('C - 3');
        break;
      case 'd':
        console.log('D - 4');
        break;
      case 'e':
        console.log('E - 5');
        break;
      case 'f':
        console.log('F - 6');
        break;
      case 'g':
        console.log('G - 7');
        break;
      case 'h':
        console.log('H - 8');
        break;
      case 'i':
        console.log('I - 9');
        break;
      case 'j':
        console.log('J - 10');
        break;
      case 'k':
        console.log('K - 11');
        break;
      case 'l':
        console.log('L - 12');
        break;
      case 'm':
        console.log('M - 13');
        break;
      case 'n':
        console.log('N - 14');
        break;
      case 'o':
        console.log('O - 15');
        break;
      case 'p':
        console.log('P - 16');
        break;
      case 'q':
        console.log('Q - 17');
        break;
      case 'r':
        console.log('R - 18');
        break;
      case 's':
        console.log('S - 19');
        break;
      case 't':
        console.log('T - 20');
        break;
      case 'u':
        console.log('U - 21');
        break;
      case 'v':
        console.log('V - 22');
        break;
      case 'w':
        console.log('W - 23');
        break;
      case 'x':
        console.log('X - 24');
        break;
      case 'y':
        console.log('Y - 25');
        break;
      case 'z':
        console.log('Z - 26');
        break;
      default:
        console.log('non è una lettera valida');
    }
  }
}

alfabetoNumber(charactersArray);