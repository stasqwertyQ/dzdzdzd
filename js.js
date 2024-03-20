
const inputAmount = document.getElementById('inputAmount');
const createButton = document.getElementById('createButton');
const destroyButton = document.getElementById('destroyButton'); 
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
    const amount = inputAmount.value;
    clearBoxes();
    for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
      const size = 30 + i * 10;
    box.style.backgroundColor = getRandomColor();
    box.style.width = size + 'px';
box.style.height = size + 'px';
box.classList.add('box');
    boxesContainer.appendChild(box);
    }
}
function clearBoxes() {
    boxesContainer.innerHTML = '';
}


  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }


function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
