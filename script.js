const grid = document.querySelector("#grid");

function generateGrid(size){
    let amountOfBoxes = size * size;
    let boxWidthHeight = (1000/size) - 2;

    for(let i = 0; i < amountOfBoxes; i++){
        const box = document.createElement("div");
        box.classList.add("box", ".box:hover");
        box.style.height = `${boxWidthHeight}px`;
        box.style.width = `${boxWidthHeight}px`;
        grid.appendChild(box);
    }

}

generateGrid(16);