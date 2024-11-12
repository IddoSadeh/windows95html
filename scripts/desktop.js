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
                position: { desktop: { x: '5%', y: '5%' }, mobile: { x: '2%', y: '2%' } }
            },
            { 
                type: 'text', 
                content: 'This is a description of the Tetrisography project.', 
                position: { desktop: { x: '20%', y: '20%' }, mobile: { x: '2%', y: '30%' } }
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
                position: { desktop: { x: '15%', y: '10%' }, mobile: { x: '5%', y: '5%' } }
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
                position: { desktop: { x: '30%', y: '15%' }, mobile: { x: '2%', y: '30%' } }
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
                position: { desktop: { x: '10%', y: '10%' }, mobile: { x: '5%', y: '5%' } }
            },
            { 
                type: 'image', 
                src: 'imgs/cannalog_feature.jpg', 
                position: { desktop: { x: '30%', y: '5%' }, mobile: { x: '5%', y: '20%' } }
            },
            { 
                type: 'image', 
                src: 'imgs/cannalog_team.jpg', 
                position: { desktop: { x: '30%', y: '30%' }, mobile: { x: '10%', y: '30%' } }
            },
            { 
                type: 'image', 
                src: 'imgs/cannalog_demo.jpg', 
                position: { desktop: { x: '50%', y: '15%' }, mobile: { x: '2%', y: '35%' } }
            },
            { 
                type: 'text', 
                content: 'This is a description of the Cannalog project.', 
                position: { desktop: { x: '40%', y: '25%' }, mobile: { x: '2%', y: '40%' } }
            },
            { 
                type: 'text', 
                content: 'More information about Cannalog.', 
                position: { desktop: { x: '60%', y: '30%' }, mobile: { x: '5%', y: '45%' } }
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
                images: ['imgs/sting/sting1.webp', 'imgs/sting/sting2.webp', 'imgs/sting/sting3.webp', 'imgs/sting/sting4.webp',
                    'imgs/sting/sting5.webp', 'imgs/sting/sting6.webp', 'imgs/sting/sting7.webp', 'imgs/sting/sting8.webp',
                    'imgs/sting/sting9.webp', 'imgs/sting/sting10.webp', 'imgs/sting/sting11.webp', 'imgs/sting/sting12.webp'
                ], 
                position: { desktop: { x: '15%', y: '10%' }, mobile: { x: '2%', y: '2%' } }
            },
            { 
                type: 'text', 
                content: 'Description of Sting Project.', 
                position: { desktop: { x: '60%', y: '10%' }, mobile: { x: '2%', y: '20%' } }
            },
            { 
                type: 'text', 
                content: 'Additional Sting information.', 
                position: { desktop: { x: '60%', y: '35%' }, mobile: { x: '5%', y: '30%' } }
            },
            { 
                type: 'text', 
                content: 'Sting project team and contact details.', 
                position: { desktop: { x: '60%', y: '60%' }, mobile: { x: '2%', y: '40%' } }
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
        windowElement.style.position = 'absolute';
        windowElement.style.left = position.x;
        windowElement.style.top = position.y;
    }
}


function renderWindow(config) {
    config.content.forEach((item, index) => {
        const windowElement = document.createElement('section');
        windowElement.id = `${config.id}-window-${index}`;
        windowElement.classList.add('window');
        windowElement.style.display = 'none';

        const isLargeScreen = window.innerWidth > 1440; // Adjust threshold as needed
        windowElement.style.width = '40vw';
        windowElement.style.maxWidth = isLargeScreen ? '80vw' : '500px';

        const titleBar = document.createElement('header');
        titleBar.classList.add('window-titlebar');
        titleBar.innerHTML = `<h2>${config.label} - Window ${index + 1}</h2><button class="window-button">✕</button>`;
        windowElement.appendChild(titleBar);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('window-content');

        // Conditionally set contentDiv height based on item type and screen size
        if (item.type === 'gallery') {
            contentDiv.style.height = 'calc(80vh - 40px)';
            
            const galleryWrapper = document.createElement('div');
            galleryWrapper.classList.add('gallery-wrapper');

            const gallery = document.createElement('div');
            gallery.classList.add('scrollable-gallery');
            item.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.loading = 'lazy';
                gallery.appendChild(img);
            });

            galleryWrapper.appendChild(gallery);
            contentDiv.appendChild(galleryWrapper);

            // Left and Right Arrows for Desktop
            const leftArrow = document.createElement('button');
            leftArrow.classList.add('arrow', 'arrow-left');
            leftArrow.innerHTML = '◀';
            galleryWrapper.appendChild(leftArrow);

            const rightArrow = document.createElement('button');
            rightArrow.classList.add('arrow', 'arrow-right');
            rightArrow.innerHTML = '▶';
            galleryWrapper.appendChild(rightArrow);

            // Function to handle gallery navigation
            const navigateGallery = (direction) => {
                const imageWidth = gallery.clientWidth;
                const currentScroll = gallery.scrollLeft;
                const maxScroll = gallery.scrollWidth - imageWidth;
            
                let newScroll;
                if (direction === 'right') {
                    newScroll = currentScroll >= maxScroll - 10 ? 0 : currentScroll + imageWidth;
                } else {
                    newScroll = currentScroll <= 10 ? maxScroll : currentScroll - imageWidth;
                }
            
                // Disable arrows during scrolling
                leftArrow.disabled = true;
                rightArrow.disabled = true;
            
                gallery.scrollTo({
                    left: newScroll,
                    behavior: 'smooth'
                });
            
                // Re-enable arrows after the animation is done
                setTimeout(() => {
                    leftArrow.disabled = false;
                    rightArrow.disabled = false;
                }, 400); // Adjust time if necessary to match the scroll animation duration
            };
            
            // Arrow Click Event Listeners
            leftArrow.addEventListener('click', () => navigateGallery('left'));
            rightArrow.addEventListener('click', () => navigateGallery('right'));

            // Swipe Navigation for Mobile with wrap-around
            let startX;
            gallery.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
            });

            gallery.addEventListener('touchmove', (e) => {
                if (!startX) return;

                const diff = startX - e.touches[0].clientX;
                if (Math.abs(diff) > 50) {
                    navigateGallery(diff > 0 ? 'right' : 'left');
                    startX = null;
                }
            });

            gallery.addEventListener('touchend', () => {
                startX = null;
            });

        } else {
            // For non-gallery content, set height for typical display
            contentDiv.style.height = 'calc(100% - 40px)';

            if (item.type === 'iframe') {
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

        // Convert percentages to pixel values
        const rect = element.getBoundingClientRect();
        element.style.left = `${rect.left}px`;
        element.style.top = `${rect.top}px`;
        element.style.position = 'absolute';

        initialX = e.clientX - parseInt(element.style.left || 0);
        initialY = e.clientY - parseInt(element.style.top || 0);

        // Prevent text selection while dragging
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            element.style.left = `${e.clientX - initialX}px`;
            element.style.top = `${e.clientY - initialY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;

            // Optionally, convert back to percentages if needed for layout
            const parentRect = element.parentElement.getBoundingClientRect();
            const elementRect = element.getBoundingClientRect();
            const leftPercent = (elementRect.left / parentRect.width) * 100;
            const topPercent = (elementRect.top / parentRect.height) * 100;

            element.style.left = `${leftPercent}%`;
            element.style.top = `${topPercent}%`;
        }
    });
}

