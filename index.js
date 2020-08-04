let sortableCells = [
  { text: 1, class: 'one' },
  { text: 2, class: 'two' },
  { text: 3, class: 'three' },
  { text: 4, class: 'four' },
  { text: 5, class: 'five' },
  { text: 6, class: 'six' },
  { text: 7, class: 'seven' },
  { text: 8, class: 'eight' },
  { text: 9, class: 'nine' },
]

var grid = document.querySelector('#grid')
var shuffleButton = document.querySelector('#btnShuffle')
var sortButton = document.querySelector('#btnSort')

shuffleButton.addEventListener('click', () => {
  grid.innerHTML = ''
  shuffle(sortableCells)
  insertGrid()
})

sortButton.addEventListener('click', () => {
  grid.innerHTML = ''
  sortableCells.sort((a, b) => a.text - b.text)
  insertGrid()
})

function insertGrid() {
  sortableCells.forEach((cell) => {
    let el = document.createElement('div')
    el.innerText = cell.text
    el.className += cell.class
    grid.appendChild(el)
  })
}

insertGrid()

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}
