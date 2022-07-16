const slider = document.querySelector('#font-size-control');
const targetSpan = document.querySelector('#text');
targetSpan.style.fontSize = `${slider.value}px`;
slider.addEventListener('input', () => {
    targetSpan.style.fontSize = `${slider.value}px`;
})