const container = document.querySelector('.container-box');

function defaultGrid(){
    let defaultSize = 8 * 8

    for (let i = 0; i < defaultSize; i++) {
        createBlock(defaultSize);
    }
}

function setGridSize(){
    let size = prompt('Enter in the length of the grid size (value must be between 2 and 50)');

    if(size > 50 || size < 2){
        setGridSize();
    }

    gridSize = +size * +size;
    return gridSize;
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        createBlock(gridSize);
    }
}

function createBlock(gridSize) {
    const block = document.createElement('div');
    const containerSize = 640 * Math.sqrt(gridSize);
    const blockSize = containerSize/gridSize;

    block.classList.add('block');
    block.style.width = `${blockSize}px`;
    block.style.height = `${blockSize}px`;
    block.addEventListener('mouseenter', gridHoverEffect);
    container.appendChild(block);
}

function gridHoverEffect(){
    let o = Math.round, r = Math.random, s = 255;
    this.style.backgroundColor = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function resetGrid(){
    container.innerHTML = '';
}

function runEverything(){
    setGridSize();
    resetGrid();
    createGrid(gridSize);
}

defaultGrid();