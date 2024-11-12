// Configuration for each desktop icon's behavior
const windowsConfig = [
    {
        id: 'tetrisography',
        label: 'Tetrisography',
        icon: 'imgs/desktop/desktop_icon.svg',
        content: [
            { 
                type: 'iframe', 
                title: 'Tetrisography Interactive', // Title for iframe window
                url: 'https://example.com', 
                mobileFallback: true, 
                position: { desktop: { x: '5%', y: '5%' }, mobile: { x: '2%', y: '2%' } }
            },
            { 
                type: 'text', 
                title: 'Tetrisography Description', // Title for description window
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
                title: 'Posters Gallery', // Title for gallery window
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
                title: 'Font Information', // Title for font information window
                content: 'This is information about the fonts used in the project.', 
                position: { desktop: { x: '30%', y: '15%' }, mobile: { x: '5%', y: '5%' } }
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
                title: 'Cannalog Image Gallery', // Title for first gallery window
                images: ['imgs/cannalog1.jpg', 'imgs/cannalog2.jpg'], 
                position: { desktop: { x: '10%', y: '10%' }, mobile: { x: '5%', y: '5%' } }
            },
            { 
                type: 'image', 
                title: 'Cannalog Feature Image', // Title for feature image
                src: 'imgs/cannalog_feature.jpg', 
                position: { desktop: { x: '30%', y: '5%' }, mobile: { x: '10%', y: '20%' } }
            },
            { 
                type: 'image', 
                title: 'Cannalog Team Image', // Title for team image
                src: 'imgs/cannalog_team.jpg', 
                position: { desktop: { x: '30%', y: '30%' }, mobile: { x: '15%', y: '30%' } }
            },
            { 
                type: 'image', 
                title: 'Cannalog Demo Image', // Title for demo image
                src: 'imgs/cannalog_demo.jpg', 
                position: { desktop: { x: '50%', y: '15%' }, mobile: { x: '5%', y: '35%' } }
            },
            { 
                type: 'text', 
                title: 'Cannalog Project Description', // Title for project description
                content: 'This is a description of the Cannalog project.', 
                position: { desktop: { x: '40%', y: '25%' }, mobile: { x: '5%', y: '40%' } }
            },
            { 
                type: 'text', 
                title: 'Additional Cannalog Information', // Title for additional information
                content: 'More information about Cannalog.', 
                position: { desktop: { x: '60%', y: '30%' }, mobile: { x: '10%', y: '45%' } }
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
                title: 'Sting', 
                images: ['imgs/sting/sting1.webp', 'imgs/sting/sting2.webp', 'imgs/sting/sting3.webp', 'imgs/sting/sting4.webp',
                    'imgs/sting/sting5.webp', 'imgs/sting/sting6.webp', 'imgs/sting/sting7.webp', 'imgs/sting/sting8.webp',
                    'imgs/sting/sting9.webp', 'imgs/sting/sting10.webp', 'imgs/sting/sting11.webp', 'imgs/sting/sting12.webp'
                ], 
                position: { desktop: { x: '15%', y: '5%' }, mobile: { x: '5%', y: '5%' } }
            },
            { 
                type: 'text', 
                title: 'Sting', 
                content: 'Recently, we completed the branding for a new cocktail bar in Tel Aviv called "Sting," which blends the vibrant jazz and funk of 1970s New Orleans with the laid-back, bourgeois energy of Tel Aviv. The bar serves as the perfect start to an evening for a young, lighthearted, and sophisticated crowd. It offers a relaxed atmosphere where guests can enjoy excellent cocktails alongside pleasant music, creating an ideal backdrop for any gathering. Every design element was crafted to build a brand that conveys warmth, groove, and authenticity, ensuring an unforgettable experience for every visitor. The jazz and funk music, which are central to the venue, inspired the creation of the curly logotype and emblem. The project included developing a complete visual identity—encompassing the name, logo, color palette, fonts, menus, and accessories', 
                position: { desktop: { x: '57%', y: '5%' }, mobile: { x: '10%', y: '20%' } }
            },
            {
                type: 'logos',
                title: 'Logos',
                logos: [
                    { src: 'imgs/sting/sting13.webp', label: 'Icon' },
                    { src: 'imgs/sting/sting14.webp', label: 'Mark' },
                    { src: 'imgs/sting/sting15.webp', label: 'Logotype' }
                ],
                position: { desktop: { x: '57%', y: '35%' }, mobile: { x: '15%', y: '50%' } }
            },
            {
                type: 'palette',
                title: 'Colors',
                colors: [
                    { color: '#000000', label: '#000000' },
                    { color: '#FFF7E8', label: '#FFF7E8' },
                    { color: '#56260B', label: '#56260B' },
                    { color: '#80220D', label: '#80220D' },
                    { color: '#709B4F', label: '#709B4F' }
                ],
                position: { desktop: { x: '57%', y: '65%' }, mobile: { x: '20%', y: '70%' } }
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

let highestZIndex = 1000; // Starting z-index for windows

// Function to bring a window to the front
function bringWindowToFront(windowElement) {
    highestZIndex += 1; // Increment the z-index
    windowElement.style.zIndex = highestZIndex;
}

function renderWindow(config) {
    config.content.forEach((item, index) => {
        const windowElement = document.createElement('section');
        windowElement.id = `${config.id}-window-${index}`;
        windowElement.classList.add('window');
        windowElement.style.display = 'none';


        windowElement.addEventListener('mousedown', () => bringWindowToFront(windowElement));

        const isLargeScreen = window.innerWidth > 1440; 
        windowElement.style.width = '40vw';
        windowElement.style.maxWidth = isLargeScreen ? '80vw' : '500px';

        const titleText = item.title || `${config.label} - Window ${index + 1}`;
        
        const titleBar = document.createElement('header');
        titleBar.classList.add('window-titlebar');
        titleBar.innerHTML = `<h2>${titleText}</h2><button class="window-button">✕</button>`;
        windowElement.appendChild(titleBar);


        const contentDiv = document.createElement('div');
        contentDiv.classList.add('window-content');

        
        if (item.type === 'gallery') {
            const isSmallScreen = window.innerWidth < 787;
            contentDiv.style.height = isSmallScreen ? 'calc(100% - 40px)': 'calc(80vh - 40px)';
            
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

        } else if (item.type === 'palette') {
            // Create a color palette layout with 2 rows and 3 columns
            const paletteContainer = document.createElement('div');
            paletteContainer.style.display = 'grid';
            paletteContainer.style.gridTemplateColumns = 'repeat(3, 1fr)'; // 3 columns
            paletteContainer.style.gridTemplateRows = 'auto auto';         // 2 rows
            paletteContainer.style.gap = '8px';
        
            // Top row with 2 colors (leave the third column empty)
            item.colors.slice(0, 2).forEach(colorItem => {
                const colorWrapper = document.createElement('div');
                colorWrapper.style.display = 'flex';
                colorWrapper.style.alignItems = 'center';
        
                const colorBox = document.createElement('div');
                colorBox.style.backgroundColor = colorItem.color;
                colorBox.style.width = '40px';
                colorBox.style.height = '40px';
        
                const colorLabel = document.createElement('span');
                colorLabel.textContent = colorItem.label;
                colorLabel.style.marginLeft = '8px';
        
                colorWrapper.appendChild(colorBox);
                colorWrapper.appendChild(colorLabel);
                paletteContainer.appendChild(colorWrapper);
            });
        
            // Add an empty cell in the top row's third column
            const emptyCell = document.createElement('div');
            paletteContainer.appendChild(emptyCell);
        
            // Bottom row with 3 colors
            item.colors.slice(2).forEach(colorItem => {
                const colorWrapper = document.createElement('div');
                colorWrapper.style.display = 'flex';
                colorWrapper.style.alignItems = 'center';
        
                const colorBox = document.createElement('div');
                colorBox.style.backgroundColor = colorItem.color;
                colorBox.style.width = '40px';
                colorBox.style.height = '40px';
        
                const colorLabel = document.createElement('span');
                colorLabel.textContent = colorItem.label;
                colorLabel.style.marginLeft = '8px';
        
                colorWrapper.appendChild(colorBox);
                colorWrapper.appendChild(colorLabel);
                paletteContainer.appendChild(colorWrapper);
            });
        
            contentDiv.appendChild(paletteContainer);
        } else if (item.type === 'logos') {
            // Create logos layout with 2 columns and 2 rows
            const logosContainer = document.createElement('div');
            logosContainer.style.display = 'grid';
            logosContainer.style.gridTemplateColumns = '1fr 1fr';  // 2 columns
            logosContainer.style.gridTemplateRows = 'auto auto';   // 2 rows

        
            // First logo in the left column, first row
            const logo1Wrapper = document.createElement('div');
            logo1Wrapper.style.textAlign = 'center';
            logo1Wrapper.style.gridRow = '1';
            logo1Wrapper.style.gridColumn = '1';
        
            const logo1Label = document.createElement('p');
            logo1Label.textContent = item.logos[0].label;
        
            const logo1Img = document.createElement('img');
            logo1Img.src = item.logos[0].src;
            logo1Img.style.maxHeight = '10vh';
            logo1Img.style.objectFit = 'contain';
        
            logo1Wrapper.appendChild(logo1Label);
            logo1Wrapper.appendChild(logo1Img);
            logosContainer.appendChild(logo1Wrapper);
        
            // Second logo in the left column, second row
            const logo2Wrapper = document.createElement('div');
            logo2Wrapper.style.textAlign = 'center';
            logo2Wrapper.style.gridRow = '2';
            logo2Wrapper.style.gridColumn = '1';
        
            const logo2Label = document.createElement('p');
            logo2Label.textContent = item.logos[1].label;
        
            const logo2Img = document.createElement('img');
            logo2Img.src = item.logos[1].src;
            logo2Img.style.maxHeight = '10vh';
            logo2Img.style.objectFit = 'contain';
        
            logo2Wrapper.appendChild(logo2Label);
            logo2Wrapper.appendChild(logo2Img);
            logosContainer.appendChild(logo2Wrapper);
        
            // Third logo centered vertically in the right column
            const logo3Wrapper = document.createElement('div');
            logo3Wrapper.style.textAlign = 'center';
            logo3Wrapper.style.gridRow = '1 / span 2'; // Span both rows to center vertically
            logo3Wrapper.style.gridColumn = '2';
            logo3Wrapper.style.alignSelf = 'center';   // Center within the cell vertically
        
            const logo3Label = document.createElement('p');
            logo3Label.textContent = item.logos[2].label;
        
            const logo3Img = document.createElement('img');
            logo3Img.src = item.logos[2].src;
            logo3Img.style.maxHeight = '10vh';
            logo3Img.style.objectFit = 'contain';
        
            logo3Wrapper.appendChild(logo3Label);
            logo3Wrapper.appendChild(logo3Img);
            logosContainer.appendChild(logo3Wrapper);
        
            contentDiv.appendChild(logosContainer);
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

