const body = document.querySelector('body');
const menu = document.querySelector('#btnMenu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fades = document.querySelectorAll('.has-fade');
const mobileLinks = document.querySelectorAll('.mobile__link');

// Listener for our mobile friendly menu
menu.addEventListener('click', function() {
    // Toggle no scroll on click
    body.classList.toggle('no-scroll');
    // Toggle open css
    const isOpen = header.classList.toggle('open');
    if (isOpen) {
        fades.forEach((el) => {
            el.classList.remove('fade-out');
            el.classList.add('fade-in');
        });
    } else {
        fades.forEach((el) => {
            el.classList.remove('fade-in');
            el.classList.add('fade-out');
        });
    }
});

// Listener for our mobile menu links when a user selects a option.
for (var link of mobileLinks) {
    link.addEventListener('click', function() {
        console.log('Clicked a link');
        // Remove no scroll on click
        body.classList.remove('no-scroll');
    
        // Remove the open on click
        header.classList.remove('open');

        // Remove the fade animations
        fades.forEach((el) => {
            el.classList.remove('fade-in');
            el.classList.add('fade-out');
        });
    });
}