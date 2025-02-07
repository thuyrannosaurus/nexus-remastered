// Image pairs configuration
const imagePairs = [
    { old: 'images/1A-old.jpg', new: 'images/1A-new.jpg' },
    { old: 'images/2A-old.jpg', new: 'images/2A-new.jpg' },
    { old: 'images/3A-old.jpg', new: 'images/3A-new.jpg' },
    // Add more image pairs as needed
];

let currentIndex = 0;

// Add error handling for images
function handleImageError(event) {
    console.error(`Error loading image: ${event.target.src}`);
    event.target.style.backgroundColor = '#f0f0f0'; // Add a background color to show where image should be
}

// Initialize the thumbnail gallery
function initThumbnails() {
    const container = document.getElementById('thumbnailContainer');
    
    imagePairs.forEach((pair, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail cursor-pointer transition-all ${index === currentIndex ? 'ring-2 ring-blue-500' : ''}`;
        thumbnail.innerHTML = `
            <img src="${pair.new}" alt="Thumbnail ${index + 1}" 
                 class="w-24 h-24 object-cover rounded-lg hover:opacity-80 transition-opacity" />
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
    
    // Add error handling to images
    firstImage.onerror = handleImageError;
    secondImage.onerror = handleImageError;
    
    firstImage.src = imagePairs[index].old;
    secondImage.src = imagePairs[index].new;
    
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
document.addEventListener('DOMContentLoaded', initThumbnails); 