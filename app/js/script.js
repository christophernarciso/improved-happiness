const menu = document.querySelector('#btnMenu');

// Listener for our mobile friendly menu
menu.addEventListener('click', function() {
    menu.classList.toggle('open');
});