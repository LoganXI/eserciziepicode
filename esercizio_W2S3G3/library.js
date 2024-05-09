const generateList = function (books) {
    // prendo un riferimento alla UL
    const list = document.getElementById('Lista')
    books.forEach((book) => {
        // per ogni utente...
        // creo un <li></li>
        const newLi = document.createElement('li')
        // gli aggiungo le classi necessarie di BS
        newLi.classList.add('list-group-item', 'col-12', 'col-md-4', 'my-3')
        // aggiungo all'li il contenuto
        newLi.innerHTML = `<div class="card " style="width: 18rem;">
                            <img src="${book.img}" class="card-img-top" alt="${book.title}">
                            <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text">Prezzo:${book.price}\$<i class="bi bi-cart-plus "></i></p>
                            <button class="btn btn-primary onclick="deleteCard(event)">Delete</button>
                            </div>
                           </div>`
        // il <li> è pronto!
        // lo appendo alla lista
        list.appendChild(newLi)
    })
}


const deleteCard = function (e) {
    console.log('ELIMINO CARD', e)
    // come faccio a capire QUALE degli n bottone elimina mi ha portato qui? devo capire QUALE card eliminare...
    // e.target sarà il bottone che abbiamo cliccato
    console.log(e.target.closest('.card'))
    // eliminiamo dal DOM la card
    e.target.closest('.col').remove() // rimuove la card dalla pagina
    // aggiorniamo il localStorage, così al riavvio sucessivo la card non si ri-genererà da capo
    // riprendiamo l'array dal localStorage
    const arrayFromLocalStorage = JSON.parse(localStorage.getItem('contacts'))
    // filtriamo ora l'array rimuovendo l'elemento che abbiamo deciso di eliminare
    const filteredArray = arrayFromLocalStorage.filter((contact) => {
      return (
        contact.name !==
        e.target.closest('.card').querySelector('.card-title').innerText
      )
    })
    localStorage.setItem('contacts', JSON.stringify(filteredArray))
  }


const getBooks = function () {
    fetch('https://striveschool-api.herokuapp.com/books', {
        // questo secondo parametro serve a definire eventuali proprietà aggiuntive
        // method: 'GET' // è il default!
        // body: // non c'è perchè stiamo facendo una GET
        // l'autenticazione NON c'è perchè JSONPlaceholder è un sito free
        // ...abbiamo capito che questo oggetto di configurazione in questo caso non servirerebbe proprio!
    })
        .then((response) => {
            // lieto fine! il server ci ha risposto!
            // occhio che finite nel .then() anche in caso di 400, 404, 500 etc.
            if (response.ok) {
                console.log('LIETO FINE!', response)
                // in questo modo siamo sicuri non solo di aver ottenuto una risposta ma che anche lo status code della risposta
                // appartiene alla famiglia dei 200

                // io vorrei creare una lista di utenti a partire dall'array di utenti ottenuto dalla risposta
                // dove trovo l'array di utenti?
                // l'array di oggetti è il PAYLOAD della Response
                // come lo tiro fuori dalla response?
                return response.json() // "jsonifizza" la response, tornandone il body dentro una Promise
                // se il server tornasse puramente una stringa, potremmo recuperarla con response.text()
            } else {
                // finiamo qui quando abbiamo ottenuto una risposta ma lo status code è es. 400, 401, 404, 500, ecc.
                // nel caso finissimo qui, la cosa giusta da fare è auto-lanciarsi nel blocco catch
                if (response.status === 404) {
                    throw new Error('La risorsa richiesta non è stata trovata')
                } else if (response.status === 500) {
                    throw new Error('La risposta del server è stata negativa') // creo un errore e sollevo un'eccezione
                }
            }
        })
        .then((arrayOfBooks) => {
            console.log(
                'Ho estratto il body dalla Response! Ecco il risultato:',
                arrayOfBooks
            )
            // a questo punto, dentro questo blocco then ho accesso ai dati remoti
            // ora manipolo il DOM
            generateList(arrayOfBooks) // passo arrayOfUsers ad una funzione che si occuperà di manipolare il DOM e
            // creare i list-items sulla base dei miei utenti
        })
        .catch((err) => {
            // bad ending!
            // c'è stato un errore e non siamo riusciti a contattare il server!
            // abbiamo internet? il server va a fuoco?
            console.log('ERRORE', err)
        })
}

getBooks()

