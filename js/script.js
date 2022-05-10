const container = document.querySelector('.container-box');

function createBlock() {
    const grid = document.createElement('div');
    grid.classList.add('block');

    container.appendChild(grid);
}

function createGrid() {
    let gridSize = 16 * 16;

    for (let i = 0; i < gridSize; i++) {
        createBlock();
    }
}

createGrid();
