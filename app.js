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


// scroll - change style of logo and menu button ---------------------

let body = document.querySelector("body");
let img = document.querySelector("img");

let navImg = document.querySelector(".navbar img");
let intro = document.querySelector('#intro');
let blackBg = document.querySelector(".black-bg");
let partners = document.querySelector('#partners');
let footer = document.querySelector("footer");

let navButton = document.querySelector(".navbar-toggler");

document.addEventListener('scroll', function () {
    if (window.pageYOffset >= partners.scrollHeight + intro.scrollHeight + blackBg.scrollHeight) {
        navImg.classList.add('brand-border')
        navButton.classList.add('nav-button-black')

    }
    else if (window.pageYOffset >= intro.scrollHeight + blackBg.scrollHeight) {
        navImg.classList.remove('brand-border')
        // navButton.style.backgroundColor = "none";
        navButton.classList.remove('nav-button-black')

    }
    else if (window.pageYOffset >= intro.scrollHeight) {
        navImg.classList.add('brand-border')
        // navButton.style.backgroundColor = "black";  it only change once
        navButton.classList.add('nav-button-black')

    }

})

