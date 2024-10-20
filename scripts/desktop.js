// scripts/desktop.js

// Time update function
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const isPM = hours >= 12;
    hours = hours % 12 || 12; // Convert to 12-hour format
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    const ampm = isPM ? 'PM' : 'AM';
    const timeString = `${hours}:${displayMinutes} ${ampm}`;
    document.getElementById('time-display').textContent = timeString;
}

updateTime();
setInterval(updateTime, 60000);

// Toggle start menu
const aboutMeButton = document.getElementById('about-me-button');
const startMenu = document.getElementById('start-menu');

aboutMeButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent event from bubbling up
    startMenu.classList.toggle('open');
});

// Close the start menu when clicking outside of it
document.addEventListener('click', function(event) {
    if (!startMenu.contains(event.target) && !aboutMeButton.contains(event.target)) {
        startMenu.classList.remove('open');
    }
});

// Handle 'MAIL' button click to open the contact window
const mailButton = document.getElementById('mail-button');
const contactWindow = document.getElementById('contact-window');
const contactClose = document.getElementById('contact-close');
const contactCancel = document.getElementById('contact-cancel');

mailButton.addEventListener('click', function(event) {
    contactWindow.style.display = 'block';
    event.stopPropagation(); // Prevent event from bubbling up
});

// Close the contact window when the close or cancel button is clicked
contactClose.addEventListener('click', function() {
    contactWindow.style.display = 'none';
});

if (contactCancel) {
    contactCancel.addEventListener('click', function() {
        contactWindow.style.display = 'none';
    });
}

// Prevent clicks inside the contact window from closing it
contactWindow.addEventListener('click', function(event) {
    event.stopPropagation();
});

// Close the contact window when clicking outside of it
document.addEventListener('click', function(event) {
    if (!contactWindow.contains(event.target) && !mailButton.contains(event.target)) {
        contactWindow.style.display = 'none';
    }
});
