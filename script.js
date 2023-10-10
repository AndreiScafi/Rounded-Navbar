const btn = document.querySelector('.navbar-btn');
const navbar = document.querySelector('.navbar');

btn.addEventListener('click', () => {
    navbar.classList.toggle('change');
})