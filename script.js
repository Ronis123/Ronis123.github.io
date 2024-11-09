let currentImageIndex = 0;
const images = document.querySelectorAll(".galery .fotos img");
const totalImages = images.length;

// Function to hide all images 
function hideAllImages() {
    images.forEach(img => img.style.display = "none");
}

// Function to show the next image
function showNextImage() {
    hideAllImages();
    images[currentImageIndex].style.display = "block";
    currentImageIndex = (currentImageIndex + 1) % totalImages;
}

// Starting the Carousel automatically in two second
setInterval(showNextImage, 2000);

// Display the first image to load the page
document.addEventListener("DOMContentLoaded", function() {
    hideAllImages();
    showNextImage();
});

// Starting the Carousel 2
let currentImageIndexNew = 0;
const imagesNew = document.querySelectorAll(".fotos-novas .carousel-image");
const totalImagesNew = imagesNew.length;

// Function to hide all images
function hideAllImages() {
    imagesNew.forEach(img => img.style.display = "none");

}

// Function to image atual show 
function showImage(index) {
    hideAllImages();
    imagesNew[index].style.display = "block";
}

// Function to display next image
function nextImage() {
    currentImageIndexNew = (currentImageIndexNew + 1) % totalImagesNew;
    showImage(currentImageIndexNew);
}

// Function to display old image
function prevImage() {
    currentImageIndexNew = (currentImageIndexNew - 1 + totalImagesNew) % totalImagesNew;
    showImage(currentImageIndexNew);
}

// Starting the carousel automatically the each 2 second.
setInterval(nextImage, 2000);

// Display the first image to load page.
document.addEventListener("DOMContentLoaded", function() {
    showImage(currentImageIndexNew);
});

