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

function sendReport() {
    Email.send({
     SecureToken : "93f1e3e9-cb1d-4478-9933-3dc9b470425d",
     To: 'icpcsenondaryemail@gmail.com',
     From: "icpcsenondaryemail@gmail.com",
     Subject: "Team #2 Report",
     Body : "От:<br><br>" + document.getElementById("discord-login").value
     + "<br>" + document.getElementById("message-login").value
 }).then(
 message => alert("Спасибо я отвечу ASAP")
 );
}

function sendFeedback() {
   Email.send({
    SecureToken : "93f1e3e9-cb1d-4478-9933-3dc9b470425d",
    To : 'icpcsenondaryemail@gmail.com',
    From : "icpcsenondaryemail@gmail.com",
    Subject : "Team #2 Feedback",
    Body : "От:<br>" + document.getElementById("discord-register").value
    + "<br><br>" + document.getElementById("message-register").value
}).then(
message => alert("Спасибо я отвечу ASAP")
);
}