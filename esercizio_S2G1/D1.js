/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var x = "I principali datatype in javascript sono 5 e sono numeri, stringhe, booleani, null, undefined; il primo lo dice il nome, ovvero numeri, tutti i numeri compresi i negativi e i decimali, quelli con la virgola.";
x+="\n Il secondo tipo sono le stringhe ovvero tutto quello che è testo, una frase per esempio, ma attenzione che anche i numeri possono essere scritti come testo, quindi bisogna distinguerli tra valori aritmetici e valori testuali.";
x+="\n il terzo tipo viene utilizzato per determinare se una affermazione fatta dal nostro codice è vera o falsa, percio rispondera solo vero o falso, per esempio 3x3 = 9 mi rispondera vero oppure 3x3 = 10 risponderà falso";
x+="\n Il quarto tipo è il tipo null, indica che il contenuto della variabile ha un valore nullo, non significa che vale 0. il contenitore non e vuoto ma è nullo";
x+="\n Il quinto tipo specifica che la variabile in questione contiene un valore che non esiste, quindi non è come null che il contenitore è pieno, il contenitore è vuoto con nulla al suo interno. ";
console.log(x);
/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var myName="Morgan";
console.log(myName);
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var somma = 12;
somma+=20;
console.log(somma);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
x = 12;
console.log(x);
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Grande"
const cognome = "Grande"
console.log(myName + cognome);
try {
  cognome = "Morgan"
  console.log(myName + cognome);
} catch (error) {
  console.log("non posso cambiare il valore di una costante")
}

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
x -= 4;
console.log(x);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name1 = "john";
var name2 = "John";
name1 == name2;
var nomi = true

nomi = name1 == name2
console.log(nomi)
nomi = name1 == name2.toLowerCase()
console.log(nomi)
