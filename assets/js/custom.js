// Custom JS to handle menu overlay click
// (Overrides/Supplements theme.js which has a bug with the overlay div check)

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('fullscreen-menu');

    if (menu) {
        menu.addEventListener('click', (e) => {
            // If logic: If click is NOT within the menu panel, close the menu.
            // This handles clicks on #fullscreen-menu and the inner .bg-black/40 div.
            if (!e.target.closest('.menu-panel')) {
                menu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
});
