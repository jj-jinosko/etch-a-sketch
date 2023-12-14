let docBody = document.querySelector('body');
docBody.style.border = '1px solid black';

let sketchPadContainer = document.querySelector('#container');
sketchPadContainer.style.width = '480px';
sketchPadContainer.style.height = '480px';
sketchPadContainer.style.border = '1px solid black'
sketchPadContainer.style.display = 'flex';

let sketchPadSize = 480;

let cellsPerSide = 10;
//----------- reset grid --------------------
function resetGrid(){
    let userCells;
    let getUserCells = function () { 
        userCells = prompt('how many cells per side?')
        };
    let userCellsBtn = document.querySelector('#cells');
    userCellsBtn.addEventListener('click', getUserCells());

    cellsPerSide = userCells;
    return cellsPerSide;
}

//---------create # Cells in Row
let newRowCell;
let newColumnCell;
let cellMinWidth = (sketchPadSize/cellsPerSide) + 'px'

for (let i = 0; i < cellsPerSide; i++){
    newRowCell = document.createElement('div');
    newRowCell.style.display = 'flex';
    newRowCell.style.minWidth = cellMinWidth //'160px';

    newRowCell.style.flexDirection = 'column';
    sketchPadContainer.appendChild(newRowCell);

    for (let j = 0; j < cellsPerSide; j++){
        newColumnCell = document.createElement('div');
        newColumnCell.classList.add('cell');
        newColumnCell.style.border = '1px solid black'
        newColumnCell.style.flexGrow = 1;      
        newRowCell.appendChild(newColumnCell);
    }
}

let cells = document.querySelectorAll('.cell');
function clickEvent() {
    console.log('clicked');
    this.style.backgroundColor = 'black';
}

cells.forEach(cell => cell.addEventListener('mouseenter', clickEvent));


