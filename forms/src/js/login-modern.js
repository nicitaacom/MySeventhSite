const width = window.screen.width * window.devicePixelRatio
const main = document.querySelector('main')

if (width >= 3840) {
	main.style.backgroundImage = "url(../../assets/img/login-modern_4K.jpeg)";	
}
else if (width >= 2560) {
	main.style.backgroundImage = "url(../../assets/img/login-modern_QHD.jpeg)";	
}
else if (width >= 1920) {
	main.style.backgroundImage = "url(../../assets/img/login-modern_FHD.jpeg)";	
}
else if (width >= 1280) {
	main.style.backgroundImage = "url(../../assets/img/login-modern_HD.jpeg)";	
}


// const element = document.querySelector('.bx-check')

// if (element.checked) {
// 	const display = element.style.display;
// 	console.log(display);
// }


// if (document.querySelector('.bx-check').checked) {
// 	alert("checked");
// } else {
// 	alert("You didn't check it! Let me check it for you.");
// }
