//Button to change image in item.html
const productImages = document.querySelectorAll('.imgBox .item-slide');
const nextButton = document.querySelector('.nextBtn');
const prevButton = document.querySelector('.prevBtn');
let currentIndex = 0;
function showImage(index) {
    productImages.forEach((img, i) => {
        if (i === index) { img.classList.add('visible'); }
        else { img.classList.remove('visible'); }
    });}
nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= productImages.length) { currentIndex = 0; }
    showImage(currentIndex); });
prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) { currentIndex = productImages.length - 1; }
    showImage(currentIndex); });
// Initial display
showImage(currentIndex);