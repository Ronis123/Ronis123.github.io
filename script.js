// Begging the carousel 1

let currentImageIndex = 0;
const images = document.querySelectorAll(".fotos .carousel");
const dotsNew = document.querySelectorAll(".dots-container .dot");
const totalImages = images.length;

// Function to hide all images and remove the class "active the balls.
function hideAllImagesNew() {
    images.forEach(img => img.style.display = "none");
    dotsNew.forEach(dot => dot.classList.remove("active"));
}

// Function the show the atual image and active the correspondent ball.
function showImageNew(index) {
    hideAllImagesNew();
    images[index].style.display = "block";
    dotsNew[index].classList.add("active");
}

// Function to show the next image.
function nextImageNew() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImageNew(currentImageIndex);
}

// Function to show the old image.
function prevImageNew() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImageNew(currentImageIndex);
}

// Function to show especific image when clink in ball.
function currentImage(index) {
    currentImageIndex = index;
    showImageNew(currentImageIndex);
}

// Starting the carousel automatically the each 2 second.
setInterval(nextImageNew, 2000);

// Display the first image to load page.
document.addEventListener("DOMContentLoaded", function() {
    showImage(currentImageIndex);
});

// Starting the Carousel 2
let currentImageIndexNew = 0;
const imagesNew = document.querySelectorAll(".fotos-novas .carousel-image");
const totalImagesNew = imagesNew.length;

// Function to hide all images
function hideAllImages() {
    imagesNew.forEach(img => img.style.display = "none");

}

// Function to atual image show 
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
