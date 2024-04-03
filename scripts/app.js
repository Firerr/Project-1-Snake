//generating the grid
// will be done by use of the index, partially based on the shown box grid method, but will have to be changed to take more than 1 moving item.

//create movement
//movement will be done by use of addEventListenter
// W being up, A left, S right, D down

//speed
//speed will be managed by intervalTime, increases per apple ate, interval time * a base speed 

//snake
//checking if the snake has hit itself will be done by checking if the cell
// the snake has entered has the property of ''snake''

//rng food
//the apple needs to spawn randomly on any position on the board by using math random

//moving the snakeArray will be done by using pop, 
//effectively deleting parts of the snakeArray (array []) and then replacing them in
//the new spot, changing position but always following the front of the snake aka the head. after removal of snake head class it needs changing to a body class
// and the body that it is moved to the front needs replacing with a head class
//to re add it after its removal it would be unshift()

// Elements
const grid = document.querySelector('#grid')

//Generate gameboard
const height = 20
const width = 20
const cellCount = height * width
let cells = []
let snakeArray = [292, 293, 294]
let appleIdx
let intervalTime = 0
let interval = 0
let direction = 1
let speed = 1


function startGame() {
        //Generate grid cells
        for (let idx = 0; idx < cellCount; idx++) {

                //Generate element
                const cell = document.createElement('div')
                cell.innerText = idx
                cell.dataset.index = idx
                cell.classList.add('grid-cell')

                //cell height and width
                cell.style.height = `${100 / height}%`
                cell.style.width = `${100 / width}%`

                //Add cell to the UI
                grid.append(cell)

                //Add the cell to the cells aray
                cells.push(cell)

        }
        //iniate appleRNG
        // let cells = classList.add('apple')
        // appleRNG(cells)

        //the apple spawner, by use of math random, but it doesn't spawn the apple inside of the snake, no free apples (the while loop)
        function appleRNG() {
                do {
                        appleIdx = Math.floor(Math.random() * cells.length)
                } while (cells[appleIdx].classList.contains('snake'))
                cells[appleIdx].classList.add('apple')

          //this was testing to get a random cell, then applying class to the cell (turns out it was grid being used instead of cells)      
        //let randomCell = Math.floor(Math.random() * cells.length)
        //cells[randomCell].classList.add('apple')
        }

        appleRNG()

}

// On Page Load
startGame()
