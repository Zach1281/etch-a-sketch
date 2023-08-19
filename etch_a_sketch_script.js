const container = document.querySelector('#drawingSpace');


for(let i = 0; i < 16; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for(let j = 0; j < 16; j++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.cssText = "";
        cell.textContent = "Cells";
        row.appendChild(cell);
    }
}