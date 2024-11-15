const windowsConfig = [
    {
        id: 'tetrisography',
        label: 'Tetrisography',
        icon: 'imgs/desktop/desktop_icon.svg',
        content: [
            {
                type: 'iframe',
                title: 'Tetrisography Interactive',
                url: 'https://example.com',
                mobileFallback: true,
                position: { desktop: { x: '5%', y: '5%' }, mobile: { x: '2%', y: '2%' } }
            },
            {
                type: 'text',
                title: 'Tetrisography Description',
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
                title: 'Cannalog Gallery',
                images: [
                    'imgs/cannalog/cannalog01.webp',
                    'imgs/cannalog/cannalog02.webp',
                    'imgs/cannalog/cannalog03.webp',
                    'imgs/cannalog/cannalog04.webp',
                    'imgs/cannalog/cannalog05.webp'
                ],
                position: {
                    desktop: { x: '5%', y: '5%' },
                    mobile: { x: '5%', y: '5%' }
                }
            },
            {
                type: 'image',
                title: 'Cannalog Image 1',
                src: 'imgs/cannalog/cannalog06.webp',
                position: {
                    desktop: { x: '5%', y: '50%' },
                    mobile: { x: '10%', y: '30%' }
                }
            },
            {
                type: 'text',
                title: 'Cannalog Description',
                content: 'Design and development of an app for managing medical cannabis consumption, tailored specifically for users dealing with sleep disorders. The primary goal of the app is to help users accurately track their inventory and daily consumption, receive timely reminders for doses and inventory refills, analyze their consumption patterns, and monitor sleep patterns to maximize treatment efficacy and improve sleep quality. The project involved identifying user needs, researching existing solutions, designing the initial user interface and data models, conducting user testing, and refining the app accordingly.',
                position: {
                    desktop: { x: '55%', y: '5%' },
                    mobile: { x: '5%', y: '60%' }
                }
            },
            {
                type: 'text',
                title: 'User Story',
                content: 'When managing my medical cannabis treatment for sleep issues, I want an app that helps me accurately track my supply and daily usage, receive timely reminders for doses and refills, analyze my consumption patterns, and monitor my sleep patterns so that I never run out of cannabis, stay within my prescribed limits, and optimize my treatment effectiveness to improve my sleep quality.',
                position: {
                    desktop: { x: '55%', y: '35%' },
                    mobile: { x: '5%', y: '75%' }
                },
                style: { contentHeight: '15vh',contentWidth: '20vw' }
            },
            {
                type: 'image',
                title: 'Cannalog Image 2',
                src: 'imgs/cannalog/cannalog07.webp',
                position: {
                    desktop: { x: '55%', y: '65%' },
                    mobile: { x: '10%', y: '90%' }
                },
                style: { contentHeight: '15vh', contentWidth: '5vw' }
            },
            {
                type: 'image',
                title: 'Cannalog Image 3',
                src: 'imgs/cannalog/cannalog08.webp',
                position: {
                    desktop: { x: '55%', y: '80%' },
                    mobile: { x: '5%', y: '105%' }
                }
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
                images: [
                    'imgs/sting/sting1.webp',
                    'imgs/sting/sting2.webp',
                    'imgs/sting/sting3.webp',
                    'imgs/sting/sting4.webp',
                    'imgs/sting/sting5.webp',
                    'imgs/sting/sting6.webp',
                    'imgs/sting/sting7.webp',
                    'imgs/sting/sting8.webp',
                    'imgs/sting/sting9.webp',
                    'imgs/sting/sting10.webp',
                    'imgs/sting/sting11.webp',
                    'imgs/sting/sting12.webp'
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
        const position = item.position
            ? isMobile
                ? item.position.mobile
                : item.position.desktop
            : null;

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
        let isDragging = false,
            initialX = 0,
            initialY = 0;

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
            return;
        }

        windowElement = document.createElement('section');
        windowElement.id = windowElementId;
        windowElement.classList.add('window');

        windowElement.addEventListener('mousedown', () => this.bringWindowToFront(windowElement));

        const titleText = item.title || `${config.label} - Window ${index + 1}`;
        const titleBar = document.createElement('header');
        titleBar.classList.add('window-titlebar');
        titleBar.innerHTML = `<h2>${titleText}</h2><button class="window-button">✕</button>`;
        windowElement.appendChild(titleBar);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('window-content');

        if (item.style && item.style.contentHeight) {
            contentDiv.style.height = item.style.contentHeight;
            contentDiv.style.width = item.style.contentWidth;
            contentDiv.style.overflow = 'auto'; 
        }

        switch (item.type) {
            case 'text':
                this.renderTextContent(item, contentDiv, config);
                break;
            case 'gallery':
            case 'image':
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
            this.closeProjectWindows(config);
        });

        this.makeDraggable(windowElement, titleBar);
    }

    closeProjectWindows(config) {
        config.content.forEach((_, idx) => {
            const windowToClose = document.getElementById(`${config.id}-window-${idx}`);
            if (windowToClose) {
                windowToClose.style.display = 'none';
            }
        });
    }

    renderTextContent(item, contentDiv, config) {
        const text = document.createElement('p');
        text.textContent = item.content;

        if (config.id === 'fonts') {
            text.classList.add('fonts-text');
        }

        contentDiv.appendChild(text);
    }

    renderGalleryContent(item, contentDiv) {
        contentDiv.classList.add('gallery-content');

        const galleryWrapper = document.createElement('div');
        galleryWrapper.classList.add('gallery-wrapper');

        const gallery = document.createElement('div');
        gallery.classList.add('scrollable-gallery');

        const images = item.type === 'image' ? [item.src] : item.images;

        images.forEach((imgSrc) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.loading = 'lazy';

            if (item.type === 'image') {
                img.style.maxHeight = '100%';
            }

            gallery.appendChild(img);
        });

        galleryWrapper.appendChild(gallery);
        contentDiv.appendChild(galleryWrapper);

        if (item.type === 'gallery') {
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
        } else if (item.type === 'image') {
            gallery.style.overflow = 'hidden';
            galleryWrapper.style.overflow = 'hidden';
            gallery.style.justifyContent = 'center';
        }
    }

    renderPaletteContent(item, contentDiv) {
        const paletteContainer = document.createElement('div');
        paletteContainer.classList.add('palette-container');

        item.colors.slice(0, 2).forEach((colorItem) => {
            const colorWrapper = document.createElement('div');
            colorWrapper.classList.add('color-wrapper');

            const colorBox = document.createElement('div');
            colorBox.classList.add('color-box');
            colorBox.style.backgroundColor = colorItem.color;

            const colorLabel = document.createElement('span');
            colorLabel.textContent = colorItem.label;
            colorLabel.classList.add('color-label');

            colorWrapper.appendChild(colorBox);
            colorWrapper.appendChild(colorLabel);
            paletteContainer.appendChild(colorWrapper);
        });

        paletteContainer.appendChild(document.createElement('div'));

        item.colors.slice(2).forEach((colorItem) => {
            const colorWrapper = document.createElement('div');
            colorWrapper.classList.add('color-wrapper');

            const colorBox = document.createElement('div');
            colorBox.classList.add('color-box');
            colorBox.style.backgroundColor = colorItem.color;

            const colorLabel = document.createElement('span');
            colorLabel.textContent = colorItem.label;
            colorLabel.classList.add('color-label');

            colorWrapper.appendChild(colorBox);
            colorWrapper.appendChild(colorLabel);
            paletteContainer.appendChild(colorWrapper);
        });

        contentDiv.appendChild(paletteContainer);
    }

    renderLogosContent(item, contentDiv) {
        const logosContainer = document.createElement('div');
        logosContainer.classList.add('logos-container');

        const renderLogo = (logoItem, row, col, rowSpan = 1) => {
            const logoWrapper = document.createElement('div');
            logoWrapper.classList.add('logo-wrapper');
            logoWrapper.style.gridRow = `${row} / span ${rowSpan}`;
            logoWrapper.style.gridColumn = col;
            if (rowSpan > 1) logoWrapper.style.alignSelf = 'center';

            const logoLabel = document.createElement('p');
            logoLabel.textContent = logoItem.label;

            const logoImg = document.createElement('img');
            logoImg.src = logoItem.src;
            logoImg.classList.add('logo-img');

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
        iframe.classList.add('content-iframe');
        contentDiv.appendChild(iframe);
    }

    renderFormContent(item, contentDiv) {
        const form = document.createElement('form');
        form.classList.add('contact-form');

        item.fields.forEach((field) => {
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
            alert('Form submitted!');
        });

        contentDiv.appendChild(form);
    }
}


const windowManager = new WindowManager();

function setupIcons() {
    windowsConfig.forEach((config) => {
        const iconButton = document.createElement('button');
        iconButton.classList.add('desktop-icon');
        iconButton.innerHTML = `<img src="${config.icon}" alt="${config.label}"> ${config.label}`;
        iconButton.addEventListener('click', () => {
            let anyWindowOpen = false;
            config.content.forEach((item, index) => {
                const windowElement = document.getElementById(`${config.id}-window-${index}`);
                if (windowElement && windowElement.style.display !== 'none') {
                    anyWindowOpen = true;
                }
            });

            if (anyWindowOpen) {
                windowManager.closeProjectWindows(config);
            } else {
                config.content.forEach((item, index) => {
                    let windowElement = document.getElementById(`${config.id}-window-${index}`);
                    if (!windowElement) {
                        windowManager.renderWindow(config, item, index);
                        windowElement = document.getElementById(`${config.id}-window-${index}`);
                    }
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

aboutButton.addEventListener('click', () => {
    if (startMenu.classList.contains('open')) {
        startMenu.classList.remove('open');
    } else {
        const buttonRect = aboutButton.getBoundingClientRect();
        startMenu.style.left = `${buttonRect.left}px`;
        startMenu.classList.add('open');
    }
});

function updateTime() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    document.getElementById('time-display').textContent = `${hours}:${minutes} ${ampm}`;
}

updateTime();
setInterval(updateTime, 60000);
