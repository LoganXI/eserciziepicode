
const API_KEY = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZDZiZjgxODQ0MjAwMTUzNzU4ODMiLCJpYXQiOjE3MTUzMjg3MDMsImV4cCI6MTcxNjUzODMwM30.wbIQmhpdC4mmD30MOeD4fJGYCF6NF5cz4Cdi3-QhFEo'



const addressBarContent = new URLSearchParams(location.search) 
console.log(addressBarContent)
const gundamId = addressBarContent.get('gundamId')

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


const getGundamData = function () {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${gundamId}`, {
    headers: {
      Authorization: API_KEY,
    },
  })
   
    .then((response) => {
      if (response.ok) {
        const spin = document.getElementById('spinner')
        spin.classList.add('visually-hidden')
        const card = document.getElementById('carta')
        card.classList.remove('visually-hidden')
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
    .then((gundam) => {
      console.log('DETTAGLI RECUPERATI', gundam)
   
      document.getElementById('name').innerText = gundam.name
      document.getElementById('description').innerText = gundam.description
      document.getElementById('brand').innerText = gundam.brand
      document.getElementById('price').innerText = gundam.price + '€'
      document.getElementById("imageid").src = gundam.imageUrl
    })
    .catch((err) => {
      appendAlert('Qualcosa è andato storto!! '+ err, 'warning')
      console.log('ERRORE', err)
      
    })
}

getGundamData()
