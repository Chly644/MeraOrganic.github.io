let serach = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    serach.classList.toggle('active');
     navbar.classList.remove('active');

}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    serach.classList.remove('active');

}

window.onscroll = () => {
     navbar.classList.remove('active');
    serach.classList.remove('active');

}



let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow' , window.scrollY > 0);

});