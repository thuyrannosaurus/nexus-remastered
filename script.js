// Image pairs configuration - organized by page numbers and subpages
const imagePairs = [
    { 
        old: 'images/1A-old.jpg', 
        new: 'images/1A-new.jpg', 
        label: 'Page 1A',
        description: 'Updated the navigation menu with a cleaner layout and improved visibility of menu items.'
    },
    { 
        old: 'images/1B-old.jpg', 
        new: 'images/1B-new.jpg', 
        label: 'Page 1B',
        description: 'Redesigned the search interface with modern filters and better spacing.'
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

// Update the comparison slider with new images
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
    
    // Update thumbnail selection
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.className = `thumbnail cursor-pointer transition-all ${i === index ? 'ring-2 ring-blue-500' : ''}`;
    });
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