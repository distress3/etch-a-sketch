const container = document.querySelector('.container');

//container.innerHTML = "poo poo pee pee";

let toAdd = document.createDocumentFragment();

for(let i = 0; i < 4; i++) {
    let newDiv = document.createElement('div');
    newDiv.id = 'y' + i;
    newDiv.className = 'row';
    toAdd.appendChild(newDiv);
}

container.appendChild(toAdd);