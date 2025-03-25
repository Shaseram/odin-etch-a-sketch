const container = document.querySelector("#container");
const boton = document.createElement("button");

function gridDisplay(row,column) {
    
    for(let i = 1; i <= row; i++){

        let row = document.createElement("div");
        row.classList.add("row");

        for(let j = 1; j <= column; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", () => {
                square.classList.add("hover");
            })
            row.appendChild(square);

        }

        container.appendChild(row);
    }
}


boton.id = 'bt-c';
boton.textContent = 'Change NxN';
 
boton.addEventListener("click", () => {
    
    container.textContent = '';
    container.appendChild(boton);
    gridDisplay(n,m)
})

container.appendChild(boton);


gridDisplay(10,10);

