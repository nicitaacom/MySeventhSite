const container = document.querySelector('.container');
const formLogin = document.querySelector('.form-login');
const formRegister = document.querySelector('.form-register');
const buttonLogin = document.querySelector('.button-login');
const buttonRegister = document.querySelector('.button-register');
const buttonPopUp = document.querySelector('.button-pop-up');
const iconClose = document.querySelector('.icon-close');

buttonRegister.addEventListener('click', ()=> {
	formRegister.classList.add('active');
	formLogin.classList.remove('active');
});

buttonLogin.addEventListener('click', ()=> {
	formLogin.classList.add('active');
	formRegister.classList.remove('active');
});

buttonPopUp.addEventListener('click', ()=> {
	container.classList.add('active');
});

iconClose.addEventListener('click', ()=> {
	container.classList.remove('active');
});

