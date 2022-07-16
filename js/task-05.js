const inputField = document.querySelector('#name-input');
const outputSpan = document.querySelector('#name-output');
inputField.addEventListener('input', () => {
    if (inputField.value === '') {
        outputSpan.textContent = "Anonymous";
    }
    else {
        outputSpan.textContent = inputField.value;
    }
})