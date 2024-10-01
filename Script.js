const header = document.querySelector("header");
let isScrolling = false;

window.addEventListener("scroll", function() {
    if (!isScrolling) {
        window.requestAnimationFrame(function() {
            header.classList.toggle("sticky", window.scrollY > 120);
            isScrolling = false;
        });
        isScrolling = true;
    }
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// Corrected typo from 'onlick' to 'onclick'
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

// Close the menu when scrolling
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

// Close the menu when a link is clicked
navlist.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        menu.classList.remove('bx-x');
        navlist.classList.remove('active');
    }
});


