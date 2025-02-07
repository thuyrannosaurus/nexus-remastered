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
            keyChanges: [
                'Modernized filter system with instant search results',
                'Improved layout hierarchy for better scanability',
                'Added quick action buttons for common filters',
                'Enhanced mobile responsiveness for better usability'
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
            keyChanges: [
                'Reorganized content hierarchy',
                'Added image gallery improvements',
                'Enhanced contact information visibility',
                'Improved sharing capabilities'
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
                
                <ul class="list-disc pl-5 space-y-2 text-gray-600">
                    ${details.keyChanges.map(change => `<li>${change}</li>`).join('')}
                </ul>
            </div>

            <!-- Additional context -->
            <div class="mt-6 pt-6 border-t border-gray-100">
                <h3 class="text-lg font-semibold text-gray-800 mb-3">Implementation Notes</h3>
                <p class="text-gray-600">${details.implementationNotes}</p>
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