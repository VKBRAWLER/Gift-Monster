const productImages = document.querySelectorAll('.product-images img');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');
let currentIndex = 0;

function showImage(index) {
    productImages.forEach((img, i) => {
        if (i === index) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= productImages.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = productImages.length - 1;
    }
    showImage(currentIndex);
});

// Initial display
showImage(currentIndex);
