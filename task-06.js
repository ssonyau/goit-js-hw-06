const targetInput = document.querySelector('#validation-input');
const numberOfSymbols = Number.parseInt(targetInput.dataset.length);

targetInput.addEventListener('blur', (event) => {
    if (targetInput.value.length === numberOfSymbols) {
        if (!targetInput.classList.contains('valid')) {
            targetInput.classList.add('valid')
        }
        if (targetInput.classList.contains('invalid')) {
            targetInput.classList.remove('invalid')
        }
    }
    else {
        if (targetInput.classList.contains('valid')) {
            targetInput.classList.remove('valid')
        }
        if (!targetInput.classList.contains('invalid')) {
            targetInput.classList.add('invalid');
        }
    }
})