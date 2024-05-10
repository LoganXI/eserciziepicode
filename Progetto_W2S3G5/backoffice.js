
const API_KEY = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZDZiZjgxODQ0MjAwMTUzNzU4ODMiLCJpYXQiOjE3MTUzMjg3MDMsImV4cCI6MTcxNjUzODMwM30.wbIQmhpdC4mmD30MOeD4fJGYCF6NF5cz4Cdi3-QhFEo'


class Gundam {
  constructor(_name, _description, _brand, _imageUrl, _price) {
    this.name = _name
    this.description = _description
    this.brand = _brand
    this.imageUrl = _imageUrl
    this.price = _price
  }
}



const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible m-0" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}





const addressBarContent = new URLSearchParams(location.search)
const gundamId = addressBarContent.get('gundamId')
console.log('EVENTID?', gundamId)

let eventToModify

const getGundamData = function () {

  fetch(`https://striveschool-api.herokuapp.com/api/product/${gundamId}`, {
    headers: {
      Authorization: API_KEY,
    },
  })

    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        if (response.status === 404) {
          throw new Error("Errore nel recupero dei dettagli del prodotto: Resource not found " + response.status)
        } else if (response.status === 500) {
          throw new Error("Errore nel recupero dei dettagli del prodotto: Internal server error " + response.status)
        } else {
          throw new Error("Errore nel recupero dei dettagli del prodotto: Unknown error " + response.status)
        }

      }
    })
    .then((event) => {
      console.log('DETTAGLI RECUPERATI', event)

      document.getElementById('name').value = event.name
      document.getElementById('description').value = event.description
      document.getElementById('brand').value = event.brand
      document.getElementById('price').value = event.price
      document.getElementById('imge').value = event.imageUrl

      eventToModify = event
    })
    .catch((err) => {
      appendAlert('Qualcosa è andato storto!! ' + err, 'warning')
      console.log('ERRORE', err)

    })
}

if (gundamId) {

  getGundamData()

  document.getElementById('creat').innerText = 'MODIFICA!'
  document.getElementById('delet').innerText = 'CANCELLA'
}


const submitEvent = function (e) {
  e.preventDefault()

  const nameInput = document.getElementById('name')
  const descriptionInput = document.getElementById('description')
  const priceInput = document.getElementById('price')
  const brandInput = document.getElementById('brand')
  const imageInput = document.getElementById('imge')


  const concertFromForm = new Gundam(
    nameInput.value,
    descriptionInput.value,
    brandInput.value,
    imageInput.value,
    priceInput.value

  )

  console.log('CONCERTO DA INVIARE ALLE API', concertFromForm)



  let URL = 'https://striveschool-api.herokuapp.com/api/product/'
  let methodToUse = 'POST'

  if (gundamId) {
    URL = `https://striveschool-api.herokuapp.com/api/product/${eventToModify._id}`
    methodToUse = 'PUT'
  }

  fetch(URL, {
    method: methodToUse,
    body: JSON.stringify(concertFromForm),
    headers: {
      'Content-type': 'application/json',
      Authorization: API_KEY,
    },
  })
    .then((response) => {
      if (response.ok) {

        alert(`Prodotto ${gundamId ? 'modificato' : 'creato'}!`)
        location.assign('index.html')
      } else {
        if (response.status === 404) {
          throw new Error("Errore nel salvataggio della risorsa: Resource not found " + response.status)
        } else if (response.status === 500) {
          throw new Error("Errore nel salvataggio della risorsa: Internal server error " + response.status)
        } else {
          throw new Error("Errore nel salvataggio della risorsa: Unknown error " + response.status)
        }

      }
    })
    .catch((err) => {
      appendAlert('Qualcosa è andato storto!! ' + err, 'warning')
      console.log('ERRORE', err)
      alert(err)
    })
}

const deleteEvent = function (e) {


  if (gundamId) {
    e.preventDefault()
    var result = window.confirm("Are you sure you want to delete this item?")
    if (result) {


      URL = `https://striveschool-api.herokuapp.com/api/proudct/${eventToModify._id}`

      console.log(gundamId);
      fetch(URL, {
        method: 'DELETE',
        headers: {
          Authorization: API_KEY,
        },

      })
        .then((response) => {
          if (response.ok) {
            alert('RISORSA ELIMINATA')
            
            location.assign('index.html') // torniamo in home
          } else {
            
            if (response.status === 404) {
              throw new Error("ERRORE - RISORSA NON ELIMINATA Resource not found " + response.status)
            } else if (response.status === 500) {
              throw new Error("ERRORE - RISORSA NON ELIMINATA Internal server error " + response.status)
            } else {
              throw new Error("ERRORE - RISORSA NON ELIMINATA Unknown error " + response.status)
            }
            
          }
        })
        .catch((err) => {
          appendAlert('Qualcosa è andato storto!! ' + err, 'warning')
          console.log('ERR', err)
        })
    } else {
      console.log("Deletion cancelled");
    }
  } else {
    var result = window.confirm("Are you sure you want to delete this item?")
    if (result) {

    } else {
      e.preventDefault()
      console.log("Deletion cancelled");
    }
  }
}


document.getElementById('creat').addEventListener('click', submitEvent)
document.getElementById('delet').addEventListener('click', deleteEvent)
