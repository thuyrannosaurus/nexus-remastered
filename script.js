// Image pairs configuration - organized by page numbers and subpages
const imagePairs = [
    { 
        old: 'images/1A-old.jpg', 
        new: 'images/1A-new.jpg', 
        label: 'Search Overview',
        description: 'Updated the navigation menu with a cleaner layout and improved visibility of menu items.',
        details: {
            title: 'Search Overview Redesign',
            figmaLink: 'https://figma.com/file/search-overview',
            overview: 'The search interface has been completely revamped to provide a more intuitive and efficient search experience.',
            designChanges: [
                {
                    element: 'Filters & Search Inputs',
                    oldDesign: 'Spread out and visually disconnected',
                    newDesign: 'Compact, aligned, and scannable'
                },
                {
                    element: 'Side Navigation',
                    oldDesign: 'Dark-themed with high contrast',
                    newDesign: 'Lighter, modernized design with clearer icons'
                },
                {
                    element: 'Listing Cards',
                    oldDesign: 'Dense and cluttered',
                    newDesign: 'Refined, readable, and better structured'
                },
                {
                    element: 'Sorting & Actions',
                    oldDesign: 'Separate from key interactions',
                    newDesign: 'Placed strategically for better accessibility'
                }
            ],
            implementationNotes: 'The new search interface uses advanced caching techniques and debounced search to ensure smooth performance even with large datasets.',
            
            whyThisMatters: {
                description: 'The new Listings Overview design aligns with fundamental UX laws, ensuring faster interactions, better readability, and a more intuitive workflow. These changes empower users to find and manage listings more effectively, leading to a smoother experience and higher engagement.',
                uxResources: [
                    {
                        title: 'Fitts Law',
                        url: 'https://lawsofux.com/fittss-law/'
                    },
                    {
                        title: 'Law of Proximity',
                        url: 'https://lawsofux.com/law-of-proximity/'
                    },
                    {
                        title: 'Hicks Law',
                        url: 'https://lawsofux.com/hicks-law/'
                    },
                    {
                        title: 'Nielsen\'s Heuristics',
                        url: 'https://www.nngroup.com/articles/ten-usability-heuristics/'
                    },
                    {
                        title: 'Design Principles',
                        url: 'https://principles.design'
                    }
                ]
            }
        }
    },
    { 
        old: 'images/1B-old.jpg', 
        new: 'images/1B-new.jpg', 
        label: 'Listing Details',
        description: 'Redesigned the listing details page for better information hierarchy.',
        details: {
            title: 'Listing Details Redesign',
            figmaLink: 'https://figma.com/file/listing-details',
            overview: 'The listing details page has been redesigned to showcase important information more effectively.',
            designChanges: [
                {
                    "element": "Page Layout",
                    "oldDesign": "Scattered information with minimal grouping, making it harder to scan key details.",
                    "newDesign": "Structured sections with clear grouping, improving readability and organization."
                },
                {
                    "element": "Listing Title & Summary",
                    "oldDesign": "Small text size with limited emphasis on important details like price and status.",
                    "newDesign": "Bold listing title with price and status emphasized for quicker scanning."
                },
                {
                    "element": "Image Carousel",
                    "oldDesign": "Wide central image with a horizontal filmstrip below, requiring extra clicks to navigate.",
                    "newDesign": "Larger, high-contrast image carousel with better spacing and improved thumbnail interaction."
                },
                {
                    "element": "Advertiser Information",
                    "oldDesign": "Listed below the image carousel with less hierarchy, making it easy to miss.",
                    "newDesign": "Clearly separated section with distinct labels, improving user focus on relevant information."
                },
                {
                    "element": "Metadata & External Links",
                    "oldDesign": "Buried in the UI with small links, making it harder to access external tools.",
                    "newDesign": "Dedicated External Links and Metadata sections with improved button visibility."
                },
                {
                    "element": "Download & Actions",
                    "oldDesign": "Small, scattered buttons for copying text or downloading images.",
                    "newDesign": "Centralized Download Images button, improving accessibility and reducing clutter."
                }
            ],
            implementationNotes: 'New image lazy loading system implemented to improve page load performance.',
            whyThisMatters: {
                description: 'The Listing Details redesign improves information hierarchy and scanning patterns, making it easier for users to find critical information quickly.',
                uxResources: [
                    {
                        title: 'Visual Hierarchy',
                        url: 'https://www.nngroup.com/articles/visual-hierarchy-ux-definition/'
                    },
                    {
                        title: 'F-Pattern',
                        url: 'https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/'
                    },
                    {
                        title: 'Content Organization',
                        url: 'https://www.nngroup.com/articles/content-organization/'
                    }
                ]
            }
        }
    },


    {
        "old": "images/1E-old.jpg",
        "new": "images/1E-new.jpg",
        "label": "Conversations",
        "description": "The Conversation Overview page has been redesigned to provide better clarity, usability, and consistency for customer service agents when reviewing interactions between advertisers and respondents. The new design introduces a parent card that improves contextual navigation, ensuring users can easily identify the listing associated with a conversation. Additionally, UI adjustments have streamlined message readability, improved user role identification, and made moderation tools more accessible and structured.",
        "details": {
            "title": "Conversation Overview Redesign",
            "figmaLink": "https://www.figma.com/design/2MoX9p4NZbALEiM5jXOSXD/CSX-Nexus-Warp?node-id=960-6600&t=8nJcNQ8N02OMv092-4",
            "overview": "The Conversation Overview page has been redesigned to provide better clarity, usability, and consistency for customer service agents when reviewing interactions between advertisers and respondents. The new design introduces a parent card that improves contextual navigation, ensuring users can easily identify the listing associated with a conversation. Additionally, UI adjustments have streamlined message readability, improved user role identification, and made moderation tools more accessible and structured.",
            "designChanges": [
                {
                    "element": "Parent Card for Context",
                    "oldDesign": "Object card is ambiguously placed in the same section as users",
                    "newDesign": "Clearly structured parent card at the top, providing immediate listing context"
                },
                {
                    "element": "Showing extra user information",
                    "oldDesign": "Displayed in a dropdown, requiring extra vertical space",
                    "newDesign": "Clear button to expand user information"
                },
                {
                    "element": "Conversation Layout",
                    "oldDesign": "Full-width chat with uneven spacing",
                    "newDesign": "More structured message alignment, matching well known chat interfaces, improving readability"
                },
            ],
            "implementationNotes": "New structured message layout and always-visible role indicators improve workflow efficiency.",
            "whyThisMatters": {
                "description": "The redesign improves information hierarchy and scanning patterns, making it easier for agents to find critical details quickly while ensuring consistency across internal tools.",
                "uxResources": [
                    {
                        "title": "Law of Proximity",
                        "url": "https://lawsofux.com/law-of-proximity/"
                    },
                    {
                        "title": "Fitts's Law",
                        "url": "https://lawsofux.com/fittss-law/"
                    },
                    {
                        "title": "Miller's Law",
                        "url": "https://lawsofux.com/millers-law/"
                    }
                ]
            }
        }
    },


];

