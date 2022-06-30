const gridContainer = document.querySelector('#grid-container');

for (let j = 0; j<16; j++) {
    const row = document.createElement('div');
    row.classList.add('row');
    gridContainer.appendChild(row);

    for (let i = 0; i<16; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        
        row.appendChild(square);
    }

    const lineBreak = document.createElement("br");
    lineBreak.classList.add('lineBreak');
    row.appendChild(lineBreak);
}

// click event to change color of square
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mousedown', function(event) {
        square.setAttribute('style', 'background-color: black;');
    });
});