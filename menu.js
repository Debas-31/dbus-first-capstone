const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-down-link');
const closeBtn = document.querySelector('.close-btn');
const homeMob = document.querySelector('.home-mob');
const aboutMob = document.querySelector('.about-mob');

function open() {
  menu.style.display = 'flex';
}

hamburger.addEventListener('click', open);

function close() {
  menu.style.display = 'none';
}

closeBtn.addEventListener('click', close);
homeMob.addEventListener('click', close);
aboutMob.addEventListener('click', close);
