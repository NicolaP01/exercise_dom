window.onload = createGrid;
function createGrid() {
    let board = document.getElementById("board");
    // let count = 0;
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            let square = document.createElement('div');
            square.classList.add('square');
            if ((x + y) % 2 === 0) {
                square.classList.add('white');
                // square.id = "square" + count;
                // count++;

            } else {
                square.classList.add('black');
                // square.id = "square" + count;
                // count++;
            }
            board.appendChild(square);
        }
    }
    let square = document.getElementsByClassName('square')
    for (let i = 0; i < square.length; i++) {
        let button = document.createElement("button")
        button.className = "button";
        button.addEventListener("click", function () {
            if (square[i].classList.contains('white')) {
                square[i].classList.remove('white')
                square[i].classList.add('black')
            }
            else {
                square[i].classList.remove('black')
                square[i].classList.add('white')
            }
        })
        square[i].appendChild(button);
    }
}

function invertColor() {
    let squares = document.getElementsByClassName('square')
    console.log(squares.length)
    for (i = 0; i < squares.length; i++) {
        let square = squares[i];
        if (square.classList.contains('white')) {
            square.classList.remove('white')
            square.classList.add('black')
        }
        else {
            square.classList.remove('black')
            square.classList.add('white')
        }
    }
    /* for (i = 0; i < 64; i++) {
         let square = document.getElementById("square" + i)
         if (square.classList.contains('white')) {
             square.classList.remove('white')
             square.classList.add('black')
         }
         else{
             square.classList.remove('black')
             square.classList.add('white')
         }
     }
    */
}