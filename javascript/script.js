

// Variable pour vérifier si le header est affiché de manière forcée...
let headerForced = false;

document.addEventListener('mousemove', function(event) {
    const header = document.querySelector('header');

    if (!headerForced) {
        // Si la souris est proche du haut de la page (moins de 100px du haut)....
        if (event.clientY < 100) {
            header.classList.add('show');
        } else {
            header.classList.remove('show');
        }
    }
});

// Fonction pour forcer l'affichage du header pendant 10 secondes, indeed
function forceShowHeader() {
    headerForced = true;
    const header = document.querySelector('header');
    header.classList.add('show');

    setTimeout(() => {
        headerForced = false;
    }, 10000); // 10 secondes
}

// Ajout d'un événement click pour forcer l'affichage du header, tu capte ?
document.querySelector('header').addEventListener('click', forceShowHeader);
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mercipour le message!');
});


document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('nav ul');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('menu-active');
});
});
