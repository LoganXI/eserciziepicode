const handleSubmit = function (e) {
    // invoca la funzione che genera la lista con il nuovo
    // invoca la funzione che cambia la classe (aggiunge sbarrato)
    // invoca la funzione che elimina il task

    
  taskAdd()
  taskComplete()
  taskDelete()

  e.preventDefault()
}

// una funzione che genera la lista con il nuovo task
//      agganciarsi nell'html
//      utilizzare template literals per stampare direttamente anche dell'html
//      inputField.value
//      font-awesome -> <i class="far fa-trash-alt"></i>

const taskAdd = function () {
    let inputField = document.querySelector('#newToDo input')
    let toDos = document.querySelector('#toDoS')
    let newToDo = `<div class="toDo">
          <span>
              ${inputField.value}
          </span>        
          <button class="cancella">
              <i class="far fa-trash-alt"></i>
          </button>
      </div>`
    toDos.innerHTML += newToDo
    inputField.value = ''
}

// una funzione che cambia la classe (aggiunge sbarrato)
//      agganciarsi nell'html
//      for 
//      classList.toggle -> text-decoration:line.through (css)

const taskComplete = function () {
    let everyTask = document.querySelectorAll('.toDo')
    for (let i = 0; i < everyTask.length; i++) {
        let currentTask = everyTask[i];
        currentTask.addEventListener('click', function () {
        currentTask.classList.toggle('completed')
      })
    }
  }

// una funzione che elimina il task
//      agganciarsi nell'html
//      for
//      remove

const taskDelete = function () {
    let deleteButtons = document.querySelectorAll('.cancella')
    for (let i = 0; i < deleteButtons.length; i++) {
        let currentButton = deleteButtons[i];
        currentButton.addEventListener('click', function () {
            currentButton.parentNode.remove();
        });
    }
}


window.onload = function () {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
}