let currentIndex = 0;
let currentCompare = null; // Track current comparison instance

// Add error handling for images
function handleImageError(event) {
    console.error(`Error loading image: ${event.target.src}`);
    event.target.style.backgroundColor = '#f0f0f0';
}

// Update the comparison slider with new images and details
function updateComparison(index) {
    console.log('Updating comparison for index:', index);
    const mainContent = document.querySelector('main > div');
    const compareContainer = document.getElementById('image-compare');
    
    // Exit animation
    mainContent.classList.add('page-exit');
    
    setTimeout(() => {
        // Cleanup previous instance
        if (currentCompare) {
            console.log('Destroying previous instance');
            currentCompare.destroy();
        }
        
        // Update the images
        compareContainer.innerHTML = `
            <img src="${imagePairs[index].old}" alt="Old design" />
            <img src="${imagePairs[index].new}" alt="New design" />
        `;

        console.log('Creating new comparison with images:', {
            old: imagePairs[index].old,
            new: imagePairs[index].new
        });

        // Initialize comparison slider with options
        const options = {
            controlColor: "#ff8181",
            controlShadow: false,
            addCircle: false,
            addCircleBlur: false,
            fluidMode: true,
            fluidSpeed: 300,
            hoverStart: false,
            verticalMode: false,
            startingPoint: 50,
            showLabels: true,
            labelOptions: {
                before: 'Before',
                after: 'After',
                onHover: true,
            }
        };
        
        try {
            // Create new instance
            currentCompare = new ImageCompare(compareContainer, options).mount();
            console.log('Successfully mounted new comparison');
        } catch (error) {
            console.error('Error mounting comparison:', error);
        }
        
        // Update details
        updateDetailedInfo(imagePairs[index].details);

        // Animation sequence
        mainContent.classList.remove('page-exit');
        requestAnimationFrame(() => {
            mainContent.classList.add('page-enter');
            requestAnimationFrame(() => {
                mainContent.classList.add('page-enter-active');
            });
        });

        // Cleanup animation classes
        setTimeout(() => {
            mainContent.classList.remove('page-enter', 'page-enter-active');
        }, 500);
    }, 300);
}

