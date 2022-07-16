function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputCountBox = document.querySelector('#controls > input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

function createBoxes(amount, width = 30, height = 30){
  amount -= 1;
  const block = document.createElement('div');
  block.style.width = `${width}px`;
  block.style.height = `${height}px`;
  block.style.backgroundColor = getRandomHexColor();
  boxesDiv.append(block);
  if(amount > 0){
    return createBoxes(amount, width + 10, height + 10);
  }
}

function destroyBoxes(){
  const block = [...boxesDiv.childNodes];
  block.forEach(item => item.remove());
}


createButton.addEventListener('click', () => {
  createBoxes(inputCountBox.value);
})

destroyButton.addEventListener('click', destroyBoxes);