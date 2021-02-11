let slides = document.querySelectorAll('.main__slider>picture'),
    slideIndex = 1;
function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    slides.forEach((item) => item.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
};

setInterval(function slide() {
    showSlides(slideIndex);
    slideIndex++;
    setTimeout(7000);
}, 7000);

showSlides(slideIndex);



