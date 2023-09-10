// SlideShow Animation for index.html
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) { slide.style.display = 'block'; } 
        else { slide.style.display = 'none'; }
    });}
function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) { currentSlide = 0; }
    showSlide(currentSlide); }
// Automatically advance to the next slide every 3 seconds
setInterval(nextSlide, 3000);
// Initial display
showSlide(currentSlide);


//Button to change image in item.html
const productImages = document.querySelectorAll('.imgBox img');
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