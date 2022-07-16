const loginForm = document.querySelector('.login-form');
const emailFild = document.querySelector('[name="email"]');
const passwordFild = document.querySelector('[name="password"]');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(emailFild.value === "" || passwordFild.value === ""){
        alert('Not all fields are filled');
        return;
    }
    console.log({
        email: emailFild.value,
        password: passwordFild.value
    });
    event.target.reset();
})
