const container = document.querySelector("#container");
const boton = document.createElement("button");
boton.textContent = 'Change NxN';
boton.id = 'button';

const gridSquare = document.createElement("div");
gridSquare.id = 'grid-square';

function gridDisplay(n) {

    const squareSize = 600 / n

    for(let i = 0; i < n; i++) {
        const squareRow = document.createElement("div");
        squareRow.classList.add("row-content");
        for(let j = 0; j < n; j++) {
            let square = document.createElement("div");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.classList.add("square");
            
            let v1 = Math.floor(Math.random() * 256);
            let v2 = Math.floor(Math.random() * 256);
            let v3 = Math.floor(Math.random() * 256);
            let opacity = 0.0;

            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = `rgb(${v1},${v2},${v3})`;
                
                if (opacity <= 0.9) {
                    opacity += 0.1;
                }
                
                square.style.opacity = `${opacity}`;
            });

            squareRow.appendChild(square);
        }

        gridSquare.appendChild(squareRow);
    }
}

function startSquare() {
    
    boton.addEventListener("click", () => {
        let n = prompt("Indicate the NxN number");
        while(n > 100 || n < 1) {
            n = prompt("Indicate the N rows with valid domain");
        }
    
        gridSquare.textContent = '';
        gridDisplay(n);
    });

    container.appendChild(boton);
    container.appendChild(gridSquare);  

    gridDisplay(10);
}

startSquare();

