let docBody = document.querySelector('body');
docBody.style.border = '1px solid black';

let sketchPadContainer = document.querySelector('#container');
sketchPadContainer.style.width = '480px';
sketchPadContainer.style.height = '480px';
sketchPadContainer.style.border = '1px solid black'
sketchPadContainer.style.display = 'flex';

// sketchPadContainer.style.margin = '0 auto';
// sketchPadContainer.style.padding = '8px';


let containerSize = 480;
let boxesInRow = 3;
let boxesInColumn = 3;
// let boxMinWidth = (boxSize / boxesInRow) * (10.00/10.00);
// console.log(minBoxWidth);

//---------create # boxes in Row
let newRowBox;
let newColumnBox;

for (let i = 0; i < boxesInRow; i++){
    newRowBox = document.createElement('div');
    newRowBox.style.display = 'flex';
    newRowBox.style.minWidth = '160px';

    newRowBox.style.flexDirection = 'column';
    newRowBox.style.border = '1px solid black';
    newRowBox.style.flex
    sketchPadContainer.appendChild(newRowBox);

    for (let j = 0; j < boxesInColumn; j++){
        newColumnBox = document.createElement('div');
        newColumnBox.classList.add('cell');
        newColumnBox.style.flexGrow = 1;
        newColumnBox.style.border = '1px solid black';
        
        newRowBox.appendChild(newColumnBox);
    }
}

let cells = document.querySelectorAll('.cell');
function clickEvent() {
    console.log('clicked');
    this.style.backgroundColor='black';
}

cells.forEach(cell => cell.addEventListener('click', clickEvent));


