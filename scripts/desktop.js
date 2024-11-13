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
                title: 'Posters',
                images: Array.from({ length: 44 }, (_, i) => `imgs/posters/poster${String(i + 1).padStart(2, '0')}.webp`),
                style: { width: '50vw', height: '50vh' }
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
                title: 'Fonts', 
                content: 'Coming Soon', 
                style: { width: '50vw', height: '50vh' }
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

const mailConfig = {
    id: 'mail',
    label: 'Mail',
    content: [
        {
            type: 'form',
            title: 'Contact Me',
            fields: [
                { label: 'Name', inputType: 'text', required: true },
                { label: 'Email', inputType: 'email', required: true },
                { label: 'Message', inputType: 'textarea', required: true }
            ],
            position: { desktop: { x: '30%', y: '20%' }, mobile: { x: '5%', y: '10%' } }
        }
    ]
};


// Class to manage windows
class WindowManager {
    constructor() {
        this.highestZIndex = 1000;
    }

    bringWindowToFront(windowElement) {
        this.highestZIndex += 1;
        windowElement.style.zIndex = this.highestZIndex;
    }

    positionWindow(windowElement, item) {
        const isMobile = window.innerWidth <= 767;
        const position = item.position ? 
                         (isMobile ? item.position.mobile : item.position.desktop) : 
                         null;

        if (!position) {
            this.centerWindow(windowElement);
        } else {
            windowElement.style.position = 'absolute';
            windowElement.style.left = position.x;
            windowElement.style.top = position.y;
        }
    }

    centerWindow(windowElement) {
        const taskbarHeight = document.querySelector('.taskbar')?.offsetHeight || 0;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight - taskbarHeight;

        if (windowElement.offsetWidth > viewportWidth * 0.9) {
            windowElement.style.width = `${viewportWidth * 0.9}px`;
        }
        if (windowElement.offsetHeight > viewportHeight * 0.8) {
            windowElement.style.height = `${viewportHeight * 0.8}px`;
        }

        const x = (viewportWidth - windowElement.offsetWidth) / 2;
        const y = (viewportHeight - windowElement.offsetHeight) / 2;
        windowElement.style.left = `${x}px`;
        windowElement.style.top = `${Math.max(y, 0)}px`;
    }

