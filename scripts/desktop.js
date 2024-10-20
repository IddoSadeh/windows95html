/* scripts/desktop.js */

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
const desktop = document.querySelector('.desktop');

mailButton.addEventListener('click', function(event) {
    contactWindow.style.display = 'block';

    // Center the window
    const desktopRect = desktop.getBoundingClientRect();
    const windowRect = contactWindow.getBoundingClientRect();

    const x = (desktopRect.width - windowRect.width) / 2;
    const y = (desktopRect.height - windowRect.height) / 2;

    contactWindow.style.left = x + 'px';
    contactWindow.style.top = y + 'px';

    event.stopPropagation();
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

// Draggable Window Functionality
function makeDraggable(element, handle) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    handle.addEventListener('mousedown', function(e) {
        isDragging = true;

        // Get the computed style for left and top
        const styles = window.getComputedStyle(element);
        const left = parseInt(styles.left) || 0;
        const top = parseInt(styles.top) || 0;

        offsetX = e.clientX - left;
        offsetY = e.clientY - top;

        document.body.style.userSelect = 'none'; // Prevent text selection
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        document.body.style.userSelect = ''; // Re-enable text selection
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            // Calculate the new position
            let x = e.clientX - offsetX;
            let y = e.clientY - offsetY;

            // Constrain the window within the desktop area
            const desktopRect = desktop.getBoundingClientRect();
            const windowRect = element.getBoundingClientRect();

            // Left boundary
            if (x < 0) x = 0;
            // Right boundary
            if (x + windowRect.width > desktopRect.width) {
                x = desktopRect.width - windowRect.width;
            }
            // Top boundary
            if (y < 0) y = 0;
            // Bottom boundary
            if (y + windowRect.height > desktopRect.height) {
                y = desktopRect.height - windowRect.height;
            }

            // Apply the new position
            element.style.left = x + 'px';
            element.style.top = y + 'px';
        }
    });
}

// Make the contact window draggable
const contactTitleBar = contactWindow.querySelector('.window-titlebar');
makeDraggable(contactWindow, contactTitleBar);
