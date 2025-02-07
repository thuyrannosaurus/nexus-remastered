// Image pairs configuration - organized by page numbers and subpages
const imagePairs = [
    { 
        old: 'images/1A-old.jpg', 
        new: 'images/1A-new.jpg', 
        label: 'Listings Search',
        description: 'Updated the navigation menu with a cleaner layout and improved visibility of menu items.',
        details: {
            title: 'Listings Search Redesign',
            figmaLink: 'https://www.figma.com/design/2MoX9p4NZbALEiM5jXOSXD/CSX-Nexus-Warp?node-id=898-12881&t=PXwuZq06uLH9iDqa-4',
            overview: 'The listings search interface has been completely revamped to provide a more intuitive and efficient search experience.',
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
            implementationNotes: 'The new search interface uses advanced caching techniques and debounced search to ensure smooth performance even with large datasets.'
        }
    },
    { 
        old: 'images/1B-old.jpg', 
        new: 'images/1B-new.jpg', 
        label: 'Page 1B',
        description: 'Redesigned the search interface with modern filters and better spacing.',
        details: {
            title: 'Listing Details View',
            figmaLink: 'https://www.figma.com/design/2MoX9p4NZbALEiM5jXOSXD/CSX-Nexus-Warp?node-id=977-13515&t=PXwuZq06uLH9iDqa-11',
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
            implementationNotes: 'New image lazy loading system implemented to improve page load performance.'
        }
    },
    // Add more image pairs as needed
];

let currentIndex = 0;

// Add error handling for images
function handleImageError(event) {
    console.error(`Error loading image: ${event.target.src}`);
    event.target.style.backgroundColor = '#f0f0f0';
}

// Initialize the thumbnail gallery
function initThumbnails() {
    const container = document.getElementById('thumbnailContainer');
    
    imagePairs.forEach((pair, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail cursor-pointer transition-all ${index === currentIndex ? 'ring-2 ring-blue-500' : ''}`;
        thumbnail.innerHTML = `
            <div class="relative">
                <img src="${pair.new}" 
                     alt="Design ${index + 1}" 
                     class="w-24 h-24 object-cover rounded-lg hover:opacity-80 transition-opacity"
                     onerror="handleImageError(event)" />
                <span class="absolute bottom-1 left-1 text-xs bg-black/50 text-white px-1.5 py-0.5 rounded">
                    ${pair.label}
                </span>
            </div>
        `;
        thumbnail.addEventListener('click', () => updateComparison(index));
        container.appendChild(thumbnail);
    });
}

// Update the comparison slider with new images and details
function updateComparison(index) {
    currentIndex = index;
    const comparisonSlider = document.querySelector('img-comparison-slider');
    const firstImage = comparisonSlider.querySelector('[slot="first"]');
    const secondImage = comparisonSlider.querySelector('[slot="second"]');
    
    firstImage.onerror = handleImageError;
    secondImage.onerror = handleImageError;
    
    firstImage.src = imagePairs[index].old;
    secondImage.src = imagePairs[index].new;
    
    // Update description
    const descriptionElement = document.getElementById('designDescription');
    descriptionElement.textContent = imagePairs[index].description;
    
    // Update detailed information section
    updateDetailedInfo(imagePairs[index].details);
    
    // Update thumbnail selection
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.className = `thumbnail cursor-pointer transition-all ${i === index ? 'ring-2 ring-blue-500' : ''}`;
    });
}

// Function to update the detailed information section
function updateDetailedInfo(details) {
    const detailsSection = document.querySelector('.detailed-info');
    detailsSection.innerHTML = `
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">${details.title}</h2>
        
        <div class="space-y-6">
            <!-- Project links -->
            <div class="flex items-center gap-4">
                <a href="${details.figmaLink}" target="_blank" 
                   class="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800">
                    <img src="assets/icons/figmaIcon.png" alt="Figma" class="w-5 h-5 object-contain" />
                    View in Figma
                </a>
            </div>

            <!-- Main description -->
            <div class="prose max-w-none">
                <p class="text-gray-600 mb-4">${details.overview}</p>
            </div>

            <!-- Key Design Changes Table -->
            <div class="mt-8">
                <h3 class="text-xl font-semibold text-gray-800 mb-4">✨ Key Design Changes</h3>
                <div class="overflow-hidden rounded-lg border border-gray-200">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Element</th>
                                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Old Design</th>
                                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">New Design</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            ${details.designChanges.map(change => `
                                <tr>
                                    <td class="px-6 py-4 text-sm font-medium text-gray-900">${change.element}</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">${change.oldDesign}</td>
                                    <td class="px-6 py-4 text-sm text-gray-900">${change.newDesign}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// Navigation button handlers
document.getElementById('prevBtn').addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + imagePairs.length) % imagePairs.length;
    updateComparison(newIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % imagePairs.length;
    updateComparison(newIndex);
});

// Initialize thumbnails when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initThumbnails();
    // Set initial description
    const descriptionElement = document.getElementById('designDescription');
    descriptionElement.textContent = imagePairs[0].description;
}); 