    makeDraggable(element, handle) {
        let isDragging = false, initialX = 0, initialY = 0;

        const onMouseMove = (e) => {
            if (isDragging) {
                element.style.left = `${e.clientX - initialX}px`;
                element.style.top = `${e.clientY - initialY}px`;
            }
        };

        const onMouseUp = () => {
            if (isDragging) {
                isDragging = false;
                const parentRect = element.parentElement.getBoundingClientRect();
                const elementRect = element.getBoundingClientRect();
                const leftPercent = (elementRect.left / parentRect.width) * 100;
                const topPercent = (elementRect.top / parentRect.height) * 100;

                element.style.left = `${leftPercent}%`;
                element.style.top = `${topPercent}%`;

                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            }
        };

        handle.addEventListener('mousedown', (e) => {
            isDragging = true;
            const rect = element.getBoundingClientRect();
            element.style.left = `${rect.left}px`;
            element.style.top = `${rect.top}px`;
            element.style.position = 'absolute';

            initialX = e.clientX - parseInt(element.style.left || 0);
            initialY = e.clientY - parseInt(element.style.top || 0);
            e.preventDefault();

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    }

    renderWindow(config, item, index) {
        const windowElementId = `${config.id}-window-${index}`;
        let windowElement = document.getElementById(windowElementId);
        if (windowElement) {
            // Window already exists, do not create again
            return;
        }

        windowElement = document.createElement('section');
        windowElement.id = windowElementId;
        windowElement.classList.add('window');
        // Remove the line that hides the window initially
        // windowElement.style.display = 'none';

        windowElement.addEventListener('mousedown', () => this.bringWindowToFront(windowElement));

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

        // Render content based on type
        switch (item.type) {
            case 'text':
                this.renderTextContent(item, contentDiv, config);
                break;
            case 'gallery':
                this.renderGalleryContent(item, contentDiv);
                break;
            case 'palette':
                this.renderPaletteContent(item, contentDiv);
                break;
            case 'logos':
                this.renderLogosContent(item, contentDiv);
                break;
            case 'iframe':
                this.renderIframeContent(item, contentDiv);
                break;
            case 'form':
                this.renderFormContent(item, contentDiv);
                break;
            default:
                console.warn(`Unknown content type: ${item.type}`);
        }

        windowElement.appendChild(contentDiv);
        document.body.appendChild(windowElement);

        titleBar.querySelector('.window-button').addEventListener('click', () => {
            windowElement.style.display = 'none';
        });

        this.makeDraggable(windowElement, titleBar);
    }

    renderTextContent(item, contentDiv, config) {
        const text = document.createElement('p');
        text.textContent = item.content;

        if (config.id === 'fonts') {
            text.style.fontSize = '2rem';
            text.style.textAlign = 'center';
            text.style.margin = '20% 0';
            text.style.fontFamily = 'inherit';
        }

        contentDiv.appendChild(text);
    }

    renderGalleryContent(item, contentDiv) {
        const isSmallScreen = window.innerWidth < 787;
        contentDiv.style.height = isSmallScreen ? 'calc(100% - 40px)' : 'calc(70vh - 40px)';

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

        const leftArrow = document.createElement('button');
        leftArrow.classList.add('arrow', 'arrow-left');
        leftArrow.innerHTML = '◀';
        galleryWrapper.appendChild(leftArrow);

        const rightArrow = document.createElement('button');
        rightArrow.classList.add('arrow', 'arrow-right');
        rightArrow.innerHTML = '▶';
        galleryWrapper.appendChild(rightArrow);

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

            leftArrow.disabled = true;
            rightArrow.disabled = true;

            gallery.scrollTo({ left: newScroll, behavior: 'smooth' });

            setTimeout(() => {
                leftArrow.disabled = false;
                rightArrow.disabled = false;
            }, 400);
        };

        leftArrow.addEventListener('click', () => navigateGallery('left'));
        rightArrow.addEventListener('click', () => navigateGallery('right'));

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
    }

    renderPaletteContent(item, contentDiv) {
        const paletteContainer = document.createElement('div');
        paletteContainer.style.display = 'grid';
        paletteContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
        paletteContainer.style.gridTemplateRows = 'auto auto';
        paletteContainer.style.gap = '8px';

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

        paletteContainer.appendChild(document.createElement('div'));

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
    }

    renderLogosContent(item, contentDiv) {
        const logosContainer = document.createElement('div');
        logosContainer.style.display = 'grid';
        logosContainer.style.gridTemplateColumns = '1fr 1fr';
        logosContainer.style.gridTemplateRows = 'auto auto';

        const renderLogo = (logoItem, row, col, rowSpan = 1) => {
            const logoWrapper = document.createElement('div');
            logoWrapper.style.textAlign = 'center';
            logoWrapper.style.gridRow = `${row} / span ${rowSpan}`;
            logoWrapper.style.gridColumn = col;
            if (rowSpan > 1) logoWrapper.style.alignSelf = 'center';

            const logoLabel = document.createElement('p');
            logoLabel.textContent = logoItem.label;

            const logoImg = document.createElement('img');
            logoImg.src = logoItem.src;
            logoImg.style.maxHeight = '10vh';
            logoImg.style.objectFit = 'contain';

            logoWrapper.appendChild(logoLabel);
            logoWrapper.appendChild(logoImg);
            logosContainer.appendChild(logoWrapper);
        };

        renderLogo(item.logos[0], 1, 1);
        renderLogo(item.logos[1], 2, 1);
        renderLogo(item.logos[2], 1, 2, 2);

        contentDiv.appendChild(logosContainer);
    }

    renderIframeContent(item, contentDiv) {
        const iframe = document.createElement('iframe');
        iframe.src = item.url;
        iframe.width = '100%';
        iframe.height = '400px';
        contentDiv.appendChild(iframe);
    }

    renderFormContent(item, contentDiv) {
        const form = document.createElement('form');
        form.classList.add('contact-form');

        item.fields.forEach(field => {
            const label = document.createElement('label');
            label.textContent = field.label;

            let input;
            if (field.inputType === 'textarea') {
                input = document.createElement('textarea');
            } else {
                input = document.createElement('input');
                input.type = field.inputType;
            }
            input.required = field.required;
            input.name = field.label.toLowerCase();

            form.appendChild(label);
            form.appendChild(input);
        });

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Send';
        submitButton.type = 'submit';
        form.appendChild(submitButton);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle form submission here
            alert('Form submitted!');
        });

