// Select the submenu item and submenu element for toggling visibility
const submenuItem = document.querySelector('.submenu-item');
const submenu = submenuItem.querySelector('.submenu');

// Event listener for clicking the submenu item, toggles the display of the submenu
submenuItem.addEventListener('click', (e) => {
    e.stopPropagation();
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
});

// Event listener for clicking anywhere on the document, hides the submenu if it is open and clicked outside of it
document.addEventListener('click', (e) => {
    if (e.target !== submenuItem && e.target !== submenu && submenu.style.display === 'block') {
        submenu.style.display = 'none';
    }
});

// Function for confirming navigation when clicking external links
function confirmNavigation(url) {
    if (confirm('Are you sure you want to navigate to a different domain?')) {
        window.location.href = url;
    }
}

// Initialize the submenu to be hidden initially
submenu.style.display = 'none';

// Event listener for the close button inside the submenu to hide the submenu
document.querySelector('.close-button').addEventListener('click', function() {
    this.parentElement.style.display = 'none';
});
