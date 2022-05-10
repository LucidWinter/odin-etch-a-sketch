const container = document.querySelector('.container-box');

function createBlock() {
    const block = document.createElement('div');
    block.classList.add('block');
    block.addEventListener('mouseenter', gridHoverEffect);

    container.appendChild(block);
}

function createGrid() {
    let gridSize = 16 * 16;

    for (let i = 0; i < gridSize; i++) {
        createBlock();
    }
}

function gridHoverEffect(){
    this.style.backgroundColor = '#00FF00';
}

createGrid();
