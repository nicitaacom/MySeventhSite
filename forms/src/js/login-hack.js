const auth = document.querySelectorAll('.buttonAuth');
const formLogin = document.querySelector('.form-login');
const formRegister = document.querySelector('.form-register');


auth.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', ev => {
        console.log(ev);
        console.log(ev.target.dataset);
        console.log(ev.target);

        // Make the previously active button inactive.
        document.querySelector('.buttonAuth.active').classList.remove('active');

        // Make the current form button active.
        navLinkEl.classList.add('active');

        // Switch the form panels.
        if (ev.target.dataset.key === "login") {
            formRegister.classList.remove('active');
            formLogin.classList.add('active');
        }
        if (ev.target.dataset.key === "register") {
            formRegister.classList.add('active');
            formLogin.classList.remove('active');
        }
    });
});