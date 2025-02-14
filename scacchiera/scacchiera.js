window.onload = createGrid;
function createGrid() {
    let board = document.getElementById("board");
    let count = 0;
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            let square = document.createElement('div');
            square.classList.add('square');
            if ((x + y) % 2 === 0) {
                square.classList.add('white');
                square.id = "square" + count;
                count++;

            } else {
                square.classList.add('black');
                square.id = "square" + count;
                count++;
            }
            board.appendChild(square);
        }
    }
}

function invertColor() {
    for (i = 0; i < 64; i++) {
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
}