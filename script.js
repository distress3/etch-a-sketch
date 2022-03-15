const container = document.querySelector('.container');
let resetButton = document.createElement('button');
let gridGenerated = false;
resetButton.innerHTML = "Click me!";
resetButton.addEventListener('click', function(){
    let rows = prompt('How wide should the grid be?');
    if (gridGenerated == false) {
        generateGrid(rows);
    } else if (gridGenerated == true) {
        removeGrid();
        generateGrid(rows);
    }
    
})
container.appendChild(resetButton);

function generateGrid(rows) {
    let toAdd = document.createDocumentFragment();
    for(let i = 0; i < rows; i++) {
        let newDiv = document.createElement('div');
        newDiv.id = 'y' + i;
        newDiv.className = 'row';
        toAdd.appendChild(newDiv);
        for(let j = 0; j < rows; j++) {
            let newDivColumn = document.createElement('div');
            newDivColumn.id = 'x' + j;
            newDivColumn.className = 'column';
            newDiv.appendChild(newDivColumn);
            newDivColumn.addEventListener('mouseover', function(){
                    newDivColumn.style.backgroundColor = 'orange';
                });
                
        }
    }
    gridGenerated = true;
    container.appendChild(toAdd);
}

function removeGrid() {
    const newDiv = document.querySelectorAll('.row');
    for (let i = 0; i < newDiv.length; i++) {
        newDiv[i].remove();
    }
    console.log('poop');
}