        contentDiv.appendChild(form);
    }
}

const windowManager = new WindowManager();

function setupIcons() {
    windowsConfig.forEach(config => {
        const iconButton = document.createElement('button');
        iconButton.classList.add('desktop-icon');
        iconButton.innerHTML = `<img src="${config.icon}" alt="${config.label}"> ${config.label}`;
        iconButton.addEventListener('click', () => {
            // Check if any of the windows for this icon are open
            let anyWindowOpen = false;
            config.content.forEach((item, index) => {
                const windowElement = document.getElementById(`${config.id}-window-${index}`);
                if (windowElement && windowElement.style.display !== 'none') {
                    anyWindowOpen = true;
                }
            });

            if (anyWindowOpen) {
                // Close all windows
                config.content.forEach((item, index) => {
                    const windowElement = document.getElementById(`${config.id}-window-${index}`);
                    if (windowElement) {
                        windowElement.style.display = 'none';
                    }
                });
            } else {
                // Open all windows
                config.content.forEach((item, index) => {
                    let windowElement = document.getElementById(`${config.id}-window-${index}`);
                    if (!windowElement) {
                        windowManager.renderWindow(config, item, index);
                        windowElement = document.getElementById(`${config.id}-window-${index}`);
                    }
                    // Ensure the window is displayed
                    windowElement.style.display = 'block';
                    windowManager.bringWindowToFront(windowElement);
                    windowManager.positionWindow(windowElement, item);
                });
            }
        });
        document.getElementById('desktop').appendChild(iconButton);
    });
}

setupIcons();

const mailButton = document.getElementById('mail-button');
mailButton.addEventListener('click', () => {
    const windowElementId = `${mailConfig.id}-window-0`;
    let mailWindow = document.getElementById(windowElementId);
    if (mailWindow && mailWindow.style.display !== 'none') {
        mailWindow.style.display = 'none';
    } else {
        if (!mailWindow) {
            windowManager.renderWindow(mailConfig, mailConfig.content[0], 0);
            mailWindow = document.getElementById(windowElementId);
        }
        mailWindow.style.display = 'block';
        windowManager.bringWindowToFront(mailWindow);
        windowManager.positionWindow(mailWindow, mailConfig.content[0]);
    }
});

const aboutButton = document.getElementById('about-me-button');
const startMenu = document.getElementById('start-menu');

aboutButton.addEventListener('click', (e) => {
    // Toggle start menu visibility
    if (startMenu.classList.contains('open')) {
        startMenu.classList.remove('open');
    } else {
        // Position the start menu above the "ABOUT" button
        const buttonRect = aboutButton.getBoundingClientRect();
        const startMenuWidth = startMenu.offsetWidth;

        startMenu.style.left = `${buttonRect.left}px`;
        startMenu.classList.add('open');
    }
});



// Clock Display in Taskbar
function updateTime() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    document.getElementById('time-display').textContent = `${hours}:${minutes} ${ampm}`;
}

updateTime();
setInterval(updateTime, 60000);