// Configuration for each desktop icon's behavior
const windowsConfig = [
    {
        id: 'tetrisography',
        label: 'Tetrisography',
        icon: 'imgs/desktop/desktop_icon.svg',
        content: [
            { 
                type: 'iframe', 
                url: 'https://example.com', 
                mobileFallback: true, 
                position: { desktop: { x: 50, y: 50 }, mobile: { x: 10, y: 10 } }
            },
            { 
                type: 'text', 
                content: 'This is a description of the Tetrisography project.', 
                position: { desktop: { x: 200, y: 200 }, mobile: { x: 10, y: 250 } }
            }
        ]
    },
    {
        id: 'posters',
        label: 'Posters',
        icon: 'imgs/desktop/desktop_icon.svg',
        content: [
            { 
                type: 'gallery', 
                images: ['imgs/poster1.jpg', 'imgs/poster2.jpg', 'imgs/poster3.jpg'], 
                position: { desktop: { x: 150, y: 100 }, mobile: { x: 20, y: 20 } }
            }
        ]
    },
    {
        id: 'fonts',
        label: 'Fonts',
        icon: 'imgs/desktop/desktop_icon.svg',
        content: [
            { 
                type: 'text', 
                content: 'This is information about the fonts used in the project.', 
                position: { desktop: { x: 300, y: 150 }, mobile: { x: 10, y: 300 } }
            }
        ]
    },
    {
        id: 'cannalog',
        label: 'Cannalog',
        icon: 'imgs/desktop/desktop_icon.svg',
        content: [
            { 
                type: 'gallery', 
                images: ['imgs/cannalog1.jpg', 'imgs/cannalog2.jpg'], 
                position: { desktop: { x: 100, y: 100 }, mobile: { x: 15, y: 15 } }
            },
            { 
                type: 'image', 
                src: 'imgs/cannalog_feature.jpg', 
                position: { desktop: { x: 300, y: 50 }, mobile: { x: 20, y: 200 } }
            },
            { 
                type: 'image', 
                src: 'imgs/cannalog_team.jpg', 
                position: { desktop: { x: 300, y: 300 }, mobile: { x: 30, y: 300 } }
            },
            { 
                type: 'image', 
                src: 'imgs/cannalog_demo.jpg', 
                position: { desktop: { x: 500, y: 150 }, mobile: { x: 10, y: 350 } }
            },
            { 
                type: 'text', 
                content: 'This is a description of the Cannalog project.', 
                position: { desktop: { x: 400, y: 250 }, mobile: { x: 10, y: 400 } }
            },
            { 
                type: 'text', 
                content: 'More information about Cannalog.', 
                position: { desktop: { x: 600, y: 300 }, mobile: { x: 15, y: 450 } }
            }
        ]
    },
    {
        id: 'sting',
        label: 'Sting',
        icon: 'imgs/desktop/desktop_icon.svg',
        content: [
            { 
                type: 'gallery', 
                images: ['imgs/sting1.jpg', 'imgs/sting2.jpg'], 
                position: { desktop: { x: 200, y: 100 }, mobile: { x: 10, y: 10 } }
            },
            { 
                type: 'text', 
                content: 'Description of Sting Project.', 
                position: { desktop: { x: 500, y: 200 }, mobile: { x: 10, y: 200 } }
            },
            { 
                type: 'text', 
                content: 'Additional Sting information.', 
                position: { desktop: { x: 500, y: 350 }, mobile: { x: 20, y: 300 } }
            },
            { 
                type: 'text', 
                content: 'Sting project team and contact details.', 
                position: { desktop: { x: 500, y: 100 }, mobile: { x: 10, y: 400 } }
            }
        ]
    }
];


// Mail Button Configuration (in Taskbar)
const mailConfig = {
    id: 'mail',
    label: 'Mail',
    icon: 'imgs/desktop/mail_icon.svg',
    content: [
        {
            type: 'form',
            fields: [
                { label: 'Name', inputType: 'text', required: true },
                { label: 'Email', inputType: 'email', required: true },
                { label: 'Message', inputType: 'textarea', required: true }
            ]
        }
    ]
};

// Function to render each window based on its configuration
function positionWindow(windowElement, config, index) {
    const isMobile = window.innerWidth <= 767;
    const position = isMobile ? config.content[index].position.mobile : config.content[index].position.desktop;

    if (!position) {
        centerWindow(windowElement);
    } else {
        windowElement.style.left = `${position.x}px`;
        windowElement.style.top = `${position.y}px`;
    }
}

