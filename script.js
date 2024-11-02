let currentImageIndex = 0;
const images = document.querySelectorAll(".galery .fotos img");
const totalImages = images.length;

// Função para esconder todas as imagens
function hideAllImages() {
    images.forEach(img => img.style.display = "none");
}

// Função para mostrar a próxima imagem
function showNextImage() {
    hideAllImages();
    images[currentImageIndex].style.display = "block";
    currentImageIndex = (currentImageIndex + 1) % totalImages;
}

// Inicia o carrossel automaticamente a cada 3 segundos
setInterval(showNextImage, 3000);

// Exibe a primeira imagem ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    hideAllImages();
    showNextImage();
});

