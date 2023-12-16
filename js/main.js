let docBody = document.querySelector('body');
docBody.style.border = '1px solid black';

let sketchPadContainer = document.querySelector('#container');
sketchPadContainer.style.width = '480px';
sketchPadContainer.style.height = '480px';
sketchPadContainer.style.border = '1px solid black'
sketchPadContainer.style.display = 'flex';

let sketchPadSize = 480;
let cellsPerSideDEFAULT = 20;


let cells;

//--------- create Grid ------------------
let createGrid = function (cellsPerSide){
    let newRowCell;
    let newColumnCell;

    let cellMinWidth = (sketchPadSize/cellsPerSide) + 'px'

    for (let i = 0; i < cellsPerSide; i++){
        newRowCell = document.createElement('div');
        newRowCell.classList.add('row');
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
}

createGrid(cellsPerSideDEFAULT);
highlightGrid();

//----------- set Grid Size --------------------
let userCellsBtn = document.querySelector('#cells');

function setGridSize(){
    console.log('clicked');
    let userCells;
    userCells = prompt('how many cells per side?');
    console.log(userCells);
    
    userCellsBtn.addEventListener('click', resetGrid());
    userCellsBtn.addEventListener('click', createGrid(userCells));
    highlightGrid();
}

userCellsBtn.addEventListener('click', setGridSize);

//----------- reset grid --------------------
let cellRows = document.querySelectorAll('.row')
function resetGrid(){
    cells.forEach(cell => {cell.remove()});
    cellRows.forEach(row => {row.remove()});

}

//------------ highlight grid ----------------------
function highlightGrid(){
    cells = document.querySelectorAll('.cell');
    function clickEvent() {
        console.log('clicked');
        this.style.backgroundColor = 'rgb(143, 196, 156)';
    }

    cells.forEach(cell => cell.addEventListener('mouseenter', clickEvent));
}