const mobileLinks = document.querySelector('.bx');
const authMobile = document.querySelector('.authMobile');

mobileLinks.addEventListener('click',function() {
	authMobile.classList.add('visible');
})

document.querySelector('body').addEventListener('click',function() {
	console.log("body click");

	if (authMobile.classList.contains('visible')) {
		mobileLinks.classList.remove('visible');
	}
})