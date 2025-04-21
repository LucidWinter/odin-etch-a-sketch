const grid = document.querySelector("#grid");
let box = document.createElement("div");


function generateGrid(size){
    let amountOfBoxes = size * size;
    let boxWidthHeight = (1000/size) - 2;
    
    for(let i = 0; i < amountOfBoxes; i++){
        box = document.createElement("div")
        box.classList.add("box");
        box.style.height = `${boxWidthHeight}px`;
        box.style.width = `${boxWidthHeight}px`;
        grid.appendChild(box);
    }
}

generateGrid(32);
let boxes = document.querySelectorAll(".box");

boxes.forEach((square) =>{
    square.addEventListener("mouseenter", () =>{
        square.style.backgroundColor = "black"
    })
})