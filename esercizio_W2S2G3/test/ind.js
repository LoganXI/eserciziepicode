// seleziono il pulsante con id "info" dalla pagina e ci assegno una funzione
const modalButton = document.getElementById('info') // riferimento al bottone info
console.log('ho trovato il bottone?', modalButton)
// assegno una funzione al click: 2 modi
// 1)
modalButton.addEventListener('click', function (e) {
  console.log('evento scatenato al click', e)
})
// 2)
// modalButton.onclick = function (e) {
//   console.log('evento scatenato al click', e)
// }

const testFunction = function () {
  console.log('CLICCATO!')
}

//

// CERCHIAMO DI FAR COMPARIRE/SCOMPARIRE LE PRIME 4 CARD ORIZZONTALI ALLA PRESSIONE
// DEI 4 TASTI NELL'INPUT GROUP IN ALTO

// 1) selezioniamo i 4 bottoni all'interno dell'input group
let theFourButtons = document.getElementsByClassName('card-button')
console.log('theFourButtons', theFourButtons)

// voglio trasformare theFourButtons in un vero e proprio array
theFourButtons = Array.from(theFourButtons) // ora theFourButtons è un vero e proprio array, e potete invocarci sopra slice, forEach, map, filter etc

// 2) selezioniamo le prime 4 card orizzontali dentro la row
// potrei utilizzare come selettore le classi CSS "card flex-column" -> .card.flex-column
const allTheHorizontalCards = document.querySelectorAll('.card.flex-column') // array di 8 elementi
console.log('allTheHorizontalCards', allTheHorizontalCards)

// crea al volo un vero array da allTheHorizontalCards e ne ritaglia una porzione con i primi 4 elementi
const firstFourHorizontalCards = Array.from(allTheHorizontalCards).slice(0, 4)
console.log('firstFourHorizontalCards', firstFourHorizontalCards)

// il primo bottone?

// D R Y -> don't repeat yourself
// for (let i = 0; i < theFourButtons.length; i++) {
//   // 4 esecuzioni
//   // alla prima esecuzione, i vale 0
//   // alla seconda esecuzione, i vale 1
//   // alla terza esecuzione, i vale 2
//   // alla quarta esecuzione, i vale 3
//   theFourButtons[i].addEventListener('click', function () {
//     // qui dentro dovrei rendere invisibile la prima card, ovvero il primo elemento di firstFourHorizontalCards
//     //   firstFourHorizontalCards[0].style.visibility = 'hidden'
//     firstFourHorizontalCards[i].classList.toggle('invisible')
//   })
// }

// stessa cosa, ma con il forEach
theFourButtons.forEach(function (element, i) {
  // verrà eseguita tante volte quanti sono gli elementi dell'array -> 4 volte
  // element è il primo bottone al primo ciclo
  // il secondo al secondo ciclo etc.
  // i è zero al primo ciclo,
  // 1 al secondo ciclo
  element.addEventListener('click', function () {
    firstFourHorizontalCards[i].classList.toggle('invisible')
  })
})