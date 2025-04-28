const grid = document.querySelector("#grid");
const btn = document.querySelector("#btn");
let box = document.createElement("div");

function setGridSize(){
    let size = prompt("Please enter in the grid size(2-100)")
    generateGrid(size);
}

function generateGrid(size){
    grid.innerHTML = "";
    let amountOfBoxes = size * size;
    let boxWidthHeight = (1000/size) - 2;
    
    
    for(let i = 0; i < amountOfBoxes; i++){
        box = document.createElement("div")
        box.classList.add("box");
        box.style.height = `${boxWidthHeight}px`;
        box.style.width = `${boxWidthHeight}px`;
        grid.appendChild(box);
    }

    let boxes = document.querySelectorAll(".box");

    boxes.forEach((square) =>{
        square.addEventListener("mouseenter", () =>{
            square.style.backgroundColor = "black"
        })
    })
}


generateGrid(16)
btn.addEventListener("click", setGridSize);



