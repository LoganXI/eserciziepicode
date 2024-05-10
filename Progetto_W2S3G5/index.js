// riempie lo span "year"
const API_KEY = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZDZiZjgxODQ0MjAwMTUzNzU4ODMiLCJpYXQiOjE3MTUzMjg3MDMsImV4cCI6MTcxNjUzODMwM30.wbIQmhpdC4mmD30MOeD4fJGYCF6NF5cz4Cdi3-QhFEo'
document.getElementById('year').innerText = new Date().getFullYear()


function redirectToPage(url) {
  window.location.href = url; // Redirect to the specified URL
}
// riempiamo la riga con gli eventi
// https://striveschool-api.herokuapp.com/api/agenda

const generateGundamCards = function (gundamsArray) {
  const row = document.getElementById('events-row')
  gundamsArray.forEach((gundam) => {
    const newCol = document.createElement('div')
    newCol.classList.add('col')
    newCol.innerHTML = `
      <div class="card h-100 d-flex flex-column" onclick="redirectToPage('details.html?gundamId=${gundam._id}')" >
        <img src="${gundam.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column justify-content-around">
          <h5 class="card-title">${gundam.name}</h5>
          <p class="card-text">${gundam.description}</p>
          <p class="card-text">${gundam.brand}</p>
          <div class="d-flex justify-content-between">
            <p>${gundam.price}€</p>
            <a href="backoffice.html?gundamId=${gundam._id}" class="btn btn-info">MODIFICA</a>
          </div>
        </div>
      </div>
      `
    row.appendChild(newCol)
  })
}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}
  
const getEvents = function () {
  //  recuperiamo la lista di eventi attualmente nel database
  fetch('https://striveschool-api.herokuapp.com/api/product/', {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log(response)
        return response.json()
      } else {
        if (response.status === 404) {
          throw new Error('Errore nella risposta del server: Resource not found ' + response.status)
        } else if (response.status === 500) {
          throw new Error('Errore nella risposta del server: Internal server error ' + response.status)
        } else {
          throw new Error('Errore nella risposta del server: Unknown error ' + response.status)
        }
        
      }
    })
    .then((array) => {
      console.log('ARRAY!', array)
      // creiamo le card per la landing page
      generateGundamCards(array)
    })
    .catch((err) => {
      appendAlert('Qualcosa è andato storto!! '+ err, 'warning')
      console.log('ERRORE!', err)

    })
}

getEvents()
