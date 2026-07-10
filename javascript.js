const container = document.querySelector(".container")
const reset = document.querySelector(".reset")
let squares

function createSquares(num) {
    for (let i=0; i<num; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.toggle("square")
        container.appendChild(squareDiv)
    }
}


function userInputSquare() {
    sideSquareNumber = parseInt(prompt("how many squares per side?"));
    while (sideSquareNumber > 100) {
        sideSquareNumber = parseInt(prompt("that's too many sides\nplease choose something less than 100"))
    }
    return sideSquareNumber
}


function createGrid(sideSquareNumber){
    squareSideLengthPercentage = 100 /sideSquareNumber
    createSquares(sideSquareNumber**2)
    squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.style.width = squareSideLengthPercentage + "%";
        square.style.height = squareSideLengthPercentage + "%";
    })
}

createGrid(userInputSquare())
squareOpacityChange()

function squareOpacityChange() {
    squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
    square.addEventListener("mouseenter", (e) => {
        if (square.style.opacity < 1) {square.style.opacity -= '-1'}
    })
})
}


reset.addEventListener("click", () => {
    squares.forEach((square) => {square.remove()})
    createGrid(userInputSquare())
    squareOpacityChange()
});
