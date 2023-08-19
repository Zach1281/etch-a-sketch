createGrid();

function createGrid() {
    const container = document.querySelector('#drawingSpace');
    for(let i = 0; i < 16; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let j = 0; j < 16; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener("mouseover", 
            (event) => {
                event.target.style.cssText = "background-color: white";
            },
            false
            );
            cell.style.cssText = "";
            row.appendChild(cell);
        }
    }
}

function deleteGrid() {
    const row = document.querySelectorAll('.row');
    for(let i = 0; i < row.length; i++){
        row[i].remove(row[i]);
    }
}



const promptBtn = document.querySelector('.prompt');
promptBtn.addEventListener('click',
    () => {
        deleteGrid();
        createGrid();
    });

