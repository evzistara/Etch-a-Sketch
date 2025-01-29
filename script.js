const container = document.querySelector(".container");

function makeGrid(){
    for(let i = 0; i < 256; i++){
        const div = document.createElement("div");
        div.classList.add("square");

        div.addEventListener("mouseover", ()=>{
            div.classList.add("hover")
        })
        container.appendChild(div);
    }
};

makeGrid();
