function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const textSpan = document.querySelector('.color')
const body = document.body;
document.querySelector('.change-color').addEventListener('click', () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  textSpan.textContent = newColor;
})