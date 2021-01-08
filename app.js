// Timer ----------------------------------------
let countDownDate = new Date("June 8, 2021 13:00:00").getTime();
let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));

    document.querySelector('#days').innerText = days;
    document.querySelector('#hours').innerText = hours;
    document.querySelector('#minutes').innerText = minutes;
    document.querySelector('#seconds').innerText = seconds;


})


// Disappear of menu when a link is chosen -----------------------
let links = document.querySelectorAll(".navbar-nav a");
let navLinks = document.querySelector("#navLinks");

for (link of links) {
    link.addEventListener('click', function () {
        // When clicked, remove show. When menu(nav-toggler) is clicked show it again
        navLinks.classList.toggle('show')

    })
}

