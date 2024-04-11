window.onload = function () {
    generateMainBoard()
    const extractBtn = document.getElementById('extractBtn')
    const scope = fillArray()

    extractBtn.addEventListener('click', function () {
        generateRandNumber(scope)
    })


    const palyerCard = document.getElementById('playerCard')


    palyerCard.onclick = generateUserBoards
}


const generateMainBoard = function () {
    const board = document.querySelector('.bingo')
    for (let i = 0; i < 90; i++) {
        board.innerHTML += `<div class='numcel'>${i + 1}</div>`
    }
}


const fillArray = function () {
    const arr = []
    for (let i = 0; i < 90; i++) {
        arr.push(i + 1)
    }
    return arr
}




const getRandomNum = function (range) {
    const randIndex = Math.floor(Math.random() * range.length)
    const random = range.splice(randIndex, 1)[0]
    return random
}

const generateRandNumber = function (range) {
    const random = getRandomNum(range)
    const extractNum = document.getElementById('extractNum')
    extractNum.innerText = 'Numero: ' + random
    const cells = document.querySelectorAll('.bingo .numcel')
    cells[random - 1].classList.add('accesa')

    const playerCells = document.querySelectorAll('.playerscheda .numcel')
    playerCells.forEach((pcell) => {
        if (parseInt(pcell.innerText) === random) {
            pcell.classList.add('accesa')
        }
    })
}





const generateUserBoards = function () {
    const players = document.getElementById('players').value
    const container = document.querySelector('.container')
    if (parseInt(players) > 0) {

        for (let i = 0; i < parseInt(players); i++) {
            const range = fillArray()
            const board = document.createElement('div')
            
            board.className = 'board playerscheda'
            for (let i = 0; i < 24; i++) {
                const random = getRandomNum(range)
                board.innerHTML += `<div class='numcel'>${random}</div>`
            }
            container.appendChild(board)
        }
    }
}