// Function to update the detailed information section
function updateDetailedInfo(details) {
    const detailsContainer = document.querySelector('.detailed-info');
    
    // Create the content
    const content = `
        <div class="px-4 md:px-2">
            <h2 class="text-2xl font-bold mb-6">${details.title}</h2>
            <p class="mb-8 text-gray-600 dark:text-gray-300">${details.overview}</p>
        </div>
        
        <div class="table-container">
            <table class="design-changes-table w-full mb-8">
                <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th class="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Element</th>
                        <th class="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Old Design</th>
                        <th class="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">New Design</th>
                    </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    ${details.designChanges.map(change => `
                        <tr>
                            <td class="text-sm font-medium text-gray-900 dark:text-gray-100">${change.element}</td>
                            <td class="text-sm text-gray-500 dark:text-gray-400">${change.oldDesign}</td>
                            <td class="text-sm text-gray-900 dark:text-gray-100">${change.newDesign}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="px-4 md:px-2">
            <h3 class="text-xl font-bold mb-4">Why This Matters</h3>
            <p class="mb-6 text-gray-600 dark:text-gray-300">${details.whyThisMatters.description}</p>
            
            <div class="space-y-2">
                <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Learn more about UX principles:</h4>
                <div class="flex flex-wrap gap-3">
                    ${details.whyThisMatters.uxResources.map(resource => `
                        <a href="${resource.url}" target="_blank" 
                           class="inline-flex items-center gap-1 px-3 py-1 text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                            ${resource.title}
                        </a>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    detailsContainer.innerHTML = content;
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileMenu = document.getElementById('mobile-menu');

    function openMobileMenu() {
        mobileNav.classList.remove('hidden');
        // Wait a tiny bit before sliding in to ensure the display change has taken effect
        requestAnimationFrame(() => {
            mobileMenu.classList.remove('translate-x-full');
        });
    }

    function closeMobileMenu() {
        mobileMenu.classList.add('translate-x-full');
        // Wait for animation to finish before hiding
        setTimeout(() => {
            mobileNav.classList.add('hidden');
        }, 300);
    }

    mobileMenuButton.addEventListener('click', openMobileMenu);
    closeMobileMenuButton.addEventListener('click', closeMobileMenu);
    
    // Close menu when clicking outside
    mobileNav.addEventListener('click', (e) => {
        if (e.target === mobileNav) {
            closeMobileMenu();
        }
    });
}

// Update createNavigationItems to handle both desktop and mobile
function createNavigationItems() {
    const navList = document.getElementById('navigationList');
    const mobileNavList = document.getElementById('mobileNavigationList');
    
    if (!navList || !mobileNavList) {
        console.error('Navigation list elements not found!');
        return;
    }
    
    // Clear existing items
    navList.innerHTML = '';
    mobileNavList.innerHTML = '';
    
    imagePairs.forEach((pair, index) => {
        // Desktop navigation item
        const item = document.createElement('li');
        item.innerHTML = `
            <button class="nav-item w-full text-left font-bold text-xs ${
                index === currentIndex ? 
                'text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50' : 
                'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
            }" onclick="handleNavClick(${index})">
                <span class="text-xs font-bold uppercase tracking-wider">${pair.label}</span>
            </button>
        `;
        navList.appendChild(item);
        
        // Mobile navigation item
        const mobileItem = document.createElement('li');
        mobileItem.innerHTML = `
            <button class="w-full text-left py-3 px-4 rounded-lg font-bold ${
                index === currentIndex ? 
                'text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' : 
                'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
            }" onclick="handleMobileNavClick(${index})">
                <span class="text-sm uppercase tracking-wider">${pair.label}</span>
            </button>
        `;
        mobileNavList.appendChild(mobileItem);
    });
}

// Handle mobile navigation clicks
window.handleMobileNavClick = function(index) {
    handleNavClick(index);
    // Close mobile menu after selection
    const mobileNav = document.getElementById('mobile-nav');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('translate-x-full');
    setTimeout(() => {
        mobileNav.classList.add('hidden');
    }, 300);
};

// Define handleNavClick once at the top level
window.handleNavClick = function(index) {
    console.log('Navigation clicked:', index);
    currentIndex = index;
    
    // Update active states for both desktop and mobile navigation
    document.querySelectorAll('.nav-item, #mobileNavigationList button').forEach((item, i) => {
        if (i === index) {
            if (item.classList.contains('nav-item')) {
                item.className = 'nav-item w-full text-left font-bold text-xs text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50';
            } else {
                item.className = 'w-full text-left py-3 px-4 rounded-lg font-bold text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30';
            }
        } else {
            if (item.classList.contains('nav-item')) {
                item.className = 'nav-item w-full text-left font-bold text-xs text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50';
            } else {
                item.className = 'w-full text-left py-3 px-4 rounded-lg font-bold text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50';
            }
        }
    });
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    updateComparison(index);
    updateNavButtons();
};

// Add getIconForLabel function
function getIconForLabel(label) {
    // Custom icon based on label
    if (label.toLowerCase().includes('listing')) {
        return `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>`;
    }
    // Default icon
    return `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
              d="M4 6h16M4 12h16M4 18h7" />
    </svg>`;
}

// Theme toggle functionality
function initializeTheme() {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || 
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
        document.documentElement.classList.add('dark');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
        document.documentElement.classList.remove('dark');
    }

    themeToggleBtn.addEventListener('click', function() {
        // Toggle icons
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // If is set in localStorage
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    });
}

function initializeNavButtons() {
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    const prevButtonDesktop = document.getElementById('prev-page-desktop');
    const nextButtonDesktop = document.getElementById('next-page-desktop');

    window.updateNavButtons = function() {
        const isFirst = currentIndex === 0;
        const isLast = currentIndex === (imagePairs.length - 1);
        
        // Update button states
        [
            { button: prevButton, disabled: isFirst },
            { button: nextButton, disabled: isLast },
            { button: prevButtonDesktop, disabled: isFirst },
            { button: nextButtonDesktop, disabled: isLast }
        ].forEach(({ button, disabled }) => {
            button.disabled = disabled;
            button.classList.toggle('opacity-50', disabled);
            button.classList.toggle('cursor-not-allowed', disabled);
        });
    };

    // Navigation handlers
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            handleNavClick(currentIndex - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < imagePairs.length - 1) {
            handleNavClick(currentIndex + 1);
        }
    });

    prevButtonDesktop.addEventListener('click', () => {
        if (currentIndex > 0) {
            handleNavClick(currentIndex - 1);
        }
    });

    nextButtonDesktop.addEventListener('click', () => {
        if (currentIndex < imagePairs.length - 1) {
            handleNavClick(currentIndex + 1);
        }
    });

    // Initialize button states
    updateNavButtons();
}

// Update initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing...');
    createNavigationItems();
    initializeTheme();
    initializeMobileMenu();
    initializeNavButtons();
    updateComparison(0);
}); 