function renderWindow(config) {
    config.content.forEach((item, index) => {
        const windowElement = document.createElement('section');
        windowElement.id = `${config.id}-window-${index}`;
        windowElement.classList.add('window');
        windowElement.style.display = 'none';

        const titleBar = document.createElement('header');
        titleBar.classList.add('window-titlebar');
        titleBar.innerHTML = `<h2>${config.label} - Window ${index + 1}</h2><button class="window-button">✕</button>`;
        windowElement.appendChild(titleBar);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('window-content');

        if (item.type === 'gallery') {
            const gallery = document.createElement('div');
            gallery.classList.add('scrollable-gallery');
            item.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                gallery.appendChild(img);
            });
            contentDiv.appendChild(gallery);
        } else if (item.type === 'iframe') {
            const iframe = document.createElement('iframe');
            iframe.src = item.url;
            iframe.width = '100%';
            iframe.height = '400px';
            contentDiv.appendChild(iframe);
        } else if (item.type === 'text') {
            const text = document.createElement('p');
            text.textContent = item.content;
            contentDiv.appendChild(text);
        } else if (item.type === 'form') {
            const form = document.createElement('form');
            form.classList.add('contact-form');
            item.fields.forEach(field => {
                const label = document.createElement('label');
                label.textContent = field.label;

                const input = document.createElement(field.inputType === 'textarea' ? 'textarea' : 'input');
                input.type = field.inputType === 'textarea' ? '' : field.inputType;
                input.required = field.required;
                form.appendChild(label);
                form.appendChild(input);
            });
            const submitButton = document.createElement('button');
            submitButton.textContent = 'Send';
            form.appendChild(submitButton);
            contentDiv.appendChild(form);
        }

        windowElement.appendChild(contentDiv);
        document.body.appendChild(windowElement);

        titleBar.querySelector('.window-button').addEventListener('click', () => {
            windowElement.style.display = 'none';
        });

        makeDraggable(windowElement, titleBar);
    });
}

function setupIcons() {
    windowsConfig.forEach(config => {
        const iconButton = document.createElement('button');
        iconButton.classList.add('desktop-icon');
        iconButton.innerHTML = `<img src="${config.icon}" alt="${config.label}"> ${config.label}`;
        iconButton.addEventListener('click', () => {
            config.content.forEach((_, index) => {
                const windowElement = document.getElementById(`${config.id}-window-${index}`);
                if (!windowElement) {
                    renderWindow(config);
                }
                const renderedWindow = document.getElementById(`${config.id}-window-${index}`);
                renderedWindow.style.display = 'block';
                positionWindow(renderedWindow, config, index);
            });
        });
        document.getElementById('desktop').appendChild(iconButton);
    });
}

setupIcons(); // Initialize desktop icons




// Setup Mail Button in Taskbar
const mailButton = document.getElementById('mail-button');
mailButton.addEventListener('click', () => {
    const mailWindow = document.getElementById('mail-window');
    if (!mailWindow) {
        renderWindow(mailConfig);
    }
    document.getElementById('mail-window').style.display = 'block';
    centerWindow(document.getElementById('mail-window'));
});

// Utility function to center windows with taskbar offset
function centerWindow(windowElement) {
    const taskbarHeight = document.querySelector('.taskbar').offsetHeight;
    const desktopHeight = document.getElementById('desktop').offsetHeight;

    // Ensure window fits within the viewport on mobile
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight - taskbarHeight;

    // Adjust window dimensions if larger than viewport
    if (windowElement.offsetWidth > viewportWidth * 0.9) {
        windowElement.style.width = `${viewportWidth * 0.9}px`;
    }
    if (windowElement.offsetHeight > viewportHeight * 0.8) {
        windowElement.style.height = `${viewportHeight * 0.8}px`;
    }

    // Center the window
    const x = (viewportWidth - windowElement.offsetWidth) / 2;
    const y = (viewportHeight - windowElement.offsetHeight) / 2;
    windowElement.style.left = `${x}px`;
    windowElement.style.top = `${Math.max(y, 0)}px`;
}

// Clock Display in Taskbar
function updateTime() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    document.getElementById('time-display').textContent = `${hours}:${minutes} ${ampm}`;
}

// Initialize and update clock every minute
updateTime();
setInterval(updateTime, 60000);

// Utility function for draggable windows
function makeDraggable(element, handle) {
    let isDragging = false, initialX = 0, initialY = 0;

    handle.addEventListener('mousedown', (e) => {
        isDragging = true;
        initialX = e.clientX - parseInt(element.style.left || 0);
        initialY = e.clientY - parseInt(element.style.top || 0);
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            element.style.left = `${e.clientX - initialX}px`;
            element.style.top = `${e.clientY - initialY}px`;
        }
    });

    document.addEventListener('mouseup', () => isDragging = false);
}
