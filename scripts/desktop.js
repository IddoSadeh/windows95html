// Cache DOM elements
const timeDisplay = document.getElementById('time-display');
const aboutMeButton = document.getElementById('about-me-button');
const startMenu = document.getElementById('start-menu');
const mailButton = document.getElementById('mail-button');
const contactWindow = document.getElementById('contact-window');
const contactClose = document.getElementById('contact-close');
const contactCancel = document.getElementById('contact-cancel');
const desktop = document.querySelector('.desktop');

// Time display functionality
function updateTime() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    timeDisplay.textContent = `${hours}:${minutes} ${ampm}`;
}

// Initialize clock
updateTime();
setInterval(updateTime, 60000); // Update every minute

// Start menu functionality
aboutMeButton.addEventListener('click', function(event) {
    event.stopPropagation();
    startMenu.classList.toggle('open');
});

// Close start menu when clicking outside
document.addEventListener('click', function(event) {
    if (!startMenu.contains(event.target) && !aboutMeButton.contains(event.target)) {
        startMenu.classList.remove('open');
    }
});

// Contact window functionality
function handleContactWindow() {
    // Center the window
    const desktopRect = desktop.getBoundingClientRect();
    const windowRect = contactWindow.getBoundingClientRect();
    
    const x = (desktopRect.width - windowRect.width) / 2;
    const y = (desktopRect.height - windowRect.height) / 2;
    
    contactWindow.style.left = x + 'px';
    contactWindow.style.top = y + 'px';
}

mailButton.addEventListener('click', function(event) {
    contactWindow.style.display = 'block';
    handleContactWindow();
    event.stopPropagation();
});

// Close contact window handlers
function closeContactWindow() {
    contactWindow.style.display = 'none';
}

contactClose.addEventListener('click', closeContactWindow);
contactCancel?.addEventListener('click', closeContactWindow);

// Prevent clicks inside contact window from closing it
contactWindow.addEventListener('click', function(event) {
    event.stopPropagation();
});

// Close contact window when clicking outside
document.addEventListener('click', function(event) {
    if (!contactWindow.contains(event.target) && !mailButton.contains(event.target)) {
        contactWindow.style.display = 'none';
    }
});

// Draggable window functionality
function makeDraggable(element, handle) {
    let isDragging = false;
    let currentX = 0;
    let currentY = 0;
    let initialX = 0;
    let initialY = 0;

    function startDragging(e) {
        // Get the computed style for left and top
        const styles = window.getComputedStyle(element);
        currentX = parseInt(styles.left) || 0;
        currentY = parseInt(styles.top) || 0;

        // Get initial mouse/touch position
        initialX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        initialY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;

        isDragging = true;
        document.body.style.userSelect = 'none';
    }

    function stopDragging() {
        isDragging = false;
        document.body.style.userSelect = '';
    }

    function drag(e) {
        if (!isDragging) return;

        e.preventDefault();
        
        // Get current mouse/touch position
        const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
        const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;

        // Calculate the new position
        let newX = currentX + (clientX - initialX);
        let newY = currentY + (clientY - initialY);

        // Get boundaries
        const desktopRect = desktop.getBoundingClientRect();
        const windowRect = element.getBoundingClientRect();

        // Constrain to desktop boundaries
        newX = Math.max(0, Math.min(newX, desktopRect.width - windowRect.width));
        newY = Math.max(0, Math.min(newY, desktopRect.height - windowRect.height));

        // Apply the new position
        element.style.left = newX + 'px';
        element.style.top = newY + 'px';
    }

    // Mouse events
    handle.addEventListener('mousedown', startDragging);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);

    // Touch events
    handle.addEventListener('touchstart', startDragging);
    document.addEventListener('touchmove', drag);
    document.addEventListener('touchend', stopDragging);
}

// Initialize draggable contact window
const contactTitleBar = contactWindow.querySelector('.window-titlebar');
makeDraggable(contactWindow, contactTitleBar);