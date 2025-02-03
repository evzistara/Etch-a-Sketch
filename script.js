const container = document.querySelector(".container");
const button = document.querySelector("button");

function firstGrid(){
    for(let i = 0; i < 16*16; i++){
        const div = document.createElement("div");
        div.classList.add("square");

        div.addEventListener("mouseover", ()=>{
            div.classList.add("hover")
        })
        container.appendChild(div);
    }

    const squares = document.querySelectorAll(".square");
    squares.forEach(square =>{
        square.style.width = `calc(100%/16)`;
    });
}
firstGrid();

function makeGrid(size){
    container.innerHTML= "";

    for(let i = 0; i < size * size; i++){
        const div = document.createElement("div");
        div.classList.add("square");

        div.addEventListener("mouseover", ()=>{
            div.classList.add("hover")
        });

        container.appendChild(div);
    }

    const squares = document.querySelectorAll(".square");
    squares.forEach(square =>{
        square.style.width = `calc(100%/${size})`
    });

};


function newSquares(){
    const noOfSquares = parseInt(window.prompt("How many squares per side do you want?"));
    if(noOfSquares > 100 || noOfSquares < 1 || isNaN(noOfSquares)){
        alert("Maximum number of squares is 100");
    } else{
        makeGrid(noOfSquares);
       
    }
   
}

button.addEventListener("click", newSquares);